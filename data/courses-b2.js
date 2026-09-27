/* ============================================================
   VA ESPERANTO — КУРС B2 (12 уроков)
   Стилистика, литература, культура эсперанто
   Экосистема Vulpeto Abeleto · 2026
   ============================================================
   12 уроков для свободного владения: стилистические регистры,
   литература, поэзия, перевод, идиоматика, культура, история.
   ============================================================ */

window.LESSONS_B2 = [

/* ═══════════════════════════════════════════════════════════
   УРОК 1: Стилистические регистры
   ═══════════════════════════════════════════════════════════ */
{
  id: 'b2-l1',
  title: 'Stilaj Registroj',
  desc: 'Формальный, разговорный и поэтический стиль',
  xp: 35,
  content: `
    <h3>🎭 Что такое стилистический регистр</h3>
    <p>Один и тот же смысл можно выразить по-разному — в зависимости от ситуации. <b>Регистр</b> — это выбор слов и конструкций, соответствующий контексту: с друзьями, в письме, в науке, в поэзии.</p>

    <h3>📊 Три основных регистра</h3>
    <table>
      <tr><th>Регистр</th><th>Когда используется</th></tr>
      <tr><td>Neformala (разговорный)</td><td>друзья, семья, повседневность</td></tr>
      <tr><td>Neŭtrala (нейтральный)</td><td>общение, книги, газеты</td></tr>
      <tr><td>Formala (формальный)</td><td>официальные документы, наука</td></tr>
    </table>

    <h3>🎯 Один смысл — разные регистры</h3>
    <table>
      <tr><th>Разговорный</th><th>Формальный</th><th>Перевод</th></tr>
      <tr><td><span class="eo">Saluton!</span></td><td><span class="eo">Estimata sinjoro,</span></td><td>Приветствие в письме</td></tr>
      <tr><td><span class="eo">Mi volas…</span></td><td><span class="eo">Mi deziras…</span></td><td>Я хочу…</td></tr>
      <tr><td><span class="eo">Tre bone</span></td><td><span class="eo">Eminente bone</span></td><td>Очень хорошо</td></tr>
      <tr><td><span class="eo">Dankon!</span></td><td><span class="eo">Mi esprimas mian dankon.</span></td><td>Спасибо / благодарю</td></tr>
      <tr><td><span class="eo">Ĝis!</span></td><td><span class="eo">Kun respekto, …</span></td><td>Пока / с уважением</td></tr>
      <tr><td><span class="eo">Oni diras, ke…</span></td><td><span class="eo">Estas dirate, ke…</span></td><td>Говорят, что…</td></tr>
    </table>

    <h3>🔑 Формальные маркеры</h3>
    <ul>
      <li>Полные формы вместо сокращений: <span class="eo">Mi deziras</span> вместо <span class="eo">Mi volas</span></li>
      <li>Пассив вместо актива: <span class="eo">Estas farite</span> вместо <span class="eo">Oni faris</span></li>
      <li>Обращения: <span class="eo">Estimata</span>, <span class="eo">Kara</span>, <span class="eo">Sinjoro</span>, <span class="eo">Sinjorino</span></li>
      <li>Вежливые формулы: <span class="eo">Bonvolu</span>, <span class="eo">Mi petas</span>, <span class="eo">Se vi permesos</span></li>
    </ul>

    <h3>✍️ Примеры в контексте</h3>
    <div class="lesson-example"><span class="eo"><b>Разговорный:</b> Saluton! Kiel vi fartas? Mi tre ĝojas vidi vin!</span> — Привет! Как дела? Очень рад тебя видеть!</div>
    <div class="lesson-example"><span class="eo"><b>Нейтральный:</b> Bonan tagon. Kiel vi fartas hodiaŭ?</span> — Добрый день. Как вы сегодня?</div>
    <div class="lesson-example"><span class="eo"><b>Формальный:</b> Estimata sinjoro, mi permesas al mi demandi pri via sanstato.</span> — Уважаемый господин, позволю себе спросить о вашем самочувствии.</div>
    <div class="lesson-example"><span class="eo"><b>Поэтический:</b> Ho, kiel vi belas en matena lum'!</span> — О, как ты прекрасна в утреннем свете!</div>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Saluton, ĉu vi havas momenton?</b> <span class="ru">— Привет, у вас есть минутка?</span><br>
      — <b>Certe. Kion vi bezonas?</b> <span class="ru">— Конечно. Что вам нужно?</span><br>
      — <b>Mi volus demandi konsilon pri letero al oficiala institucio.</b> <span class="ru">— Я хотел бы спросить совета насчёт письма в официальное учреждение.</span><br>
      — <b>Kompreneble. En formalaj leteroj oni skribas «Estimata sinjoro» kaj uzas pli longajn frazojn.</b> <span class="ru">— Разумеется. В формальных письмах пишут «Уважаемый господин» и используют более длинные фразы.</span>
    </div>

    <div class="lesson-tip">💡 Эсперанто <b>не имеет диалектов</b>, но имеет <b>регистры</b>. Один и тот же язык звучит по-разному у поэта, учёного и ребёнка.</div>
  `,
  exercises: [
    { q: 'Что такое стилистический регистр?', opts: ['диалект', 'выбор слов по ситуации', 'грамматическое правило', 'тип предложения'], ans: 1 },
    { q: 'Какой регистр используется в официальном письме?', opts: ['разговорный', 'нейтральный', 'формальный', 'поэтический'], ans: 2 },
    { q: 'Как сказать «Я хочу» формально?', opts: ['Mi volas', 'Mi deziras', 'Mi ŝatus', 'Mi intencas'], ans: 1 },
    { q: 'Что означает <span class="eo">Estimata sinjoro</span>?', opts: ['Привет, друг', 'Уважаемый господин', 'Добрый день', 'Здравствуйте'], ans: 1 },
    { q: 'Как в формальном стиле сказать «говорят»?', opts: ['Oni diras', 'Estas dirate', 'Iu diris', 'Homoj parolas'], ans: 1 },
    { q: 'Что означает <span class="eo">Kun respekto</span>?', opts: ['С уважением', 'До свидания', 'Спасибо', 'Привет'], ans: 0 },
    { q: 'Какой регистр самый нейтральный?', opts: ['разговорный', 'нейтральный', 'формальный', 'поэтический'], ans: 1 },
    { q: 'Что характерно для формального стиля?', opts: ['короткие фразы', 'полные формы и пассив', 'сленг', 'восклицания'], ans: 1 },
    { q: 'Как правильно начать неформальное письмо?', opts: ['Estimata sinjoro', 'Kara amiko', 'Al la institucio', 'Respektinda'], ans: 1 },
    { q: 'Что означает <span class="eo">Mi esprimas mian dankon</span>?', opts: ['Я благодарю', 'Я хочу', 'Я прошу', 'Я рад'], ans: 0 }
  ],
  test: [
    { q: 'Сколько основных регистров в эсперанто?', opts: ['2', '3', '4', '5'], ans: 1, explain: 'Разговорный, нейтральный, формальный.' },
    { q: 'Как правильно закончить формальное письмо?', opts: ['Ĝis!', 'Pli poste', 'Kun respekto,', 'Saluton'], ans: 2, explain: 'Kun respekto = с уважением.' },
    { q: 'Что означает <b>Se vi permesos</b>?', opts: ['Если хотите', 'Если разрешите', 'Если можете', 'Если знаете'], ans: 1, explain: 'Permesi = разрешать.' },
    { q: 'Введите «Уважаемая госпожа» (формальное обращение):', type: 'input', ans: 'estimata sinjorino', explain: 'Estimata + sinjorino.' },
    { q: 'Введите «С уважением» для письма:', type: 'input', ans: 'kun respekto', explain: 'Kun respekto.' },
    { q: 'Введите «Я хотел бы попросить» (формально):', type: 'input', ans: 'mi deziras peti', explain: 'Deziri = формальное «хотеть».' },
    { q: 'Введите «Благодарю вас» (формально):', type: 'input', ans: 'mi esprimas mian dankon', explain: 'Esprimi dankon = выражать благодарность.' },
    { q: 'Какой регистр использует <b>Oni diras</b>?', opts: ['разговорный', 'нейтральный', 'формальный', 'поэтический'], ans: 0, explain: 'Это разговорная форма.' },
    { q: 'Что делает формальный стиль?', opts: ['сокращает слова', 'использует полные формы и пассив', 'использует сленг', 'упрощает грамматику'], ans: 1, explain: 'Полнота и пассив.' },
    { q: 'Как формально попросить разрешения?', opts: ['Mi volas', 'Ĉu mi povas', 'Se vi permesos', 'Bonvolu'], ans: 2, explain: 'Se vi permesos = если разрешите.' }
  ],
  builder: [
    { words: ['estimata', 'sinjoro', 'mi', 'deziras', 'demandi', 'vin'], correct: ['estimata', 'sinjoro', 'mi', 'deziras', 'demandi', 'vin'], translation: 'Уважаемый господин, я хотел бы спросить вас.' },
    { words: ['mi', 'esprimas', 'mian', 'dankon', 'pro', 'via', 'helpo'], correct: ['mi', 'esprimas', 'mian', 'dankon', 'pro', 'via', 'helpo'], translation: 'Я выражаю благодарность за вашу помощь.' },
    { words: ['kun', 'respekto', 'via', 'anna'], correct: ['kun', 'respekto', 'via', 'anna'], translation: 'С уважением, ваша Анна.' },
    { words: ['estas', 'dirate', 'ke', 'esperanto', 'estas', 'facila'], correct: ['estas', 'dirate', 'ke', 'esperanto', 'estas', 'facila'], translation: 'Говорят, что эсперанто лёгкий.' },
    { words: ['se', 'vi', 'permesos', 'mi', 'faros', 'proponon'], correct: ['se', 'vi', 'permesos', 'mi', 'faros', 'proponon'], translation: 'Если разрешите, я сделаю предложение.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 2: Анализ прозы
   ═══════════════════════════════════════════════════════════ */
{
  id: 'b2-l2',
  title: 'Analizo de Prozo',
  desc: 'Работа с художественным текстом',
  xp: 35,
  content: `
    <h3>📖 Что мы делаем с текстом</h3>
    <p>При анализе прозы важно видеть не только <b>что</b> сказано, но и <b>как</b>. Есть четыре основных элемента повествования.</p>

    <h3>🎯 Четыре элемента</h3>
    <table>
      <tr><th>Элемент</th><th>Вопрос</th></tr>
      <tr><td>Rakontanto</td><td>Кто рассказывает? 1-е лицо / 3-е?</td></tr>
      <tr><td>Intrigo</td><td>Что происходит? Какой конфликт?</td></tr>
      <tr><td>Etoso</td><td>Какая атмосфера? Грустная, весёлая?</td></tr>
      <tr><td>Temo</td><td>О чём это на самом деле? Какая идея?</td></tr>
    </table>

    <h3>📝 Ключевые термины</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>rakonto</td><td>рассказ</td></tr>
      <tr><td>rakontanto</td><td>рассказчик</td></tr>
      <tr><td>rolulo</td><td>персонаж</td></tr>
      <tr><td>intrigo</td><td>интрига, сюжет</td></tr>
      <tr><td>etoso</td><td>атмосфера</td></tr>
      <tr><td>temo</td><td>тема</td></tr>
      <tr><td>stilo</td><td>стиль</td></tr>
      <tr><td>priskribo</td><td>описание</td></tr>
      <tr><td>dialogo</td><td>диалог</td></tr>
      <tr><td>monologo</td><td>монолог</td></tr>
    </table>

    <h3>📖 Пример текста для анализа</h3>
    <div class="lesson-example" style="font-size:14.5px;">
      <p><span class="eo"><b>La maljuna horloĝo</b></span></p>
      <p><span class="eo">En la malnova ĉambro de mia avino staris granda ligna horloĝo. Ĝi tikadis la tutan tagon kaj la tutan nokton — senhalte, senlace. Kiam mi estis infano, mi kredis, ke ĝi estas la koro de la domo. Avino diris, ke la horloĝo memoras ĉiujn, kiuj iam eniris tiun ĉambron.</span></p>
      <p><span class="eo">Post ŝia morto, ni vendis la domon. La horloĝo restis ĉe mi. Ĝi daŭre tikadas — sed nun ĝia sono ŝajnas al mi pli malgaja ol antaŭe. Kvazaŭ ĝi atendas iun, kiu neniam revenos.</span></p>
    </div>

    <h3>🎯 Разбор</h3>
    <table>
      <tr><th>Элемент</th><th>В этом тексте</th></tr>
      <tr><td>Rakontanto</td><td>1-е лицо (<span class="eo">mi</span>)</td></tr>
      <tr><td>Intrigo</td><td>тихий: смерть бабушки, продажа дома</td></tr>
      <tr><td>Etoso</td><td>ностальгический, грустный</td></tr>
      <tr><td>Temo</td><td>память, время, утрата</td></tr>
      <tr><td>Stilo</td><td>простой, но с метафорами (<span class="eo">koro de la domo</span>)</td></tr>
    </table>

    <h3>🔑 Стилистические приёмы</h3>
    <ul>
      <li><b>Metaforo</b> — метафора: <span class="eo">la horloĝo estas la koro</span></li>
      <li><b>Personigo</b> — олицетворение: <span class="eo">la horloĝo memoras</span></li>
      <li><b>Komparo</b> — сравнение: <span class="eo">kvazaŭ ĝi atendas</span></li>
      <li><b>Ripeto</b> — повтор: <span class="eo">la tutan tagon kaj la tutan nokton</span></li>
    </ul>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Pri kio estas tiu rakonto?</b> <span class="ru">— О чём этот рассказ?</span><br>
      — <b>Ĝi temas pri memoro kaj tempo.</b> <span class="ru">— Он о памяти и времени.</span><br>
      — <b>Kiu estas la rakontanto?</b> <span class="ru">— Кто рассказчик?</span><br>
      — <b>Nepo de la avino, kiu rakontas en unua persono.</b> <span class="ru">— Внук бабушки, рассказывает от первого лица.</span>
    </div>

    <div class="lesson-tip">💡 Хороший анализ — это когда ты можешь пересказать <b>и содержание, и идею</b> текста, и назвать приёмы, которыми автор их создаёт.</div>
  `,
  exercises: [
    { q: 'Кто такой <b>rakontanto</b>?', opts: ['читатель', 'рассказчик', 'автор', 'персонаж'], ans: 1 },
    { q: 'Что означает <b>intrigo</b>?', opts: ['атмосфера', 'интрига, сюжет', 'тема', 'стиль'], ans: 1 },
    { q: 'Что означает <b>etoso</b>?', opts: ['атмосфера', 'тема', 'жанр', 'персонаж'], ans: 0 },
    { q: 'Что означает <b>temo</b>?', opts: ['атмосфера', 'сюжет', 'тема', 'персонаж'], ans: 2 },
    { q: 'Что такое метафора?', opts: ['сравнение', 'скрытое сравнение', 'повтор', 'вопрос'], ans: 1 },
    { q: 'Что такое олицетворение (<b>personigo</b>)?', opts: ['сравнение', 'приписывание свойств человеку', 'повтор', 'инверсия'], ans: 1 },
    { q: 'Что делает рассказчик от первого лица?', opts: ['говорит о других', 'говорит о себе', 'описывает природу', 'не участвует'], ans: 1 },
    { q: 'Что такое <b>rolulo</b>?', opts: ['читатель', 'персонаж', 'автор', 'рассказчик'], ans: 1 },
    { q: 'Что означает <b>stilo</b>?', opts: ['стиль', 'сюжет', 'тема', 'жанр'], ans: 0 },
    { q: 'Что такое повтор в тексте?', opts: ['стилистический приём', 'ошибка', 'грамматика', 'пунктуация'], ans: 0 }
  ],
  test: [
    { q: 'Сколько основных элементов повествования?', opts: ['2', '3', '4', '5'], ans: 2, explain: 'Рассказчик, сюжет, атмосфера, тема.' },
    { q: 'Что делает метафора?', opts: ['сравнивает прямо', 'скрыто сравнивает', 'повторяет', 'отрицает'], ans: 1, explain: 'Скрытое сравнение.' },
    { q: 'Что такое <b>personigo</b>?', opts: ['олицетворение', 'сравнение', 'инверсия', 'повтор'], ans: 0, explain: 'Приписывание человеческих свойств.' },
    { q: 'Введите «рассказчик» на эсперанто:', type: 'input', ans: 'rakontanto', explain: 'Rakont- + -ant- + -o.' },
    { q: 'Введите «персонаж» на эсперанто:', type: 'input', ans: 'rolulo', explain: 'Rol- + -ul- + -o.' },
    { q: 'Введите «атмосфера» на эсперанто:', type: 'input', ans: 'etoso', explain: 'Etoso.' },
    { q: 'Введите «описание» на эсперанто:', type: 'input', ans: 'priskribo', explain: 'Pri- + skrib- + -o.' },
    { q: 'Что такое сюжет?', opts: ['идея', 'конфликт и события', 'стиль', 'жанр'], ans: 1, explain: 'Интрига.' },
    { q: 'Что делает сравнение (<b>komparo</b>)?', opts: ['скрыто сравнивает', 'прямо сравнивает с союзом', 'повторяет', 'описывает'], ans: 1, explain: 'Kvazaŭ, kiel.' },
    { q: 'Что такое тема текста?', opts: ['то, о чём текст', 'место действия', 'персонаж', 'стиль'], ans: 0, explain: 'Главная идея.' }
  ],
  builder: [
    { words: ['la', 'rakonto', 'temas', 'pri', 'memoro', 'kaj', 'tempo'], correct: ['la', 'rakonto', 'temas', 'pri', 'memoro', 'kaj', 'tempo'], translation: 'Рассказ о памяти и времени.' },
    { words: ['la', 'rakontanto', 'estas', 'la', 'nepo', 'de', 'la', 'avino'], correct: ['la', 'rakontanto', 'estas', 'la', 'nepo', 'de', 'la', 'avino'], translation: 'Рассказчик — внук бабушки.' },
    { words: ['la', 'etoso', 'de', 'la', 'rakonto', 'estas', 'malgaja'], correct: ['la', 'etoso', 'de', 'la', 'rakonto', 'estas', 'malgaja'], translation: 'Атмосфера рассказа грустная.' },
    { words: ['la', 'aŭtoro', 'uzas', 'metaforojn', 'kaj', 'komparojn'], correct: ['la', 'aŭtoro', 'uzas', 'metaforojn', 'kaj', 'komparojn'], translation: 'Автор использует метафоры и сравнения.' },
    { words: ['la', 'stilo', 'de', 'la', 'teksto', 'estas', 'simpla', 'sed', 'bela'], correct: ['la', 'stilo', 'de', 'la', 'teksto', 'estas', 'simpla', 'sed', 'bela'], translation: 'Стиль текста простой, но красивый.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 3: Поэзия и стихосложение
   ═══════════════════════════════════════════════════════════ */
{
  id: 'b2-l3',
  title: 'Poezio kaj Versfarado',
  desc: 'Ритм, рифма, размеры, поэты эсперанто',
  xp: 35,
  content: `
    <h3>🎭 Особенности эсперантской поэзии</h3>
    <p>В эсперанто поэзия особенно выразительна, потому что язык <b>гибкий</b>: ударение всегда на предпоследнем слоге, много односложных корней, свободный порядок слов.</p>

    <h3>📊 Ключевые термины</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>poemo</td><td>стихотворение</td></tr>
      <tr><td>poeto</td><td>поэт</td></tr>
      <tr><td>verso</td><td>стих, строка</td></tr>
      <tr><td>strofo</td><td>строфа</td></tr>
      <tr><td>rimo</td><td>рифма</td></tr>
      <tr><td>ritmo</td><td>ритм</td></tr>
      <tr><td>metriko</td><td>метрика, размер</td></tr>
      <tr><td>kadenco</td><td>каденция</td></tr>
    </table>

    <h3>🎯 Размеры (метрика)</h3>
    <table>
      <tr><th>Размер</th><th>Схема</th><th>Пример</th></tr>
      <tr><td>Jambo</td><td>◡ — (неударный + ударный)</td><td>de-DO, de-DO</td></tr>
      <tr><td>Troĥeo</td><td>— ◡ (ударный + неударный)</td><td>DO-de, DO-de</td></tr>
      <tr><td>Daktilo</td><td>— ◡ ◡</td><td>DO-de-de</td></tr>
      <tr><td>Amfibraĥo</td><td>◡ — ◡</td><td>de-DO-de</td></tr>
    </table>

    <h3>🎯 Рифмы</h3>
    <table>
      <tr><th>Тип</th><th>Схема</th></tr>
      <tr><td>Parigita</td><td>AABB</td></tr>
      <tr><td>Kruca</td><td>ABAB</td></tr>
      <tr><td>Ĉirkaŭa</td><td>ABBA</td></tr>
      <tr><td>Libera</td><td>без рифмы</td></tr>
    </table>

    <h3>📖 Пример стихотворения</h3>
    <div class="lesson-example" style="font-size:14.5px; font-style: italic;">
      <p><span class="eo">Ho, bela land' de verdaj kampoj,<br>
      Kie espero ĉiam floros,<br>
      En vi trovos ni niajn amojn,<br>
      Kaj niaj koroj ne doloros.</span></p>
      <p style="font-size:13px; color:var(--muted); margin-top:8px;">Схема рифмы: ABAB (kruca rimo). Размер — jambo.</p>
    </div>

    <h3>🎯 Известные поэты эсперанто</h3>
    <table>
      <tr><th>Поэт</th><th>Вклад</th></tr>
      <tr><td>L. L. Zamenhof</td><td>первые поэмы, «La Espero» (гимн)</td></tr>
      <tr><td>Kálmán Kalocsay</td><td>реформатор поэзии, «Mondo kaj Koro»</td></tr>
      <tr><td>Julio Baghy</td><td>лирика, «Preter la Vivo»</td></tr>
      <tr><td>William Auld</td><td>шотландский поэт, номинирован на Нобеля</td></tr>
      <tr><td>Marjorie Boulton</td><td>английская поэтесса и драматург</td></tr>
    </table>

    <h3>🎯 Гимн эсперанто — «La Espero»</h3>
    <div class="lesson-example" style="font-size:14.5px; font-style: italic;">
      <p><span class="eo">En la mondon venis nova sento,<br>
      Tra la mondo iras forta voko;<br>
      Per flugiloj de facila vento<br>
      Nun de loko flugu ĝi al loko.</span></p>
      <p style="font-size:13px; color:var(--muted); margin-top:8px;">Написан самим Заменгофом, стал гимном движения эсперанто.</p>
    </div>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Ĉu vi ŝatas poezion?</b> <span class="ru">— Вы любите поэзию?</span><br>
      — <b>Jes, precipe esperantan. Ĝi estas tre ritma.</b> <span class="ru">— Да, особенно эсперантскую. Она очень ритмична.</span><br>
      — <b>Kiu estas via plej ŝatata poeto?</b> <span class="ru">— Кто ваш любимый поэт?</span><br>
      — <b>Kalocsay. Liaj versoj estas perfektaj.</b> <span class="ru">— Калочай. Его стихи безупречны.</span>
    </div>

    <div class="lesson-tip">💡 Окончание <b>-o</b> в поэзии можно опускать: <span class="eo">kor'</span> вместо <span class="eo">koro</span>. Это делается для ритма и часто в классической поэзии.</div>
  `,
  exercises: [
    { q: 'Что означает <b>poemo</b>?', opts: ['поэт', 'стихотворение', 'рифма', 'строфа'], ans: 1 },
    { q: 'Что означает <b>strofo</b>?', opts: ['строфа', 'строка', 'рифма', 'размер'], ans: 0 },
    { q: 'Что такое <b>rimo</b>?', opts: ['ритм', 'рифма', 'размер', 'строфа'], ans: 1 },
    { q: 'Какой размер — ◡ — (неударный + ударный)?', opts: ['jambo', 'troĥeo', 'daktilo', 'amfibraĥo'], ans: 0 },
    { q: 'Какой размер — — ◡ (ударный + неударный)?', opts: ['jambo', 'troĥeo', 'daktilo', 'amfibraĥo'], ans: 1 },
    { q: 'Какая схема рифмы у <b>kruca rimo</b>?', opts: ['AABB', 'ABAB', 'ABBA', 'AAAA'], ans: 1 },
    { q: 'Какая схема рифмы у <b>parigita rimo</b>?', opts: ['AABB', 'ABAB', 'ABBA', 'AAAA'], ans: 0 },
    { q: 'Кто написал гимн «La Espero»?', opts: ['Kalocsay', 'Baghy', 'Zamenhof', 'Auld'], ans: 2 },
    { q: 'Что такое <b>ritmo</b>?', opts: ['рифма', 'ритм', 'строфа', 'размер'], ans: 1 },
    { q: 'Что можно опускать в поэзии?', opts: ['-a', '-o', '-j', '-n'], ans: 1 }
  ],
  test: [
    { q: 'Почему эсперанто удобен для поэзии?', opts: ['много диалектов', 'гибкость и ударение', 'нет гласных', 'сложная грамматика'], ans: 1, explain: 'Ударение на предпоследнем слоге.' },
    { q: 'Какой размер — ◡ — ◡?', opts: ['jambo', 'troĥeo', 'daktilo', 'amfibraĥo'], ans: 3, explain: 'Amfibraĥo.' },
    { q: 'Какая схема ABBA?', opts: ['parigita', 'kruca', 'ĉirkaŭa', 'libera'], ans: 2, explain: 'Ĉirkaŭa = кольцевая.' },
    { q: 'Введите «стихотворение» на эсперанто:', type: 'input', ans: 'poemo', explain: 'Poemo.' },
    { q: 'Введите «рифма» на эсперанто:', type: 'input', ans: 'rimo', explain: 'Rimo.' },
    { q: 'Введите «строфа» на эсперанто:', type: 'input', ans: 'strofo', explain: 'Strofo.' },
    { q: 'Введите «поэт» на эсперанто:', type: 'input', ans: 'poeto', explain: 'Poeto.' },
    { q: 'Кто из поэтов номинирован на Нобелевскую премию?', opts: ['Zamenhof', 'Kalocsay', 'Baghy', 'Auld'], ans: 3, explain: 'William Auld.' },
    { q: 'Что такое <b>metriko</b>?', opts: ['ритмическая схема', 'рифма', 'строфа', 'жанр'], ans: 0, explain: 'Метрика.' },
    { q: 'Как называется стих без рифмы?', opts: ['libera', 'parigita', 'kruca', 'ĉirkaŭa'], ans: 0, explain: 'Libera = свободный.' }
  ],
  builder: [
    { words: ['mi', 'ŝatas', 'legi', 'esperantan', 'poezion'], correct: ['mi', 'ŝatas', 'legi', 'esperantan', 'poezion'], translation: 'Я люблю читать эсперантскую поэзию.' },
    { words: ['la', 'poemo', 'estas', 'skribita', 'en', 'jambo'], correct: ['la', 'poemo', 'estas', 'skribita', 'en', 'jambo'], translation: 'Стихотворение написано ямбом.' },
    { words: ['ĉi', 'tiu', 'verso', 'havas', 'krucan', 'rimon'], correct: ['ĉi', 'tiu', 'verso', 'havas', 'krucan', 'rimon'], translation: 'Этот стих имеет перекрёстную рифму.' },
    { words: ['la', 'himno', 'de', 'esperanto', 'estas', 'la', 'espero'], correct: ['la', 'himno', 'de', 'esperanto', 'estas', 'la', 'espero'], translation: 'Гимн эсперанто — «La Espero».' },
    { words: ['kalocsay', 'estis', 'granda', 'esperanta', 'poeto'], correct: ['kalocsay', 'estis', 'granda', 'esperanta', 'poeto'], translation: 'Калочай был великим поэтом эсперанто.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 4: Перевод
   ═══════════════════════════════════════════════════════════ */
{
  id: 'b2-l4',
  title: 'Tradukado',
  desc: 'Теория и практика перевода',
  xp: 35,
  content: `
    <h3>🌍 Что такое перевод</h3>
    <p><b>Перевод</b> — не механическая замена слов, а перенос <b>смысла</b> и <b>стиля</b> из одного языка в другой. Хороший перевод звучит естественно на целевом языке.</p>

    <h3>📊 Ключевые термины</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>traduki</td><td>переводить</td></tr>
      <tr><td>traduko</td><td>перевод</td></tr>
      <tr><td>tradukisto</td><td>переводчик</td></tr>
      <tr><td>origina lingvo</td><td>исходный язык</td></tr>
      <tr><td>cela lingvo</td><td>целевой язык</td></tr>
      <tr><td>esprimo</td><td>выражение</td></tr>
      <tr><td>signifo</td><td>значение</td></tr>
    </table>

    <h3>🎯 Два подхода к переводу</h3>
    <table>
      <tr><th>Подход</th><th>Что делает</th></tr>
      <tr><td>Laŭvorta (дословный)</td><td>слово за слово — часто неестественно</td></tr>
      <tr><td>Libera (свободный)</td><td>передаёт смысл, но может отклониться от формы</td></tr>
      <tr><td>Ekvivalenta (эквивалентный)</td><td>идеал: смысл + стиль + естественность</td></tr>
    </table>

    <div class="lesson-tip">💡 Профессиональные переводчики используют <b>эквивалентный</b> подход: перевод должен звучать так, будто текст <b>изначально был написан</b> на целевом языке.</div>

    <h3>🎯 Ложные друзья переводчика</h3>
    <table>
      <tr><th>Esperanto</th><th>Кажется</th><th>Реально</th></tr>
      <tr><td>aktuala</td><td>актуальный</td><td>текущий, сегодняшний</td></tr>
      <tr><td>eventuala</td><td>эвентуальный</td><td>возможный, случайный</td></tr>
      <tr><td>konfuzi</td><td>конфузить</td><td>путать, смущать</td></tr>
      <tr><td>rezulti</td><td>результат</td><td>следовать из, проистекать</td></tr>
      <tr><td>preciza</td><td>прецизный</td><td>точный (не «драгоценный»)</td></tr>
    </table>

    <h3>📖 Примеры перевода</h3>
    <div class="lesson-example">
      <b>Оригинал (рус):</b> «Как дела?»<br>
      <b>Дословно:</b> <span class="eo">Kiel aferoj?</span><br>
      <b>Правильно:</b> <span class="eo">Kiel vi fartas?</span>
    </div>
    <div class="lesson-example">
      <b>Оригинал (рус):</b> «Не бери в голову.»<br>
      <b>Дословно:</b> <span class="eo">Ne prenu en kapon.</span> (звучит странно)<br>
      <b>Правильно:</b> <span class="eo">Ne zorgu pri tio.</span>
    </div>
    <div class="lesson-example">
      <b>Оригинал (рус):</b> «Раз плюнуть.»<br>
      <b>Правильно:</b> <span class="eo">Estas bagatelo.</span>
    </div>

    <h3>🎯 Практические правила</h3>
    <ul>
      <li>Сначала пойми <b>весь текст</b>, потом переводи</li>
      <li>Не переводи слово за словом — переводи <b>смысл</b></li>
      <li>Учитывай <b>стиль</b> оригинала</li>
      <li>Проверь: звучит ли перевод <b>естественно</b>?</li>
      <li>Если можешь — попроси носителя проверить</li>
    </ul>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Kion vi tradukas?</b> <span class="ru">— Что вы переводите?</span><br>
      — <b>Rusan poemon en Esperanton.</b> <span class="ru">— Русское стихотворение на эсперанто.</span><br>
      — <b>Ĉu estas malfacile?</b> <span class="ru">— Это трудно?</span><br>
      — <b>Jes, precipe la ritmon konservi. Sed mi provas.</b> <span class="ru">— Да, особенно сохранить ритм. Но я стараюсь.</span>
    </div>
  `,
  exercises: [
    { q: 'Что означает <b>traduki</b>?', opts: ['писать', 'переводить', 'читать', 'говорить'], ans: 1 },
    { q: 'Что такое <b>origina lingvo</b>?', opts: ['родной язык', 'исходный язык', 'целевой язык', 'иностранный'], ans: 1 },
    { q: 'Что такое <b>cela lingvo</b>?', opts: ['родной', 'исходный', 'целевой', 'древний'], ans: 2 },
    { q: 'Какой подход считается идеальным?', opts: ['дословный', 'свободный', 'эквивалентный', 'машинный'], ans: 2 },
    { q: 'Что значит <b>aktuala</b>?', opts: ['актуальный', 'текущий', 'устаревший', 'новый'], ans: 1 },
    { q: 'Что значит <b>eventuala</b>?', opts: ['эвентуальный', 'возможный', 'важный', 'неожиданный'], ans: 1 },
    { q: 'Что значит <b>konfuzi</b>?', opts: ['конфузить', 'путать', 'убеждать', 'спорить'], ans: 1 },
    { q: 'Что значит <b>rezulti</b>?', opts: ['результат', 'следовать из', 'решить', 'повторить'], ans: 1 },
    { q: 'Как перевести «Как дела?»?', opts: ['Kiel aferoj?', 'Kiel vi fartas?', 'Kiel vi nomiĝas?', 'Kiel vi estas?'], ans: 1 },
    { q: 'Что нужно понять сначала?', opts: ['каждое слово', 'весь текст', 'грамматику', 'стиль'], ans: 1 }
  ],
  test: [
    { q: 'Что главное в хорошем переводе?', opts: ['точность слов', 'естественность звучания', 'длина', 'рифма'], ans: 1, explain: 'Перевод должен звучать естественно.' },
    { q: 'Что значит <b>tradukisto</b>?', opts: ['текст', 'переводчик', 'автор', 'читатель'], ans: 1, explain: 'Traduk- + -ist- + -o.' },
    { q: 'Что делать при ложных друзьях?', opts: ['переводить буквально', 'проверять значение', 'игнорировать', 'добавлять слова'], ans: 1, explain: 'Проверяй значение в словаре.' },
    { q: 'Введите «переводить» на эсперанто:', type: 'input', ans: 'traduki', explain: 'Traduki.' },
    { q: 'Введите «переводчик» на эсперанто:', type: 'input', ans: 'tradukisto', explain: 'Traduk- + -ist- + -o.' },
    { q: 'Введите «значение» на эсперанто:', type: 'input', ans: 'signifo', explain: 'Signif- + -o.' },
    { q: 'Введите «выражение» на эсперанто:', type: 'input', ans: 'esprimo', explain: 'Esprim- + -o.' },
    { q: 'Какое правило перевода важнее всего?', opts: ['дословность', 'естественность', 'сокращение', 'добавление'], ans: 1, explain: 'Перевод должен звучать естественно.' },
    { q: 'Что делать перед переводом?', opts: ['читать словарь', 'понять весь текст', 'писать', 'править'], ans: 1, explain: 'Сначала целое, потом части.' },
    { q: 'Как переводят «Не бери в голову»?', opts: ['Ne prenu en kapon', 'Ne zorgu pri tio', 'Ne pensu', 'Ne atentu'], ans: 1, explain: 'Идиома переводится идиомой.' }
  ],
  builder: [
    { words: ['mi', 'tradukas', 'rusan', 'poemon', 'en', 'esperanton'], correct: ['mi', 'tradukas', 'rusan', 'poemon', 'en', 'esperanton'], translation: 'Я перевожу русское стихотворение на эсперанто.' },
    { words: ['bona', 'traduko', 'devas', 'soni', 'nature'], correct: ['bona', 'traduko', 'devas', 'soni', 'nature'], translation: 'Хороший перевод должен звучать естественно.' },
    { words: ['la', 'tradukisto', 'devas', 'koni', 'ambaŭ', 'lingvojn'], correct: ['la', 'tradukisto', 'devas', 'koni', 'ambaŭ', 'lingvojn'], translation: 'Переводчик должен знать оба языка.' },
    { words: ['estas', 'malfacile', 'konservi', 'la', 'ritmon'], correct: ['estas', 'malfacile', 'konservi', 'la', 'ritmon'], translation: 'Трудно сохранить ритм.' },
    { words: ['la', 'signifo', 'estas', 'pli', 'grava', 'ol', 'la', 'formo'], correct: ['la', 'signifo', 'estas', 'pli', 'grava', 'ol', 'la', 'formo'], translation: 'Значение важнее формы.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 5: Идиоматика и фразеология
   ═══════════════════════════════════════════════════════════ */
{
  id: 'b2-l5',
  title: 'Idiotismoj kaj Frazeologio',
  desc: 'Пословицы, поговорки, устойчивые выражения',
  xp: 35,
  content: `
    <h3>🎭 Что такое идиома</h3>
    <p><b>Идиома</b> — устойчивое выражение, смысл которого не выводится из отдельных слов. «Спустить собак» ≠ «спустить собак».</p>

    <h3>📊 Ключевые термины</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>idiotismo</td><td>идиома</td></tr>
      <tr><td>proverbo</td><td>пословица</td></tr>
      <tr><td>frazeologio</td><td>фразеология</td></tr>
      <tr><td>esprimo</td><td>выражение</td></tr>
      <tr><td>laŭvorte</td><td>дословно</td></tr>
    </table>

    <h3>🎯 Происхождение идиом эсперанто</h3>
    <p>Заменгоф собрал пословицы из разных языков в сборник <b>Proverbaro Esperanta</b> (1905). Многие пришли из русского, французского, немецкого, польского.</p>

    <h3>📖 Известные пословицы</h3>
    <table>
      <tr><th>Esperanto</th><th>Смысл</th></tr>
      <tr><td>Kie estas volo, tie estas vojo.</td><td>Где воля, там и путь.</td></tr>
      <tr><td>Kiu ne riskas, tiu ne gajnas.</td><td>Кто не рискует, тот не выигрывает.</td></tr>
      <tr><td>Kiu semas venton, tiu rikoltas ventegon.</td><td>Кто сеет ветер, тот пожнёт бурю.</td></tr>
      <tr><td>Ne ŝovu vian nazon en fremdan vazon.</td><td>Не суй свой нос в чужой вопрос.</td></tr>
      <tr><td>Eĉ la plej bona fajro baldaŭ estingiĝas.</td><td>Даже лучший огонь скоро гаснет.</td></tr>
      <tr><td>Per unu ŝtono oni ne konstruas muron.</td><td>Одним камнем стены не построишь.</td></tr>
      <tr><td>Du manoj faras pli multe ol unu.</td><td>Две руки делают больше одной.</td></tr>
      <tr><td>Ripetado estas la patrino de lernado.</td><td>Повторение — мать учения.</td></tr>
      <tr><td>For de l' okuloj, for de l' koro.</td><td>С глаз долой — из сердца вон.</td></tr>
      <tr><td>Post la batalo ĉiu estas brava.</td><td>После битвы всякий храбрый.</td></tr>
    </table>

    <h3>🎯 Разговорные идиомы</h3>
    <table>
      <tr><th>Esperanto</th><th>Значение</th></tr>
      <tr><td>Estas bagatelo.</td><td>Это пустяк.</td></tr>
      <tr><td>Ĝi estas tute egale al mi.</td><td>Мне всё равно.</td></tr>
      <tr><td>Prenu ĝin facile!</td><td>Не принимай близко к сердцу!</td></tr>
      <tr><td>Li havas bonan koron.</td><td>У него доброе сердце.</td></tr>
      <tr><td>Ŝi estas kiel fiŝo en akvo.</td><td>Она как рыба в воде.</td></tr>
      <tr><td>Li mensogas kiel kalendaraĵo.</td><td>Он врёт как календарь.</td></tr>
    </table>

    <h3>✍️ Примеры в контексте</h3>
    <div class="lesson-example"><span class="eo">Kie estas volo, tie estas vojo — mi ĉiam diras al miaj studentoj.</span> — Где воля, там и путь — я всегда говорю студентам.</div>
    <div class="lesson-example"><span class="eo">Ne zorgu — estas bagatelo, ni solvos tion rapide.</span> — Не беспокойся — это пустяк, решим быстро.</div>
    <div class="lesson-example"><span class="eo">Ŝi lernas novan lingvon kiel fiŝo en akvo.</span> — Она учит новый язык как рыба в воде.</div>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Kial vi rapidas?</b> <span class="ru">— Почему вы торопитесь?</span><br>
      — <b>Mi devas fini la laboron hodiaŭ. Vi scias: kiu frue leviĝas, al tiu Dio donas.</b> <span class="ru">— Я должен сегодня закончить работу. Вы знаете: кто рано встаёт, тому Бог даёт.</span><br>
      — <b>Ĝuste! Sed memoru: ankaŭ ripozi oni devas.</b> <span class="ru">— Точно! Но помните: и отдыхать нужно.</span><br>
      — <b>Certe. Sed nun — laboro. Poste — ripozo.</b> <span class="ru">— Конечно. Но сейчас — работа. Потом — отдых.</span>
    </div>

    <div class="lesson-tip">💡 Заменгоф писал: «Идиомы — <b>сок языка</b>». Он собрал около 2600 пословиц и поговорок в своём <b>Proverbaro</b>.</div>
  `,
  exercises: [
    { q: 'Что такое идиома?', opts: ['грамматика', 'устойчивое выражение', 'существительное', 'частица'], ans: 1 },
    { q: 'Что означает <b>proverbo</b>?', opts: ['поговорка', 'грамматика', 'глагол', 'местоимение'], ans: 0 },
    { q: 'Что означает «Kie estas volo, tie estas vojo»?', opts: ['Где воля, там и путь', 'Где дом, там и семья', 'Где работа, там и деньги', 'Где друзья, там и веселье'], ans: 0 },
    { q: 'Что означает «Ripetado estas la patrino de lernado»?', opts: ['Повторение — мать учения', 'Учение — свет', 'Лень — мать всех пороков', 'Учиться никогда не поздно'], ans: 0 },
    { q: 'Что означает «Estas bagatelo»?', opts: ['Это дорого', 'Это пустяк', 'Это важно', 'Это сложно'], ans: 1 },
    { q: 'Что означает «Li havas bonan koron»?', opts: ['У него доброе сердце', 'У него больное сердце', 'У него сильное сердце', 'У него слабое сердце'], ans: 0 },
    { q: 'Что означает «Ŝi estas kiel fiŝo en akvo»?', opts: ['Она как рыба в воде', 'Она холодная', 'Она неловкая', 'Она быстрая'], ans: 0 },
    { q: 'Кто собрал «Proverbaro Esperanta»?', opts: ['Kalocsay', 'Zamenhof', 'Baghy', 'Auld'], ans: 1 },
    { q: 'Что означает <b>laŭvorte</b>?', opts: ['письменно', 'дословно', 'устно', 'быстро'], ans: 1 },
    { q: 'Что означает «For de l\' okuloj, for de l\' koro»?', opts: ['С глаз долой — из сердца вон', 'Глаза боятся, руки делают', 'Дальше положишь — ближе возьмёшь', 'Кто рано встаёт, тому Бог даёт'], ans: 0 }
  ],
  test: [
    { q: 'Что такое <b>frazeologio</b>?', opts: ['грамматика', 'фразеология', 'синтаксис', 'морфология'], ans: 1, explain: 'Учение об устойчивых выражениях.' },
    { q: 'Сколько пословиц собрал Заменгоф?', opts: ['500', '1000', '2000', '2600'], ans: 3, explain: 'Около 2600.' },
    { q: 'Что означает «Du manoj faras pli multe ol unu»?', opts: ['Две руки делают больше', 'Одна голова хорошо, а две лучше', 'Работа не волк', 'Всё в руках человека'], ans: 0, explain: 'Прямой смысл.' },
    { q: 'Введите «пословица» на эсперанто:', type: 'input', ans: 'proverbo', explain: 'Proverb- + -o.' },
    { q: 'Введите «идиома» на эсперанто:', type: 'input', ans: 'idiotismo', explain: 'Idiotismo.' },
    { q: 'Введите «дословно» на эсперанто:', type: 'input', ans: 'laŭvorte', explain: 'Laŭ- + vort- + -e.' },
    { q: 'Введите «пустяк» на эсперанто:', type: 'input', ans: 'bagatelo', explain: 'Bagatelo.' },
    { q: 'Что означает «Per unu ŝtono oni ne konstruas muron»?', opts: ['Одним камнем стены не построишь', 'Камни в огород', 'Не бросай камни', 'Камень на шее'], ans: 0, explain: 'Классическая пословица.' },
    { q: 'Что означает «Post la batalo ĉiu estas brava»?', opts: ['После битвы всякий храбрый', 'Битва проиграна', 'Смелого пуля боится', 'На войне как на войне'], ans: 0, explain: 'Иронично о тех, кто смел после победы.' },
    { q: 'Почему идиомы важно знать?', opts: ['для грамматики', 'для естественного общения', 'для экзаменов', 'для чтения'], ans: 1, explain: 'Сок языка.' }
  ],
  builder: [
    { words: ['kie', 'estas', 'volo', 'tie', 'estas', 'vojo'], correct: ['kie', 'estas', 'volo', 'tie', 'estas', 'vojo'], translation: 'Где воля, там и путь.' },
    { words: ['ĉi', 'tio', 'estas', 'bagatelo', 'ne', 'zorgu'], correct: ['ĉi', 'tio', 'estas', 'bagatelo', 'ne', 'zorgu'], translation: 'Это пустяк, не беспокойся.' },
    { words: ['ŝi', 'lernas', 'kiel', 'fiŝo', 'en', 'akvo'], correct: ['ŝi', 'lernas', 'kiel', 'fiŝo', 'en', 'akvo'], translation: 'Она учится как рыба в воде.' },
    { words: ['ripetado', 'estas', 'la', 'patrino', 'de', 'lernado'], correct: ['ripetado', 'estas', 'la', 'patrino', 'de', 'lernado'], translation: 'Повторение — мать учения.' },
    { words: ['la', 'esperanta', 'proverbaro', 'estas', 'tre', 'riĉa'], correct: ['la', 'esperanta', 'proverbaro', 'estas', 'tre', 'riĉa'], translation: 'Эсперантская сокровищница пословиц очень богата.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 6: Сложное словообразование
   ═══════════════════════════════════════════════════════════ */
{
  id: 'b2-l6',
  title: 'Kompleksa Vortfarado',
  desc: 'Каскады аффиксов, авторские слова',
  xp: 35,
  content: `
    <h3>🧩 Глубина конструирования</h3>
    <p>На уровне B2 ты можешь <b>свободно комбинировать</b> корни и аффиксы, создавая новые слова, которых нет в словаре.</p>

    <h3>🎯 Каскад из 4-5 морфем</h3>
    <table>
      <tr><th>Слово</th><th>Разбор</th><th>Перевод</th></tr>
      <tr><td>malbelulino</td><td>mal- + bel- + -ul- + -in- + -o</td><td>некрасивая женщина</td></tr>
      <tr><td>laborejego</td><td>labor- + -ej- + -eg- + -o</td><td>огромное место работы</td></tr>
      <tr><td>gepatrineto</td><td>ge- + patr- + -in- + -et- + -o</td><td>маленькие родительницы</td></tr>
      <tr><td>relegadinte</td><td>re- + leg- + -ad- + -int- + -e</td><td>перечитав (долго)</td></tr>
      <tr><td>malpurigebla</td><td>mal- + pur- + -ig- + -ebl- + -a</td><td>тот, что можно испачкать</td></tr>
      <tr><td>samideano</td><td>sam- + ide- + -an- + -o</td><td>единомышленник</td></tr>
    </table>

    <h3>🎯 Авторские слова</h3>
    <p>Многие слова вошли в язык благодаря писателям:</p>
    <table>
      <tr><th>Слово</th><th>Автор</th><th>Значение</th></tr>
      <tr><td>esperantisto</td><td>Zamenhof</td><td>эсперантист</td></tr>
      <tr><td>pluredro</td><td>matematikistoj</td><td>многогранник</td></tr>
      <tr><td>komputilo</td><td>moderna</td><td>компьютер</td></tr>
      <tr><td>retpaĝo</td><td>moderna</td><td>веб-страница</td></tr>
      <tr><td>interreto</td><td>moderna</td><td>интернет</td></tr>
    </table>

    <h3>🎯 Сложные корни</h3>
    <table>
      <tr><th>Слово</th><th>Разбор</th></tr>
      <tr><td>fervojo</td><td>fer- (железо) + vojo (дорога) = железная дорога</td></tr>
      <tr><td>ĉefurbo</td><td>ĉef- + urbo = столица</td></tr>
      <tr><td>terpomo</td><td>ter- + pomo = картофель</td></tr>
      <tr><td>noktomezo</td><td>nokt- + mez- + -o = полночь</td></tr>
      <tr><td>labortablo</td><td>labor- + tablo = рабочий стол</td></tr>
      <tr><td>skribotablo</td><td>skrib- + tablo = письменный стол</td></tr>
      <tr><td>lernolibro</td><td>lern- + libro = учебник</td></tr>
      <tr><td>manĝoĉambro</td><td>manĝ- + ĉambro = столовая</td></tr>
    </table>

    <h3>✍️ Примеры в контексте</h3>
    <div class="lesson-example"><span class="eo">La malpurigebla tapiŝo ne plaĉas al mi.</span> — Ковёр, который легко испачкать, мне не нравится.</div>
    <div class="lesson-example"><span class="eo">Ŝi estas mia samideano en la esperanta movado.</span> — Она мой единомышленник в эсперанто-движении.</div>
    <div class="lesson-example"><span class="eo">Mi relegadinte la libron, trovis novajn ideojn.</span> — Перечитав книгу, я нашёл новые идеи.</div>
    <div class="lesson-example"><span class="eo">La lernolibro kuŝas sur la labortablo.</span> — Учебник лежит на рабочем столе.</div>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Kiel vi nomas tiun ilon?</b> <span class="ru">— Как вы называете этот инструмент?</span><br>
      — <b>Tio estas purigilo por fenestroj — fenestropurigilo.</b> <span class="ru">— Это средство для мытья окон — стеклоочиститель.</span><br>
      — <b>Kaj tiu malgranda objekto?</b> <span class="ru">— А этот маленький предмет?</span><br>
      — <b>Ĝi estas malgranda tablo por manĝi — manĝtablo.</b> <span class="ru">— Это маленький стол для еды — обеденный стол.</span>
    </div>

    <div class="lesson-tip">💡 В эсперанто <b>главный корень — последний</b>. Слово <span class="eo">lernolibro</span> — это <b>книга</b> (для учёбы), а не «учение». <span class="eo">libroleto</span> — маленькая книга.</div>
  `,
  exercises: [
    { q: 'Как разобрать слово <b>malbelulino</b>?', opts: ['mal- + bel- + -ul- + -in- + -o', 'malbel- + -ul- + -in- + -o', 'malb- + -el- + -ulino', 'malbelul- + -in- + -o'], ans: 0 },
    { q: 'Что означает <b>laborejego</b>?', opts: ['работник', 'место работы', 'огромное место работы', 'работающий'], ans: 2 },
    { q: 'Что означает <b>samideano</b>?', opts: ['друг', 'единомышленник', 'сосед', 'коллега'], ans: 1 },
    { q: 'Как разобрать <b>fervojo</b>?', opts: ['fer- + vojo', 'ferv- + -oj- + -o', 'fervo- + -j- + -o', 'fe- + rvojo'], ans: 0 },
    { q: 'Что означает <b>terpomo</b>?', opts: ['помидор', 'картофель', 'яблоко', 'морковь'], ans: 1 },
    { q: 'Что означает <b>noktomezo</b>?', opts: ['полдень', 'полночь', 'вечер', 'утро'], ans: 1 },
    { q: 'Что означает <b>lernolibro</b>?', opts: ['книга', 'учебник', 'библиотека', 'писатель'], ans: 1 },
    { q: 'Что означает <b>manĝoĉambro</b>?', opts: ['кухня', 'столовая', 'спальня', 'гостиная'], ans: 1 },
    { q: 'Как разобрать <b>malpurigebla</b>?', opts: ['mal- + pur- + -ig- + -ebl- + -a', 'malpur- + -igebl- + -a', 'mal- + purigebl- + -a', 'malp- + -ur- + -igebla'], ans: 0 },
    { q: 'Какой корень в слове <b>skribotablo</b> — главный?', opts: ['skrib', 'tabl', 'skribot', 'obtabl'], ans: 1 }
  ],
  test: [
    { q: 'Сколько морфем может быть в одном слове?', opts: ['2', '3', '4', 'до 5+'], ans: 3, explain: 'До 5 и больше.' },
    { q: 'Какой корень в сложном слове главный?', opts: ['первый', 'последний', 'средний', 'все равны'], ans: 1, explain: 'Главный — последний.' },
    { q: 'Что означает <b>ĉefurbo</b>?', opts: ['главный город', 'маленький город', 'столица', 'пригород'], ans: 2, explain: 'Ĉef- + urbo.' },
    { q: 'Введите «железная дорога» на эсперанто:', type: 'input', ans: 'fervojo', explain: 'Fer- + vojo.' },
    { q: 'Введите «картофель» на эсперанто:', type: 'input', ans: 'terpomo', explain: 'Ter- + pomo.' },
    { q: 'Введите «полночь» на эсперанто:', type: 'input', ans: 'noktomezo', explain: 'Nokt- + mez- + -o.' },
    { q: 'Введите «учебник» на эсперанто:', type: 'input', ans: 'lernolibro', explain: 'Lern- + libro.' },
    { q: 'Как разобрать <b>gepatrineto</b>?', opts: ['ge- + patr- + -in- + -et- + -o', 'gepatr- + -inet- + -o', 'ge- + patrin- + -et- + -o', 'g- + -epatrin- + -et- + -o'], ans: 0, explain: 'Двойной суффикс.' },
    { q: 'Что означает <b>retpaĝo</b>?', opts: ['страница', 'веб-страница', 'книга', 'газета'], ans: 1, explain: 'Ret- + paĝo.' },
    { q: 'Что означает <b>interreto</b>?', opts: ['интернет', 'сеть', 'связь', 'компьютер'], ans: 0, explain: 'Inter- + ret- + -o.' }
  ],
  builder: [
    { words: ['la', 'lernolibro', 'kuŝas', 'sur', 'la', 'labortablo'], correct: ['la', 'lernolibro', 'kuŝas', 'sur', 'la', 'labortablo'], translation: 'Учебник лежит на рабочем столе.' },
    { words: ['ŝi', 'estas', 'mia', 'samideano', 'en', 'la', 'movado'], correct: ['ŝi', 'estas', 'mia', 'samideano', 'en', 'la', 'movado'], translation: 'Она мой единомышленник в движении.' },
    { words: ['ni', 'manĝas', 'en', 'la', 'manĝoĉambro'], correct: ['ni', 'manĝas', 'en', 'la', 'manĝoĉambro'], translation: 'Мы едим в столовой.' },
    { words: ['la', 'fervojo', 'kondukas', 'al', 'la', 'ĉefurbo'], correct: ['la', 'fervojo', 'kondukas', 'al', 'la', 'ĉefurbo'], translation: 'Железная дорога ведёт к столице.' },
    { words: ['mi', 'relegadinte', 'la', 'libron', 'trovis', 'novajn', 'ideojn'], correct: ['mi', 'relegadinte', 'la', 'libron', 'trovis', 'novajn', 'ideojn'], translation: 'Перечитав книгу, я нашёл новые идеи.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 7: Научно-технический стиль
   ═══════════════════════════════════════════════════════════ */
{
  id: 'b2-l7',
  title: 'Scienca kaj Teknika Stilo',
  desc: 'Научный и технический стиль',
  xp: 35,
  content: `
    <h3>🔬 Что такое научный стиль</h3>
    <p>Научный стиль стремится к <b>точности</b>, <b>объективности</b> и <b>логичности</b>. В нём меньше эмоций, больше фактов и терминов.</p>

    <h3>📊 Ключевые термины</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>scienco</td><td>наука</td></tr>
      <tr><td>sciencisto</td><td>учёный</td></tr>
      <tr><td>esploro</td><td>исследование</td></tr>
      <tr><td>teorio</td><td>теория</td></tr>
      <tr><td>eksperimento</td><td>эксперимент</td></tr>
      <tr><td>rezulto</td><td>результат</td></tr>
      <tr><td>hipotezo</td><td>гипотеза</td></tr>
      <tr><td>konkludo</td><td>вывод</td></tr>
      <tr><td>metodo</td><td>метод</td></tr>
      <tr><td>analizo</td><td>анализ</td></tr>
    </table>

    <h3>🎯 Особенности научного стиля</h3>
    <ul>
      <li><b>Безличность:</b> <span class="eo">Oni observas…</span>, <span class="eo">Estas konate…</span></li>
      <li><b>Пассив:</b> <span class="eo">La fenomeno estis observita…</span></li>
      <li><b>Логические связки:</b> <span class="eo">tial</span>, <span class="eo">sekve</span>, <span class="eo">kontraŭe</span>, <span class="eo">unue… due…</span></li>
      <li><b>Точные термины</b> вместо бытовых слов</li>
      <li><b>Длинные сложные предложения</b></li>
    </ul>

    <h3>📖 Пример научного текста</h3>
    <div class="lesson-example" style="font-size:14.5px;">
      <p><span class="eo"><b>Pri la efiko de Esperanto al lingvolernado</b></span></p>
      <p><span class="eo">En la lastaj jardekoj, pluraj esploroj estis faritaj por studi la efikon de Esperanto al la posta lingvolernado. La hipotezo estas, ke antaŭa studo de Esperanto plifaciligas la lernadon de aliaj lingvoj. Oni observis, ke lernantoj, kiuj unue studis Esperanton, poste lernis la francan pli rapide ol tiuj, kiuj komencis rekte per la franca. La rezultoj de tiuj eksperimentoj estis publikigitaj en pluraj sciencaj revuoj. Sekve, oni povas konkludi, ke Esperanto povas servi kiel propedeŭtika lingvo.</span></p>
    </div>

    <h3>🎯 Логические связки</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>unue</td><td>во-первых</td></tr>
      <tr><td>due</td><td>во-вторых</td></tr>
      <tr><td>tial</td><td>поэтому</td></tr>
      <tr><td>sekve</td><td>следовательно</td></tr>
      <tr><td>kontraŭe</td><td>наоборот</td></tr>
      <tr><td>aliflanke</td><td>с другой стороны</td></tr>
      <tr><td>fine</td><td>наконец</td></tr>
      <tr><td>resume</td><td>в итоге</td></tr>
      <tr><td>kompare</td><td>по сравнению</td></tr>
      <tr><td>nome</td><td>а именно</td></tr>
    </table>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Pri kio temas via esploro?</b> <span class="ru">— О чём ваше исследование?</span><br>
      — <b>Ĝi temas pri la efiko de dulingveco al pensado.</b> <span class="ru">— О влиянии двуязычия на мышление.</span><br>
      — <b>Kiajn metodojn vi uzas?</b> <span class="ru">— Какие методы вы используете?</span><br>
      — <b>Ĉefe eksperimentojn kaj analizojn de datumoj.</b> <span class="ru">— Главным образом эксперименты и анализ данных.</span>
    </div>

    <div class="lesson-tip">💡 Научный стиль в эсперанто практически не отличается от научного стиля в других языках — та же <b>объективность</b> и <b>логика</b>. Эсперанто подходит для науки не хуже английского.</div>
  `,
  exercises: [
    { q: 'Что означает <b>scienco</b>?', opts: ['знание', 'наука', 'школа', 'учёба'], ans: 1 },
    { q: 'Что означает <b>esploro</b>?', opts: ['вопрос', 'исследование', 'ответ', 'эксперимент'], ans: 1 },
    { q: 'Что означает <b>teorio</b>?', opts: ['теория', 'практика', 'гипотеза', 'вывод'], ans: 0 },
    { q: 'Что означает <b>rezulto</b>?', opts: ['вопрос', 'результат', 'метод', 'анализ'], ans: 1 },
    { q: 'Что означает <b>hipotezo</b>?', opts: ['гипотеза', 'теория', 'факт', 'закон'], ans: 0 },
    { q: 'Что означает <b>konkludo</b>?', opts: ['введение', 'вывод', 'анализ', 'наблюдение'], ans: 1 },
    { q: 'Что означает <b>metodo</b>?', opts: ['метод', 'теория', 'результат', 'вывод'], ans: 0 },
    { q: 'Что означает <b>analizo</b>?', opts: ['синтез', 'анализ', 'вывод', 'обзор'], ans: 1 },
    { q: 'Какой регистр использует <b>onl observas</b>?', opts: ['разговорный', 'научный', 'поэтический', 'детский'], ans: 1 },
    { q: 'Что означает <b>sekve</b>?', opts: ['следовательно', 'наоборот', 'во-первых', 'наконец'], ans: 0 }
  ],
  test: [
    { q: 'Какая главная черта научного стиля?', opts: ['эмоциональность', 'объективность', 'краткость', 'рифма'], ans: 1, explain: 'Объективность важнее всего.' },
    { q: 'Что такое <b>eksperimento</b>?', opts: ['теория', 'эксперимент', 'вывод', 'анализ'], ans: 1, explain: 'Eksperimento.' },
    { q: 'Что такое <b>sciencisto</b>?', opts: ['школьник', 'учёный', 'студент', 'учитель'], ans: 1, explain: 'Scienc- + -ist- + -o.' },
    { q: 'Введите «наука» на эсперанто:', type: 'input', ans: 'scienco', explain: 'Scienco.' },
    { q: 'Введите «исследование» на эсперанто:', type: 'input', ans: 'esploro', explain: 'Esploro.' },
    { q: 'Введите «вывод» на эсперанто:', type: 'input', ans: 'konkludo', explain: 'Konkludo.' },
    { q: 'Введите «результат» на эсперанто:', type: 'input', ans: 'rezulto', explain: 'Rezulto.' },
    { q: 'Что означает <b>kompare</b>?', opts: ['сравнивая', 'по сравнению', 'наоборот', 'вместе'], ans: 1, explain: 'Kompar- + -e.' },
    { q: 'Что означает <b>nome</b>?', opts: ['именно', 'а именно', 'по имени', 'называется'], ans: 1, explain: 'Nome = а именно.' },
    { q: 'Что означает <b>aliflanke</b>?', opts: ['с другой стороны', 'сначала', 'наоборот', 'в итоге'], ans: 0, explain: 'Ali- + flank- + -e.' }
  ],
  builder: [
    { words: ['la', 'esploro', 'temas', 'pri', 'la', 'efiko', 'de', 'esperanto'], correct: ['la', 'esploro', 'temas', 'pri', 'la', 'efiko', 'de', 'esperanto'], translation: 'Исследование о влиянии эсперанто.' },
    { words: ['oni', 'povas', 'konkludi', 'ke', 'la', 'rezultoj', 'estas', 'pozitivaj'], correct: ['oni', 'povas', 'konkludi', 'ke', 'la', 'rezultoj', 'estas', 'pozitivaj'], translation: 'Можно сделать вывод, что результаты положительны.' },
    { words: ['unue', 'ni', 'faros', 'eksperimenton', 'due', 'ni', 'analizos', 'la', 'datumojn'], correct: ['unue', 'ni', 'faros', 'eksperimenton', 'due', 'ni', 'analizos', 'la', 'datumojn'], translation: 'Сначала проведём эксперимент, затем проанализируем данные.' },
    { words: ['la', 'metodo', 'estis', 'priskribita', 'en', 'la', 'artikolo'], correct: ['la', 'metodo', 'estis', 'priskribita', 'en', 'la', 'artikolo'], translation: 'Метод был описан в статье.' },
    { words: ['kompare', 'kun', 'aliaj', 'lingvoj', 'esperanto', 'estas', 'pli', 'facila'], correct: ['kompare', 'kun', 'aliaj', 'lingvoj', 'esperanto', 'estas', 'pli', 'facila'], translation: 'По сравнению с другими языками эсперанто легче.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 8: Публицистический стиль
   ═══════════════════════════════════════════════════════════ */
{
  id: 'b2-l8',
  title: 'Publikiga Stilo',
  desc: 'Газетный и журналистский стиль',
  xp: 35,
  content: `
    <h3>📰 Что такое публицистический стиль</h3>
    <p>Публицистика — это тексты для широкой аудитории: <b>газеты</b>, <b>журналы</b>, <b>новости</b>, <b>блоги</b>. Она соединяет факты с оценкой.</p>

    <h3>📊 Ключевые термины</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>gazeto</td><td>газета</td></tr>
      <tr><td>revuo</td><td>журнал</td></tr>
      <tr><td>artikolo</td><td>статья</td></tr>
      <tr><td>novaĵo</td><td>новость</td></tr>
      <tr><td>raporto</td><td>репортаж</td></tr>
      <tr><td>intervjuo</td><td>интервью</td></tr>
      <tr><td>redaktoro</td><td>редактор</td></tr>
      <tr><td>ĵurnalisto</td><td>журналист</td></tr>
      <tr><td>titolo</td><td>заголовок</td></tr>
      <tr><td>rubriko</td><td>рубрика</td></tr>
    </table>

    <h3>🎯 Особенности публицистики</h3>
    <ul>
      <li><b>Краткие предложения</b> — для быстрого чтения</li>
      <li><b>Эмоциональные слова</b> — для воздействия на читателя</li>
      <li><b>Прямая речь</b> и цитаты</li>
      <li><b>Риторические вопросы</b> — чтобы вовлечь</li>
      <li><b>Яркие заголовки</b></li>
      <li><b>Оценочная лексика</b>: <span class="eo">bedaŭrinde</span> (к сожалению), <span class="eo">feliĉe</span> (к счастью)</li>
    </ul>

    <h3>📖 Пример газетного текста</h3>
    <div class="lesson-example" style="font-size:14.5px;">
      <p><span class="eo"><b>Esperanto venkas en lernejoj</b></span></p>
      <p><span class="eo">Pli ol cent lernejoj en Eŭropo nun ofertas Esperanton kiel elekteblan lingvon. Laŭ la raporto de la Eŭropa Esperanto-Unio, la nombro de lernantoj duobliĝis en la lastaj kvin jaroj. «Ni tre ĝojas pri tiu evoluo», diris la prezidanto de la asocio. «Esperanto ne anstataŭas aliajn lingvojn, sed malfermas pordon al ili.» Feliĉe, pli kaj pli da gepatroj komprenas la valoron de tiu ĉi lingvo. Kiel longe tiu tendenco daŭros? Nur la tempo montros.</span></p>
    </div>

    <h3>🎯 Структура статьи</h3>
    <table>
      <tr><th>Часть</th><th>Что содержит</th></tr>
      <tr><td>Titolo</td><td>заголовок — яркий, короткий</td></tr>
      <tr><td>Enkonduko</td><td>введение — главное в 1-2 фразах</td></tr>
      <tr><td>Korpo</td><td>тело — факты, детали, цитаты</td></tr>
      <tr><td>Konkludo</td><td>заключение — вывод или вопрос</td></tr>
    </table>

    <h3>🎯 Оценочная лексика</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>feliĉe</td><td>к счастью</td></tr>
      <tr><td>bedaŭrinde</td><td>к сожалению</td></tr>
      <tr><td>interese</td><td>интересно</td></tr>
      <tr><td>mirinde</td><td>удивительно</td></tr>
      <tr><td>kompreneble</td><td>разумеется</td></tr>
      <tr><td>evidente</td><td>очевидно</td></tr>
    </table>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Ĉu vi legis la hodiaŭan gazeton?</b> <span class="ru">— Вы читали сегодняшнюю газету?</span><br>
      — <b>Ne, kio okazis?</b> <span class="ru">— Нет, что случилось?</span><br>
      — <b>Oni skribas, ke Esperanto estas pli kaj pli populara.</b> <span class="ru">— Пишут, что эсперанто становится всё популярнее.</span><br>
      — <b>Mirinde! Mi legos la artikolon hodiaŭ vespere.</b> <span class="ru">— Удивительно! Прочитаю статью сегодня вечером.</span>
    </div>

    <div class="lesson-tip">💡 Публицистический стиль — <b>средний</b> между формальным и разговорным. Он эмоциональнее научного, но серьёзнее бытового.</div>
  `,
  exercises: [
    { q: 'Что означает <b>gazeto</b>?', opts: ['журнал', 'газета', 'книга', 'статья'], ans: 1 },
    { q: 'Что означает <b>revuo</b>?', opts: ['газета', 'журнал', 'статья', 'новость'], ans: 1 },
    { q: 'Что означает <b>novaĵo</b>?', opts: ['новость', 'статья', 'репортаж', 'интервью'], ans: 0 },
    { q: 'Что означает <b>intervjuo</b>?', opts: ['статья', 'интервью', 'репортаж', 'заметка'], ans: 1 },
    { q: 'Что означает <b>ĵurnalisto</b>?', opts: ['редактор', 'журналист', 'читатель', 'писатель'], ans: 1 },
    { q: 'Что означает <b>titolo</b>?', opts: ['заголовок', 'подзаголовок', 'текст', 'рубрика'], ans: 0 },
    { q: 'Что означает <b>feliĉe</b>?', opts: ['к сожалению', 'к счастью', 'интересно', 'удивительно'], ans: 1 },
    { q: 'Что означает <b>bedaŭrinde</b>?', opts: ['к счастью', 'к сожалению', 'конечно', 'наверное'], ans: 1 },
    { q: 'Что означает <b>mirinde</b>?', opts: ['скучно', 'удивительно', 'обычно', 'странно'], ans: 1 },
    { q: 'Что означает <b>evidente</b>?', opts: ['очевидно', 'скрыто', 'возможно', 'точно'], ans: 0 }
  ],
  test: [
    { q: 'Какая черта публицистики?', opts: ['строгость', 'эмоциональность + факты', 'только факты', 'только мнения'], ans: 1, explain: 'Сочетание.' },
    { q: 'Что такое <b>redaktoro</b>?', opts: ['журналист', 'редактор', 'автор', 'читатель'], ans: 1, explain: 'Редактор.' },
    { q: 'Что такое <b>artikolo</b>?', opts: ['статья', 'газета', 'заголовок', 'рубрика'], ans: 0, explain: 'Статья.' },
    { q: 'Введите «газета» на эсперанто:', type: 'input', ans: 'gazeto', explain: 'Gazeto.' },
    { q: 'Введите «журналист» на эсперанто:', type: 'input', ans: 'ĵurnalisto', explain: 'Ĵurnal- + -ist- + -o.' },
    { q: 'Введите «новость» на эсперанто:', type: 'input', ans: 'novaĵo', explain: 'Nov- + -aĵ- + -o.' },
    { q: 'Введите «интервью» на эсперанто:', type: 'input', ans: 'intervjuo', explain: 'Intervjuo.' },
    { q: 'Что такое <b>rubriko</b>?', opts: ['заголовок', 'рубрика', 'редактор', 'статья'], ans: 1, explain: 'Раздел газеты.' },
    { q: 'Какая структура статьи?', opts: ['введение-тело-вывод', 'только факты', 'только цитаты', 'без структуры'], ans: 0, explain: 'Классическая структура.' },
    { q: 'Какой вопрос используют для вовлечения?', opts: ['обычный', 'риторический', 'специальный', 'альтернативный'], ans: 1, explain: 'Риторический вопрос.' }
  ],
  builder: [
    { words: ['mi', 'legis', 'interesan', 'artikolon', 'en', 'la', 'gazeto'], correct: ['mi', 'legis', 'interesan', 'artikolon', 'en', 'la', 'gazeto'], translation: 'Я прочитал интересную статью в газете.' },
    { words: ['la', 'ĵurnalisto', 'faris', 'intervjuon', 'kun', 'la', 'profesoro'], correct: ['la', 'ĵurnalisto', 'faris', 'intervjuon', 'kun', 'la', 'profesoro'], translation: 'Журналист взял интервью у профессора.' },
    { words: ['bedaŭrinde', 'la', 'novaĵo', 'estis', 'malĝoja'], correct: ['bedaŭrinde', 'la', 'novaĵo', 'estis', 'malĝoja'], translation: 'К сожалению, новость была печальной.' },
    { words: ['feliĉe', 'la', 'situacio', 'pliboniĝas'], correct: ['feliĉe', 'la', 'situacio', 'pliboniĝas'], translation: 'К счастью, ситуация улучшается.' },
    { words: ['la', 'titolo', 'de', 'la', 'artikolo', 'estis', 'tre', 'bela'], correct: ['la', 'titolo', 'de', 'la', 'artikolo', 'estis', 'tre', 'bela'], translation: 'Заголовок статьи был очень красивым.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 9: История эсперанто
   ═══════════════════════════════════════════════════════════ */
{
  id: 'b2-l9',
  title: 'Historio de Esperanto',
  desc: 'От Заменгофа до наших дней',
  xp: 35,
  content: `
    <h3>📜 Как всё началось</h3>
    <p>Эсперанто создал <b>Людвик Лазарь Заменгоф</b> (1859–1917) — польский врач и лингвист из Белостока. С детства он мечтал о языке, который объединит людей.</p>

    <h3>📊 Ключевые даты</h3>
    <table>
      <tr><th>Год</th><th>Событие</th></tr>
      <tr><td>1859</td><td>рождение Заменгофа в Белостоке</td></tr>
      <tr><td>1878</td><td>первая версия языка (Lingwe Uniwersala)</td></tr>
      <tr><td>1887</td><td>публикация «Unua Libro» — рождение эсперанто</td></tr>
      <tr><td>1905</td><td>первый Всемирный конгресс в Булони</td></tr>
      <tr><td>1908</td><td>основание UEA (Всемирная ассоциация эсперанто)</td></tr>
      <tr><td>1917</td><td>смерть Заменгофа в Варшаве</td></tr>
      <tr><td>1920</td><td>предложение Лиги Наций принять эсперанто</td></tr>
      <tr><td>1954</td><td>резолюция ЮНЕСКО о поддержке эсперанто</td></tr>
      <tr><td>1985</td><td>вторая резолюция ЮНЕСКО</td></tr>
      <tr><td>1987</td><td>столетие эсперанто — конгресс в Варшаве</td></tr>
    </table>

    <h3>🎯 Главные организации</h3>
    <table>
      <tr><th>Организация</th><th>Основана</th><th>Что делает</th></tr>
      <tr><td>UEA</td><td>1908</td><td>Всемирная ассоциация эсперанто, Женева</td></tr>
      <tr><td>TEJO</td><td>1938</td><td>Молодёжная секция UEA</td></tr>
      <tr><td>ILEI</td><td>1949</td><td>Учителя эсперанто</td></tr>
      <tr><td>Akademio</td><td>1905</td><td>Академия эсперанто — хранитель языка</td></tr>
    </table>

    <h3>📖 Из «Unua Libro» (1887)</h3>
    <div class="lesson-example" style="font-size:14.5px;">
      <p><span class="eo">«Mi prezentas al vi la lingvon internacian, kiel mi ĝin komprenas, kaj mi petas vin, ke vi legu ĝin atente, kaj ke vi donu vian opinion pri ĝi.»</span></p>
      <p style="font-size:13px; color:var(--muted); margin-top:8px;">«Я представляю вам международный язык, как я его понимаю, и прошу вас прочитать его внимательно и высказать своё мнение о нём.» — Заменгоф, «Unua Libro», 1887.</p>
    </div>

    <h3>🎯 Распространение эсперанто</h3>
    <ul>
      <li><b>1887</b> — 1000 экземпляров «Unua Libro»</li>
      <li><b>1905</b> — 688 участников первого конгресса</li>
      <li><b>2024</b> — по разным оценкам, от 100 000 до 2 000 000 говорящих</li>
      <li>Изучается в школах и вузах в ряде стран</li>
      <li>Используется в семье (около 2000 «эсперанто-семей»)</li>
    </ul>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Kiu kreis Esperanton?</b> <span class="ru">— Кто создал эсперанто?</span><br>
      — <b>Ludoviko Lazaro Zamenhof, pola kuracisto.</b> <span class="ru">— Людвик Лазарь Заменгоф, польский врач.</span><br>
      — <b>Kiam ĝi aperis?</b> <span class="ru">— Когда он появился?</span><br>
      — <b>En 1887, per la libro «Unua Libro».</b> <span class="ru">— В 1887 году, с книгой «Первая книга».</span>
    </div>

    <div class="lesson-tip">💡 Своё название язык получил от псевдонима Заменгофа — <b>Doktoro Esperanto</b> («надеющийся»). Сначала язык назывался просто «Lingvo Internacia».</div>
  `,
  exercises: [
    { q: 'Кто создал эсперанто?', opts: ['Толстой', 'Заменгоф', 'Калочай', 'Багhy'], ans: 1 },
    { q: 'В каком году вышел «Unua Libro»?', opts: ['1859', '1878', '1887', '1905'], ans: 2 },
    { q: 'Где родился Заменгоф?', opts: ['Варшава', 'Белосток', 'Вильнюс', 'Москва'], ans: 1 },
    { q: 'Что означает «Esperanto»?', opts: ['надеющийся', 'знающий', 'говорящий', 'учащий'], ans: 0 },
    { q: 'Как назывался первый вариант языка?', opts: ['Esperanto', 'Lingwe Uniwersala', 'Lingvo Internacia', 'Universalo'], ans: 1 },
    { q: 'Когда основана UEA?', opts: ['1887', '1905', '1908', '1917'], ans: 2 },
    { q: 'Что такое «Unua Libro»?', opts: ['первая книга', 'вторая книга', 'учебник', 'словарь'], ans: 0 },
    { q: 'Когда умер Заменгоф?', opts: ['1905', '1917', '1920', '1930'], ans: 1 },
    { q: 'Какая организация UNESCO поддержала эсперанто?', opts: ['UEA', 'UN', 'UNESCO', 'EU'], ans: 2 },
    { q: 'Сколько лет между рождением и первым конгрессом?', opts: ['30', '46', '50', '60'], ans: 1 }
  ],
  test: [
    { q: 'В каком году родился Заменгоф?', opts: ['1850', '1859', '1870', '1887'], ans: 1, explain: '1859 год.' },
    { q: 'Что такое UEA?', opts: ['университет', 'Всемирная ассоциация эсперанто', 'журнал', 'тип языка'], ans: 1, explain: 'Universala Esperanto-Asocio.' },
    { q: 'Какая организация управляет языком?', opts: ['UEA', 'Akademio', 'TEJO', 'ILEI'], ans: 1, explain: 'Akademio de Esperanto.' },
    { q: 'Введите «эсперанто-движение»:', type: 'input', ans: 'esperanta movado', explain: 'Esperanta movado.' },
    { q: 'Введите «Всемирный конгресс»:', type: 'input', ans: 'universala kongreso', explain: 'Universala kongreso.' },
    { q: 'Введите «Академия эсперанто»:', type: 'input', ans: 'akademio de esperanto', explain: 'Akademio de Esperanto.' },
    { q: 'Введите «основатель» на эсперанто:', type: 'input', ans: 'fondinto', explain: 'Fond- + -int- + -o.' },
    { q: 'Кто был автором «Unua Libro»?', opts: ['Kalocsay', 'Zamenhof', 'Baghy', 'Auld'], ans: 1, explain: 'Zamenhof.' },
    { q: 'Когда состоялся первый Всемирный конгресс?', opts: ['1887', '1905', '1908', '1920'], ans: 1, explain: 'Булонь-сюр-Мер, 1905.' },
    { q: 'Как UNESCO относится к эсперанто?', opts: ['игнорирует', 'поддерживает', 'запрещает', 'критикует'], ans: 1, explain: 'Две резолюции 1954 и 1985.' }
  ],
  builder: [
    { words: ['zamenhof', 'kreis', 'la', 'lingvon', 'esperanto'], correct: ['zamenhof', 'kreis', 'la', 'lingvon', 'esperanto'], translation: 'Заменгоф создал язык эсперанто.' },
    { words: ['la', 'unua', 'libro', 'aperis', 'en', '1887'], correct: ['la', 'unua', 'libro', 'aperis', 'en', '1887'], translation: '«Первая книга» появилась в 1887 году.' },
    { words: ['la', 'esperanta', 'movado', 'kreskas', 'jam', 'pli', 'ol', 'cent', 'jarojn'], correct: ['la', 'esperanta', 'movado', 'kreskas', 'jam', 'pli', 'ol', 'cent', 'jarojn'], translation: 'Движение эсперанто растёт уже более ста лет.' },
    { words: ['uea', 'estis', 'fondita', 'en', 'la', 'jaro', '1908'], correct: ['uea', 'estis', 'fondita', 'en', 'la', 'jaro', '1908'], translation: 'UEA была основана в 1908 году.' },
    { words: ['la', 'esperanto', 'estas', 'agnoskita', 'de', 'unesco'], correct: ['la', 'esperanto', 'estas', 'agnoskita', 'de', 'unesco'], translation: 'Эсперанто признан UNESCO.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 10: Fundamento и Заменгоф
   ═══════════════════════════════════════════════════════════ */
{
  id: 'b2-l10',
  title: 'Fundamento kaj Zamenhof',
  desc: 'Fundamento de Esperanto и наследие Заменгофа',
  xp: 35,
  content: `
    <h3>📖 Что такое Fundamento</h3>
    <p><b>Fundamento de Esperanto</b> — основной документ языка, опубликованный в 1905 году. Он содержит <b>16 правил грамматики</b>, <b>словарь</b> и <b>примеры</b>. Его нельзя изменить — это «конституция» эсперанто.</p>

    <h3>📊 Три части Fundamento</h3>
    <table>
      <tr><th>Часть</th><th>Содержание</th></tr>
      <tr><td>Antaŭparolo</td><td>предисловие Заменгофа</td></tr>
      <tr><td>Gramatiko</td><td>16 правил грамматики (на 5 языках)</td></tr>
      <tr><td>Ekzercaro</td><td>сборник примеров</td></tr>
      <tr><td>Universala Vortaro</td><td>универсальный словарь</td></tr>
    </table>

    <h3>🎯 16 правил — обзор</h3>
    <table>
      <tr><th>№</th><th>Правило</th></tr>
      <tr><td>1</td><td>Артикль <b>la</b> неизменяем</td></tr>
      <tr><td>2</td><td>Сущ. на <b>-o</b>, мн. <b>-oj</b>, вин. <b>-on</b></td></tr>
      <tr><td>3</td><td>Прил. на <b>-a</b>, согласуется с сущ.</td></tr>
      <tr><td>4</td><td>Числительные: unu, du, tri…</td></tr>
      <tr><td>5</td><td>Местоимения: mi, vi, li, ŝi, ĝi, ni, ili, oni, si</td></tr>
      <tr><td>6</td><td>Глаголы: -as, -is, -os, -us, -u, -i</td></tr>
      <tr><td>7</td><td>Наречия на <b>-e</b></td></tr>
      <tr><td>8</td><td>Предлоги + именительный</td></tr>
      <tr><td>9</td><td>Каждая буква = один звук</td></tr>
      <tr><td>10</td><td>Ударение на предпоследнем слоге</td></tr>
      <tr><td>11</td><td>Сложные слова — простое склеивание корней</td></tr>
      <tr><td>12</td><td>Отрицание <b>ne</b></td></tr>
      <tr><td>13</td><td>Винительный для направления: <b>en domon</b></td></tr>
      <tr><td>14</td><td>Предлог <b>je</b> — универсальный</td></tr>
      <tr><td>15</td><td>Заимствованные слова — без изменений</td></tr>
      <tr><td>16</td><td>Окончание <b>-o</b> можно опускать в поэзии</td></tr>
    </table>

    <h3>🎯 Наследие Заменгофа</h3>
    <table>
      <tr><th>Произведение</th><th>Год</th></tr>
      <tr><td>Unua Libro</td><td>1887</td></tr>
      <tr><td>Dua Libro</td><td>1888</td></tr>
      <tr><td>Aldono al la Dua Libro</td><td>1889</td></tr>
      <tr><td>Fundamento de Esperanto</td><td>1905</td></tr>
      <tr><td>Homaranismo (философия)</td><td>1906</td></tr>
    </table>

    <h3>📖 Из предисловия Fundamento</h3>
    <div class="lesson-example" style="font-size:14.5px;">
      <p><span class="eo">«La Fundamento devas esti rigardata kiel la sola kaj ĉiam deviga fundamento de nia lingvo, kiun neniu havas la rajton ŝanĝi.»</span></p>
      <p style="font-size:13px; color:var(--muted); margin-top:8px;">«Fundamento следует рассматривать как единственную и всегда обязательную основу нашего языка, которую никто не имеет права изменять.» — Заменгоф, 1905.</p>
    </div>

    <h3>🎯 Принципы «interna ideo»</h3>
    <ul>
      <li><b>Interna ideo</b> — внутренняя идея: язык как инструмент мира и взаимопонимания</li>
      <li><b>Homaranismo</b> — философия равенства всех людей</li>
      <li><b>Neŭtraleco</b> — нейтральность языка</li>
      <li><b>Racio</b> — разумность конструкции</li>
    </ul>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Kio estas la Fundamento?</b> <span class="ru">— Что такое Fundamento?</span><br>
      — <b>Ĝi estas la baza dokumento de Esperanto, eldonita en 1905.</b> <span class="ru">— Это базовый документ эсперанто, опубликованный в 1905 году.</span><br>
      — <b>Kion ĝi enhavas?</b> <span class="ru">— Что он содержит?</span><br>
      — <b>Dek ses regulojn, ekzemplojn kaj vortaron.</b> <span class="ru">— 16 правил, примеры и словарь.</span>
    </div>

    <div class="lesson-tip">💡 Fundamento — <b>неизменяемая основа</b>. Это гарантирует, что язык не развалится на диалекты. Никто не может менять базовые правила.</div>
  `,
  exercises: [
    { q: 'Что такое Fundamento de Esperanto?', opts: ['словарь', 'базовый документ языка', 'журнал', 'учебник'], ans: 1 },
    { q: 'Когда вышел Fundamento?', opts: ['1887', '1905', '1908', '1917'], ans: 1 },
    { q: 'Сколько правил в Fundamento?', opts: ['10', '12', '16', '20'], ans: 2 },
    { q: 'Что означает <b>interna ideo</b>?', opts: ['внутренняя идея', 'внешняя идея', 'главная буква', 'основа слова'], ans: 0 },
    { q: 'Что такое Homaranismo?', opts: ['философия равенства', 'движение', 'праздник', 'словарь'], ans: 0 },
    { q: 'Что такое <b>neŭtraleco</b>?', opts: ['нейтральность', 'скорость', 'красота', 'сила'], ans: 0 },
    { q: 'Можно ли менять правила Fundamento?', opts: ['да', 'нет', 'только с разрешения', 'иногда'], ans: 1 },
    { q: 'Что содержит Ekzercaro?', opts: ['правила', 'примеры', 'слова', 'буквы'], ans: 1 },
    { q: 'Что содержит Universala Vortaro?', opts: ['правила', 'примеры', 'слова', 'буквы'], ans: 2 },
    { q: 'Зачем нужен Fundamento?', opts: ['для красоты', 'для стабильности языка', 'для скорости', 'для поэзии'], ans: 1 }
  ],
  test: [
    { q: 'Что нельзя делать с Fundamento?', opts: ['читать', 'менять', 'переводить', 'печатать'], ans: 1, explain: 'Его нельзя изменить.' },
    { q: 'Из скольких частей состоит Fundamento?', opts: ['2', '3', '4', '5'], ans: 2, explain: 'Предисловие, грамматика, упражнения, словарь.' },
    { q: 'Какое правило №10?', opts: ['артикль', 'ударение', 'глаголы', 'предлоги'], ans: 1, explain: 'Ударение на предпоследнем слоге.' },
    { q: 'Введите «основа» на эсперанто:', type: 'input', ans: 'fundamento', explain: 'Fundamento.' },
    { q: 'Введите «предисловие» на эсперанто:', type: 'input', ans: 'antaŭparolo', explain: 'Antaŭ- + parol- + -o.' },
    { q: 'Введите «правило» на эсперанто:', type: 'input', ans: 'regulo', explain: 'Regulo.' },
    { q: 'Введите «пример» на эсперанто:', type: 'input', ans: 'ekzemplo', explain: 'Ekzemplo.' },
    { q: 'Что такое <b>homaranismo</b>?', opts: ['философия', 'грамматика', 'журнал', 'праздник'], ans: 0, explain: 'Философия Заменгофа.' },
    { q: 'Сколько языков в Fundamento?', opts: ['3', '5', '7', '10'], ans: 1, explain: 'На 5 языках.' },
    { q: 'Что содержит Universala Vortaro?', opts: ['правила', 'слова', 'упражнения', 'стихи'], ans: 1, explain: 'Словарь.' }
  ],
  builder: [
    { words: ['la', 'fundamento', 'estas', 'la', 'bazo', 'de', 'esperanto'], correct: ['la', 'fundamento', 'estas', 'la', 'bazo', 'de', 'esperanto'], translation: 'Fundamento — основа эсперанто.' },
    { words: ['neniu', 'havas', 'la', 'rajton', 'ŝanĝi', 'la', 'fundamenton'], correct: ['neniu', 'havas', 'la', 'rajton', 'ŝanĝi', 'la', 'fundamenton'], translation: 'Никто не имеет права менять Fundamento.' },
    { words: ['la', 'interna', 'ideo', 'de', 'esperanto', 'estas', 'paco', 'kaj', 'kompreniĝo'], correct: ['la', 'interna', 'ideo', 'de', 'esperanto', 'estas', 'paco', 'kaj', 'kompreniĝo'], translation: 'Внутренняя идея эсперанто — мир и взаимопонимание.' },
    { words: ['la', 'fundamento', 'enhavas', 'dek', 'ses', 'regulojn'], correct: ['la', 'fundamento', 'enhavas', 'dek', 'ses', 'regulojn'], translation: 'Fundamento содержит шестнадцать правил.' },
    { words: ['zamenhof', 'volis', 'krei', 'neŭtralan', 'lingvon'], correct: ['zamenhof', 'volis', 'krei', 'neŭtralan', 'lingvon'], translation: 'Заменгоф хотел создать нейтральный язык.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 11: Творческое письмо
   ═══════════════════════════════════════════════════════════ */
{
  id: 'b2-l11',
  title: 'Krea Skribado',
  desc: 'Художественное письмо и творчество',
  xp: 35,
  content: `
    <h3>✍️ Что такое творческое письмо</h3>
    <p><b>Творческое письмо</b> — это создание собственных текстов: рассказов, стихов, эссе, дневников. Здесь важны <b>голос</b> автора, <b>образы</b> и <b>эмоции</b>.</p>

    <h3>📊 Ключевые термины</h3>
    <table>
      <tr><th>Esperanto</th><th>Русский</th></tr>
      <tr><td>krei</td><td>создавать</td></tr>
      <tr><td>verki</td><td>писать (художественно)</td></tr>
      <tr><td>verkisto</td><td>писатель</td></tr>
      <tr><td>rakonto</td><td>рассказ</td></tr>
      <tr><td>romano</td><td>роман</td></tr>
      <tr><td>novelo</td><td>новелла</td></tr>
      <tr><td>poemo</td><td>стихотворение</td></tr>
      <tr><td>eseo</td><td>эссе</td></tr>
      <tr><td>taglibro</td><td>дневник</td></tr>
      <tr><td>inspiro</td><td>вдохновение</td></tr>
    </table>

    <h3>🎯 Три шага писателя</h3>
    <table>
      <tr><th>Шаг</th><th>Что делать</th></tr>
      <tr><td>1. Ideo</td><td>найти идею — о чём писать?</td></tr>
      <tr><td>2. Skizo</td><td>набросок — план и ключевые сцены</td></tr>
      <tr><td>3. Verkado</td><td>написание — черновик, правка</td></tr>
    </table>

    <h3>🎯 Советы для творческого письма</h3>
    <ul>
      <li>Пиши <b>регулярно</b> — даже 10 минут в день</li>
      <li>Используй <b>конкретные детали</b> — не «красивый дом», а «дом с красной крышей»</li>
      <li>Показывай, не рассказывай: <span class="eo">Ŝi tremis</span> лучше, чем <span class="eo">Ŝi timis</span></li>
      <li>Читай <b>вслух</b> — это помогает поймать ритм</li>
      <li>Не бойся <b>черновиков</b></li>
    </ul>

    <h3>📖 Пример мини-рассказа</h3>
    <div class="lesson-example" style="font-size:14.5px;">
      <p><span class="eo"><b>La lumo en la fenestro</b></span></p>
      <p><span class="eo">Ĉiun vesperon, kiam la suno malaperis malantaŭ la montoj, ŝi ekbruligis malgrandan lampon en la fenestro. Ŝi diris al si, ke ĝi estas por ŝi. Sed profunde en ŝia koro, ŝi sciis, ke ĝi estas por li — por tiu, kiu iam promesis reveni. La jaroj pasis. La lampo daŭre brulis. Kaj unu nokton, kiam la neĝo kovris la vojon, aperis silentaj paŝoj antaŭ la pordo.</span></p>
    </div>

    <h3>🎯 Жанры</h3>
    <table>
      <tr><th>Жанр</th><th>Характеристики</th></tr>
      <tr><td>Novelo</td><td>короткий рассказ с неожиданным финалом</td></tr>
      <tr><td>Romano</td><td>большое произведение с развёрнутым сюжетом</td></tr>
      <tr><td>Eseo</td><td>размышление на тему</td></tr>
      <tr><td>Taglibro</td><td>личные записи</td></tr>
      <tr><td>Fabelo</td><td>сказка, часто с моралью</td></tr>
      <tr><td>Poezio</td><td>стихи с ритмом и рифмой</td></tr>
    </table>

    <h3>🗣️ Диалог</h3>
    <div class="lesson-dialog">
      — <b>Kion vi verkas nun?</b> <span class="ru">— Что вы сейчас пишете?</span><br>
      — <b>Malgrandan novelon pri amo kaj perdo.</b> <span class="ru">— Маленькую новеллу о любви и утрате.</span><br>
      — <b>Kie vi prenas inspiron?</b> <span class="ru">— Откуда вы берёте вдохновение?</span><br>
      — <b>El la ĉiutaga vivo. Ĉio povas esti rakonto.</b> <span class="ru">— Из повседневной жизни. Всё может стать рассказом.</span>
    </div>

    <div class="lesson-tip">💡 Первое правило писателя — <b>писать каждый день</b>. Даже если это всего несколько предложений. Регулярность важнее таланта.</div>
  `,
  exercises: [
    { q: 'Что означает <b>verki</b>?', opts: ['читать', 'писать (художественно)', 'говорить', 'переводить'], ans: 1 },
    { q: 'Что означает <b>rakonto</b>?', opts: ['роман', 'рассказ', 'стих', 'эссе'], ans: 1 },
    { q: 'Что означает <b>romano</b>?', opts: ['роман', 'новелла', 'эссе', 'дневник'], ans: 0 },
    { q: 'Что означает <b>novelo</b>?', opts: ['роман', 'новелла', 'сказка', 'дневник'], ans: 1 },
    { q: 'Что означает <b>eseo</b>?', opts: ['рассказ', 'эссе', 'роман', 'стих'], ans: 1 },
    { q: 'Что означает <b>taglibro</b>?', opts: ['книга дня', 'дневник', 'ежедневник', 'журнал'], ans: 1 },
    { q: 'Что означает <b>inspiro</b>?', opts: ['вдохновение', 'идея', 'план', 'мечта'], ans: 0 },
    { q: 'Какой первый шаг писателя?', opts: ['идея', 'план', 'черновик', 'правка'], ans: 0 },
    { q: 'Что лучше «Ŝi tremis» или «Ŝi timis»?', opts: ['первое (показать)', 'второе (сказать)', 'оба равны', 'ничего'], ans: 0 },
    { q: 'Как часто нужно писать?', opts: ['раз в месяц', 'регулярно', 'только по вдохновению', 'никогда'], ans: 1 }
  ],
  test: [
    { q: 'Что такое «krea skribado»?', opts: ['техническое письмо', 'творческое письмо', 'официальное письмо', 'личное'], ans: 1, explain: 'Krea = творческое.' },
    { q: 'Сколько шагов у писателя?', opts: ['1', '2', '3', '4'], ans: 2, explain: 'Идея, набросок, написание.' },
    { q: 'Что важнее таланта?', opts: ['вдохновение', 'регулярность', 'деньги', 'время'], ans: 1, explain: 'Писать каждый день.' },
    { q: 'Введите «писатель» на эсперанто:', type: 'input', ans: 'verkisto', explain: 'Verk- + -ist- + -o.' },
    { q: 'Введите «вдохновение» на эсперанто:', type: 'input', ans: 'inspiro', explain: 'Inspiro.' },
    { q: 'Введите «дневник» на эсперанто:', type: 'input', ans: 'taglibro', explain: 'Tag- + libr- + -o.' },
    { q: 'Введите «новелла» на эсперанто:', type: 'input', ans: 'novelo', explain: 'Novelo.' },
    { q: 'Что важнее — показать или рассказать?', opts: ['показать', 'рассказать', 'одинаково', 'ничего'], ans: 0, explain: 'Показать через детали.' },
    { q: 'Что помогает поймать ритм?', opts: ['читать про себя', 'читать вслух', 'не читать', 'переводить'], ans: 1, explain: 'Чтение вслух.' },
    { q: 'Что такое <b>fabelo</b>?', opts: ['роман', 'сказка', 'стих', 'эссе'], ans: 1, explain: 'Fabelo = сказка.' }
  ],
  builder: [
    { words: ['mi', 'verkas', 'malgrandan', 'novelon', 'pri', 'amo'], correct: ['mi', 'verkas', 'malgrandan', 'novelon', 'pri', 'amo'], translation: 'Я пишу маленькую новеллу о любви.' },
    { words: ['la', 'verkisto', 'skribas', 'ĉiutage', 'por', 'plibonigi'], correct: ['la', 'verkisto', 'skribas', 'ĉiutage', 'por', 'plibonigi'], translation: 'Писатель пишет каждый день, чтобы улучшаться.' },
    { words: ['inspiro', 'venas', 'el', 'la', 'ĉiutaga', 'vivo'], correct: ['inspiro', 'venas', 'el', 'la', 'ĉiutaga', 'vivo'], translation: 'Вдохновение приходит из повседневной жизни.' },
    { words: ['ne', 'timu', 'fari', 'malbonajn', 'unuan', 'versiojn'], correct: ['ne', 'timu', 'fari', 'malbonajn', 'unuan', 'versiojn'], translation: 'Не бойся делать плохие первые версии.' },
    { words: ['la', 'plej', 'bona', 'maniero', 'lerni', 'skribi', 'estas', 'skribi'], correct: ['la', 'plej', 'bona', 'maniero', 'lerni', 'skribi', 'estas', 'skribi'], translation: 'Лучший способ научиться писать — это писать.' }
  ]
},

/* ═══════════════════════════════════════════════════════════
   УРОК 12: Итоговая практика
   ═══════════════════════════════════════════════════════════ */
{
  id: 'b2-l12',
  title: 'Fina Praktiko',
  desc: 'Итоговая практика всех тем B2',
  xp: 35,
  content: `
    <h3>🎓 Что мы прошли в B2</h3>
    <ul>
      <li><b>Стилистические регистры</b> — формальный, разговорный, поэтический</li>
      <li><b>Анализ прозы</b> — рассказчик, сюжет, атмосфера, тема</li>
      <li><b>Поэзия</b> — ритм, рифма, метрика</li>
      <li><b>Перевод</b> — эквивалентный подход, ложные друзья</li>
      <li><b>Идиоматика</b> — пословицы, устойчивые выражения</li>
      <li><b>Сложное словообразование</b> — каскады аффиксов</li>
      <li><b>Научный стиль</b> — объективность, логические связки</li>
      <li><b>Публицистика</b> — заголовки, оценка, структура статьи</li>
      <li><b>История эсперанто</b> — от Заменгофа до наших дней</li>
      <li><b>Fundamento</b> — 16 правил, неизменяемая основа</li>
      <li><b>Творческое письмо</b> — рассказы, стихи, дневники</li>
    </ul>

    <h3>📖 Текст для итогового анализа</h3>
    <div class="lesson-example" style="font-size:14.5px;">
      <p><span class="eo"><b>Vojo al la steloj</b></span></p>
      <p><span class="eo">En malgranda vilaĝo apud Varsovio, knabo nomata Ludoviko ofte rigardis la stelojn. Lia patro estis instruisto, lia patrino — hejma mastrino. En la stratoj de ilia urbo, homoj parolis kvar malsamajn lingvojn, kaj ofte ili ne komprenis unu la alian. Tial la knabo demandis al si: «Kial homoj kverelas, se ili povus kompreni unu la alian?»</span></p>
      <p><span class="eo">Tiu demando restis kun li por la tuta vivo. Post multaj jaroj, en 1887, li publikigis malgrandan libron, kiu ŝanĝis la mondon. «La lingvo internacia, — li skribis, — devas esti la komuna posedaĵo de la tuta homaro.» Kaj la mondo respondis — komence per cent leteroj, poste per mil, poste per centmiloj.</span></p>
      <p><span class="eo">Hodiaŭ, pli ol cent jarojn poste, la vojo al la steloj ankoraŭ estas longa. Sed en pli ol cent landoj, homoj daŭre parolas tiun lingvon. Kaj eble — eĉ certe — ie malproksime, iu alia knabo aŭ knabino nun rigardas la stelojn kaj demandas al si la saman demandon.</span></p>
    </div>

    <h3>🎯 Разбор</h3>
    <table>
      <tr><th>Элемент</th><th>В этом тексте</th></tr>
      <tr><td>Rakontanto</td><td>3-е лицо, всеведущий</td></tr>
      <tr><td>Temo</td><td>мечта, путь, преемственность</td></tr>
      <tr><td>Etoso</td><td>философская, ностальгическая</td></tr>
      <tr><td>Simbolo</td><td>стелoj — мечта, будущее</td></tr>
      <tr><td>Stilo</td><td>простой, но поэтичный</td></tr>
    </table>

    <h3>📖 Финальное стихотворение</h3>
    <div class="lesson-example" style="font-size:14.5px; font-style: italic;">
      <p><span class="eo">Sur la vojo de l' espero,<br>
      Iras ni kun kora vero.<br>
      Nova mondo nin atendas,<br>
      Nova lingvo nin defendas.</span></p>
      <p style="font-size:13px; color:var(--muted); margin-top:8px;">Схема рифмы: AABB (parigita). Размер: troĥeo.</p>
    </div>

    <h3>🎯 Что ты теперь можешь</h3>
    <ul>
      <li>Читать <b>оригинальную литературу</b> на эсперанто</li>
      <li>Писать <b>эссе, рассказы, стихи</b></li>
      <li>Переводить <b>художественные тексты</b></li>
      <li>Различать <b>стилистические регистры</b></li>
      <li>Понимать <b>идиомы и пословицы</b></li>
      <li>Участвовать в <b>дискуссиях</b> на любые темы</li>
      <li>Использовать <b>сложное словообразование</b></li>
    </ul>

    <h3>🚀 Что дальше — C1</h3>
    <p>На уровне C1 изучают <b>профессиональное владение</b>: преподавание, редактура, перевод сложных текстов, стилистическая экспертиза. Это уровень свободного носителя.</p>

    <h3>🗣️ Финальный диалог</h3>
    <div class="lesson-dialog">
      — <b>Kion vi lernis en ĉi tiu kurso?</b> <span class="ru">— Что вы изучили в этом курсе?</span><br>
      — <b>Multon. Precipe — ke lingvo estas viva organismo.</b> <span class="ru">— Многое. Главное — что язык это живой организм.</span><br>
      — <b>Kaj kion vi faros nun?</b> <span class="ru">— А что вы будете делать теперь?</span><br>
      — <b>Legos, skribos, parolos. Lernado neniam finiĝas.</b> <span class="ru">— Буду читать, писать, говорить. Учение никогда не заканчивается.</span>
    </div>

    <div class="lesson-tip">💡 <b>Gratulon!</b> Ты завершил курс B2. Теперь ты способен свободно читать, писать и общаться на эсперанто. La mondo estas via! 🌍</div>
  `,
  exercises: [
    { q: 'Что такое <b>rakontanto</b> в тексте?', opts: ['автор', 'рассказчик', 'персонаж', 'читатель'], ans: 1 },
    { q: 'Что символизируют звёзды в тексте?', opts: ['ночь', 'мечту и будущее', 'космос', 'одиночество'], ans: 1 },
    { q: 'В каком году вышел «Unua Libro»?', opts: ['1859', '1887', '1905', '1917'], ans: 1 },
    { q: 'Что означает <b>simbolo</b>?', opts: ['символ', 'знак', 'образ', 'идея'], ans: 0 },
    { q: 'Что такое <b>eseo</b>?', opts: ['рассказ', 'эссе', 'роман', 'стих'], ans: 1 },
    { q: 'Что такое <b>proverbo</b>?', opts: ['пословица', 'грамматика', 'слово', 'буква'], ans: 0 },
    { q: 'Что такое <b>metaforo</b>?', opts: ['скрытое сравнение', 'прямое сравнение', 'повтор', 'вопрос'], ans: 0 },
    { q: 'Какой регистр у <b>Estimata sinjoro</b>?', opts: ['разговорный', 'нейтральный', 'формальный', 'поэтический'], ans: 2 },
    { q: 'Что содержит Fundamento?', opts: ['стихи', 'правила и словарь', 'рассказы', 'историю'], ans: 1 },
    { q: 'Что такое <b>tradukado</b>?', opts: ['письмо', 'перевод', 'чтение', 'говорение'], ans: 1 }
  ],
  test: [
    { q: 'Сколько уроков в курсе B2?', opts: ['10', '11', '12', '13'], ans: 2, explain: 'Двенадцать уроков.' },
    { q: 'Какой уровень следует за B2?', opts: ['A2', 'B1', 'C1', 'C2'], ans: 2, explain: 'C1 — продвинутый.' },
    { q: 'Что такое <b>interna ideo</b> эсперанто?', opts: ['грамматика', 'мир и взаимопонимание', 'словарь', 'алфавит'], ans: 1, explain: 'Философия Заменгофа.' },
    { q: 'Введите «стихотворение» на эсперанто:', type: 'input', ans: 'poemo', explain: 'Poemo.' },
    { q: 'Введите «писатель» на эсперанто:', type: 'input', ans: 'verkisto', explain: 'Verk- + -ist- + -o.' },
    { q: 'Введите «переводить» на эсперанто:', type: 'input', ans: 'traduki', explain: 'Traduki.' },
    { q: 'Введите «вывод» на эсперанто:', type: 'input', ans: 'konkludo', explain: 'Konkludo.' },
    { q: 'Что символизируют звёзды в итоговом тексте?', opts: ['ночь', 'мечту', 'холод', 'красоту'], ans: 1, explain: 'Мечту и будущее.' },
    { q: 'Что главное в переводе?', opts: ['точность слов', 'естественность', 'длина', 'скорость'], ans: 1, explain: 'Перевод должен звучать естественно.' },
    { q: 'Что такое <b>laŭvorte</b>?', opts: ['письменно', 'дословно', 'устно', 'быстро'], ans: 1, explain: 'Laŭ- + vort- + -e.' }
  ],
  builder: [
    { words: ['zamenhof', 'kreis', 'lingvon', 'por', 'tuta', 'homaro'], correct: ['zamenhof', 'kreis', 'lingvon', 'por', 'tuta', 'homaro'], translation: 'Заменгоф создал язык для всего человечества.' },
    { words: ['esperanto', 'havas', 'riĉan', 'kulturon', 'kaj', 'literaturon'], correct: ['esperanto', 'havas', 'riĉan', 'kulturon', 'kaj', 'literaturon'], translation: 'У эсперанто богатая культура и литература.' },
    { words: ['mi', 'legos', 'originalajn', 'verkojn', 'en', 'esperanto'], correct: ['mi', 'legos', 'originalajn', 'verkojn', 'en', 'esperanto'], translation: 'Я буду читать оригинальные произведения на эсперанто.' },
    { words: ['la', 'lingvo', 'estas', 'viva', 'organismo'], correct: ['la', 'lingvo', 'estas', 'viva', 'organismo'], translation: 'Язык — живой организм.' },
    { words: ['lernado', 'neniam', 'finiĝas'], correct: ['lernado', 'neniam', 'finiĝas'], translation: 'Учение никогда не заканчивается.' }
  ]
}

];