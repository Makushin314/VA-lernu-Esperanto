/* ============================================================
   VA ESPERANTO — КУРС A2 (16 уроков)
   По методике Бориса Колкера, расширенный
   Экосистема Vulpeto Abeleto · 2026
   ============================================================
   16 уроков: 12 базовых + 4 тематических (даты, транспорт,
   здоровье, дом/одежда/хобби).
   ============================================================ */

window.LESSONS_A2 = [

/* ═══════════════════════════════════════════════════════════
   УРОК 1: Условное наклонение (-us)
   ═══════════════════════════════════════════════════════════ */
{
  id: 'a2-l1',
  title: 'Kondiĉa Modo (-us)',
  desc: 'Условное наклонение: «если бы…, то…»',
  xp: 25,
  content: `
    <h3>🌫️ Что такое условное наклонение</h3>
    <p>Условное наклонение описывает <b>нереальное, желаемое или гипотетическое</b> действие. В русском: «я <b>пошёл бы</b>», «<b>если бы</b> у меня было время…».</p>

    <h3>🧩 Окончание -us</h3>
    <table>
      <tr><th>Инфинитив</th><th>Условное</th><th>Перевод</th></tr>
      <tr><td>esti</td><td>estus</td><td>был бы</td></tr>
      <tr><td>havi</td><td>havus</td><td>имел бы</td></tr>
      <tr><td>fari</td><td>farus</td><td>сделал бы</td></tr>
      <tr><td>iri</td><td>irus</td><td>пошёл бы</td></tr>
      <tr><td>veni</td><td>venus</td><td>пришёл бы</td></tr>
      <tr><td>vidi</td><td>vidus</td><td>увидел бы</td></tr>
      <tr><td>voli</td><td>volus</td><td>хотел бы</td></tr>
      <tr><td>povi</td><td>povus</td><td>мог бы</td></tr>
    </table>

    <div class="lesson-tip">💡 Окончание <b>-us</b> одинаково для <b>mi, vi, li, ŝi, ĝi, ni, ili</b> — как и все остальные времена.</div>

    <h3>🔗 Конструкция «se … -us»</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>Se mi <b>havus</b> tempon, mi <b>legus</b>.</td><td>Если бы у меня было время, я бы читал.</td></tr>
      <tr><td>Se vi <b>volus</b>, ni <b>irus</b> kune.</td><td>Если бы ты хотел, мы пошли бы вместе.</td></tr>
      <tr><td>Se li <b>venus</b>, ni <b>ĝojus</b>.</td><td>Если бы он пришёл, мы обрадовались бы.</td></tr>
    </table>

    <div class="lesson-tip">💡 Обе части предложения стоят в <b>-us</b>. Не смешивай.</div>

    <h3>🙏 Вежливые просьбы</h3>
    <table>
      <tr><th>Прямо</th><th>Вежливо</th></tr>
      <tr><td>Bonvolu helpi min</td><td>Ĉu vi <b>povus</b> helpi min?</td></tr>
      <tr><td>Mi volas kafon</td><td>Mi <b>ŝatus</b> kafon</td></tr>
      <tr><td>Ripetu</td><td>Ĉu vi <b>povus</b> ripeti?</td></tr>
    </table>

    <h3>✍️ Примеры в контексте</h3>
    <div class="lesson-example"><span class="eo">Mi volus vidi vin.</span> — Я хотел бы тебя увидеть.</div>
    <div class="lesson-example"><span class="eo">Ŝi ŝatus trinki teon.</span> — Она хотела бы выпить чай.</div>
    <div class="lesson-example"><span class="eo">Se ni havus monon, ni aĉetus domon.</span> — Если бы у нас были деньги, мы купили бы дом.</div>
    <div class="lesson-example"><span class="eo">Se mi estus riĉa, mi vojaĝus multe.</span> — Если бы я был богат, я много путешествовал бы.</div>
    <div class="lesson-example"><span class="eo">Ĉu vi povus atendi momenton?</span> — Не могли бы вы подождать минутку?</div>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Ĉu vi volus kafon aŭ teon?</b><br>
      — <b>Mi ŝatus kafon, dankon.</b><br>
      — <b>Ĉu vi povus alporti ĝin?</b><br>
      — <b>Certe, momenton.</b>
    </div>
  `,
  exercises: [
    { q: 'Какое окончание у условного наклонения?', opts: ['-as', '-is', '-os', '-us'], ans: 3 },
    { q: 'Как сказать «я хотел бы»?', opts: ['mi volas', 'mi volis', 'mi volus', 'mi volos'], ans: 2 },
    { q: 'Что означает <span class="eo">ŝi ŝatus</span>?', opts: ['она любит', 'она хотела бы', 'она любила', 'она полюбит'], ans: 1 },
    { q: 'Как сказать «не могли бы вы помочь?»?', opts: ['Ĉu vi povas helpi?', 'Ĉu vi povus helpi?', 'Ĉu vi povis helpi?', 'Ĉu vi helpos?'], ans: 1 },
    { q: 'Что означает союз <span class="eo">se</span>?', opts: ['и', 'но', 'если', 'что'], ans: 2 },
    { q: 'Форма <span class="eo">estus</span> означает:', opts: ['есть', 'был', 'будет', 'был бы'], ans: 3 },
    { q: 'Как сказать «я пошёл бы»?', opts: ['mi iras', 'mi iris', 'mi iros', 'mi irus'], ans: 3 },
    { q: 'Форма <span class="eo">farus</span> означает:', opts: ['делает', 'делал', 'сделал бы', 'сделает'], ans: 2 },
    { q: 'Что означает <span class="eo">Mi ŝatus</span>?', opts: ['Я люблю', 'Я хотел бы', 'Я любил', 'Я полюблю'], ans: 1 },
    { q: 'Как сказать «если бы я был богат»?', opts: ['Se mi estas riĉa', 'Se mi estis riĉa', 'Se mi estus riĉa', 'Se mi estos riĉa'], ans: 2 }
  ],
  test: [
    { q: 'Какое окончание у условного наклонения?', opts: ['-as', '-us', '-os', '-is'], ans: 1, explain: '-us = условное.' },
    { q: 'Что означает <span class="eo">venus</span>?', opts: ['приходит', 'пришёл', 'пришёл бы', 'придёт'], ans: 2, explain: 'Veni → venus.' },
    { q: 'Что означает <span class="eo">povus</span>?', opts: ['может', 'мог', 'мог бы', 'сможет'], ans: 2, explain: 'Povi → povus.' },
    { q: 'Введите «я хотел бы» на эсперанто:', type: 'input', ans: 'mi volus', explain: 'Voli → volus.' },
    { q: 'Введите «она сделала бы» на эсперанто:', type: 'input', ans: 'ŝi farus', explain: 'Fari → farus.' },
    { q: 'Введите «мы пошли бы» на эсперанто:', type: 'input', ans: 'ni irus', explain: 'Iri → irus.' },
    { q: 'Введите «если бы он пришёл» на эсперанто:', type: 'input', ans: 'se li venus', explain: 'Se + venus.' },
    { q: 'Как вежливо попросить «не могли бы вы повторить»?', opts: ['Ripetu!', 'Ĉu vi povus ripeti?', 'Vi ripetos', 'Ripeti estas bone'], ans: 1, explain: 'Povus — вежливая форма.' },
    { q: 'Что означает <span class="eo">Li farus tion por vi</span>?', opts: ['Он делает это для тебя', 'Он сделал это для тебя', 'Он сделал бы это для тебя', 'Он сделает это для тебя'], ans: 2, explain: 'Farus = сделал бы.' },
    { q: 'В «se … -us» сколько частей стоит в -us?', opts: ['одна', 'обе', 'ни одна', 'зависит'], ans: 1, explain: 'Обе части в -us.' }
  ],
  builder: [
    { words: ['mi', 'volus', 'vidi', 'vin'], correct: ['mi', 'volus', 'vidi', 'vin'], translation: 'Я хотел бы тебя увидеть.' },
    { words: ['ŝi', 'ŝatus', 'kafon'], correct: ['ŝi', 'ŝatus', 'kafon'], translation: 'Она хотела бы кофе.' },
    { words: ['ĉu', 'vi', 'povus', 'helpi', 'min'], correct: ['ĉu', 'vi', 'povus', 'helpi', 'min'], translation: 'Не могли бы вы помочь мне?' },
    { words: ['se', 'mi', 'havus', 'tempon', 'mi', 'legus'], correct: ['se', 'mi', 'havus', 'tempon', 'mi', 'legus'], translation: 'Если бы у меня было время, я бы читал.' },
    { words: ['se', 'li', 'venus', 'ni', 'ĝojus'], correct: ['se', 'li', 'venus', 'ni', 'ĝojus'], translation: 'Если бы он пришёл, мы обрадовались бы.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 2: Повелительное наклонение (-u)
   ═══════════════════════════════════════════════════════════ */
{
  id: 'a2-l2',
  title: 'Imperativo (-u)',
  desc: 'Приказы, просьбы и пожелания',
  xp: 25,
  content: `
    <h3>📣 Что такое повелительное наклонение</h3>
    <p>Повелительное наклонение выражает <b>приказ, просьбу, совет или пожелание</b>. В эсперанто окончание — <b>-u</b>.</p>

    <h3>🧩 Окончание -u</h3>
    <table>
      <tr><th>Инфинитив</th><th>Повелительное</th><th>Перевод</th></tr>
      <tr><td>esti</td><td>estu</td><td>будь</td></tr>
      <tr><td>iri</td><td>iru</td><td>иди</td></tr>
      <tr><td>veni</td><td>venu</td><td>приди</td></tr>
      <tr><td>diri</td><td>diru</td><td>скажи</td></tr>
      <tr><td>legi</td><td>legu</td><td>читай</td></tr>
      <tr><td>skribi</td><td>skribu</td><td>пиши</td></tr>
      <tr><td>aŭskulti</td><td>aŭskultu</td><td>слушай</td></tr>
      <tr><td>atendi</td><td>atendu</td><td>жди</td></tr>
    </table>

    <h3>🗣️ Прямые приказы</h3>
    <div class="lesson-example"><span class="eo">Venu ĉi tien!</span> — Иди сюда!</div>
    <div class="lesson-example"><span class="eo">Aŭskultu atente!</span> — Слушай внимательно!</div>
    <div class="lesson-example"><span class="eo">Atendu momenton!</span> — Подожди минутку!</div>
    <div class="lesson-example"><span class="eo">Legu la libron!</span> — Читай книгу!</div>

    <h3>🙅 Запрет: ne + -u</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>Ne kuru!</td><td>Не беги!</td></tr>
      <tr><td>Ne parolu!</td><td>Не говори!</td></tr>
      <tr><td>Ne forgesu!</td><td>Не забудь!</td></tr>
    </table>

    <h3>🤝 «Давай сделаем вместе»: ni + -u</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>Ni iru!</td><td>Пойдём!</td></tr>
      <tr><td>Ni manĝu!</td><td>Давай поедим!</td></tr>
      <tr><td>Ni kantu!</td><td>Давай споём!</td></tr>
    </table>

    <h3>🙏 Вежливая просьба: bonvolu + инфинитив</h3>
    <div class="lesson-example"><span class="eo">Bonvolu sidiĝi.</span> — Пожалуйста, садитесь.</div>
    <div class="lesson-example"><span class="eo">Bonvolu ripeti.</span> — Пожалуйста, повторите.</div>

    <div class="lesson-tip">💡 <b>-u</b> нейтрален по стилю. Для вежливости — <b>bonvolu</b> или <b>ĉu vi povus</b>.</div>
  `,
  exercises: [
    { q: 'Какое окончание у повелительного наклонения?', opts: ['-as', '-is', '-os', '-u'], ans: 3 },
    { q: 'Как сказать «иди!»?', opts: ['iri', 'iras', 'iru', 'irus'], ans: 2 },
    { q: 'Что означает <span class="eo">Ni iru!</span>?', opts: ['Я иду', 'Пойдём!', 'Он идёт', 'Иди!'], ans: 1 },
    { q: 'Как запретить действие?', opts: ['ne + -as', 'ne + -is', 'ne + -u', 'mal + -u'], ans: 2 },
    { q: 'Как сказать «не забудь!»?', opts: ['Ne forgesu!', 'Ne forgesas!', 'Ne forgesis!', 'Malforgesu!'], ans: 0 },
    { q: 'Что означает <span class="eo">Bonvolu atendi</span>?', opts: ['Хорошо ждать', 'Пожалуйста, подождите', 'Буду ждать', 'Ждал'], ans: 1 },
    { q: 'Как сказать «читай!»?', opts: ['legi', 'legas', 'legu', 'legus'], ans: 2 },
    { q: 'Как сказать «давай поедим»?', opts: ['Ni manĝas', 'Ni manĝu', 'Ni manĝos', 'Ni manĝus'], ans: 1 },
    { q: 'Как сказать «пиши!»?', opts: ['skribi', 'skribas', 'skribu', 'skribus'], ans: 2 },
    { q: 'Что означает <span class="eo">Ne ploru!</span>?', opts: ['Не плачь!', 'Плачет', 'Не плакал', 'Не заплачет'], ans: 0 }
  ],
  test: [
    { q: 'Что означает <span class="eo">Venu!</span>?', opts: ['Он пришёл', 'Приди!', 'Он придёт', 'Он приходил'], ans: 1, explain: 'Veni → venu.' },
    { q: 'Что означает <span class="eo">Diru!</span>?', opts: ['Говорит', 'Говорил', 'Скажи!', 'Скажет'], ans: 2, explain: 'Diri → diru.' },
    { q: 'Что означает <span class="eo">Atendu!</span>?', opts: ['Ждёт', 'Ждал', 'Жди!', 'Будет ждать'], ans: 2, explain: 'Atendi → atendu.' },
    { q: 'Введите «слушай!» на эсперанто:', type: 'input', ans: 'aŭskultu', explain: 'Aŭskulti → aŭskultu.' },
    { q: 'Введите «жди!» на эсперанто:', type: 'input', ans: 'atendu', explain: 'Atendi → atendu.' },
    { q: 'Введите «не беги!» на эсперанто:', type: 'input', ans: 'ne kuru', explain: 'Ne + kuru.' },
    { q: 'Введите «иди сюда!» на эсперанто:', type: 'input', ans: 'venu ĉi tien', explain: 'Venu ĉi tien.' },
    { q: 'Что означает <span class="eo">Ni kantu!</span>?', opts: ['Я пою', 'Давай споём!', 'Он поёт', 'Спой!'], ans: 1, explain: 'Ni + -u.' },
    { q: 'Как сказать «пожалуйста, садитесь»?', opts: ['Bonvolu sidiĝi', 'Sidiĝu!', 'Vi sidiĝas', 'Sidiĝos'], ans: 0, explain: 'Bonvolu + инфинитив.' },
    { q: 'Введите «не говори!» на эсперанто:', type: 'input', ans: 'ne parolu', explain: 'Ne + parolu.' }
  ],
  builder: [
    { words: ['venu', 'ĉi', 'tien'], correct: ['venu', 'ĉi', 'tien'], translation: 'Иди сюда!' },
    { words: ['aŭskultu', 'atente'], correct: ['aŭskultu', 'atente'], translation: 'Слушай внимательно!' },
    { words: ['ne', 'forgesu'], correct: ['ne', 'forgesu'], translation: 'Не забудь!' },
    { words: ['ni', 'iru', 'kune'], correct: ['ni', 'iru', 'kune'], translation: 'Пойдём вместе!' },
    { words: ['bonvolu', 'atendi', 'momenton'], correct: ['bonvolu', 'atendi', 'momenton'], translation: 'Пожалуйста, подождите минутку.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 3: Степени сравнения
   ═══════════════════════════════════════════════════════════ */
{
  id: 'a2-l3',
  title: 'Komparaj Gradoj',
  desc: 'Степени сравнения: pli, plej, ol, el',
  xp: 25,
  content: `
    <h3>📊 Сравнительная степень</h3>
    <p>Сравнительная степень — «более … чем». Используется <b>pli</b> (более) и союз <b>ol</b> (чем):</p>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>Li estas <b>pli</b> alta <b>ol</b> mi.</td><td>Он выше меня.</td></tr>
      <tr><td>Ŝi estas <b>pli</b> bela <b>ol</b> ŝia fratino.</td><td>Она красивее своей сестры.</td></tr>
    </table>

    <h3>🥇 Превосходная степень</h3>
    <p>Превосходная степень — «самый …». Используется <b>plej</b>:</p>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>Li estas la <b>plej</b> alta.</td><td>Он самый высокий.</td></tr>
      <tr><td>Ŝi estas la <b>plej</b> bona studentino <b>el</b> ĉiuj.</td><td>Она лучшая ученица из всех.</td></tr>
    </table>

    <div class="lesson-tip">💡 <b>ol</b> — «чем» (при сравнении двух). <b>el</b> — «из» (при выделении из группы).</div>

    <h3>⬇️ Снижение: malpli и malplej</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>Ĉi tiu libro estas <b>malpli</b> interesa.</td><td>Эта книга менее интересна.</td></tr>
      <tr><td>Ĝi estas la <b>malplej</b> kara.</td><td>Это самое дешёвое.</td></tr>
    </table>

    <h3>🧩 Полная схема</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>pli</td><td>более</td></tr>
      <tr><td>malpli</td><td>менее</td></tr>
      <tr><td>plej</td><td>самый</td></tr>
      <tr><td>malplej</td><td>наименее</td></tr>
      <tr><td>ol</td><td>чем</td></tr>
      <tr><td>el</td><td>из</td></tr>
    </table>

    <h3>✍️ Примеры в контексте</h3>
    <div class="lesson-example"><span class="eo">Mi estas pli juna ol li.</span> — Я моложе его.</div>
    <div class="lesson-example"><span class="eo">La domo estas pli granda ol la lernejo.</span> — Дом больше школы.</div>
    <div class="lesson-example"><span class="eo">Ŝi estas la plej bela knabino en la urbo.</span> — Она самая красивая девушка в городе.</div>
    <div class="lesson-example"><span class="eo">Tio estas la plej bona tago.</span> — Это лучший день.</div>
    <div class="lesson-example"><span class="eo">Ĝi estas la plej granda el ĉiuj domoj.</span> — Он самый большой из всех домов.</div>
  `,
  exercises: [
    { q: 'Что означает <b>pli</b>?', opts: ['менее', 'более', 'самый', 'чем'], ans: 1 },
    { q: 'Что означает <b>plej</b>?', opts: ['более', 'самый', 'менее', 'чем'], ans: 1 },
    { q: 'Какой союз используется при сравнении двух?', opts: ['el', 'ol', 'de', 'ke'], ans: 1 },
    { q: 'Какой предлог используется при выделении из группы?', opts: ['el', 'ol', 'de', 'en'], ans: 0 },
    { q: 'Как сказать «он выше меня»?', opts: ['Li estas alta ol mi', 'Li estas pli alta ol mi', 'Li estas plej alta ol mi', 'Li estas pli alta de mi'], ans: 1 },
    { q: 'Как сказать «самый красивый»?', opts: ['pli bela', 'plej bela', 'malpli bela', 'malplej bela'], ans: 1 },
    { q: 'Что означает <b>malpli</b>?', opts: ['более', 'менее', 'самый', 'наименее'], ans: 1 },
    { q: 'Как сказать «я моложе его»?', opts: ['Mi estas juna ol li', 'Mi estas pli juna ol li', 'Mi estas plej juna ol li', 'Mi estas pli juna de li'], ans: 1 },
    { q: 'Что означает <b>malplej</b>?', opts: ['более', 'самый', 'менее', 'наименее'], ans: 3 },
    { q: 'Как сказать «самый красивый из всех»?', opts: ['plej bela ol ĉiuj', 'plej bela el ĉiuj', 'pli bela el ĉiuj', 'pli bela ol ĉiuj'], ans: 1 }
  ],
  test: [
    { q: 'Сколько степеней сравнения в эсперанто?', opts: ['2', '3', '4', '5'], ans: 2, explain: 'Обычная, сравнительная, превосходная.' },
    { q: 'Введите «более» на эсперанто:', type: 'input', ans: 'pli', explain: 'Pli = более.' },
    { q: 'Введите «самый» на эсперанто:', type: 'input', ans: 'plej', explain: 'Plej = самый.' },
    { q: 'Введите «чем» (при сравнении):', type: 'input', ans: 'ol', explain: 'Ol = чем.' },
    { q: 'Введите «из» (при выделении из группы):', type: 'input', ans: 'el', explain: 'El = из.' },
    { q: 'Как сказать «он сильнее меня»?', opts: ['Li estas forta ol mi', 'Li estas pli forta ol mi', 'Li estas plej forta ol mi', 'Li estas pli forta de mi'], ans: 1, explain: 'Pli … ol.' },
    { q: 'Что означает <span class="eo">Tio estas la plej bona tago</span>?', opts: ['Это хороший день', 'Это лучший день', 'Это день получше', 'Это был хороший день'], ans: 1, explain: 'Plej bona = лучший.' },
    { q: 'Как сказать «эта книга менее интересна»?', opts: ['Ĉi tiu libro estas pli interesa', 'Ĉi tiu libro estas malpli interesa', 'Ĉi tiu libro estas plej interesa', 'Ĉi tiu libro estas malplej interesa'], ans: 1, explain: 'Malpli = менее.' },
    { q: 'Как сказать «она лучше всех поёт»?', opts: ['Ŝi kantas pli bone ol ĉiuj', 'Ŝi kantas plej bone el ĉiuj', 'Ŝi kantas pli bone el ĉiuj', 'Ŝi kantas plej bone ol ĉiuj'], ans: 1, explain: 'Plej + el.' },
    { q: 'Разница между <b>ol</b> и <b>el</b>:', opts: ['синонимы', 'ol — с 2, el — из группы', 'el — с 2, ol — из группы', 'нет разницы'], ans: 1, explain: 'Ol = чем, el = из.' }
  ],
  builder: [
    { words: ['li', 'estas', 'pli', 'alta', 'ol', 'mi'], correct: ['li', 'estas', 'pli', 'alta', 'ol', 'mi'], translation: 'Он выше меня.' },
    { words: ['ŝi', 'estas', 'pli', 'bela', 'ol', 'ŝia', 'fratino'], correct: ['ŝi', 'estas', 'pli', 'bela', 'ol', 'ŝia', 'fratino'], translation: 'Она красивее своей сестры.' },
    { words: ['tio', 'estas', 'la', 'plej', 'bona', 'tago'], correct: ['tio', 'estas', 'la', 'plej', 'bona', 'tago'], translation: 'Это лучший день.' },
    { words: ['ĝi', 'estas', 'la', 'plej', 'granda', 'el', 'ĉiuj', 'domoj'], correct: ['ĝi', 'estas', 'la', 'plej', 'granda', 'el', 'ĉiuj', 'domoj'], translation: 'Он самый большой из всех домов.' },
    { words: ['ĉi', 'tiu', 'libro', 'estas', 'malpli', 'interesa'], correct: ['ĉi', 'tiu', 'libro', 'estas', 'malpli', 'interesa'], translation: 'Эта книга менее интересна.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 4: Коррелятивы — полная таблица
   ═══════════════════════════════════════════════════════════ */
{
  id: 'a2-l4',
  title: 'Korelativoj — plena tabelo',
  desc: 'Полная таблица 45 коррелятивов',
  xp: 25,
  content: `
    <h3>🧩 Что такое коррелятивы</h3>
    <p>Коррелятивы — <b>45 слов</b> по формуле: <b>приставка (5) × суффикс (9)</b>. Освоив структуру, ты получаешь половину языка.</p>

    <h3>🎯 Приставки (5)</h3>
    <table>
      <tr><th>Приставка</th><th>Значение</th></tr>
      <tr><td>ki-</td><td>вопрос</td></tr>
      <tr><td>ti-</td><td>указание</td></tr>
      <tr><td>i-</td><td>неопределённость</td></tr>
      <tr><td>ĉi-</td><td>всеобщность</td></tr>
      <tr><td>neni-</td><td>отрицание</td></tr>
    </table>

    <h3>🎯 Суффиксы (9)</h3>
    <table>
      <tr><th>Суффикс</th><th>Значение</th></tr>
      <tr><td>-u</td><td>лицо, предмет</td></tr>
      <tr><td>-o</td><td>вещь, явление</td></tr>
      <tr><td>-a</td><td>качество</td></tr>
      <tr><td>-e</td><td>место</td></tr>
      <tr><td>-am</td><td>время</td></tr>
      <tr><td>-al</td><td>причина</td></tr>
      <tr><td>-el</td><td>образ действия</td></tr>
      <tr><td>-om</td><td>количество</td></tr>
      <tr><td>-es</td><td>принадлежность</td></tr>
    </table>

    <h3>📋 Полная таблица</h3>
    <table>
      <tr><th>—</th><th>ki-</th><th>ti-</th><th>i-</th><th>ĉi-</th><th>neni-</th></tr>
      <tr><td>-u</td><td>kiu</td><td>tiu</td><td>iu</td><td>ĉiu</td><td>neniu</td></tr>
      <tr><td>-o</td><td>kio</td><td>tio</td><td>io</td><td>ĉio</td><td>nenio</td></tr>
      <tr><td>-a</td><td>kia</td><td>tia</td><td>ia</td><td>ĉia</td><td>nenia</td></tr>
      <tr><td>-e</td><td>kie</td><td>tie</td><td>ie</td><td>ĉie</td><td>nenie</td></tr>
      <tr><td>-am</td><td>kiam</td><td>tiam</td><td>iam</td><td>ĉiam</td><td>neniam</td></tr>
      <tr><td>-al</td><td>kial</td><td>tial</td><td>ial</td><td>ĉial</td><td>nenial</td></tr>
      <tr><td>-el</td><td>kiel</td><td>tiel</td><td>iel</td><td>ĉiel</td><td>neniel</td></tr>
      <tr><td>-om</td><td>kiom</td><td>tiom</td><td>iom</td><td>ĉiom</td><td>neniom</td></tr>
      <tr><td>-es</td><td>kies</td><td>ties</td><td>ies</td><td>ĉies</td><td>nenies</td></tr>
    </table>

    <div class="lesson-tip">💡 Учи <b>структуру</b>, а не 45 слов. <span class="eo">ĉiam</span> = ĉi- (всё) + -am (время) = «всегда».</div>

    <h3>✍️ Примеры в контексте</h3>
    <div class="lesson-example"><span class="eo">Kiu vi estas?</span> — Кто ты?</div>
    <div class="lesson-example"><span class="eo">Kion vi faras?</span> — Что ты делаешь?</div>
    <div class="lesson-example"><span class="eo">Mi neniam estis tie.</span> — Я никогда там не был.</div>
    <div class="lesson-example"><span class="eo">Ĉiu homo estas malsama.</span> — Каждый человек разный.</div>
    <div class="lesson-example"><span class="eo">Io okazis hieraŭ.</span> — Что-то случилось вчера.</div>
    <div class="lesson-example"><span class="eo">Nenio gravas nun.</span> — Ничто не важно сейчас.</div>
  `,
  exercises: [
    { q: 'Что означает <span class="eo">ĉiam</span>?', opts: ['никогда', 'когда-то', 'всегда', 'сейчас'], ans: 2 },
    { q: 'Что означает <span class="eo">neniu</span>?', opts: ['кто-то', 'каждый', 'никто', 'тот'], ans: 2 },
    { q: 'Как образовать «где-то»?', opts: ['kie', 'tie', 'ie', 'ĉie'], ans: 2 },
    { q: 'Что означает <span class="eo">tio</span>?', opts: ['это, то', 'там', 'тогда', 'так'], ans: 0 },
    { q: 'Что означает <span class="eo">kial</span>?', opts: ['когда', 'где', 'почему', 'как'], ans: 2 },
    { q: 'Как образовать «никогда»?', opts: ['ĉiam', 'iam', 'neniam', 'tiam'], ans: 2 },
    { q: 'Что означает <span class="eo">ĉio</span>?', opts: ['ничто', 'всё', 'что-то', 'то'], ans: 1 },
    { q: 'Что означает <span class="eo">ies</span>?', opts: ['чей-то', 'тот', 'ничей', 'каждый'], ans: 0 },
    { q: 'Что означает <span class="eo">nenie</span>?', opts: ['где-то', 'везде', 'нигде', 'там'], ans: 2 },
    { q: 'Что означает <span class="eo">ĉiom</span>?', opts: ['нисколько', 'всё количество', 'немного', 'столько'], ans: 1 }
  ],
  test: [
    { q: 'Что означает <span class="eo">ĉiu</span>?', opts: ['никто', 'каждый', 'кто-то', 'тот'], ans: 1, explain: 'Ĉiu = каждый.' },
    { q: 'Что означает <span class="eo">kies</span>?', opts: ['кто', 'что', 'чей', 'где'], ans: 2, explain: 'Kies = чей.' },
    { q: 'Сколько всего коррелятивов?', opts: ['25', '36', '45', '50'], ans: 2, explain: '5 приставок × 9 суффиксов = 45.' },
    { q: 'Введите «всегда» на эсперанто:', type: 'input', ans: 'ĉiam', explain: 'Ĉi- + -am.' },
    { q: 'Введите «никогда» на эсперанто:', type: 'input', ans: 'neniam', explain: 'Neni- + -am.' },
    { q: 'Введите «что-то» на эсперанто:', type: 'input', ans: 'io', explain: 'I- + -o.' },
    { q: 'Введите «везде» на эсперанто:', type: 'input', ans: 'ĉie', explain: 'Ĉi- + -e.' },
    { q: 'Что означает <span class="eo">nenio</span>?', opts: ['что-то', 'всё', 'ничто', 'то'], ans: 2, explain: 'Neni- + -o.' },
    { q: 'Что означает <span class="eo">kiom</span>?', opts: ['как', 'когда', 'сколько', 'какой'], ans: 2, explain: 'Kiom = сколько.' },
    { q: 'Как ответить на <span class="eo">kie</span>?', opts: ['tie', 'tiam', 'tial', 'tiel'], ans: 0, explain: 'Kie → tie.' }
  ],
  builder: [
    { words: ['kiu', 'vi', 'estas'], correct: ['kiu', 'vi', 'estas'], translation: 'Кто ты?' },
    { words: ['kie', 'vi', 'loĝas'], correct: ['kie', 'vi', 'loĝas'], translation: 'Где ты живёшь?' },
    { words: ['mi', 'neniam', 'estis', 'tie'], correct: ['mi', 'neniam', 'estis', 'tie'], translation: 'Я никогда там не был.' },
    { words: ['ĉiu', 'homo', 'estas', 'malsama'], correct: ['ĉiu', 'homo', 'estas', 'malsama'], translation: 'Каждый человек разный.' },
    { words: ['io', 'okazis', 'hieraŭ'], correct: ['io', 'okazis', 'hieraŭ'], translation: 'Что-то случилось вчера.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 5: Возвратные местоимения si / sin / sia
   ═══════════════════════════════════════════════════════════ */
{
  id: 'a2-l5',
  title: 'Refleksivaj Pronomoj: si, sin, sia',
  desc: 'Возвратные местоимения третьего лица',
  xp: 25,
  content: `
    <h3>🔁 Что такое возвратное местоимение</h3>
    <p>Возвратное местоимение <b>si</b> относится к <b>третьему лицу</b> — тому, о ком идёт речь. Означает «себя / свой». Никогда не бывает подлежащим.</p>
    <p>Используется только с <b>li, ŝi, ĝi, ili, oni</b> — не с mi, vi, ni.</p>

    <h3>🧩 Три формы</h3>
    <table>
      <tr><th>Форма</th><th>Роль</th><th>Перевод</th></tr>
      <tr><td>si</td><td>именительный (после предлога)</td><td>себя, себе</td></tr>
      <tr><td>sin</td><td>винительный</td><td>себя (кого)</td></tr>
      <tr><td>sia</td><td>притяжательное</td><td>свой, своя</td></tr>
    </table>

    <h3>📖 Примеры с si / sin</h3>
    <div class="lesson-example"><span class="eo">Li lavas sin.</span> — Он моется (моет себя).</div>
    <div class="lesson-example"><span class="eo">Ŝi rigardas sin en la spegulo.</span> — Она смотрит на себя в зеркало.</div>
    <div class="lesson-example"><span class="eo">Li diris al si.</span> — Он сказал себе.</div>
    <div class="lesson-example"><span class="eo">Ili parolas pri si.</span> — Они говорят о себе.</div>
    <div class="lesson-example"><span class="eo">Ni lavu nin!</span> — Давай помоемся! (здесь nin, а не sin)</div>

    <div class="lesson-tip">💡 <b>Ni</b> — не третье лицо, поэтому возвратное для него — <b>nin</b>. То же с mi → min, vi → vin.</div>

    <h3>📖 Примеры с sia (свой)</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>Li amas <b>sian</b> patrinon.</td><td>Он любит свою мать (его мать).</td></tr>
      <tr><td>Li amas <b>lian</b> patrinon.</td><td>Он любит его мать (мать другого человека).</td></tr>
      <tr><td>Ili vidis <b>siajn</b> amikojn.</td><td>Они видели своих друзей.</td></tr>
    </table>

    <h3>✍️ Примеры</h3>
    <div class="lesson-example"><span class="eo">Ŝi kombas sian hararon.</span> — Она причёсывает свои волосы.</div>
    <div class="lesson-example"><span class="eo">Li fermis la pordon post si.</span> — Он закрыл за собой дверь.</div>
    <div class="lesson-example"><span class="eo">Ili amas siajn gepatrojn.</span> — Они любят своих родителей.</div>
    <div class="lesson-example"><span class="eo">La knabo vidis sin en la spegulo.</span> — Мальчик увидел себя в зеркале.</div>
  `,
  exercises: [
    { q: 'Что означает <span class="eo">sin</span>?', opts: ['свой', 'себя', 'свой (свойство)', 'сам'], ans: 1 },
    { q: 'Что означает <span class="eo">sia</span>?', opts: ['себя', 'свой', 'сам', 'себе'], ans: 1 },
    { q: 'С какими лицами используется si/sin/sia?', opts: ['только с mi', 'только с vi', 'только с третьим лицом', 'со всеми'], ans: 2 },
    { q: 'Как сказать «он моется»?', opts: ['Li lavas lin', 'Li lavas sin', 'Li lavas sian', 'Li lavas li'], ans: 1 },
    { q: 'Как сказать «она любит свою мать»?', opts: ['Ŝi amas ŝian patrinon', 'Ŝi amas sian patrinon', 'Ŝi amas sian patrino', 'Ŝi amas sin patrinon'], ans: 1 },
    { q: 'Для <b>mi</b> возвратное — это:', opts: ['si', 'sin', 'min', 'mia'], ans: 2 },
    { q: 'Как сказать «они говорят о себе»?', opts: ['Ili parolas pri ili', 'Ili parolas pri si', 'Ili parolas pri sin', 'Ili parolas pri sia'], ans: 1 },
    { q: 'Что означает <span class="eo">Ŝi prenis sian libron</span>?', opts: ['Она взяла его книгу', 'Она взяла свою книгу', 'Она взяла книгу', 'Она взяла эту книгу'], ans: 1 },
    { q: 'Для <b>ni</b> возвратное — это:', opts: ['si', 'sin', 'nin', 'nia'], ans: 2 },
    { q: 'Что означает <span class="eo">Ili amas siajn gepatrojn</span>?', opts: ['Они любят его родителей', 'Они любят своих родителей', 'Они любят родителей', 'Они любят эту родителей'], ans: 1 }
  ],
  test: [
    { q: 'Что означает <span class="eo">sin</span>?', opts: ['свой', 'себя (кого)', 'сам', 'себе'], ans: 1, explain: 'Sin — винительный возвратного.' },
    { q: 'Что означает <span class="eo">sia</span>?', opts: ['себя', 'свой', 'сам', 'себе'], ans: 1, explain: 'Sia = свой.' },
    { q: 'Что означает <span class="eo">si</span> после предлога?', opts: ['себя', 'свой', 'сам', 'самый'], ans: 0, explain: 'Si = себя.' },
    { q: 'Введите «себя» (вин. падеж) на эсперанто:', type: 'input', ans: 'sin', explain: 'Sin = себя.' },
    { q: 'Введите «свой» на эсперанто:', type: 'input', ans: 'sia', explain: 'Sia = свой.' },
    { q: 'Введите «она моется» на эсперанто:', type: 'input', ans: 'ŝi lavas sin', explain: 'Lavi sin.' },
    { q: 'Введите «они любят своих родителей»:', type: 'input', ans: 'ili amas siajn gepatrojn', explain: 'Siajn + gepatrojn.' },
    { q: 'Разница между <b>sian</b> и <b>lian</b>:', opts: ['синонимы', 'sian = свой, lian = его (чужой)', 'lian = свой', 'оба — свой'], ans: 1, explain: 'Sian — свой, lian — его (другого).' },
    { q: 'Что означает <span class="eo">Li diris al si</span>?', opts: ['Он сказал ему', 'Он сказал себе', 'Он сказал ей', 'Он сказал им'], ans: 1, explain: 'Al si = себе.' },
    { q: 'С какой группой используется si/sin/sia?', opts: ['mi, vi, ni', 'li, ŝi, ĝi, ili, oni', 'только mi', 'все лица'], ans: 1, explain: 'Только 3-е лицо.' }
  ],
  builder: [
    { words: ['li', 'lavas', 'sin'], correct: ['li', 'lavas', 'sin'], translation: 'Он моется.' },
    { words: ['ŝi', 'amas', 'sian', 'patrinon'], correct: ['ŝi', 'amas', 'sian', 'patrinon'], translation: 'Она любит свою мать.' },
    { words: ['ili', 'parolas', 'pri', 'si'], correct: ['ili', 'parolas', 'pri', 'si'], translation: 'Они говорят о себе.' },
    { words: ['ni', 'lavu', 'nin'], correct: ['ni', 'lavu', 'nin'], translation: 'Давай помоемся!' },
    { words: ['li', 'fermis', 'la', 'pordon', 'post', 'si'], correct: ['li', 'fermis', 'la', 'pordon', 'post', 'si'], translation: 'Он закрыл за собой дверь.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 6: Двойное отрицание (НОВЫЙ)
   ═══════════════════════════════════════════════════════════ */
{
  id: 'a2-l6',
  title: 'Duobla Nego',
  desc: 'Двойное отрицание и отрицательные местоимения',
  xp: 25,
  content: `
    <h3>🚫 Что такое двойное отрицание</h3>
    <p>В отличие от английского, в эсперанто <b>двойное отрицание допустимо</b> и часто даже обязательно: <b>ne</b> ставится перед глаголом, а отрицательное слово — на своём месте.</p>

    <h3>📊 Отрицательные слова</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>neniu</td><td>никто</td></tr>
      <tr><td>nenio</td><td>ничто</td></tr>
      <tr><td>nenie</td><td>нигде</td></tr>
      <tr><td>neniam</td><td>никогда</td></tr>
      <tr><td>neniel</td><td>никак</td></tr>
      <tr><td>nenial</td><td>нипочему</td></tr>
      <tr><td>nenies</td><td>ничей</td></tr>
      <tr><td>neniom</td><td>нисколько</td></tr>
      <tr><td>nenia</td><td>никакой</td></tr>
      <tr><td>neni</td><td>ни</td></tr>
    </table>

    <h3>🔑 Правила</h3>
    <ul>
      <li><b>ne</b> ставится перед глаголом: <span class="eo">Mi <b>ne</b> scias.</span></li>
      <li>Отрицательное слово — на своём месте: <span class="eo">Mi <b>neniam</b> estis tie.</span></li>
      <li>Оба могут стоять вместе: <span class="eo">Mi <b>ne</b> vidos <b>neniun</b>.</span> — Я не увижу никого.</li>
    </ul>

    <div class="lesson-tip">💡 В эсперанто <b>двойное отрицание усиливает, а не отменяет</b>. <span class="eo">Mi neniam diris nenion</span> = «Я никогда ничего не говорил».</div>

    <h3>📖 Примеры с двойным отрицанием</h3>
    <div class="lesson-example"><span class="eo">Mi ne konas neniun tie.</span> — Я не знаю там никого.</div>
    <div class="lesson-example"><span class="eo">Ŝi neniam diras nenion.</span> — Она никогда ничего не говорит.</div>
    <div class="lesson-example"><span class="eo">Li ne volas iri nenie.</span> — Он не хочет идти никуда.</div>
    <div class="lesson-example"><span class="eo">Ni ne havas neniom da tempo.</span> — У нас нет нисколько времени.</div>

    <h3>🎯 Когда <b>ne</b> не обязателен</h3>
    <p>Если отрицательное слово уже есть, <b>ne</b> можно опустить:</p>
    <table>
      <tr><th>С <b>ne</b></th><th>Без <b>ne</b></th><th>Перевод</th></tr>
      <tr><td>Mi ne vidos neniun</td><td>Mi vidos neniun</td><td>Я никого не увижу</td></tr>
      <tr><td>Ŝi ne iris nenie</td><td>Ŝi iris nenie</td><td>Она никуда не пошла</td></tr>
    </table>

    <h3>🎯 Двойное <b>ne</b></h3>
    <p>Иногда <b>ne ne</b> даёт <b>jes</b>:</p>
    <div class="lesson-example"><span class="eo">Ĉu vi ne volas? — Ne, mi ne volas.</span> — Ты не хочешь? — Нет, не хочу.</div>

    <h3>✍️ Примеры</h3>
    <div class="lesson-example"><span class="eo">Neniu scias la respondon.</span> — Никто не знает ответа.</div>
    <div class="lesson-example"><span class="eo">Mi neniam manĝas neniom.</span> — Я никогда ничего не ем.</div>
    <div class="lesson-example"><span class="eo">Ŝi diras nenion.</span> — Она ничего не говорит.</div>
    <div class="lesson-example"><span class="eo">Ni ne iris nenie hieraŭ.</span> — Мы вчера никуда не ходили.</div>
  `,
  exercises: [
    { q: 'Что означает <span class="eo">neniu</span>?', opts: ['кто-то', 'каждый', 'никто', 'тот'], ans: 2 },
    { q: 'Что означает <span class="eo">neniam</span>?', opts: ['всегда', 'никогда', 'иногда', 'когда-то'], ans: 1 },
    { q: 'Что означает <span class="eo">nenio</span>?', opts: ['что-то', 'всё', 'ничто', 'то'], ans: 2 },
    { q: 'Что означает <span class="eo">nenie</span>?', opts: ['где-то', 'везде', 'нигде', 'там'], ans: 2 },
    { q: 'Что означает <span class="eo">neniel</span>?', opts: ['как-то', 'так', 'никак', 'всячески'], ans: 2 },
    { q: 'Как сказать «Никто не знает»?', opts: ['Neniu scias', 'Iu scias', 'Ĉiu scias', 'Tiu scias'], ans: 0 },
    { q: 'Как сказать «Я никогда не был там»?', opts: ['Mi ĉiam estis tie', 'Mi neniam estis tie', 'Mi iam estis tie', 'Mi tiam estis tie'], ans: 1 },
    { q: 'Что означает <span class="eo">neniom</span>?', opts: ['столько', 'немного', 'нисколько', 'много'], ans: 2 },
    { q: 'Что означает <span class="eo">nenia</span>?', opts: ['какой-то', 'такой', 'никакой', 'всякий'], ans: 2 },
    { q: 'Разрешено ли двойное отрицание в эсперанто?', opts: ['нет', 'да', 'только в поэзии', 'зависит'], ans: 1 }
  ],
  test: [
    { q: 'Как переводится <span class="eo">Mi ne vidos neniun</span>?', opts: ['Я кого-то увижу', 'Я никого не увижу', 'Я увижу всех', 'Я не увижу тебя'], ans: 1, explain: 'Двойное отрицание = усиление.' },
    { q: 'Где ставится <b>ne</b>?', opts: ['после глагола', 'перед глаголом', 'в конце', 'не важно'], ans: 1, explain: 'Ne перед глаголом.' },
    { q: 'Что означает <span class="eo">nenial</span>?', opts: ['нипочему', 'никак', 'нигде', 'никогда'], ans: 0, explain: 'Nenial = нипочему.' },
    { q: 'Введите «никто» на эсперанто:', type: 'input', ans: 'neniu', explain: 'Neniu.' },
    { q: 'Введите «никогда» на эсперанто:', type: 'input', ans: 'neniam', explain: 'Neniam.' },
    { q: 'Введите «нигде» на эсперанто:', type: 'input', ans: 'nenie', explain: 'Nenie.' },
    { q: 'Введите «ничто» на эсперанто:', type: 'input', ans: 'nenio', explain: 'Nenio.' },
    { q: 'Как сказать «Никто не знает»?', opts: ['Neniu scias', 'Iu scias', 'Ĉiu ne scias', 'Neniu ne scias'], ans: 0, explain: 'Отрицательное слово уже отрицает.' },
    { q: 'Что означает <span class="eo">Ĉu vi ne volas? — Ne, mi ne volas</span>?', opts: ['Ты хочешь? — Да', 'Ты не хочешь? — Нет, не хочу', 'Ты хочешь? — Нет', 'Ты не хочешь? — Да'], ans: 1, explain: 'Ne подтверждает отрицание.' },
    { q: 'Что означает <span class="eo">nenies</span>?', opts: ['ничей', 'чей-то', 'всех', 'того'], ans: 0, explain: 'Nenies = ничей.' }
  ],
  builder: [
    { words: ['neniu', 'scias', 'la', 'responon'], correct: ['neniu', 'scias', 'la', 'responon'], translation: 'Никто не знает ответа.' },
    { words: ['mi', 'neniam', 'estis', 'tie'], correct: ['mi', 'neniam', 'estis', 'tie'], translation: 'Я никогда не был там.' },
    { words: ['ŝi', 'diras', 'nenion'], correct: ['ŝi', 'diras', 'nenion'], translation: 'Она ничего не говорит.' },
    { words: ['ni', 'ne', 'iris', 'nenie', 'hieraŭ'], correct: ['ni', 'ne', 'iris', 'nenie', 'hieraŭ'], translation: 'Мы вчера никуда не ходили.' },
    { words: ['mi', 'ne', 'konas', 'neniun', 'tie'], correct: ['mi', 'ne', 'konas', 'neniun', 'tie'], translation: 'Я не знаю там никого.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 7: Специальные вопросы с предлогами (НОВЫЙ)
   ═══════════════════════════════════════════════════════════ */
{
  id: 'a2-l7',
  title: 'Demandoj kun Prepozicioj',
  desc: 'Вопросы с предлогами: pri kio, kun kiu, al kiu',
  xp: 25,
  content: `
    <h3>❓ Вопросы с предлогами</h3>
    <p>Часто вопрос требует предлога перед вопросительным словом. Предлог ставится <b>перед</b> <b>ki-</b>-словом.</p>

    <h3>📊 Основные конструкции</h3>
    <table>
      <tr><th>Вопрос</th><th>Значение</th></tr>
      <tr><td>pri kio</td><td>о чём</td></tr>
      <tr><td>pri kiu</td><td>о ком</td></tr>
      <tr><td>kun kiu</td><td>с кем</td></tr>
      <tr><td>kun kio</td><td>с чем</td></tr>
      <tr><td>al kiu</td><td>кому / к кому</td></tr>
      <tr><td>al kio</td><td>чему / к чему</td></tr>
      <tr><td>de kiu</td><td>от кого</td></tr>
      <tr><td>de kio</td><td>от чего</td></tr>
      <tr><td>en kio</td><td>в чём</td></tr>
      <tr><td>sur kio</td><td>на чём</td></tr>
      <tr><td>sub kio</td><td>под чем</td></tr>
      <tr><td>por kio</td><td>для чего / зачем</td></tr>
      <tr><td>pro kio</td><td>из-за чего</td></tr>
      <tr><td>per kio</td><td>чем (инструментом)</td></tr>
    </table>

    <h3>🎯 С kiom da</h3>
    <p><b>kiom da</b> + сущ. = «сколько» (количество):</p>
    <div class="lesson-example"><span class="eo">Kiom da pomoj vi havas?</span> — Сколько яблок у тебя есть?</div>
    <div class="lesson-example"><span class="eo">Kiom da mono ĝi kostas?</span> — Сколько денег это стоит?</div>

    <h3>✍️ Примеры в контексте</h3>
    <div class="lesson-example"><span class="eo">Pri kio vi parolas?</span> — О чём ты говоришь?</div>
    <div class="lesson-example"><span class="eo">Kun kiu vi iris?</span> — С кем ты пошёл?</div>
    <div class="lesson-example"><span class="eo">Al kiu vi skribas?</span> — Кому ты пишешь?</div>
    <div class="lesson-example"><span class="eo">De kie vi venas?</span> — Откуда ты приехал?</div>
    <div class="lesson-example"><span class="eo">En kio vi kredas?</span> — Во что ты веришь?</div>
    <div class="lesson-example"><span class="eo">Per kio vi skribis?</span> — Чем ты писал?</div>
    <div class="lesson-example"><span class="eo">Por kio vi lernas?</span> — Зачем ты учишь?</div>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Pri kio vi parolas?</b> <span class="ru">— О чём вы говорите?</span><br>
      — <b>Pri nia vojaĝo.</b> <span class="ru">— О нашем путешествии.</span><br>
      — <b>Kun kiu vi iros?</b> <span class="ru">— С кем вы поедете?</span><br>
      — <b>Kun miaj amikoj.</b> <span class="ru">— С моими друзьями.</span>
    </div>

    <div class="lesson-tip">💡 <b>kiom da</b> всегда с существительным. Если считается количество — <b>kiom</b>: <span class="eo">Kiom vi aĝas?</span> — Сколько тебе лет?</div>
  `,
  exercises: [
    { q: 'Как спросить «о чём»?', opts: ['en kio', 'pri kio', 'kun kio', 'al kio'], ans: 1 },
    { q: 'Как спросить «с кем»?', opts: ['kun kiu', 'kun kio', 'pri kiu', 'al kiu'], ans: 0 },
    { q: 'Как спросить «кому»?', opts: ['al kiu', 'de kiu', 'pri kiu', 'kun kiu'], ans: 0 },
    { q: 'Как спросить «откуда»?', opts: ['de kie', 'en kie', 'al kie', 'kun kie'], ans: 0 },
    { q: 'Как спросить «чем (инструментом)»?', opts: ['por kio', 'per kio', 'pri kio', 'pro kio'], ans: 1 },
    { q: 'Как спросить «во что»?', opts: ['en kio', 'sur kio', 'sub kio', 'pri kio'], ans: 0 },
    { q: 'Что означает <span class="eo">Pri kio vi parolas?</span>?', opts: ['С кем ты говоришь?', 'О чём ты говоришь?', 'Кому ты говоришь?', 'Зачем ты говоришь?'], ans: 1 },
    { q: 'Что означает <span class="eo">Kun kiu vi iris?</span>?', opts: ['С кем ты пошёл?', 'Куда ты пошёл?', 'Откуда ты пришёл?', 'Зачем ты пошёл?'], ans: 0 },
    { q: 'Как спросить «зачем»?', opts: ['pro kio', 'por kio', 'per kio', 'pri kio'], ans: 1 },
    { q: 'Как спросить «из-за чего»?', opts: ['pro kio', 'por kio', 'per kio', 'pri kio'], ans: 0 }
  ],
  test: [
    { q: 'Куда ставится предлог в вопросе?', opts: ['после ki-', 'перед ki-', 'в конце', 'не ставится'], ans: 1, explain: 'Предлог перед ki-словом.' },
    { q: 'Что означает <span class="eo">Por kio vi lernas?</span>?', opts: ['Как ты учишь?', 'Зачем ты учишь?', 'Что ты учишь?', 'Где ты учишь?'], ans: 1, explain: 'Por = для, зачем.' },
    { q: 'Что означает <span class="eo">De kie vi venas?</span>?', opts: ['Куда ты идёшь?', 'Откуда ты приехал?', 'Где ты?', 'С кем ты?'], ans: 1, explain: 'De kie = откуда.' },
    { q: 'Введите «о чём ты говоришь»:', type: 'input', ans: 'pri kio vi parolas', explain: 'Pri kio.' },
    { q: 'Введите «с кем ты идёшь»:', type: 'input', ans: 'kun kiu vi iras', explain: 'Kun kiu.' },
    { q: 'Введите «кому ты пишешь»:', type: 'input', ans: 'al kiu vi skribas', explain: 'Al kiu.' },
    { q: 'Введите «чем ты пишешь»:', type: 'input', ans: 'per kio vi skribas', explain: 'Per kio.' },
    { q: 'Что означает <span class="eo">Kiom da libroj vi havas?</span>?', opts: ['Какие книги у тебя?', 'Сколько книг у тебя?', 'Чьи книги у тебя?', 'Где твои книги?'], ans: 1, explain: 'Kiom da = сколько.' },
    { q: 'Что означает <span class="eo">En kio vi kredas?</span>?', opts: ['Кому ты веришь?', 'Во что ты веришь?', 'Зачем ты веришь?', 'С кем ты веришь?'], ans: 1, explain: 'En kio = во что.' },
    { q: 'Как спросить «на чём»?', opts: ['sur kio', 'sub kio', 'en kio', 'super kio'], ans: 0, explain: 'Sur kio = на чём.' }
  ],
  builder: [
    { words: ['pri', 'kio', 'vi', 'parolas'], correct: ['pri', 'kio', 'vi', 'parolas'], translation: 'О чём ты говоришь?' },
    { words: ['kun', 'kiu', 'vi', 'iris'], correct: ['kun', 'kiu', 'vi', 'iris'], translation: 'С кем ты пошёл?' },
    { words: ['al', 'kiu', 'vi', 'skribas'], correct: ['al', 'kiu', 'vi', 'skribas'], translation: 'Кому ты пишешь?' },
    { words: ['de', 'kie', 'vi', 'venas'], correct: ['de', 'kie', 'vi', 'venas'], translation: 'Откуда ты приехал?' },
    { words: ['kiom', 'da', 'pomoj', 'vi', 'havas'], correct: ['kiom', 'da', 'pomoj', 'vi', 'havas'], translation: 'Сколько яблок у тебя есть?' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 8: Предлоги углублённо
   ═══════════════════════════════════════════════════════════ */
{
  id: 'a2-l8',
  title: 'Prepozicioj — detale',
  desc: 'Направление с -n, предлог je, tra, trans, preter',
  xp: 25,
  content: `
    <h3>🎯 Направление vs место</h3>
    <p>После предлога <b>-n</b> не нужен, <b>кроме</b> случая направления движения:</p>
    <table>
      <tr><th>Где? (место)</th><th>Куда? (направление)</th></tr>
      <tr><td>en la domo</td><td>en la domon</td></tr>
      <tr><td>sur la tablo</td><td>sur la tablon</td></tr>
      <tr><td>sub la lito</td><td>sub la liton</td></tr>
      <tr><td>antaŭ la domo</td><td>antaŭ la domon</td></tr>
    </table>

    <h3>🆕 Новые предлоги</h3>
    <table>
      <tr><th>Предлог</th><th>Значение</th><th>Пример</th></tr>
      <tr><td>tra</td><td>через, сквозь</td><td><span class="eo">tra la parko</span> — через парк</td></tr>
      <tr><td>trans</td><td>по ту сторону, за</td><td><span class="eo">trans la rivero</span> — за рекой</td></tr>
      <tr><td>preter</td><td>мимо</td><td><span class="eo">preter la domo</span> — мимо дома</td></tr>
      <tr><td>ekster</td><td>вне, снаружи</td><td><span class="eo">ekster la urbo</span> — за городом</td></tr>
      <tr><td>kontraŭ</td><td>напротив, против</td><td><span class="eo">kontraŭ la domo</span> — напротив дома</td></tr>
      <tr><td>malgraŭ</td><td>несмотря на</td><td><span class="eo">malgraŭ la pluvo</span> — несмотря на дождь</td></tr>
      <tr><td>dum</td><td>в течение, во время</td><td><span class="eo">dum la tago</span> — в течение дня</td></tr>
      <tr><td>ĝis</td><td>до</td><td><span class="eo">ĝis morgaŭ</span> — до завтра</td></tr>
      <tr><td>po</td><td>по (распределение)</td><td><span class="eo">po du pomoj</span> — по два яблока</td></tr>
    </table>

    <h3>🎯 Универсальный предлог je</h3>
    <p>Когда не подходит ни один другой предлог, используют <b>je</b>:</p>
    <div class="lesson-example"><span class="eo">Li malsanas je la kapo.</span> — У него болит голова.</div>
    <div class="lesson-example"><span class="eo">Mi kredas je vi.</span> — Я верю в тебя.</div>
    <div class="lesson-example"><span class="eo">Ĝi okazis je la tria horo.</span> — Это случилось в три часа.</div>

    <h3>✍️ Примеры в контексте</h3>
    <div class="lesson-example"><span class="eo">Ni promenas tra la urbo.</span> — Мы гуляем по городу.</div>
    <div class="lesson-example"><span class="eo">La domo staras trans la rivero.</span> — Дом стоит за рекой.</div>
    <div class="lesson-example"><span class="eo">Mi iris preter la lernejo.</span> — Я прошёл мимо школы.</div>
    <div class="lesson-example"><span class="eo">Li loĝas ekster la urbo.</span> — Он живёт за городом.</div>
    <div class="lesson-example"><span class="eo">Ĝi staras kontraŭ la preĝejo.</span> — Оно стоит напротив церкви.</div>
    <div class="lesson-example"><span class="eo">Malgraŭ la pluvo, ni iris.</span> — Несмотря на дождь, мы пошли.</div>
  `,
  exercises: [
    { q: 'Что означает <b>tra</b>?', opts: ['через', 'за', 'мимо', 'вне'], ans: 0 },
    { q: 'Что означает <b>preter</b>?', opts: ['через', 'за', 'мимо', 'вне'], ans: 2 },
    { q: 'Какой предлог использовать, если не подходит другой?', opts: ['en', 'de', 'je', 'al'], ans: 2 },
    { q: 'Нужен ли -n после предлога направления?', opts: ['да', 'нет', 'только во мн.', 'зависит'], ans: 0 },
    { q: 'Что означает <b>ekster</b>?', opts: ['под', 'над', 'вне', 'между'], ans: 2 },
    { q: 'Как сказать «через парк»?', opts: ['en la parko', 'tra la parko', 'trans la parko', 'preter la parko'], ans: 1 },
    { q: 'Что означает <b>malgraŭ</b>?', opts: ['благодаря', 'несмотря на', 'из-за', 'вместо'], ans: 1 },
    { q: 'Что означает <b>trans</b>?', opts: ['через', 'за (по ту сторону)', 'мимо', 'вне'], ans: 1 },
    { q: 'Что означает <b>dum</b>?', opts: ['после', 'до', 'в течение', 'через'], ans: 2 },
    { q: 'Что означает <b>ĝis</b>?', opts: ['с', 'от', 'до', 'через'], ans: 2 }
  ],
  test: [
    { q: 'Что означает предлог <b>tra</b>?', opts: ['через', 'за', 'мимо', 'вне'], ans: 0, explain: 'Tra = через.' },
    { q: 'Что означает <span class="eo">je</span>?', opts: ['для', 'универсальный предлог', 'под', 'без'], ans: 1, explain: 'Je — нейтральный.' },
    { q: 'Что означает <span class="eo">preter</span>?', opts: ['через', 'мимо', 'за', 'между'], ans: 1, explain: 'Preter = мимо.' },
    { q: 'Введите «мимо» на эсперанто:', type: 'input', ans: 'preter', explain: 'Preter.' },
    { q: 'Введите «вне» на эсперанто:', type: 'input', ans: 'ekster', explain: 'Ekster.' },
    { q: 'Введите «несмотря на» на эсперанто:', type: 'input', ans: 'malgraŭ', explain: 'Malgraŭ.' },
    { q: 'Введите «через» на эсперанто:', type: 'input', ans: 'tra', explain: 'Tra.' },
    { q: 'Как сказать «напротив дома»?', opts: ['apud la domo', 'kontraŭ la domo', 'antaŭ la domo', 'malantaŭ la domo'], ans: 1, explain: 'Kontraŭ = напротив.' },
    { q: 'Когда после предлога ставится -n?', opts: ['никогда', 'при направлении', 'при месте', 'всегда'], ans: 1, explain: 'При направлении.' },
    { q: 'Что означает <span class="eo">Mi kredas je vi</span>?', opts: ['Я верю тебе', 'Я верю в тебя', 'Я верю с тобой', 'Я верю для тебя'], ans: 1, explain: 'Je — универсальный.' }
  ],
  builder: [
    { words: ['ni', 'promenas', 'tra', 'la', 'urbo'], correct: ['ni', 'promenas', 'tra', 'la', 'urbo'], translation: 'Мы гуляем по городу.' },
    { words: ['la', 'domo', 'staras', 'trans', 'la', 'rivero'], correct: ['la', 'domo', 'staras', 'trans', 'la', 'rivero'], translation: 'Дом стоит за рекой.' },
    { words: ['mi', 'iris', 'preter', 'la', 'lernejo'], correct: ['mi', 'iris', 'preter', 'la', 'lernejo'], translation: 'Я прошёл мимо школы.' },
    { words: ['malgraŭ', 'la', 'pluvo', 'ni', 'iris'], correct: ['malgraŭ', 'la', 'pluvo', 'ni', 'iris'], translation: 'Несмотря на дождь, мы пошли.' },
    { words: ['li', 'loĝas', 'ekster', 'la', 'urbo'], correct: ['li', 'loĝas', 'ekster', 'la', 'urbo'], translation: 'Он живёт за городом.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 9: Приставки углублённо
   ═══════════════════════════════════════════════════════════ */
{
  id: 'a2-l9',
  title: 'Prefiksoj — detale',
  desc: 'Приставки: bo-, dis-, ek-, pra-, mis-, fi-',
  xp: 25,
  content: `
    <h3>🔝 Приставки — продолжение</h3>
    <p>В A1 мы изучили базовые: <b>mal-, re-, ge-, ek-, dis-</b>. Теперь расширенный набор.</p>

    <h3>📋 Новые приставки</h3>
    <table>
      <tr><th>Приставка</th><th>Значение</th><th>Пример</th></tr>
      <tr><td>bo-</td><td>родство через брак</td><td>patro → <b>bopatro</b> (свёкор)</td></tr>
      <tr><td>pra-</td><td>древность, пра-</td><td>avo → <b>praavo</b> (прадед)</td></tr>
      <tr><td>mis-</td><td>ошибочно</td><td>kompreni → <b>miskompreni</b></td></tr>
      <tr><td>fi-</td><td>презрение</td><td>homo → <b>fihomo</b> (подлец)</td></tr>
      <tr><td>dis-</td><td>врозь</td><td>doni → <b>disdoni</b> (раздать)</td></tr>
      <tr><td>ek-</td><td>начало действия</td><td>kanti → <b>ekkanti</b> (запеть)</td></tr>
    </table>

    <h3>🔍 Разбор значений</h3>
    <h4>bo- (родство через брак)</h4>
    <div class="lesson-example"><span class="eo">bopatro</span> — свёкор / тесть</div>
    <div class="lesson-example"><span class="eo">bopatrino</span> — свекровь / тёща</div>
    <div class="lesson-example"><span class="eo">bofrato</span> — деверь / шурин</div>

    <h4>pra- (древность)</h4>
    <div class="lesson-example"><span class="eo">praavo</span> — прадед</div>
    <div class="lesson-example"><span class="eo">pranepo</span> — правнук</div>
    <div class="lesson-example"><span class="eo">prapatro</span> — предок</div>

    <h4>mis- (ошибка)</h4>
    <div class="lesson-example"><span class="eo">miskompreni</span> — неправильно понять</div>
    <div class="lesson-example"><span class="eo">misaŭdi</span> — ослышаться</div>
    <div class="lesson-example"><span class="eo">misdiri</span> — оговориться</div>

    <h4>fi- (презрение)</h4>
    <div class="lesson-example"><span class="eo">fihomo</span> — подлец</div>
    <div class="lesson-example"><span class="eo">fivorto</span> — ругательство</div>
    <div class="lesson-example"><span class="eo">fiaĵo</span> — гадость</div>

    <h4>ek- (начало)</h4>
    <div class="lesson-example"><span class="eo">ekkanti</span> — запеть</div>
    <div class="lesson-example"><span class="eo">ekplori</span> — заплакать</div>
    <div class="lesson-example"><span class="eo">ekridi</span> — рассмеяться</div>
    <div class="lesson-example"><span class="eo">ekdormi</span> — заснуть</div>

    <h4>dis- (врозь)</h4>
    <div class="lesson-example"><span class="eo">disdoni</span> — раздать</div>
    <div class="lesson-example"><span class="eo">disiri</span> — разойтись</div>
    <div class="lesson-example"><span class="eo">dissendi</span> — разослать</div>

    <h3>✍️ Примеры в контексте</h3>
    <div class="lesson-example"><span class="eo">Mia bopatro estas bona homo.</span> — Мой свёкор — хороший человек.</div>
    <div class="lesson-example"><span class="eo">Pardonu, mi miskomprenis vin.</span> — Извините, я вас не понял.</div>
    <div class="lesson-example"><span class="eo">La infano ekploris.</span> — Ребёнок заплакал.</div>
    <div class="lesson-example"><span class="eo">Li disdonis la librojn al ĉiuj.</span> — Он раздал книги всем.</div>
    <div class="lesson-example"><span class="eo">Tio estas fiaĵo!</span> — Это гадость!</div>
  `,
  exercises: [
    { q: 'Что означает <b>bo-</b>?', opts: ['древность', 'родство через брак', 'ошибка', 'презрение'], ans: 1 },
    { q: 'Что означает <b>pra-</b>?', opts: ['через брак', 'древность', 'ошибка', 'начало'], ans: 1 },
    { q: 'Что означает <b>mis-</b>?', opts: ['плохо, ошибочно', 'хорошо', 'много', 'мало'], ans: 0 },
    { q: 'Что означает <b>fi-</b>?', opts: ['родство', 'древность', 'презрение', 'начало'], ans: 2 },
    { q: 'Что означает <b>ek-</b>?', opts: ['повтор', 'окончание', 'начало действия', 'врозь'], ans: 2 },
    { q: 'Что означает <b>dis-</b>?', opts: ['вместе', 'врозь', 'через брак', 'начало'], ans: 1 },
    { q: 'Что означает <span class="eo">miskompreni</span>?', opts: ['понимать хорошо', 'не понимать', 'неправильно понять', 'повторно понять'], ans: 2 },
    { q: 'Как из <span class="eo">patro</span> образовать «свёкор»?', opts: ['prapatro', 'bopatro', 'fipatro', 'ekpatro'], ans: 1 },
    { q: 'Что означает <span class="eo">ekkanti</span>?', opts: ['петь', 'запеть', 'перепеть', 'попеть'], ans: 1 },
    { q: 'Что означает <span class="eo">fiaĵo</span>?', opts: ['хорошая вещь', 'гадость', 'дело', 'правда'], ans: 1 }
  ],
  test: [
    { q: 'Что означает <b>bo-</b>?', opts: ['древность', 'родство через брак', 'ошибка', 'презрение'], ans: 1, explain: 'Bopatro = свёкор.' },
    { q: 'Что означает <b>pra-</b>?', opts: ['через брак', 'древность', 'ошибка', 'начало'], ans: 1, explain: 'Praavo = прадед.' },
    { q: 'Что означает <b>fi-</b>?', opts: ['через брак', 'древность', 'презрение', 'начало'], ans: 2, explain: 'Fihomo = подлец.' },
    { q: 'Введите «прадед» (от avo):', type: 'input', ans: 'praavo', explain: 'Pra- + avo.' },
    { q: 'Введите «свёкор» (от patro):', type: 'input', ans: 'bopatro', explain: 'Bo- + patro.' },
    { q: 'Введите «неправильно понять» (от kompreni):', type: 'input', ans: 'miskompreni', explain: 'Mis- + kompreni.' },
    { q: 'Введите «заплакать» (от plori):', type: 'input', ans: 'ekplori', explain: 'Ek- + plori.' },
    { q: 'Что означает <span class="eo">ekridi</span>?', opts: ['смеяться', 'рассмеяться', 'пересмеять', 'посмеяться'], ans: 1, explain: 'Ek- = начало.' },
    { q: 'Что означает <span class="eo">disdoni</span>?', opts: ['дать', 'раздать', 'недодать', 'передать'], ans: 1, explain: 'Dis- = врозь.' },
    { q: 'Что означает <b>-aĉ-</b> как показатель презрения?', opts: ['высокое качество', 'плохое качество', 'место', 'детёныш'], ans: 1, explain: 'Domaĉo = домишко.' }
  ],
  builder: [
    { words: ['mia', 'bopatro', 'estas', 'bona', 'homo'], correct: ['mia', 'bopatro', 'estas', 'bona', 'homo'], translation: 'Мой свёкор — хороший человек.' },
    { words: ['pardonu', 'mi', 'miskomprenis', 'vin'], correct: ['pardonu', 'mi', 'miskomprenis', 'vin'], translation: 'Извините, я вас не понял.' },
    { words: ['la', 'infano', 'ekploris'], correct: ['la', 'infano', 'ekploris'], translation: 'Ребёнок заплакал.' },
    { words: ['li', 'disdonis', 'la', 'librojn'], correct: ['li', 'disdonis', 'la', 'librojn'], translation: 'Он раздал книги.' },
    { words: ['mia', 'praavo', 'estis', 'forta', 'viro'], correct: ['mia', 'praavo', 'estis', 'forta', 'viro'], translation: 'Мой прадед был сильным человеком.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 10: Суффиксы углублённо
   ═══════════════════════════════════════════════════════════ */
{
  id: 'a2-l10',
  title: 'Sufiksoj — detale',
  desc: 'Суффиксы: -ad, -ec, -em, -end, -ind, -il, -obl, -on, -op, -uj',
  xp: 25,
  content: `
    <h3>🔻 Суффиксы — продолжение</h3>
    <p>В A1 мы прошли базовые: <b>-in-, -id-, -eg-, -et-, -ar-, -ej-, -ist-, -ul-, -aĵ-</b>. Теперь расширенный набор.</p>

    <h3>📋 Новые суффиксы</h3>
    <table>
      <tr><th>Суффикс</th><th>Значение</th><th>Пример</th></tr>
      <tr><td>-ad-</td><td>длительное действие</td><td>paroli → <b>paroladi</b></td></tr>
      <tr><td>-ec-</td><td>качество</td><td>bela → <b>beleco</b></td></tr>
      <tr><td>-em-</td><td>склонность</td><td>labori → <b>laborema</b></td></tr>
      <tr><td>-end-</td><td>должен быть</td><td>fari → <b>farenda</b></td></tr>
      <tr><td>-ind-</td><td>достойный</td><td>legi → <b>leginda</b></td></tr>
      <tr><td>-il-</td><td>инструмент</td><td>kanti → <b>kantilo</b></td></tr>
      <tr><td>-obl-</td><td>кратность</td><td>du → <b>duobla</b></td></tr>
      <tr><td>-on-</td><td>доля</td><td>du → <b>duono</b></td></tr>
      <tr><td>-op-</td><td>группами по</td><td>du → <b>duope</b></td></tr>
      <tr><td>-uj-</td><td>вместилище</td><td>pomo → <b>pomujo</b></td></tr>
    </table>

    <h3>🔍 Разбор значений</h3>
    <h4>-ad- (длительное действие)</h4>
    <div class="lesson-example"><span class="eo">paroli → paroladi</span> — разглагольствовать</div>
    <div class="lesson-example"><span class="eo">legi → legadi</span> — зачитываться</div>

    <h4>-ec- (качество)</h4>
    <div class="lesson-example"><span class="eo">bela → beleco</span> — красота</div>
    <div class="lesson-example"><span class="eo">bona → boneco</span> — доброта</div>
    <div class="lesson-example"><span class="eo">saĝa → saĝeco</span> — мудрость</div>

    <h4>-em- (склонность)</h4>
    <div class="lesson-example"><span class="eo">labori → laborema</span> — трудолюбивый</div>
    <div class="lesson-example"><span class="eo">dormi → dormema</span> — сонливый</div>
    <div class="lesson-example"><span class="eo">paroli → parolema</span> — разговорчивый</div>

    <h4>-end- (должен быть)</h4>
    <div class="lesson-example"><span class="eo">fari → farenda</span> — то, что нужно сделать</div>
    <div class="lesson-example"><span class="eo">legi → legenda</span> — то, что нужно прочитать</div>

    <h4>-ind- (достойный)</h4>
    <div class="lesson-example"><span class="eo">legi → leginda</span> — достойный прочтения</div>
    <div class="lesson-example"><span class="eo">vidi → vidinda</span> — достойный увидеть</div>

    <h4>-il- (инструмент)</h4>
    <div class="lesson-example"><span class="eo">skribi → skribilo</span> — ручка</div>
    <div class="lesson-example"><span class="eo">manĝi → manĝilo</span> — столовый прибор</div>

    <h4>-obl-, -on-, -op-</h4>
    <table>
      <tr><th>Корень</th><th>-obl-</th><th>-on-</th><th>-op-</th></tr>
      <tr><td>du</td><td>duobla (двойной)</td><td>duono (половина)</td><td>duope (по двое)</td></tr>
      <tr><td>tri</td><td>triobla (тройной)</td><td>triono (треть)</td><td>triope (по трое)</td></tr>
      <tr><td>kvar</td><td>kvarobla</td><td>kvarono</td><td>kvarope</td></tr>
    </table>

    <h4>-uj- (вместилище)</h4>
    <div class="lesson-example"><span class="eo">pomo → pomujo</span> — яблоня</div>
    <div class="lesson-example"><span class="eo">floro → florujo</span> — ваза</div>
    <div class="lesson-example"><span class="eo">akvo → akvujo</span> — водоём</div>

    <h3>✍️ Примеры в контексте</h3>
    <div class="lesson-example"><span class="eo">Ŝia beleco estas konata ĉie.</span> — Её красота известна везде.</div>
    <div class="lesson-example"><span class="eo">Li estas laborema studento.</span> — Он трудолюбивый студент.</div>
    <div class="lesson-example"><span class="eo">Ĉi tiu libro estas leginda.</span> — Эта книга достойна прочтения.</div>
    <div class="lesson-example"><span class="eo">Mi donis al li duonon.</span> — Я дал ему половину.</div>
    <div class="lesson-example"><span class="eo">Ili iris duope.</span> — Они пошли по двое.</div>
  `,
  exercises: [
    { q: 'Что означает <b>-ec-</b>?', opts: ['инструмент', 'качество', 'склонность', 'доля'], ans: 1 },
    { q: 'Что означает <b>-em-</b>?', opts: ['должен быть', 'достойный', 'склонность', 'инструмент'], ans: 2 },
    { q: 'Что означает <b>-il-</b>?', opts: ['инструмент', 'качество', 'доля', 'кратность'], ans: 0 },
    { q: 'Что означает <b>-ind-</b>?', opts: ['должен быть', 'достойный', 'склонность', 'доля'], ans: 1 },
    { q: 'Что означает <b>-end-</b>?', opts: ['достойный', 'должен быть', 'склонность', 'кратность'], ans: 1 },
    { q: 'Как из <span class="eo">bela</span> получить «красота»?', opts: ['beleco', 'belado', 'belemo', 'belilo'], ans: 0 },
    { q: 'Как из <span class="eo">kanti</span> получить «инструмент для пения»?', opts: ['kanteco', 'kantilo', 'kantado', 'kantema'], ans: 1 },
    { q: 'Что означает <span class="eo">duono</span>?', opts: ['двойной', 'половина', 'по двое', 'дважды'], ans: 1 },
    { q: 'Что означает <b>-ad-</b>?', opts: ['качество', 'длительное действие', 'инструмент', 'склонность'], ans: 1 },
    { q: 'Что означает <b>-uj-</b>?', opts: ['вместилище', 'инструмент', 'склонность', 'качество'], ans: 0 }
  ],
  test: [
    { q: 'Что означает <b>-ec-</b>?', opts: ['инструмент', 'качество', 'склонность', 'доля'], ans: 1, explain: 'Beleco = красота.' },
    { q: 'Что означает <b>-em-</b>?', opts: ['должен быть', 'достойный', 'склонность', 'инструмент'], ans: 2, explain: 'Laborema = трудолюбивый.' },
    { q: 'Что означает <b>-end-</b>?', opts: ['должен быть', 'достойный', 'склонность', 'кратность'], ans: 0, explain: 'Farenda = то, что нужно сделать.' },
    { q: 'Введите «красота» (от bela):', type: 'input', ans: 'beleco', explain: 'Bel- + -ec- + -o.' },
    { q: 'Введите «трудолюбивый» (от labori):', type: 'input', ans: 'laborema', explain: 'Labor- + -em- + -a.' },
    { q: 'Введите «достойный прочтения» (от legi):', type: 'input', ans: 'leginda', explain: 'Leg- + -ind- + -a.' },
    { q: 'Введите «ручка» (от skribi):', type: 'input', ans: 'skribilo', explain: 'Skrib- + -il- + -o.' },
    { q: 'Что означает <span class="eo">duono</span>?', opts: ['двойной', 'половина', 'по двое', 'дважды'], ans: 1, explain: 'Du- + -on- = половина.' },
    { q: 'Что означает <span class="eo">duobla</span>?', opts: ['двойной', 'половина', 'по двое', 'дважды'], ans: 0, explain: 'Du- + -obl- = двойной.' },
    { q: 'Что означает <span class="eo">duope</span>?', opts: ['двойной', 'половина', 'по двое', 'дважды'], ans: 2, explain: 'Du- + -op- = по двое.' }
  ],
  builder: [
    { words: ['ŝia', 'beleco', 'estas', 'konata'], correct: ['ŝia', 'beleco', 'estas', 'konata'], translation: 'Её красота известна.' },
    { words: ['li', 'estas', 'laborema', 'studento'], correct: ['li', 'estas', 'laborema', 'studento'], translation: 'Он трудолюбивый студент.' },
    { words: ['ĉi', 'tiu', 'libro', 'estas', 'leginda'], correct: ['ĉi', 'tiu', 'libro', 'estas', 'leginda'], translation: 'Эта книга достойна прочтения.' },
    { words: ['mi', 'donis', 'al', 'li', 'duonon'], correct: ['mi', 'donis', 'al', 'li', 'duonon'], translation: 'Я дал ему половину.' },
    { words: ['ili', 'iris', 'duope'], correct: ['ili', 'iris', 'duope'], translation: 'Они пошли по двое.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 11: Союзы и сложные предложения
   ═══════════════════════════════════════════════════════════ */
{
  id: 'a2-l11',
  title: 'Konjunkcioj kaj Kompleksaj Frazoj',
  desc: 'Союзы и сложные предложения',
  xp: 25,
  content: `
    <h3>🔗 Подчинительные союзы</h3>
    <table>
      <tr><th>Союз</th><th>Значение</th><th>Пример</th></tr>
      <tr><td>ke</td><td>что</td><td><span class="eo">Mi pensas, <b>ke</b> vi pravas.</span></td></tr>
      <tr><td>ĉar</td><td>потому что</td><td><span class="eo">Mi restas, <b>ĉar</b> pluvas.</span></td></tr>
      <tr><td>se</td><td>если</td><td><span class="eo"><b>Se</b> vi volas, venu.</span></td></tr>
      <tr><td>kvankam</td><td>хотя</td><td><span class="eo"><b>Kvankam</b> li lacas, li laboras.</span></td></tr>
      <tr><td>dum</td><td>пока</td><td><span class="eo"><b>Dum</b> ŝi legas, mi skribas.</span></td></tr>
      <tr><td>ĝis</td><td>пока не</td><td><span class="eo">Atendu, <b>ĝis</b> mi venos.</span></td></tr>
      <tr><td>por ke</td><td>чтобы</td><td><span class="eo">Mi parolas laŭte, <b>por ke</b> ĉiuj aŭdu.</span></td></tr>
      <tr><td>kvazaŭ</td><td>как будто</td><td><span class="eo">Li parolas, <b>kvazaŭ</b> li scias ĉion.</span></td></tr>
    </table>

    <h3>🔑 Правила употребления</h3>

    <h4>ke — «что»</h4>
    <div class="lesson-example"><span class="eo">Mi pensas, ke li venos.</span> — Я думаю, что он придёт.</div>
    <div class="lesson-example"><span class="eo">Ŝi diris, ke ŝi amas vin.</span> — Она сказала, что любит тебя.</div>

    <h4>ĉar — «потому что»</h4>
    <div class="lesson-example"><span class="eo">Mi ne venis, ĉar mi estis malsana.</span> — Я не пришёл, потому что был болен.</div>

    <h4>kvankam — «хотя»</h4>
    <p>Часто в паре с <b>tamen</b>:</p>
    <div class="lesson-example"><span class="eo">Kvankam li lacas, li tamen laboras.</span> — Хотя он устал, он всё же работает.</div>

    <h4>por ke — «чтобы» (требует -u!)</h4>
    <div class="lesson-example"><span class="eo">Mi parolas laŭte, por ke ĉiuj <b>aŭdu</b>.</span> — Я говорю громко, чтобы все слышали.</div>

    <h4>dum, ĝis — временные союзы</h4>
    <div class="lesson-example"><span class="eo">Dum ŝi legas, mi skribas.</span> — Пока она читает, я пишу.</div>
    <div class="lesson-example"><span class="eo">Atendu, ĝis mi venos.</span> — Подожди, пока я не приду.</div>

    <h3>✍️ Примеры в контексте</h3>
    <div class="lesson-example"><span class="eo">Mi pensas, ke Esperanto estas facila.</span> — Я думаю, что эсперанто лёгкий.</div>
    <div class="lesson-example"><span class="eo">Ŝi ne venis, ĉar ŝi estis malsana.</span> — Она не пришла, потому что была больна.</div>
    <div class="lesson-example"><span class="eo">Kvankam pluvas, ni promenos.</span> — Хотя идёт дождь, мы пойдём гулять.</div>
    <div class="lesson-example"><span class="eo">Se vi volas, ni iru kune.</span> — Если хочешь, пойдём вместе.</div>
    <div class="lesson-example"><span class="eo">Mi atendas, ĝis vi finos.</span> — Я жду, пока ты не закончишь.</div>
  `,
  exercises: [
    { q: 'Что означает <b>ke</b>?', opts: ['если', 'что', 'потому что', 'чтобы'], ans: 1 },
    { q: 'Что означает <b>ĉar</b>?', opts: ['если', 'что', 'потому что', 'хотя'], ans: 2 },
    { q: 'Что означает <b>kvankam</b>?', opts: ['если', 'что', 'потому что', 'хотя'], ans: 3 },
    { q: 'Что означает <b>dum</b>?', opts: ['после', 'до', 'пока', 'через'], ans: 2 },
    { q: 'Что означает <b>ĝis</b>?', opts: ['до, пока не', 'от', 'через', 'пока'], ans: 0 },
    { q: 'Какое окончание требует <b>por ke</b>?', opts: ['-as', '-is', '-os', '-u'], ans: 3 },
    { q: 'Как сказать «я думаю, что ты прав»?', opts: ['Mi pensas, ĉar vi pravas', 'Mi pensas, ke vi pravas', 'Mi pensas, se vi pravas', 'Mi pensas, kvankam vi pravas'], ans: 1 },
    { q: 'Как сказать «если хочешь, приходи»?', opts: ['Ke vi volas, venu', 'Ĉar vi volas, venu', 'Se vi volas, venu', 'Kvankam vi volas, venu'], ans: 2 },
    { q: 'Что означает <b>kvazaŭ</b>?', opts: ['как', 'будто', 'как будто', 'потому что'], ans: 2 },
    { q: 'Как сказать «хотя идёт дождь, мы идём»?', opts: ['Ĉar pluvas, ni iras', 'Ke pluvas, ni iras', 'Kvankam pluvas, ni iras', 'Se pluvas, ni iras'], ans: 2 }
  ],
  test: [
    { q: 'Что означает <b>ke</b>?', opts: ['если', 'что', 'потому что', 'чтобы'], ans: 1, explain: 'Ke = что.' },
    { q: 'Что означает <b>ĉar</b>?', opts: ['если', 'что', 'потому что', 'хотя'], ans: 2, explain: 'Ĉar = потому что.' },
    { q: 'Что означает <b>kvankam</b>?', opts: ['если', 'что', 'потому что', 'хотя'], ans: 3, explain: 'Kvankam = хотя.' },
    { q: 'Введите «потому что» на эсперанто:', type: 'input', ans: 'ĉar', explain: 'Ĉar.' },
    { q: 'Введите «хотя» на эсперанто:', type: 'input', ans: 'kvankam', explain: 'Kvankam.' },
    { q: 'Введите «чтобы» (союз) на эсперанто:', type: 'input', ans: 'por ke', explain: 'Por ke.' },
    { q: 'Введите «как будто» на эсперанто:', type: 'input', ans: 'kvazaŭ', explain: 'Kvazaŭ.' },
    { q: 'Какое окончание требует <b>por ke</b>?', opts: ['-as', '-is', '-os', '-u'], ans: 3, explain: 'Por ke + -u.' },
    { q: 'Как сказать «я знаю, что ты хороший»?', opts: ['Mi scias, ĉar vi estas bona', 'Mi scias, ke vi estas bona', 'Mi scias, se vi estas bona', 'Mi scias, kvankam vi estas bona'], ans: 1, explain: 'Ke = что.' },
    { q: 'Как сказать «подожди, пока я не приду»?', opts: ['Atendu, ke mi venos', 'Atendu, ĉar mi venos', 'Atendu, ĝis mi venos', 'Atendu, se mi venos'], ans: 2, explain: 'Ĝis = пока не.' }
  ],
  builder: [
    { words: ['mi', 'pensas', 'ke', 'vi', 'pravas'], correct: ['mi', 'pensas', 'ke', 'vi', 'pravas'], translation: 'Я думаю, что ты прав.' },
    { words: ['ŝi', 'ne', 'venis', 'ĉar', 'ŝi', 'estis', 'malsana'], correct: ['ŝi', 'ne', 'venis', 'ĉar', 'ŝi', 'estis', 'malsana'], translation: 'Она не пришла, потому что была больна.' },
    { words: ['kvankam', 'pluvas', 'ni', 'promenos'], correct: ['kvankam', 'pluvas', 'ni', 'promenos'], translation: 'Хотя идёт дождь, мы пойдём гулять.' },
    { words: ['se', 'vi', 'volas', 'venu'], correct: ['se', 'vi', 'volas', 'venu'], translation: 'Если хочешь, приходи.' },
    { words: ['mi', 'atendas', 'ĝis', 'vi', 'finos'], correct: ['mi', 'atendas', 'ĝis', 'vi', 'finos'], translation: 'Я жду, пока ты не закончишь.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 12: Словообразование — практика
   ═══════════════════════════════════════════════════════════ */
{
  id: 'a2-l12',
  title: 'Vortfarado — Praktiko',
  desc: 'Итоговая практика словообразования',
  xp: 25,
  content: `
    <h3>🧩 Словообразование — суперсила эсперанто</h3>
    <p>В эсперанто слова не нужно заучивать десятками тысяч — достаточно знать <b>корни</b> и <b>аффиксы</b>.</p>

    <h3>🏗️ Схема построения слова</h3>
    <div class="lesson-tip" style="text-align:center; font-size:16px;">
      <b>ПРИСТАВКА</b> + <b>КОРЕНЬ</b> + <b>СУФФИКС(Ы)</b> + <b>ОКОНЧАНИЕ</b>
    </div>

    <h3>🔝 Приставки — весь список</h3>
    <table>
      <tr><th>Приставка</th><th>Значение</th></tr>
      <tr><td>bo-</td><td>родство через брак</td></tr>
      <tr><td>dis-</td><td>врозь, рас-</td></tr>
      <tr><td>ek-</td><td>начало действия</td></tr>
      <tr><td>fi-</td><td>презрение</td></tr>
      <tr><td>ge-</td><td>оба пола</td></tr>
      <tr><td>mal-</td><td>противоположное</td></tr>
      <tr><td>mis-</td><td>ошибочно</td></tr>
      <tr><td>pra-</td><td>древность</td></tr>
      <tr><td>re-</td><td>снова</td></tr>
    </table>

    <h3>🔻 Суффиксы — весь список</h3>
    <table>
      <tr><th>Суффикс</th><th>Значение</th><th>Пример</th></tr>
      <tr><td>-ad-</td><td>длительное действие</td><td>paroladi</td></tr>
      <tr><td>-aĵ-</td><td>вещь</td><td>manĝaĵo</td></tr>
      <tr><td>-an-</td><td>житель, член</td><td>urbano</td></tr>
      <tr><td>-ar-</td><td>собрание</td><td>arbaro</td></tr>
      <tr><td>-ec-</td><td>качество</td><td>beleco</td></tr>
      <tr><td>-eg-</td><td>увеличение</td><td>domego</td></tr>
      <tr><td>-ej-</td><td>место</td><td>lernejo</td></tr>
      <tr><td>-em-</td><td>склонность</td><td>laborema</td></tr>
      <tr><td>-end-</td><td>должен быть</td><td>farenda</td></tr>
      <tr><td>-et-</td><td>уменьшение</td><td>dometo</td></tr>
      <tr><td>-id-</td><td>детёныш</td><td>katido</td></tr>
      <tr><td>-ig-</td><td>заставить</td><td>beligi</td></tr>
      <tr><td>-iĝ-</td><td>стать</td><td>beliĝi</td></tr>
      <tr><td>-il-</td><td>инструмент</td><td>skribilo</td></tr>
      <tr><td>-in-</td><td>женский пол</td><td>patrino</td></tr>
      <tr><td>-ind-</td><td>достойный</td><td>leginda</td></tr>
      <tr><td>-ist-</td><td>профессия</td><td>kantisto</td></tr>
      <tr><td>-obl-</td><td>кратность</td><td>duobla</td></tr>
      <tr><td>-on-</td><td>доля</td><td>duono</td></tr>
      <tr><td>-op-</td><td>группами по</td><td>duope</td></tr>
      <tr><td>-uj-</td><td>вместилище</td><td>pomujo</td></tr>
      <tr><td>-ul-</td><td>человек с качеством</td><td>junulo</td></tr>
    </table>

    <h3>✍️ Каскады словообразования</h3>
    <div class="lesson-example"><span class="eo">bela</span> → <span class="eo">malbela</span> → <span class="eo">malbelulo</span> → <span class="eo">malbelulino</span></div>
    <div class="lesson-example"><span class="eo">lerni</span> → <span class="eo">lernejo</span> → <span class="eo">lernejego</span></div>
    <div class="lesson-example"><span class="eo">kanti</span> → <span class="eo">kantisto</span> → <span class="eo">kantistino</span></div>
    <div class="lesson-example"><span class="eo">labori</span> → <span class="eo">laborema</span> → <span class="eo">laboremulo</span></div>

    <h3>✍️ Примеры в контексте</h3>
    <div class="lesson-example"><span class="eo">Ŝi estas belulino.</span> — Она красавица.</div>
    <div class="lesson-example"><span class="eo">Li laboras en granda laborejo.</span> — Он работает в большом рабочем помещении.</div>
    <div class="lesson-example"><span class="eo">Mia patrino estas instruistino.</span> — Моя мама — учительница.</div>
    <div class="lesson-example"><span class="eo">La malsanulejo estas nova.</span> — Больница новая.</div>
    <div class="lesson-example"><span class="eo">Ĝi estas leginda libro.</span> — Это книга, достойная прочтения.</div>
  `,
  exercises: [
    { q: 'Что такое <span class="eo">laborejo</span>?', opts: ['работник', 'место работы', 'работающий', 'работа'], ans: 1 },
    { q: 'Что означает <span class="eo">belulino</span>?', opts: ['красивая вещь', 'красавица', 'красиво', 'красота'], ans: 1 },
    { q: 'Что означает <span class="eo">kantistino</span>?', opts: ['певец', 'певица', 'пение', 'песня'], ans: 1 },
    { q: 'Что означает <b>-ej-</b>?', opts: ['человек', 'инструмент', 'место', 'вещь'], ans: 2 },
    { q: 'Что означает <b>-ist-</b>?', opts: ['профессия', 'место', 'инструмент', 'женский пол'], ans: 0 },
    { q: 'Как из <span class="eo">libr-</span> получить «библиотека»?', opts: ['librino', 'librejo', 'libraro', 'librulo'], ans: 2 },
    { q: 'Что означает <span class="eo">manskribo</span>?', opts: ['рукопись', 'письмо', 'рука', 'писать'], ans: 0 },
    { q: 'Как из <span class="eo">amiko</span> получить «подружка»?', opts: ['amikino', 'amiketo', 'amikaĉo', 'amikisto'], ans: 0 },
    { q: 'Что означает <span class="eo">relegi</span>?', opts: ['читать', 'прочитать ещё раз', 'выучить', 'недочитать'], ans: 1 },
    { q: 'Что означает <span class="eo">malsanulejo</span>?', opts: ['больница', 'здоровье', 'здоровый человек', 'больной'], ans: 0 }
  ],
  test: [
    { q: 'Что означает <span class="eo">laborejo</span>?', opts: ['работник', 'место работы', 'работающий', 'работа'], ans: 1, explain: 'Labor- + -ej- + -o.' },
    { q: 'Что означает <span class="eo">belulino</span>?', opts: ['красивая вещь', 'красавица', 'красиво', 'красота'], ans: 1, explain: 'Bel- + -ul- + -in- + -o.' },
    { q: 'Что означает <span class="eo">skribilo</span>?', opts: ['писатель', 'письмо', 'ручка', 'писарь'], ans: 2, explain: 'Skrib- + -il- + -o.' },
    { q: 'Введите «учительница» (от instrui):', type: 'input', ans: 'instruistino', explain: 'Instru- + -ist- + -in- + -o.' },
    { q: 'Введите «больница» (от malsana):', type: 'input', ans: 'malsanulejo', explain: 'Malsan- + -ul- + -ej- + -o.' },
    { q: 'Введите «красавица» (от bela):', type: 'input', ans: 'belulino', explain: 'Bel- + -ul- + -in- + -o.' },
    { q: 'Введите «еда» (от manĝi):', type: 'input', ans: 'manĝaĵo', explain: 'Manĝ- + -aĵ- + -o.' },
    { q: 'Что означает <span class="eo">manĝaĵo</span>?', opts: ['еда', 'едок', 'место еды', 'едящий'], ans: 0, explain: 'Manĝ- + -aĵ- + -o.' },
    { q: 'Что означает <span class="eo">junulo</span>?', opts: ['молодость', 'юноша', 'молодой', 'молодить'], ans: 1, explain: 'Jun- + -ul- + -o.' },
    { q: 'Что означает <span class="eo">gepatroj</span>?', opts: ['родители', 'отцы', 'матери', 'дети'], ans: 0, explain: 'Ge- = оба пола.' }
  ],
  builder: [
    { words: ['ŝi', 'estas', 'belulino'], correct: ['ŝi', 'estas', 'belulino'], translation: 'Она красавица.' },
    { words: ['li', 'laboras', 'en', 'granda', 'laborejo'], correct: ['li', 'laboras', 'en', 'granda', 'laborejo'], translation: 'Он работает в большом рабочем помещении.' },
    { words: ['mia', 'patrino', 'estas', 'instruistino'], correct: ['mia', 'patrino', 'estas', 'instruistino'], translation: 'Моя мама — учительница.' },
    { words: ['la', 'malsanulejo', 'estas', 'nova'], correct: ['la', 'malsanulejo', 'estas', 'nova'], translation: 'Больница новая.' },
    { words: ['ĉi', 'tiu', 'libro', 'estas', 'leginda'], correct: ['ĉi', 'tiu', 'libro', 'estas', 'leginda'], translation: 'Эта книга достойна прочтения.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 13: Даты и время (НОВЫЙ)
   ═══════════════════════════════════════════════════════════ */
{
  id: 'a2-l13',
  title: 'Datoj kaj Horoj',
  desc: 'Даты, часы, время суток',
  xp: 25,
  content: `
    <h3>📅 Даты</h3>
    <p>В эсперанто дата читается так:</p>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>la unua de januaro</td><td>первое января</td></tr>
      <tr><td>la dua de februaro</td><td>второе февраля</td></tr>
      <tr><td>la tria de marto</td><td>третье марта</td></tr>
      <tr><td>la deka de majo</td><td>десятое мая</td></tr>
    </table>
    <p>Формула: <b>la [порядковое] de [месяц]</b>.</p>

    <h3>🕐 Время суток</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>horo</td><td>час</td></tr>
      <tr><td>minuto</td><td>минута</td></tr>
      <tr><td>sekundo</td><td>секунда</td></tr>
      <tr><td>mateno</td><td>утро</td></tr>
      <tr><td>tagmezo</td><td>полдень</td></tr>
      <tr><td>posttagmezo</td><td>после обеда</td></tr>
      <tr><td>vespero</td><td>вечер</td></tr>
      <tr><td>nokto</td><td>ночь</td></tr>
      <tr><td>nun</td><td>сейчас</td></tr>
    </table>

    <h3>🕐 Сколько времени</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>Kioma horo estas?</td><td>Который час?</td></tr>
      <tr><td>Estas la tria horo.</td><td>Три часа.</td></tr>
      <tr><td>Estas la tria kaj duono.</td><td>Половина четвёртого (3:30).</td></tr>
      <tr><td>Estas la tria kaj kvarono.</td><td>Четверть четвёртого (3:15).</td></tr>
      <tr><td>Estas la tria kaj dek minutoj.</td><td>3:10</td></tr>
      <tr><td>Estas la tria antaŭ tagmezo.</td><td>3 часа дня (до полудня — нет, 3 утра).</td></tr>
      <tr><td>Estas la dua posttagmeze.</td><td>Два часа после обеда (2 часа дня).</td></tr>
    </table>

    <div class="lesson-tip">💡 «В три часа» = <span class="eo">je la tria horo</span>. Предлог <b>je</b> для точного времени.</div>

    <h3>🕐 At — когда?</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>matene</td><td>утром</td></tr>
      <tr><td>tagmeze</td><td>в полдень</td></tr>
      <tr><td>vespere</td><td>вечером</td></tr>
      <tr><td>nokte</td><td>ночью</td></tr>
    </table>

    <h3>✍️ Примеры в контексте</h3>
    <div class="lesson-example"><span class="eo">Hodiaŭ estas la kvina de junio.</span> — Сегодня пятое июня.</div>
    <div class="lesson-example"><span class="eo">Kioma horo estas nun?</span> — Который сейчас час?</div>
    <div class="lesson-example"><span class="eo">Estas la sepa kaj duono.</span> — Половина восьмого.</div>
    <div class="lesson-example"><span class="eo">Mi vekiĝas je la sepa matene.</span> — Я просыпаюсь в семь утра.</div>
    <div class="lesson-example"><span class="eo">Ni renkontiĝos je la kvina posttagmeze.</span> — Мы встретимся в пять вечера.</div>
    <div class="lesson-example"><span class="eo">Mia naskiĝtago estas la dek-unua de septembro.</span> — Мой день рождения — одиннадцатое сентября.</div>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Kioma horo estas?</b> <span class="ru">— Который час?</span><br>
      — <b>Estas la oka kaj duono.</b> <span class="ru">— Половина девятого.</span><br>
      — <b>Kiam vi revenos?</b> <span class="ru">— Когда ты вернёшься?</span><br>
      — <b>Je la kvina vespere.</b> <span class="ru">— В пять вечера.</span>
    </div>
  `,
  exercises: [
    { q: 'Как сказать «часов»?', opts: ['minuto', 'horo', 'sekundo', 'tago'], ans: 1 },
    { q: 'Что означает <span class="eo">tagmezo</span>?', opts: ['утро', 'полдень', 'вечер', 'ночь'], ans: 1 },
    { q: 'Что означает <span class="eo">nokto</span>?', opts: ['утро', 'день', 'вечер', 'ночь'], ans: 3 },
    { q: 'Как спросить «Который час?»?', opts: ['Kioma horo estas?', 'Kie estas la horo?', 'Kio estas horo?', 'Kiam horo?'], ans: 0 },
    { q: 'Что означает <span class="eo">mateno</span>?', opts: ['утро', 'вечер', 'ночь', 'полдень'], ans: 0 },
    { q: 'Что означает <span class="eo">vespero</span>?', opts: ['утро', 'вечер', 'ночь', 'полдень'], ans: 1 },
    { q: 'Как сказать «половина восьмого»?', opts: ['la sepa kaj duono', 'la oka kaj duono', 'la sepa duono', 'duono sepa'], ans: 0 },
    { q: 'Что означает <span class="eo">posttagmeze</span>?', opts: ['до полудня', 'после обеда', 'вечером', 'ночью'], ans: 1 },
    { q: 'Как сказать «в пять часов»?', opts: ['je la kvina horo', 'en la kvina horo', 'sur la kvina horo', 'al la kvina horo'], ans: 0 },
    { q: 'Как сказать «1-е января»?', opts: ['la unua de januaro', 'la unu de januaro', 'unu januaro', 'januaro unua'], ans: 0 }
  ],
  test: [
    { q: 'Как сказать «3:30»?', opts: ['la tria kaj duono', 'la tria kaj kvarono', 'la dua kaj duono', 'duono tria'], ans: 0, explain: '3 + половина.' },
    { q: 'Что означает <span class="eo">sekundo</span>?', opts: ['час', 'минута', 'секунда', 'день'], ans: 2, explain: 'Sekundo = секунда.' },
    { q: 'Какой предлог для времени?', opts: ['en', 'je', 'al', 'sur'], ans: 1, explain: 'Je la tria horo.' },
    { q: 'Введите «полдень» на эсперанто:', type: 'input', ans: 'tagmezo', explain: 'Tag- + mez- + -o.' },
    { q: 'Введите «вечер» на эсперанто:', type: 'input', ans: 'vespero', explain: 'Vespero.' },
    { q: 'Введите «1-е мая» на эсперанто:', type: 'input', ans: 'la unua de majo', explain: 'La unua de majo.' },
    { q: 'Введите «в 7 утра» на эсперанто:', type: 'input', ans: 'je la sepa matene', explain: 'Je la sepa matene.' },
    { q: 'Что означает <span class="eo">Kioma horo estas?</span>?', opts: ['Какой день?', 'Который час?', 'Какое число?', 'Когда?'], ans: 1, explain: 'Kioma horo = который час.' },
    { q: 'Как сказать «5-е марта»?', opts: ['la kvina de marto', 'la kvin de marto', 'kvin marto', 'marto kvina'], ans: 0, explain: 'Порядковое + de + месяц.' },
    { q: 'Что означает <span class="eo">antaŭ tagmezo</span>?', opts: ['после полудня', 'до полудня', 'в полдень', 'вечером'], ans: 1, explain: 'Antaŭ = до.' }
  ],
  builder: [
    { words: ['kioma', 'horo', 'estas'], correct: ['kioma', 'horo', 'estas'], translation: 'Который час?' },
    { words: ['estas', 'la', 'sepa', 'kaj', 'duono'], correct: ['estas', 'la', 'sepa', 'kaj', 'duono'], translation: 'Половина восьмого.' },
    { words: ['mi', 'vekiĝas', 'je', 'la', 'sepa', 'matene'], correct: ['mi', 'vekiĝas', 'je', 'la', 'sepa', 'matene'], translation: 'Я просыпаюсь в семь утра.' },
    { words: ['ni', 'renkontiĝos', 'je', 'la', 'kvina', 'posttagmeze'], correct: ['ni', 'renkontiĝos', 'je', 'la', 'kvina', 'posttagmeze'], translation: 'Мы встретимся в пять вечера.' },
    { words: ['hodiaŭ', 'estas', 'la', 'kvina', 'de', 'junio'], correct: ['hodiaŭ', 'estas', 'la', 'kvina', 'de', 'junio'], translation: 'Сегодня пятое июня.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 14: Транспорт и путешествия (НОВЫЙ)
   ═══════════════════════════════════════════════════════════ */
{
  id: 'a2-l14',
  title: 'Transporto kaj Vojaĝoj',
  desc: 'Транспорт, путешествия, направления',
  xp: 25,
  content: `
    <h3>🚂 Transportiloj</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>aŭto</td><td>машина</td></tr>
      <tr><td>aŭtobuso</td><td>автобус</td></tr>
      <tr><td>trajno</td><td>поезд</td></tr>
      <tr><td>tramo</td><td>трамвай</td></tr>
      <tr><td>metroo</td><td>метро</td></tr>
      <tr><td>biciklo</td><td>велосипед</td></tr>
      <tr><td>aviadilo</td><td>самолёт</td></tr>
      <tr><td>ŝipo</td><td>корабль</td></tr>
      <tr><td>taksio</td><td>такси</td></tr>
    </table>

    <h3>🗺️ Места</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>stacidomo</td><td>вокзал</td></tr>
      <tr><td>flughaveno</td><td>аэропорт</td></tr>
      <tr><td>haltejo</td><td>остановка</td></tr>
      <tr><td>hotelo</td><td>отель</td></tr>
      <tr><td>restoracio</td><td>ресторан</td></tr>
      <tr><td>strato</td><td>улица</td></tr>
      <tr><td>placo</td><td>площадь</td></tr>
      <tr><td>vojo</td><td>дорога, путь</td></tr>
      <tr><td>mapo</td><td>карта</td></tr>
      <tr><td>bileto</td><td>билет</td></tr>
    </table>

    <h3>🎯 Глаголы движения</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>vojaĝi</td><td>путешествовать</td></tr>
      <tr><td>veturi</td><td>ехать (транспортом)</td></tr>
      <tr><td>iri</td><td>идти (пешком)</td></tr>
      <tr><td>flugi</td><td>летать</td></tr>
      <tr><td>naĝi</td><td>плавать</td></tr>
      <tr><td>alveni</td><td>прибывать</td></tr>
      <tr><td>foriri</td><td>уходить</td></tr>
    </table>

    <h3>🔑 Полезные фразы</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>Kien vi iras?</td><td>Куда ты идёшь?</td></tr>
      <tr><td>De kie vi venas?</td><td>Откуда ты?</td></tr>
      <tr><td>Kiom da tempo ĝi daŭras?</td><td>Сколько это длится?</td></tr>
      <tr><td>Unu bileton, bonvolu.</td><td>Один билет, пожалуйста.</td></tr>
      <tr><td>Ĝi forveturas je la tria.</td><td>Он отправляется в три.</td></tr>
    </table>

    <h3>✍️ Примеры в контексте</h3>
    <div class="lesson-example"><span class="eo">Morgaŭ mi vojaĝos al Parizo.</span> — Завтра я поеду в Париж.</div>
    <div class="lesson-example"><span class="eo">Ni veturos per trajno.</span> — Мы поедем на поезде.</div>
    <div class="lesson-example"><span class="eo">Kien vi iras nun?</span> — Куда ты сейчас идёшь?</div>
    <div class="lesson-example"><span class="eo">La trajno alvenas je la sepa.</span> — Поезд прибывает в семь.</div>
    <div class="lesson-example"><span class="eo">Mi aĉetis du biletojn.</span> — Я купил два билета.</div>
    <div class="lesson-example"><span class="eo">La hotelo estas proksime al la stacidomo.</span> — Отель близко к вокзалу.</div>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Kien vi vojaĝas somere?</b> <span class="ru">— Куда ты поедешь летом?</span><br>
      — <b>Mi vojaĝos al Italio per trajno.</b> <span class="ru">— Я поеду в Италию на поезде.</span><br>
      — <b>Kiom da tempo ĝi daŭras?</b> <span class="ru">— Сколько это длится?</span><br>
      — <b>Ĝi daŭras du tagojn.</b> <span class="ru">— Это длится два дня.</span>
    </div>
  `,
  exercises: [
    { q: 'Что означает <span class="eo">trajno</span>?', opts: ['автобус', 'поезд', 'трамвай', 'метро'], ans: 1 },
    { q: 'Что означает <span class="eo">aŭto</span>?', opts: ['автобус', 'машина', 'велосипед', 'такси'], ans: 1 },
    { q: 'Что означает <span class="eo">aviadilo</span>?', opts: ['корабль', 'самолёт', 'вертолёт', 'ракета'], ans: 1 },
    { q: 'Что означает <span class="eo">stacidomo</span>?', opts: ['аэропорт', 'вокзал', 'остановка', 'отель'], ans: 1 },
    { q: 'Что означает <span class="eo">flughaveno</span>?', opts: ['вокзал', 'аэропорт', 'порт', 'стоянка'], ans: 1 },
    { q: 'Как сказать «ехать транспортом»?', opts: ['iri', 'veturi', 'flugi', 'naĝi'], ans: 1 },
    { q: 'Что означает <span class="eo">bileto</span>?', opts: ['билет', 'деньги', 'карта', 'сумка'], ans: 0 },
    { q: 'Что означает <span class="eo">vojaĝi</span>?', opts: ['идти', 'ехать', 'путешествовать', 'летать'], ans: 2 },
    { q: 'Как спросить «Куда ты идёшь?»?', opts: ['Kien vi iras?', 'De kie vi venas?', 'Kie vi estas?', 'Kiam vi venos?'], ans: 0 },
    { q: 'Что означает <span class="eo">haltejo</span>?', opts: ['вокзал', 'аэропорт', 'остановка', 'отель'], ans: 2 }
  ],
  test: [
    { q: 'Что означает <span class="eo">veturi</span>?', opts: ['идти пешком', 'ехать транспортом', 'летать', 'плавать'], ans: 1, explain: 'Veturi = ехать.' },
    { q: 'Как сказать «Я поеду на поезде»?', opts: ['Mi iros per trajno', 'Mi veturos per trajno', 'Mi flugos per trajno', 'Mi naĝos per trajno'], ans: 1, explain: 'Per = на чём-то.' },
    { q: 'Что означает <span class="eo">De kie vi venas?</span>?', opts: ['Куда ты идёшь?', 'Откуда ты?', 'Где ты?', 'Когда ты придёшь?'], ans: 1, explain: 'De kie = откуда.' },
    { q: 'Введите «поезд» на эсперанто:', type: 'input', ans: 'trajno', explain: 'Trajno.' },
    { q: 'Введите «вокзал» на эсперанто:', type: 'input', ans: 'stacidomo', explain: 'Stacidomo.' },
    { q: 'Введите «аэропорт» на эсперанто:', type: 'input', ans: 'flughaveno', explain: 'Flughaveno.' },
    { q: 'Введите «билет» на эсперанто:', type: 'input', ans: 'bileto', explain: 'Bileto.' },
    { q: 'Как сказать «Сколько времени это длится?»', opts: ['Kiom da tempo ĝi daŭras?', 'Kie ĝi estas?', 'Kiam ĝi estas?', 'Kio ĝi estas?'], ans: 0, explain: 'Kiom da tempo.' },
    { q: 'Что означает <span class="eo">alveni</span>?', opts: ['уходить', 'прибывать', 'бежать', 'летать'], ans: 1, explain: 'Alveni = прибывать.' },
    { q: 'Как сказать «машина, автобус, трамвай»?', opts: ['aŭto, aŭtobuso, tramo', 'trajno, tramo, taksio', 'aviadilo, ŝipo, metroo', 'biciklo, aŭto, trajno'], ans: 0, explain: 'Машина, автобус, трамвай.' }
  ],
  builder: [
    { words: ['morgaŭ', 'mi', 'vojaĝos', 'al', 'parizo'], correct: ['morgaŭ', 'mi', 'vojaĝos', 'al', 'parizo'], translation: 'Завтра я поеду в Париж.' },
    { words: ['ni', 'veturos', 'per', 'trajno'], correct: ['ni', 'veturos', 'per', 'trajno'], translation: 'Мы поедем на поезде.' },
    { words: ['kien', 'vi', 'iras', 'nun'], correct: ['kien', 'vi', 'iras', 'nun'], translation: 'Куда ты сейчас идёшь?' },
    { words: ['la', 'trajno', 'alvenas', 'je', 'la', 'sepa'], correct: ['la', 'trajno', 'alvenas', 'je', 'la', 'sepa'], translation: 'Поезд прибывает в семь.' },
    { words: ['mi', 'aĉetis', 'du', 'biletojn'], correct: ['mi', 'aĉetis', 'du', 'biletojn'], translation: 'Я купил два билета.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 15: Здоровье и тело (НОВЫЙ)
   ═══════════════════════════════════════════════════════════ */
{
  id: 'a2-l15',
  title: 'Sano kaj Korpo',
  desc: 'Здоровье, части тела, у врача',
  xp: 25,
  content: `
    <h3>🧍 Partoj de la korpo</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>kapo</td><td>голова</td></tr>
      <tr><td>haroj</td><td>волосы</td></tr>
      <tr><td>vizaĝo</td><td>лицо</td></tr>
      <tr><td>okulo</td><td>глаз</td></tr>
      <tr><td>orelo</td><td>ухо</td></tr>
      <tr><td>nazo</td><td>нос</td></tr>
      <tr><td>buŝo</td><td>рот</td></tr>
      <tr><td>dento</td><td>зуб</td></tr>
      <tr><td>kolo</td><td>шея</td></tr>
      <tr><td>ŝultro</td><td>плечо</td></tr>
      <tr><td>brako</td><td>рука (от плеча)</td></tr>
      <tr><td>mano</td><td>рука (кисть)</td></tr>
      <tr><td>fingro</td><td>палец</td></tr>
      <tr><td>koro</td><td>сердце</td></tr>
      <tr><td>stomako</td><td>желудок</td></tr>
      <tr><td>piedo</td><td>нога</td></tr>
    </table>

    <h3>🏥 Sano — здоровье</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>sana</td><td>здоровый</td></tr>
      <tr><td>malsana</td><td>больной</td></tr>
      <tr><td>dolori</td><td>болеть (о части тела)</td></tr>
      <tr><td>febro</td><td>жар</td></tr>
      <tr><td>tuso</td><td>кашель</td></tr>
      <tr><td>malvarmumo</td><td>простуда</td></tr>
      <tr><td>kapdoloro</td><td>головная боль</td></tr>
      <tr><td>kuracisto</td><td>врач</td></tr>
      <tr><td>medikamento</td><td>лекарство</td></tr>
      <tr><td>hospitalo</td><td>больница</td></tr>
    </table>

    <h3>🔑 Ключевые фразы</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>Kiel vi fartas?</td><td>Как вы себя чувствуете?</td></tr>
      <tr><td>Mi fartas bone / malbone.</td><td>Я хорошо / плохо себя чувствую.</td></tr>
      <tr><td>Min doloras la kapo.</td><td>У меня болит голова.</td></tr>
      <tr><td>Mi estas malsana.</td><td>Я болен.</td></tr>
      <tr><td>Bonvolu voki kuraciston.</td><td>Пожалуйста, вызовите врача.</td></tr>
    </table>

    <div class="lesson-tip">💡 «Болит голова» = <span class="eo">Min doloras la kapo</span> или <span class="eo">La kapo doloras min</span>.</div>

    <h3>✍️ Примеры в контексте</h3>
    <div class="lesson-example"><span class="eo">Min doloras la kapo.</span> — У меня болит голова.</div>
    <div class="lesson-example"><span class="eo">Ŝi estas malsana hodiaŭ.</span> — Она сегодня больна.</div>
    <div class="lesson-example"><span class="eo">La kuracisto donis al mi medikamenton.</span> — Врач дал мне лекарство.</div>
    <div class="lesson-example"><span class="eo">Mi havas febron kaj tuson.</span> — У меня жар и кашель.</div>
    <div class="lesson-example"><span class="eo">Vi devus ripozi pli multe.</span> — Вам следовало бы больше отдыхать.</div>
    <div class="lesson-example"><span class="eo">Mia koro batas rapide.</span> — Моё сердце бьётся быстро.</div>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Kiel vi fartas hodiaŭ?</b> <span class="ru">— Как вы себя чувствуете сегодня?</span><br>
      — <b>Ne tre bone. Min doloras la kapo.</b> <span class="ru">— Не очень. У меня болит голова.</span><br>
      — <b>Ĉu vi havas febron?</b> <span class="ru">— У вас есть жар?</span><br>
      — <b>Jes, iomete. Mi devus vidi kuraciston.</b> <span class="ru">— Да, немного. Мне следовало бы увидеть врача.</span>
    </div>
  `,
  exercises: [
    { q: 'Что означает <span class="eo">kapo</span>?', opts: ['рука', 'голова', 'нога', 'глаз'], ans: 1 },
    { q: 'Что означает <span class="eo">okulo</span>?', opts: ['ухо', 'глаз', 'нос', 'рот'], ans: 1 },
    { q: 'Что означает <span class="eo">mano</span>?', opts: ['нога', 'рука', 'голова', 'лицо'], ans: 1 },
    { q: 'Что означает <span class="eo">piedo</span>?', opts: ['рука', 'нога', 'палец', 'плечо'], ans: 1 },
    { q: 'Что означает <span class="eo">koro</span>?', opts: ['голова', 'сердце', 'желудок', 'лёгкие'], ans: 1 },
    { q: 'Что означает <span class="eo">kuracisto</span>?', opts: ['больница', 'врач', 'лекарство', 'больной'], ans: 1 },
    { q: 'Что означает <span class="eo">malsana</span>?', opts: ['здоровый', 'больной', 'уставший', 'голодный'], ans: 1 },
    { q: 'Как сказать «У меня болит голова»?', opts: ['Min doloras la kapo', 'Mi doloras la kapon', 'La kapo doloras', 'Mi havas kapon'], ans: 0 },
    { q: 'Что означает <span class="eo">medikamento</span>?', opts: ['врач', 'лекарство', 'больница', 'боль'], ans: 1 },
    { q: 'Что означает <span class="eo">buŝo</span>?', opts: ['нос', 'рот', 'ухо', 'глаз'], ans: 1 }
  ],
  test: [
    { q: 'Что означает <span class="eo">dolori</span>?', opts: ['лечить', 'болеть', 'уставать', 'спать'], ans: 1, explain: 'Dolori = болеть.' },
    { q: 'Что означает <span class="eo">febro</span>?', opts: ['кашель', 'жар', 'простуда', 'боль'], ans: 1, explain: 'Febro = жар.' },
    { q: 'Что означает <span class="eo">kapdoloro</span>?', opts: ['зубная боль', 'головная боль', 'боль в животе', 'боль в сердце'], ans: 1, explain: 'Kap- + dolor- + -o.' },
    { q: 'Введите «сердце» на эсперанто:', type: 'input', ans: 'koro', explain: 'Koro.' },
    { q: 'Введите «глаз» на эсперанто:', type: 'input', ans: 'okulo', explain: 'Okulo.' },
    { q: 'Введите «врач» на эсперанто:', type: 'input', ans: 'kuracisto', explain: 'Kur- + -ist- + -o.' },
    { q: 'Введите «больница» на эсперанто:', type: 'input', ans: 'hospitalo', explain: 'Hospitalo.' },
    { q: 'Что означает <span class="eo">tuso</span>?', opts: ['насморк', 'кашель', 'жар', 'боль'], ans: 1, explain: 'Tuso = кашель.' },
    { q: 'Как сказать «Я болен»?', opts: ['Mi estas sana', 'Mi estas malsana', 'Mi fartas bone', 'Mi dormas'], ans: 1, explain: 'Malsana = больной.' },
    { q: 'Что означает <span class="eo">ripozi</span>?', opts: ['работать', 'отдыхать', 'спать', 'есть'], ans: 1, explain: 'Ripozi = отдыхать.' }
  ],
  builder: [
    { words: ['min', 'doloras', 'la', 'kapo'], correct: ['min', 'doloras', 'la', 'kapo'], translation: 'У меня болит голова.' },
    { words: ['ŝi', 'estas', 'malsana', 'hodiaŭ'], correct: ['ŝi', 'estas', 'malsana', 'hodiaŭ'], translation: 'Она сегодня больна.' },
    { words: ['la', 'kuracisto', 'donis', 'al', 'mi', 'medikamenton'], correct: ['la', 'kuracisto', 'donis', 'al', 'mi', 'medikamenton'], translation: 'Врач дал мне лекарство.' },
    { words: ['mi', 'havas', 'febron', 'kaj', 'tuson'], correct: ['mi', 'havas', 'febron', 'kaj', 'tuson'], translation: 'У меня жар и кашель.' },
    { words: ['vi', 'devus', 'ripozi', 'pli', 'multe'], correct: ['vi', 'devus', 'ripozi', 'pli', 'multe'], translation: 'Вам следовало бы больше отдыхать.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 16: Дом, одежда, хобби (НОВЫЙ)
   ═══════════════════════════════════════════════════════════ */
{
  id: 'a2-l16',
  title: 'Hejmo, Vestoj kaj Hobioj',
  desc: 'Дом, одежда, свободное время',
  xp: 25,
  content: `
    <h3>🏠 Hejmo</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>hejmo</td><td>дом (родной)</td></tr>
      <tr><td>loĝejo</td><td>жилище</td></tr>
      <tr><td>ĉambro</td><td>комната</td></tr>
      <tr><td>kuirejo</td><td>кухня</td></tr>
      <tr><td>dormoĉambro</td><td>спальня</td></tr>
      <tr><td>banĉambro</td><td>ванная</td></tr>
      <tr><td>salono</td><td>гостиная</td></tr>
      <tr><td>fenestro</td><td>окно</td></tr>
      <tr><td>pordo</td><td>дверь</td></tr>
      <tr><td>lito</td><td>кровать</td></tr>
      <tr><td>seĝo</td><td>стул</td></tr>
      <tr><td>tablo</td><td>стол</td></tr>
      <tr><td>ŝranko</td><td>шкаф</td></tr>
    </table>

    <h3>👕 Vestoj</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>vesto</td><td>одежда</td></tr>
      <tr><td>ĉemizo</td><td>рубашка</td></tr>
      <tr><td>pantalono</td><td>брюки</td></tr>
      <tr><td>jupo</td><td>юбка</td></tr>
      <tr><td>robo</td><td>платье</td></tr>
      <tr><td>jako</td><td>куртка</td></tr>
      <tr><td>mantelo</td><td>пальто</td></tr>
      <tr><td>ŝuo</td><td>обувь</td></tr>
      <tr><td>ĉapo</td><td>шапка</td></tr>
      <tr><td>ganto</td><td>перчатка</td></tr>
    </table>

    <h3>🎨 Hobioj</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>hobio</td><td>хобби</td></tr>
      <tr><td>legi</td><td>читать</td></tr>
      <tr><td>skribi</td><td>писать</td></tr>
      <tr><td>desegni</td><td>рисовать</td></tr>
      <tr><td>kanti</td><td>петь</td></tr>
      <tr><td>danci</td><td>танцевать</td></tr>
      <tr><td>ludi</td><td>играть</td></tr>
      <tr><td>vojaĝi</td><td>путешествовать</td></tr>
      <tr><td>kuiri</td><td>готовить</td></tr>
      <tr><td>naĝi</td><td>плавать</td></tr>
    </table>

    <h3>✍️ Примеры в контексте</h3>
    <div class="lesson-example"><span class="eo">Mia hejmo estas granda.</span> — Мой дом большой.</div>
    <div class="lesson-example"><span class="eo">Mi loĝas en triĉambra loĝejo.</span> — Я живу в трёхкомнатной квартире.</div>
    <div class="lesson-example"><span class="eo">Ŝi portas ruĝan robon.</span> — Она носит красное платье.</div>
    <div class="lesson-example"><span class="eo">Mia hobio estas legi librojn.</span> — Моё хобби — читать книги.</div>
    <div class="lesson-example"><span class="eo">Li ŝatas danci kaj kanti.</span> — Он любит танцевать и петь.</div>
    <div class="lesson-example"><span class="eo">Ni havas belan salonon.</span> — У нас красивая гостиная.</div>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Kie vi loĝas?</b> <span class="ru">— Где вы живёте?</span><br>
      — <b>Mi loĝas en malgranda loĝejo.</b> <span class="ru">— Я живу в маленькой квартире.</span><br>
      — <b>Kiajn hobiojn vi havas?</b> <span class="ru">— Какие у вас хобби?</span><br>
      — <b>Mi ŝatas legi kaj desegni.</b> <span class="ru">— Я люблю читать и рисовать.</span>
    </div>
  `,
  exercises: [
    { q: 'Что означает <span class="eo">ĉambro</span>?', opts: ['кухня', 'комната', 'спальня', 'ванная'], ans: 1 },
    { q: 'Что означает <span class="eo">kuirejo</span>?', opts: ['кухня', 'спальня', 'гостиная', 'ванная'], ans: 0 },
    { q: 'Что означает <span class="eo">dormoĉambro</span>?', opts: ['кухня', 'спальня', 'гостиная', 'ванная'], ans: 1 },
    { q: 'Что означает <span class="eo">pordo</span>?', opts: ['окно', 'дверь', 'стена', 'потолок'], ans: 1 },
    { q: 'Что означает <span class="eo">ĉemizo</span>?', opts: ['брюки', 'рубашка', 'платье', 'пальто'], ans: 1 },
    { q: 'Что означает <span class="eo">pantalono</span>?', opts: ['брюки', 'юбка', 'рубашка', 'куртка'], ans: 0 },
    { q: 'Как сказать «рисовать»?', opts: ['legi', 'skribi', 'desegni', 'kanti'], ans: 2 },
    { q: 'Как сказать «танцевать»?', opts: ['danci', 'kanti', 'ludi', 'naĝi'], ans: 0 },
    { q: 'Что означает <span class="eo">hobio</span>?', opts: ['работа', 'хобби', 'дом', 'одежда'], ans: 1 },
    { q: 'Что означает <span class="eo">ŝuo</span>?', opts: ['шапка', 'обувь', 'перчатка', 'пальто'], ans: 1 }
  ],
  test: [
    { q: 'Что означает <span class="eo">loĝejo</span>?', opts: ['жилище', 'комната', 'мебель', 'дом'], ans: 0, explain: 'Loĝ- + -ej- + -o.' },
    { q: 'Что означает <span class="eo">salono</span>?', opts: ['кухня', 'гостиная', 'спальня', 'ванная'], ans: 1, explain: 'Salono = гостиная.' },
    { q: 'Что означает <span class="eo">fenestro</span>?', opts: ['дверь', 'окно', 'стена', 'пол'], ans: 1, explain: 'Fenestro = окно.' },
    { q: 'Введите «комната» на эсперанто:', type: 'input', ans: 'ĉambro', explain: 'Ĉambro.' },
    { q: 'Введите «рубашка» на эсперанто:', type: 'input', ans: 'ĉemizo', explain: 'Ĉemizo.' },
    { q: 'Введите «одежда» на эсперанто:', type: 'input', ans: 'vesto', explain: 'Vesto.' },
    { q: 'Введите «петь» на эсперанто:', type: 'input', ans: 'kanti', explain: 'Kanti.' },
    { q: 'Что означает <span class="eo">ŝranko</span>?', opts: ['кровать', 'шкаф', 'стул', 'стол'], ans: 1, explain: 'Ŝranko = шкаф.' },
    { q: 'Как сказать «Моё хобби — читать книги»?', opts: ['Mia hobio estas legi librojn', 'Mia hobio estas legas librojn', 'Mia hobio legi librojn', 'Mia hobio estas librojn legi'], ans: 0, explain: 'Estas + инфинитив.' },
    { q: 'Что означает <span class="eo">lito</span>?', opts: ['стол', 'стул', 'кровать', 'шкаф'], ans: 2, explain: 'Lito = кровать.' }
  ],
  builder: [
    { words: ['mia', 'hejmo', 'estas', 'granda'], correct: ['mia', 'hejmo', 'estas', 'granda'], translation: 'Мой дом большой.' },
    { words: ['ŝi', 'portas', 'ruĝan', 'robon'], correct: ['ŝi', 'portas', 'ruĝan', 'robon'], translation: 'Она носит красное платье.' },
    { words: ['mia', 'hobio', 'estas', 'legi', 'librojn'], correct: ['mia', 'hobio', 'estas', 'legi', 'librojn'], translation: 'Моё хобби — читать книги.' },
    { words: ['li', 'ŝatas', 'danci', 'kaj', 'kanti'], correct: ['li', 'ŝatas', 'danci', 'kaj', 'kanti'], translation: 'Он любит танцевать и петь.' },
    { words: ['ni', 'havas', 'belan', 'salonon'], correct: ['ni', 'havas', 'belan', 'salonon'], translation: 'У нас красивая гостиная.' }
  ]
}

];