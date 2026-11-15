(() => {
  const CATEGORY_LABELS = {
    proverb: 'ことわざ',
    idiom: '慣用句',
    koji: '四字熟語',
    phrase: '決まり文句'
  };

  const PHRASES = [
    {
      word: 'お言葉に甘えて',
      reading: 'おことばにあまえて',
      meaning: '相手が親切に申し出てくれたとき、遠慮しすぎずにその申し出を受ける言い方。',
      example: '送ってくださるんですか。では、お言葉に甘えてお願いします。'
    },
    {
      word: 'お手数をおかけしますが',
      reading: 'おてすうをおかけしますが',
      meaning: '相手にひと手間かけてもらうことを気づかいながら、何かをお願いする言い方。',
      example: 'お手数をおかけしますが、こちらにお名前をご記入ください。'
    },
    {
      word: '差し支えなければ',
      reading: 'さしつかえなければ',
      meaning: '相手にとって都合が悪くなければ、という意味で、何かを聞いたり頼んだりするときに使う。',
      example: '差し支えなければ、どちらで買ったか教えていただけますか。'
    },
    {
      word: 'おかげさまで',
      meaning: '相手や周りの人の助けに感謝しながら、物事がうまくいったことを伝える言い方。',
      example: 'おかげさまで、引っ越しの準備が間に合いました。'
    },
    {
      word: 'お気になさらず',
      reading: 'おきになさらず',
      meaning: '謝ったり心配したりしている相手に、気にしなくて大丈夫だと伝える言い方。',
      example: '少し待っただけですから、お気になさらず。'
    },
    {
      word: 'お先に失礼します',
      reading: 'おさきにしつれいします',
      meaning: 'ほかの人がその場に残っているとき、自分が先に帰ることを伝えるあいさつ。',
      example: '今日は用事があるので、お先に失礼します。'
    },
    {
      word: 'お疲れさまです',
      reading: 'おつかれさまです',
      meaning: '一緒に働いたり活動したりする人に、日頃の働きやがんばりをねぎらうあいさつ。',
      example: 'お疲れさまです。今日の練習もよくがんばりましたね。'
    },
    {
      word: 'ご無沙汰しています',
      reading: 'ごぶさたしています',
      meaning: 'しばらく会ったり連絡したりしていない相手に、久しぶりに話しかけるときのあいさつ。',
      example: 'ご無沙汰しています。お元気でしたか。'
    },
    {
      word: 'お世話になっております',
      reading: 'おせわになっております',
      meaning: 'ふだん関わりのある相手に、日頃の感謝を込めて電話やメールのはじめに使うあいさつ。',
      example: 'お世話になっております。来週の会議についてご連絡しました。'
    },
    {
      word: 'お待たせしました',
      reading: 'おまたせしました',
      meaning: '自分や何かの準備を待っていた相手に、用意ができたことを丁寧に知らせる言い方。',
      example: 'お待たせしました。ご注文のカレーです。'
    },
    {
      word: 'お大事に',
      reading: 'おだいじに',
      meaning: '病気やけがをした人に、体をいたわって早くよくなってほしいと伝える言い方。',
      example: '今日はゆっくり休んでくださいね。お大事に。'
    },
    {
      word: 'よろしくお願いします',
      reading: 'よろしくおねがいします',
      meaning: '初対面でのあいさつや、人に何かを頼むときに使う丁寧な言い方。',
      example: '今日からこのチームに入ります。よろしくお願いします。'
    },
    {
      word: 'おじゃまします',
      meaning: '人の家や部屋に入るときのあいさつ。',
      example: '「どうぞ上がってください」「おじゃまします」'
    },
    {
      word: '行ってきます',
      reading: 'いってきます',
      meaning: '出かけるとき、家などに残る人に言うあいさつ。',
      example: '学校へ行ってくるね。行ってきます！'
    },
    {
      word: 'いってらっしゃい',
      meaning: '出かける人を見送るときのあいさつ。',
      example: 'いってらっしゃい。車に気をつけてね。'
    },
    {
      word: 'おかえりなさい',
      meaning: '出かけた人が戻ってきたときに言うあいさつ。',
      example: 'おかえりなさい。今日は学校で何をしたの？'
    },
    {
      word: 'いただきます',
      meaning: '食べ物や食事を用意した人への感謝を込めて、食べる前に言うあいさつ。',
      example: '夕ごはん、いいにおいがするね。いただきます！'
    },
    {
      word: 'ごちそうさまでした',
      meaning: '食事のあと、用意してくれた人などに感謝を伝えるあいさつ。',
      example: 'おいしかったです。ごちそうさまでした。'
    },
    {
      word: '承知しました',
      reading: 'しょうちしました',
      meaning: '相手の話を理解したことや、お願いを引き受けたことを伝える丁寧な言い方。',
      example: '集合時間は10時ですね。承知しました。'
    },
    {
      word: 'お互いさまです',
      reading: 'おたがいさまです',
      meaning: '困ったときはお互いに助け合うものだと伝え、相手の遠慮をやわらげる言い方。',
      example: 'お互いさまです。私もこの間、助けてもらいましたから。'
    }
  ];

  const entries = [...WORDS, ...PHRASES.map((entry) => ({ ...entry, category: 'phrase' }))];
  const form = document.querySelector('#draw-form');
  const cards = document.querySelector('#cards');
  const template = document.querySelector('#card-template');
  const resultCount = document.querySelector('#result-count');
  const status = document.querySelector('#draw-status');
  const mixedCategories = ['proverb', 'idiom', 'phrase', 'koji'];
  let previousWords = new Set();
  let drawNumber = 0;

  function drawWords(category, count) {
    const available = entries.filter((entry) => !previousWords.has(entry.word));
    if (category !== 'all') {
      return pickRandom(available.filter((entry) => entry.category === category), count);
    }

    const selected = mixedCategories.slice(0, count).map((type) => {
      const candidates = available.filter((entry) => entry.category === type);
      return pickRandom(candidates, 1)[0];
    });
    if (selected.length < count) {
      const remaining = available.filter((entry) => !selected.includes(entry));
      selected.push(...pickRandom(remaining, count - selected.length));
    }
    return pickRandom(selected, count);
  }

  function createCard(entry) {
    const card = template.content.firstElementChild.cloneNode(true);
    card.dataset.category = entry.category;
    card.querySelector('.category-badge').textContent = CATEGORY_LABELS[entry.category];
    card.querySelector('.phrase').textContent = entry.word;
    const reading = card.querySelector('.reading');
    reading.textContent = entry.reading || '';
    reading.hidden = !entry.reading;
    card.querySelector('.meaning').textContent = entry.meaning;
    card.querySelector('.example').textContent = entry.example;
    return card;
  }

  function renderDraw() {
    const category = form.elements.category.value;
    const countSetting = form.elements.count.value;
    const count = countSetting === 'auto' ? 3 + Math.floor(Math.random() * 3) : Number(countSetting);
    const selection = drawWords(category, count);

    previousWords = new Set(selection.map((entry) => entry.word));
    cards.dataset.count = String(selection.length);
    cards.replaceChildren(...selection.map(createCard));
    resultCount.textContent = selection.length + '枚';
    drawNumber += 1;
    status.textContent = drawNumber + '回目。' + selection.length + '枚のカードを引きました。';
  }

  form.addEventListener('change', renderDraw);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderDraw();
  });
  renderDraw();
})();
