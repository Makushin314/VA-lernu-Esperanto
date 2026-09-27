/* ============================================================
   VA HOME — главная страница (хаб)
   Экосистема Vulpeto Abeleto · 2026
   ============================================================ */
(function (global) {
    'use strict';

    const C = global.VACore;
    const escapeHtml = C.escapeHtml;

    const LEVELS_META = [
        { key: 'a1', icon: '🌱', name: 'A1 — Начальный',    desc: 'Алфавит, приветствия, базовая грамматика' },
        { key: 'a2', icon: '🌿', name: 'A2 — Базовый',      desc: 'Времена, наклонения, словообразование' },
        { key: 'b1', icon: '🌳', name: 'B1 — Средний',      desc: 'Причастия, коррелятивы, сложные предложения' },
        { key: 'b2', icon: '🌲', name: 'B2 — Продвинутый',  desc: 'Стилистика, литература, культура эсперанто' }
    ];

    /* ---------- Hero ---------- */
    function renderHero() {
        const name = C.data.profile.name || 'ученик';

        const heroName = document.getElementById('heroName');
        if (heroName) heroName.textContent = `Привет, ${name}! 👋`;

        const greeting = document.getElementById('homeGreeting');
        if (greeting) {
            greeting.textContent = C.data.profile.name
                ? `Saluton, ${C.data.profile.name}!`
                : 'Saluton!';
        }

        const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
        set('hsLessons', C.getTotalLessonsDone());
        set('hsStreak',  (C.data.profile.streak || 0) + '🔥');
        set('hsXp',      C.getTotalXp());
        set('hsWords',   C.getLearnedWordsCount());

        const goal = C.data.profile.goal || 20;
        const todayXp = C.data.profile.xpDate === C.todayISO() ? (C.data.profile.xpToday || 0) : 0;
        const pct = Math.min(100, Math.round(todayXp / goal * 100));

        const fill = document.getElementById('goalFill');
        const text = document.getElementById('goalText');
        if (fill) fill.style.width = pct + '%';
        if (text) text.textContent = `${todayXp} / ${goal} XP сегодня`;
    }

    function hasAnyLessons() {
        return ['a1', 'a2', 'b1', 'b2'].some(lv => (C.LESSONS[lv] || []).length > 0);
    }

    /* ---------- Найти следующий урок ---------- */
    function findNextLesson() {
        for (const level of ['a1', 'a2', 'b1', 'b2']) {
            const arr = C.LESSONS[level] || [];
            for (const lesson of arr) {
                if (!C.data.lessons[lesson.id]) return { level, lesson };
            }
        }
        return null;
    }

    /* ---------- Блок «Продолжить» ---------- */
    function renderContinue() {
        const cont = document.getElementById('continueCard');
        if (!cont) return;

        if (!hasAnyLessons()) {
            cont.innerHTML = `
                <div class="continue-card" style="background:linear-gradient(135deg, var(--card2) 0%, var(--card) 100%); border:1px dashed var(--border); box-shadow:none;">
                    <div>
                        <div class="cc-label">📚 Загрузка</div>
                        <div class="cc-title">Курсы ещё не подключены</div>
                    </div>
                </div>`;
            return;
        }

        const next = findNextLesson();

        if (!next) {
            cont.innerHTML = `
                <div class="continue-card" style="background:linear-gradient(135deg,#9C27B0 0%,#673AB7 100%);">
                    <div>
                        <div class="cc-label">🎉 Поздравляем</div>
                        <div class="cc-title">Все доступные курсы пройдены!</div>
                    </div>
                </div>`;
            return;
        }

        cont.innerHTML = `
            <a class="continue-card" href="courses/${next.level}.html#${next.lesson.id}">
                <div>
                    <div class="cc-label">${next.level.toUpperCase()} · Продолжить</div>
                    <div class="cc-title">${escapeHtml(next.lesson.title)}</div>
                </div>
                <span class="cc-btn">Открыть →</span>
            </a>`;
    }

    /* ---------- Сетка уровней ---------- */
    function renderLevels() {
        const grid = document.getElementById('levelsGrid');
        if (!grid) return;

        grid.innerHTML = LEVELS_META.map(l => {
            const arr = C.LESSONS[l.key] || [];
            const total = arr.length;
            const done = C.getCompletedCount(l.key);
            const pct = total ? Math.round(done / total * 100) : 0;
            const badgeCls = l.key === 'a1' ? '' : l.key;

            if (total === 0) {
                return `
                    <div class="level-card" style="opacity:0.45; cursor:default;">
                        <span class="level-badge ${badgeCls}">${l.key.toUpperCase()}</span>
                        <div class="level-name">${l.icon} ${l.name}</div>
                        <div class="level-desc">${l.desc}</div>
                        <div class="level-progress">
                            <div class="level-progress-fill" style="width:0%;"></div>
                        </div>
                        <div class="level-meta">Скоро появится</div>
                    </div>`;
            }

            return `
                <a class="level-card" href="courses/${l.key}.html">
                    <span class="level-badge ${badgeCls}">${l.key.toUpperCase()}</span>
                    <div class="level-name">${l.icon} ${l.name}</div>
                    <div class="level-desc">${l.desc}</div>
                    <div class="level-progress">
                        <div class="level-progress-fill" style="width:${pct}%;"></div>
                    </div>
                    <div class="level-meta">${done} / ${total} · ${pct}%</div>
                </a>`;
        }).join('');
    }

    /* ---------- Достижения ---------- */
    function renderAchievements() {
        const grid = document.getElementById('achGrid');
        if (!grid) return;

        grid.innerHTML = C.ACHIEVEMENTS.map(a => {
            const unlocked = C.data.unlockedAch.includes(a.id);
            return `
                <div class="ach ${unlocked ? 'unlocked' : ''}" title="${escapeHtml(a.desc)}">
                    <div class="ach-icon">${a.icon}</div>
                    <div class="ach-name">${escapeHtml(a.name)}</div>
                    <div class="ach-desc">${escapeHtml(a.desc)}</div>
                </div>`;
        }).join('');
    }

    /* ---------- Общий рендер ---------- */
    function render() {
        renderHero();
        renderContinue();
        renderLevels();
        renderAchievements();
        C.updateNavBadges();
    }

    /* ← ИСПРАВЛЕНО: убран дубликат updateNavBadges,
       оставлен алиас на VACore — на случай внешних вызовов */
    global.VAHome = { render, updateNavBadges: C.updateNavBadges };

})(window);