/* ============================================================
   VA ESPERANTO — КУРС A1 (18 уроков)
   По методике Бориса Колкера, расширенный
   Экосистема Vulpeto Abeleto · 2026
   ============================================================
   18 уроков: 12 базовых + 6 тематических (дни, цвета,
   семья, еда, покупки, погода).
   ============================================================ */

window.LESSONS_A1 = [

/* ═══════════════════════════════════════════════════════════
   УРОК 1: Алфавит и произношение
   ═══════════════════════════════════════════════════════════ */
{
  id: 'a1-l1',
  title: 'Alfabeto kaj Prononco',
  desc: '28 букв, особые ĉ ĝ ĥ ĵ ŝ ŭ, ударение',
  xp: 20,
  content: `
    <h3>🌍 Alfabeto de Esperanto</h3>
    <p>Эсперанто использует <b>латинский алфавит</b> из <b>28 букв</b>. Каждая буква читается <b>всегда одинаково</b> — нет исключений.</p>

    <h3>🔤 Полный алфавит</h3>
    <table>
      <tr><th>Буква</th><th>Звук</th><th>Пример</th><th>Перевод</th></tr>
      <tr><td>A a</td><td>а</td><td><span class="eo">a</span>nanaso</td><td>ананас</td></tr>
      <tr><td>B b</td><td>б</td><td><span class="eo">b</span>ona</td><td>хороший</td></tr>
      <tr><td>C c</td><td>ц</td><td><span class="eo">c</span>ent</td><td>сто</td></tr>
      <tr><td>Ĉ ĉ</td><td>ч</td><td><span class="eo">ĉ</span>ambro</td><td>комната</td></tr>
      <tr><td>D d</td><td>д</td><td><span class="eo">d</span>omo</td><td>дом</td></tr>
      <tr><td>E e</td><td>э</td><td><span class="eo">e</span>stas</td><td>есть</td></tr>
      <tr><td>F f</td><td>ф</td><td><span class="eo">f</span>loro</td><td>цветок</td></tr>
      <tr><td>G g</td><td>г</td><td><span class="eo">g</span>randa</td><td>большой</td></tr>
      <tr><td>Ĝ ĝ</td><td>дж</td><td><span class="eo">ĝ</span>ojo</td><td>радость</td></tr>
      <tr><td>H h</td><td>г (придых.)</td><td><span class="eo">h</span>omo</td><td>человек</td></tr>
      <tr><td>Ĥ ĥ</td><td>х</td><td><span class="eo">ĥ</span>oro</td><td>хор</td></tr>
      <tr><td>I i</td><td>и</td><td><span class="eo">i</span>ri</td><td>идти</td></tr>
      <tr><td>J j</td><td>й</td><td><span class="eo">j</span>una</td><td>молодой</td></tr>
      <tr><td>Ĵ ĵ</td><td>ж</td><td><span class="eo">ĵ</span>urnalo</td><td>газета</td></tr>
      <tr><td>K k</td><td>к</td><td><span class="eo">k</span>ato</td><td>кот</td></tr>
      <tr><td>L l</td><td>ль</td><td><span class="eo">l</span>ingvo</td><td>язык</td></tr>
      <tr><td>M m</td><td>м</td><td><span class="eo">m</span>ano</td><td>рука</td></tr>
      <tr><td>N n</td><td>н</td><td><span class="eo">n</span>okto</td><td>ночь</td></tr>
      <tr><td>O o</td><td>о</td><td><span class="eo">o</span>kulo</td><td>глаз</td></tr>
      <tr><td>P p</td><td>п</td><td><span class="eo">p</span>atro</td><td>отец</td></tr>
      <tr><td>R r</td><td>р</td><td><span class="eo">r</span>apida</td><td>быстрый</td></tr>
      <tr><td>S s</td><td>с</td><td><span class="eo">s</span>uno</td><td>солнце</td></tr>
      <tr><td>Ŝ ŝ</td><td>ш</td><td><span class="eo">ŝ</span>ati</td><td>ценить</td></tr>
      <tr><td>T t</td><td>т</td><td><span class="eo">t</span>ablo</td><td>стол</td></tr>
      <tr><td>U u</td><td>у</td><td><span class="eo">u</span>nu</td><td>один</td></tr>
      <tr><td>Ŭ ŭ</td><td>ў</td><td><span class="eo">aŭ</span>di</td><td>слышать</td></tr>
      <tr><td>V v</td><td>в</td><td><span class="eo">v</span>i</td><td>ты</td></tr>
      <tr><td>Z z</td><td>з</td><td><span class="eo">z</span>ebro</td><td>зебра</td></tr>
    </table>

    <h3>🔊 Шесть «шапочных» букв</h3>
    <table>
      <tr><th>Буква</th><th>Звук</th><th>Пример</th></tr>
      <tr><td>ĉ</td><td>ч</td><td>ĉambro — комната</td></tr>
      <tr><td>ĝ</td><td>дж</td><td>ĝojo — радость</td></tr>
      <tr><td>ĥ</td><td>х</td><td>ĥoro — хор</td></tr>
      <tr><td>ĵ</td><td>ж</td><td>ĵurnalo — газета</td></tr>
      <tr><td>ŝ</td><td>ш</td><td>ŝati — ценить</td></tr>
      <tr><td>ŭ</td><td>ў</td><td>aŭdi — слышать</td></tr>
    </table>

    <h3>💡 Три главных правила</h3>
    <div class="lesson-tip"><b>1. Ударение — всегда на предпоследнем слоге.</b><br><span class="eo">do-MO</span>, <span class="eo">ka-TI-no</span>, <span class="eo">ES-pe-ran-to</span>.</div>
    <div class="lesson-tip"><b>2. Каждая буква = один звук, всегда.</b><br>Нет «немых» букв, нет исключений.</div>
    <div class="lesson-tip"><b>3. Согласные не смягчаются перед i и e.</b><br><span class="eo">teniso</span> = «тэ-ни-со» (твёрдо).</div>

    <h3>🔤 x-система</h3>
    <p>Если нет эсперанто-клавиатуры — используй x-систему:</p>
    <table>
      <tr><th>Вводишь</th><th>Получаешь</th></tr>
      <tr><td>cx</td><td>ĉ</td></tr>
      <tr><td>gx</td><td>ĝ</td></tr>
      <tr><td>hx</td><td>ĥ</td></tr>
      <tr><td>jx</td><td>ĵ</td></tr>
      <tr><td>sx</td><td>ŝ</td></tr>
      <tr><td>ux</td><td>ŭ</td></tr>
    </table>

    <h3>✍️ Примеры чтения</h3>
    <div class="lesson-example"><span class="eo">La domo</span> → «ла до́-мо» — дом</div>
    <div class="lesson-example"><span class="eo">La ĉambro</span> → «ла ча́м-бро» — комната</div>
    <div class="lesson-example"><span class="eo">La ĝojo</span> → «ла джо́-йо» — радость</div>
    <div class="lesson-example"><span class="eo">Esperanto</span> → «эс-пэ-ра́н-то»</div>
  `,
  exercises: [
    { q: 'На какой слог падает ударение в <span class="eo">esperanto</span>?', opts: ['на первый', 'на второй', 'на предпоследний', 'на последний'], ans: 2 },
    { q: 'Как читается <b>ĉ</b>?', opts: ['ц', 'ч', 'ш', 'дж'], ans: 1 },
    { q: 'Как читается <b>ĝ</b>?', opts: ['г', 'дж', 'ж', 'й'], ans: 1 },
    { q: 'Сколько букв в алфавите?', opts: ['24', '26', '28', '30'], ans: 2 },
    { q: 'Как читается <b>ŭ</b>?', opts: ['у', 'ў', 'в', 'ю'], ans: 1 },
    { q: 'Что читается как «ш»?', opts: ['ĉ', 'ŝ', 'ĵ', 'ĝ'], ans: 1 },
    { q: 'Какая буква читается как «ц»?', opts: ['ĉ', 'c', 's', 'z'], ans: 1 },
    { q: 'Какая буква читается как «ж»?', opts: ['ĉ', 'ŝ', 'ĵ', 'ĝ'], ans: 2 },
    { q: 'Сколько «шапочных» букв?', opts: ['4', '5', '6', '8'], ans: 2 },
    { q: 'Согласные перед <b>i</b> смягчаются?', opts: ['да', 'нет', 'иногда', 'только в конце'], ans: 1 }
  ],
  test: [
    { q: 'Сколько звуков может иметь одна буква в эсперанто?', opts: ['один', 'два', 'три', 'зависит от слова'], ans: 0, explain: 'Каждая буква всегда читается одинаково.' },
    { q: 'Как читается <b>ĥ</b>?', opts: ['х', 'к', 'г', 'ш'], ans: 0, explain: 'ĥ — твёрдый «х».' },
    { q: 'Как читается <b>ĵ</b>?', opts: ['дж', 'ж', 'ш', 'й'], ans: 1, explain: 'ĵ — «ж».' },
    { q: 'Как записать <span class="eo">ĉambro</span> в x-системе?', type: 'input', ans: 'cxambro', explain: 'ĉ → cx.' },
    { q: 'Как записать <span class="eo">ĝojo</span> в x-системе?', type: 'input', ans: 'gxojo', explain: 'ĝ → gx.' },
    { q: 'Как записать <span class="eo">ŝati</span> в x-системе?', type: 'input', ans: 'sxati', explain: 'ŝ → sx.' },
    { q: 'Как записать <span class="eo">ĵurnalo</span> в x-системе?', type: 'input', ans: 'jxurnalo', explain: 'ĵ → jx.' },
    { q: 'На каком слоге ударение в слове <span class="eo">telefono</span>?', opts: ['на 1-м', 'на 2-м', 'на 3-м', 'на 4-м'], ans: 2, explain: 'Ударение на предпоследнем слоге — te-le-FO-no.' },
    { q: 'Какая буква читается как «й»?', opts: ['j', 'ĵ', 'i', 'g'], ans: 0, explain: 'j — «й».' },
    { q: 'Как звучит слово <span class="eo">ĥoro</span>?', opts: ['чоро', 'джоро', 'хоро', 'шоро'], ans: 2, explain: 'ĥ = «х».' }
  ],
  builder: [
    { words: ['la', 'domo', 'estas', 'granda'], correct: ['la', 'domo', 'estas', 'granda'], translation: 'Дом большой.' },
    { words: ['la', 'ĉambro', 'estas', 'bela'], correct: ['la', 'ĉambro', 'estas', 'bela'], translation: 'Комната красивая.' },
    { words: ['esperanto', 'havas', 'dudek', 'ok', 'literojn'], correct: ['esperanto', 'havas', 'dudek', 'ok', 'literojn'], translation: 'В эсперанто 28 букв.' },
    { words: ['mi', 'ŝatas', 'la', 'lingvon', 'esperanto'], correct: ['mi', 'ŝatas', 'la', 'lingvon', 'esperanto'], translation: 'Я люблю язык эсперанто.' },
    { words: ['la', 'ĝojo', 'estas', 'bona', 'afero'], correct: ['la', 'ĝojo', 'estas', 'bona', 'afero'], translation: 'Радость — хорошее дело.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 2: Приветствия и знакомство
   ═══════════════════════════════════════════════════════════ */
{
  id: 'a1-l2',
  title: 'Salutoj kaj Konatiĝo',
  desc: 'Приветствия, знакомство, вежливость',
  xp: 20,
  content: `
    <h3>👋 Salutoj</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>Saluton!</td><td>Привет!</td></tr>
      <tr><td>Bonan tagon!</td><td>Добрый день!</td></tr>
      <tr><td>Bonan matenon!</td><td>Доброе утро!</td></tr>
      <tr><td>Bonan vesperon!</td><td>Добрый вечер!</td></tr>
      <tr><td>Bonan nokton!</td><td>Доброй ночи!</td></tr>
      <tr><td>Ĝis revido!</td><td>До свидания!</td></tr>
      <tr><td>Ĝis!</td><td>Пока!</td></tr>
      <tr><td>Dankon!</td><td>Спасибо!</td></tr>
      <tr><td>Bonvolu</td><td>Пожалуйста (при просьбе)</td></tr>
      <tr><td>Pardonu</td><td>Извините</td></tr>
      <tr><td>Jes / Ne</td><td>Да / Нет</td></tr>
    </table>

    <h3>🤝 Kiel vi nomiĝas?</h3>
    <div class="lesson-dialog">
      — <b>Saluton!</b> Kiel vi nomiĝas?<br>
      — <b>Mi nomiĝas Anna.</b> Kaj vi?<br>
      — <b>Mi estas Petro.</b> Mi ĝojas konatiĝi!<br>
      — <b>Ankaŭ mi!</b>
    </div>

    <h3>💬 Kiel vi fartas?</h3>
    <div class="lesson-dialog">
      — <b>Saluton!</b> Kiel vi fartas?<br>
      — <b>Bone, dankon.</b> Kaj vi?<br>
      — <b>Ankaŭ bone.</b>
    </div>

    <h3>🔑 Ключевые фразы</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>Kiel vi fartas?</td><td>Как дела?</td></tr>
      <tr><td>Bone, dankon!</td><td>Хорошо, спасибо!</td></tr>
      <tr><td>Kaj vi?</td><td>А ты?</td></tr>
      <tr><td>Ĉu vi parolas Esperanton?</td><td>Вы говорите на эсперанто?</td></tr>
      <tr><td>Mi ne komprenas.</td><td>Я не понимаю.</td></tr>
      <tr><td>Bonvolu ripeti.</td><td>Пожалуйста, повторите.</td></tr>
      <tr><td>Tre agrable!</td><td>Очень приятно!</td></tr>
      <tr><td>Ĝis morgaŭ!</td><td>До завтра!</td></tr>
    </table>

    <h3>📌 Вежливые формулы</h3>
    <ul>
      <li><b>Bonvolu</b> + инфинитив = «пожалуйста, сделайте»</li>
      <li><b>Dankon pro</b> + существительное = «спасибо за»</li>
      <li><b>Pardonu min</b> = «извините меня»</li>
    </ul>

    <h3>✍️ Примеры в контексте</h3>
    <div class="lesson-example"><span class="eo">Saluton! Mi estas Anna.</span> — Привет! Я Анна.</div>
    <div class="lesson-example"><span class="eo">Bonan matenon! Kiel vi fartas hodiaŭ?</span> — Доброе утро! Как вы сегодня?</div>
    <div class="lesson-example"><span class="eo">Pardonu, mi ne komprenas.</span> — Извините, я не понимаю.</div>
    <div class="lesson-example"><span class="eo">Tre agrable konatiĝi kun vi!</span> — Очень приятно познакомиться!</div>
    <div class="lesson-example"><span class="eo">Dankon pro via helpo!</span> — Спасибо за вашу помощь!</div>

    <div class="lesson-tip">💡 <b>ĉu</b> в начале — маркер общего вопроса. Отвечают <span class="eo">jes</span> или <span class="eo">ne</span>.</div>
  `,
  exercises: [
    { q: 'Как сказать «Доброе утро!»?', opts: ['Bonan tagon!', 'Bonan matenon!', 'Bonan vesperon!', 'Saluton!'], ans: 1 },
    { q: 'Что означает <span class="eo">Kiel vi nomiĝas?</span>', opts: ['Откуда ты?', 'Сколько тебе лет?', 'Как тебя зовут?', 'Как дела?'], ans: 2 },
    { q: 'Как ответить «Хорошо, спасибо»?', opts: ['Jes, dankon', 'Bone, dankon', 'Ne, dankon', 'Ĝis, dankon'], ans: 1 },
    { q: 'Что означает <span class="eo">Ĝis revido</span>?', opts: ['Добрый день', 'До свидания', 'Спасибо', 'Пожалуйста'], ans: 1 },
    { q: 'Как сказать «Я не понимаю»?', opts: ['Mi ne komprenas', 'Mi ne parolas', 'Mi ne scias', 'Mi ne volas'], ans: 0 },
    { q: 'Что означает <span class="eo">bonvolu</span>?', opts: ['извините', 'пожалуйста', 'спасибо', 'привет'], ans: 1 },
    { q: 'Как сказать «Доброй ночи!»?', opts: ['Bonan tagon!', 'Bonan nokton!', 'Bonan vesperon!', 'Ĝis!'], ans: 1 },
    { q: 'Что означает <span class="eo">dankon</span>?', opts: ['пожалуйста', 'спасибо', 'привет', 'извините'], ans: 1 },
    { q: 'Как сказать «До завтра!»?', opts: ['Ĝis morgaŭ!', 'Ĝis revido!', 'Bonan nokton!', 'Saluton!'], ans: 0 },
    { q: 'Что означает <span class="eo">Pardonu min</span>?', opts: ['Спасибо', 'Извините меня', 'Пока', 'Привет'], ans: 1 }
  ],
  test: [
    { q: 'Как сказать «Добрый вечер!»?', opts: ['Bonan matenon!', 'Bonan tagon!', 'Bonan vesperon!', 'Bonan nokton!'], ans: 2, explain: 'Vespero = вечер.' },
    { q: 'Что означает <span class="eo">Bonan nokton</span>?', opts: ['Доброе утро', 'Добрый день', 'Добрый вечер', 'Доброй ночи'], ans: 3, explain: 'Nokto = ночь.' },
    { q: 'Как спросить «Как дела?»?', opts: ['Kiel vi nomiĝas?', 'Kiel vi fartas?', 'Kiu vi estas?', 'Kie vi estas?'], ans: 1, explain: 'Farti = чувствовать себя.' },
    { q: 'Введите «спасибо» на эсперанто:', type: 'input', ans: 'dankon', explain: 'Dankon = спасибо.' },
    { q: 'Введите «пожалуйста» (при просьбе):', type: 'input', ans: 'bonvolu', explain: 'Bonvolu.' },
    { q: 'Введите «до свидания» на эсперанто:', type: 'input', ans: 'ĝis revido', explain: 'Ĝis revido.' },
    { q: 'Как ответить на «Ĉu vi parolas Esperanton?» положительно?', opts: ['Ne, mi ne parolas', 'Jes, mi parolas Esperanton', 'Mi ne komprenas', 'Ĝis revido'], ans: 1, explain: 'Jes + утверждение.' },
    { q: 'Как сказать «Я не понимаю»?', opts: ['Mi scias', 'Mi komprenas', 'Mi ne komprenas', 'Mi volas'], ans: 2, explain: 'Mi ne komprenas.' },
    { q: 'Как попросить повторить?', opts: ['Bonvolu ripeti', 'Bonvolu iri', 'Bonvolu manĝi', 'Bonvolu dormi'], ans: 0, explain: 'Ripeti = повторять.' },
    { q: 'Что означает <span class="eo">Tre agrable</span>?', opts: ['Очень приятно', 'Очень плохо', 'Хорошо', 'Спасибо'], ans: 0, explain: 'Agrabla = приятный.' }
  ],
  builder: [
    { words: ['saluton', 'kiel', 'vi', 'nomiĝas'], correct: ['saluton', 'kiel', 'vi', 'nomiĝas'], translation: 'Привет, как тебя зовут?' },
    { words: ['mi', 'nomiĝas', 'anna', 'kaj', 'vi'], correct: ['mi', 'nomiĝas', 'anna', 'kaj', 'vi'], translation: 'Меня зовут Анна. А тебя?' },
    { words: ['mi', 'ĝojas', 'konatiĝi', 'kun', 'vi'], correct: ['mi', 'ĝojas', 'konatiĝi', 'kun', 'vi'], translation: 'Рад с тобой познакомиться.' },
    { words: ['bonan', 'matenon', 'kiel', 'vi', 'fartas'], correct: ['bonan', 'matenon', 'kiel', 'vi', 'fartas'], translation: 'Доброе утро, как дела?' },
    { words: ['dankon', 'pro', 'via', 'helpo'], correct: ['dankon', 'pro', 'via', 'helpo'], translation: 'Спасибо за вашу помощь.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 3: Местоимения и глагол esti
   ═══════════════════════════════════════════════════════════ */
{
  id: 'a1-l3',
  title: 'Personaj Pronomoj kaj «Esti»',
  desc: 'mi, vi, li... и глагол «быть», притяжательные',
  xp: 20,
  content: `
    <h3>👤 Личные местоимения</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>mi</td><td>я</td></tr>
      <tr><td>vi</td><td>ты / вы</td></tr>
      <tr><td>li</td><td>он</td></tr>
      <tr><td>ŝi</td><td>она</td></tr>
      <tr><td>ĝi</td><td>оно / это</td></tr>
      <tr><td>ni</td><td>мы</td></tr>
      <tr><td>ili</td><td>они</td></tr>
      <tr><td>oni</td><td>безличное «некто»</td></tr>
    </table>

    <h3>🔗 Притяжательные местоимения</h3>
    <p>Образуются добавлением <b>-a</b> к личному:</p>
    <table>
      <tr><th>Личное</th><th>Притяжательное</th><th>Перевод</th></tr>
      <tr><td>mi</td><td>mia</td><td>мой</td></tr>
      <tr><td>vi</td><td>via</td><td>твой</td></tr>
      <tr><td>li</td><td>lia</td><td>его</td></tr>
      <tr><td>ŝi</td><td>ŝia</td><td>её</td></tr>
      <tr><td>ni</td><td>nia</td><td>наш</td></tr>
      <tr><td>ili</td><td>ilia</td><td>их</td></tr>
    </table>
    <p>Согласуются с существительным: <span class="eo">mia domo</span>, <span class="eo">miaj domoj</span>, <span class="eo">mian domon</span>.</p>

    <h3>🔗 Глагол <span class="eo">esti</span> — «быть»</h3>
    <p>В настоящем времени окончание <b>-as</b> для всех лиц:</p>
    <table>
      <tr><th>Лицо</th><th>Форма</th><th>Перевод</th></tr>
      <tr><td>mi</td><td>mi estas</td><td>я есть</td></tr>
      <tr><td>vi</td><td>vi estas</td><td>ты есть</td></tr>
      <tr><td>li/ŝi/ĝi</td><td>li estas</td><td>он есть</td></tr>
      <tr><td>ni</td><td>ni estas</td><td>мы есть</td></tr>
      <tr><td>ili</td><td>ili estas</td><td>они есть</td></tr>
    </table>

    <div class="lesson-tip">💡 <b>Глаголы не спрягаются по лицам!</b> <span class="eo">mi estas, vi estas, li estas</span> — форма одна.</div>
    <div class="lesson-tip">💡 Связка <b>estas никогда не опускается</b>: <span class="eo">Mi estas studento</span>.</div>

    <h3>✍️ Примеры</h3>
    <div class="lesson-example"><span class="eo">Mi estas studento.</span> — Я студент.</div>
    <div class="lesson-example"><span class="eo">Ŝi estas bela.</span> — Она красивая.</div>
    <div class="lesson-example"><span class="eo">Ĝi estas mia domo.</span> — Это мой дом.</div>
    <div class="lesson-example"><span class="eo">Ni estas amikoj.</span> — Мы друзья.</div>
    <div class="lesson-example"><span class="eo">Ili estas junaj.</span> — Они молодые.</div>

    <h3>❓ Вопрос и отрицание</h3>
    <div class="lesson-dialog">
      — <b>Ĉu vi estas studento?</b><br>
      — <b>Jes, mi estas studento.</b><br>
      — <b>Ĉu ŝi estas bela?</b><br>
      — <b>Ne, ŝi ne estas bela.</b>
    </div>
    <div class="lesson-tip">💡 <b>ne</b> ставится <b>перед</b> глаголом. <b>ĉu</b> — в начале вопроса.</div>
  `,
  exercises: [
    { q: 'Какое окончание у глагола в настоящем времени?', opts: ['-is', '-as', '-os', '-us'], ans: 1 },
    { q: 'Как сказать «Мы студенты»?', opts: ['Mi estas studento', 'Vi estas studentoj', 'Ni estas studentoj', 'Ili estas studento'], ans: 2 },
    { q: 'Что означает <span class="eo">ŝi</span>?', opts: ['он', 'она', 'они', 'оно'], ans: 1 },
    { q: 'Что означает <span class="eo">ĝi</span>?', opts: ['он', 'она', 'оно', 'они'], ans: 2 },
    { q: 'Что означает <span class="eo">ili</span>?', opts: ['мы', 'вы', 'они', 'он'], ans: 2 },
    { q: 'Где ставится отрицание <b>ne</b>?', opts: ['после глагола', 'перед глаголом', 'в конце', 'в начале'], ans: 1 },
    { q: 'Как сказать «Я студент»?', opts: ['Mi studento', 'Mi estas studento', 'Mi esti studento', 'Mi estis studento'], ans: 1 },
    { q: 'Что означает <span class="eo">oni</span>?', opts: ['мы', 'они', 'безличное «некто»', 'вы'], ans: 2 },
    { q: 'Как образовать притяжательное от <span class="eo">mi</span>?', opts: ['min', 'mia', 'mie', 'mio'], ans: 1 },
    { q: 'Как сказать «Наш дом большой»?', opts: ['Nia domo estas granda', 'Ni domo estas granda', 'Nian domon estas granda', 'Nia domon estas granda'], ans: 0 }
  ],
  test: [
    { q: 'Сколько форм имеет глагол <span class="eo">estas</span> для разных лиц?', opts: ['1', '3', '6', 'зависит от времени'], ans: 0, explain: 'Estas одинаково для всех лиц.' },
    { q: 'Что означает <span class="eo">lia</span>?', opts: ['мой', 'твой', 'его', 'её'], ans: 2, explain: 'Li → lia = его.' },
    { q: 'Что означает <span class="eo">ŝia</span>?', opts: ['его', 'её', 'их', 'наш'], ans: 1, explain: 'Ŝi → ŝia = её.' },
    { q: 'Введите «они» на эсперанто:', type: 'input', ans: 'ili', explain: 'Ili = они.' },
    { q: 'Введите «мы» на эсперанто:', type: 'input', ans: 'ni', explain: 'Ni = мы.' },
    { q: 'Введите «наш» на эсперанто:', type: 'input', ans: 'nia', explain: 'Nia = наш.' },
    { q: 'Как сказать «Он хороший»?', opts: ['Li estas bona', 'Li estas bone', 'Li bona', 'Li estis bona'], ans: 0, explain: 'Bona — прилагательное.' },
    { q: 'Как сказать «Мы друзья»?', opts: ['Ni estas amikoj', 'Ni estas amiko', 'Ni esti amikoj', 'Ni amikoj'], ans: 0, explain: 'Amiko → amikoj.' },
    { q: 'Как сказать «Она не учительница»?', opts: ['Ŝi estas instruistino', 'Ŝi ne estas instruistino', 'Ŝi estas ne instruistino', 'Ne ŝi estas instruistino'], ans: 1, explain: 'Ne перед глаголом.' },
    { q: 'Что означает <span class="eo">ĝi estas mia domo</span>?', opts: ['Это мой дом', 'Это её дом', 'Это его дом', 'Это их дом'], ans: 0, explain: 'Mia = мой.' }
  ],
  builder: [
    { words: ['mi', 'estas', 'studento'], correct: ['mi', 'estas', 'studento'], translation: 'Я студент.' },
    { words: ['ŝi', 'estas', 'bela'], correct: ['ŝi', 'estas', 'bela'], translation: 'Она красивая.' },
    { words: ['ni', 'estas', 'amikoj'], correct: ['ni', 'estas', 'amikoj'], translation: 'Мы друзья.' },
    { words: ['ĝi', 'estas', 'mia', 'domo'], correct: ['ĝi', 'estas', 'mia', 'domo'], translation: 'Это мой дом.' },
    { words: ['ilia', 'patro', 'estas', 'instruisto'], correct: ['ilia', 'patro', 'estas', 'instruisto'], translation: 'Их отец — учитель.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 4: Существительные, прилагательные, артикль
   ═══════════════════════════════════════════════════════════ */
{
  id: 'a1-l4',
  title: 'Substantivoj, Adjektivoj, Artikolo',
  desc: 'Окончания -o, -a, -j и артикль la',
  xp: 20,
  content: `
    <h3>📦 Существительные: -o</h3>
    <p>Все существительные заканчиваются на <b>-o</b>. Без исключений:</p>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>domo</td><td>дом</td></tr>
      <tr><td>libro</td><td>книга</td></tr>
      <tr><td>homo</td><td>человек</td></tr>
      <tr><td>urbo</td><td>город</td></tr>
      <tr><td>amiko</td><td>друг</td></tr>
      <tr><td>tablo</td><td>стол</td></tr>
      <tr><td>lingvo</td><td>язык</td></tr>
    </table>

    <h3>🎨 Прилагательные: -a</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>bona</td><td>хороший</td></tr>
      <tr><td>bela</td><td>красивый</td></tr>
      <tr><td>granda</td><td>большой</td></tr>
      <tr><td>juna</td><td>молодой</td></tr>
      <tr><td>nova</td><td>новый</td></tr>
      <tr><td>malnova</td><td>старый</td></tr>
    </table>

    <h3>🔢 Множественное число: -j</h3>
    <table>
      <tr><th>Один</th><th>Много</th></tr>
      <tr><td>bona amiko <span class="ru">хороший друг</span></td><td>bonaj amikoj <span class="ru">хорошие друзья</span></td></tr>
      <tr><td>granda urbo <span class="ru">большой город</span></td><td>grandaj urboj <span class="ru">большие города</span></td></tr>
    </table>

    <h3>📌 Артикль la</h3>
    <p><b>la</b> — определённый артикль. Не изменяется по родам, числам и падежам. Неопределённого артикля нет.</p>
    <table>
      <tr><th>Без артикля (какой-то)</th><th>С артиклем (тот самый)</th></tr>
      <tr><td>Mi vidas domon</td><td>Mi vidas la domon</td></tr>
      <tr><td>Ŝi aĉetas libron</td><td>Ŝi aĉetas la libron</td></tr>
    </table>

    <h3>✍️ Примеры</h3>
    <div class="lesson-example"><span class="eo">La granda domo estas bela.</span> — Большой дом красивый.</div>
    <div class="lesson-example"><span class="eo">La bona amiko estas juna.</span> — Хороший друг молодой.</div>
    <div class="lesson-example"><span class="eo">La novaj libroj estas bonaj.</span> — Новые книги хорошие.</div>
    <div class="lesson-example"><span class="eo">La belaj floroj estas en la ĝardeno.</span> — Красивые цветы в саду.</div>
    <div class="lesson-example"><span class="eo">La malnova amiko estas bona homo.</span> — Старый друг — хороший человек.</div>

    <div class="lesson-tip">💡 Прилагательное <b>обязательно</b> согласуется в числе: <span class="eo">bona amiko → bonaj amikoj</span>.</div>
  `,
  exercises: [
    { q: 'Какое окончание у существительного?', opts: ['-a', '-o', '-e', '-i'], ans: 1 },
    { q: 'Как будет «хорошие книги»?', opts: ['bona libroj', 'bonaj libroj', 'bonaj libro', 'bona libro'], ans: 1 },
    { q: 'Что такое <b>la</b>?', opts: ['неопределённый артикль', 'союз', 'определённый артикль', 'предлог'], ans: 2 },
    { q: 'Какое окончание у прилагательного?', opts: ['-o', '-a', '-e', '-j'], ans: 1 },
    { q: 'Как сказать «большие дома»?', opts: ['granda domo', 'grandaj domoj', 'grandaj domo', 'granda domoj'], ans: 1 },
    { q: 'Как сказать «красивые цветы»?', opts: ['bela floro', 'belaj floroj', 'bela floroj', 'belaj floro'], ans: 1 },
    { q: 'Как сказать «новые книги»?', opts: ['nova libroj', 'novaj libroj', 'novaj libro', 'nova libro'], ans: 1 },
    { q: 'Что означает <span class="eo">granda urbo</span>?', opts: ['маленький город', 'большой город', 'новый город', 'старый город'], ans: 1 },
    { q: 'Как сказать «старый друг»?', opts: ['malnova amiko', 'nova amiko', 'maljuna amiko', 'malgranda amiko'], ans: 0 },
    { q: 'Как сказать «красивая девушка»?', opts: ['bela knabino', 'belaj knabinoj', 'bela knabo', 'bela virino'], ans: 0 }
  ],
  test: [
    { q: 'Какое окончание у существительного во множественном числе?', opts: ['-o', '-a', '-j', '-n'], ans: 2, explain: 'Сущ. мн. = -oj.' },
    { q: 'Как согласуется прилагательное?', opts: ['по роду', 'по числу и падежу', 'не согласуется', 'только по числу'], ans: 1, explain: 'Повторяет окончания сущ.' },
    { q: 'Что означает окончание <b>-oj</b>?', opts: ['сущ. ед.', 'сущ. мн.', 'прил. ед.', 'прил. мн.'], ans: 1, explain: '-oj = сущ. мн.' },
    { q: 'Введите «книга» на эсперанто:', type: 'input', ans: 'libro', explain: 'Libro.' },
    { q: 'Введите «друг» на эсперанто:', type: 'input', ans: 'amiko', explain: 'Amiko.' },
    { q: 'Введите «дом» на эсперанто:', type: 'input', ans: 'domo', explain: 'Domo.' },
    { q: 'Когда используется <b>la</b>?', opts: ['всегда', 'для конкретного предмета', 'для незнакомого предмета', 'никогда'], ans: 1, explain: 'La = определённый артикль.' },
    { q: 'Что означает <span class="eo">juna viro</span>?', opts: ['молодой мужчина', 'старый мужчина', 'маленький мужчина', 'большой мужчина'], ans: 0, explain: 'Juna = молодой, viro = мужчина.' },
    { q: 'Что означает <span class="eo">novaj libroj</span>?', opts: ['новая книга', 'новые книги', 'старая книга', 'старые книги'], ans: 1, explain: 'Nov- + -aj + libroj.' },
    { q: 'Как сказать «маленький мальчик»?', opts: ['granda knabo', 'malgranda knabo', 'malnova knabo', 'juna knabo'], ans: 1, explain: 'Malgranda = маленький.' }
  ],
  builder: [
    { words: ['la', 'granda', 'domo', 'estas', 'bela'], correct: ['la', 'granda', 'domo', 'estas', 'bela'], translation: 'Большой дом красивый.' },
    { words: ['la', 'bona', 'amiko', 'estas', 'juna'], correct: ['la', 'bona', 'amiko', 'estas', 'juna'], translation: 'Хороший друг молодой.' },
    { words: ['la', 'novaj', 'libroj', 'estas', 'bonaj'], correct: ['la', 'novaj', 'libroj', 'estas', 'bonaj'], translation: 'Новые книги хорошие.' },
    { words: ['la', 'belaj', 'floroj', 'estas', 'en', 'la', 'ĝardeno'], correct: ['la', 'belaj', 'floroj', 'estas', 'en', 'la', 'ĝardeno'], translation: 'Красивые цветы в саду.' },
    { words: ['la', 'grandaj', 'urboj', 'estas', 'belaj'], correct: ['la', 'grandaj', 'urboj', 'estas', 'belaj'], translation: 'Большие города красивые.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 5: Числа от 1 до 100
   ═══════════════════════════════════════════════════════════ */
{
  id: 'a1-l5',
  title: 'Nombroj 1–100',
  desc: 'Числа от 1 до 100 и порядковые',
  xp: 20,
  content: `
    <h3>🔢 Nombroj 1–10</h3>
    <table>
      <tr><th>Число</th><th>Esperanto</th></tr>
      <tr><td>1</td><td>unu</td></tr>
      <tr><td>2</td><td>du</td></tr>
      <tr><td>3</td><td>tri</td></tr>
      <tr><td>4</td><td>kvar</td></tr>
      <tr><td>5</td><td>kvin</td></tr>
      <tr><td>6</td><td>ses</td></tr>
      <tr><td>7</td><td>sep</td></tr>
      <tr><td>8</td><td>ok</td></tr>
      <tr><td>9</td><td>naŭ</td></tr>
      <tr><td>10</td><td>dek</td></tr>
    </table>

    <h3>🧱 Составные числа</h3>
    <table>
      <tr><th>Число</th><th>Esperanto</th></tr>
      <tr><td>11</td><td>dek unu</td></tr>
      <tr><td>15</td><td>dek kvin</td></tr>
      <tr><td>20</td><td>dudek</td></tr>
      <tr><td>25</td><td>dudek kvin</td></tr>
      <tr><td>42</td><td>kvardek du</td></tr>
      <tr><td>77</td><td>sepdek sep</td></tr>
      <tr><td>100</td><td>cent</td></tr>
      <tr><td>1000</td><td>mil</td></tr>
    </table>

    <div class="lesson-tip">💡 Числа пишутся <b>слитно</b> в одном слове, но с пробелом при сложении: <span class="eo">dudek kvin</span>.</div>

    <h3>📅 Порядковые числительные</h3>
    <p>Число + <b>-a</b>:</p>
    <table>
      <tr><th>Число</th><th>Порядковое</th></tr>
      <tr><td>unu</td><td>unua (первый)</td></tr>
      <tr><td>du</td><td>dua (второй)</td></tr>
      <tr><td>tri</td><td>tria (третий)</td></tr>
      <tr><td>dek</td><td>deka (десятый)</td></tr>
    </table>

    <h3>✍️ Примеры</h3>
    <div class="lesson-example"><span class="eo">Mi havas du librojn.</span> — У меня две книги.</div>
    <div class="lesson-example"><span class="eo">Estas dudek sep libroj sur la tablo.</span> — На столе 27 книг.</div>
    <div class="lesson-example"><span class="eo">La unua leciono estas facila.</span> — Первый урок лёгкий.</div>
    <div class="lesson-example"><span class="eo">Mi vidas tri domojn.</span> — Я вижу три дома.</div>
    <div class="lesson-example"><span class="eo">La tria libro estas granda.</span> — Третья книга большая.</div>
  `,
  exercises: [
    { q: 'Как будет «7»?', opts: ['ses', 'sep', 'ok', 'dek'], ans: 1 },
    { q: 'Как сказать «25»?', opts: ['dudek kvin', 'kvin dudek', 'dudekkvin', 'dukvin'], ans: 0 },
    { q: 'Как будет «третий»?', opts: ['tri', 'tria', 'trie', 'trio'], ans: 1 },
    { q: 'Что означает <span class="eo">cent</span>?', opts: ['десять', 'сто', 'тысяча', 'ноль'], ans: 1 },
    { q: 'Как сказать «42»?', opts: ['kvardek du', 'du kvardek', 'kvardu', 'kvar du'], ans: 0 },
    { q: 'Что означает <span class="eo">mil</span>?', opts: ['сто', 'тысяча', 'миллион', 'десять'], ans: 1 },
    { q: 'Как будет «десятый»?', opts: ['dek', 'deka', 'deke', 'deko'], ans: 1 },
    { q: 'Как сказать «77»?', opts: ['sepdek sep', 'sep sep', 'sepdeksep', 'sepdek'], ans: 0 },
    { q: 'Как сказать «4»?', opts: ['tri', 'kvar', 'kvin', 'ses'], ans: 1 },
    { q: 'Как сказать «8»?', opts: ['sep', 'ok', 'naŭ', 'dek'], ans: 1 }
  ],
  test: [
    { q: 'Как сказать «100»?', opts: ['dek', 'cent', 'mil', 'dek dek'], ans: 1, explain: 'Cent = сто.' },
    { q: 'Как сказать «1000»?', opts: ['cent', 'mil', 'dek mil', 'unu mil'], ans: 1, explain: 'Mil = тысяча.' },
    { q: 'Что означает <b>dek</b>?', opts: ['десять', 'сто', 'тысяча', 'ноль'], ans: 0, explain: 'Dek = десять.' },
    { q: 'Введите «пять» на эсперанто:', type: 'input', ans: 'kvin', explain: 'Kvin.' },
    { q: 'Введите «восемь» на эсперанто:', type: 'input', ans: 'ok', explain: 'Ok.' },
    { q: 'Введите «семь» на эсперанто:', type: 'input', ans: 'sep', explain: 'Sep.' },
    { q: 'Введите «девять» на эсперанто:', type: 'input', ans: 'naŭ', explain: 'Naŭ.' },
    { q: 'Как сказать «19»?', opts: ['dek naŭ', 'naŭ dek', 'deknaŭ', 'unu naŭ'], ans: 0, explain: '10 + 9 = dek naŭ.' },
    { q: 'Что означает <span class="eo">dua</span>?', opts: ['два', 'второй', 'двойной', 'вдвоём'], ans: 1, explain: 'Dua = второй.' },
    { q: 'Как сказать «61»?', opts: ['sepdek unu', 'sesdek unu', 'ses unu', 'sesdek'], ans: 1, explain: '6×10 + 1 = sesdek unu.' }
  ],
  builder: [
    { words: ['mi', 'vidas', 'tri', 'domojn'], correct: ['mi', 'vidas', 'tri', 'domojn'], translation: 'Я вижу три дома.' },
    { words: ['estas', 'dudek', 'sep', 'libroj', 'sur', 'la', 'tablo'], correct: ['estas', 'dudek', 'sep', 'libroj', 'sur', 'la', 'tablo'], translation: 'На столе 27 книг.' },
    { words: ['la', 'unua', 'leciono', 'estas', 'facila'], correct: ['la', 'unua', 'leciono', 'estas', 'facila'], translation: 'Первый урок лёгкий.' },
    { words: ['la', 'tria', 'libro', 'estas', 'granda'], correct: ['la', 'tria', 'libro', 'estas', 'granda'], translation: 'Третья книга большая.' },
    { words: ['mi', 'havas', 'du', 'librojn'], correct: ['mi', 'havas', 'du', 'librojn'], translation: 'У меня две книги.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 6: Дни недели, месяцы, времена года (НОВЫЙ)
   ═══════════════════════════════════════════════════════════ */
{
  id: 'a1-l6',
  title: 'Tagoj, Monatoj, Sezonoj',
  desc: 'Дни недели, месяцы и времена года',
  xp: 20,
  content: `
    <h3>📅 Tagoj de la semajno</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>lundo</td><td>понедельник</td></tr>
      <tr><td>mardo</td><td>вторник</td></tr>
      <tr><td>merkredo</td><td>среда</td></tr>
      <tr><td>ĵaŭdo</td><td>четверг</td></tr>
      <tr><td>vendredo</td><td>пятница</td></tr>
      <tr><td>sabato</td><td>суббота</td></tr>
      <tr><td>dimanĉo</td><td>воскресенье</td></tr>
    </table>

    <div class="lesson-tip">💡 Дни недели заканчиваются на <b>-o</b> (существительные). «В понедельник» = <span class="eo">lunde</span> (наречие) или <span class="eo">en lundo</span>.</div>

    <h3>📅 Monatoj</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>januaro</td><td>январь</td></tr>
      <tr><td>februaro</td><td>февраль</td></tr>
      <tr><td>marto</td><td>март</td></tr>
      <tr><td>aprilo</td><td>апрель</td></tr>
      <tr><td>majo</td><td>май</td></tr>
      <tr><td>junio</td><td>июнь</td></tr>
      <tr><td>julio</td><td>июль</td></tr>
      <tr><td>aŭgusto</td><td>август</td></tr>
      <tr><td>septembro</td><td>сентябрь</td></tr>
      <tr><td>oktobro</td><td>октябрь</td></tr>
      <tr><td>novembro</td><td>ноябрь</td></tr>
      <tr><td>decembro</td><td>декабрь</td></tr>
    </table>

    <h3>🌱 Sezonoj</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>printempo</td><td>весна</td></tr>
      <tr><td>somero</td><td>лето</td></tr>
      <tr><td>aŭtuno</td><td>осень</td></tr>
      <tr><td>vintro</td><td>зима</td></tr>
    </table>

    <h3>🔑 Полезные слова</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>hodiaŭ</td><td>сегодня</td></tr>
      <tr><td>hieraŭ</td><td>вчера</td></tr>
      <tr><td>morgaŭ</td><td>завтра</td></tr>
      <tr><td>semajno</td><td>неделя</td></tr>
      <tr><td>monato</td><td>месяц</td></tr>
      <tr><td>jaro</td><td>год</td></tr>
      <tr><td>tago</td><td>день</td></tr>
    </table>

    <h3>✍️ Примеры</h3>
    <div class="lesson-example"><span class="eo">Hodiaŭ estas lundo.</span> — Сегодня понедельник.</div>
    <div class="lesson-example"><span class="eo">Morgaŭ estos mardo.</span> — Завтра будет вторник.</div>
    <div class="lesson-example"><span class="eo">Mi ŝatas someron.</span> — Я люблю лето.</div>
    <div class="lesson-example"><span class="eo">En vintro estas malvarme.</span> — Зимой холодно.</div>
    <div class="lesson-example"><span class="eo">Aprilo estas bela monato.</span> — Апрель — красивый месяц.</div>
    <div class="lesson-example"><span class="eo">La semajno havas sep tagojn.</span> — Неделя имеет семь дней.</div>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Kiu tago estas hodiaŭ?</b> <span class="ru">— Какой сегодня день?</span><br>
      — <b>Hodiaŭ estas vendredo.</b> <span class="ru">— Сегодня пятница.</span><br>
      — <b>Kaj kiu monato?</b> <span class="ru">— А какой месяц?</span><br>
      — <b>Marto. Baldaŭ venos printempo.</b> <span class="ru">— Март. Скоро придёт весна.</span>
    </div>
  `,
  exercises: [
    { q: 'Как сказать «понедельник»?', opts: ['mardo', 'lundo', 'merkredo', 'sabato'], ans: 1 },
    { q: 'Как сказать «пятница»?', opts: ['ĵaŭdo', 'vendredo', 'sabato', 'dimanĉo'], ans: 1 },
    { q: 'Что означает <span class="eo">sabato</span>?', opts: ['суббота', 'воскресенье', 'пятница', 'четверг'], ans: 0 },
    { q: 'Как сказать «лето»?', opts: ['printempo', 'somero', 'aŭtuno', 'vintro'], ans: 1 },
    { q: 'Что означает <span class="eo">vintro</span>?', opts: ['весна', 'лето', 'осень', 'зима'], ans: 3 },
    { q: 'Как сказать «январь»?', opts: ['januaro', 'februaro', 'marto', 'aprilo'], ans: 0 },
    { q: 'Что означает <span class="eo">decembro</span>?', opts: ['январь', 'октябрь', 'ноябрь', 'декабрь'], ans: 3 },
    { q: 'Как сказать «сегодня»?', opts: ['hieraŭ', 'hodiaŭ', 'morgaŭ', 'nun'], ans: 1 },
    { q: 'Сколько дней в неделе?', opts: ['5', '6', '7', '8'], ans: 2 },
    { q: 'Что означает <span class="eo">aŭtuno</span>?', opts: ['весна', 'лето', 'осень', 'зима'], ans: 2 }
  ],
  test: [
    { q: 'Какое окончание имеют дни недели?', opts: ['-a', '-o', '-e', '-i'], ans: 1, explain: 'Как и все существительные.' },
    { q: 'Как сказать «среда»?', opts: ['mardo', 'merkredo', 'ĵaŭdo', 'lundo'], ans: 1, explain: 'Merkredo.' },
    { q: 'Как сказать «воскресенье»?', opts: ['sabato', 'dimanĉo', 'vendredo', 'lundo'], ans: 1, explain: 'Dimanĉo.' },
    { q: 'Введите «весна» на эсперанто:', type: 'input', ans: 'printempo', explain: 'Printempo.' },
    { q: 'Введите «осень» на эсперанто:', type: 'input', ans: 'aŭtuno', explain: 'Aŭtuno.' },
    { q: 'Введите «май» на эсперанто:', type: 'input', ans: 'majo', explain: 'Majo.' },
    { q: 'Введите «неделя» на эсперанто:', type: 'input', ans: 'semajno', explain: 'Semajno.' },
    { q: 'Что означает <span class="eo">jaro</span>?', opts: ['день', 'неделя', 'месяц', 'год'], ans: 3, explain: 'Jaro = год.' },
    { q: 'Как сказать «завтра»?', opts: ['hieraŭ', 'hodiaŭ', 'morgaŭ', 'nun'], ans: 2, explain: 'Morgaŭ.' },
    { q: 'Что означает <span class="eo">julio</span>?', opts: ['июнь', 'июль', 'август', 'сентябрь'], ans: 1, explain: 'Julio = июль.' }
  ],
  builder: [
    { words: ['hodiaŭ', 'estas', 'lundo'], correct: ['hodiaŭ', 'estas', 'lundo'], translation: 'Сегодня понедельник.' },
    { words: ['morgaŭ', 'estos', 'mardo'], correct: ['morgaŭ', 'estos', 'mardo'], translation: 'Завтра будет вторник.' },
    { words: ['mi', 'ŝatas', 'someron'], correct: ['mi', 'ŝatas', 'someron'], translation: 'Я люблю лето.' },
    { words: ['aprilo', 'estas', 'bela', 'monato'], correct: ['aprilo', 'estas', 'bela', 'monato'], translation: 'Апрель — красивый месяц.' },
    { words: ['la', 'semajno', 'havas', 'sep', 'tagojn'], correct: ['la', 'semajno', 'havas', 'sep', 'tagojn'], translation: 'Неделя имеет семь дней.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 7: Цвета и описание (НОВЫЙ)
   ═══════════════════════════════════════════════════════════ */
{
  id: 'a1-l7',
  title: 'Koloroj kaj Priskribo',
  desc: 'Цвета и описание внешности',
  xp: 20,
  content: `
    <h3>🎨 Koloroj — цвета</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>blanka</td><td>белый</td></tr>
      <tr><td>nigra</td><td>чёрный</td></tr>
      <tr><td>ruĝa</td><td>красный</td></tr>
      <tr><td>blua</td><td>синий</td></tr>
      <tr><td>verda</td><td>зелёный</td></tr>
      <tr><td>flava</td><td>жёлтый</td></tr>
      <tr><td>bruna</td><td>коричневый</td></tr>
      <tr><td>griza</td><td>серый</td></tr>
      <tr><td>rozkolora</td><td>розовый</td></tr>
      <tr><td>oranga</td><td>оранжевый</td></tr>
      <tr><td>viola</td><td>фиолетовый</td></tr>
    </table>

    <div class="lesson-tip">💡 Цвета — это прилагательные, поэтому <b>согласуются</b> с существительным: <span class="eo">blanka neĝo</span>, <span class="eo">blankaj neĝoj</span>.</div>

    <h3>👤 Priskribo de homo</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>alta</td><td>высокий</td></tr>
      <tr><td>malalta</td><td>низкий</td></tr>
      <tr><td>dika</td><td>толстый</td></tr>
      <tr><td>maldika</td><td>тонкий</td></tr>
      <tr><td>forta</td><td>сильный</td></tr>
      <tr><td>malforta</td><td>слабый</td></tr>
      <tr><td>bela</td><td>красивый</td></tr>
      <tr><td>malbela</td><td>некрасивый</td></tr>
      <tr><td>juna</td><td>молодой</td></tr>
      <tr><td>maljuna</td><td>старый (о человеке)</td></tr>
    </table>

    <h3>👁️ Части тела</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>okulo</td><td>глаз</td></tr>
      <tr><td>haroj</td><td>волосы</td></tr>
      <tr><td>nazo</td><td>нос</td></tr>
      <tr><td>buŝo</td><td>рот</td></tr>
      <tr><td>orelo</td><td>ухо</td></tr>
      <tr><td>vizaĝo</td><td>лицо</td></tr>
      <tr><td>kapo</td><td>голова</td></tr>
      <tr><td>mano</td><td>рука</td></tr>
    </table>

    <h3>✍️ Примеры</h3>
    <div class="lesson-example"><span class="eo">La neĝo estas blanka.</span> — Снег белый.</div>
    <div class="lesson-example"><span class="eo">La suno estas flava.</span> — Солнце жёлтое.</div>
    <div class="lesson-example"><span class="eo">Ŝiaj haroj estas nigraj.</span> — Её волосы чёрные.</div>
    <div class="lesson-example"><span class="eo">Li havas bluajn okulojn.</span> — У него синие глаза.</div>
    <div class="lesson-example"><span class="eo">La rozo estas ruĝa.</span> — Роза красная.</div>
    <div class="lesson-example"><span class="eo">La arbo estas verda somere.</span> — Дерево зелёное летом.</div>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Kia estas ŝiaj haroj?</b> <span class="ru">— Какие у неё волосы?</span><br>
      — <b>Ŝiaj haroj estas longaj kaj brunaj.</b> <span class="ru">— У неё длинные и коричневые волосы.</span><br>
      — <b>Kaj ŝiaj okuloj?</b> <span class="ru">— А её глаза?</span><br>
      — <b>Ŝiaj okuloj estas bluaj.</b> <span class="ru">— У неё синие глаза.</span>
    </div>
  `,
  exercises: [
    { q: 'Что означает <span class="eo">blanka</span>?', opts: ['чёрный', 'белый', 'красный', 'синий'], ans: 1 },
    { q: 'Что означает <span class="eo">nigra</span>?', opts: ['белый', 'чёрный', 'серый', 'коричневый'], ans: 1 },
    { q: 'Что означает <span class="eo">ruĝa</span>?', opts: ['красный', 'зелёный', 'жёлтый', 'синий'], ans: 0 },
    { q: 'Что означает <span class="eo">verda</span>?', opts: ['красный', 'зелёный', 'синий', 'жёлтый'], ans: 1 },
    { q: 'Как сказать «синий»?', opts: ['blua', 'verda', 'flava', 'ruĝa'], ans: 0 },
    { q: 'Что означает <span class="eo">flava</span>?', opts: ['белый', 'жёлтый', 'серый', 'розовый'], ans: 1 },
    { q: 'Что означает <span class="eo">okulo</span>?', opts: ['ухо', 'нос', 'глаз', 'рот'], ans: 2 },
    { q: 'Что означает <span class="eo">haroj</span>?', opts: ['руки', 'волосы', 'глаза', 'ноги'], ans: 1 },
    { q: 'Что означает <span class="eo">alta</span>?', opts: ['низкий', 'высокий', 'толстый', 'сильный'], ans: 1 },
    { q: 'Что означает <span class="eo">malalta</span>?', opts: ['высокий', 'низкий', 'старый', 'молодой'], ans: 1 }
  ],
  test: [
    { q: 'Согласуются ли цвета с существительными?', opts: ['да', 'нет', 'только во мн.ч.', 'иногда'], ans: 0, explain: 'Все прилагательные согласуются.' },
    { q: 'Как сказать «красная роза»?', opts: ['ruĝa rozo', 'ruĝaj rozoj', 'ruĝa rozojn', 'ruĝan rozon'], ans: 0, explain: 'Ruĝa + rozo.' },
    { q: 'Что означает <span class="eo">bruna</span>?', opts: ['белый', 'коричневый', 'серый', 'розовый'], ans: 1, explain: 'Bruna = коричневый.' },
    { q: 'Введите «белый» на эсперанто:', type: 'input', ans: 'blanka', explain: 'Blanka.' },
    { q: 'Введите «чёрный» на эсперанто:', type: 'input', ans: 'nigra', explain: 'Nigra.' },
    { q: 'Введите «зелёный» на эсперанто:', type: 'input', ans: 'verda', explain: 'Verda.' },
    { q: 'Введите «жёлтый» на эсперанто:', type: 'input', ans: 'flava', explain: 'Flava.' },
    { q: 'Что означает <span class="eo">buŝo</span>?', opts: ['нос', 'рот', 'ухо', 'глаз'], ans: 1, explain: 'Buŝo = рот.' },
    { q: 'Что означает <span class="eo">mano</span>?', opts: ['нога', 'рука', 'голова', 'лицо'], ans: 1, explain: 'Mano = рука.' },
    { q: 'Как сказать «синие глаза»?', opts: ['blua okulo', 'bluaj okuloj', 'bluan okulon', 'bluaj okulon'], ans: 1, explain: 'Bluaj + okuloj.' }
  ],
  builder: [
    { words: ['la', 'neĝo', 'estas', 'blanka'], correct: ['la', 'neĝo', 'estas', 'blanka'], translation: 'Снег белый.' },
    { words: ['la', 'suno', 'estas', 'flava'], correct: ['la', 'suno', 'estas', 'flava'], translation: 'Солнце жёлтое.' },
    { words: ['ŝiaj', 'haroj', 'estas', 'nigraj'], correct: ['ŝiaj', 'haroj', 'estas', 'nigraj'], translation: 'Её волосы чёрные.' },
    { words: ['li', 'havas', 'bluajn', 'okulojn'], correct: ['li', 'havas', 'bluajn', 'okulojn'], translation: 'У него синие глаза.' },
    { words: ['la', 'rozo', 'estas', 'ruĝa'], correct: ['la', 'rozo', 'estas', 'ruĝa'], translation: 'Роза красная.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 8: Семья и люди (НОВЫЙ)
   ═══════════════════════════════════════════════════════════ */
{
  id: 'a1-l8',
  title: 'Familio kaj Personoj',
  desc: 'Семья и описание людей',
  xp: 20,
  content: `
    <h3>👨‍👩‍👧‍👦 Familio</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>familio</td><td>семья</td></tr>
      <tr><td>patro</td><td>отец</td></tr>
      <tr><td>patrino</td><td>мать</td></tr>
      <tr><td>gepatroj</td><td>родители</td></tr>
      <tr><td>filo</td><td>сын</td></tr>
      <tr><td>filino</td><td>дочь</td></tr>
      <tr><td>frato</td><td>брат</td></tr>
      <tr><td>fratino</td><td>сестра</td></tr>
      <tr><td>avo</td><td>дедушка</td></tr>
      <tr><td>avino</td><td>бабушка</td></tr>
      <tr><td>nepo</td><td>внук</td></tr>
      <tr><td>nepino</td><td>внучка</td></tr>
      <tr><td>onklo</td><td>дядя</td></tr>
      <tr><td>onklino</td><td>тётя</td></tr>
      <tr><td>kuzo</td><td>двоюродный брат</td></tr>
      <tr><td>kuzino</td><td>двоюродная сестра</td></tr>
    </table>

    <div class="lesson-tip">💡 Суффикс <b>-in-</b> делает из мужчины женщину: <span class="eo">patro → patrino</span>, <span class="eo">frato → fratino</span>. Приставка <b>ge-</b> объединяет оба пола: <span class="eo">gepatroj</span> — родители.</div>

    <h3>👤 Personoj</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>homo</td><td>человек</td></tr>
      <tr><td>viro</td><td>мужчина</td></tr>
      <tr><td>virino</td><td>женщина</td></tr>
      <tr><td>knabo</td><td>мальчик</td></tr>
      <tr><td>knabino</td><td>девочка</td></tr>
      <tr><td>infano</td><td>ребёнок</td></tr>
      <tr><td>amiko</td><td>друг</td></tr>
      <tr><td>amikino</td><td>подруга</td></tr>
      <tr><td>najbaro</td><td>сосед</td></tr>
      <tr><td>geedzoj</td><td>супруги</td></tr>
      <tr><td>edzo</td><td>муж</td></tr>
      <tr><td>edzino</td><td>жена</td></tr>
    </table>

    <h3>✍️ Примеры</h3>
    <div class="lesson-example"><span class="eo">Mia patro estas kuracisto.</span> — Мой отец — врач.</div>
    <div class="lesson-example"><span class="eo">Ŝia patrino estas instruistino.</span> — Её мать — учительница.</div>
    <div class="lesson-example"><span class="eo">Ni havas du infanojn.</span> — У нас двое детей.</div>
    <div class="lesson-example"><span class="eo">Mia frato estas juna.</span> — Мой брат молодой.</div>
    <div class="lesson-example"><span class="eo">Miaj geavoj loĝas en la urbo.</span> — Мои дедушка и бабушка живут в городе.</div>
    <div class="lesson-example"><span class="eo">Ŝi havas fraton kaj fratinon.</span> — У неё есть брат и сестра.</div>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Ĉu vi havas gefratojn?</b> <span class="ru">— У тебя есть братья и сёстры?</span><br>
      — <b>Jes, mi havas unu fraton kaj du fratinojn.</b> <span class="ru">— Да, у меня один брат и две сестры.</span><br>
      — <b>Kion faras via patro?</b> <span class="ru">— Чем занимается твой отец?</span><br>
      — <b>Li estas kuracisto.</b> <span class="ru">— Он врач.</span>
    </div>
  `,
  exercises: [
    { q: 'Как сказать «отец»?', opts: ['patro', 'patrino', 'filo', 'frato'], ans: 0 },
    { q: 'Как сказать «мать»?', opts: ['patro', 'patrino', 'fratino', 'filino'], ans: 1 },
    { q: 'Что означает <span class="eo">filo</span>?', opts: ['дочь', 'сын', 'брат', 'отец'], ans: 1 },
    { q: 'Что означает <span class="eo">fratino</span>?', opts: ['сестра', 'мать', 'дочь', 'жена'], ans: 0 },
    { q: 'Что означает <span class="eo">gepatroj</span>?', opts: ['дедушка и бабушка', 'родители', 'братья и сёстры', 'дети'], ans: 1 },
    { q: 'Как сказать «бабушка»?', opts: ['avo', 'avino', 'onklo', 'onklino'], ans: 1 },
    { q: 'Как из <span class="eo">amiko</span> получить «подруга»?', opts: ['amikino', 'amiketo', 'amikĉjo', 'amiknjо'], ans: 0 },
    { q: 'Что означает <span class="eo">infano</span>?', opts: ['внук', 'ребёнок', 'мальчик', 'девочка'], ans: 1 },
    { q: 'Что означает <span class="eo">najbaro</span>?', opts: ['друг', 'сосед', 'брат', 'ребёнок'], ans: 1 },
    { q: 'Что означает <span class="eo">geedzoj</span>?', opts: ['родители', 'дети', 'супруги', 'друзья'], ans: 2 }
  ],
  test: [
    { q: 'Какой суффикс делает из мужчины женщину?', opts: ['-ul-', '-in-', '-id-', '-ist-'], ans: 1, explain: '-in- = женский пол.' },
    { q: 'Что делает приставка <b>ge-</b>?', opts: ['увеличивает', 'объединяет оба пола', 'отрицает', 'уменьшает'], ans: 1, explain: 'Ge- = оба пола.' },
    { q: 'Что означает <span class="eo">avo</span>?', opts: ['дедушка', 'бабушка', 'дядя', 'внук'], ans: 0, explain: 'Avo = дедушка.' },
    { q: 'Введите «сын» на эсперанто:', type: 'input', ans: 'filo', explain: 'Filo.' },
    { q: 'Введите «дочь» на эсперанто:', type: 'input', ans: 'filino', explain: 'Filino.' },
    { q: 'Введите «родители» на эсперанто:', type: 'input', ans: 'gepatroj', explain: 'Ge- + patro + -j.' },
    { q: 'Введите «брат» на эсперанто:', type: 'input', ans: 'frato', explain: 'Frato.' },
    { q: 'Что означает <span class="eo">edzino</span>?', opts: ['муж', 'жена', 'дочь', 'мать'], ans: 1, explain: 'Edzino = жена.' },
    { q: 'Как сказать «мужчина»?', opts: ['homo', 'viro', 'knabo', 'patro'], ans: 1, explain: 'Viro = мужчина.' },
    { q: 'Что означает <span class="eo">kuzo</span>?', opts: ['двоюродный брат', 'дядя', 'внук', 'сосед'], ans: 0, explain: 'Kuzo = двоюродный брат.' }
  ],
  builder: [
    { words: ['mia', 'patro', 'estas', 'kuracisto'], correct: ['mia', 'patro', 'estas', 'kuracisto'], translation: 'Мой отец — врач.' },
    { words: ['ŝia', 'patrino', 'estas', 'instruistino'], correct: ['ŝia', 'patrino', 'estas', 'instruistino'], translation: 'Её мать — учительница.' },
    { words: ['ni', 'havas', 'du', 'infanojn'], correct: ['ni', 'havas', 'du', 'infanojn'], translation: 'У нас двое детей.' },
    { words: ['mia', 'frato', 'estas', 'juna'], correct: ['mia', 'frato', 'estas', 'juna'], translation: 'Мой брат молодой.' },
    { words: ['ŝi', 'havas', 'fraton', 'kaj', 'fratinon'], correct: ['ŝi', 'havas', 'fraton', 'kaj', 'fratinon'], translation: 'У неё есть брат и сестра.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 9: Настоящее время глаголов
   ═══════════════════════════════════════════════════════════ */
{
  id: 'a1-l9',
  title: 'Prezenta Tempo de Verboj',
  desc: 'Настоящее время -as и три главных глагола',
  xp: 20,
  content: `
    <h3>⚡ Глаголы — самая простая часть</h3>
    <p>Все глаголы в инфинитиве оканчиваются на <b>-i</b>. В настоящем времени заменяем <b>-i</b> на <b>-as</b> — для <b>всех лиц без исключения</b>.</p>

    <table>
      <tr><th>Инфинитив</th><th>Наст. время</th><th>Перевод</th></tr>
      <tr><td>esti</td><td>estas</td><td>есть</td></tr>
      <tr><td>havi</td><td>havas</td><td>имеет</td></tr>
      <tr><td>fari</td><td>faras</td><td>делает</td></tr>
      <tr><td>iri</td><td>iras</td><td>идёт</td></tr>
      <tr><td>vidi</td><td>vidas</td><td>видит</td></tr>
      <tr><td>paroli</td><td>parolas</td><td>говорит</td></tr>
      <tr><td>lerni</td><td>lernas</td><td>учит</td></tr>
      <tr><td>legi</td><td>legas</td><td>читает</td></tr>
      <tr><td>skribi</td><td>skribas</td><td>пишет</td></tr>
      <tr><td>manĝi</td><td>manĝas</td><td>ест</td></tr>
      <tr><td>trinki</td><td>trinkas</td><td>пьёт</td></tr>
      <tr><td>dormi</td><td>dormas</td><td>спит</td></tr>
      <tr><td>kuri</td><td>kuras</td><td>бежит</td></tr>
      <tr><td>labori</td><td>laboras</td><td>работает</td></tr>
    </table>

    <div class="lesson-tip">💡 Окончание <b>-as</b> одинаково для всех лиц: <span class="eo">mi lernas, vi lernas, li lernas</span>.</div>

    <h3>🔑 Три ключевых глагола</h3>
    <table>
      <tr><th>Esperanto</th><th>Пример</th></tr>
      <tr><td>esti (быть)</td><td><span class="eo">Mi estas feliĉa.</span> — Я счастлив.</td></tr>
      <tr><td>havi (иметь)</td><td><span class="eo">Ŝi havas katon.</span> — У неё есть кот.</td></tr>
      <tr><td>fari (делать)</td><td><span class="eo">Ni faras hejmtaskon.</span> — Мы делаем домашнее задание.</td></tr>
    </table>

    <h3>✍️ Примеры</h3>
    <div class="lesson-example"><span class="eo">Mi lernas Esperanton.</span> — Я учу эсперанто.</div>
    <div class="lesson-example"><span class="eo">Vi parolas tre bone!</span> — Ты говоришь очень хорошо!</div>
    <div class="lesson-example"><span class="eo">Li legas libron.</span> — Он читает книгу.</div>
    <div class="lesson-example"><span class="eo">Ŝi skribas leteron.</span> — Она пишет письмо.</div>
    <div class="lesson-example"><span class="eo">Ni manĝas panon kaj trinkas teon.</span> — Мы едим хлеб и пьём чай.</div>
    <div class="lesson-example"><span class="eo">Ili lernas la anglan lingvon.</span> — Они учат английский.</div>
    <div class="lesson-example"><span class="eo">La infano dormas nun.</span> — Ребёнок сейчас спит.</div>

    <h3>❓ Вопрос и отрицание</h3>
    <div class="lesson-dialog">
      — <b>Ĉu vi parolas Esperanton?</b><br>
      — <b>Jes, mi parolas Esperanton.</b><br>
      — <b>Kion vi faras?</b><br>
      — <b>Mi legas libron.</b>
    </div>
    <div class="lesson-tip">💡 <b>ne</b> ставится <b>перед</b> глаголом.</div>
  `,
  exercises: [
    { q: 'Как звучит настоящее время <span class="eo">paroli</span>?', opts: ['parolis', 'parolos', 'parolas', 'parolus'], ans: 2 },
    { q: 'Как сказать «У неё есть кот»?', opts: ['Ŝi havas katon', 'Li havas katon', 'Ŝi havas kato', 'Ŝi estas katon'], ans: 0 },
    { q: 'Как будет «я иду»?', opts: ['mi iras', 'mi iris', 'mi iros', 'mi iri'], ans: 0 },
    { q: 'Что означает <span class="eo">lernas</span>?', opts: ['учит', 'читает', 'пишет', 'говорит'], ans: 0 },
    { q: 'Как будет «мы едим»?', opts: ['ni manĝas', 'ni trinkas', 'ni dormas', 'ni legas'], ans: 0 },
    { q: 'Что означает <span class="eo">skribas</span>?', opts: ['читает', 'пишет', 'говорит', 'ест'], ans: 1 },
    { q: 'Как сказать «Он спит»?', opts: ['Li dormas', 'Li manĝas', 'Li legas', 'Li iras'], ans: 0 },
    { q: 'Что означает <span class="eo">kuras</span>?', opts: ['идёт', 'бежит', 'летит', 'стоит'], ans: 1 },
    { q: 'Что означает <span class="eo">laboras</span>?', opts: ['играет', 'работает', 'спит', 'учит'], ans: 1 },
    { q: 'Как сказать «Мы читаем»?', opts: ['Ni legas', 'Ni skribas', 'Ni parolas', 'Ni dormas'], ans: 0 }
  ],
  test: [
    { q: 'Какое окончание у глагола в настоящем времени?', opts: ['-as', '-is', '-os', '-us'], ans: 0, explain: '-as = настоящее.' },
    { q: 'Как сказать «Он говорит на эсперанто»?', opts: ['Li parolas Esperanton', 'Li paroli Esperanton', 'Li parolas Esperanto', 'Li parolis Esperanton'], ans: 0, explain: 'Paroli → parolas.' },
    { q: 'Что означает <span class="eo">havas</span>?', opts: ['есть', 'имеет', 'делает', 'идёт'], ans: 1, explain: 'Havi → havas.' },
    { q: 'Введите «мы делаем»:', type: 'input', ans: 'ni faras', explain: 'Ni + fari → faras.' },
    { q: 'Введите «я читаю»:', type: 'input', ans: 'mi legas', explain: 'Mi + legi → legas.' },
    { q: 'Введите «она пишет»:', type: 'input', ans: 'ŝi skribas', explain: 'Ŝi + skribi → skribas.' },
    { q: 'Введите «они учат»:', type: 'input', ans: 'ili lernas', explain: 'Ili + lerni → lernas.' },
    { q: 'Глагол <span class="eo">dormi</span> означает:', opts: ['есть', 'пить', 'спать', 'идти'], ans: 2, explain: 'Dormi = спать.' },
    { q: 'Как сказать «Мы едим хлеб»?', opts: ['Ni manĝas panon', 'Ni trinkas panon', 'Ni manĝas pano', 'Ni manĝi panon'], ans: 0, explain: 'Manĝi → manĝas, pano → panon.' },
    { q: 'Что означает <span class="eo">trinki</span>?', opts: ['есть', 'пить', 'спать', 'читать'], ans: 1, explain: 'Trinki = пить.' }
  ],
  builder: [
    { words: ['mi', 'lernas', 'esperanton'], correct: ['mi', 'lernas', 'esperanton'], translation: 'Я учу эсперанто.' },
    { words: ['ŝi', 'havas', 'belan', 'katon'], correct: ['ŝi', 'havas', 'belan', 'katon'], translation: 'У неё есть красивый кот.' },
    { words: ['ni', 'manĝas', 'panon', 'kaj', 'trinkas', 'teon'], correct: ['ni', 'manĝas', 'panon', 'kaj', 'trinkas', 'teon'], translation: 'Мы едим хлеб и пьём чай.' },
    { words: ['li', 'legas', 'libron'], correct: ['li', 'legas', 'libron'], translation: 'Он читает книгу.' },
    { words: ['la', 'infano', 'dormas', 'nun'], correct: ['la', 'infano', 'dormas', 'nun'], translation: 'Ребёнок сейчас спит.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 10: Еда и напитки (НОВЫЙ)
   ═══════════════════════════════════════════════════════════ */
{
  id: 'a1-l10',
  title: 'Manĝaĵoj kaj Trinkaĵoj',
  desc: 'Еда, напитки, приёмы пищи',
  xp: 20,
  content: `
    <h3>🍞 Manĝaĵoj</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>pano</td><td>хлеб</td></tr>
      <tr><td>viando</td><td>мясо</td></tr>
      <tr><td>fiŝo</td><td>рыба</td></tr>
      <tr><td>fromaĝo</td><td>сыр</td></tr>
      <tr><td>ovo</td><td>яйцо</td></tr>
      <tr><td>pomo</td><td>яблоко</td></tr>
      <tr><td>banano</td><td>банан</td></tr>
      <tr><td>orango</td><td>апельсин</td></tr>
      <tr><td>legomo</td><td>овощ</td></tr>
      <tr><td>terpomo</td><td>картофель</td></tr>
      <tr><td>supo</td><td>суп</td></tr>
      <tr><td>kuko</td><td>пирог, торт</td></tr>
      <tr><td>sukero</td><td>сахар</td></tr>
      <tr><td>salo</td><td>соль</td></tr>
    </table>

    <h3>🥤 Trinkaĵoj</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>akvo</td><td>вода</td></tr>
      <tr><td>teo</td><td>чай</td></tr>
      <tr><td>kafo</td><td>кофе</td></tr>
      <tr><td>lakto</td><td>молоко</td></tr>
      <tr><td>suko</td><td>сок</td></tr>
      <tr><td>vino</td><td>вино</td></tr>
      <tr><td>biero</td><td>пиво</td></tr>
    </table>

    <h3>🍽️ Приёмы пищи</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>matenmanĝo</td><td>завтрак</td></tr>
      <tr><td>tagmanĝo</td><td>обед</td></tr>
      <tr><td>vespermanĝo</td><td>ужин</td></tr>
    </table>

    <h3>🔑 Полезные глаголы</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>manĝi</td><td>есть</td></tr>
      <tr><td>trinki</td><td>пить</td></tr>
      <tr><td>kuiri</td><td>готовить</td></tr>
      <tr><td>gustumi</td><td>пробовать на вкус</td></tr>
    </table>

    <h3>✍️ Примеры</h3>
    <div class="lesson-example"><span class="eo">Mi manĝas panon kun fromaĝo.</span> — Я ем хлеб с сыром.</div>
    <div class="lesson-example"><span class="eo">Ŝi trinkas kafon matene.</span> — Она пьёт кофе утром.</div>
    <div class="lesson-example"><span class="eo">Ni manĝas supon por la tagmanĝo.</span> — Мы едим суп на обед.</div>
    <div class="lesson-example"><span class="eo">La pomoj estas ruĝaj kaj dolĉaj.</span> — Яблоки красные и сладкие.</div>
    <div class="lesson-example"><span class="eo">Ĉu vi volas teon aŭ kafon?</span> — Ты хочешь чай или кофе?</div>
    <div class="lesson-example"><span class="eo">Mi ŝatas lakton en mia kafo.</span> — Я люблю молоко в кофе.</div>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Kion vi manĝas matene?</b> <span class="ru">— Что вы едите утром?</span><br>
      — <b>Mi manĝas ovon kaj panon.</b> <span class="ru">— Я ем яйцо и хлеб.</span><br>
      — <b>Kaj kion vi trinkas?</b> <span class="ru">— А что вы пьёте?</span><br>
      — <b>Mi trinkas teon kun lakto.</b> <span class="ru">— Я пью чай с молоком.</span>
    </div>
  `,
  exercises: [
    { q: 'Что означает <span class="eo">pano</span>?', opts: ['вода', 'хлеб', 'сыр', 'мясо'], ans: 1 },
    { q: 'Что означает <span class="eo">akvo</span>?', opts: ['молоко', 'вода', 'чай', 'сок'], ans: 1 },
    { q: 'Как сказать «мясо»?', opts: ['viando', 'fiŝo', 'fromaĝo', 'supo'], ans: 0 },
    { q: 'Что означает <span class="eo">kafo</span>?', opts: ['чай', 'кофе', 'молоко', 'сок'], ans: 1 },
    { q: 'Как сказать «молоко»?', opts: ['lakto', 'suko', 'vino', 'biero'], ans: 0 },
    { q: 'Что означает <span class="eo">pomo</span>?', opts: ['груша', 'яблоко', 'банан', 'апельсин'], ans: 1 },
    { q: 'Что означает <span class="eo">matenmanĝo</span>?', opts: ['обед', 'ужин', 'завтрак', 'перекус'], ans: 2 },
    { q: 'Как сказать «готовить»?', opts: ['manĝi', 'trinki', 'kuiri', 'gustumi'], ans: 2 },
    { q: 'Что означает <span class="eo">ovo</span>?', opts: ['мясо', 'сыр', 'яйцо', 'суп'], ans: 2 },
    { q: 'Как сказать «суп»?', opts: ['supo', 'kuko', 'salo', 'sukero'], ans: 0 }
  ],
  test: [
    { q: 'Что означает <span class="eo">tagmanĝo</span>?', opts: ['завтрак', 'обед', 'ужин', 'перекус'], ans: 1, explain: 'Tag- = день.' },
    { q: 'Что означает <span class="eo">vespermanĝo</span>?', opts: ['завтрак', 'обед', 'ужин', 'десерт'], ans: 2, explain: 'Vesper- = вечер.' },
    { q: 'Какой напиток — <span class="eo">biero</span>?', opts: ['вино', 'пиво', 'сок', 'кофе'], ans: 1, explain: 'Biero = пиво.' },
    { q: 'Введите «хлеб» на эсперанто:', type: 'input', ans: 'pano', explain: 'Pano.' },
    { q: 'Введите «чай» на эсперанто:', type: 'input', ans: 'teo', explain: 'Teo.' },
    { q: 'Введите «кофе» на эсперанто:', type: 'input', ans: 'kafo', explain: 'Kafo.' },
    { q: 'Введите «яблоко» на эсперанто:', type: 'input', ans: 'pomo', explain: 'Pomo.' },
    { q: 'Что означает <span class="eo">fiŝo</span>?', opts: ['мясо', 'рыба', 'птица', 'яйцо'], ans: 1, explain: 'Fiŝo = рыба.' },
    { q: 'Что означает <span class="eo">legomo</span>?', opts: ['овощ', 'фрукт', 'ягода', 'орех'], ans: 0, explain: 'Legomo = овощ.' },
    { q: 'Как сказать «сахар»?', opts: ['salo', 'sukero', 'lakto', 'kuko'], ans: 1, explain: 'Sukero = сахар.' }
  ],
  builder: [
    { words: ['mi', 'manĝas', 'panon', 'kun', 'fromaĝo'], correct: ['mi', 'manĝas', 'panon', 'kun', 'fromaĝo'], translation: 'Я ем хлеб с сыром.' },
    { words: ['ŝi', 'trinkas', 'kafon', 'matene'], correct: ['ŝi', 'trinkas', 'kafon', 'matene'], translation: 'Она пьёт кофе утром.' },
    { words: ['ni', 'manĝas', 'supon', 'por', 'la', 'tagmanĝo'], correct: ['ni', 'manĝas', 'supon', 'por', 'la', 'tagmanĝo'], translation: 'Мы едим суп на обед.' },
    { words: ['ĉu', 'vi', 'volas', 'teon', 'aŭ', 'kafon'], correct: ['ĉu', 'vi', 'volas', 'teon', 'aŭ', 'kafon'], translation: 'Ты хочешь чай или кофе?' },
    { words: ['mi', 'ŝatas', 'lakton', 'en', 'mia', 'kafo'], correct: ['mi', 'ŝatas', 'lakton', 'en', 'mia', 'kafo'], translation: 'Я люблю молоко в кофе.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 11: Вопросы и ĉu
   ═══════════════════════════════════════════════════════════ */
{
  id: 'a1-l11',
  title: 'Demandoj kaj «Ĉu»',
  desc: 'Вопросительные слова и общий вопрос',
  xp: 20,
  content: `
    <h3>❓ Вопросительные слова (KI-таблица)</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>kiu</td><td>кто / который</td></tr>
      <tr><td>kio</td><td>что</td></tr>
      <tr><td>kie</td><td>где</td></tr>
      <tr><td>kiam</td><td>когда</td></tr>
      <tr><td>kial</td><td>почему</td></tr>
      <tr><td>kiel</td><td>как</td></tr>
      <tr><td>kiom</td><td>сколько</td></tr>
      <tr><td>kia</td><td>какой</td></tr>
      <tr><td>kies</td><td>чей</td></tr>
    </table>

    <h3>🔑 Общий вопрос — ĉu</h3>
    <div class="lesson-dialog">
      — <b>Ĉu vi estas studento?</b><br>
      — <b>Jes, mi estas studento.</b><br>
      — <b>Ĉu ŝi parolas Esperanton?</b><br>
      — <b>Ne, ŝi ne parolas Esperanton.</b>
    </div>

    <h3>🗣️ Диалоги</h3>
    <div class="lesson-dialog">
      — <b>Kiu vi estas?</b><br>
      — <b>Mi estas Anna. Kaj vi?</b><br>
      — <b>Mi estas Petro.</b>
    </div>
    <div class="lesson-dialog">
      — <b>Kie vi loĝas?</b><br>
      — <b>Mi loĝas en Moskvo.</b><br>
      — <b>Kial vi lernas Esperanton?</b><br>
      — <b>Ĉar ĝi estas facila kaj bela.</b>
    </div>

    <h3>🔗 Связка KI- … TI-</h3>
    <table>
      <tr><th>Вопрос</th><th>Ответ</th></tr>
      <tr><td>kiu — кто</td><td>tiu — тот</td></tr>
      <tr><td>kio — что</td><td>tio — то</td></tr>
      <tr><td>kie — где</td><td>tie — там</td></tr>
      <tr><td>kiam — когда</td><td>tiam — тогда</td></tr>
    </table>

    <h3>✍️ Примеры</h3>
    <div class="lesson-example"><span class="eo">Kiu estas tiu homo?</span> — Кто этот человек?</div>
    <div class="lesson-example"><span class="eo">Kion vi faras nun?</span> — Что ты делаешь сейчас?</div>
    <div class="lesson-example"><span class="eo">Kiom da libroj vi havas?</span> — Сколько книг у тебя есть?</div>
    <div class="lesson-example"><span class="eo">Kiam vi lernas Esperanton?</span> — Когда ты учишь эсперанто?</div>
    <div class="lesson-example"><span class="eo">Kies domo estas tio?</span> — Чей это дом?</div>
    <div class="lesson-example"><span class="eo">Kia estas la vetero hodiaŭ?</span> — Какая сегодня погода?</div>
  `,
  exercises: [
    { q: 'Какое слово означает «где»?', opts: ['kiam', 'kial', 'kie', 'kiel'], ans: 2 },
    { q: 'С чего начинается общий вопрос?', opts: ['Kiu', 'Ĉu', 'Kial', 'Kaj'], ans: 1 },
    { q: 'Что означает <span class="eo">kiom</span>?', opts: ['как', 'когда', 'сколько', 'какой'], ans: 2 },
    { q: 'Что означает <span class="eo">kial</span>?', opts: ['где', 'когда', 'почему', 'как'], ans: 2 },
    { q: 'Что означает <span class="eo">kiel</span>?', opts: ['какой', 'как', 'когда', 'сколько'], ans: 1 },
    { q: 'Как спросить «Кто ты?»?', opts: ['Kiu vi estas?', 'Kio vi estas?', 'Kie vi estas?', 'Kiel vi estas?'], ans: 0 },
    { q: 'Что означает <span class="eo">kiam</span>?', opts: ['где', 'когда', 'почему', 'что'], ans: 1 },
    { q: 'Как сказать «Что это?»?', opts: ['Kio estas tio?', 'Kiu estas tio?', 'Kie estas tio?', 'Kiam estas tio?'], ans: 0 },
    { q: 'Что означает <span class="eo">kies</span>?', opts: ['кто', 'что', 'чей', 'где'], ans: 2 },
    { q: 'Что означает <span class="eo">kia</span>?', opts: ['какой', 'кто', 'где', 'когда'], ans: 0 }
  ],
  test: [
    { q: 'Как ответить на <span class="eo">kie</span>?', opts: ['tie', 'tiam', 'tial', 'tiel'], ans: 0, explain: 'Kie → tie.' },
    { q: 'Какой вопрос начинается с <b>ĉu</b>?', opts: ['специальный', 'общий (да/нет)', 'альтернативный', 'риторический'], ans: 1, explain: 'Ĉu — вопрос да/нет.' },
    { q: 'Что означает <span class="eo">kion</span>?', opts: ['кто', 'что (вин.)', 'когда', 'где'], ans: 1, explain: 'Kion — вин. падеж.' },
    { q: 'Введите «когда» на эсперанто:', type: 'input', ans: 'kiam', explain: 'Kiam.' },
    { q: 'Введите «где» на эсперанто:', type: 'input', ans: 'kie', explain: 'Kie.' },
    { q: 'Введите «почему» на эсперанто:', type: 'input', ans: 'kial', explain: 'Kial.' },
    { q: 'Введите «как» на эсперанто:', type: 'input', ans: 'kiel', explain: 'Kiel.' },
    { q: 'Как спросить «Сколько книг?»?', opts: ['Kiom da libroj?', 'Kiaj libroj?', 'Kies libroj?', 'Kie libroj?'], ans: 0, explain: 'Kiom da = сколько.' },
    { q: 'Как ответить на <span class="eo">kial</span>?', opts: ['tial', 'tie', 'tiam', 'tiel'], ans: 0, explain: 'Kial → tial.' },
    { q: 'Что означает <span class="eo">kia</span>?', opts: ['какой', 'кто', 'где', 'когда'], ans: 0, explain: 'Kia = какой.' }
  ],
  builder: [
    { words: ['kiu', 'vi', 'estas'], correct: ['kiu', 'vi', 'estas'], translation: 'Кто ты?' },
    { words: ['kie', 'vi', 'loĝas'], correct: ['kie', 'vi', 'loĝas'], translation: 'Где ты живёшь?' },
    { words: ['kial', 'vi', 'lernas', 'esperanton'], correct: ['kial', 'vi', 'lernas', 'esperanton'], translation: 'Почему ты учишь эсперанто?' },
    { words: ['ĉu', 'vi', 'parolas', 'esperanton'], correct: ['ĉu', 'vi', 'parolas', 'esperanton'], translation: 'Ты говоришь на эсперанто?' },
    { words: ['kion', 'vi', 'faras', 'nun'], correct: ['kion', 'vi', 'faras', 'nun'], translation: 'Что ты делаешь сейчас?' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 12: Множественное число и винительный падеж
   ═══════════════════════════════════════════════════════════ */
{
  id: 'a1-l12',
  title: 'Pluralo kaj Akuzativo',
  desc: 'Множественное число -j и винительный падеж -n',
  xp: 20,
  content: `
    <h3>🔢 Ещё раз о -j</h3>
    <table>
      <tr><th>Один</th><th>Много</th></tr>
      <tr><td>bela floro</td><td>belaj floroj</td></tr>
      <tr><td>granda urbo</td><td>grandaj urboj</td></tr>
      <tr><td>mia amiko</td><td>miaj amikoj</td></tr>
    </table>

    <h3>🎯 Винительный падеж: -n</h3>
    <p>Прямой объект (кого? что?) получает <b>-n</b>. В мн. ч. — <b>-jn</b>:</p>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>Mi vidas <b>la patron</b></td><td>Я вижу отца</td></tr>
      <tr><td>Mi vidas <b>la patrojn</b></td><td>Я вижу отцов</td></tr>
      <tr><td>Mi vidas <b>bonan amikon</b></td><td>Я вижу хорошего друга</td></tr>
      <tr><td>Mi vidas <b>bonajn amikojn</b></td><td>Я вижу хороших друзей</td></tr>
    </table>

    <div class="lesson-tip">💡 Благодаря <b>-n</b> порядок слов <b>свободный</b>.</div>

    <h3>🧩 Полная схема</h3>
    <table>
      <tr><th>Падеж</th><th>Один</th><th>Много</th></tr>
      <tr><td>Им. (кто? что?)</td><td>domo</td><td>domoj</td></tr>
      <tr><td>Вин. (кого? что?)</td><td>domon</td><td>domojn</td></tr>
      <tr><td>Прил. ед.</td><td>bona domo</td><td>bonaj domoj</td></tr>
      <tr><td>Прил. вин.</td><td>bonan domon</td><td>bonajn domojn</td></tr>
    </table>

    <h3>✍️ Примеры</h3>
    <div class="lesson-example"><span class="eo">Mi amas vin.</span> — Я люблю тебя.</div>
    <div class="lesson-example"><span class="eo">Ŝi havas belajn florojn.</span> — У неё красивые цветы.</div>
    <div class="lesson-example"><span class="eo">Ni legas la libron.</span> — Мы читаем книгу.</div>
    <div class="lesson-example"><span class="eo">Li vidas belajn birdojn.</span> — Он видит красивых птиц.</div>
    <div class="lesson-example"><span class="eo">Mi havas bonajn amikojn.</span> — У меня хорошие друзья.</div>
    <div class="lesson-example"><span class="eo">Ŝi konas mian fraton.</span> — Она знает моего брата.</div>

    <div class="lesson-tip">💡 После предлогов (<span class="eo">en, sur, al, de, kun</span>) <b>-n не нужен</b>.</div>

    <h3>🎯 Направление движения</h3>
    <table>
      <tr><th>Где? (место)</th><th>Куда? (направление)</th></tr>
      <tr><td>en la domo</td><td>en la domon</td></tr>
      <tr><td>sur la tablo</td><td>sur la tablon</td></tr>
    </table>
  `,
  exercises: [
    { q: 'Какое окончание у винительного падежа мн. ч.?', opts: ['-j', '-n', '-jn', '-oj'], ans: 2 },
    { q: 'Как сказать «Я вижу дома»?', opts: ['Mi vidas domoj', 'Mi vidas domojn', 'Mi vidas domon', 'Mi vidas la domo'], ans: 1 },
    { q: 'Нужен ли -n после <b>al</b>?', opts: ['да', 'нет', 'только во мн.ч.', 'зависит'], ans: 1 },
    { q: 'Как сказать «Я люблю тебя»?', opts: ['Mi amas vi', 'Mi amas vin', 'Mi amas vij', 'Mi amas la vi'], ans: 1 },
    { q: 'Что означает <b>-n</b>?', opts: ['мн. ч.', 'винительный падеж', 'прил.', 'наречие'], ans: 1 },
    { q: 'Как сказать «Она покупает яблоки»?', opts: ['Ŝi aĉetas pomoj', 'Ŝi aĉetas pomojn', 'Ŝi aĉetas pomon', 'Ŝi aĉetas la pomoj'], ans: 1 },
    { q: 'Как сказать «Он видит красивых птиц»?', opts: ['Li vidas belajn birdojn', 'Li vidas belaj birdoj', 'Li vidas bela birdojn', 'Li vidas belan birdojn'], ans: 0 },
    { q: 'Как сказать «Я знаю твоего брата»?', opts: ['Mi konas vian fraton', 'Mi konas via frato', 'Mi konas vian frato', 'Mi konas via fraton'], ans: 0 },
    { q: 'Как сказать «Мы читаем книги»?', opts: ['Ni legas libroj', 'Ni legas librojn', 'Ni legas libron', 'Ni legas la libro'], ans: 1 },
    { q: 'Как сказать «Я люблю кофе»?', opts: ['Mi ŝatas kafon', 'Mi ŝatas kafo', 'Mi ŝatas kafoj', 'Mi ŝatas kafojn'], ans: 0 }
  ],
  test: [
    { q: 'Введите «книгу» (вин.):', type: 'input', ans: 'libron', explain: 'Libro → libron.' },
    { q: 'Введите «друзей» (вин. мн.):', type: 'input', ans: 'amikojn', explain: 'Amiko → amikojn.' },
    { q: 'Введите «цветы» (мн. им.):', type: 'input', ans: 'floroj', explain: 'Floro → floroj.' },
    { q: 'Введите «домов» (вин. мн.):', type: 'input', ans: 'domojn', explain: 'Domo → domojn.' },
    { q: 'Нужен ли -n после <b>en</b> (место)?', opts: ['да', 'нет', 'только во мн.ч.', 'зависит'], ans: 1, explain: 'En domo = в доме.' },
    { q: 'Как будет «хороших друзей» (вин. мн.)?', opts: ['bonaj amikoj', 'bonajn amikojn', 'bonaj amikojn', 'bonajn amikoj'], ans: 1, explain: 'Bona → bonajn.' },
    { q: 'Что означает <b>-jn</b>?', opts: ['мн. ч.', 'вин. падеж мн. ч.', 'прил. ед.', 'наречие'], ans: 1, explain: '-jn = вин. + мн.' },
    { q: 'Как сказать «Он купил новую машину»?', opts: ['Li aĉetis novan aŭton', 'Li aĉetis nova aŭto', 'Li aĉetis novan aŭto', 'Li aĉetis nova aŭton'], ans: 0, explain: 'Nova → novan, aŭto → aŭton.' },
    { q: 'Порядок слов в эсперанто:', opts: ['строго фиксированный', 'свободный благодаря -n', 'только SVO', 'только SOV'], ans: 1, explain: 'Винительный освобождает порядок.' },
    { q: 'Как сказать «Мы едим хлеб»?', opts: ['Ni manĝas panon', 'Ni manĝas pano', 'Ni manĝas panoj', 'Ni manĝas panojn'], ans: 0, explain: 'Pano → panon.' }
  ],
  builder: [
    { words: ['mi', 'amas', 'vin'], correct: ['mi', 'amas', 'vin'], translation: 'Я люблю тебя.' },
    { words: ['ŝi', 'havas', 'belajn', 'florojn'], correct: ['ŝi', 'havas', 'belajn', 'florojn'], translation: 'У неё красивые цветы.' },
    { words: ['ni', 'legas', 'la', 'libron'], correct: ['ni', 'legas', 'la', 'libron'], translation: 'Мы читаем книгу.' },
    { words: ['mi', 'vidas', 'bonajn', 'amikojn'], correct: ['mi', 'vidas', 'bonajn', 'amikojn'], translation: 'Я вижу хороших друзей.' },
    { words: ['li', 'vidas', 'belajn', 'birdojn'], correct: ['li', 'vidas', 'belajn', 'birdojn'], translation: 'Он видит красивых птиц.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 13: Предлоги
   ═══════════════════════════════════════════════════════════ */
{
  id: 'a1-l13',
  title: 'Prepozicioj',
  desc: 'Предлоги: en, sur, sub, al, de, kun и другие',
  xp: 20,
  content: `
    <h3>📦 Основные предлоги</h3>
    <table>
      <tr><th>Предлог</th><th>Значение</th><th>Пример</th></tr>
      <tr><td>en</td><td>в (внутри)</td><td><span class="eo">en la domo</span> — в доме</td></tr>
      <tr><td>sur</td><td>на (поверхности)</td><td><span class="eo">sur la tablo</span> — на столе</td></tr>
      <tr><td>sub</td><td>под</td><td><span class="eo">sub la tablo</span> — под столом</td></tr>
      <tr><td>super</td><td>над</td><td><span class="eo">super la domo</span> — над домом</td></tr>
      <tr><td>al</td><td>к, в сторону</td><td><span class="eo">al la amiko</span> — к другу</td></tr>
      <tr><td>de</td><td>от, кем</td><td><span class="eo">de la amiko</span> — от друга</td></tr>
      <tr><td>el</td><td>из (внутри)</td><td><span class="eo">el la domo</span> — из дома</td></tr>
      <tr><td>kun</td><td>с (вместе)</td><td><span class="eo">kun vi</span> — с тобой</td></tr>
      <tr><td>sen</td><td>без</td><td><span class="eo">sen vi</span> — без тебя</td></tr>
      <tr><td>por</td><td>для</td><td><span class="eo">por vi</span> — для тебя</td></tr>
      <tr><td>pri</td><td>о, про</td><td><span class="eo">pri la libro</span> — о книге</td></tr>
      <tr><td>ĉe</td><td>у, при</td><td><span class="eo">ĉe la tablo</span> — у стола</td></tr>
      <tr><td>inter</td><td>между</td><td><span class="eo">inter amikoj</span> — между друзьями</td></tr>
      <tr><td>apud</td><td>рядом</td><td><span class="eo">apud la domo</span> — рядом с домом</td></tr>
      <tr><td>antaŭ</td><td>перед</td><td><span class="eo">antaŭ la domo</span> — перед домом</td></tr>
      <tr><td>post</td><td>после, за</td><td><span class="eo">post la domo</span> — за домом</td></tr>
    </table>

    <div class="lesson-tip">💡 После предлогов используется <b>именительный</b> (<span class="eo">en domo</span>).</div>

    <h3>🎯 Направление vs место</h3>
    <table>
      <tr><th>Где?</th><th>Куда?</th></tr>
      <tr><td>en la domo</td><td>en la domon</td></tr>
      <tr><td>sur la tablo</td><td>sur la tablon</td></tr>
      <tr><td>sub la lito</td><td>sub la liton</td></tr>
    </table>

    <h3>✍️ Примеры</h3>
    <div class="lesson-example"><span class="eo">La libro estas sur la tablo.</span> — Книга на столе.</div>
    <div class="lesson-example"><span class="eo">Mi iras al la domo.</span> — Я иду к дому.</div>
    <div class="lesson-example"><span class="eo">Ŝi parolas pri la libro.</span> — Она говорит о книге.</div>
    <div class="lesson-example"><span class="eo">Ni loĝas en granda urbo.</span> — Мы живём в большом городе.</div>
    <div class="lesson-example"><span class="eo">La kato dormas sub la tablo.</span> — Кот спит под столом.</div>
    <div class="lesson-example"><span class="eo">Mi venas el Rusio.</span> — Я приехал из России.</div>
    <div class="lesson-example"><span class="eo">Li sidas apud sia amiko.</span> — Он сидит рядом со своим другом.</div>
    <div class="lesson-example"><span class="eo">Ŝi iras kun sia patrino.</span> — Она идёт со своей матерью.</div>
  `,
  exercises: [
    { q: 'Какой предлог означает «на»?', opts: ['en', 'sur', 'sub', 'al'], ans: 1 },
    { q: 'Как сказать «Я иду к другу»?', opts: ['Mi iras al la amiko', 'Mi iras en la amiko', 'Mi iras sur la amiko', 'Mi iras de la amiko'], ans: 0 },
    { q: 'Какой предлог означает «без»?', opts: ['kun', 'sen', 'por', 'pri'], ans: 1 },
    { q: 'Какой предлог означает «под»?', opts: ['sur', 'sub', 'super', 'en'], ans: 1 },
    { q: 'Что означает <span class="eo">kun</span>?', opts: ['без', 'с', 'для', 'о'], ans: 1 },
    { q: 'Как сказать «Книга на столе»?', opts: ['La libro estas sur la tablo', 'La libro estas en la tablo', 'La libro estas sub la tablo', 'La libro estas al la tablo'], ans: 0 },
    { q: 'Какой предлог означает «о, про»?', opts: ['pri', 'por', 'pro', 'per'], ans: 0 },
    { q: 'Как сказать «Мы живём в большом городе»?', opts: ['Ni loĝas en granda urbo', 'Ni loĝas sur granda urbo', 'Ni loĝas al granda urbo', 'Ni loĝas de granda urbo'], ans: 0 },
    { q: 'Какой предлог означает «между»?', opts: ['apud', 'inter', 'ĉe', 'super'], ans: 1 },
    { q: 'Какой предлог означает «над»?', opts: ['super', 'sub', 'sur', 'en'], ans: 0 }
  ],
  test: [
    { q: 'Что означает <span class="eo">en</span>?', opts: ['на', 'в', 'под', 'над'], ans: 1, explain: 'En = в (внутри).' },
    { q: 'Что означает <span class="eo">el</span>?', opts: ['от', 'из', 'к', 'с'], ans: 1, explain: 'El = из.' },
    { q: 'Что означает <span class="eo">super</span>?', opts: ['под', 'над', 'на', 'в'], ans: 1, explain: 'Super = над.' },
    { q: 'Введите «для» на эсперанто:', type: 'input', ans: 'por', explain: 'Por = для.' },
    { q: 'Введите «с (вместе)» на эсперанто:', type: 'input', ans: 'kun', explain: 'Kun = с.' },
    { q: 'Введите «под» на эсперанто:', type: 'input', ans: 'sub', explain: 'Sub = под.' },
    { q: 'Введите «без» на эсперанто:', type: 'input', ans: 'sen', explain: 'Sen = без.' },
    { q: 'Как сказать «Кот под столом»?', opts: ['La kato estas sub la tablo', 'La kato estas sur la tablo', 'La kato estas en la tablo', 'La kato estas super la tablo'], ans: 0, explain: 'Sub = под.' },
    { q: 'После предлога:', opts: ['вин. падеж', 'им. падеж', 'любой падеж', 'без окончания'], ans: 1, explain: 'После предлогов — именительный.' },
    { q: 'Как сказать «Я иду к дому»?', opts: ['Mi iras al la domo', 'Mi iras en la domo', 'Mi iras sur la domo', 'Mi iras sub la domo'], ans: 0, explain: 'Al = к.' }
  ],
  builder: [
    { words: ['la', 'libro', 'estas', 'sur', 'la', 'tablo'], correct: ['la', 'libro', 'estas', 'sur', 'la', 'tablo'], translation: 'Книга на столе.' },
    { words: ['mi', 'iras', 'al', 'la', 'domo'], correct: ['mi', 'iras', 'al', 'la', 'domo'], translation: 'Я иду к дому.' },
    { words: ['ŝi', 'parolas', 'pri', 'la', 'libro'], correct: ['ŝi', 'parolas', 'pri', 'la', 'libro'], translation: 'Она говорит о книге.' },
    { words: ['ni', 'loĝas', 'en', 'granda', 'urbo'], correct: ['ni', 'loĝas', 'en', 'granda', 'urbo'], translation: 'Мы живём в большом городе.' },
    { words: ['la', 'kato', 'dormas', 'sub', 'la', 'tablo'], correct: ['la', 'kato', 'dormas', 'sub', 'la', 'tablo'], translation: 'Кот спит под столом.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 14: Покупки и магазины (НОВЫЙ)
   ═══════════════════════════════════════════════════════════ */
{
  id: 'a1-l14',
  title: 'Aĉetado kaj Butikoj',
  desc: 'Покупки, магазины, деньги',
  xp: 20,
  content: `
    <h3>🛒 Butikoj — магазины</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>butiko</td><td>магазин</td></tr>
      <tr><td>vendejo</td><td>торговая точка</td></tr>
      <tr><td>merkato</td><td>рынок</td></tr>
      <tr><td>supermerkato</td><td>супермаркет</td></tr>
      <tr><td>panbutiko</td><td>булочная</td></tr>
      <tr><td>librovendejo</td><td>книжный магазин</td></tr>
    </table>

    <h3>💰 Mono kaj prezoj</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>mono</td><td>деньги</td></tr>
      <tr><td>eŭro</td><td>евро</td></tr>
      <tr><td>rublo</td><td>рубль</td></tr>
      <tr><td>prezo</td><td>цена</td></tr>
      <tr><td>kosta</td><td>дорогой</td></tr>
      <tr><td>malmultekosta</td><td>дешёвый</td></tr>
      <tr><td>pagi</td><td>платить</td></tr>
      <tr><td>kosti</td><td>стоить</td></tr>
    </table>

    <h3>🔑 Полезные фразы</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>Kiom ĝi kostas?</td><td>Сколько это стоит?</td></tr>
      <tr><td>Ĝi kostas kvin eŭrojn.</td><td>Это стоит пять евро.</td></tr>
      <tr><td>Mi volas aĉeti…</td><td>Я хочу купить…</td></tr>
      <tr><td>Ĉu vi havas…?</td><td>У вас есть…?</td></tr>
      <tr><td>Tro kosta!</td><td>Слишком дорого!</td></tr>
      <tr><td>Mi pagas per karto.</td><td>Я плачу картой.</td></tr>
    </table>

    <h3>✍️ Примеры</h3>
    <div class="lesson-example"><span class="eo">Mi iras al la butiko por aĉeti panon.</span> — Я иду в магазин, чтобы купить хлеб.</div>
    <div class="lesson-example"><span class="eo">Kiom kostas la pomoj?</span> — Сколько стоят яблоки?</div>
    <div class="lesson-example"><span class="eo">La libro estas tro kosta por mi.</span> — Книга слишком дорогая для меня.</div>
    <div class="lesson-example"><span class="eo">Ŝi aĉetis belan kukon.</span> — Она купила красивый пирог.</div>
    <div class="lesson-example"><span class="eo">Ni pagos per mono.</span> — Мы заплатим деньгами.</div>
    <div class="lesson-example"><span class="eo">La pano estas malmultekosta.</span> — Хлеб дешёвый.</div>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Bonan tagon! Kion vi deziras?</b> <span class="ru">— Добрый день! Что вы желаете?</span><br>
      — <b>Mi volas aĉeti panon kaj lakton.</b> <span class="ru">— Я хочу купить хлеб и молоко.</span><br>
      — <b>Ĉi tio kostas tri eŭrojn.</b> <span class="ru">— Это стоит три евро.</span><br>
      — <b>Bone, mi pagas per karto.</b> <span class="ru">— Хорошо, я плачу картой.</span>
    </div>
  `,
  exercises: [
    { q: 'Что означает <span class="eo">butiko</span>?', opts: ['рынок', 'магазин', 'аптека', 'кафе'], ans: 1 },
    { q: 'Что означает <span class="eo">mono</span>?', opts: ['цена', 'деньги', 'кошелёк', 'сдача'], ans: 1 },
    { q: 'Что означает <span class="eo">kosti</span>?', opts: ['платить', 'стоить', 'покупать', 'продавать'], ans: 1 },
    { q: 'Как сказать «платить»?', opts: ['pagi', 'kosti', 'aĉeti', 'vendi'], ans: 0 },
    { q: 'Что означает <span class="eo">kosta</span>?', opts: ['дешёвый', 'дорогой', 'новый', 'старый'], ans: 1 },
    { q: 'Как сказать «дешёвый»?', opts: ['kosta', 'malmultekosta', 'bela', 'granda'], ans: 1 },
    { q: 'Как спросить «Сколько стоит?»?', opts: ['Kiom ĝi kostas?', 'Kion ĝi faras?', 'Kie ĝi estas?', 'Kiu ĝi estas?'], ans: 0 },
    { q: 'Что означает <span class="eo">aĉeti</span>?', opts: ['продавать', 'покупать', 'платить', 'стоить'], ans: 1 },
    { q: 'Что означает <span class="eo">merkato</span>?', opts: ['магазин', 'рынок', 'склад', 'касса'], ans: 1 },
    { q: 'Как сказать «слишком дорого»?', opts: ['tre kosta', 'tro kosta', 'multe kosta', 'bona kosta'], ans: 1 }
  ],
  test: [
    { q: 'Что означает <span class="eo">vendi</span>?', opts: ['покупать', 'продавать', 'платить', 'стоить'], ans: 1, explain: 'Vendi = продавать.' },
    { q: 'Что означает <span class="eo">prezo</span>?', opts: ['деньги', 'цена', 'магазин', 'книга'], ans: 1, explain: 'Prezo = цена.' },
    { q: 'Что означает <span class="eo">librovendejo</span>?', opts: ['библиотека', 'книжный магазин', 'издательство', 'писатель'], ans: 1, explain: 'Libr- + vend- + -ej- + -o.' },
    { q: 'Введите «магазин» на эсперанто:', type: 'input', ans: 'butiko', explain: 'Butiko.' },
    { q: 'Введите «деньги» на эсперанто:', type: 'input', ans: 'mono', explain: 'Mono.' },
    { q: 'Введите «цена» на эсперанто:', type: 'input', ans: 'prezo', explain: 'Prezo.' },
    { q: 'Введите «платить» на эсперанто:', type: 'input', ans: 'pagi', explain: 'Pagi.' },
    { q: 'Как спросить «У вас есть хлеб?»', opts: ['Ĉu vi havas panon?', 'Kiom vi havas panon?', 'Kie vi havas panon?', 'Kial vi havas panon?'], ans: 0, explain: 'Ĉu vi havas = у вас есть.' },
    { q: 'Что означает <span class="eo">supermerkato</span>?', opts: ['магазин', 'супермаркет', 'рынок', 'склад'], ans: 1, explain: 'Super- + merkato.' },
    { q: 'Как сказать «Это слишком дорого»?', opts: ['Ĝi estas tro kosta', 'Ĝi estas tre kosta', 'Ĝi estas multe kosta', 'Ĝi estas bona kosta'], ans: 0, explain: 'Tro = слишком.' }
  ],
  builder: [
    { words: ['mi', 'volas', 'aĉeti', 'panon'], correct: ['mi', 'volas', 'aĉeti', 'panon'], translation: 'Я хочу купить хлеб.' },
    { words: ['kiom', 'kostas', 'la', 'pomoj'], correct: ['kiom', 'kostas', 'la', 'pomoj'], translation: 'Сколько стоят яблоки?' },
    { words: ['la', 'libro', 'estas', 'tro', 'kosta'], correct: ['la', 'libro', 'estas', 'tro', 'kosta'], translation: 'Книга слишком дорогая.' },
    { words: ['ŝi', 'aĉetis', 'belan', 'kukon'], correct: ['ŝi', 'aĉetis', 'belan', 'kukon'], translation: 'Она купила красивый пирог.' },
    { words: ['mi', 'pagas', 'per', 'karto'], correct: ['mi', 'pagas', 'per', 'karto'], translation: 'Я плачу картой.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 15: Погода и природа (НОВЫЙ)
   ═══════════════════════════════════════════════════════════ */
{
  id: 'a1-l15',
  title: 'Vetero kaj Naturo',
  desc: 'Погода, времена года, природа',
  xp: 20,
  content: `
    <h3>🌤️ Vetero — погода</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>vetero</td><td>погода</td></tr>
      <tr><td>suno</td><td>солнце</td></tr>
      <tr><td>pluvo</td><td>дождь</td></tr>
      <tr><td>neĝo</td><td>снег</td></tr>
      <tr><td>vento</td><td>ветер</td></tr>
      <tr><td>nubo</td><td>облако</td></tr>
      <tr><td>varma</td><td>тёплый</td></tr>
      <tr><td>malvarma</td><td>холодный</td></tr>
      <tr><td>varme</td><td>тепло</td></tr>
      <tr><td>malvarme</td><td>холодно</td></tr>
    </table>

    <h3>🌧️ Погодные глаголы</h3>
    <p>В эсперанто о погоде говорят безличными глаголами:</p>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>pluvas</td><td>идёт дождь</td></tr>
      <tr><td>neĝas</td><td>идёт снег</td></tr>
      <tr><td>sunas</td><td>светит солнце</td></tr>
      <tr><td>ventas</td><td>ветрено</td></tr>
    </table>

    <h3>🌳 Naturo</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>arbo</td><td>дерево</td></tr>
      <tr><td>floro</td><td>цветок</td></tr>
      <tr><td>herbo</td><td>трава</td></tr>
      <tr><td>rivero</td><td>река</td></tr>
      <tr><td>maro</td><td>море</td></tr>
      <tr><td>monto</td><td>гора</td></tr>
      <tr><td>ĉielo</td><td>небо</td></tr>
      <tr><td>tero</td><td>земля</td></tr>
      <tr><td>besto</td><td>животное</td></tr>
      <tr><td>birdo</td><td>птица</td></tr>
    </table>

    <h3>🔑 Ключевые фразы</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>Kia estas la vetero hodiaŭ?</td><td>Какая сегодня погода?</td></tr>
      <tr><td>Hodiaŭ estas varme.</td><td>Сегодня тепло.</td></tr>
      <tr><td>Hodiaŭ pluvas.</td><td>Сегодня идёт дождь.</td></tr>
      <tr><td>Mi ŝatas la sunon.</td><td>Я люблю солнце.</td></tr>
    </table>

    <h3>✍️ Примеры</h3>
    <div class="lesson-example"><span class="eo">Hodiaŭ estas bela vetero.</span> — Сегодня хорошая погода.</div>
    <div class="lesson-example"><span class="eo">Hieraŭ pluvis multe.</span> — Вчера шёл сильный дождь.</div>
    <div class="lesson-example"><span class="eo">En vintro ofte neĝas.</span> — Зимой часто идёт снег.</div>
    <div class="lesson-example"><span class="eo">La suno brilas en la ĉielo.</span> — Солнце светит в небе.</div>
    <div class="lesson-example"><span class="eo">La birdoj kantas en la arboj.</span> — Птицы поют на деревьях.</div>
    <div class="lesson-example"><span class="eo">Ni iras al la maro somere.</span> — Летом мы идём к морю.</div>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Kia estas la vetero hodiaŭ?</b> <span class="ru">— Какая сегодня погода?</span><br>
      — <b>Estas varme kaj sunas.</b> <span class="ru">— Тепло и светит солнце.</span><br>
      — <b>Ĉu vi volas promeni?</b> <span class="ru">— Хочешь пойти погулять?</span><br>
      — <b>Jes, kun plezuro!</b> <span class="ru">— Да, с удовольствием!</span>
    </div>
  `,
  exercises: [
    { q: 'Что означает <span class="eo">vetero</span>?', opts: ['время', 'погода', 'вечер', 'утро'], ans: 1 },
    { q: 'Что означает <span class="eo">pluvo</span>?', opts: ['снег', 'дождь', 'ветер', 'солнце'], ans: 1 },
    { q: 'Что означает <span class="eo">neĝo</span>?', opts: ['снег', 'дождь', 'лёд', 'ветер'], ans: 0 },
    { q: 'Что означает <span class="eo">suno</span>?', opts: ['луна', 'солнце', 'звезда', 'небо'], ans: 1 },
    { q: 'Что означает <span class="eo">vento</span>?', opts: ['дождь', 'снег', 'ветер', 'облако'], ans: 2 },
    { q: 'Как сказать «тёплый»?', opts: ['varma', 'malvarma', 'varme', 'malvarme'], ans: 0 },
    { q: 'Как сказать «холодно» (наречие)?', opts: ['varma', 'malvarma', 'varme', 'malvarme'], ans: 3 },
    { q: 'Что означает <span class="eo">arbo</span>?', opts: ['цветок', 'дерево', 'трава', 'куст'], ans: 1 },
    { q: 'Что означает <span class="eo">maro</span>?', opts: ['река', 'озеро', 'море', 'океан'], ans: 2 },
    { q: 'Что означает <span class="eo">monto</span>?', opts: ['гора', 'холм', 'долина', 'река'], ans: 0 }
  ],
  test: [
    { q: 'Как сказать «идёт дождь»?', opts: ['pluvo estas', 'pluvas', 'pluvas dud', 'la pluvo'], ans: 1, explain: 'Pluvas — безличный глагол.' },
    { q: 'Как сказать «идёт снег»?', opts: ['neĝo estas', 'neĝas', 'neĝo falas', 'neĝado'], ans: 1, explain: 'Neĝas — безличный глагол.' },
    { q: 'Что означает <span class="eo">ĉielo</span>?', opts: ['небо', 'земля', 'облако', 'солнце'], ans: 0, explain: 'Ĉielo = небо.' },
    { q: 'Введите «солнце» на эсперанто:', type: 'input', ans: 'suno', explain: 'Suno.' },
    { q: 'Введите «дождь» на эсперанто:', type: 'input', ans: 'pluvo', explain: 'Pluvo.' },
    { q: 'Введите «снег» на эсперанто:', type: 'input', ans: 'neĝo', explain: 'Neĝo.' },
    { q: 'Введите «дерево» на эсперанто:', type: 'input', ans: 'arbo', explain: 'Arbo.' },
    { q: 'Что означает <span class="eo">birdo</span>?', opts: ['рыба', 'птица', 'зверь', 'насекомое'], ans: 1, explain: 'Birdo = птица.' },
    { q: 'Что означает <span class="eo">tero</span>?', opts: ['небо', 'вода', 'земля', 'воздух'], ans: 2, explain: 'Tero = земля.' },
    { q: 'Как спросить «Какая сегодня погода?»', opts: ['Kia estas la vetero hodiaŭ?', 'Kie estas la vetero hodiaŭ?', 'Kiam estas la vetero hodiaŭ?', 'Kiu estas la vetero hodiaŭ?'], ans: 0, explain: 'Kia = какой.' }
  ],
  builder: [
    { words: ['hodiaŭ', 'estas', 'bela', 'vetero'], correct: ['hodiaŭ', 'estas', 'bela', 'vetero'], translation: 'Сегодня хорошая погода.' },
    { words: ['hieraŭ', 'pluvis', 'multe'], correct: ['hieraŭ', 'pluvis', 'multe'], translation: 'Вчера шёл сильный дождь.' },
    { words: ['en', 'vintro', 'ofte', 'neĝas'], correct: ['en', 'vintro', 'ofte', 'neĝas'], translation: 'Зимой часто идёт снег.' },
    { words: ['la', 'suno', 'brilas', 'en', 'la', 'ĉielo'], correct: ['la', 'suno', 'brilas', 'en', 'la', 'ĉielo'], translation: 'Солнце светит в небе.' },
    { words: ['ni', 'iras', 'al', 'la', 'maro', 'somere'], correct: ['ni', 'iras', 'al', 'la', 'maro', 'somere'], translation: 'Летом мы идём к морю.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 16: Приставки и суффиксы
   ═══════════════════════════════════════════════════════════ */
{
  id: 'a1-l16',
  title: 'Prefiksoj kaj Sufiksoj',
  desc: 'mal-, re-, -in-, -eg-, -et- и другие',
  xp: 20,
  content: `
    <h3>🧩 Словообразование — суперсила эсперанто</h3>
    <p>Зная корни и аффиксы, ты строишь десятки тысяч слов из небольшого набора корней.</p>

    <h3>🔝 Приставки</h3>
    <table>
      <tr><th>Приставка</th><th>Значение</th><th>Пример</th></tr>
      <tr><td>mal-</td><td>противоположное</td><td>bona → malbona (плохой)</td></tr>
      <tr><td>re-</td><td>снова</td><td>fari → refari (переделать)</td></tr>
      <tr><td>ge-</td><td>оба пола</td><td>patro → gepatroj (родители)</td></tr>
      <tr><td>dis-</td><td>врозь</td><td>doni → disdoni (раздать)</td></tr>
      <tr><td>ek-</td><td>начало действия</td><td>kanti → ekkanti (запеть)</td></tr>
    </table>

    <h3>🔻 Суффиксы</h3>
    <table>
      <tr><th>Суффикс</th><th>Значение</th><th>Пример</th></tr>
      <tr><td>-in-</td><td>женский пол</td><td>patro → patrino (мать)</td></tr>
      <tr><td>-id-</td><td>детёныш</td><td>kato → katido (котёнок)</td></tr>
      <tr><td>-eg-</td><td>увеличение</td><td>domo → domego (домище)</td></tr>
      <tr><td>-et-</td><td>уменьшение</td><td>domo → dometo (домик)</td></tr>
      <tr><td>-ar-</td><td>собрание</td><td>arbo → arbaro (лес)</td></tr>
      <tr><td>-ej-</td><td>место</td><td>lerni → lernejo (школа)</td></tr>
      <tr><td>-ist-</td><td>профессия</td><td>kanti → kantisto (певец)</td></tr>
      <tr><td>-ul-</td><td>человек с качеством</td><td>juna → junulo (юноша)</td></tr>
      <tr><td>-aĵ-</td><td>вещь/продукт</td><td>manĝi → manĝaĵo (еда)</td></tr>
    </table>

    <h3>✍️ Каскады</h3>
    <div class="lesson-example"><span class="eo">patro</span> → <span class="eo">patrino</span> → <span class="eo">gepatroj</span></div>
    <div class="lesson-example"><span class="eo">kato</span> → <span class="eo">katino</span> → <span class="eo">katido</span></div>
    <div class="lesson-example"><span class="eo">lerni</span> → <span class="eo">lernejo</span></div>
    <div class="lesson-example"><span class="eo">kanti</span> → <span class="eo">kantisto</span></div>
    <div class="lesson-example"><span class="eo">domo</span> → <span class="eo">dometo</span> → <span class="eo">domego</span></div>
    <div class="lesson-example"><span class="eo">arbo</span> → <span class="eo">arbaro</span></div>

    <h3>✍️ Примеры в контексте</h3>
    <div class="lesson-example"><span class="eo">La malbona homo ne estas bona.</span> — Плохой человек не хороший.</div>
    <div class="lesson-example"><span class="eo">Mi relegas la libron.</span> — Я перечитываю книгу.</div>
    <div class="lesson-example"><span class="eo">Ŝi estas kantistino.</span> — Она певица.</div>
    <div class="lesson-example"><span class="eo">Ni manĝas manĝaĵon.</span> — Мы едим еду.</div>
    <div class="lesson-example"><span class="eo">La patrino kaj la patro estas gepatroj.</span> — Мать и отец — родители.</div>
    <div class="lesson-example"><span class="eo">Mi loĝas en malgranda domo.</span> — Я живу в маленьком доме.</div>
  `,
  exercises: [
    { q: 'Что означает <b>mal-</b>?', opts: ['снова', 'противоположное', 'начало', 'вместе'], ans: 1 },
    { q: 'Что означает <b>-in-</b>?', opts: ['уменьшение', 'женский пол', 'место', 'детёныш'], ans: 1 },
    { q: 'Как из <span class="eo">kato</span> получить «котёнок»?', opts: ['katino', 'katego', 'kateto', 'katido'], ans: 3 },
    { q: 'Что означает <b>malbona</b>?', opts: ['очень хороший', 'плохой', 'маленький', 'новый'], ans: 1 },
    { q: 'Как из <span class="eo">domo</span> получить «домик»?', opts: ['domego', 'dometo', 'domino', 'domido'], ans: 1 },
    { q: 'Что означает <b>-ej-</b>?', opts: ['человек', 'место', 'детёныш', 'вещь'], ans: 1 },
    { q: 'Как из <span class="eo">kanti</span> получить «певец»?', opts: ['kantino', 'kantisto', 'kantido', 'kantego'], ans: 1 },
    { q: 'Что означает <b>-aĵ-</b>?', opts: ['место', 'вещь/продукт', 'женский пол', 'увеличение'], ans: 1 },
    { q: 'Что означает <b>-eg-</b>?', opts: ['уменьшение', 'увеличение', 'женский пол', 'место'], ans: 1 },
    { q: 'Что означает <b>-ar-</b>?', opts: ['собрание', 'человек', 'место', 'уменьшение'], ans: 0 }
  ],
  test: [
    { q: 'Что означает <b>-ist-</b>?', opts: ['профессия', 'место', 'детёныш', 'увеличение'], ans: 0, explain: 'Kantisto = певец.' },
    { q: 'Что означает <b>-ul-</b>?', opts: ['место', 'человек с качеством', 'детёныш', 'увеличение'], ans: 1, explain: 'Junulo = юноша.' },
    { q: 'Что означает <b>dis-</b>?', opts: ['снова', 'вместе', 'врозь', 'противоположное'], ans: 2, explain: 'Disdoni = раздать.' },
    { q: 'Введите «перечитать» (от legi):', type: 'input', ans: 'relegi', explain: 'Re- + legi.' },
    { q: 'Введите «школа» (от lerni):', type: 'input', ans: 'lernejo', explain: 'Lerni + -ej-.' },
    { q: 'Введите «котёнок» (от kato):', type: 'input', ans: 'katido', explain: 'Kato + -id-.' },
    { q: 'Введите «певица» (от kanti):', type: 'input', ans: 'kantistino', explain: 'Kant- + -ist- + -in- + -o.' },
    { q: 'Как из <span class="eo">patro</span> получить «мать»?', opts: ['patrido', 'patrino', 'patrego', 'patreto'], ans: 1, explain: 'Patro + -in-.' },
    { q: 'Что означает <b>ek-</b>?', opts: ['начало действия', 'конец', 'повтор', 'отрицание'], ans: 0, explain: 'Ekkanti = запеть.' },
    { q: 'Что означает <b>ge-</b>?', opts: ['снова', 'оба пола', 'начало', 'противоположное'], ans: 1, explain: 'Gepatroj = родители.' }
  ],
  builder: [
    { words: ['la', 'malbona', 'homo', 'ne', 'estas', 'bona'], correct: ['la', 'malbona', 'homo', 'ne', 'estas', 'bona'], translation: 'Плохой человек не хороший.' },
    { words: ['mi', 'relegas', 'la', 'libron'], correct: ['mi', 'relegas', 'la', 'libron'], translation: 'Я перечитываю книгу.' },
    { words: ['ŝi', 'estas', 'kantistino'], correct: ['ŝi', 'estas', 'kantistino'], translation: 'Она певица.' },
    { words: ['ni', 'manĝas', 'manĝaĵon'], correct: ['ni', 'manĝas', 'manĝaĵon'], translation: 'Мы едим еду.' },
    { words: ['mi', 'loĝas', 'en', 'malgranda', 'domo'], correct: ['mi', 'loĝas', 'en', 'malgranda', 'domo'], translation: 'Я живу в маленьком доме.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 17: Прошедшее время (-is)
   ═══════════════════════════════════════════════════════════ */
{
  id: 'a1-l17',
  title: 'Pasinta Tempo (-is)',
  desc: 'Как говорить о прошлом',
  xp: 20,
  content: `
    <h3>⏪ Прошедшее время: -is</h3>
    <p>Заменяем <b>-i</b> на <b>-is</b> — для всех лиц:</p>
    <table>
      <tr><th>Инфинитив</th><th>Прош. время</th><th>Перевод</th></tr>
      <tr><td>esti</td><td>estis</td><td>был</td></tr>
      <tr><td>havi</td><td>havis</td><td>имел</td></tr>
      <tr><td>iri</td><td>iris</td><td>шёл</td></tr>
      <tr><td>vidi</td><td>vidis</td><td>видел</td></tr>
      <tr><td>paroli</td><td>parolis</td><td>говорил</td></tr>
      <tr><td>fari</td><td>faris</td><td>делал</td></tr>
      <tr><td>lerni</td><td>lernis</td><td>учил</td></tr>
      <tr><td>legi</td><td>legis</td><td>читал</td></tr>
      <tr><td>skribi</td><td>skribis</td><td>писал</td></tr>
      <tr><td>manĝi</td><td>manĝis</td><td>ел</td></tr>
    </table>

    <h3>📅 Маркеры прошлого</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>hieraŭ</td><td>вчера</td></tr>
      <tr><td>antaŭe</td><td>раньше</td></tr>
      <tr><td>pasintsemajne</td><td>на прошлой неделе</td></tr>
      <tr><td>lastjare</td><td>в прошлом году</td></tr>
    </table>

    <h3>✍️ Примеры</h3>
    <div class="lesson-example"><span class="eo">Hieraŭ mi estis hejme.</span> — Вчера я был дома.</div>
    <div class="lesson-example"><span class="eo">Ni iris al la domo.</span> — Мы пошли к дому.</div>
    <div class="lesson-example"><span class="eo">Ŝi parolis kun li.</span> — Она говорила с ним.</div>
    <div class="lesson-example"><span class="eo">Li legis libron hieraŭ.</span> — Он читал книгу вчера.</div>
    <div class="lesson-example"><span class="eo">Mi manĝis panon kaj trinkis teon.</span> — Я ел хлеб и пил чай.</div>
    <div class="lesson-example"><span class="eo">Ili lernis Esperanton lastjare.</span> — Они учили эсперанто в прошлом году.</div>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Kion vi faris hieraŭ?</b><br>
      — <b>Mi iris al la lernejo kaj lernis Esperanton.</b><br>
      — <b>Ĉu vi estis hejme vespere?</b><br>
      — <b>Jes, mi estis hejme kaj legis libron.</b>
    </div>

    <div class="lesson-tip">💡 В эсперанто <b>3 времени</b>: <b>-as</b> (наст.), <b>-is</b> (прош.), <b>-os</b> (буд.).</div>
  `,
  exercises: [
    { q: 'Как звучит <span class="eo">vidi</span> в прошедшем времени?', opts: ['vidas', 'vidos', 'vidis', 'vidus'], ans: 2 },
    { q: 'Что означает <span class="eo">hieraŭ</span>?', opts: ['сегодня', 'вчера', 'завтра', 'сейчас'], ans: 1 },
    { q: 'Как сказать «Мы были дома»?', opts: ['Ni estas hejme', 'Ni estis hejme', 'Ni estos hejme', 'Ni estus hejme'], ans: 1 },
    { q: 'Как будет «я шёл»?', opts: ['mi iras', 'mi iris', 'mi iros', 'mi iru'], ans: 1 },
    { q: 'Что означает <span class="eo">estis</span>?', opts: ['есть', 'был', 'будет', 'был бы'], ans: 1 },
    { q: 'Как сказать «Она говорила»?', opts: ['Ŝi parolas', 'Ŝi parolis', 'Ŝi parolos', 'Ŝi parolu'], ans: 1 },
    { q: 'Что означает <span class="eo">antaŭe</span>?', opts: ['сейчас', 'раньше', 'потом', 'всегда'], ans: 1 },
    { q: 'Как сказать «Он читал»?', opts: ['Li legas', 'Li legis', 'Li legos', 'Li legu'], ans: 1 },
    { q: 'Как сказать «Мы писали»?', opts: ['Ni skribas', 'Ni skribis', 'Ni skribos', 'Ni skribu'], ans: 1 },
    { q: 'Что означает <span class="eo">manĝis</span>?', opts: ['ест', 'ел', 'будет есть', 'ел бы'], ans: 1 }
  ],
  test: [
    { q: 'Какое окончание у прошедшего?', opts: ['-as', '-is', '-os', '-us'], ans: 1, explain: '-is = прошедшее.' },
    { q: 'Что означает <span class="eo">lastjare</span>?', opts: ['в прошлом году', 'на прошлой неделе', 'два дня назад', 'давно'], ans: 0, explain: 'Lasta jaro = прошлый год.' },
    { q: 'Что означает <span class="eo">pasintsemajne</span>?', opts: ['в прошлом году', 'на прошлой неделе', 'два дня назад', 'вчера'], ans: 1, explain: 'Pasinta semajno = прошлая неделя.' },
    { q: 'Введите «она говорила»:', type: 'input', ans: 'ŝi parolis', explain: 'Paroli → parolis.' },
    { q: 'Введите «я был»:', type: 'input', ans: 'mi estis', explain: 'Esti → estis.' },
    { q: 'Введите «мы читали»:', type: 'input', ans: 'ni legis', explain: 'Legi → legis.' },
    { q: 'Введите «он писал»:', type: 'input', ans: 'li skribis', explain: 'Skribi → skribis.' },
    { q: 'Как сказать «Вчера я был дома»?', opts: ['Hieraŭ mi estas hejme', 'Hieraŭ mi estis hejme', 'Hieraŭ mi estos hejme', 'Hieraŭ mi estus hejme'], ans: 1, explain: 'Hieraŭ + estis.' },
    { q: 'Как сказать «Они учили эсперанто»?', opts: ['Ili lernas Esperanton', 'Ili lernis Esperanton', 'Ili lernos Esperanton', 'Ili lernu Esperanton'], ans: 1, explain: 'Lerni → lernis.' },
    { q: 'Форма прошедшего для всех лиц:', opts: ['разная', 'одна', 'зависит от числа', 'зависит от рода'], ans: 1, explain: '-is для всех лиц.' }
  ],
  builder: [
    { words: ['hieraŭ', 'mi', 'estis', 'hejme'], correct: ['hieraŭ', 'mi', 'estis', 'hejme'], translation: 'Вчера я был дома.' },
    { words: ['ni', 'iris', 'al', 'la', 'domo'], correct: ['ni', 'iris', 'al', 'la', 'domo'], translation: 'Мы пошли к дому.' },
    { words: ['ŝi', 'parolis', 'kun', 'li'], correct: ['ŝi', 'parolis', 'kun', 'li'], translation: 'Она говорила с ним.' },
    { words: ['li', 'legis', 'libron', 'hieraŭ'], correct: ['li', 'legis', 'libron', 'hieraŭ'], translation: 'Он читал книгу вчера.' },
    { words: ['mi', 'manĝis', 'panon', 'kaj', 'trinkis', 'teon'], correct: ['mi', 'manĝis', 'panon', 'kaj', 'trinkis', 'teon'], translation: 'Я ел хлеб и пил чай.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 18: Будущее время (-os)
   ═══════════════════════════════════════════════════════════ */
{
  id: 'a1-l18',
  title: 'Estonta Tempo (-os)',
  desc: 'Планы и предсказания',
  xp: 20,
  content: `
    <h3>⏩ Будущее время: -os</h3>
    <p>Заменяем <b>-i</b> на <b>-os</b> — для всех лиц:</p>
    <table>
      <tr><th>Инфинитив</th><th>Будущее</th><th>Перевод</th></tr>
      <tr><td>esti</td><td>estos</td><td>будет</td></tr>
      <tr><td>iri</td><td>iros</td><td>пойдёт</td></tr>
      <tr><td>fari</td><td>faros</td><td>сделает</td></tr>
      <tr><td>vidi</td><td>vidos</td><td>увидит</td></tr>
      <tr><td>havi</td><td>havos</td><td>будет иметь</td></tr>
      <tr><td>paroli</td><td>parolos</td><td>будет говорить</td></tr>
      <tr><td>lerni</td><td>lernos</td><td>будет учить</td></tr>
      <tr><td>legi</td><td>legos</td><td>будет читать</td></tr>
      <tr><td>manĝi</td><td>manĝos</td><td>будет есть</td></tr>
    </table>

    <h3>📅 Маркеры будущего</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>morgaŭ</td><td>завтра</td></tr>
      <tr><td>poste</td><td>потом</td></tr>
      <tr><td>baldaŭ</td><td>скоро</td></tr>
      <tr><td>venontjare</td><td>в следующем году</td></tr>
    </table>

    <h3>✍️ Примеры</h3>
    <div class="lesson-example"><span class="eo">Morgaŭ mi iros al la lernejo.</span> — Завтра я пойду в школу.</div>
    <div class="lesson-example"><span class="eo">Ni vidos nin baldaŭ.</span> — Мы скоро увидимся.</div>
    <div class="lesson-example"><span class="eo">Ŝi faros ĝin morgaŭ.</span> — Она сделает это завтра.</div>
    <div class="lesson-example"><span class="eo">Li lernos Esperanton venontjare.</span> — Он будет учить эсперанто в следующем году.</div>
    <div class="lesson-example"><span class="eo">Ni manĝos kune poste.</span> — Мы поедим вместе потом.</div>
    <div class="lesson-example"><span class="eo">Ili estos hejme vespere.</span> — Они будут дома вечером.</div>
    <div class="lesson-example"><span class="eo">Mi legos tiun libron poste.</span> — Я прочитаю эту книгу потом.</div>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Kion vi faros morgaŭ?</b><br>
      — <b>Mi iros al la lernejo kaj lernos Esperanton.</b><br>
      — <b>Ĉu vi estos hejme vespere?</b><br>
      — <b>Jes, mi estos hejme kaj legos libron.</b>
    </div>

    <div class="lesson-tip">💡 В эсперанто <b>всегда</b> -os, если речь о будущем.</div>
  `,
  exercises: [
    { q: 'Какое окончание у будущего времени?', opts: ['-as', '-is', '-os', '-us'], ans: 2 },
    { q: 'Что означает <span class="eo">morgaŭ</span>?', opts: ['сегодня', 'вчера', 'завтра', 'потом'], ans: 2 },
    { q: 'Как сказать «Я буду дома»?', opts: ['Mi estas hejme', 'Mi estis hejme', 'Mi estos hejme', 'Mi estus hejme'], ans: 2 },
    { q: 'Как будет «я пойду»?', opts: ['mi iras', 'mi iris', 'mi iros', 'mi iru'], ans: 2 },
    { q: 'Что означает <span class="eo">baldaŭ</span>?', opts: ['давно', 'скоро', 'сейчас', 'потом'], ans: 1 },
    { q: 'Как сказать «Она сделает»?', opts: ['Ŝi faras', 'Ŝi faris', 'Ŝi faros', 'Ŝi faru'], ans: 2 },
    { q: 'Что означает <span class="eo">poste</span>?', opts: ['раньше', 'потом', 'сейчас', 'всегда'], ans: 1 },
    { q: 'Как сказать «Мы будем дома»?', opts: ['Ni estas hejme', 'Ni estis hejme', 'Ni estos hejme', 'Ni estus hejme'], ans: 2 },
    { q: 'Как сказать «Он прочитает»?', opts: ['Li legas', 'Li legis', 'Li legos', 'Li legu'], ans: 2 },
    { q: 'Что означает <span class="eo">manĝos</span>?', opts: ['ест', 'ел', 'будет есть', 'ел бы'], ans: 2 }
  ],
  test: [
    { q: 'Какое окончание у будущего?', opts: ['-as', '-is', '-os', '-us'], ans: 2, explain: '-os = будущее.' },
    { q: 'Что означает <span class="eo">venontjare</span>?', opts: ['в прошлом году', 'в этом году', 'в следующем году', 'давно'], ans: 2, explain: 'Venonta jaro = следующий год.' },
    { q: 'Что означает <span class="eo">baldaŭ</span>?', opts: ['давно', 'скоро', 'сейчас', 'потом'], ans: 1, explain: 'Baldaŭ = скоро.' },
    { q: 'Введите «она сделает»:', type: 'input', ans: 'ŝi faros', explain: 'Fari → faros.' },
    { q: 'Введите «я буду»:', type: 'input', ans: 'mi estos', explain: 'Esti → estos.' },
    { q: 'Введите «мы будем читать»:', type: 'input', ans: 'ni legos', explain: 'Legi → legos.' },
    { q: 'Введите «они пойдут»:', type: 'input', ans: 'ili iros', explain: 'Iri → iros.' },
    { q: 'Как сказать «Мы будем дома»?', opts: ['Ni estas hejme', 'Ni estis hejme', 'Ni estos hejme', 'Ni estus hejme'], ans: 2, explain: 'Esti → estos.' },
    { q: 'Как сказать «Завтра я пойду в школу»?', opts: ['Morgaŭ mi iros al la lernejo', 'Morgaŭ mi iris al la lernejo', 'Morgaŭ mi iras al la lernejo', 'Morgaŭ mi iru al la lernejo'], ans: 0, explain: 'Iri → iros.' },
    { q: 'Как сказать «Мы скоро увидимся»?', opts: ['Ni vidos nin baldaŭ', 'Ni vidis nin baldaŭ', 'Ni vidas nin baldaŭ', 'Ni vidu nin baldaŭ'], ans: 0, explain: 'Vidi → vidos.' }
  ],
  builder: [
    { words: ['morgaŭ', 'mi', 'iros', 'al', 'la', 'lernejo'], correct: ['morgaŭ', 'mi', 'iros', 'al', 'la', 'lernejo'], translation: 'Завтра я пойду в школу.' },
    { words: ['ni', 'vidos', 'nin', 'baldaŭ'], correct: ['ni', 'vidos', 'nin', 'baldaŭ'], translation: 'Мы скоро увидимся.' },
    { words: ['ŝi', 'faros', 'ĝin', 'morgaŭ'], correct: ['ŝi', 'faros', 'ĝin', 'morgaŭ'], translation: 'Она сделает это завтра.' },
    { words: ['ili', 'estos', 'hejme', 'poste'], correct: ['ili', 'estos', 'hejme', 'poste'], translation: 'Они будут дома потом.' },
    { words: ['mi', 'legos', 'tiun', 'libron', 'poste'], correct: ['mi', 'legos', 'tiun', 'libron', 'poste'], translation: 'Я прочитаю эту книгу потом.' }
  ]
}

];