const questions = [
  {
    question: "What is the capital of Japan?",
    answers: [
      {text: "Tokyo", correct: true},
      {text: "Kyoto", correct: false},
      {text: "Osaka", correct: false},
      {text: "Hiroshima", correct: false},
    ]
  },
  {
    question: "What currency does Japan use?",
    answers: [
      {text: "Yuan", correct: false},
      {text: "Taro", correct: false},
      {text: "Won", correct: false},
      {text: "Yen", correct: true},
    ]
  },
  {
    question: "What is the national sport of Japan?",
    answers: [
      {text: "Sumo", correct: true},
      {text: "Aikido", correct: false},
      {text: "Judo", correct: false},
      {text: "Karate", correct: false},
    ]
  },
  {
    question: "What is Japan's largest island?",
    answers: [
      {text: "Kyushu", correct: false},
      {text: "Shikoku", correct: false},
      {text: "Honshu", correct: true},
      {text: "Hokkaido", correct: false},
    ]
  },
  {
    question: "What is the name of Japanese bullet trains?",
    answers: [
      {text: "Denshagogo", correct: false},
      {text: "Suica", correct: false},
      {text: "Yamanote", correct: false},
      {text: "Shinkansen", correct: true},
    ]
  },
  {
    question: "What is the formal Japanese word for thank you?",
    answers: [
      {text: "Konnichiwa", correct: false},
      {text: "Arigatougozaimasu", correct: true},
      {text: "Yoroshikuonegaishimasu", correct: false},
      {text: "Moushiwakearimasen", correct: false},
    ]
  },
  {
    question: "What nickname does Japan give itself as a nation?",
    answers: [
      {text: "The Island of Warriors", correct: false},
      {text: "The Middle Kingdom", correct: false},
      {text: "Land of the Rising Sun", correct: true},
      {text: "Land of the Morning Calm", correct: false},
    ]
  },
  {
    question: "Which of the following is not a noodle dish?",
    answers: [
      {text: "Yakitori", correct: true},
      {text: "Udon", correct: false},
      {text: "Soba", correct: false},
      {text: "Ramen", correct: false},
    ]
  },
  {
    question: "What is a common Japanese dish consisting of a bowl of rice topped with various ingredients?",
    answers: [
      {text: "Bento", correct: false},
      {text: "Sushi", correct: false},
      {text: "Soba", correct: false},
      {text: "Donburi", correct: true},
    ]
  },
  {
    question: "Japan is comprised of how many major islands?",
    answers: [
      {text: "4", correct: true},
      {text: "5", correct: false},
      {text: "6", correct: false},
      {text: "8", correct: false},
    ]
  },
  {
    question: "What is Japanese miso soup's main ingredient?",
    answers: [
      {text: "Rice", correct: false},
      {text: "Soybean", correct: true},
      {text: "Wheat", correct: false},
      {text: "Barley", correct: false},
    ]
  },
  {
    question: "Which of the following is not a Japanese alphabet system?",
    answers: [
      {text: "Hiragana", correct: false},
      {text: "Kanji", correct: false},
      {text: "Katakana", correct: false},
      {text: "Shodo", correct: true},
    ]
  },
  {
    question: "What does sushi mean in Japanese?",
    answers: [
      {text: "Raw fish", correct: false},
      {text: "Seaweed roll", correct: false},
      {text: "Vinegared rice", correct: true},
      {text: "Fresh seafood", correct: false},
    ]
  },
  {
    question: "What is the name of the largest lake in Japan, located in Shiga Prefecture?",
    answers: [
        {text: "Lake Ashi", correct: false},
        {text: "Lake Kawaguchi", correct: false},
        {text: "Lake Biwa", correct: true},
        {text: "Lake Tazawa", correct: false},
    ]
  },
  {
    question: "What was the title of the de facto ruler of Japan during the feudal era?",
    answers: [
      {text: "The Emperor", correct: false},
      {text: "The King", correct: false},
      {text: "The Shogun", correct: true},
      {text: "The Daimyo", correct: false},
    ]
  },
  {
    question: "What is a ryokan?",
    answers: [
      {text: "A type of Japanese tea", correct: false},
      {text: "A Japanese garden", correct: false},
      {text: "A traditional Japanese inn", correct: true},
      {text: "A style of Japanese art", correct: false},
    ]
  },
  {
    question: "What flower is used to symbolize the Seal of the Emperor?",
    answers: [
      {text: "Cherry Blossoms", correct: false},
      {text: "Chrysanthemums", correct: true},
      {text: "Lotuses", correct: false},
      {text: "Orchids", correct: false},
    ]
  },
  {
    question: "What is the philosophy of Wabi-Sabi?",
    answers: [
      {text: "The modern movement of focusing on futuristic designs with traditional aesthetics", correct: false},
      {text: "The importance of conformity and stability over individualism and uncertainty", correct: false},
      {text: "The concept of finding beauty in imperfection, impermanence, and acceptance of wear", correct: true},
      {text: "The act of always doing things with full effort no matter how mundane", correct: false},
    ]
  },
  {
    question: "Which Japanese prefecture is famous for its hot springs and is often referred to as the 'Onsen Prefecture'?",
    answers: [
        {text: "Kagoshima", correct: false},
        {text: "Shizuoka", correct: false},
        {text: "Wakayama", correct: false},
        {text: "Oita", correct: true},
    ]
},
  {
    question: "Which of the following is a native Japanese religion that did not begin from mainland Asia?",
    answers: [
      {text: "Confucianism", correct: false},
      {text: "Shintoism", correct: true},
      {text: "Zen Buddhism", correct: false},
      {text: "Daoism", correct: false},
    ]
  },
  {
    question: "What indigenous group of people lived in the Northern part of Japan that had their own distinct culture and language?",
    answers: [
      {text: "Ainu", correct: true},
      {text: "Jomon", correct: false},
      {text: "Ryukyu", correct: false},
      {text: "Yayoi", correct: false},
    ]
  },
  {
    question: "What era marked when Japan began to modernize?",
    answers: [
      {text: "Meiji", correct: true},
      {text: "Edo", correct: false},
      {text: "Kamakura", correct: false},
      {text: "Asuka", correct: false},
    ]
  },
  {
    question: "Which Japanese artist is famous for 'The Great Wave off Kanagawa'?",
    answers: [
      {text: "Hokusai", correct: true},
      {text: "Sen-no-rikyu", correct: false},
      {text: "Natsume Souseki", correct: false},
      {text: "Ashikaga", correct: false},
    ]
  },
  {
    question: "In which prefecture of Japan can you find the famous the largest sand dunes in the country?",
    answers: [
        {text: "Shimane", correct: false},
        {text: "Okayama", correct: false},
        {text: "Tottori", correct: true},
        {text: "Hiroshima", correct: false},
    ]
},
  {
    question: "Which one of the following is not one of the three unifiers of Japan during the Sengoku period?",
    answers: [
      {text: "Oda Nobunaga", correct: false},
      {text: "Toyotomi Hideyoshi", correct: false},
      {text: "Tokugawa Ieyasu", correct: false},
      {text: "Takeda Shingen", correct: true},
    ]
  },
  {
    question: "During the Edo Period, which class was the lowest in rank?",
    answers: [
      {text: "Samurai", correct: false},
      {text: "Peasant", correct: false},
      {text: "Merchant", correct: true},
      {text: "Artisan", correct: false},
    ]
  },
  {
    question: "What is Zaibatsu?",
    answers: [
      {text: "A traditional Japanese tea ceremony", correct: false},
      {text: "A type of Japanese martial art", correct: false},
      {text: "A conglomerate of powerful family-controlled business groups in Japan", correct: true},
      {text: "A festival celebrating cherry blossoms", correct: false},
    ]
  },
  {
    question: "What was the purpose of the 'Sankin Kotai' system during the Edo period?",
    answers: [
        {text: "To ensure loyalty from the daimyos to the shogun", correct: true},
        {text: "To promote trade between different regions", correct: false},
        {text: "To integrate samurai into the farming economy", correct: false},
        {text: "To establish a network of roads across Japan", correct: false},
    ]
  },
  {
    question: "What is Japan's current Emperor's name?",
    answers: [
      {text: "Naruhito", correct: true},
      {text: "Hirohito", correct: false},
      {text: "Akihito", correct: false},
      {text: "Taisho", correct: false},
    ]
  },
  {
    question: "What is the significance of the Ise Grand Shrine, one of the most sacred Shinto shrines in Japan?",
    answers: [
        {text: "It was the first shrine built in Japan", correct: false},
        {text: "It is dedicated to the sun goddess Amaterasu", correct: true},
        {text: "It houses the Imperial Regalia", correct: false},
        {text: "It is the burial place of the first Emperor of Japan", correct: false},
    ]
  },
];


const questionElement = document.querySelector("#question");
const answerButtons = document.querySelector("#answer-buttons");
const nextButton = document.querySelector("#next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo =currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question; //Grabs the value of question with provided questions[index]

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while(answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);

  }
}

function selectAnswer(e){
  const selectedBtn =e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  }
  else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = 'block'
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length) {
    showQuestion();
  }
  else{
    showScore();
  }
}

nextButton.addEventListener("click", ()=> {
  if(currentQuestionIndex < questions.length) {
    handleNextButton();
  }
  else{
    startQuiz();
  }
})
startQuiz();
