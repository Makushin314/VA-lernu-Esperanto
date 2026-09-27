/* ============================================================
   VA CORE — данные, хранилище, XP, достижения
   Экосистема Vulpeto Abeleto · 2026
   ============================================================ */
(function (global) {
    'use strict';

    const STORAGE_KEY     = 'va_esperanto_v2';
    const THEME_KEY       = 'va_eo_theme';
    const SIDEBAR_POS_KEY = 'va_eo_sidebar_pos';
    const WELCOMED_KEY    = 'va_eo_welcomed';

    /* Курсы собираются из window.LESSONS_* (файлы data/courses-*.js) */
    const LESSONS = {
        a1: global.LESSONS_A1 || [],
        a2: global.LESSONS_A2 || [],
        b1: global.LESSONS_B1 || [],
        b2: global.LESSONS_B2 || []
    };

    // Диагностика
    if (global.LESSONS_A1 === undefined) {
        console.warn('VA: data/courses-a1.js не загружен! Проверь путь и порядок подключения.');
    }

    /* ---------- Состояние ---------- */
    function defaultData() {
        return {
            profile: {
                name: '',
                goal: 20,
                startedAt: new Date().toISOString(),
                streak: 0,
                lastActive: null,
                xpToday: 0,
                xpDate: null,
                xpTotal: 0
            },
            lessons:     {},
            flashcards:  {},
            unlockedAch: [],
            stats: {
                flashcardsToday:  0,
                flashcardsStreak: 0,
                flashcardsDate:   null
            }
        };
    }

    let data = defaultData();

    /* ---------- Хранилище ---------- */
    function loadData() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) return;
            const parsed = JSON.parse(raw);
            data = defaultData();
            Object.assign(data, parsed);
            data.profile = Object.assign(defaultData().profile, parsed.profile || {});
            data.stats   = Object.assign(defaultData().stats,   parsed.stats   || {});
        } catch (e) {
            console.warn('VA: ошибка загрузки данных', e);
            data = defaultData();
        }
    }

    function saveData() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch (e) {
            console.warn('VA: ошибка сохранения', e);
        }
    }

    /* ---------- Утилиты ---------- */
    function todayISO() {
        const d = new Date();
        return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    }

    function escapeHtml(s) {
        if (s == null) return '';
        return String(s)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function generateId() {
        return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
    }

    /* ---------- Прогресс ---------- */
    function getTotalLessonsDone() {
        return Object.keys(data.lessons).filter(id => data.lessons[id].completed).length;
    }

    function getCompletedCount(level) {
        const arr = LESSONS[level] || [];
        return arr.filter(l => data.lessons[l.id]).length;
    }

    function getLevelProgress(level) {
        const arr = LESSONS[level] || [];
        return arr.length ? getCompletedCount(level) / arr.length : 0;
    }

    function getTotalXp() {
        return data.profile.xpTotal || 0;
    }

    function getLearnedWordsCount() {
        return Object.keys(data.flashcards)
            .filter(k => (data.flashcards[k].box || 0) >= 4).length;
    }

    /* ---------- Серия дней ---------- */
    function updateStreak() {
        const today = todayISO();
        const last = data.profile.lastActive;
        if (last === today) return;

        if (last) {
            const diff = (new Date(today) - new Date(last)) / 86400000;
            if (diff === 1)      data.profile.streak = (data.profile.streak || 0) + 1;
            else if (diff > 1)   data.profile.streak = 1;
        } else {
            data.profile.streak = 1;
        }

        data.profile.lastActive = today;
        if (data.profile.xpDate !== today) {
            data.profile.xpDate  = today;
            data.profile.xpToday = 0;
        }
        saveData();
    }

    function addXp(amount) {
        const today = todayISO();
        if (data.profile.xpDate !== today) {
            data.profile.xpDate  = today;
            data.profile.xpToday = 0;
        }
        data.profile.xpToday = (data.profile.xpToday || 0) + amount;
        data.profile.xpTotal = (data.profile.xpTotal || 0) + amount;
        saveData();
        checkAchievements();
    }

    /* ---------- Достижения ---------- */
    const ACHIEVEMENTS = [
        { id: 'first_lesson', icon: '🌱', name: 'Первый шаг',    desc: 'Пройди первый урок',        check: () => getTotalLessonsDone() >= 1 },
        { id: 'a1_done',      icon: '🌿', name: 'A1 пройден',   desc: 'Заверши все уроки A1',      check: () => LESSONS.a1.length > 0 && getCompletedCount('a1') >= LESSONS.a1.length },
        { id: 'a2_done',      icon: '🌳', name: 'A2 пройден',   desc: 'Заверши все уроки A2',      check: () => LESSONS.a2.length > 0 && getCompletedCount('a2') >= LESSONS.a2.length },
        { id: 'b1_done',      icon: '🎄', name: 'B1 пройден',   desc: 'Заверши все уроки B1',      check: () => LESSONS.b1.length > 0 && getCompletedCount('b1') >= LESSONS.b1.length },
        { id: 'b2_done',      icon: '🏔', name: 'B2 пройден',   desc: 'Заверши все уроки B2',      check: () => LESSONS.b2.length > 0 && getCompletedCount('b2') >= LESSONS.b2.length },
        { id: 'streak3',      icon: '🔥', name: 'Три дня',       desc: 'Серия 3 дня подряд',        check: () => data.profile.streak >= 3 },
        { id: 'streak7',      icon: '💎', name: 'Неделя',        desc: 'Серия 7 дней подряд',       check: () => data.profile.streak >= 7 },
        { id: 'streak30',     icon: '👑', name: 'Месяц',         desc: 'Серия 30 дней подряд',      check: () => data.profile.streak >= 30 },
        { id: 'words50',      icon: '📚', name: '50 слов',       desc: 'Изучи 50 слов',             check: () => getLearnedWordsCount() >= 50 },
        { id: 'words150',     icon: '📖', name: '150 слов',      desc: 'Изучи 150 слов',            check: () => getLearnedWordsCount() >= 150 },
        { id: 'words300',     icon: '🏆', name: 'Vortara reĝo',  desc: 'Изучи все 300 слов',        check: () => getLearnedWordsCount() >= 300 },
        { id: 'xp500',        icon: '⭐', name: '500 XP',        desc: 'Набери 500 XP',             check: () => getTotalXp() >= 500 },
        { id: 'xp2000',       icon: '🌟', name: '2000 XP',       desc: 'Набери 2000 XP',            check: () => getTotalXp() >= 2000 }
    ];

    function checkAchievements() {
        let changed = false;
        ACHIEVEMENTS.forEach(a => {
            if (!data.unlockedAch.includes(a.id) && a.check()) {
                data.unlockedAch.push(a.id);
                changed = true;
                if (global.VAToast) global.VAToast.show(`🏆 Достижение: ${a.name}`);
            }
        });
        if (changed) saveData();
    }

    /* ---------- Обновление бейджей курсов в сайдбаре ---------- */
    /* ---------- Обновление бейджей курсов и слов в сайдбаре ---------- */
function getWordsTotal() {
    if (global.VA_WORDS && Array.isArray(global.VA_WORDS)) {
        return global.VA_WORDS.length;
    }
    return global.VA_WORDS_TOTAL || 0;
}

/* ---------- Обновление бейджей курсов и слов в сайдбаре ---------- */
function getWordsTotal() {
    if (global.VA_WORDS && Array.isArray(global.VA_WORDS) && global.VA_WORDS.length > 0) {
        return global.VA_WORDS.length;
    }
    if (global.VA_WORDS_TOTAL && global.VA_WORDS_TOTAL > 0) {
        return global.VA_WORDS_TOTAL;
    }
    return 0;
}

function updateNavBadges() {
    ['a1', 'a2', 'b1', 'b2'].forEach(function (lv) {
        const el = document.getElementById('navBadge' + lv.toUpperCase());
        if (!el) return;
        const arr = LESSONS[lv] || [];
        const total = arr.length;
        const done = getCompletedCount(lv);
        el.textContent = total > 0 ? (done + '/' + total) : '—';
    });

    const wordsEl = document.getElementById('navBadgeWords');
    if (!wordsEl) return;

    const totalWords = getWordsTotal();
    const learned = getLearnedWordsCount();

    if (totalWords > 0) {
        wordsEl.textContent = learned + '/' + totalWords;
    } else {
        // words.js не подключён — ставим заметный прочерк вместо фейкового «0/466»
        wordsEl.textContent = learned + '/—';
    }
}

    /* ---------- Озвучка эсперанто ---------- */
    function speakEo(text) {
        if (!('speechSynthesis' in window)) return;
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'eo';
        u.rate = 0.85;
        const voices = speechSynthesis.getVoices();
        const eoVoice = voices.find(v => v.lang && v.lang.startsWith('eo'));
        if (eoVoice) u.voice = eoVoice;
        speechSynthesis.cancel();
        speechSynthesis.speak(u);
    }

    /* ---------- Init ---------- */
    function init() {
        loadData();
        updateStreak();
    }

    /* ---------- Экспорт ---------- */
    global.VACore = {
        // Константы
        STORAGE_KEY, THEME_KEY, SIDEBAR_POS_KEY, WELCOMED_KEY,

        // Данные курсов и достижений
        LESSONS,
        ACHIEVEMENTS,

        // Прямой доступ к data (getter/setter для замены)
        get data() { return data; },
        set data(v) { data = v; saveData(); },

        // Методы
        defaultData,
        loadData,
        saveData,
        todayISO,
        escapeHtml,
        generateId,
        getTotalLessonsDone,
        getCompletedCount,
        getLevelProgress,
        getTotalXp,
        getLearnedWordsCount,
        updateStreak,
        addXp,
        checkAchievements,
        updateNavBadges,
        speakEo,
        init
    };

})(window);