/* ============================================================
   VA ESPERANTO — КУРС B1 (18 уроков)
   По методике Бориса Колкера, расширенный
   Экосистема Vulpeto Abeleto · 2026
   ============================================================
   18 уроков: причастия, пассив, косвенная речь, все типы
   придаточных, стилистика, письменная речь, культура.
   ============================================================ */

window.LESSONS_B1 = [

/* ═══════════════════════════════════════════════════════════
   УРОК 1: Причастия — введение
   ═══════════════════════════════════════════════════════════ */
{
  id: 'b1-l1',
  title: 'Причастия — введение',
  desc: 'Три активных формы: -anta, -inta, -onta',
  xp: 30,
  content: `
    <h3>🎬 Что такое причастие</h3>
    <p><b>Причастие</b> — глагольная форма, описывающая действие как признак. В русском: «читающий», «прочитавший», «читаемый». В эсперанто <b>6 причастий</b> — 3 активных и 3 пассивных.</p>

    <h3>🧩 Схема — 6 причастий</h3>
    <table>
      <tr><th>Время</th><th>Актив (делающий)</th><th>Пассив (с кем делают)</th></tr>
      <tr><td>Настоящее</td><td>-anta</td><td>-ata</td></tr>
      <tr><td>Прошедшее</td><td>-inta</td><td>-ita</td></tr>
      <tr><td>Будущее</td><td>-onta</td><td>-ota</td></tr>
    </table>
    <p>Мнемоника: <b>a/i/o</b> — как времена <b>-as/-is/-os</b>. Первая группа — актив, вторая — пассив.</p>

    <h3>📖 Активные причастия</h3>
    <table>
      <tr><th>Форма</th><th>Значение</th><th>Пример</th></tr>
      <tr><td>-anta</td><td>тот, кто делает сейчас</td><td><span class="eo">leganta knabo</span> — читающий мальчик</td></tr>
      <tr><td>-inta</td><td>тот, кто делал раньше</td><td><span class="eo">leginta knabo</span> — мальчик, который читал</td></tr>
      <tr><td>-onta</td><td>тот, кто будет делать</td><td><span class="eo">legonta knabo</span> — мальчик, который будет читать</td></tr>
    </table>

    <div class="lesson-tip">💡 Причастие согласуется с существительным в числе и падеже: <span class="eo">leganta knabo → legantaj knaboj → legantan knabon</span>.</div>

    <h3>🔗 С -o (существительное) и -e (наречие)</h3>
    <table>
      <tr><th>Причастие</th><th>-o (сущ.)</th><th>-e (наречие)</th></tr>
      <tr><td>leganta</td><td>leganto — читающий</td><td>legante — читая</td></tr>
      <tr><td>leginta</td><td>leginto — тот, кто читал</td><td>leginte — прочитав</td></tr>
      <tr><td>legonta</td><td>legonto — тот, кто будет читать</td><td>legonte — собираясь читать</td></tr>
    </table>

    <h3>✍️ Примеры в контексте</h3>
    <div class="lesson-example"><span class="eo">La kantanta birdo sidas sur la branĉo.</span> — Поющая птица сидит на ветке.</div>
    <div class="lesson-example"><span class="eo">La falinta folio kuŝas sur la tero.</span> — Упавший лист лежит на земле.</div>
    <div class="lesson-example"><span class="eo">La venonta semajno estos grava.</span> — Следующая неделя будет важной.</div>
    <div class="lesson-example"><span class="eo">Legante, li notis gravajn ideojn.</span> — Читая, он отмечал важные идеи.</div>
    <div class="lesson-example"><span class="eo">Fininte la laboron, ŝi iris hejmen.</span> — Закончив работу, она пошла домой.</div>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Kion vi vidas tie?</b> <span class="ru">— Что ты там видишь?</span><br>
      — <b>Mi vidas kurantan knabon.</b> <span class="ru">— Я вижу бегущего мальчика.</span><br>
      — <b>Ĉu li estas la venkinta sportisto?</b> <span class="ru">— Это победивший спортсмен?</span><br>
      — <b>Eble. La venonta konkurso estos morgaŭ.</b> <span class="ru">— Возможно. Следующее соревнование будет завтра.</span>
    </div>
  `,
  exercises: [
    { q: 'Какое причастие означает «делающий сейчас»?', opts: ['-inta', '-anta', '-onta', '-ita'], ans: 1 },
    { q: 'Какое причастие означает «тот, кто делал»?', opts: ['-inta', '-anta', '-onta', '-ata'], ans: 0 },
    { q: 'Что означает <span class="eo">leganta</span>?', opts: ['читаемый', 'читающий', 'прочитавший', 'который будет читать'], ans: 1 },
    { q: 'Что означает <span class="eo">leginta</span>?', opts: ['читающий', 'читаемый', 'который читал', 'который будет читать'], ans: 2 },
    { q: 'Что означает <span class="eo">legonta</span>?', opts: ['который читает', 'который читал', 'который будет читать', 'прочитанный'], ans: 2 },
    { q: 'Как сказать «поющая птица»?', opts: ['kantinta birdo', 'kantanta birdo', 'kantonta birdo', 'kantata birdo'], ans: 1 },
    { q: 'Как сказать «упавший лист»?', opts: ['falanta folio', 'falinta folio', 'falonta folio', 'falata folio'], ans: 1 },
    { q: 'Как сказать «предстоящая неделя»?', opts: ['venanta semajno', 'veninta semajno', 'venonta semajno', 'venata semajno'], ans: 2 },
    { q: 'Что означает <span class="eo">legante</span>?', opts: ['читающий', 'читая', 'прочитав', 'собираясь читать'], ans: 1 },
    { q: 'Что означает <span class="eo">fininte</span>?', opts: ['заканчивая', 'закончив', 'собираясь закончить', 'закончить'], ans: 1 }
  ],
  test: [
    { q: 'Сколько форм причастий в эсперанто?', opts: ['3', '4', '6', '9'], ans: 2, explain: '3 времени × 2 залога = 6.' },
    { q: 'Какой суффикс даёт настоящее время активного причастия?', opts: ['-ant-', '-int-', '-ont-', '-at-'], ans: 0, explain: '-a- = настоящее.' },
    { q: 'Согласуется ли причастие с существительным?', opts: ['нет', 'да', 'только в ед. ч.', 'только по падежу'], ans: 1, explain: 'Как прилагательное.' },
    { q: 'Введите «читающий мальчик»:', type: 'input', ans: 'leganta knabo', explain: 'Leg- + -ant- + -a + knabo.' },
    { q: 'Введите «упавшие листья»:', type: 'input', ans: 'falintaj folioj', explain: 'Fal- + -int- + -aj + folioj.' },
    { q: 'Введите «приходящий гость»:', type: 'input', ans: 'venanta gasto', explain: 'Ven- + -ant- + -a + gasto.' },
    { q: 'Введите «будущее время»:', type: 'input', ans: 'estonta tempo', explain: 'Est- + -ont- + -a + tempo.' },
    { q: 'Что означает <span class="eo">kreskanta planto</span>?', opts: ['выросшее растение', 'растущее растение', 'растение, которое вырастет', 'растительное'], ans: 1, explain: 'Kresk- + -ant-' },
    { q: 'Что означает <span class="eo">forgesita</span>?', opts: ['забывающий', 'забытый', 'забывший', 'забывающийся'], ans: 1, explain: 'Это пассив, но узнаётся.' },
    { q: 'Какие буквы у активных причастий?', opts: ['a/i/o', 'а/u/o', 'i/a/e', 'o/i/a'], ans: 0, explain: 'Anta/inta/onta.' }
  ],
  builder: [
    { words: ['la', 'kantanta', 'birdo', 'estas', 'bela'], correct: ['la', 'kantanta', 'birdo', 'estas', 'bela'], translation: 'Поющая птица красивая.' },
    { words: ['mi', 'vidas', 'kurantan', 'knabon'], correct: ['mi', 'vidas', 'kurantan', 'knabon'], translation: 'Я вижу бегущего мальчика.' },
    { words: ['la', 'falintaj', 'folioj', 'kuŝas', 'sur', 'la', 'tero'], correct: ['la', 'falintaj', 'folioj', 'kuŝas', 'sur', 'la', 'tero'], translation: 'Упавшие листья лежат на земле.' },
    { words: ['venontaj', 'generacioj', 'memoros', 'nin'], correct: ['venontaj', 'generacioj', 'memoros', 'nin'], translation: 'Будущие поколения будут нас помнить.' },
    { words: ['legante', 'li', 'notis', 'gravajn', 'ideojn'], correct: ['legante', 'li', 'notis', 'gravajn', 'ideojn'], translation: 'Читая, он отмечал важные идеи.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 2: Пассивные причастия
   ═══════════════════════════════════════════════════════════ */
{
  id: 'b1-l2',
  title: 'Пассивные причастия',
  desc: 'Формы -ata, -ita, -ota',
  xp: 30,
  content: `
    <h3>🔁 Что такое пассивное причастие</h3>
    <p><b>Пассивное причастие</b> описывает предмет, <b>над которым</b> совершается действие. В русском: «читаемый», «прочитанный».</p>

    <h3>🧩 Три формы</h3>
    <table>
      <tr><th>Форма</th><th>Значение</th><th>Пример</th></tr>
      <tr><td>-ata</td><td>то, что делают сейчас</td><td><span class="eo">legata libro</span> — читаемая книга</td></tr>
      <tr><td>-ita</td><td>то, что уже сделано</td><td><span class="eo">legita libro</span> — прочитанная книга</td></tr>
      <tr><td>-ota</td><td>то, что предстоит сделать</td><td><span class="eo">legota libro</span> — книга, которую прочтут</td></tr>
    </table>

    <h3>📖 Актив vs Пассив</h3>
    <table>
      <tr><th>Актив</th><th>Пассив</th></tr>
      <tr><td><span class="eo">leganta knabo</span> — читающий мальчик</td><td><span class="eo">legata libro</span> — читаемая книга</td></tr>
      <tr><td><span class="eo">leginta knabo</span> — мальчик, который читал</td><td><span class="eo">legita libro</span> — прочитанная книга</td></tr>
    </table>

    <div class="lesson-tip">💡 Актив — предмет <b>сам</b> действует. Пассив — с ним <b>производят</b> действие. <span class="eo">Amanta patrino</span> — любящая мать. <span class="eo">Amata patrino</span> — любимая мать.</div>

    <h3>✍️ Примеры</h3>
    <div class="lesson-example"><span class="eo">La legata libro estas tre interesa.</span> — Читаемая книга очень интересная.</div>
    <div class="lesson-example"><span class="eo">La legita libro kuŝas sur la tablo.</span> — Прочитанная книга лежит на столе.</div>
    <div class="lesson-example"><span class="eo">La preparata manĝaĵo odoras bone.</span> — Готовящаяся еда хорошо пахнет.</div>
    <div class="lesson-example"><span class="eo">La preparita manĝaĵo estas sur la tablo.</span> — Приготовленная еда на столе.</div>
    <div class="lesson-example"><span class="eo">La kantata kanto plaĉas al ĉiuj.</span> — Исполняемая песня нравится всем.</div>
    <div class="lesson-example"><span class="eo">La kantita kanto restos en mia memoro.</span> — Спетая песня останется в моей памяти.</div>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Kion vi legas?</b> <span class="ru">— Что ты читаешь?</span><br>
      — <b>Mi legas tre interesan libron.</b> <span class="ru">— Я читаю очень интересную книгу.</span><br>
      — <b>Ĉu vi jam legis ĝin?</b> <span class="ru">— Ты её уже читал?</span><br>
      — <b>Ne, ĝi estas ankoraŭ legata.</b> <span class="ru">— Нет, она всё ещё читается.</span>
    </div>
  `,
  exercises: [
    { q: 'Какое пассивное причастие означает «делаемый сейчас»?', opts: ['-ita', '-ata', '-ota', '-anta'], ans: 1 },
    { q: 'Что означает <span class="eo">legita</span>?', opts: ['читающий', 'читаемый', 'прочитанный', 'который будет прочитан'], ans: 2 },
    { q: 'Что означает <span class="eo">legota</span>?', opts: ['читаемый', 'прочитанный', 'тот, что предстоит прочитать', 'читающий'], ans: 2 },
    { q: 'Как сказать «прочитанная книга»?', opts: ['leganta libro', 'legita libro', 'legota libro', 'legata libro'], ans: 1 },
    { q: 'Как сказать «готовящаяся еда»?', opts: ['preparanta manĝaĵo', 'preparata manĝaĵo', 'preparita manĝaĵo', 'preparota manĝaĵo'], ans: 1 },
    { q: 'Что означает <span class="eo">amata patrino</span>?', opts: ['любящая мать', 'любимая мать', 'мать, которая полюбит', 'мать, которая любила'], ans: 1 },
    { q: 'Что означает <span class="eo">kantita kanto</span>?', opts: ['песня, которую поют', 'спетая песня', 'песня, которую будут петь', 'поющая песня'], ans: 1 },
    { q: 'Как сказать «приготовленная еда»?', opts: ['preparanta manĝaĵo', 'preparata manĝaĵo', 'preparita manĝaĵo', 'preparota manĝaĵo'], ans: 2 },
    { q: 'Как сказать «закрытая дверь»?', opts: ['fermanta pordo', 'fermata pordo', 'fermita pordo', 'fermota pordo'], ans: 2 },
    { q: 'Что означает <span class="eo">venditaj pomoj</span>?', opts: ['продаваемые яблоки', 'проданные яблоки', 'яблоки, которые продадут', 'продающие яблоки'], ans: 1 }
  ],
  test: [
    { q: 'Сколько пассивных причастий?', opts: ['2', '3', '4', '6'], ans: 1, explain: '-ata, -ita, -ota.' },
    { q: 'Что означает <span class="eo">skribata letero</span>?', opts: ['писавший письмо', 'пишущееся письмо', 'написанное письмо', 'письмо, которое будет написано'], ans: 1, explain: 'Skrib- + -at-.' },
    { q: 'Что означает <span class="eo">fermita pordo</span>?', opts: ['закрывающаяся дверь', 'закрытая дверь', 'дверь, которую закроют', 'закрывающая дверь'], ans: 1, explain: 'Ferm- + -it-.' },
    { q: 'Введите «прочитанная книга»:', type: 'input', ans: 'legita libro', explain: 'Leg- + -it- + -a.' },
    { q: 'Введите «читаемая книга»:', type: 'input', ans: 'legata libro', explain: 'Leg- + -at- + -a.' },
    { q: 'Введите «книга, которую предстоит прочитать»:', type: 'input', ans: 'legota libro', explain: 'Leg- + -ot- + -a.' },
    { q: 'Введите «закрытая дверь»:', type: 'input', ans: 'fermita pordo', explain: 'Ferm- + -it-.' },
    { q: 'Как переводится <span class="eo">la kantata kanto</span>?', opts: ['спетая песня', 'песня, которую поют', 'поющая песня', 'песня, которую споют'], ans: 1, explain: '-at- = делаемое.' },
    { q: 'Что означает <span class="eo">vidata filmo</span>?', opts: ['увиденный фильм', 'просматриваемый фильм', 'фильм, который увидят', 'видящий фильм'], ans: 1, explain: 'Vid- + -at-.' },
    { q: 'Что означает <span class="eo">manĝota pano</span>?', opts: ['хлеб, который едят', 'съеденный хлеб', 'хлеб, который предстоит съесть', 'едящий хлеб'], ans: 2, explain: '-ot- = будущий пассив.' }
  ],
  builder: [
    { words: ['la', 'legata', 'libro', 'estas', 'interesa'], correct: ['la', 'legata', 'libro', 'estas', 'interesa'], translation: 'Читаемая книга интересная.' },
    { words: ['la', 'legita', 'libro', 'kuŝas', 'sur', 'la', 'tablo'], correct: ['la', 'legita', 'libro', 'kuŝas', 'sur', 'la', 'tablo'], translation: 'Прочитанная книга лежит на столе.' },
    { words: ['la', 'preparita', 'manĝaĵo', 'estas', 'sur', 'la', 'tablo'], correct: ['la', 'preparita', 'manĝaĵo', 'estas', 'sur', 'la', 'tablo'], translation: 'Приготовленная еда на столе.' },
    { words: ['mi', 'aŭdis', 'la', 'kantatan', 'kanton'], correct: ['mi', 'aŭdis', 'la', 'kantatan', 'kanton'], translation: 'Я слышал исполняемую песню.' },
    { words: ['la', 'venditaj', 'pomoj', 'estas', 'freŝaj'], correct: ['la', 'venditaj', 'pomoj', 'estas', 'freŝaj'], translation: 'Проданные яблоки свежие.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 3: Страдательный залог
   ═══════════════════════════════════════════════════════════ */
{
  id: 'b1-l3',
  title: 'Страдательный залог',
  desc: 'Esti + пассивное причастие, предлог de',
  xp: 30,
  content: `
    <h3>🔁 Что такое страдательный залог</h3>
    <p><b>Актив:</b> «Пётр читает книгу». <b>Пассив:</b> «Книга читается Петром».</p>
    <p>В эсперанто пассив: <b>esti + пассивное причастие</b>. Действующее лицо — предлог <b>de</b>.</p>

    <h3>🧩 Формула</h3>
    <div class="lesson-tip" style="text-align:center; font-size:16px;">
      <b>esti</b> (в нужном времени) + <b>пассивное причастие</b> + <b>de</b> + <b>исполнитель</b>
    </div>

    <h3>📊 Все времена пассива</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>La libro estas legata.</td><td>Книгу читают.</td></tr>
      <tr><td>La libro estis legata.</td><td>Книгу читали.</td></tr>
      <tr><td>La libro estos legata.</td><td>Книгу будут читать.</td></tr>
      <tr><td>La libro estas legita.</td><td>Книга прочитана.</td></tr>
      <tr><td>La libro estis legita.</td><td>Книга была прочитана.</td></tr>
      <tr><td>La libro estos legita.</td><td>Книга будет прочитана.</td></tr>
    </table>

    <h3>🔑 Исполнитель: предлог de</h3>
    <div class="lesson-example"><span class="eo">La libro estis skribita <b>de</b> Tolstoj.</span> — Книга была написана Толстым.</div>
    <div class="lesson-example"><span class="eo">La domo estos konstruita <b>de</b> ni.</span> — Дом будет построен нами.</div>

    <div class="lesson-tip">💡 <b>de</b> вводит исполнителя. <b>per</b> вводит инструмент. <span class="eo">Skribita de Petro</span> — написанный Петром. <span class="eo">Skribita per krajono</span> — написанный карандашом.</div>

    <h3>✍️ Примеры</h3>
    <div class="lesson-example"><span class="eo">Tiu domo estis konstruita antaŭ cent jaroj.</span> — Этот дом был построен сто лет назад.</div>
    <div class="lesson-example"><span class="eo">La letero estos sendita morgaŭ.</span> — Письмо будет отправлено завтра.</div>
    <div class="lesson-example"><span class="eo">La manĝaĵo estas preparata de mia patrino.</span> — Еда готовится моей матерью.</div>
    <div class="lesson-example"><span class="eo">Esperanto estas parolata en multaj landoj.</span> — На эсперанто говорят во многих странах.</div>
    <div class="lesson-example"><span class="eo">La libro estos tradukita en plurajn lingvojn.</span> — Книга будет переведена на несколько языков.</div>

    <h3>📌 Когда пассив полезен</h3>
    <p>В научном и публицистическом стиле пассив часто заменяет безличные. В разговорной речи предпочитают <b>oni</b>:</p>
    <table>
      <tr><th>Пассив (книжный)</th><th>Актив (разговорный)</th></tr>
      <tr><td>La letero estis skribita.</td><td>Oni skribis la leteron.</td></tr>
      <tr><td>La domo estas konstruata.</td><td>Oni konstruas la domon.</td></tr>
    </table>
  `,
  exercises: [
    { q: 'Как образуется пассив?', opts: ['esti + активное причастие', 'esti + пассивное причастие', 'havi + причастие', 'oni + глагол'], ans: 1 },
    { q: 'Каким предлогом вводится исполнитель?', opts: ['al', 'de', 'per', 'el'], ans: 1 },
    { q: 'Каким предлогом вводится инструмент?', opts: ['al', 'de', 'per', 'el'], ans: 2 },
    { q: 'Как сказать «Книга была написана Толстым»?', opts: ['La libro estis skribita de Tolstoj', 'La libro estis skribita per Tolstoj', 'La libro estis skribanta de Tolstoj', 'La libro skribis Tolstoj'], ans: 0 },
    { q: 'Как сказать «Письмо будет отправлено завтра»?', opts: ['La letero estos sendata morgaŭ', 'La letero estos sendita morgaŭ', 'La letero estos sendonta morgaŭ', 'La letero estos sendota morgaŭ'], ans: 1 },
    { q: 'Что означает <span class="eo">La domo estas konstruata</span>?', opts: ['Дом построен', 'Дом строится', 'Дом будет строиться', 'Дом строил'], ans: 1 },
    { q: 'Что означает <span class="eo">La domo estas konstruita</span>?', opts: ['Дом строится', 'Дом построен', 'Дом будет построен', 'Дом строил'], ans: 1 },
    { q: 'Разговорный эквивалент пассива:', opts: ['oni + глагол', 'esti + причастие', 'havi + причастие', 'повелительное'], ans: 0 },
    { q: 'Что означает <span class="eo">La letero estis sendita de Petro</span>?', opts: ['Письмо отправлено Петру', 'Письмо было отправлено Петром', 'Письмо отправляют Петру', 'Петру пишут письмо'], ans: 1 },
    { q: 'Что означает <span class="eo">Esperanto estas parolata ĉie</span>?', opts: ['Эсперанто говорит везде', 'На эсперанто говорят везде', 'Эсперанто будет говорить', 'Эсперанто говорил везде'], ans: 1 }
  ],
  test: [
    { q: 'Как образуется пассив?', opts: ['esti + активное причастие', 'esti + пассивное причастие', 'havi + причастие', 'fari + причастие'], ans: 1, explain: 'Esti + -at/-it/-ot.' },
    { q: 'Чем вводится исполнитель?', opts: ['al', 'de', 'per', 'en'], ans: 1, explain: 'De = кем.' },
    { q: 'Чем вводится инструмент?', opts: ['al', 'de', 'per', 'el'], ans: 2, explain: 'Per = посредством чего.' },
    { q: 'Введите «Дом был построен»:', type: 'input', ans: 'la domo estis konstruita', explain: 'Estis + konstruita.' },
    { q: 'Введите «Письмо написано»:', type: 'input', ans: 'la letero estas skribita', explain: 'Estas + skribita.' },
    { q: 'Введите «Песня будет спета»:', type: 'input', ans: 'la kanto estos kantita', explain: 'Estos + kantita.' },
    { q: 'Введите «Еда готовится матерью»:', type: 'input', ans: 'la manĝaĵo estas preparata de la patrino', explain: 'De la patrino.' },
    { q: 'Что означает <span class="eo">La libro estis legita</span>?', opts: ['Книга читается', 'Книга была прочитана', 'Книга будет прочитана', 'Книга читалась'], ans: 1, explain: '-it- = результат.' },
    { q: 'Как сказать «Книга переведена на эсперанто»?', opts: ['La libro tradukiĝas Esperanten', 'La libro estas tradukita en Esperanton', 'La libro tradukas Esperanton', 'La libro tradukos Esperanton'], ans: 1, explain: 'Estas + tradukita.' },
    { q: 'Какой стиль предпочитает пассив?', opts: ['разговорный', 'научный и публицистический', 'поэтический', 'детский'], ans: 1, explain: 'В разговорном — oni.' }
  ],
  builder: [
    { words: ['la', 'libro', 'estis', 'skribita', 'de', 'tolstoj'], correct: ['la', 'libro', 'estis', 'skribita', 'de', 'tolstoj'], translation: 'Книга была написана Толстым.' },
    { words: ['la', 'domo', 'estis', 'konstruita', 'antaŭ', 'cent', 'jaroj'], correct: ['la', 'domo', 'estis', 'konstruita', 'antaŭ', 'cent', 'jaroj'], translation: 'Дом был построен сто лет назад.' },
    { words: ['la', 'letero', 'estos', 'sendita', 'morgaŭ'], correct: ['la', 'letero', 'estos', 'sendita', 'morgaŭ'], translation: 'Письмо будет отправлено завтра.' },
    { words: ['esperanto', 'estas', 'parolata', 'en', 'multaj', 'landoj'], correct: ['esperanto', 'estas', 'parolata', 'en', 'multaj', 'landoj'], translation: 'На эсперанто говорят во многих странах.' },
    { words: ['la', 'manĝaĵo', 'estas', 'preparata', 'de', 'mia', 'patrino'], correct: ['la', 'manĝaĵo', 'estas', 'preparata', 'de', 'mia', 'patrino'], translation: 'Еда готовится моей матерью.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 4: Сложные времена
   ═══════════════════════════════════════════════════════════ */
{
  id: 'b1-l4',
  title: 'Сложные времена',
  desc: 'Estas leganta, estis leginta и другие конструкции',
  xp: 30,
  content: `
    <h3>🕰️ Что такое сложные времена</h3>
    <p>Кроме простых <b>-as/-is/-os</b>, есть «составные» времена: <b>esti + активное причастие</b>. Они уточняют оттенок времени.</p>

    <h3>📊 Составные времена</h3>
    <table>
      <tr><th>Esperanto</th><th>Значение</th><th>Русский</th></tr>
      <tr><td>mi estas leganta</td><td>прямо сейчас</td><td>я сейчас читаю</td></tr>
      <tr><td>mi estis leganta</td><td>тогда, в процессе</td><td>я тогда читал</td></tr>
      <tr><td>mi estos leganta</td><td>в будущем, в процессе</td><td>я буду читать</td></tr>
      <tr><td>mi estas leginta</td><td>уже прочитал</td><td>я уже прочитал</td></tr>
      <tr><td>mi estis leginta</td><td>к тому моменту уже прочитал</td><td>я уже прочитал (когда)</td></tr>
      <tr><td>mi estos leginta</td><td>к будущему моменту</td><td>я к тому времени прочитаю</td></tr>
    </table>

    <div class="lesson-tip">💡 Эти формы <b>реже</b> в разговорной речи, но <b>важны</b> в литературе и точных описаниях. Простые времена покрывают 90% случаев.</div>

    <h3>📖 Оттенки</h3>
    <table>
      <tr><th>Простое</th><th>Составное — уточнение</th></tr>
      <tr><td><span class="eo">Mi legis libron.</span> — Я читал книгу.</td><td><span class="eo">Mi estis leganta libron.</span> — Я (в тот момент) читал книгу.</td></tr>
      <tr><td><span class="eo">Mi legis la libron.</span> — Я прочитал книгу.</td><td><span class="eo">Mi estis leginta la libron.</span> — Я (уже) прочитал книгу.</td></tr>
    </table>

    <h3>✍️ Примеры</h3>
    <div class="lesson-example"><span class="eo">Kiam li venis, mi estis leganta libron.</span> — Когда он пришёл, я читал книгу.</div>
    <div class="lesson-example"><span class="eo">Kiam vi alvenos, ni estos finintaj la laboron.</span> — Когда ты придёшь, мы уже закончим работу.</div>
    <div class="lesson-example"><span class="eo">Ŝi estas preparanta vespermanĝon.</span> — Она готовит ужин (прямо сейчас).</div>
    <div class="lesson-example"><span class="eo">La infanoj estis ludantaj en la ĝardeno.</span> — Дети играли в саду (в тот момент).</div>
    <div class="lesson-example"><span class="eo">Kiam mi telefonis, ŝi estis elirinta.</span> — Когда я позвонил, она уже ушла.</div>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Kion vi faris hieraŭ vespere?</b> <span class="ru">— Что ты делал вчера вечером?</span><br>
      — <b>Mi estis leganta libron, kiam vi telefonis.</b> <span class="ru">— Я читал книгу, когда ты позвонил.</span><br>
      — <b>Ĉu vi jam estis fininta ĝin?</b> <span class="ru">— Ты её уже закончил?</span><br>
      — <b>Ne, mi nur estis leganta la duan ĉapitron.</b> <span class="ru">— Нет, я читал только вторую главу.</span>
    </div>
  `,
  exercises: [
    { q: 'Как образуется «действие прямо сейчас»?', opts: ['esti + -anta', 'esti + -inta', 'esti + -onta', 'просто -as'], ans: 0 },
    { q: 'Как образуется «уже сделанное к моменту»?', opts: ['esti + -anta', 'esti + -inta', 'esti + -onta', 'просто -is'], ans: 1 },
    { q: 'Что означает <span class="eo">mi estas leganta</span>?', opts: ['я читал', 'я сейчас читаю', 'я буду читать', 'я уже прочитал'], ans: 1 },
    { q: 'Что означает <span class="eo">mi estis leginta</span>?', opts: ['я читал', 'я сейчас читаю', 'я уже прочитал', 'я буду читать'], ans: 2 },
    { q: 'Как сказать «Я читал, когда он пришёл»?', opts: ['Mi estis leganta, kiam li venis', 'Mi estas leganta, kiam li venis', 'Mi estos leganta, kiam li venis', 'Mi estis leginta, kiam li venis'], ans: 0 },
    { q: 'Что означает <span class="eo">ŝi estos fininta la laboron</span>?', opts: ['Она закончит работу', 'Она уже закончит работу к тому времени', 'Она заканчивает работу', 'Она закончила работу'], ans: 1 },
    { q: 'Форма <span class="eo">estis ludantaj</span> означает:', opts: ['играют', 'играли (в тот момент)', 'будут играть', 'уже сыграли'], ans: 1 },
    { q: 'Как сказать «она готовит ужин прямо сейчас»?', opts: ['Ŝi preparas vespermanĝon', 'Ŝi estas preparanta vespermanĝon', 'Ŝi estis preparanta vespermanĝon', 'Ŝi estos preparanta vespermanĝon'], ans: 1 },
    { q: 'Что означает <span class="eo">Li estis elirinta</span>?', opts: ['Он выходит', 'Он уже вышел', 'Он выйдет', 'Он выходил'], ans: 1 },
    { q: 'Форма <span class="eo">estas preparanta</span> означает:', opts: ['готовит (сейчас)', 'приготовил', 'будет готовить', 'готовил'], ans: 0 }
  ],
  test: [
    { q: 'Как образуется длительная форма настоящего?', opts: ['esti + -anta', 'esti + -inta', 'esti + -onta', 'havi + -anta'], ans: 0, explain: 'Estas leganta = сейчас читает.' },
    { q: 'Что означает <span class="eo">mi estis leganta</span>?', opts: ['я читал (в тот момент)', 'я прочитал', 'я буду читать', 'я прочитаю'], ans: 0, explain: 'Длительное прошедшее.' },
    { q: 'Что означает <span class="eo">mi estos fininta</span>?', opts: ['я закончу', 'я закончу к тому времени', 'я заканчиваю', 'я закончил'], ans: 1, explain: 'Результат в будущем.' },
    { q: 'Введите «я сейчас читаю»:', type: 'input', ans: 'mi estas leganta', explain: 'Estas + leganta.' },
    { q: 'Введите «я уже прочитал»:', type: 'input', ans: 'mi estas leginta', explain: 'Estas + leginta.' },
    { q: 'Введите «я буду читать»:', type: 'input', ans: 'mi estos leganta', explain: 'Estos + leganta.' },
    { q: 'Введите «мы уже поедим (к тому времени)»:', type: 'input', ans: 'ni estos manĝintaj', explain: 'Estos + manĝintaj.' },
    { q: 'Что означает <span class="eo">ŝi estis elirinta</span>?', opts: ['Она выходит', 'Она уже вышла (к моменту)', 'Она выйдет', 'Она выходила'], ans: 1, explain: 'Результат в прошлом.' },
    { q: 'Что означает <span class="eo">estas ludantaj</span>?', opts: ['играют', 'играли', 'будут играть', 'уже сыграли'], ans: 0, explain: 'Длительное настоящее.' },
    { q: 'Где сложные времена чаще используются?', opts: ['в разговоре', 'в литературе', 'в поэзии', 'в приказах'], ans: 1, explain: 'Книжный стиль.' }
  ],
  builder: [
    { words: ['kiam', 'li', 'venis', 'mi', 'estis', 'leganta', 'libron'], correct: ['kiam', 'li', 'venis', 'mi', 'estis', 'leganta', 'libron'], translation: 'Когда он пришёл, я читал книгу.' },
    { words: ['ŝi', 'estas', 'preparanta', 'vespermanĝon'], correct: ['ŝi', 'estas', 'preparanta', 'vespermanĝon'], translation: 'Она готовит ужин (прямо сейчас).' },
    { words: ['la', 'infanoj', 'estis', 'ludantaj', 'en', 'la', 'ĝardeno'], correct: ['la', 'infanoj', 'estis', 'ludantaj', 'en', 'la', 'ĝardeno'], translation: 'Дети играли в саду.' },
    { words: ['kiam', 'vi', 'alvenos', 'ni', 'estos', 'finintaj', 'la', 'laboron'], correct: ['kiam', 'vi', 'alvenos', 'ni', 'estos', 'finintaj', 'la', 'laboron'], translation: 'Когда ты придёшь, мы уже закончим работу.' },
    { words: ['li', 'estos', 'skribanta', 'la', 'raporton', 'morgaŭ'], correct: ['li', 'estos', 'skribanta', 'la', 'raporton', 'morgaŭ'], translation: 'Он будет писать отчёт завтра.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 5: Причастные обороты
   ═══════════════════════════════════════════════════════════ */
{
  id: 'b1-l5',
  title: 'Причастные обороты',
  desc: 'Сокращение придаточных предложений',
  xp: 30,
  content: `
    <h3>🎯 Что такое причастный оборот</h3>
    <p>Причастный оборот — <b>сокращённая замена придаточного</b>. Вместо «человек, который читает» — «читающий человек».</p>

    <h3>📊 Сравнение</h3>
    <table>
      <tr><th>Полное (с ke, kiu)</th><th>Сокращённое</th></tr>
      <tr><td>La homo, <b>kiu legas</b>, sidas.</td><td>La <b>leganta</b> homo sidas.</td></tr>
      <tr><td>La homo, <b>kiu legis</b>, foriris.</td><td>La <b>leginta</b> homo foriris.</td></tr>
      <tr><td>La homo, <b>kiu legos</b>, venos.</td><td>La <b>legonta</b> homo venos.</td></tr>
      <tr><td>La libro, <b>kiun oni legas</b>, estas bona.</td><td>La <b>legata</b> libro estas bona.</td></tr>
    </table>

    <h3>🔧 Деепричастие (-e)</h3>
    <p>Если причастие относится к глаголу — оно становится <b>деепричастием</b>:</p>
    <div class="lesson-example"><span class="eo">Legante la libron, mi notis gravajn ideojn.</span> — Читая книгу, я отмечал важные идеи.</div>
    <div class="lesson-example"><span class="eo">Fininte la laboron, ŝi iris hejmen.</span> — Закончив работу, она пошла домой.</div>
    <div class="lesson-example"><span class="eo">Vidinte lin, mi salutis.</span> — Увидев его, я поздоровался.</div>

    <div class="lesson-tip">💡 <b>-inte</b> — первое действие произошло <b>раньше</b>. <b>-ante</b> — одновременно. <b>-onte</b> — собираясь сделать.</div>

    <h3>📖 Три деепричастия</h3>
    <table>
      <tr><th>Форма</th><th>Значение</th></tr>
      <tr><td>-ante</td><td>делая одновременно</td></tr>
      <tr><td>-inte</td><td>сделав раньше</td></tr>
      <tr><td>-onte</td><td>собираясь сделать</td></tr>
    </table>

    <h3>✍️ Примеры</h3>
    <div class="lesson-example"><span class="eo">La kuranta knabo estas mia frato.</span> — Бегущий мальчик — мой брат.</div>
    <div class="lesson-example"><span class="eo">La falintaj folioj kovras la vojon.</span> — Упавшие листья покрывают дорогу.</div>
    <div class="lesson-example"><span class="eo">Studante la lingvon, li faris multajn notojn.</span> — Изучая язык, он делал много заметок.</div>
    <div class="lesson-example"><span class="eo">Reveninte hejmen, ŝi tuj ekdormis.</span> — Вернувшись домой, она сразу уснула.</div>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Kion vi faris hieraŭ?</b> <span class="ru">— Что ты делал вчера?</span><br>
      — <b>Legante libron, mi trovis tre interesajn ideojn.</b> <span class="ru">— Читая книгу, я нашёл очень интересные идеи.</span><br>
      — <b>Kaj poste?</b> <span class="ru">— А потом?</span><br>
      — <b>Fininte la libron, mi iris al mia amiko.</b> <span class="ru">— Закончив книгу, я пошёл к другу.</span>
    </div>
  `,
  exercises: [
    { q: 'Какое причастие заменяет «kiu legas»?', opts: ['leganta', 'leginta', 'legonta', 'legata'], ans: 0 },
    { q: 'Какое причастие заменяет «kiu legis»?', opts: ['leganta', 'leginta', 'legonta', 'legita'], ans: 1 },
    { q: 'Что означает <span class="eo">Legante libron, mi notis</span>?', opts: ['Прочитав книгу, я отметил', 'Читая книгу, я отметил', 'Собираясь читать, я отметил', 'Читаемая книга'], ans: 1 },
    { q: 'Что означает <span class="eo">Fininte la laboron</span>?', opts: ['Заканчивая работу', 'Закончив работу', 'Собираясь закончить', 'Закончил'], ans: 1 },
    { q: 'Что означает <span class="eo">Vidinte lin, mi salutis</span>?', opts: ['Видя его, я поздоровался', 'Увидев его, я поздоровался', 'Собираясь увидеть', 'Он видел меня'], ans: 1 },
    { q: 'Деепричастие <b>-inte</b> означает:', opts: ['одновременность', 'предшествование', 'следование', 'отрицание'], ans: 1 },
    { q: 'Как заменить «La homo, kiu legas, sidas»?', opts: ['La leginta homo sidas', 'La leganta homo sidas', 'La legonta homo sidas', 'La legita homo sidas'], ans: 1 },
    { q: 'Что означает <span class="eo">Aŭdante la muzikon, ni dancis</span>?', opts: ['Услышав музыку, мы танцевали', 'Слыша музыку, мы танцевали', 'Собираясь услышать, мы танцевали', 'Мы услышали музыку'], ans: 1 },
    { q: 'Что означает <span class="eo">Kantante, ŝi laboris</span>?', opts: ['Спев, она работала', 'Напевая, она работала', 'Собираясь петь, она работала', 'Она пела'], ans: 1 },
    { q: 'Что означает <span class="eo">Reveninte hejmen, ŝi ekdormis</span>?', opts: ['Возвращаясь домой, она уснула', 'Вернувшись домой, она уснула', 'Собираясь вернуться, она уснула', 'Она вернулась домой'], ans: 1 }
  ],
  test: [
    { q: 'Заменяет ли «leganta» «kiu legas»?', opts: ['да', 'нет', 'только в поэзии', 'только в прошедшем'], ans: 0, explain: 'Leganta = который читает.' },
    { q: 'Какое деепричастие означает «сделав раньше»?', opts: ['-ante', '-inte', '-onte', '-ate'], ans: 1, explain: '-inte = сделав ранее.' },
    { q: 'Что означает <span class="eo">Studante la lingvon, li lernis multe</span>?', opts: ['Изучив язык, он узнал много', 'Изучая язык, он узнал много', 'Собираясь изучать, он узнал много', 'Он изучал язык'], ans: 1, explain: '-ante = одновременно.' },
    { q: 'Введите «Читая книгу, я отметил»:', type: 'input', ans: 'legante libron mi notis', explain: 'Legante + libron + mi notis.' },
    { q: 'Введите «Закончив работу, она ушла»:', type: 'input', ans: 'fininte la laboron ŝi foriris', explain: 'Fininte + la laboron.' },
    { q: 'Введите «Увидев его, я поздоровался»:', type: 'input', ans: 'vidinte lin mi salutis', explain: 'Vidinte + lin.' },
    { q: 'Введите «Вернувшись домой, она уснула»:', type: 'input', ans: 'reveninte hejmen ŝi ekdormis', explain: 'Reveninte + hejmen.' },
    { q: 'Что означает <span class="eo">Aŭskultante muzikon, ŝi pentris</span>?', opts: ['Слушая музыку, она рисовала', 'Послушав музыку, она нарисовала', 'Собираясь слушать, она рисовала', 'Она пела'], ans: 0, explain: '-ante = одновременность.' },
    { q: 'Что означает <span class="eo">Manĝinte, li foriris</span>?', opts: ['Едя, он ушёл', 'Поев, он ушёл', 'Собираясь есть, он ушёл', 'Он ушёл поесть'], ans: 1, explain: '-inte = ранее.' },
    { q: 'Что заменяет «legata»?', opts: ['kiu legas', 'kiu legis', 'kiun oni legas', 'kiu legos'], ans: 2, explain: 'Пассив = кого читают.' }
  ],
  builder: [
    { words: ['legante', 'libron', 'mi', 'notis', 'gravajn', 'ideojn'], correct: ['legante', 'libron', 'mi', 'notis', 'gravajn', 'ideojn'], translation: 'Читая книгу, я отмечал важные идеи.' },
    { words: ['fininte', 'la', 'laboron', 'ŝi', 'iris', 'hejmen'], correct: ['fininte', 'la', 'laboron', 'ŝi', 'iris', 'hejmen'], translation: 'Закончив работу, она пошла домой.' },
    { words: ['vidinte', 'lin', 'mi', 'salutis'], correct: ['vidinte', 'lin', 'mi', 'salutis'], translation: 'Увидев его, я поздоровался.' },
    { words: ['aŭdante', 'la', 'muzikon', 'ni', 'dancis'], correct: ['aŭdante', 'la', 'muzikon', 'ni', 'dancis'], translation: 'Слыша музыку, мы танцевали.' },
    { words: ['reveninte', 'hejmen', 'ŝi', 'tuj', 'ekdormis'], correct: ['reveninte', 'hejmen', 'ŝi', 'tuj', 'ekdormis'], translation: 'Вернувшись домой, она сразу уснула.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 6: Косвенная речь
   ═══════════════════════════════════════════════════════════ */
{
  id: 'b1-l6',
  title: 'Косвенная речь',
  desc: 'Как передавать чужие слова',
  xp: 30,
  content: `
    <h3>🗣️ Что такое косвенная речь</h3>
    <p>Прямая: «Я приду завтра». Косвенная: «Он сказал, что придёт завтра». Вводится союзом <b>ke</b> или <b>ĉu</b>.</p>

    <h3>📊 Прямая vs косвенная</h3>
    <table>
      <tr><th>Прямая</th><th>Косвенная</th></tr>
      <tr><td>Li diris: «Mi venos.»</td><td>Li diris, <b>ke</b> li venos.</td></tr>
      <tr><td>Ŝi demandis: «Ĉu vi volas teon?»</td><td>Ŝi demandis, <b>ĉu</b> mi volas teon.</td></tr>
    </table>

    <h3>🔑 Правила</h3>
    <ul>
      <li>Местоимения меняются по смыслу: <span class="eo">mi → li/ŝi</span></li>
      <li><b>Время НЕ сдвигается!</b> — в отличие от английского</li>
      <li>Вопрос вводится <b>ĉu</b></li>
      <li>Приказ или просьба — через <b>ke ... -u</b></li>
    </ul>

    <div class="lesson-tip">💡 В эсперанто <b>нет сдвига времён</b>! «Li diris, ke li estas laca» — Он сказал, что устал (сейчас). «Li diris, ke li estis laca» — Он сказал, что был устал (тогда).</div>

    <h3>🎯 Глаголы-вводы</h3>
    <table>
      <tr><th>Глагол</th><th>Пример</th></tr>
      <tr><td>diri</td><td><span class="eo">Li diris, ke...</span></td></tr>
      <tr><td>demandi</td><td><span class="eo">Ŝi demandis, ĉu...</span></td></tr>
      <tr><td>respondi</td><td><span class="eo">Mi respondis, ke...</span></td></tr>
      <tr><td>pensi</td><td><span class="eo">Mi pensas, ke...</span></td></tr>
      <tr><td>kredi</td><td><span class="eo">Li kredas, ke...</span></td></tr>
      <tr><td>scii</td><td><span class="eo">Mi scias, ke...</span></td></tr>
      <tr><td>esperi</td><td><span class="eo">Ni esperas, ke...</span></td></tr>
      <tr><td>peti</td><td><span class="eo">Ŝi petis, ke mi venu.</span></td></tr>
    </table>

    <h3>✍️ Примеры</h3>
    <div class="lesson-example"><span class="eo">Li diris, ke li loĝas en Moskvo.</span> — Он сказал, что живёт в Москве.</div>
    <div class="lesson-example"><span class="eo">Ŝi demandis, ĉu mi parolas Esperanton.</span> — Она спросила, говорю ли я на эсперанто.</div>
    <div class="lesson-example"><span class="eo">Mi pensis, ke vi venos.</span> — Я думал, что ты придёшь.</div>
    <div class="lesson-example"><span class="eo">Ŝi petis, ke mi helpu ŝin.</span> — Она попросила, чтобы я ей помог.</div>
    <div class="lesson-example"><span class="eo">La instruisto diris, ke ni legu pli.</span> — Учитель сказал, чтобы мы больше читали.</div>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Kion diris Petro?</b> <span class="ru">— Что сказал Пётр?</span><br>
      — <b>Li diris, ke li venos morgaŭ.</b> <span class="ru">— Он сказал, что придёт завтра.</span><br>
      — <b>Ĉu li diris ion alian?</b> <span class="ru">— Он сказал что-то ещё?</span><br>
      — <b>Jes, li demandis, ĉu ni volas iri kune.</b> <span class="ru">— Да, он спросил, хотим ли мы пойти вместе.</span>
    </div>
  `,
  exercises: [
    { q: 'Каким союзом вводится косвенная речь?', opts: ['se', 'ke', 'ĉar', 'dum'], ans: 1 },
    { q: 'Как вводится косвенный вопрос?', opts: ['ke', 'ĉu', 'se', 'kial'], ans: 1 },
    { q: 'Сдвигается ли время при пересказе?', opts: ['да, всегда', 'нет, никогда', 'иногда', 'только в прошлом'], ans: 1 },
    { q: 'Как пересказать «Mi venos»?', opts: ['Li diris, ke li venis', 'Li diris, ke li venos', 'Li diris, ke li venus', 'Li diris, ke li venas'], ans: 1 },
    { q: 'Как ввести вопрос в косвенной речи?', opts: ['Li demandis, ke mi venos', 'Li demandis, ĉu mi venos', 'Li demandis, se mi venos', 'Li demandis, kiam mi venos'], ans: 1 },
    { q: 'Что означает <span class="eo">Li diris, ke li estas laca</span>?', opts: ['Он сказал, что устал', 'Он сказал, что был устал', 'Он сказал, что устанет', 'Он сказал, что устаёт'], ans: 0 },
    { q: 'Как передать просьбу?', opts: ['Ŝi petis min veni', 'Ŝi petis, ke mi venu', 'Ŝi petis, ĉu mi venos', 'Ŝi petis, ke mi venas'], ans: 1 },
    { q: 'Как сказать «Он ответил, что не знает»?', opts: ['Li respondis, ke li ne scias', 'Li respondis, ke li ne sciis', 'Li respondis, ke li ne scios', 'Li respondis, ĉu li ne scias'], ans: 0 },
    { q: 'Что означает <span class="eo">Li diris, ke li estis laca</span>?', opts: ['Он сказал, что устал (тогда)', 'Он сказал, что устал (сейчас)', 'Он сказал, что устанет', 'Он устал'], ans: 0 },
    { q: 'Что означает <span class="eo">Ŝi demandis, ĉu mi volas teon</span>?', opts: ['Она спросила, хочу ли я чаю', 'Она сказала, что хочет чаю', 'Она спросила, что я хочу', 'Она попросила чаю'], ans: 0 }
  ],
  test: [
    { q: 'Каким союзом вводится «что» в косвенной речи?', opts: ['se', 'ke', 'ĉar', 'kaj'], ans: 1, explain: 'Ke = что.' },
    { q: 'Каким словом вводится косвенный вопрос?', opts: ['ke', 'ĉu', 'se', 'kial'], ans: 1, explain: 'Ĉu = ли.' },
    { q: 'Сдвигается ли время при пересказе?', opts: ['да', 'нет', 'только в прошлом', 'только в будущем'], ans: 1, explain: 'Нет сдвига времён.' },
    { q: 'Введите «Он сказал, что придёт»:', type: 'input', ans: 'li diris ke li venos', explain: 'Li diris, ke li venos.' },
    { q: 'Введите «Она спросила, знаю ли я»:', type: 'input', ans: 'ŝi demandis ĉu mi scias', explain: 'Ŝi demandis, ĉu mi scias.' },
    { q: 'Введите «Я думаю, что ты прав»:', type: 'input', ans: 'mi pensas ke vi pravas', explain: 'Mi pensas, ke vi pravas.' },
    { q: 'Введите «Он ответил, что не знает»:', type: 'input', ans: 'li respondis ke li ne scias', explain: 'Li respondis, ke li ne scias.' },
    { q: 'Как передать приказ «Venu!»?', opts: ['Li diris veni', 'Li diris, ke mi venu', 'Li diris, ke mi venas', 'Li diris, ĉu mi venos'], ans: 1, explain: 'Приказ → ke + -u.' },
    { q: 'Что означает <span class="eo">Mi esperas, ke vi venos</span>?', opts: ['Я надеюсь, что ты придёшь', 'Я знаю, что ты придёшь', 'Я хочу, чтобы ты пришёл', 'Я думаю, что ты придёшь'], ans: 0, explain: 'Esperi + ke.' },
    { q: 'Как сказать «Учитель сказал, чтобы мы читали»?', opts: ['La instruisto diris, ke ni legas', 'La instruisto diris, ke ni legu', 'La instruisto diris, ĉu ni legas', 'La instruisto diris, se ni legas'], ans: 1, explain: 'Приказ → -u.' }
  ],
  builder: [
    { words: ['li', 'diris', 'ke', 'li', 'venos', 'morgaŭ'], correct: ['li', 'diris', 'ke', 'li', 'venos', 'morgaŭ'], translation: 'Он сказал, что придёт завтра.' },
    { words: ['ŝi', 'demandis', 'ĉu', 'mi', 'parolas', 'esperanton'], correct: ['ŝi', 'demandis', 'ĉu', 'mi', 'parolas', 'esperanton'], translation: 'Она спросила, говорю ли я на эсперанто.' },
    { words: ['mi', 'pensis', 'ke', 'vi', 'venos'], correct: ['mi', 'pensis', 'ke', 'vi', 'venos'], translation: 'Я думал, что ты придёшь.' },
    { words: ['li', 'respondis', 'ke', 'li', 'ne', 'scias'], correct: ['li', 'respondis', 'ke', 'li', 'ne', 'scias'], translation: 'Он ответил, что не знает.' },
    { words: ['ŝi', 'petis', 'ke', 'mi', 'helpu', 'ŝin'], correct: ['ŝi', 'petis', 'ke', 'mi', 'helpu', 'ŝin'], translation: 'Она попросила, чтобы я ей помог.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 7: Временные придаточные (НОВЫЙ)
   ═══════════════════════════════════════════════════════════ */
{
  id: 'b1-l7',
  title: 'Temporaj Subfrazoj',
  desc: 'kiam, dum, ĝis, post kiam, antaŭ ol',
  xp: 30,
  content: `
    <h3>⏰ Временные союзы</h3>
    <table>
      <tr><th>Союз</th><th>Значение</th><th>Пример</th></tr>
      <tr><td>kiam</td><td>когда</td><td><span class="eo">Kiam li venis, mi dormis.</span></td></tr>
      <tr><td>dum</td><td>пока, в то время как</td><td><span class="eo">Dum ŝi legas, mi skribas.</span></td></tr>
      <tr><td>ĝis</td><td>до тех пор, пока не</td><td><span class="eo">Atendu, ĝis mi venos.</span></td></tr>
      <tr><td>post kiam</td><td>после того как</td><td><span class="eo">Post kiam li finis, ni iris.</span></td></tr>
      <tr><td>antaŭ ol</td><td>прежде чем</td><td><span class="eo">Antaŭ ol foriri, li fermis la pordon.</span></td></tr>
      <tr><td>tuj kiam</td><td>как только</td><td><span class="eo">Tuj kiam li vidis, li salutis.</span></td></tr>
      <tr><td>de kiam</td><td>с тех пор как</td><td><span class="eo">De kiam ni renkontiĝis, ni estas amikoj.</span></td></tr>
    </table>

    <h3>📊 Тонкости</h3>
    <table>
      <tr><th>Союз</th><th>Что делает</th></tr>
      <tr><td>kiam</td><td>одновременность или момент</td></tr>
      <tr><td>dum</td><td>процесс (длительность)</td></tr>
      <tr><td>ĝis</td><td>до конечной точки</td></tr>
      <tr><td>post kiam</td><td>после завершения</td></tr>
      <tr><td>antaŭ ol</td><td>перед началом</td></tr>
      <tr><td>tuj kiam</td><td>немедленно после</td></tr>
    </table>

    <div class="lesson-tip">💡 <b>antaŭ ol</b> и <b>post kiam</b> требуют <b>разных</b> времён: <span class="eo">antaŭ ol foriri</span> (инфинитив) или <span class="eo">antaŭ ol li foriris</span>. <b>ĝis</b> требует будущего: <span class="eo">ĝis mi venos</span>.</div>

    <h3>✍️ Примеры в контексте</h3>
    <div class="lesson-example"><span class="eo">Kiam mi estis juna, mi multe legis.</span> — Когда я был молод, я много читал.</div>
    <div class="lesson-example"><span class="eo">Dum li laboras, mi ripozas.</span> — Пока он работает, я отдыхаю.</div>
    <div class="lesson-example"><span class="eo">Atendu, ĝis mi finos.</span> — Подожди, пока я не закончу.</div>
    <div class="lesson-example"><span class="eo">Post kiam ŝi manĝis, ŝi eliris.</span> — После того как она поела, она вышла.</div>
    <div class="lesson-example"><span class="eo">Antaŭ ol respondi, li pensis longe.</span> — Прежде чем ответить, он долго думал.</div>
    <div class="lesson-example"><span class="eo">Tuj kiam li alvenis, ni ekparolis.</span> — Как только он прибыл, мы начали говорить.</div>
    <div class="lesson-example"><span class="eo">De kiam ni konatiĝis, ni estas bonaj amikoj.</span> — С тех пор как мы познакомились, мы хорошие друзья.</div>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Kiam vi venos?</b> <span class="ru">— Когда ты придёшь?</span><br>
      — <b>Post kiam mi finos la laboron.</b> <span class="ru">— После того как закончу работу.</span><br>
      — <b>Bone, mi atendu ĝis vi alvenos.</b> <span class="ru">— Хорошо, буду ждать, пока ты не придёшь.</span><br>
      — <b>Dankon!</b> <span class="ru">— Спасибо!</span>
    </div>
  `,
  exercises: [
    { q: 'Какой союз означает «когда»?', opts: ['dum', 'kiam', 'ĝis', 'post'], ans: 1 },
    { q: 'Какой союз означает «пока»?', opts: ['dum', 'kiam', 'ĝis', 'post'], ans: 0 },
    { q: 'Какой союз означает «до тех пор, пока не»?', opts: ['dum', 'kiam', 'ĝis', 'post'], ans: 2 },
    { q: 'Какой союз означает «после того как»?', opts: ['antaŭ ol', 'dum', 'ĝis', 'post kiam'], ans: 3 },
    { q: 'Какой союз означает «прежде чем»?', opts: ['antaŭ ol', 'post kiam', 'dum', 'ĝis'], ans: 0 },
    { q: 'Какой союз означает «как только»?', opts: ['tuj kiam', 'post kiam', 'ĝis', 'antaŭ ol'], ans: 0 },
    { q: 'Как сказать «Пока он работает, я отдыхаю»?', opts: ['Dum li laboras, mi ripozas', 'Kiam li laboras, mi ripozas', 'Ĝis li laboras, mi ripozas', 'Post kiam li laboras, mi ripozas'], ans: 0 },
    { q: 'Как сказать «Подожди, пока я не закончу»?', opts: ['Atendu, kiam mi finos', 'Atendu, dum mi finos', 'Atendu, ĝis mi finos', 'Atendu, post kiam mi finos'], ans: 2 },
    { q: 'Как сказать «После того как она поела, она вышла»?', opts: ['Post kiam ŝi manĝis, ŝi eliris', 'Antaŭ ol ŝi manĝis, ŝi eliris', 'Dum ŝi manĝis, ŝi eliris', 'Ĝis ŝi manĝis, ŝi eliris'], ans: 0 },
    { q: 'Как сказать «Прежде чем ответить, он подумал»?', opts: ['Post kiam respondi, li pensis', 'Antaŭ ol respondi, li pensis', 'Dum respondi, li pensis', 'Ĝis respondi, li pensis'], ans: 1 }
  ],
  test: [
    { q: 'Какой союз используется для процесса?', opts: ['kiam', 'dum', 'ĝis', 'post'], ans: 1, explain: 'Dum = пока, в течение.' },
    { q: 'Какой союз требует будущего времени?', opts: ['kiam', 'dum', 'ĝis', 'post kiam'], ans: 2, explain: 'Ĝis = до тех пор, пока не.' },
    { q: 'Какой союз означает «с тех пор как»?', opts: ['de kiam', 'tuj kiam', 'ĝis', 'antaŭ ol'], ans: 0, explain: 'De kiam.' },
    { q: 'Введите «Пока она читает, я пишу»:', type: 'input', ans: 'dum ŝi legas mi skribas', explain: 'Dum + наст.' },
    { q: 'Введите «Подожди, пока я не приду»:', type: 'input', ans: 'atendu ĝis mi venos', explain: 'Ĝis + будущее.' },
    { q: 'Введите «После того как он пришёл, мы начали»:', type: 'input', ans: 'post kiam li venis ni komencis', explain: 'Post kiam + прошедшее.' },
    { q: 'Введите «Как только он увидел, он поздоровался»:', type: 'input', ans: 'tuj kiam li vidis li salutis', explain: 'Tuj kiam.' },
    { q: 'Что означает <span class="eo">Kiam mi estis juna</span>?', opts: ['Когда я молод', 'Когда я был молод', 'Если я молод', 'Пока я молод'], ans: 1, explain: 'Estis = был.' },
    { q: 'Что означает <span class="eo">Antaŭ ol respondi</span>?', opts: ['После ответа', 'Прежде чем ответить', 'Во время ответа', 'До тех пор'], ans: 1, explain: 'Antaŭ ol + инф.' },
    { q: 'Разница между <b>kiam</b> и <b>dum</b>:', opts: ['синонимы', 'kiam — момент, dum — процесс', 'kiam — процесс, dum — момент', 'оба процесс'], ans: 1, explain: 'Kiam = момент, dum = длительность.' }
  ],
  builder: [
    { words: ['kiam', 'li', 'venis', 'mi', 'dormis'], correct: ['kiam', 'li', 'venis', 'mi', 'dormis'], translation: 'Когда он пришёл, я спал.' },
    { words: ['dum', 'ŝi', 'legas', 'mi', 'skribas'], correct: ['dum', 'ŝi', 'legas', 'mi', 'skribas'], translation: 'Пока она читает, я пишу.' },
    { words: ['atendu', 'ĝis', 'mi', 'venos'], correct: ['atendu', 'ĝis', 'mi', 'venos'], translation: 'Подожди, пока я не приду.' },
    { words: ['post', 'kiam', 'li', 'finis', 'ni', 'iris'], correct: ['post', 'kiam', 'li', 'finis', 'ni', 'iris'], translation: 'После того как он закончил, мы пошли.' },
    { words: ['antaŭ', 'ol', 'foriri', 'li', 'fermis', 'la', 'pordon'], correct: ['antaŭ', 'ol', 'foriri', 'li', 'fermis', 'la', 'pordon'], translation: 'Прежде чем уйти, он закрыл дверь.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 8: Согласование времён
   ═══════════════════════════════════════════════════════════ */
{
  id: 'b1-l8',
  title: 'Согласование времён',
  desc: 'Как правильно передавать последовательность',
  xp: 30,
  content: `
    <h3>⏳ Что это</h3>
    <p>В эсперанто <b>нет обязательного сдвига времён</b>, но есть логика: время в придаточном показывает <b>отношение ко времени главного</b>.</p>

    <h3>📊 Три случая</h3>
    <table>
      <tr><th>Смысл</th><th>Пример</th><th>Перевод</th></tr>
      <tr><td>Одновременно</td><td><span class="eo">Li diris, ke li <b>estas</b> laca.</span></td><td>Он сказал, что (сейчас) устал.</td></tr>
      <tr><td>Раньше</td><td><span class="eo">Li diris, ke li <b>estis</b> laca.</span></td><td>Он сказал, что (тогда) был устал.</td></tr>
      <tr><td>Позже</td><td><span class="eo">Li diris, ke li <b>estos</b> laca.</span></td><td>Он сказал, что (будет) устанет.</td></tr>
    </table>

    <div class="lesson-tip">💡 Если момент сохраняется — <b>-as</b>. Раньше речи — <b>-is</b>. Позже — <b>-os</b>.</div>

    <h3>🎯 Тонкие случаи</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td><span class="eo">Mi sciis, ke li venos.</span></td><td>Я знал, что он придёт.</td></tr>
      <tr><td><span class="eo">Mi sciis, ke li venis.</span></td><td>Я знал, что он (уже) пришёл.</td></tr>
      <tr><td><span class="eo">Mi sciis, ke li venas.</span></td><td>Я знал, что он идёт (тогда).</td></tr>
    </table>

    <h3>📖 Союзы времени</h3>
    <table>
      <tr><th>Союз</th><th>Значение</th></tr>
      <tr><td>kiam</td><td>когда</td></tr>
      <tr><td>dum</td><td>пока</td></tr>
      <tr><td>ĝis</td><td>до тех пор пока не</td></tr>
      <tr><td>post kiam</td><td>после того как</td></tr>
      <tr><td>antaŭ ol</td><td>прежде чем</td></tr>
      <tr><td>tuj kiam</td><td>как только</td></tr>
    </table>

    <h3>✍️ Примеры</h3>
    <div class="lesson-example"><span class="eo">Li demandis min, kion mi faris hieraŭ.</span> — Он спросил меня, что я делал вчера.</div>
    <div class="lesson-example"><span class="eo">Ŝi diris, ke ŝi jam manĝis.</span> — Она сказала, что уже поела.</div>
    <div class="lesson-example"><span class="eo">Mi pensis, ke ni estos pretaj ĝustatempe.</span> — Я думал, что мы будем готовы вовремя.</div>
    <div class="lesson-example"><span class="eo">Kiam li telefonis, mi ankoraŭ dormis.</span> — Когда он позвонил, я ещё спал.</div>
    <div class="lesson-example"><span class="eo">Antaŭ ol foriri, ŝi fermis la fenestrojn.</span> — Прежде чем уйти, она закрыла окна.</div>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Kion li diris?</b> <span class="ru">— Что он сказал?</span><br>
      — <b>Li diris, ke li jam vidis tiun filmon.</b> <span class="ru">— Он сказал, что уже видел этот фильм.</span><br>
      — <b>Kaj kion li faros morgaŭ?</b> <span class="ru">— А что он будет делать завтра?</span><br>
      — <b>Li diris, ke li laboros hejme.</b> <span class="ru">— Он сказал, что будет работать дома.</span>
    </div>
  `,
  exercises: [
    { q: 'Какое время, если действие совпадает с моментом речи?', opts: ['-is', '-as', '-os', '-us'], ans: 1 },
    { q: 'Какое время, если действие раньше момента речи?', opts: ['-is', '-as', '-os', '-us'], ans: 0 },
    { q: 'Что означает <span class="eo">Li diris, ke li venos</span>?', opts: ['Он сказал, что пришёл', 'Он сказал, что придёт', 'Он сказал, что идёт', 'Он сказал, что ходил'], ans: 1 },
    { q: 'Что означает <span class="eo">Li diris, ke li venis</span>?', opts: ['Он сказал, что пришёл', 'Он сказал, что придёт', 'Он сказал, что идёт', 'Он сказал, что будет идти'], ans: 0 },
    { q: 'Что означает <span class="eo">Ŝi sciis, ke li jam manĝis</span>?', opts: ['Она знала, что он поест', 'Она знала, что он уже поел', 'Она знала, что он ест', 'Она знала, что он будет есть'], ans: 1 },
    { q: 'Какой союз «пока»?', opts: ['ĝis', 'dum', 'post', 'antaŭ'], ans: 1 },
    { q: 'Какой союз «до тех пор пока не»?', opts: ['ĝis', 'dum', 'post', 'antaŭ'], ans: 0 },
    { q: 'Как сказать «После того как он пришёл, мы начали»?', opts: ['Post kiam li venis, ni komencis', 'Post kiam li venos, ni komencis', 'Antaŭ ol li venis, ni komencis', 'Dum li venis, ni komencis'], ans: 0 },
    { q: 'Что означает <span class="eo">Li demandis, kion mi faros</span>?', opts: ['Он спросил, что я делал', 'Он спросил, что я буду делать', 'Он спросил, что я делаю', 'Он спросил, что я сделал'], ans: 1 },
    { q: 'Что означает <span class="eo">Tuj kiam li venis, ni manĝis</span>?', opts: ['Как только он пришёл, мы поели', 'Когда он придёт, мы поедим', 'Пока он шёл, мы ели', 'После того как он придёт, поедим'], ans: 0 }
  ],
  test: [
    { q: 'Согласуются ли времена автоматически?', opts: ['да, как в английском', 'нет, но выбираются по смыслу', 'только в прошедшем', 'только в будущем'], ans: 1, explain: 'Смысл важнее формы.' },
    { q: 'Какое время для «действие раньше»?', opts: ['-is', '-as', '-os', '-us'], ans: 0, explain: 'Прошедшее.' },
    { q: 'Какое время для «действие позже»?', opts: ['-is', '-as', '-os', '-us'], ans: 2, explain: 'Будущее.' },
    { q: 'Введите «Он сказал, что придёт»:', type: 'input', ans: 'li diris ke li venos', explain: 'Придёт позже речи.' },
    { q: 'Введите «Он сказал, что уже пришёл»:', type: 'input', ans: 'li diris ke li venis', explain: 'Уже пришёл до речи.' },
    { q: 'Введите «Она знала, что он здесь»:', type: 'input', ans: 'ŝi sciis ke li estas tie', explain: 'Одновременно.' },
    { q: 'Введите «Я думал, что мы будем готовы»:', type: 'input', ans: 'mi pensis ke ni estos pretaj', explain: 'Будущее в прошедшем.' },
    { q: 'Какой союз «прежде чем»?', opts: ['antaŭ ol', 'post kiam', 'ĝis', 'dum'], ans: 0, explain: 'Antaŭ ol = прежде чем.' },
    { q: 'Что означает <span class="eo">Ĝis li revenos, ni atendu</span>?', opts: ['Пока он не вернётся, подождём', 'После его возвращения, подождём', 'Когда вернётся, подождём', 'Если вернётся, подождём'], ans: 0, explain: 'Ĝis + будущее.' },
    { q: 'Что означает <span class="eo">Dum ni parolis, li skribis</span>?', opts: ['Пока мы говорили, он писал', 'После того как мы сказали, он написал', 'Прежде чем мы сказали, он писал', 'Как только мы сказали, он написал'], ans: 0, explain: 'Dum = пока.' }
  ],
  builder: [
    { words: ['li', 'demandis', 'kion', 'mi', 'faris', 'hieraŭ'], correct: ['li', 'demandis', 'kion', 'mi', 'faris', 'hieraŭ'], translation: 'Он спросил, что я делал вчера.' },
    { words: ['ŝi', 'diris', 'ke', 'ŝi', 'jam', 'manĝis'], correct: ['ŝi', 'diris', 'ke', 'ŝi', 'jam', 'manĝis'], translation: 'Она сказала, что уже поела.' },
    { words: ['mi', 'pensis', 'ke', 'ni', 'estos', 'pretaj', 'ĝustatempe'], correct: ['mi', 'pensis', 'ke', 'ni', 'estos', 'pretaj', 'ĝustatempe'], translation: 'Я думал, что мы будем готовы вовремя.' },
    { words: ['antaŭ', 'ol', 'foriri', 'ŝi', 'fermis', 'la', 'fenestrojn'], correct: ['antaŭ', 'ol', 'foriri', 'ŝi', 'fermis', 'la', 'fenestrojn'], translation: 'Прежде чем уйти, она закрыла окна.' },
    { words: ['kiam', 'li', 'telefonis', 'mi', 'ankoraŭ', 'dormis'], correct: ['kiam', 'li', 'telefonis', 'mi', 'ankoraŭ', 'dormis'], translation: 'Когда он позвонил, я ещё спал.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 9: Условные предложения
   ═══════════════════════════════════════════════════════════ */
{
  id: 'b1-l9',
  title: 'Условные предложения',
  desc: 'Реальные и нереальные условия',
  xp: 30,
  content: `
    <h3>🔀 Два типа условий</h3>
    <ul>
      <li><b>Реальное</b> — обычные времена</li>
      <li><b>Нереальное</b> — <b>-us</b></li>
    </ul>

    <h3>📊 Реальное условие</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td><span class="eo">Se vi volas, venu.</span></td><td>Если хочешь, приходи.</td></tr>
      <tr><td><span class="eo">Se li venos, ni ĝojos.</span></td><td>Если он придёт, мы обрадуемся.</td></tr>
      <tr><td><span class="eo">Se pluvas, ni restas hejme.</span></td><td>Если идёт дождь, мы остаёмся дома.</td></tr>
    </table>

    <h3>📊 Нереальное условие</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td><span class="eo">Se mi <b>havus</b> tempon, mi <b>legus</b>.</span></td><td>Если бы у меня было время, я бы читал.</td></tr>
      <tr><td><span class="eo">Se li <b>venus</b>, ni <b>ĝojus</b>.</span></td><td>Если бы он пришёл, мы бы обрадовались.</td></tr>
      <tr><td><span class="eo">Se mi <b>estus</b> riĉa, mi <b>vojaĝus</b>.</span></td><td>Если бы я был богат, я бы путешествовал.</td></tr>
    </table>

    <div class="lesson-tip">💡 Обе части в <b>-us</b>! Это главное правило нереального условия.</div>

    <h3>🎯 Сожаление о прошлом</h3>
    <p>«Если бы тогда… (но не случилось)» — тоже <b>-us</b>:</p>
    <div class="lesson-example"><span class="eo">Se mi estus lerninta pli frue, mi parolus pli bone nun.</span> — Если бы я учил раньше, я говорил бы лучше сейчас.</div>
    <div class="lesson-example"><span class="eo">Se ŝi estus atendinta, ŝi vidus lin.</span> — Если бы она подождала, она бы его увидела.</div>

    <h3>✍️ Примеры</h3>
    <div class="lesson-example"><span class="eo">Se mi havus monon, mi aĉetus aŭton.</span> — Если бы у меня были деньги, я купил бы машину.</div>
    <div class="lesson-example"><span class="eo">Se vi lernus pli, vi parolus pli bone.</span> — Если бы ты учился больше, ты говорил бы лучше.</div>
    <div class="lesson-example"><span class="eo">Se li estus ĉi tie, li helpus nin.</span> — Если бы он был здесь, он помог бы нам.</div>
    <div class="lesson-example"><span class="eo">Se ni havos tempon, ni vizitos vin.</span> — Если у нас будет время, мы навестим вас.</div>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Kion vi farus, se vi havus libertempon?</b> <span class="ru">— Что бы вы делали, если бы у вас было свободное время?</span><br>
      — <b>Mi legus librojn kaj promenus en la parko.</b> <span class="ru">— Я бы читал книги и гулял в парке.</span><br>
      — <b>Kaj se vi havus multan monon?</b> <span class="ru">— А если бы у вас было много денег?</span><br>
      — <b>Mi vojaĝus ĉirkaŭ la mondo.</b> <span class="ru">— Я бы путешествовал по миру.</span>
    </div>
  `,
  exercises: [
    { q: 'Какое наклонение в реальном условии?', opts: ['обычные времена', '-us', '-u', '-i'], ans: 0 },
    { q: 'Какое наклонение в нереальном условии?', opts: ['обычные времена', '-us', '-u', '-i'], ans: 1 },
    { q: 'Что означает <span class="eo">Se mi havus tempon, mi legus</span>?', opts: ['Если у меня есть время, я читаю', 'Если бы у меня было время, я читал бы', 'Если у меня будет время, я буду читать', 'Если у меня было время, я читал'], ans: 1 },
    { q: 'Что означает <span class="eo">Se vi volas, venu</span>?', opts: ['Если бы ты хотел, пришёл бы', 'Если хочешь, приходи', 'Если хотел, приходи', 'Если будешь хотеть, приходи'], ans: 1 },
    { q: 'Как сказать «Если он придёт, мы обрадуемся»?', opts: ['Se li venus, ni ĝojus', 'Se li venos, ni ĝojos', 'Se li venas, ni ĝojas', 'Se li venis, ni ĝojis'], ans: 1 },
    { q: 'Как сказать «Если бы я был богат, я путешествовал бы»?', opts: ['Se mi estas riĉa, mi vojaĝas', 'Se mi estis riĉa, mi vojaĝis', 'Se mi estus riĉa, mi vojaĝus', 'Se mi estos riĉa, mi vojaĝos'], ans: 2 },
    { q: 'Как сказать «Если пойдёт дождь, мы останемся дома»?', opts: ['Se pluvus, ni restus hejme', 'Se pluvos, ni restos hejme', 'Se pluvas, ni restas hejme', 'Se pluvis, ni restis hejme'], ans: 1 },
    { q: 'Что означает <span class="eo">Se li estus ĉi tie, li helpus</span>?', opts: ['Если он здесь, он поможет', 'Если бы он был здесь, он помог бы', 'Если он будет здесь, он поможет', 'Если он был здесь, он помог'], ans: 1 },
    { q: 'Что означает <span class="eo">Se li estus atendinta, li vidus ŝin</span>?', opts: ['Если он подождёт, он её увидит', 'Если бы он подождал, он бы её увидел', 'Если он подождал, он её увидел', 'Если он ждёт, он её видит'], ans: 1 },
    { q: 'Что означает <span class="eo">Ĉu vi povus helpi min?</span>?', opts: ['Можете ли вы помочь мне?', 'Не могли бы вы помочь мне?', 'Помогите мне', 'Вы помогли мне?'], ans: 1 }
  ],
  test: [
    { q: 'Какое окончание в нереальном условии?', opts: ['-as', '-is', '-os', '-us'], ans: 3, explain: '-us = условное.' },
    { q: 'Какое окончание в реальном условии?', opts: ['обычное время', '-us', '-u', '-i'], ans: 0, explain: 'Обычные времена.' },
    { q: 'Что означает <span class="eo">Se mi havus tempon</span>?', opts: ['Если у меня есть время', 'Если бы у меня было время', 'Если у меня было время', 'Если у меня будет время'], ans: 1, explain: 'Havus = имел бы.' },
    { q: 'Введите «Если хочешь, приходи»:', type: 'input', ans: 'se vi volas venu', explain: 'Реальное условие.' },
    { q: 'Введите «Если бы я был богат»:', type: 'input', ans: 'se mi estus riĉa', explain: 'Нереальное: estus.' },
    { q: 'Введите «Если бы он пришёл, мы обрадовались бы»:', type: 'input', ans: 'se li venus ni ĝojus', explain: 'Обе части в -us.' },
    { q: 'Введите «Если у нас будет время, мы придём»:', type: 'input', ans: 'se ni havos tempon ni venos', explain: 'Реальное: будущее.' },
    { q: 'Что означает <span class="eo">Se pluvos, ni restos hejme</span>?', opts: ['Если пойдёт дождь, мы останемся дома', 'Если бы шёл дождь, мы остались бы', 'Если идёт дождь, мы остаёмся', 'Если шёл дождь, мы остались'], ans: 0, explain: 'Реальное условие.' },
    { q: 'Что означает <span class="eo">Se mi scius la respondon</span>?', opts: ['Если я знаю ответ', 'Если бы я знал ответ', 'Если я знал ответ', 'Если я узнаю ответ'], ans: 1, explain: 'Sci us = знал бы.' },
    { q: 'Разница между реальным и нереальным условием:', opts: ['нет', 'в наклонении глагола', 'в порядке слов', 'в союзе'], ans: 1, explain: 'Реальное — обычные времена, нереальное — -us.' }
  ],
  builder: [
    { words: ['se', 'mi', 'havus', 'monon', 'mi', 'aĉetus', 'aŭton'], correct: ['se', 'mi', 'havus', 'monon', 'mi', 'aĉetus', 'aŭton'], translation: 'Если бы у меня были деньги, я купил бы машину.' },
    { words: ['se', 'vi', 'lernus', 'pli', 'vi', 'parolus', 'pli', 'bone'], correct: ['se', 'vi', 'lernus', 'pli', 'vi', 'parolus', 'pli', 'bone'], translation: 'Если бы ты учился больше, ты говорил бы лучше.' },
    { words: ['se', 'li', 'estus', 'ĉi', 'tie', 'li', 'helpus', 'nin'], correct: ['se', 'li', 'estus', 'ĉi', 'tie', 'li', 'helpus', 'nin'], translation: 'Если бы он был здесь, он помог бы нам.' },
    { words: ['se', 'ni', 'havos', 'tempon', 'ni', 'vizitos', 'vin'], correct: ['se', 'ni', 'havos', 'tempon', 'ni', 'vizitos', 'vin'], translation: 'Если у нас будет время, мы навестим вас.' },
    { words: ['se', 'mi', 'scius', 'la', 'responon', 'mi', 'dirus', 'ĝin'], correct: ['se', 'mi', 'scius', 'la', 'responon', 'mi', 'dirus', 'ĝin'], translation: 'Если бы я знал ответ, я бы его сказал.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 10: Уступительные конструкции
   ═══════════════════════════════════════════════════════════ */
{
  id: 'b1-l10',
  title: 'Уступительные конструкции',
  desc: 'kvankam, malgraŭ, eĉ se, tamen',
  xp: 30,
  content: `
    <h3>🤷 Что такое уступка</h3>
    <p><b>Уступка</b> — «несмотря на что-то», «хотя».</p>

    <h3>📊 Союзы и предлоги уступки</h3>
    <table>
      <tr><th>Слово</th><th>Значение</th><th>Пример</th></tr>
      <tr><td>kvankam</td><td>хотя (союз)</td><td><span class="eo">Kvankam pluvas, ni iras.</span></td></tr>
      <tr><td>malgraŭ</td><td>несмотря на (предлог)</td><td><span class="eo">Malgraŭ la pluvo, ni iras.</span></td></tr>
      <tr><td>eĉ se</td><td>даже если</td><td><span class="eo">Eĉ se pluvos, ni iros.</span></td></tr>
      <tr><td>tamen</td><td>однако, всё же</td><td><span class="eo">Kvankam lacas, li tamen laboras.</span></td></tr>
    </table>

    <div class="lesson-tip">💡 <b>kvankam</b> — с глаголом. <b>malgraŭ</b> — с существительным. Сравни: <span class="eo">kvankam pluvas</span> — хотя идёт дождь; <span class="eo">malgraŭ la pluvo</span> — несмотря на дождь.</div>

    <h3>🎯 Пара kvankam … tamen</h3>
    <div class="lesson-example"><span class="eo">Kvankam li estas riĉa, li tamen vivas simple.</span> — Хотя он богат, он всё же живёт просто.</div>

    <h3>📖 Примеры</h3>
    <div class="lesson-example"><span class="eo">Kvankam li estas juna, li multe scias.</span> — Хотя он молод, он много знает.</div>
    <div class="lesson-example"><span class="eo">Malgraŭ la malfacilaĵoj, ni sukcesis.</span> — Несмотря на трудности, мы справились.</div>
    <div class="lesson-example"><span class="eo">Eĉ se vi petos min, mi ne konsentos.</span> — Даже если ты попросишь меня, я не соглашусь.</div>
    <div class="lesson-example"><span class="eo">Eĉ se mi havus tempon, mi ne irus.</span> — Даже если бы у меня было время, я бы не пошёл.</div>

    <h3>🎯 Составные формы</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td><span class="eo">Kiel ajn vi provos, vi ne sukcesos.</span></td><td>Как бы ты ни старался, ты не добьёшься.</td></tr>
      <tr><td><span class="eo">Kion ajn li diras, mi ne kredas.</span></td><td>Что бы он ни говорил, я не верю.</td></tr>
      <tr><td><span class="eo">Kie ajn vi estos, mi vin trovos.</span></td><td>Где бы ты ни был, я тебя найду.</td></tr>
    </table>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Ĉu vi partoprenos la konkurson?</b> <span class="ru">— Ты будешь участвовать в соревновании?</span><br>
      — <b>Verŝajne jes, kvankam mi ne tre bone pretas.</b> <span class="ru">— Вероятно да, хотя я не очень хорошо готов.</span><br>
      — <b>Malgraŭ tio, vi provu.</b> <span class="ru">— Несмотря на это, попробуй.</span><br>
      — <b>Eĉ se mi malgajnos, mi lernos ion.</b> <span class="ru">— Даже если проиграю, я чему-то научусь.</span>
    </div>
  `,
  exercises: [
    { q: 'Что означает «хотя» (союз)?', opts: ['kvankam', 'malgraŭ', 'tamen', 'eĉ se'], ans: 0 },
    { q: 'Что означает «несмотря на» (предлог)?', opts: ['kvankam', 'malgraŭ', 'tamen', 'eĉ se'], ans: 1 },
    { q: 'Что означает «однако, всё же»?', opts: ['kvankam', 'malgraŭ', 'tamen', 'eĉ se'], ans: 2 },
    { q: 'Что означает «даже если»?', opts: ['kvankam', 'malgraŭ', 'tamen', 'eĉ se'], ans: 3 },
    { q: 'Что означает <span class="eo">Kvankam pluvas, ni iras</span>?', opts: ['Хотя идёт дождь, мы идём', 'Несмотря на дождь, мы пойдём', 'Если пойдёт дождь, мы пойдём', 'Потому что идёт дождь, мы идём'], ans: 0 },
    { q: 'Как сказать «несмотря на трудности»?', opts: ['kvankam malfacilaĵoj', 'malgraŭ la malfacilaĵoj', 'tamen malfacilaĵoj', 'eĉ se malfacilaĵoj'], ans: 1 },
    { q: 'Как сказать «хотя он молод»?', opts: ['malgraŭ li estas juna', 'kvankam li estas juna', 'tamen li estas juna', 'eĉ se li estas juna'], ans: 1 },
    { q: 'Что означает <span class="eo">Eĉ se pluvos, ni iros</span>?', opts: ['Хотя идёт дождь, мы идём', 'Несмотря на дождь, мы идём', 'Даже если пойдёт дождь, мы пойдём', 'Потому что идёт дождь, мы идём'], ans: 2 },
    { q: 'Что означает <span class="eo">Kvankam lacas, li tamen laboras</span>?', opts: ['Хотя устал, он всё же работает', 'Несмотря на усталость, он работает', 'Если устал, он не работает', 'Потому что устал, он не работает'], ans: 0 },
    { q: 'Что означает <span class="eo">Eĉ se mi havus tempon, mi ne irus</span>?', opts: ['Даже если у меня есть время, я не иду', 'Даже если бы у меня было время, я не пошёл бы', 'Хотя у меня есть время, я не иду', 'Несмотря на время, я не пойду'], ans: 1 }
  ],
  test: [
    { q: 'Какой союз вводит предложение (с глаголом)?', opts: ['kvankam', 'malgraŭ', 'tamen', 'eĉ'], ans: 0, explain: 'Kvankam + глагол.' },
    { q: 'Какой предлог вводит существительное?', opts: ['kvankam', 'malgraŭ', 'tamen', 'eĉ'], ans: 1, explain: 'Malgraŭ + сущ.' },
    { q: 'Что означает <b>tamen</b>?', opts: ['хотя', 'несмотря на', 'однако', 'если'], ans: 2, explain: 'Tamen = однако.' },
    { q: 'Введите «Хотя он молод»:', type: 'input', ans: 'kvankam li estas juna', explain: 'Kvankam + предложение.' },
    { q: 'Введите «Несмотря на дождь»:', type: 'input', ans: 'malgraŭ la pluvo', explain: 'Malgraŭ + сущ.' },
    { q: 'Введите «Даже если пойдёт дождь»:', type: 'input', ans: 'eĉ se pluvos', explain: 'Eĉ se + глагол.' },
    { q: 'Введите «Хотя он устал, он всё же работает»:', type: 'input', ans: 'kvankam li lacas li tamen laboras', explain: 'Kvankam … tamen.' },
    { q: 'Что означает <span class="eo">Kiel ajn vi provos</span>?', opts: ['Как ты попробуешь', 'Как бы ты ни старался', 'Если попробуешь', 'Потому что попробуешь'], ans: 1, explain: 'Kiel ajn = как бы ни.' },
    { q: 'Что означает <span class="eo">Kien ajn vi iros, mi sekvos</span>?', opts: ['Куда бы ты ни пошёл, я последую', 'Куда ты идёшь, я следую', 'Если пойдёшь, я последую', 'Пока идёшь, я следую'], ans: 0, explain: 'Kien ajn = куда бы ни.' },
    { q: 'Что означает <span class="eo">Malgraŭ la pluvo, ni iris</span>?', opts: ['Хотя шёл дождь, мы пошли', 'Несмотря на дождь, мы пошли', 'Потому что шёл дождь, мы пошли', 'Если шёл дождь, мы пошли'], ans: 1, explain: 'Malgraŭ + сущ.' }
  ],
  builder: [
    { words: ['kvankam', 'li', 'estas', 'juna', 'li', 'multe', 'scias'], correct: ['kvankam', 'li', 'estas', 'juna', 'li', 'multe', 'scias'], translation: 'Хотя он молод, он много знает.' },
    { words: ['malgraŭ', 'la', 'malfacilaĵoj', 'ni', 'sukcesis'], correct: ['malgraŭ', 'la', 'malfacilaĵoj', 'ni', 'sukcesis'], translation: 'Несмотря на трудности, мы справились.' },
    { words: ['eĉ', 'se', 'vi', 'petos', 'min', 'mi', 'ne', 'konsentos'], correct: ['eĉ', 'se', 'vi', 'petos', 'min', 'mi', 'ne', 'konsentos'], translation: 'Даже если ты попросишь меня, я не соглашусь.' },
    { words: ['kvankam', 'pluvas', 'ni', 'tamen', 'promenos'], correct: ['kvankam', 'pluvas', 'ni', 'tamen', 'promenos'], translation: 'Хотя идёт дождь, мы всё же пойдём гулять.' },
    { words: ['eĉ', 'se', 'mi', 'havus', 'tempon', 'mi', 'ne', 'irus'], correct: ['eĉ', 'se', 'mi', 'havus', 'tempon', 'mi', 'ne', 'irus'], translation: 'Даже если бы у меня было время, я бы не пошёл.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 11: Целевые и причинные придаточные
   ═══════════════════════════════════════════════════════════ */
{
  id: 'b1-l11',
  title: 'Целевые и причинные придаточные',
  desc: 'por ke, ĉar, pro tio ke, tial ke',
  xp: 30,
  content: `
    <h3>🎯 Целевые (зачем?)</h3>
    <p>Цель выражается <b>por ke</b>. После него глагол в <b>-u</b>!</p>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td><span class="eo">Mi parolas laŭte, <b>por ke</b> ĉiuj <b>aŭdu</b>.</span></td><td>Я говорю громко, чтобы все слышали.</td></tr>
      <tr><td><span class="eo">Ŝi venis frue, <b>por ke</b> ni <b>ne</b> atendu.</span></td><td>Она пришла рано, чтобы мы не ждали.</td></tr>
    </table>

    <div class="lesson-tip">💡 <b>por ke + -u</b>. Если подлежащее то же → <b>por + инфинитив</b>: <span class="eo">Mi venis por helpi vin</span>.</div>

    <h3>🎯 Причинные (почему?)</h3>
    <table>
      <tr><th>Союз</th><th>Пример</th></tr>
      <tr><td>ĉar</td><td><span class="eo">Mi ne venis, ĉar mi estis malsana.</span></td></tr>
      <tr><td>tial ke</td><td><span class="eo">Tial ke pluvas, ni restas hejme.</span></td></tr>
      <tr><td>pro tio ke</td><td><span class="eo">Ni prokrastis pro tio ke la trajno malfruiĝis.</span></td></tr>
    </table>

    <h3>🔗 Пара «причина → следствие»</h3>
    <div class="lesson-example"><span class="eo">Ĉar pluvas, tial ni restas hejme.</span> — Так как идёт дождь, поэтому мы остаёмся дома.</div>

    <h3>✍️ Примеры</h3>
    <div class="lesson-example"><span class="eo">Mi lernas Esperanton, por ke mi povu paroli kun homoj el multaj landoj.</span> — Я учу эсперанто, чтобы мочь говорить с людьми из многих стран.</div>
    <div class="lesson-example"><span class="eo">Ŝi kuiras vespermanĝon, por ke ni manĝu kune.</span> — Она готовит ужин, чтобы мы поели вместе.</div>
    <div class="lesson-example"><span class="eo">Mi restis hejme, ĉar mi ne sentis min bone.</span> — Я остался дома, потому что плохо себя чувствовал.</div>
    <div class="lesson-example"><span class="eo">Li ripetis la demandon, por ke ĉiuj komprenu.</span> — Он повторил вопрос, чтобы все поняли.</div>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Kial vi lernas Esperanton?</b> <span class="ru">— Почему ты учишь эсперанто?</span><br>
      — <b>Por ke mi povu paroli kun homoj el multaj landoj.</b> <span class="ru">— Чтобы мочь говорить с людьми из многих стран.</span><br>
      — <b>Ĉu vi jam parolas kun iu?</b> <span class="ru">— Ты уже говоришь с кем-нибудь?</span><br>
      — <b>Jes, ĉar mi partoprenas en reta grupo.</b> <span class="ru">— Да, потому что я участвую в интернет-группе.</span>
    </div>
  `,
  exercises: [
    { q: 'Какое окончание требует <b>por ke</b>?', opts: ['-as', '-is', '-os', '-u'], ans: 3 },
    { q: 'Что означает «потому что»?', opts: ['por ke', 'ĉar', 'kvankam', 'se'], ans: 1 },
    { q: 'Что означает <span class="eo">Ĉar pluvas, ni restas hejme</span>?', opts: ['Хотя идёт дождь, мы остаёмся дома', 'Так как идёт дождь, мы остаёмся дома', 'Если идёт дождь, мы остаёмся дома', 'Когда идёт дождь, мы остаёмся дома'], ans: 1 },
    { q: 'Как сказать «Я говорю громко, чтобы все слышали»?', opts: ['Mi parolas laŭte, ke ĉiuj aŭdu', 'Mi parolas laŭte, por ke ĉiuj aŭdu', 'Mi parolas laŭte, ĉar ĉiuj aŭdu', 'Mi parolas laŭte, se ĉiuj aŭdu'], ans: 1 },
    { q: 'Когда можно <b>por + инфинитив</b>?', opts: ['всегда', 'когда подлежащие совпадают', 'когда подлежащие разные', 'никогда'], ans: 1 },
    { q: 'Что означает <span class="eo">Tial ke pluvas</span>?', opts: ['Хотя идёт дождь', 'Так как идёт дождь', 'Если идёт дождь', 'Чтобы шёл дождь'], ans: 1 },
    { q: 'Как сказать «Он пришёл, чтобы помочь мне»?', opts: ['Li venis, por ke li helpu min', 'Li venis por helpi min', 'Li venis, ĉar li helpu min', 'Li venis, ke li helpu min'], ans: 1 },
    { q: 'Что означает <span class="eo">Ŝi venis frue, por ke ni ne atendu</span>?', opts: ['Она пришла рано, потому что мы не ждали', 'Она пришла рано, чтобы мы не ждали', 'Она пришла рано, хотя мы не ждали', 'Она пришла рано, если мы не ждали'], ans: 1 },
    { q: 'Как сказать «Я остался дома, потому что плохо себя чувствовал»?', opts: ['Mi restis hejme, por ke mi ne sentu min bone', 'Mi restis hejme, ĉar mi ne sentis min bone', 'Mi restis hejme, kvankam mi ne sentis min bone', 'Mi restis hejme, se mi ne sentus min bone'], ans: 1 },
    { q: 'Что означает <span class="eo">Li lernas diligente, por ke li sukcesu</span>?', opts: ['Он учится усердно, чтобы добиться успеха', 'Он учится усердно, потому что добился успеха', 'Он учится усердно, хотя добьётся успеха', 'Он учится усердно, если добьётся успеха'], ans: 0 }
  ],
  test: [
    { q: 'Какое окончание требует <b>por ke</b>?', opts: ['-as', '-is', '-os', '-u'], ans: 3, explain: 'Por ke + -u.' },
    { q: 'Что означает <b>ĉar</b>?', opts: ['хотя', 'потому что', 'чтобы', 'если'], ans: 1, explain: 'Ĉar = потому что.' },
    { q: 'Что означает <b>tial ke</b>?', opts: ['так как', 'чтобы', 'если', 'хотя'], ans: 0, explain: 'Tial ke = так как.' },
    { q: 'Введите «Я учу эсперанто, чтобы говорить»:', type: 'input', ans: 'mi lernas esperanton por paroli', explain: 'Por + инфинитив.' },
    { q: 'Введите «Он пришёл рано, чтобы мы не ждали»:', type: 'input', ans: 'li venis frue por ke ni ne atendu', explain: 'Por ke + -u.' },
    { q: 'Введите «Я остался дома, потому что плохо себя чувствовал»:', type: 'input', ans: 'mi restis hejme ĉar mi ne sentis min bone', explain: 'Ĉar + предложение.' },
    { q: 'Введите «Так как идёт дождь, мы остаёмся дома»:', type: 'input', ans: 'ĉar pluvas ni restas hejme', explain: 'Ĉar = причина.' },
    { q: 'Когда можно заменить <b>por ke + -u</b> на <b>por + инфинитив</b>?', opts: ['всегда', 'когда подлежащие совпадают', 'когда подлежащие разные', 'никогда'], ans: 1, explain: 'Одно подлежащее.' },
    { q: 'Что означает <span class="eo">Pro tio ke la trajno malfruiĝis</span>?', opts: ['Хотя поезд задержался', 'Из-за того что поезд задержался', 'Если поезд задержится', 'Когда поезд задержится'], ans: 1, explain: 'Pro tio ke = из-за того что.' },
    { q: 'Как сказать «Мы опоздали, потому что поезд задержался»?', opts: ['Ni prokrastis, por ke la trajno malfruiĝu', 'Ni prokrastis, ĉar la trajno malfruiĝis', 'Ni prokrastis, kvankam la trajno malfruiĝis', 'Ni prokrastis, se la trajno malfruiĝus'], ans: 1, explain: 'Ĉar = потому что.' }
  ],
  builder: [
    { words: ['mi', 'lernas', 'esperanton', 'por', 'ke', 'mi', 'povu', 'paroli'], correct: ['mi', 'lernas', 'esperanton', 'por', 'ke', 'mi', 'povu', 'paroli'], translation: 'Я учу эсперанто, чтобы мочь говорить.' },
    { words: ['ŝi', 'kuiras', 'vespermanĝon', 'por', 'ke', 'ni', 'manĝu', 'kune'], correct: ['ŝi', 'kuiras', 'vespermanĝon', 'por', 'ke', 'ni', 'manĝu', 'kune'], translation: 'Она готовит ужин, чтобы мы поели вместе.' },
    { words: ['mi', 'restis', 'hejme', 'ĉar', 'mi', 'ne', 'sentis', 'min', 'bone'], correct: ['mi', 'restis', 'hejme', 'ĉar', 'mi', 'ne', 'sentis', 'min', 'bone'], translation: 'Я остался дома, потому что плохо себя чувствовал.' },
    { words: ['li', 'ripetis', 'la', 'demandon', 'por', 'ke', 'ĉiuj', 'komprenu'], correct: ['li', 'ripetis', 'la', 'demandon', 'por', 'ke', 'ĉiuj', 'komprenu'], translation: 'Он повторил вопрос, чтобы все поняли.' },
    { words: ['ŝi', 'venis', 'frue', 'por', 'ke', 'ni', 'ne', 'atendu'], correct: ['ŝi', 'venis', 'frue', 'por', 'ke', 'ni', 'ne', 'atendu'], translation: 'Она пришла рано, чтобы мы не ждали.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 12: Определительные придаточные
   ═══════════════════════════════════════════════════════════ */
{
  id: 'b1-l12',
  title: 'Определительные придаточные',
  desc: 'kiu, kio, kies в сложных предложениях',
  xp: 30,
  content: `
    <h3>📖 Что это</h3>
    <p>Оно описывает существительное: «книга, <b>которую ты читаешь</b>». Вводится словом <b>kiu</b>.</p>

    <h3>📊 Три способа</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>La libro, <b>kiun</b> mi legas, estas bona.</td><td>Книга, которую я читаю, хорошая.</td></tr>
      <tr><td>La homo, <b>kiu</b> staras tie, estas mia amiko.</td><td>Человек, который стоит там, — мой друг.</td></tr>
      <tr><td>La urbo, <b>en kiu</b> mi loĝas, estas granda.</td><td>Город, в котором я живу, большой.</td></tr>
    </table>

    <h3>🎯 kiu согласуется</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>La knabo, <b>kiu</b> kuras…</td><td>Мальчик, который бежит…</td></tr>
      <tr><td>La knaboj, <b>kiuj</b> kuras…</td><td>Мальчики, которые бегут…</td></tr>
      <tr><td>La libro, <b>kiun</b> mi legas…</td><td>Книга, которую я читаю…</td></tr>
      <tr><td>La libroj, <b>kiujn</b> mi legas…</td><td>Книги, которые я читаю…</td></tr>
    </table>

    <div class="lesson-tip">💡 <b>kiu</b> — для людей. <b>kio</b> — для вещей. <b>kies</b> — чей. <b>kie</b> — где.</div>

    <h3>🎯 kio, kies, kie</h3>
    <table>
      <tr><th>Слово</th><th>Пример</th></tr>
      <tr><td>kio</td><td>Ĉio, <b>kion</b> vi diris, estis vera.</td></tr>
      <tr><td>kies</td><td>La homo, <b>kies</b> aŭto staras tie, estas riĉa.</td></tr>
      <tr><td>kie</td><td>La urbo, <b>kie</b> mi naskiĝis, estas malgranda.</td></tr>
    </table>

    <h3>✍️ Примеры</h3>
    <div class="lesson-example"><span class="eo">La libro, kiun mi legas, estas tre interesa.</span> — Книга, которую я читаю, очень интересная.</div>
    <div class="lesson-example"><span class="eo">La homo, kiu staras ĉe la pordo, estas mia amiko.</span> — Человек, который стоит у двери, — мой друг.</div>
    <div class="lesson-example"><span class="eo">Mi konas la knabinon, kies patro estas kuracisto.</span> — Я знаю девушку, чей отец врач.</div>
    <div class="lesson-example"><span class="eo">La urbo, en kiu ni loĝas, estas bela.</span> — Город, в котором мы живём, красивый.</div>
    <div class="lesson-example"><span class="eo">Ĉio, kion ŝi diris, estis vera.</span> — Всё, что она сказала, было правдой.</div>
    <div class="lesson-example"><span class="eo">La filmo, pri kiu ni parolis, estas bona.</span> — Фильм, о котором мы говорили, хороший.</div>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Kiu estas tiu viro, kiu staras apud la pordo?</b> <span class="ru">— Кто тот человек, который стоит у двери?</span><br>
      — <b>Tio estas mia amiko, kiu loĝas en Berlino.</b> <span class="ru">— Это мой друг, который живёт в Берлине.</span><br>
      — <b>Ĉu li estas tiu, kies librojn vi legis?</b> <span class="ru">— Это тот, чьи книги ты читал?</span><br>
      — <b>Jes, precize.</b> <span class="ru">— Да, именно.</span>
    </div>
  `,
  exercises: [
    { q: 'Какое слово вводит определительное придаточное?', opts: ['ke', 'kiu', 'ĉu', 'se'], ans: 1 },
    { q: 'Какая форма для винительного?', opts: ['kiu', 'kiun', 'kio', 'kies'], ans: 1 },
    { q: 'Что означает <span class="eo">La libro, kiun mi legas</span>?', opts: ['Книга, которая читает', 'Книга, которую я читаю', 'Книга, о которой я читаю', 'Книга, которой я читаю'], ans: 1 },
    { q: 'Что означает <span class="eo">La homo, kies aŭto staras tie</span>?', opts: ['Человек, чья машина там стоит', 'Человек, который там стоит', 'Человек, который в машине', 'Человек, о машине которого'], ans: 0 },
    { q: 'Как сказать «Город, в котором я живу»?', opts: ['La urbo, kiu mi loĝas', 'La urbo, en kiu mi loĝas', 'La urbo, kie mi loĝas', 'La urbo, kion mi loĝas'], ans: 1 },
    { q: 'Как сказать «Фильм, о котором мы говорили»?', opts: ['La filmo, kiu ni parolis', 'La filmo, pri kiu ni parolis', 'La filmo, kies ni parolis', 'La filmo, kion ni parolis'], ans: 1 },
    { q: 'Что означает <span class="eo">Ĉio, kion vi diris</span>?', opts: ['Всё, кто ты сказал', 'Всё, что ты сказал', 'Всё, чей ты сказал', 'Всё, о чём ты сказал'], ans: 1 },
    { q: 'Как сказать «Книги, которые я читал»?', opts: ['La libroj, kiuj mi legis', 'La libroj, kiujn mi legis', 'La libroj, kies mi legis', 'La libroj, kion mi legis'], ans: 1 },
    { q: 'Что означает <span class="eo">La urbo, kie mi naskiĝis</span>?', opts: ['Город, который я родил', 'Город, где я родился', 'Город, чей я родился', 'Город, куда я родился'], ans: 1 },
    { q: 'Что означает <span class="eo">La homo, kiu sidas tie, estas riĉa</span>?', opts: ['Человек, который там сидит, богат', 'Человек, о котором говорят, богат', 'Человек, чья машина там, богат', 'Человек, в доме которого мы, богат'], ans: 0 }
  ],
  test: [
    { q: 'Какое слово вводит определительное придаточное для людей?', opts: ['kio', 'kiu', 'kie', 'kies'], ans: 1, explain: 'Kiu = который.' },
    { q: 'Какая форма для винительного?', opts: ['kiu', 'kiun', 'kio', 'kie'], ans: 1, explain: 'Kiun = которого.' },
    { q: 'Что означает <b>kies</b>?', opts: ['который', 'чей', 'где', 'что'], ans: 1, explain: 'Kies = чей.' },
    { q: 'Введите «Книга, которую я читаю»:', type: 'input', ans: 'la libro kiun mi legas', explain: 'Kiun = вин.' },
    { q: 'Введите «Человек, который стоит там»:', type: 'input', ans: 'la homo kiu staras tie', explain: 'Kiu = им.' },
    { q: 'Введите «Человек, чья машина там стоит»:', type: 'input', ans: 'la homo kies aŭto staras tie', explain: 'Kies = чей.' },
    { q: 'Введите «Город, в котором я живу»:', type: 'input', ans: 'la urbo en kiu mi loĝas', explain: 'En kiu = в котором.' },
    { q: 'Что означает <span class="eo">La filmo, pri kiu ni parolis</span>?', opts: ['Фильм, который мы говорили', 'Фильм, о котором мы говорили', 'Фильм, чей мы говорили', 'Фильм, где мы говорили'], ans: 1, explain: 'Pri kiu = о котором.' },
    { q: 'Как сказать «Книги, которые я читаю»?', opts: ['La libroj, kiuj mi legas', 'La libroj, kiujn mi legas', 'La libroj, kies mi legas', 'La libroj, kion mi legas'], ans: 1, explain: 'Kiujn = которые (вин. мн.).' },
    { q: 'Что означает <span class="eo">Ĉio, kion vi diris, estis vera</span>?', opts: ['Всё, что ты сказал, было правдой', 'Всё, кто ты сказал, было правдой', 'Всё, чей ты сказал, было правдой', 'Всё, где ты сказал, было правдой'], ans: 0, explain: 'Kion = что (вин.).' }
  ],
  builder: [
    { words: ['la', 'libro', 'kiun', 'mi', 'legas', 'estas', 'interesa'], correct: ['la', 'libro', 'kiun', 'mi', 'legas', 'estas', 'interesa'], translation: 'Книга, которую я читаю, интересная.' },
    { words: ['la', 'homo', 'kiu', 'staras', 'tie', 'estas', 'mia', 'amiko'], correct: ['la', 'homo', 'kiu', 'staras', 'tie', 'estas', 'mia', 'amiko'], translation: 'Человек, который стоит там, — мой друг.' },
    { words: ['mi', 'konas', 'la', 'knabinon', 'kies', 'patro', 'estas', 'kuracisto'], correct: ['mi', 'konas', 'la', 'knabinon', 'kies', 'patro', 'estas', 'kuracisto'], translation: 'Я знаю девушку, чей отец врач.' },
    { words: ['la', 'urbo', 'en', 'kiu', 'ni', 'loĝas', 'estas', 'bela'], correct: ['la', 'urbo', 'en', 'kiu', 'ni', 'loĝas', 'estas', 'bela'], translation: 'Город, в котором мы живём, красивый.' },
    { words: ['ĉio', 'kion', 'ŝi', 'diris', 'estis', 'vera'], correct: ['ĉio', 'kion', 'ŝi', 'diris', 'estis', 'vera'], translation: 'Всё, что она сказала, было правдой.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 13: Двойное отрицание углублённо (НОВЫЙ)
   ═══════════════════════════════════════════════════════════ */
{
  id: 'b1-l13',
  title: 'Двойное отрицание углублённо',
  desc: 'Neniu… ne, сложные случаи отрицания',
  xp: 30,
  content: `
    <h3>🚫 Что такое двойное отрицание</h3>
    <p>В эсперанто <b>двойное отрицание усиливает, а не отменяет</b>. Это важное отличие от английского.</p>

    <h3>📊 Три стратегии</h3>
    <table>
      <tr><th>Способ</th><th>Пример</th><th>Перевод</th></tr>
      <tr><td>Только <b>neni-</b></td><td><span class="eo">Neniu venis.</span></td><td>Никто не пришёл.</td></tr>
      <tr><td>Только <b>ne</b> + обычное слово</td><td><span class="eo">Ne venis iu.</span></td><td>Никто не пришёл (букв. «не пришёл кто-то»).</td></tr>
      <tr><td>Двойное: <b>ne + neni-</b></td><td><span class="eo">Neniu ne venis.</span></td><td>Никто не не-пришёл = все пришли.</td></tr>
    </table>

    <div class="lesson-tip">💡 По умолчанию <b>выбирай одну</b> стратегию: либо <b>neniu venis</b>, либо <b>ne venis iu</b>. Оба варианта правильные. Двойное (<b>neniu ne venis</b>) используется редко, для тонких оттенков.</div>

    <h3>📖 Типичные ошибки и как их избегать</h3>
    <table>
      <tr><th>Неправильно</th><th>Правильно</th><th>Перевод</th></tr>
      <tr><td>Neniu ne venis (в знач. «никто не пришёл»)</td><td>Neniu venis</td><td>Никто не пришёл.</td></tr>
      <tr><td>Mi ne vidas neniun (слабый вариант)</td><td>Mi vidas neniun</td><td>Я никого не вижу.</td></tr>
      <tr><td>Neniam mi ne diros tion</td><td>Neniam mi diros tion</td><td>Никогда я не скажу этого.</td></tr>
    </table>

    <h3>🎯 Когда всё-таки нужны две отрицательные части</h3>
    <p>Когда <b>ne</b> относится к другому слову, а не к отрицанию факта:</p>
    <div class="lesson-example"><span class="eo">Ne ĉiu venis.</span> — Не все пришли.</div>
    <div class="lesson-example"><span class="eo">Ne ĉiam li pravas.</span> — Не всегда он прав.</div>
    <div class="lesson-example"><span class="eo">Mi venis ne por ludi.</span> — Я пришёл не для игры.</div>

    <h3>🎯 Neniu + предлог</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td><span class="eo">pri nenio</span></td><td>ни о чём</td></tr>
      <tr><td><span class="eo">kun neniu</span></td><td>ни с кем</td></tr>
      <tr><td><span class="eo">al neniu</span></td><td>никому</td></tr>
      <tr><td><span class="eo">de neniu</span></td><td>ни от кого</td></tr>
      <tr><td><span class="eo">per nenio</span></td><td>ничем</td></tr>
    </table>

    <h3>✍️ Примеры</h3>
    <div class="lesson-example"><span class="eo">Mi parolis pri nenio grava.</span> — Я говорил ни о чём важном.</div>
    <div class="lesson-example"><span class="eo">Ŝi vidis neniun en la ĉambro.</span> — Она не видела никого в комнате.</div>
    <div class="lesson-example"><span class="eo">Li helpis al neniu.</span> — Он не помог никому.</div>
    <div class="lesson-example"><span class="eo">Ni parolis per neniu.</span> — Мы ни с кем не говорили.</div>
    <div class="lesson-example"><span class="eo">Neniam mi forgesos tion.</span> — Никогда я не забуду это.</div>
    <div class="lesson-example"><span class="eo">Ne ĉiu scias tion.</span> — Не все знают это.</div>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Kion vi faris hieraŭ?</b> <span class="ru">— Что ты делал вчера?</span><br>
      — <b>Neniom gravan. Mi parolis kun neniu.</b> <span class="ru">— Ничего важного. Я ни с кем не говорил.</span><br>
      — <b>Ĉu vi ricevis iun leteron?</b> <span class="ru">— Ты получил какое-нибудь письмо?</span><br>
      — <b>Ne, mi ricevis neniun.</b> <span class="ru">— Нет, я не получил никакого.</span>
    </div>
  `,
  exercises: [
    { q: 'Что означает <span class="eo">neniu venis</span>?', opts: ['кто-то пришёл', 'никто не пришёл', 'все пришли', 'он пришёл'], ans: 1 },
    { q: 'Что означает <span class="eo">Neniam mi diris tion</span>?', opts: ['Я всегда это говорил', 'Я никогда не говорил это', 'Я иногда это говорил', 'Я сейчас это скажу'], ans: 1 },
    { q: 'Что означает <span class="eo">Ne ĉiu venis</span>?', opts: ['Никто не пришёл', 'Не все пришли', 'Все пришли', 'Некоторые не пришли (и это все)'], ans: 1 },
    { q: 'Что означает <span class="eo">Mi parolis pri nenio</span>?', opts: ['Я говорил о чём-то', 'Я говорил ни о чём', 'Я говорил обо всём', 'Я не говорил'], ans: 1 },
    { q: 'Как сказать «никому»?', opts: ['al neniu', 'de neniu', 'kun neniu', 'pri neniu'], ans: 0 },
    { q: 'Как сказать «ни с кем»?', opts: ['al neniu', 'de neniu', 'kun neniu', 'pri neniu'], ans: 2 },
    { q: 'Как сказать «ни о чём»?', opts: ['al nenio', 'de nenio', 'kun nenio', 'pri nenio'], ans: 3 },
    { q: 'Что означает <span class="eo">Li helpis al neniu</span>?', opts: ['Он помог кому-то', 'Он помог всем', 'Он никому не помог', 'Он не помог мне'], ans: 2 },
    { q: 'Что означает <span class="eo">Ne ĉiam li pravas</span>?', opts: ['Никогда он не прав', 'Не всегда он прав', 'Всегда он прав', 'Иногда он прав'], ans: 1 },
    { q: 'Что означает <span class="eo">Mi venis ne por ludi</span>?', opts: ['Я пришёл играть', 'Я пришёл не для игры', 'Я не пришёл', 'Я пришёл и играю'], ans: 1 }
  ],
  test: [
    { q: 'Усиливает или отменяет двойное отрицание?', opts: ['усиливает', 'отменяет', 'никак не влияет', 'двусмысленно'], ans: 0, explain: 'Neniu ne venis = все пришли (редкое использование).' },
    { q: 'Как лучше сказать «никто не пришёл»?', opts: ['Neniu ne venis', 'Neniu venis', 'Ne venis neniu', 'Ne ne venis'], ans: 1, explain: 'Одна стратегия.' },
    { q: 'Что означает <span class="eo">Mi vidas neniun</span>?', opts: ['Я кого-то вижу', 'Я никого не вижу', 'Я вижу всех', 'Я не смотрю'], ans: 1, explain: 'Neniun = никого.' },
    { q: 'Введите «никогда» на эсперанто:', type: 'input', ans: 'neniam', explain: 'Neniam.' },
    { q: 'Введите «никто» на эсперанто:', type: 'input', ans: 'neniu', explain: 'Neniu.' },
    { q: 'Введите «ни с кем» на эсперанто:', type: 'input', ans: 'kun neniu', explain: 'Kun + neniu.' },
    { q: 'Введите «ни о чём» на эсперанто:', type: 'input', ans: 'pri nenio', explain: 'Pri + nenio.' },
    { q: 'Что означает <span class="eo">Mi parolis kun neniu</span>?', opts: ['Я с кем-то говорил', 'Я ни с кем не говорил', 'Я говорил со всеми', 'Я ни о чём не говорил'], ans: 1, explain: 'Kun neniu = ни с кем.' },
    { q: 'Разница между <b>neniu venis</b> и <b>ne venis iu</b>:', opts: ['разный смысл', 'одно и то же (стиль)', 'первое правильное', 'второе правильное'], ans: 1, explain: 'Синонимичны по смыслу.' },
    { q: 'Что означает <span class="eo">Neniam mi forgesos tion</span>?', opts: ['Я всегда это помню', 'Никогда я не забуду это', 'Я иногда забываю', 'Я забыл это'], ans: 1, explain: 'Neniam = никогда.' }
  ],
  builder: [
    { words: ['mi', 'vidas', 'neniun', 'en', 'la', 'ĉambro'], correct: ['mi', 'vidas', 'neniun', 'en', 'la', 'ĉambro'], translation: 'Я не вижу никого в комнате.' },
    { words: ['li', 'parolis', 'kun', 'neniu'], correct: ['li', 'parolis', 'kun', 'neniu'], translation: 'Он ни с кем не говорил.' },
    { words: ['ŝi', 'ricevis', 'neniun', 'leteron'], correct: ['ŝi', 'ricevis', 'neniun', 'leteron'], translation: 'Она не получила никакого письма.' },
    { words: ['neniam', 'mi', 'forgesos', 'tion'], correct: ['neniam', 'mi', 'forgesos', 'tion'], translation: 'Никогда я не забуду это.' },
    { words: ['ne', 'ĉiu', 'scias', 'tion'], correct: ['ne', 'ĉiu', 'scias', 'tion'], translation: 'Не все знают это.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 14: Наречия и степени
   ═══════════════════════════════════════════════════════════ */
{
  id: 'b1-l14',
  title: 'Наречия и их степени',
  desc: 'Наречия, степени сравнения, особые формы',
  xp: 30,
  content: `
    <h3>📖 Что такое наречие</h3>
    <p>Наречие отвечает на вопросы «как?», «когда?», «где?». Обычное наречие — на <b>-e</b>.</p>

    <h3>📊 Образование</h3>
    <table>
      <tr><th>Прилагательное</th><th>Наречие</th></tr>
      <tr><td>bona</td><td>bone — хорошо</td></tr>
      <tr><td>rapida</td><td>rapide — быстро</td></tr>
      <tr><td>facila</td><td>facile — легко</td></tr>
    </table>

    <h3>🎯 Степени сравнения</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>rapide</td><td>быстро</td></tr>
      <tr><td>pli rapide</td><td>быстрее</td></tr>
      <tr><td>plej rapide</td><td>быстрее всего</td></tr>
      <tr><td>malpli rapide</td><td>менее быстро</td></tr>
    </table>

    <h3>📖 Примеры</h3>
    <div class="lesson-example"><span class="eo">Li kuras pli rapide ol mi.</span> — Он бегает быстрее меня.</div>
    <div class="lesson-example"><span class="eo">Ŝi kantas plej bele el ĉiuj.</span> — Она поёт красивее всех.</div>
    <div class="lesson-example"><span class="eo">Parolu pli laŭte, bonvolu.</span> — Говорите громче, пожалуйста.</div>

    <h3>🎯 Особые наречия</h3>
    <table>
      <tr><th>Наречие</th><th>Значение</th></tr>
      <tr><td>tre</td><td>очень</td></tr>
      <tr><td>tro</td><td>слишком</td></tr>
      <tr><td>multe</td><td>много</td></tr>
      <tr><td>nur</td><td>только</td></tr>
      <tr><td>ankaŭ</td><td>тоже</td></tr>
      <tr><td>eĉ</td><td>даже</td></tr>
      <tr><td>jam</td><td>уже</td></tr>
      <tr><td>ankoraŭ</td><td>ещё</td></tr>
      <tr><td>preskaŭ</td><td>почти</td></tr>
    </table>

    <h3>✍️ Примеры в контексте</h3>
    <div class="lesson-example"><span class="eo">Li parolas tre klare.</span> — Он говорит очень ясно.</div>
    <div class="lesson-example"><span class="eo">Ni devas labori pli diligente.</span> — Нам нужно работать усерднее.</div>
    <div class="lesson-example"><span class="eo">Li preskaŭ neniam eraras.</span> — Он почти никогда не ошибается.</div>
    <div class="lesson-example"><span class="eo">Bonvolu paroli malpli rapide.</span> — Пожалуйста, говорите медленнее.</div>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Kiel vi fartas hodiaŭ?</b> <span class="ru">— Как вы сегодня?</span><br>
      — <b>Tre bone, dankon. Kaj vi?</b> <span class="ru">— Очень хорошо, спасибо. А вы?</span><br>
      — <b>Ne tre bone. Mi dormis malmulte.</b> <span class="ru">— Не очень. Я мало спал.</span><br>
      — <b>Vi devus ripozi pli multe.</b> <span class="ru">— Вам следовало бы больше отдыхать.</span>
    </div>
  `,
  exercises: [
    { q: 'Какое окончание у наречия?', opts: ['-a', '-o', '-e', '-i'], ans: 2 },
    { q: 'Что означает <b>tre</b>?', opts: ['слишком', 'очень', 'много', 'мало'], ans: 1 },
    { q: 'Что означает <b>tro</b>?', opts: ['слишком', 'очень', 'много', 'мало'], ans: 0 },
    { q: 'Как сказать «быстрее»?', opts: ['rapide', 'pli rapide', 'plej rapide', 'malpli rapide'], ans: 1 },
    { q: 'Как сказать «быстрее всего»?', opts: ['rapide', 'pli rapide', 'plej rapide', 'malpli rapide'], ans: 2 },
    { q: 'Как сказать «менее быстро»?', opts: ['rapide', 'pli rapide', 'plej rapide', 'malpli rapide'], ans: 3 },
    { q: 'Что означает <span class="eo">Li parolas tre klare</span>?', opts: ['Он говорит очень ясно', 'Он говорит слишком ясно', 'Он говорит много', 'Он говорит мало'], ans: 0 },
    { q: 'Что означает <span class="eo">Ŝi preskaŭ ĉiam ridetas</span>?', opts: ['Она всегда улыбается', 'Она почти всегда улыбается', 'Она иногда улыбается', 'Она никогда не улыбается'], ans: 1 },
    { q: 'Что означает <b>ankoraŭ</b>?', opts: ['уже', 'ещё', 'уже не', 'скоро'], ans: 1 },
    { q: 'Что означает <b>preskaŭ</b>?', opts: ['почти', 'точно', 'совсем', 'чуть-чуть'], ans: 0 }
  ],
  test: [
    { q: 'Какое окончание у обычного наречия?', opts: ['-a', '-o', '-e', '-i'], ans: 2, explain: '-e.' },
    { q: 'Что означает <b>pli</b> перед наречием?', opts: ['менее', 'более', 'самый', 'чем'], ans: 1, explain: 'Pli rapide = быстрее.' },
    { q: 'Что означает <b>plej</b> перед наречием?', opts: ['менее', 'более', 'быстрее всего', 'чем'], ans: 2, explain: 'Plej rapide.' },
    { q: 'Введите «очень хорошо»:', type: 'input', ans: 'tre bone', explain: 'Tre + bone.' },
    { q: 'Введите «быстрее»:', type: 'input', ans: 'pli rapide', explain: 'Pli + rapide.' },
    { q: 'Введите «быстрее всего»:', type: 'input', ans: 'plej rapide', explain: 'Plej + rapide.' },
    { q: 'Введите «менее быстро»:', type: 'input', ans: 'malpli rapide', explain: 'Malpli + rapide.' },
    { q: 'Что означает <span class="eo">Li kuras pli rapide ol mi</span>?', opts: ['Он бегает так же быстро, как я', 'Он бегает быстрее меня', 'Он бегает медленнее меня', 'Он бегает быстрее всех'], ans: 1, explain: 'Pli … ol.' },
    { q: 'Что означает <b>jam</b>?', opts: ['уже', 'ещё', 'скоро', 'сейчас'], ans: 0, explain: 'Jam = уже.' },
    { q: 'Что означает <b>nur</b>?', opts: ['только', 'всё', 'даже', 'тоже'], ans: 0, explain: 'Nur = только.' }
  ],
  builder: [
    { words: ['li', 'parolas', 'tre', 'bone', 'esperanton'], correct: ['li', 'parolas', 'tre', 'bone', 'esperanton'], translation: 'Он очень хорошо говорит на эсперанто.' },
    { words: ['li', 'kuras', 'pli', 'rapide', 'ol', 'mi'], correct: ['li', 'kuras', 'pli', 'rapide', 'ol', 'mi'], translation: 'Он бегает быстрее меня.' },
    { words: ['ŝi', 'kantas', 'plej', 'bele', 'el', 'ĉiuj'], correct: ['ŝi', 'kantas', 'plej', 'bele', 'el', 'ĉiuj'], translation: 'Она поёт красивее всех.' },
    { words: ['bonvolu', 'paroli', 'pli', 'laŭte'], correct: ['bonvolu', 'paroli', 'pli', 'laŭte'], translation: 'Пожалуйста, говорите громче.' },
    { words: ['li', 'preskaŭ', 'neniam', 'eraras'], correct: ['li', 'preskaŭ', 'neniam', 'eraras'], translation: 'Он почти никогда не ошибается.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 15: Сложные предлоги
   ═══════════════════════════════════════════════════════════ */
{
  id: 'b1-l15',
  title: 'Сложные предлоги',
  desc: 'Составные предлоги и предложные конструкции',
  xp: 30,
  content: `
    <h3>🧩 Что это</h3>
    <p>Некоторые предлоги образуются из нескольких слов: <b>antaŭ ol</b>, <b>post kiam</b>. Другие — сложные по смыслу.</p>

    <h3>📊 Часто встречающиеся</h3>
    <table>
      <tr><th>Конструкция</th><th>Значение</th></tr>
      <tr><td>antaŭ ol</td><td>прежде чем</td></tr>
      <tr><td>post kiam</td><td>после того как</td></tr>
      <tr><td>tuj kiam</td><td>как только</td></tr>
      <tr><td>ĝis kiam</td><td>до тех пор пока</td></tr>
      <tr><td>de post</td><td>с (начиная с)</td></tr>
      <tr><td>de antaŭ</td><td>с (перед)</td></tr>
      <tr><td>dank' al</td><td>благодаря</td></tr>
      <tr><td>malgraŭ</td><td>несмотря на</td></tr>
    </table>

    <h3>🎯 Предлоги + -n</h3>
    <table>
      <tr><th>Где?</th><th>Куда?</th></tr>
      <tr><td>en la domo</td><td>en la domon</td></tr>
      <tr><td>sur la tablo</td><td>sur la tablon</td></tr>
      <tr><td>inter la amikoj</td><td>inter la amikojn</td></tr>
    </table>

    <h3>🎯 Предлог + инфинитив</h3>
    <table>
      <tr><th>Предлог</th><th>Пример</th></tr>
      <tr><td>por</td><td>Mi venis por helpi.</td></tr>
      <tr><td>antaŭ ol</td><td>Antaŭ ol foriri, li adiaŭis.</td></tr>
      <tr><td>anstataŭ</td><td>Anstataŭ atendi, ni iris.</td></tr>
      <tr><td>krom</td><td>Krom legi, ŝi ankaŭ skribas.</td></tr>
    </table>

    <h3>✍️ Примеры</h3>
    <div class="lesson-example"><span class="eo">Antaŭ ol foriri, li fermis la fenestron.</span> — Прежде чем уйти, он закрыл окно.</div>
    <div class="lesson-example"><span class="eo">Post kiam ŝi finis, ŝi ripozis.</span> — После того как она закончила, она отдохнула.</div>
    <div class="lesson-example"><span class="eo">Tuj kiam li vidis min, li salutis.</span> — Как только он меня увидел, он поздоровался.</div>
    <div class="lesson-example"><span class="eo">Dank' al vi, mi sukcesis.</span> — Благодаря тебе я справился.</div>
    <div class="lesson-example"><span class="eo">Malgraŭ la malfacilaĵoj, ni daŭrigis.</span> — Несмотря на трудности, мы продолжили.</div>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Kiam vi telefonos al mi?</b> <span class="ru">— Когда ты позвонишь мне?</span><br>
      — <b>Tuj kiam mi alvenos hejmen.</b> <span class="ru">— Как только я приду домой.</span><br>
      — <b>Kaj antaŭ ol foriri, bonvolu fermi la pordon.</b> <span class="ru">— И прежде чем уйти, закрой дверь.</span><br>
      — <b>Kompreneble.</b> <span class="ru">— Конечно.</span>
    </div>
  `,
  exercises: [
    { q: 'Что означает <b>antaŭ ol</b>?', opts: ['после того как', 'прежде чем', 'как только', 'несмотря на'], ans: 1 },
    { q: 'Что означает <b>post kiam</b>?', opts: ['после того как', 'прежде чем', 'как только', 'несмотря на'], ans: 0 },
    { q: 'Что означает <b>tuj kiam</b>?', opts: ['после того как', 'прежде чем', 'как только', 'несмотря на'], ans: 2 },
    { q: 'Что означает <b>dank\' al</b>?', opts: ['несмотря на', 'благодаря', 'вместо', 'кроме'], ans: 1 },
    { q: 'Когда добавляется -n после предлога?', opts: ['всегда', 'когда указано направление', 'когда указано место', 'никогда'], ans: 1 },
    { q: 'Как сказать «Прежде чем уйти»?', opts: ['post ol foriri', 'antaŭ ol foriri', 'ĝis ol foriri', 'dum ol foriri'], ans: 1 },
    { q: 'Как сказать «Как только он увидел»?', opts: ['post kiam li vidis', 'tuj kiam li vidis', 'antaŭ ol li vidis', 'ĝis kiam li vidis'], ans: 1 },
    { q: 'Как сказать «Благодаря тебе»?', opts: ['dank\' al vi', 'malgraŭ vi', 'anstataŭ vi', 'krom vi'], ans: 0 },
    { q: 'Что означает <b>ĝis kiam</b>?', opts: ['до тех пор пока', 'после того как', 'как только', 'с тех пор'], ans: 0 },
    { q: 'Что означает <b>anstataŭ</b>?', opts: ['благодаря', 'несмотря на', 'вместо', 'кроме'], ans: 2 }
  ],
  test: [
    { q: 'Что означает <b>antaŭ ol</b>?', opts: ['после того как', 'прежде чем', 'как только', 'до тех пор'], ans: 1, explain: 'Прежде чем.' },
    { q: 'Что означает <b>tuj kiam</b>?', opts: ['прежде чем', 'после того как', 'как только', 'несмотря на'], ans: 2, explain: 'Tuj kiam = как только.' },
    { q: 'Что означает <b>dank\' al</b>?', opts: ['благодаря', 'несмотря на', 'вместо', 'кроме'], ans: 0, explain: 'Благодаря.' },
    { q: 'Введите «Прежде чем уйти, он попрощался»:', type: 'input', ans: 'antaŭ ol foriri li adiaŭis', explain: 'Antaŭ ol + инф.' },
    { q: 'Введите «Как только он увидел меня»:', type: 'input', ans: 'tuj kiam li vidis min', explain: 'Tuj kiam.' },
    { q: 'Введите «Благодаря тебе я справился»:', type: 'input', ans: 'dank\' al vi mi sukcesis', explain: 'Dank\' al + кто.' },
    { q: 'Введите «Вместо того чтобы ждать, мы пошли»:', type: 'input', ans: 'anstataŭ atendi ni iris', explain: 'Anstataŭ + инф.' },
    { q: 'Что означает <span class="eo">Post kiam ŝi finis</span>?', opts: ['Прежде чем она закончила', 'После того как она закончила', 'Как только она закончила', 'Несмотря на то что она закончила'], ans: 1, explain: 'Post kiam = после.' },
    { q: 'Что означает <b>krom</b> в конструкции?', opts: ['кроме', 'вместо', 'благодаря', 'до'], ans: 0, explain: 'Krom = кроме.' },
    { q: 'Что означает <span class="eo">Malgraŭ la pluvo, ni iris</span>?', opts: ['Хотя шёл дождь, мы пошли', 'Несмотря на дождь, мы пошли', 'Потому что шёл дождь, мы пошли', 'Если шёл дождь, мы пошли'], ans: 1, explain: 'Malgraŭ + сущ.' }
  ],
  builder: [
    { words: ['antaŭ', 'ol', 'foriri', 'li', 'fermis', 'la', 'fenestron'], correct: ['antaŭ', 'ol', 'foriri', 'li', 'fermis', 'la', 'fenestron'], translation: 'Прежде чем уйти, он закрыл окно.' },
    { words: ['post', 'kiam', 'ŝi', 'finis', 'ŝi', 'ripozis'], correct: ['post', 'kiam', 'ŝi', 'finis', 'ŝi', 'ripozis'], translation: 'После того как она закончила, она отдохнула.' },
    { words: ['tuj', 'kiam', 'li', 'vidis', 'min', 'li', 'salutis'], correct: ['tuj', 'kiam', 'li', 'vidis', 'min', 'li', 'salutis'], translation: 'Как только он меня увидел, он поздоровался.' },
    { words: ['dank\'', 'al', 'vi', 'mi', 'sukcesis'], correct: ['dank\'', 'al', 'vi', 'mi', 'sukcesis'], translation: 'Благодаря тебе я справился.' },
    { words: ['anstataŭ', 'atendi', 'ni', 'iris', 'renkonte'], correct: ['anstataŭ', 'atendi', 'ni', 'iris', 'renkonte'], translation: 'Вместо того чтобы ждать, мы пошли навстречу.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 16: Словообразование продвинутое
   ═══════════════════════════════════════════════════════════ */
{
  id: 'b1-l16',
  title: 'Словообразование продвинутое',
  desc: 'Сложные слова, -ig-, -iĝ-, -ebl-',
  xp: 30,
  content: `
    <h3>🧩 Конструктор слов</h3>
    <p>Освоив продуктивные морфемы, ты можешь строить слова, которых нет в словаре.</p>

    <h3>🎯 Сложные слова из двух корней</h3>
    <table>
      <tr><th>Слово</th><th>Разбор</th><th>Перевод</th></tr>
      <tr><td>ĉefurbo</td><td>ĉef- (главный) + urbo</td><td>столица</td></tr>
      <tr><td>labortablo</td><td>labor- + tablo</td><td>рабочий стол</td></tr>
      <tr><td>manĝoĉambro</td><td>manĝ- + ĉambro</td><td>столовая</td></tr>
      <tr><td>vortaro</td><td>vort- + -ar- + -o</td><td>словарь</td></tr>
      <tr><td>fervojo</td><td>fer- + vojo</td><td>железная дорога</td></tr>
    </table>

    <h3>🎯 Продуктивные суффиксы</h3>
    <table>
      <tr><th>Суффикс</th><th>Значение</th><th>Пример</th></tr>
      <tr><td>-ig-</td><td>заставить, сделать</td><td>pura → purigi (чистить)</td></tr>
      <tr><td>-iĝ-</td><td>стать, становиться</td><td>pura → puriĝi (очищаться)</td></tr>
      <tr><td>-ebl-</td><td>возможный</td><td>vidi → videbla (видимый)</td></tr>
      <tr><td>-iv-</td><td>способный</td><td>krei → kreiva (творческий)</td></tr>
      <tr><td>-ism-</td><td>учение, система</td><td>sociala → socialismo</td></tr>
      <tr><td>-an-</td><td>член, житель</td><td>klubo → klubano</td></tr>
    </table>

    <h3>🔑 Пара -ig- и -iĝ-</h3>
    <table>
      <tr><th>Исходное</th><th>-ig- (заставить)</th><th>-iĝ- (стать)</th></tr>
      <tr><td>pura</td><td>purigi (чистить)</td><td>puriĝi (очищаться)</td></tr>
      <tr><td>ruĝa</td><td>ruĝigi (красить)</td><td>ruĝiĝi (краснеть)</td></tr>
      <tr><td>granda</td><td>grandigi (увеличивать)</td><td>grandiĝi (увеличиваться)</td></tr>
    </table>

    <h3>🎯 Двойные суффиксы</h3>
    <div class="lesson-example"><span class="eo">beliĝi</span> — bel- + -iĝ- + -i = становиться красивым</div>
    <div class="lesson-example"><span class="eo">purigilo</span> — pur- + -ig- + -il- + -o = чистящее средство</div>
    <div class="lesson-example"><span class="eo">legebla</span> — leg- + -ebl- + -a = читаемый</div>
    <div class="lesson-example"><span class="eo">junularo</span> — jun- + -ul- + -ar- + -o = молодёжь</div>

    <h3>✍️ Примеры</h3>
    <div class="lesson-example"><span class="eo">Bonvolu purigi la tablon.</span> — Пожалуйста, вытрите стол.</div>
    <div class="lesson-example"><span class="eo">La ĉielo ruĝiĝis.</span> — Небо покраснело.</div>
    <div class="lesson-example"><span class="eo">Ĉi tiu libro estas videbla sur la tablo.</span> — Эта книга видна на столе.</div>
    <div class="lesson-example"><span class="eo">Mi estas klubano de la esperanto-klubo.</span> — Я член эсперанто-клуба.</div>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Kion vi faras en la klubo?</b> <span class="ru">— Что вы делаете в клубе?</span><br>
      — <b>Mi estas klubano kaj partoprenas multajn aranĝojn.</b> <span class="ru">— Я член клуба и участвую во многих мероприятиях.</span><br>
      — <b>Kaj kion vi faris hieraŭ?</b> <span class="ru">— А что вы делали вчера?</span><br>
      — <b>Ni purigis la ĉambron kaj poste preparis teon.</b> <span class="ru">— Мы убрали комнату, а потом приготовили чай.</span>
    </div>
  `,
  exercises: [
    { q: 'Что означает <b>-ig-</b>?', opts: ['стать', 'заставить', 'возможный', 'склонность'], ans: 1 },
    { q: 'Что означает <b>-iĝ-</b>?', opts: ['стать', 'заставить', 'возможный', 'склонность'], ans: 0 },
    { q: 'Что означает <b>-ebl-</b>?', opts: ['возможный', 'заставить', 'стать', 'склонность'], ans: 0 },
    { q: 'Как из <span class="eo">pura</span> получить «чистить»?', opts: ['puriĝi', 'purigi', 'purebla', 'puremo'], ans: 1 },
    { q: 'Как из <span class="eo">ruĝa</span> получить «краснеть»?', opts: ['ruĝigi', 'ruĝiĝi', 'ruĝe', 'ruĝega'], ans: 1 },
    { q: 'Что означает <span class="eo">videbla</span>?', opts: ['видящий', 'видимый', 'видевший', 'тот, кто увидит'], ans: 1 },
    { q: 'Как сказать «учительница»?', opts: ['instruisto', 'instruistino', 'instruisteto', 'instruistego'], ans: 1 },
    { q: 'Что означает <span class="eo">ĉefurbo</span>?', opts: ['главный город = столица', 'маленький город', 'пригород', 'городской'], ans: 0 },
    { q: 'Что означает <span class="eo">purigilo</span>?', opts: ['чистильщик', 'средство для чистки', 'чистота', 'чистка'], ans: 1 },
    { q: 'Что означает <span class="eo">beliĝi</span>?', opts: ['украшать', 'становиться красивым', 'красивый', 'красота'], ans: 1 }
  ],
  test: [
    { q: 'Что означает <b>-ig-</b>?', opts: ['стать', 'заставить', 'возможный', 'место'], ans: 1, explain: 'Purigi = чистить.' },
    { q: 'Что означает <b>-iĝ-</b>?', opts: ['заставить', 'стать', 'возможный', 'место'], ans: 1, explain: 'Puriĝi = очищаться.' },
    { q: 'Что означает <b>-ebl-</b>?', opts: ['возможный', 'склонный', 'место', 'детёныш'], ans: 0, explain: 'Videbla = видимый.' },
    { q: 'Введите «чистить» (от pura):', type: 'input', ans: 'purigi', explain: 'Pur- + -ig- + -i.' },
    { q: 'Введите «краснеть» (от ruĝa):', type: 'input', ans: 'ruĝiĝi', explain: 'Ruĝ- + -iĝ- + -i.' },
    { q: 'Введите «учительница» (от instrui):', type: 'input', ans: 'instruistino', explain: 'Instru- + -ist- + -in- + -o.' },
    { q: 'Введите «читаемый» (от legi):', type: 'input', ans: 'legebla', explain: 'Leg- + -ebl- + -a.' },
    { q: 'Что означает <span class="eo">klubano</span>?', opts: ['клуб', 'член клуба', 'клубный', 'клубника'], ans: 1, explain: 'Klub- + -an- + -o.' },
    { q: 'Что означает <span class="eo">laborejo</span>?', opts: ['работник', 'место работы', 'работать', 'работа'], ans: 1, explain: 'Labor- + -ej- + -o.' },
    { q: 'Что означает <b>-ism-</b>?', opts: ['учение, система', 'склонность', 'место', 'инструмент'], ans: 0, explain: 'Socialismo.' }
  ],
  builder: [
    { words: ['bonvolu', 'purigi', 'la', 'tablon'], correct: ['bonvolu', 'purigi', 'la', 'tablon'], translation: 'Пожалуйста, вытрите стол.' },
    { words: ['la', 'ĉielo', 'ruĝiĝis'], correct: ['la', 'ĉielo', 'ruĝiĝis'], translation: 'Небо покраснело.' },
    { words: ['ĉi', 'tiu', 'libro', 'estas', 'videbla', 'sur', 'la', 'tablo'], correct: ['ĉi', 'tiu', 'libro', 'estas', 'videbla', 'sur', 'la', 'tablo'], translation: 'Эта книга видна на столе.' },
    { words: ['mi', 'estas', 'klubano', 'de', 'la', 'esperanto-klubo'], correct: ['mi', 'estas', 'klubano', 'de', 'la', 'esperanto-klubo'], translation: 'Я член эсперанто-клуба.' },
    { words: ['ni', 'purigis', 'la', 'ĉambron', 'kaj', 'preparis', 'teon'], correct: ['ni', 'purigis', 'la', 'ĉambron', 'kaj', 'preparis', 'teon'], translation: 'Мы убрали комнату и приготовили чай.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 17: Стилистика и порядок слов
   ═══════════════════════════════════════════════════════════ */
{
  id: 'b1-l17',
  title: 'Стилистика и порядок слов',
  desc: 'Эмфаза, инверсия, выбор слов',
  xp: 30,
  content: `
    <h3>🎨 Свободный порядок слов</h3>
    <p>Благодаря <b>-n</b> порядок слов <b>гибок</b>. Это позволяет расставлять акценты.</p>

    <h3>📊 Позиция = акцент</h3>
    <table>
      <tr><th>Esperanto</th><th>Акцент</th></tr>
      <tr><td><span class="eo">Mi amas vin.</span></td><td>Нейтрально.</td></tr>
      <tr><td><span class="eo">Vin mi amas.</span></td><td>На «тебя».</td></tr>
      <tr><td><span class="eo">Amas mi vin.</span></td><td>Поэтично, на действии.</td></tr>
      <tr><td><span class="eo">Mi vin amas.</span></td><td>На «люблю».</td></tr>
    </table>

    <div class="lesson-tip">💡 <b>Слово в конце</b> — самое важное. <b>В начале</b> — тема или контраст.</div>

    <h3>🎯 Прилагательное — до или после</h3>
    <table>
      <tr><th>Esperanto</th><th>Оттенок</th></tr>
      <tr><td><span class="eo">bela floro</span></td><td>Нейтрально.</td></tr>
      <tr><td><span class="eo">floro bela</span></td><td>Поэтично.</td></tr>
    </table>

    <h3>🎯 Стилистические приёмы</h3>
    <table>
      <tr><th>Приём</th><th>Пример</th></tr>
      <tr><td>Повтор</td><td><span class="eo">Tre, tre bone!</span></td></tr>
      <tr><td>Анафора</td><td><span class="eo">Mi vidis lin. Mi aŭdis lin. Mi amis lin.</span></td></tr>
      <tr><td>Инверсия</td><td><span class="eo">Belega ĝi estis!</span></td></tr>
      <tr><td>Риторический вопрос</td><td><span class="eo">Kiu ne scias tion?</span></td></tr>
    </table>

    <h3>🎯 Разговорный vs книжный</h3>
    <table>
      <tr><th>Разговорный</th><th>Книжный</th></tr>
      <tr><td><span class="eo">Oni diras, ke…</span></td><td><span class="eo">Estas dirate, ke…</span></td></tr>
      <tr><td><span class="eo">Mi volas vidi vin.</span></td><td><span class="eo">Mi deziras vidi vin.</span></td></tr>
      <tr><td><span class="eo">Tre bone.</span></td><td><span class="eo">Eminente bone.</span></td></tr>
    </table>

    <h3>✍️ Примеры</h3>
    <div class="lesson-example"><span class="eo">Vin mi volas vidi, ne lin.</span> — Тебя я хочу увидеть, а не его.</div>
    <div class="lesson-example"><span class="eo">Belega ĝi estis, tiu ĉi vespero.</span> — Прекрасен он был, этот вечер.</div>
    <div class="lesson-example"><span class="eo">Neniam mi forgesos tiun tagon.</span> — Никогда я не забуду тот день.</div>
    <div class="lesson-example"><span class="eo">Kiu povus tion anticipi?</span> — Кто мог бы это предвидеть?</div>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Belega estas ĉi tiu loko!</b> <span class="ru">— Прекрасно это место!</span><br>
      — <b>Jes, neniam mi vidis ion pli belan.</b> <span class="ru">— Да, никогда я не видел ничего красивее.</span><br>
      — <b>Ĉu vi ofte venas ĉi tien?</b> <span class="ru">— Часто ли вы приходите сюда?</span><br>
      — <b>Nur printempe. Kaj vi?</b> <span class="ru">— Только весной. А вы?</span>
    </div>
  `,
  exercises: [
    { q: 'Что даёт свободный порядок слов?', opts: ['красоту', 'возможность акцентов', 'ошибки', 'сокращение'], ans: 1 },
    { q: 'Где обычно самое важное слово?', opts: ['в начале', 'в середине', 'в конце', 'везде'], ans: 2 },
    { q: 'Что означает <span class="eo">Vin mi amas</span>?', opts: ['Я тебя люблю', 'Тебя — я люблю (акцент)', 'Я люблю всех', 'Я люблю себя'], ans: 1 },
    { q: 'Что означает <span class="eo">Belega ĝi estis!</span>?', opts: ['Оно было красивым', 'Прекрасно оно было! (эмоция)', 'Оно некрасиво', 'Оно будет красивым'], ans: 1 },
    { q: 'Какой приём — повтор слова?', opts: ['инверсия', 'анафора', 'эмфаза', 'анаколуф'], ans: 1 },
    { q: 'Что означает разговорное <b>Oni diras</b>?', opts: ['Книжный вариант', 'Говорят (разговорное)', 'Я сказал', 'Мы сказали'], ans: 1 },
    { q: 'Как сказать «Никогда я не забуду»?', opts: ['Mi neniam forgesos', 'Neniam mi forgesos', 'Forgesos mi neniam', 'Mi forgesos neniam'], ans: 1 },
    { q: 'Что означает <span class="eo">Belega ĝi estis, tiu ĉi vespero</span>?', opts: ['Прекрасен был этот вечер', 'Вечер был плохим', 'Вечер только начинается', 'Это был длинный вечер'], ans: 0 },
    { q: 'Что означает <span class="eo">Kiu povus tion anticipi?</span>?', opts: ['Кто мог бы это предвидеть?', 'Никто не может', 'Я предвижу', 'Он предвидел'], ans: 0 },
    { q: 'Разговорный вариант <b>Mi deziras vidi vin</b>:', opts: ['Mi volas vidi vin', 'Estas dirate', 'Oni diras', 'Tre bone'], ans: 0 }
  ],
  test: [
    { q: 'Что позволяет порядок слов?', opts: ['менять смысл', 'расставлять акценты', 'сокращать речь', 'ошибаться'], ans: 1, explain: 'Акценты без смены смысла.' },
    { q: 'Что означает <span class="eo">Vin mi amas</span>?', opts: ['Я тебя люблю (нейтрально)', 'Тебя — люблю (акцент)', 'Любовь', 'Я не люблю тебя'], ans: 1, explain: 'Инверсия для акцента.' },
    { q: 'Что означает <span class="eo">Neniam mi forgesos</span>?', opts: ['Я никогда не забуду (эмфаза)', 'Я забуду', 'Я иногда забываю', 'Никогда'], ans: 0, explain: 'Инверсия для силы.' },
    { q: 'Введите «Тебя — я хочу видеть (акцент)»:', type: 'input', ans: 'vin mi volas vidi', explain: 'Vin в начале для акцента.' },
    { q: 'Введите «Никогда я не забуду»:', type: 'input', ans: 'neniam mi forgesos', explain: 'Neniam в начале.' },
    { q: 'Введите «Прекрасно это было!»:', type: 'input', ans: 'belega ĝi estis', explain: 'Прил. в начале для эмоции.' },
    { q: 'Введите «Кто мог бы это предвидеть?»:', type: 'input', ans: 'kiu povus tion anticipi', explain: 'Риторический вопрос.' },
    { q: 'Что означает <b>Estas dirate, ke…</b>?', opts: ['разговорный', 'книжный', 'поэтичный', 'детский'], ans: 1, explain: 'Книжный стиль.' },
    { q: 'Какой приём — повторение слова в начале фраз?', opts: ['инверсия', 'анафора', 'эмфаза', 'перифраз'], ans: 1, explain: 'Анафора.' },
    { q: 'Разговорный вариант <b>Eminente bone</b>:', opts: ['Tre bone', 'Estas dirate', 'Oni diras', 'Mi deziras'], ans: 0, explain: 'Tre bone = разговорный.' }
  ],
  builder: [
    { words: ['vin', 'mi', 'volas', 'vidi', 'ne', 'lin'], correct: ['vin', 'mi', 'volas', 'vidi', 'ne', 'lin'], translation: 'Тебя я хочу увидеть, а не его.' },
    { words: ['belega', 'ĝi', 'estis', 'tiu', 'ĉi', 'vespero'], correct: ['belega', 'ĝi', 'estis', 'tiu', 'ĉi', 'vespero'], translation: 'Прекрасен он был, этот вечер.' },
    { words: ['neniam', 'mi', 'forgesos', 'tiun', 'tagon'], correct: ['neniam', 'mi', 'forgesos', 'tiun', 'tagon'], translation: 'Никогда я не забуду тот день.' },
    { words: ['tre', 'tre', 'bone', 'vi', 'kantas'], correct: ['tre', 'tre', 'bone', 'vi', 'kantas'], translation: 'Очень, очень хорошо ты поёшь!' },
    { words: ['kiu', 'povus', 'tion', 'anticipi'], correct: ['kiu', 'povus', 'tion', 'anticipi'], translation: 'Кто мог бы это предвидеть?' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 18: Письменная речь и аргументация (НОВЫЙ)
   ═══════════════════════════════════════════════════════════ */
{
  id: 'b1-l18',
  title: 'Skriba Parolo kaj Argumentado',
  desc: 'Письменная речь, аргументация, выражение мнения',
  xp: 30,
  content: `
    <h3>✍️ Что мы учимся делать</h3>
    <p>Писать связные тексты: письма, эссе, отзывы. Выражать мнение, аргументировать, обсуждать.</p>

    <h3>📝 Структура письма</h3>
    <table>
      <tr><th>Часть</th><th>Фраза</th></tr>
      <tr><td>Приветствие</td><td><span class="eo">Kara amiko, / Estimata sinjoro,</span></td></tr>
      <tr><td>Начало</td><td><span class="eo">Mi skribas al vi, ĉar…</span></td></tr>
      <tr><td>Основная часть</td><td><span class="eo">Unue…, due…, fine…</span></td></tr>
      <tr><td>Заключение</td><td><span class="eo">Sincere via, / Kun respekto,</span></td></tr>
      <tr><td>Подпись</td><td><span class="eo">Anna</span></td></tr>
    </table>

    <h3>🎯 Выражение мнения</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>Mi opinias, ke…</td><td>Я считаю, что…</td></tr>
      <tr><td>Laŭ mi…</td><td>По-моему…</td></tr>
      <tr><td>Mi kredas, ke…</td><td>Я верю, что…</td></tr>
      <tr><td>Laŭ mia opinio…</td><td>По моему мнению…</td></tr>
      <tr><td>Ŝajnas al mi, ke…</td><td>Мне кажется, что…</td></tr>
    </table>

    <h3>🎯 Согласие / несогласие</h3>
    <table>
      <tr><th>Согласие</th><th>Несогласие</th></tr>
      <tr><td><span class="eo">Certe!</span> — Конечно!</td><td><span class="eo">Tute ne!</span> — Совсем нет!</td></tr>
      <tr><td><span class="eo">Vi pravas.</span> — Ты прав.</td><td><span class="eo">Vi malpravas.</span> — Ты неправ.</td></tr>
      <tr><td><span class="eo">Kompreneble.</span> — Разумеется.</td><td><span class="eo">Mi dubas.</span> — Сомневаюсь.</td></tr>
      <tr><td><span class="eo">Absoluta jes.</span> — Абсолютно да.</td><td><span class="eo">Eble, sed…</span> — Может, но…</td></tr>
    </table>

    <h3>🎯 Аргументация</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>Unue…</td><td>Во-первых…</td></tr>
      <tr><td>Due…</td><td>Во-вторых…</td></tr>
      <tr><td>Trie…</td><td>В-третьих…</td></tr>
      <tr><td>Krome…</td><td>Кроме того…</td></tr>
      <tr><td>Tial…</td><td>Поэтому…</td></tr>
      <tr><td>Fine…</td><td>Наконец…</td></tr>
      <tr><td>Resume…</td><td>В итоге…</td></tr>
    </table>

    <h3>📖 Пример эссе</h3>
    <div class="lesson-example" style="font-size:14.5px;">
      <p><span class="eo">Kial mi lernas Esperanton?</span></p>
      <p><span class="eo">Multaj homoj demandas min, kial mi lernas tiun ĉi lingvon. Mi havas kelkajn kialojn.</span></p>
      <p><span class="eo">Unue, Esperanto estas facila. Ĝia gramatiko havas nur dek ses regulojn kaj neniu escepto.</span></p>
      <p><span class="eo">Due, ĝi malfermas al mi novan mondon. Mi povas paroli kun homoj el multaj landoj.</span></p>
      <p><span class="eo">Krome, Esperanto estas bela lingvo kun riĉa kulturo kaj literaturo.</span></p>
      <p><span class="eo">Resume, mi opinias, ke ĉiu devus lerni almenaŭ unu fremdan lingvon, kaj Esperanto estas bonega elekto.</span></p>
    </div>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Kion vi opinias pri Esperanto?</b> <span class="ru">— Что вы думаете об эсперанто?</span><br>
      — <b>Laŭ mi, ĝi estas tre utila lingvo.</b> <span class="ru">— По-моему, это очень полезный язык.</span><br>
      — <b>Ĉu vi konsentas, ke ĝi estas facila?</b> <span class="ru">— Вы согласны, что он лёгкий?</span><br>
      — <b>Certe! Mi tute konsentas.</b> <span class="ru">— Конечно! Я полностью согласен.</span>
    </div>
  `,
  exercises: [
    { q: 'Как начать письмо другу?', opts: ['Saluton!', 'Kara amiko,', 'Mi volas', 'Estimata sinjoro,'], ans: 1 },
    { q: 'Что означает <b>Laŭ mi</b>?', opts: ['Ко мне', 'По-моему', 'У меня', 'От меня'], ans: 1 },
    { q: 'Как сказать «Я считаю, что»?', opts: ['Mi opinias, ke', 'Mi volas, ke', 'Mi scias, ke', 'Mi vidas, ke'], ans: 0 },
    { q: 'Что означает <b>Vi pravas</b>?', opts: ['Ты прав', 'Ты неправ', 'Ты говоришь', 'Ты знаешь'], ans: 0 },
    { q: 'Что означает <b>Tute ne!</b>?', opts: ['Полностью да', 'Совсем нет', 'Может быть', 'Наверное'], ans: 1 },
    { q: 'Как сказать «Во-первых»?', opts: ['Due', 'Unue', 'Trie', 'Fine'], ans: 1 },
    { q: 'Как сказать «Кроме того»?', opts: ['Krome', 'Fine', 'Tial', 'Unue'], ans: 0 },
    { q: 'Как сказать «В итоге»?', opts: ['Unue', 'Due', 'Resume', 'Krome'], ans: 2 },
    { q: 'Что означает <b>Mi dubas</b>?', opts: ['Я согласен', 'Я сомневаюсь', 'Я рад', 'Я готов'], ans: 1 },
    { q: 'Как подписать письмо?', opts: ['Saluton', 'Sincere via', 'Mi volas', 'Dankon'], ans: 1 }
  ],
  test: [
    { q: 'Какое приветствие используют в официальном письме?', opts: ['Saluton', 'Kara amiko', 'Estimata sinjoro', 'Ĝis'], ans: 2, explain: 'Estimata = уважаемый.' },
    { q: 'Как выразить согласие?', opts: ['Mi dubas', 'Certe!', 'Tute ne!', 'Eble'], ans: 1, explain: 'Certe = конечно.' },
    { q: 'Какое слово для «в-третьих»?', opts: ['Unue', 'Due', 'Trie', 'Fine'], ans: 2, explain: 'Trie = в-третьих.' },
    { q: 'Введите «Я считаю, что это хорошо»:', type: 'input', ans: 'mi opinias ke tio estas bona', explain: 'Opinias + ke.' },
    { q: 'Введите «По-моему, он прав»:', type: 'input', ans: 'laŭ mi li pravas', explain: 'Laŭ mi + утверждение.' },
    { q: 'Введите «Во-первых, я хочу сказать»:', type: 'input', ans: 'unue mi volas diri', explain: 'Unue = во-первых.' },
    { q: 'Введите «В итоге, я согласен»:', type: 'input', ans: 'resume mi konsentas', explain: 'Resume = в итоге.' },
    { q: 'Что означает <b>Ŝajnas al mi, ke…</b>?', opts: ['Мне кажется, что…', 'Я знаю, что…', 'Я хочу, чтобы…', 'Я уверен, что…'], ans: 0, explain: 'Ŝajni = казаться.' },
    { q: 'Как начать основную часть письма?', opts: ['Mi skribas al vi, ĉar…', 'Saluton', 'Ĝis revido', 'Dankon'], ans: 0, explain: 'Классическое начало.' },
    { q: 'Как сказать «Кроме того»?', opts: ['Krome', 'Fine', 'Resume', 'Trie'], ans: 0, explain: 'Krome = кроме того.' }
  ],
  builder: [
    { words: ['mi', 'opinias', 'ke', 'esperanto', 'estas', 'facila'], correct: ['mi', 'opinias', 'ke', 'esperanto', 'estas', 'facila'], translation: 'Я считаю, что эсперанто лёгкий.' },
    { words: ['laŭ', 'mi', 'ĝi', 'estas', 'bela', 'lingvo'], correct: ['laŭ', 'mi', 'ĝi', 'estas', 'bela', 'lingvo'], translation: 'По-моему, это красивый язык.' },
    { words: ['unue', 'mi', 'volas', 'diri', 'ke', 'mi', 'konsentas'], correct: ['unue', 'mi', 'volas', 'diri', 'ke', 'mi', 'konsentas'], translation: 'Во-первых, я хочу сказать, что согласен.' },
    { words: ['resume', 'ni', 'devas', 'lerni', 'fremdajn', 'lingvojn'], correct: ['resume', 'ni', 'devas', 'lerni', 'fremdajn', 'lingvojn'], translation: 'В итоге, нам нужно учить иностранные языки.' },
    { words: ['mi', 'dubas', 'ke', 'tio', 'estas', 'vera'], correct: ['mi', 'dubas', 'ke', 'tio', 'estas', 'vera'], translation: 'Я сомневаюсь, что это правда.' }
  ]
}

];