/* ============================================================
   VA FLASHCARDS — 5 режимов, SRS, спринт, словарь
   Экосистема Vulpeto Abeleto · 2026
   ============================================================ */
(function (global) {
    'use strict';

    const C = global.VACore;
    const WORDS = global.VA_WORDS || [];
    if (WORDS.length) global.VA_WORDS_TOTAL = WORDS.length;

    /* Индексы полей слова */
    const F_EO = 0, F_RU = 1, F_POS = 2, F_LEVEL = 3, F_LESSON = 4, F_CAT = 5;

    /* Интервалы SRS (в днях) */
    const SRS_INTERVALS = [0, 1, 2, 4, 7, 15, 30];
    const LABELS = ['Новое', 'Знакомо', 'Учу', 'Помню', 'Знаю', 'Мастер'];

    /* Названия уроков */
    const LESSON_NAMES = {
        'a1-l2':'Урок 2 · Приветствия','a1-l3':'Урок 3 · Местоимения','a1-l4':'Урок 4 · Существительные',
        'a1-l5':'Урок 5 · Числа','a1-l6':'Урок 6 · Дни и месяцы','a1-l7':'Урок 7 · Цвета и тело',
        'a1-l8':'Урок 8 · Семья','a1-l9':'Урок 9 · Глаголы','a1-l10':'Урок 10 · Еда',
        'a1-l11':'Урок 11 · Вопросы','a1-l13':'Урок 13 · Предлоги','a1-l14':'Урок 14 · Покупки',
        'a1-l15':'Урок 15 · Погода и природа','a2-l1':'Урок 1 · Условное наклонение',
        'a2-l2':'Урок 2 · Повелительное','a2-l3':'Урок 3 · Степени','a2-l5':'Урок 5 · si/sin/sia',
        'a2-l8':'Урок 8 · Предлоги','a2-l9':'Урок 9 · Приставки','a2-l10':'Урок 10 · Суффиксы',
        'a2-l11':'Урок 11 · Союзы','a2-l12':'Урок 12 · Словообразование','a2-l13':'Урок 13 · Время',
        'a2-l14':'Урок 14 · Транспорт','a2-l15':'Урок 15 · Здоровье','a2-l16':'Урок 16 · Дом и одежда',
        'b1-l1':'Урок 1 · Причастия активные','b1-l2':'Урок 2 · Причастия пассивные',
        'b1-l3':'Урок 3 · Страдательный залог','b1-l4':'Урок 4 · Сложные времена',
        'b1-l5':'Урок 5 · Деепричастия','b1-l6':'Урок 6 · Косвенная речь',
        'b1-l8':'Урок 8 · Согласование времён','b1-l9':'Урок 9 · Уступительные',
        'b1-l10':'Урок 10 · Целевые','b1-l12':'Урок 12 · Наречия','b1-l14':'Урок 14 · Словообразование',
        'b2-l1':'Урок 1 · Стили','b2-l2':'Урок 2 · Проза','b2-l3':'Урок 3 · Поэзия',
        'b2-l4':'Урок 4 · Перевод','b2-l5':'Урок 5 · Идиомы','b2-l7':'Урок 7 · Наука',
        'b2-l8':'Урок 8 · Медиа','b2-l9':'Урок 9 · История','b2-l10':'Урок 10 · Fundamento',
        'b2-l11':'Урок 11 · Писательство'
    };

    /* ──────────── СОСТОЯНИЕ ──────────── */
    const state = {
        mode: 'srs',                 // srs | type | reverse | sprint | dict
        currentWord: null,
        flipped: false,
        // спринт
        sprint: null,                // { timeLeft, score, timer, answered, correct }
        // временные флаги UI
        lastAnswerCorrect: null
    };

    /* ──────────── ВСПОМОГАТЕЛЬНОЕ ──────────── */

    function getBox(eo) {
        const f = C.data.flashcards[eo];
        return f ? (f.box || 0) : 0;
    }
    function getInterval(box) {
        return SRS_INTERVALS[Math.min(box, SRS_INTERVALS.length - 1)];
    }
    function isDue(eo) {
        const f = C.data.flashcards[eo];
        if (!f) return true;
        const days = (Date.now() - new Date(f.lastSeen || 0).getTime()) / 86400000;
        return days >= getInterval(f.box || 0);
    }
    function isLearned(eo) { return getBox(eo) >= 4; }
    function isFavorite(eo) {
        return Array.isArray(C.data.stats.favorites) && C.data.stats.favorites.indexOf(eo) !== -1;
    }
    function toggleFavorite(eo) {
        if (!Array.isArray(C.data.stats.favorites)) C.data.stats.favorites = [];
        const i = C.data.stats.favorites.indexOf(eo);
        if (i === -1) C.data.stats.favorites.push(eo);
        else C.data.stats.favorites.splice(i, 1);
        C.saveData();
    }

    function normalize(s) {
        return String(s || '').toLowerCase().trim().replace(/\s+/g, ' ').replace(/[!?.,;:'"]/g, '');
    }

    /* ──────────── ФИЛЬТРЫ ──────────── */

    function getFilters() {
        return {
            level:  document.getElementById('flLevel')?.value  || 'all',
            lesson: document.getElementById('flLesson')?.value || 'all',
            cat:    document.getElementById('flCat')?.value    || 'all',
            deck:   document.getElementById('flDeck')?.value   || 'all'
        };
    }

    function getPool() {
        const f = getFilters();
        return WORDS.filter(function (w) {
            if (f.level  !== 'all' && w[F_LEVEL]  !== f.level)  return false;
            if (f.lesson !== 'all' && w[F_LESSON] !== f.lesson) return false;
            if (f.cat    !== 'all' && w[F_CAT]    !== f.cat)    return false;

            const eo = w[F_EO];
            if (f.deck === 'new'       && C.data.flashcards[eo]) return false;
            if (f.deck === 'due'       && !isDue(eo))            return false;
            if (f.deck === 'learned'   && !isLearned(eo))        return false;
            if (f.deck === 'errors') {
                const fc = C.data.flashcards[eo];
                if (!fc || !fc.wrong || fc.wrong <= 0) return false;
            }
            if (f.deck === 'favorites' && !isFavorite(eo)) return false;
            return true;
        });
    }

    /* ──────────── СТАТИСТИКА ──────────── */

    function getGlobalStats() {
        const all = WORDS.map(w => w[F_EO]);
        const learned = all.filter(isLearned).length;
        const due = all.filter(isDue).length;
        return { learned, due, total: all.length };
    }

    function getDeckStats() {
        const pool = getPool();
        const learned = pool.filter(w => isLearned(w[F_EO])).length;
        return { pool: pool.length, learned };
    }

    function getForecast() {
        const now = Date.now();
        const b = { today: 0, tomorrow: 0, week: 0, later: 0 };
        WORDS.forEach(w => {
            const eo = w[F_EO];
            const f = C.data.flashcards[eo];
            if (!f) { b.today++; return; }
            const interval = getInterval(f.box || 0);
            const days = (now - new Date(f.lastSeen || 0).getTime()) / 86400000;
            const remaining = interval - days;
            if (remaining <= 0)       b.today++;
            else if (remaining <= 1)  b.tomorrow++;
            else if (remaining <= 7)  b.week++;
            else                      b.later++;
        });
        return b;
    }

    /* ──────────── СЛОВО ДНЯ ──────────── */

    function getWordOfDay() {
        if (!WORDS.length) return null;
        const today = C.todayISO();
        let hash = 0;
        for (let i = 0; i < today.length; i++) {
            hash = ((hash << 5) - hash) + today.charCodeAt(i);
            hash |= 0;
        }
        return WORDS[Math.abs(hash) % WORDS.length];
    }

    /* ──────────── ВЫБОР СЛОВА ──────────── */

    function pickWord() {
        const pool = getPool();
        if (!pool.length) return null;
        pool.sort((a, b) => getBox(a[F_EO]) - getBox(b[F_EO]));
        const topN = pool.slice(0, Math.max(5, Math.floor(pool.length / 3)));
        return topN[Math.floor(Math.random() * topN.length)];
    }

    function pickDistractors(correctWord, count) {
        const correctRu = correctWord[F_RU];
        const pool = WORDS.filter(w => w[F_RU] !== correctRu);
        const shuffled = pool.slice().sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    }

    /* ──────────── SRS-ЛОГИКА ──────────── */

    function applyAnswer(eo, correct) {
        const today = C.todayISO();
        const f = C.data.flashcards[eo] || { box: 0, correct: 0, wrong: 0 };
        if (correct) {
            f.box = Math.min(5, (f.box || 0) + 1);
            f.correct = (f.correct || 0) + 1;
        } else {
            f.box = Math.max(0, (f.box || 0) - 1);
            f.wrong = (f.wrong || 0) + 1;
        }
        f.lastSeen = new Date().toISOString();
        C.data.flashcards[eo] = f;

        /* Серия / дневная цель */
        if (C.data.stats.flashcardsDate !== today) {
            C.data.stats.flashcardsDate = today;
            C.data.stats.flashcardsStreak = 0;
            C.data.stats.flashcardsToday = 0;
        }
        C.data.stats.flashcardsStreak = (C.data.stats.flashcardsStreak || 0) + 1;
        C.data.stats.flashcardsToday  = (C.data.stats.flashcardsToday  || 0) + 1;

        C.addXp(1);
        C.saveData();
    }

    /* ──────────── РЕНДЕР: ВЕРХНЯЯ СТАТИСТИКА ──────────── */

    function renderStats() {
        const s = getGlobalStats();
        const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
        set('fsDue',     s.due);
        set('fsLearned', s.learned);
        set('fsTotal',   s.total);
        set('fsStreak',  C.data.stats.flashcardsStreak || 0);
    }

    /* ──────────── РЕНДЕР: СЛОВО ДНЯ ──────────── */

    function renderWordOfDay() {
        const box = document.getElementById('wordOfDay');
        if (!box) return;
        const w = getWordOfDay();
        if (!w) { box.innerHTML = ''; return; }

        const eo = w[F_EO], ru = w[F_RU], pos = w[F_POS], lvl = w[F_LEVEL];
        const learned = isLearned(eo);
        box.innerHTML = `
            <div class="wotd-head">
                <span class="wotd-label">🌟 Слово дня</span>
                <span class="level-pill ${lvl}">${lvl.toUpperCase()}</span>
            </div>
            <div class="wotd-body">
                <div class="wotd-eo">${eo}</div>
                <div class="wotd-ru">${ru}</div>
                <div class="wotd-pos">${pos}${learned ? ' · <span style="color:var(--green)">✓ изучено</span>' : ''}</div>
            </div>
            <button type="button" class="btn-icon wotd-audio" id="wotdAudio" title="Произнести">🔊</button>
        `;
        const btn = document.getElementById('wotdAudio');
        if (btn) btn.addEventListener('click', () => C.speakEo(eo));
    }

    /* ──────────── РЕНДЕР: ДНЕВНАЯ ЦЕЛЬ ──────────── */

    function renderDailyGoal() {
        const goal = C.data.stats.wordsGoal || 20;
        const today = C.todayISO();
        const done = C.data.stats.flashcardsDate === today
            ? (C.data.stats.flashcardsToday || 0) : 0;
        const pct = Math.min(100, Math.round(done / goal * 100));

        const fill = document.getElementById('fcgFill');
        const text = document.getElementById('fcgText');
        if (fill) fill.style.width = pct + '%';
        if (text) text.textContent = `${done} / ${goal} слов · ${pct}%`;
    }

    /* ──────────── РЕНДЕР: ПРОГРЕСС КОЛОДЫ + ПРОГНОЗ ──────────── */

    function renderDeckProgress() {
        const s = getDeckStats();
        const pct = s.pool ? Math.round(s.learned / s.pool * 100) : 0;

        const fill = document.getElementById('deckFill');
        const text = document.getElementById('deckStats');
        const title = document.getElementById('deckTitle');

        if (fill)  fill.style.width = pct + '%';
        if (text)  text.textContent = `${s.learned} из ${s.pool} · ${pct}%`;

        if (title) {
            const f = getFilters();
            const parts = [];
            if (f.level  !== 'all') parts.push(f.level.toUpperCase());
            if (f.lesson !== 'all') parts.push(LESSON_NAMES[f.lesson] || f.lesson);
            if (f.cat    !== 'all') parts.push(f.cat);
            if (f.deck === 'errors')    parts.push('⭐ Ошибки');
            if (f.deck === 'favorites') parts.push('❤ Избранное');
            title.textContent = parts.length ? parts.join(' · ') : 'Все слова';
        }

        /* Прогноз SRS */
        const fc = document.getElementById('fcForecast');
        if (fc) {
            const b = getForecast();
            fc.innerHTML = `
                <span class="fc-fc-item"><b>${b.today}</b> сегодня</span>
                <span class="fc-fc-item"><b>${b.tomorrow}</b> завтра</span>
                <span class="fc-fc-item"><b>${b.week}</b> за неделю</span>
                <span class="fc-fc-item"><b>${b.later}</b> позже</span>
            `;
        }
    }

    /* ──────────── ФИЛЬТРЫ: ЗАВИСИМЫЕ СПИСКИ ──────────── */

    function updateLessonOptions() {
        const levelSel = document.getElementById('flLevel');
        const lessonSel = document.getElementById('flLesson');
        if (!levelSel || !lessonSel) return;
        const level = levelSel.value;
        const seen = new Set();
        const lessons = [];
        WORDS.forEach(w => {
            if (level !== 'all' && w[F_LEVEL] !== level) return;
            if (!seen.has(w[F_LESSON])) {
                seen.add(w[F_LESSON]);
                lessons.push(w[F_LESSON]);
            }
        });
        lessons.sort((a, b) => {
            const [al, an] = a.split('-l'), [bl, bn] = b.split('-l');
            if (al !== bl) return al.localeCompare(bl);
            return (+an) - (+bn);
        });
        lessonSel.innerHTML = '<option value="all">Все уроки</option>' +
            lessons.map(id => `<option value="${id}">${LESSON_NAMES[id] || id}</option>`).join('');
        lessonSel.disabled = !lessons.length;
    }

    function updateCategoryOptions() {
        const level  = document.getElementById('flLevel')?.value  || 'all';
        const lesson = document.getElementById('flLesson')?.value || 'all';
        const catSel = document.getElementById('flCat');
        if (!catSel) return;
        const seen = new Set();
        const cats = [];
        WORDS.forEach(w => {
            if (level  !== 'all' && w[F_LEVEL]  !== level)  return;
            if (lesson !== 'all' && w[F_LESSON] !== lesson) return;
            if (!seen.has(w[F_CAT])) { seen.add(w[F_CAT]); cats.push(w[F_CAT]); }
        });
        cats.sort();
        catSel.innerHTML = '<option value="all">Все категории</option>' +
            cats.map(c => `<option value="${c}">${c}</option>`).join('');
        catSel.disabled = !cats.length;
    }

    /* ──────────── РЕЖИМ: SRS / НАОБОРОТ ──────────── */

    function renderCardSRS(reverse) {
        const zone = document.getElementById('cardZone');
        if (!zone) return;

        const word = pickWord();
        if (!word) { renderEmpty(zone); return; }
        state.currentWord = word;
        state.flipped = false;

        const eo = word[F_EO], ru = word[F_RU], pos = word[F_POS], lvl = word[F_LEVEL];
        const box = getBox(eo);
        const boxLabel = LABELS[Math.min(box, 5)];
        const fav = isFavorite(eo);

        const front = reverse ? ru : eo;
        const back  = reverse ? eo : ru;
        const frontCls = reverse ? 'flashcard-word ru' : 'flashcard-word';
        const backCls  = reverse ? 'flashcard-word' : 'flashcard-word ru';

        zone.innerHTML = `
            <div class="flashcard-wrap">
                <div class="flashcard" id="fc">
                    <div class="flashcard-face front">
                        <div class="flashcard-pos">${boxLabel} · ${pos} · <span class="level-pill ${lvl}">${lvl.toUpperCase()}</span></div>
                        <div class="${frontCls}">${front}</div>
                        <button type="button" class="btn-icon fc-fav ${fav ? 'active' : ''}" id="fcFav" title="Избранное">${fav ? '❤' : '♡'}</button>
                        <div class="flashcard-tap">Нажмите или Space — увидеть перевод</div>
                    </div>
                    <div class="flashcard-face back">
                        <div class="flashcard-pos">Перевод</div>
                        <div class="${backCls}">${back}</div>
                        <div class="flashcard-hint">${pos}</div>
                    </div>
                </div>
            </div>

            <div class="flashcard-tools">
                <button type="button" class="btn-icon" id="fcAudio" title="Произнести">🔊</button>
                <button type="button" class="btn-icon" id="fcFlip" title="Перевернуть">🔄</button>
                <button type="button" class="btn-icon" id="fcSkip" title="Пропустить">⏭</button>
            </div>

            <div class="flash-actions">
                <button type="button" class="flash-btn again" id="fcAgain">Не знаю <span class="kbd-inline">1</span></button>
                <button type="button" class="flash-btn good"  id="fcGood">Знаю <span class="kbd-inline">2</span></button>
            </div>
        `;

        const fc = document.getElementById('fc');
        fc.addEventListener('click', () => { fc.classList.toggle('flipped'); state.flipped = fc.classList.contains('flipped'); });
        document.getElementById('fcAudio').addEventListener('click', e => { e.stopPropagation(); C.speakEo(eo); });
        document.getElementById('fcFlip').addEventListener('click', e => { e.stopPropagation(); fc.classList.toggle('flipped'); state.flipped = fc.classList.contains('flipped'); });
        document.getElementById('fcSkip').addEventListener('click', e => { e.stopPropagation(); renderCardSRS(reverse); });
        document.getElementById('fcFav').addEventListener('click', e => {
            e.stopPropagation();
            toggleFavorite(eo);
            renderCardSRS(reverse);
            renderDeckProgress();
        });
        document.getElementById('fcAgain').addEventListener('click', () => {
            applyAnswer(eo, false);
            updateAfterAnswer();
            renderCardSRS(reverse);
        });
        document.getElementById('fcGood').addEventListener('click', () => {
            applyAnswer(eo, true);
            updateAfterAnswer();
            renderCardSRS(reverse);
        });
    }

    /* ──────────── РЕЖИМ: ПЕЧАТЬ ──────────── */

    function renderCardType() {
        const zone = document.getElementById('cardZone');
        if (!zone) return;

        const word = pickWord();
        if (!word) { renderEmpty(zone); return; }
        state.currentWord = word;

        const eo = word[F_EO], ru = word[F_RU], pos = word[F_POS], lvl = word[F_LEVEL];
        const box = getBox(eo);
        const boxLabel = LABELS[Math.min(box, 5)];
        const fav = isFavorite(eo);

        zone.innerHTML = `
            <div class="type-wrap">
                <div class="type-card">
                    <div class="flashcard-pos">${boxLabel} · ${pos} · <span class="level-pill ${lvl}">${lvl.toUpperCase()}</span></div>
                    <div class="flashcard-word">${eo}</div>
                    <button type="button" class="btn-icon type-audio" id="typeAudio" title="Произнести">🔊</button>

                    <div class="type-label">Введите перевод на русском:</div>
                    <input type="text" class="type-input" id="typeInput" placeholder="Например: дом" autocomplete="off" autocapitalize="off" spellcheck="false" />

                    <div class="type-result" id="typeResult"></div>
                </div>

                <div class="flashcard-tools">
                    <button type="button" class="btn-icon" id="typeSkip" title="Пропустить">⏭</button>
                    <button type="button" class="btn-icon fc-fav ${fav ? 'active' : ''}" id="typeFav" title="Избранное">${fav ? '❤' : '♡'}</button>
                </div>

                <div class="flash-actions">
                    <button type="button" class="flash-btn good" id="typeCheck">Проверить <span class="kbd-inline">Enter</span></button>
                </div>
            </div>
        `;

        const inp = document.getElementById('typeInput');
        const res = document.getElementById('typeResult');
        const btnCheck = document.getElementById('typeCheck');

        setTimeout(() => inp.focus(), 50);

        document.getElementById('typeAudio').addEventListener('click', () => C.speakEo(eo));
        document.getElementById('typeSkip').addEventListener('click', () => renderCardType());
        document.getElementById('typeFav').addEventListener('click', () => {
            toggleFavorite(eo);
            renderCardType();
            renderDeckProgress();
        });

        function submit() {
            if (inp.dataset.done === '1') { renderCardType(); return; }
            const val = normalize(inp.value);
            if (!val) return;
            inp.dataset.done = '1';
            const ok = val === normalize(ru);
            res.className = 'type-result show ' + (ok ? 'ok' : 'err');
            res.innerHTML = ok
                ? '✓ Правильно!'
                : `✕ Правильно: <b>${ru}</b>`;
            applyAnswer(eo, ok);
            updateAfterAnswer();
            setTimeout(() => { if (ok) renderCardType(); }, 900);
        }

        btnCheck.addEventListener('click', submit);
        inp.addEventListener('keydown', e => {
            if (e.key === 'Enter') { e.preventDefault(); submit(); }
        });
    }

    /* ──────────── РЕЖИМ: СПРИНТ ──────────── */

    function renderSprint() {
        const zone = document.getElementById('cardZone');
        if (!zone) return;

        if (!state.sprint) {
            zone.innerHTML = `
                <div class="sprint-start">
                    <div class="sprint-start-icon">⚡</div>
                    <h3>Спринт на 60 секунд</h3>
                    <p>Отвечай как можно быстрее. За каждый правильный ответ — +1. Ошибка не отнимает время, но прерывает серию.</p>
                    <button type="button" class="btn" id="sprintStart">Начать спринт →</button>
                </div>
            `;
            document.getElementById('sprintStart').addEventListener('click', startSprint);
            return;
        }

        renderSprintQuestion();
    }

    function startSprint() {
        state.sprint = { timeLeft: 60, score: 0, streak: 0, correct: 0, total: 0, timer: null };
        state.sprint.timer = setInterval(() => {
            state.sprint.timeLeft--;
            const el = document.getElementById('sprintTimer');
            if (el) el.textContent = state.sprint.timeLeft;
            if (state.sprint.timeLeft <= 0) endSprint();
        }, 1000);
        renderSprintQuestion();
    }

    function endSprint() {
        const s = state.sprint;
        clearInterval(s.timer);
        const zone = document.getElementById('cardZone');
        const accuracy = s.total ? Math.round(s.correct / s.total * 100) : 0;
        zone.innerHTML = `
            <div class="sprint-end">
                <div class="sprint-end-icon">🏁</div>
                <h3>Спринт завершён!</h3>
                <div class="sprint-end-stats">
                    <div class="sprint-end-stat"><div class="ses-num">${s.correct}</div><div class="ses-lbl">Правильно</div></div>
                    <div class="sprint-end-stat"><div class="ses-num">${s.total}</div><div class="ses-lbl">Всего</div></div>
                    <div class="sprint-end-stat"><div class="ses-num">${accuracy}%</div><div class="ses-lbl">Точность</div></div>
                </div>
                <button type="button" class="btn" id="sprintAgain">Ещё раз ⚡</button>
            </div>
        `;
        state.sprint = null;
        document.getElementById('sprintAgain').addEventListener('click', startSprint);
        updateAfterAnswer();
    }

    function renderSprintQuestion() {
        const zone = document.getElementById('cardZone');
        const s = state.sprint;
        if (!s) return;

        const pool = getPool();
        if (!pool.length) { endSprint(); return; }

        /* Режим показа: показать русский → выбрать эсперанто. 50/50. */
        const showEo = Math.random() < 0.5;
        const word = pool[Math.floor(Math.random() * pool.length)];
        const distractors = pickDistractors(word, 3);

        const correctAnswer = showEo ? word[F_RU] : word[F_EO];
        const promptText    = showEo ? word[F_EO] : word[F_RU];
        const options = [correctAnswer, ...distractors.map(d => showEo ? d[F_RU] : d[F_EO])]
            .sort(() => Math.random() - 0.5);

        zone.innerHTML = `
            <div class="sprint-wrap">
                <div class="sprint-top">
                    <div class="sprint-timer"><span id="sprintTimer">${s.timeLeft}</span> сек</div>
                    <div class="sprint-score">Очки: <b>${s.score}</b> · Серия: <b>${s.streak}</b></div>
                </div>
                <div class="sprint-prompt">
                    <div class="sprint-label">${showEo ? 'Что означает по-русски?' : 'Как по-эсперанто?'}</div>
                    <div class="sprint-word">${promptText}</div>
                </div>
                <div class="sprint-options">
                    ${options.map(o => `<button type="button" class="sprint-opt" data-ans="${o.replace(/"/g,'&quot;')}">${o}</button>`).join('')}
                </div>
            </div>
        `;

        zone.querySelectorAll('.sprint-opt').forEach(btn => {
            btn.addEventListener('click', () => {
                if (s.timeLeft <= 0) return;
                const ok = btn.dataset.ans === correctAnswer;
                s.total++;
                if (ok) { s.correct++; s.score++; s.streak = (s.streak || 0) + 1; }
                else    { s.streak = 0; }
                applyAnswer(word[F_EO], ok);
                renderSprintQuestion();
            });
        });
    }

    /* ──────────── ПУСТОЕ СОСТОЯНИЕ ──────────── */

    function renderEmpty(zone) {
        const f = getFilters();
        let hint = 'В этой колоде нет слов. Выберите другой курс, урок или категорию.';
        if (f.deck === 'new')       hint = 'Все новые слова в этой колоде уже открыты.';
        if (f.deck === 'due')       hint = 'Нет слов к повторению. Возвращайтесь позже.';
        if (f.deck === 'learned')   hint = 'В этой колоде пока нет изученных слов.';
        if (f.deck === 'errors')    hint = 'Пока нет слов с ошибками — отличная работа!';
        if (f.deck === 'favorites') hint = 'Нет избранных слов. Нажмите ❤ на карточке, чтобы добавить.';

        zone.innerHTML = `
            <div class="flash-empty">
                <div class="fe-icon">🎉</div>
                <div style="font-size:18px;font-weight:800;color:var(--text);margin-bottom:8px;">
                    Отлично!
                </div>
                <p>${hint}</p>
            </div>`;
    }

    /* ──────────── ОБНОВЛЕНИЕ ПОСЛЕ ОТВЕТА ──────────── */

    function updateAfterAnswer() {
        renderStats();
        renderDeckProgress();
        renderDailyGoal();
        C.updateNavBadges();
    }

    /* ──────────── РЕЖИМ: СЛОВАРЬ ──────────── */

    function renderVortaro(query) {
        const list = document.getElementById('vortaroList');
        if (!list) return;
        const f = getFilters();
        const q = (query || '').toLowerCase().trim();

        const filtered = WORDS.filter(w => {
            if (f.level  !== 'all' && w[F_LEVEL]  !== f.level)  return false;
            if (f.lesson !== 'all' && w[F_LESSON] !== f.lesson) return false;
            if (f.cat    !== 'all' && w[F_CAT]    !== f.cat)    return false;
            if (q) {
                const eo = w[F_EO].toLowerCase(), ru = w[F_RU].toLowerCase();
                if (!eo.includes(q) && !ru.includes(q)) return false;
            }
            return true;
        });

        const count = document.getElementById('dictCount');
        if (count) count.textContent = filtered.length + ' слов';

        if (!filtered.length) {
            list.innerHTML = `<div class="flash-empty"><div class="fe-icon">🔍</div><p>Ничего не найдено</p></div>`;
            return;
        }

        list.innerHTML = filtered.map(w => {
            const eo = w[F_EO], ru = w[F_RU], pos = w[F_POS], lvl = w[F_LEVEL];
            const learned = isLearned(eo);
            const fav = isFavorite(eo);
            return `
                <div class="vortaro-item">
                    <span class="vi-eo">${eo}</span>
                    <span class="vi-ru">${ru} ${learned ? '<span style="color:var(--green)">✓</span>' : ''}</span>
                    <span class="vi-pos">${pos} · ${lvl.toUpperCase()}</span>
                    <button type="button" class="btn-icon vi-fav ${fav ? 'active' : ''}" data-fav="${eo}" title="Избранное">${fav ? '❤' : '♡'}</button>
                    <button type="button" class="audio-btn" data-say="${eo}">🔊</button>
                </div>`;
        }).join('');

        list.querySelectorAll('[data-say]').forEach(b =>
            b.addEventListener('click', () => C.speakEo(b.dataset.say)));
        list.querySelectorAll('[data-fav]').forEach(b =>
            b.addEventListener('click', () => {
                toggleFavorite(b.dataset.fav);
                renderVortaro(query);
                renderDeckProgress();
            }));
    }

    /* ──────────── ЭКСПОРТ В ANKI ──────────── */

    function exportAnki() {
        const pool = getPool();
        const rows = pool.map(w => `${w[F_EO]}\t${w[F_RU]}\t${w[F_POS]}\t${w[F_LEVEL].toUpperCase()}`);
        const csv = 'eo\tru\tpos\tlevel\n' + rows.join('\n');
        const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `va-esperanto-anki-${C.todayISO()}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(a.href);
        if (global.VAToast) global.VAToast.show('Экспортировано ' + pool.length + ' слов');
    }

    /* ──────────── ПЕРЕКЛЮЧЕНИЕ РЕЖИМА ──────────── */

    function setMode(mode) {
        state.mode = mode;
        state.currentWord = null;
        state.flipped = false;
        state.sprint = null;

        document.querySelectorAll('.fc-tab').forEach(t => t.classList.toggle('active', t.dataset.mode === mode));

        const cardZone = document.getElementById('cardZone');
        const dictZone = document.getElementById('dictZone');

        if (mode === 'dict') {
            cardZone.style.display = 'none';
            dictZone.style.display = '';
            renderVortaro(document.getElementById('vortaroSearch')?.value || '');
            return;
        }

        cardZone.style.display = '';
        dictZone.style.display = 'none';

        if (mode === 'srs')        renderCardSRS(false);
        else if (mode === 'reverse') renderCardSRS(true);
        else if (mode === 'type')    renderCardType();
        else if (mode === 'sprint')  renderSprint();
    }

    /* ──────────── КЛАВИАТУРА ──────────── */

    function bindKeyboard() {
        document.addEventListener('keydown', e => {
            // игнорируем ввод в полях
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
                return; // input обрабатывает сам
            }
            if (!state.currentWord && state.mode !== 'srs' && state.mode !== 'reverse') return;

            const key = e.key;
            if (key === ' ' || key === 'Spacebar') {
                e.preventDefault();
                const fc = document.getElementById('fc');
                if (fc) { fc.classList.toggle('flipped'); state.flipped = fc.classList.contains('flipped'); }
            } else if (key === '1' && (state.mode === 'srs' || state.mode === 'reverse')) {
                document.getElementById('fcAgain')?.click();
            } else if (key === '2' && (state.mode === 'srs' || state.mode === 'reverse')) {
                document.getElementById('fcGood')?.click();
            } else if (key === 'f' || key === 'F') {
                if (state.currentWord) {
                    toggleFavorite(state.currentWord[F_EO]);
                    renderDeckProgress();
                    if (state.mode === 'srs' || state.mode === 'reverse') {
                        const btn = document.getElementById('fcFav');
                        if (btn) {
                            const fav = isFavorite(state.currentWord[F_EO]);
                            btn.classList.toggle('active', fav);
                            btn.textContent = fav ? '❤' : '♡';
                        }
                    } else if (state.mode === 'type') {
                        const btn = document.getElementById('typeFav');
                        if (btn) {
                            const fav = isFavorite(state.currentWord[F_EO]);
                            btn.classList.toggle('active', fav);
                            btn.textContent = fav ? '❤' : '♡';
                        }
                    }
                }
            }
        });
    }

    /* ──────────── ФИЛЬТРЫ ──────────── */

    function bindFilters() {
        const refreshAll = () => {
            updateLessonOptions();
            updateCategoryOptions();
            renderDeckProgress();
            renderStats();
            renderDailyGoal();
            // перезапустить текущий режим (кроме словаря — он просто рефильтрует)
            if (state.mode === 'dict') renderVortaro(document.getElementById('vortaroSearch')?.value || '');
            else setMode(state.mode);
        };

        ['flLevel', 'flLesson', 'flCat', 'flDeck'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('change', refreshAll);
        });
    }

    function bindTabs() {
        document.querySelectorAll('.fc-tab').forEach(tab => {
            tab.addEventListener('click', () => setMode(tab.dataset.mode));
        });
    }

    function bindVortaroSearch() {
        const search = document.getElementById('vortaroSearch');
        if (!search) return;
        search.addEventListener('input', e => renderVortaro(e.target.value));
    }

    function bindExport() {
        const btn = document.getElementById('dictExportAnki');
        if (btn) btn.addEventListener('click', exportAnki);
    }

    /* ──────────── МОНТИРОВАНИЕ ──────────── */

    function mount() {
        /* Миграция данных */
        if (!C.data.stats.wordsGoal) C.data.stats.wordsGoal = 20;
        if (!Array.isArray(C.data.stats.favorites)) C.data.stats.favorites = [];

        updateLessonOptions();
        updateCategoryOptions();

        renderStats();
        renderWordOfDay();
        renderDailyGoal();
        renderDeckProgress();

        bindFilters();
        bindTabs();
        bindVortaroSearch();
        bindExport();
        bindKeyboard();

        setMode('srs');
    }

    global.VAFlashcards = { mount, getGlobalStats };

})(window);