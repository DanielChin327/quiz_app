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
    question: "Which of the following is not a noodle dish?  ",
    answers: [
      {text: "Yakitori", correct: true},
      {text: "Udon", correct: false},
      {text: "Soba", correct: false},
      {text: "Ramen", correct: false},
    ]
},

  {
      question: "Japan is comprised of how many major islands? ",
      answers: [
        {text: "4", correct: true},
        {text: "5", correct: false},
        {text: "6", correct: false},
        {text: "8", correct: false},
      ]
  },


  {
    question: "What is Japan's largest island? ",
    answers: [
      {text: "Kyushu", correct: false},
      {text: "Shikoku", correct: false},
      {text: "Honshu", correct: true},
      {text: "Hokkaido", correct: false},
    ]
},
  {
    question: "What is Japanese miso soup's main ingredient?  ",
    answers: [
      {text: "Rice", correct: false},
      {text: "Soybean", correct: true},
      {text: "Wheat", correct: false},
      {text: "Barley", correct: false},
    ]
},

  {
    question: "Which of the following is not a Japanese alphabet system? ",
    answers: [
      {text: "Hiragana", correct: false},
      {text: "Kanji", correct: false},
      {text: "Katakana", correct: false},
      {text: "Shodo", correct: true},
    ]
  },

  {
    question: "What was the title of the de facto ruler of Japan during the feudal era? ",
    answers: [
      {text: "The Emperor", correct: false},
      {text: "The King", correct: false},
      {text: "The Shogun", correct: true},
      {text: "The Daimyo", correct: false},
    ]
  },

  {
    question: "What is the formal Japanese word for thank you? ",
    answers: [
      {text: "Konnichiwa", correct: false},
      {text: "Arigatougozaimasu", correct: true},
      {text: "Yoroshikuonegaishimasu", correct: false},
      {text: "Moushiwakearimasen", correct: false},
    ]
  },

  {
    question: "What is the name of Japanese bullet trains? ",
    answers: [
      {text: "Denshagogo", correct: false},
      {text: "Suica", correct: false},
      {text: "Yamanote", correct: false},
      {text: "Shinkansen", correct: true},
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
    question: "What is the national sport of Japan?",
    answers: [
      {text: "Sumo", correct: true},
      {text: "Aikido", correct: false},
      {text: "Judo", correct: false},
      {text: "Karate", correct: false},
    ]
  },

  {
    question: "What flower is used to symbolize the Seal of the Emperor? ",
    answers: [
      {text: "Cherry blossoms", correct: false},
      {text: "Chrysanthemums", correct: true},
      {text: "Lotuses", correct: false},
      {text: "Orchids", correct: false},
    ]
  },

  {
    question: "What traditional Japanese theatre involves masks and elaborate costumes? ",
    answers: [
      {text: "Kabuki", correct: false},
      {text: "Bunraku", correct: false},
      {text: "Rakugo", correct: false},
      {text: "Noh", correct: true},
    ]
  },

  {
    question: "What indigenous group of people lived in the northern part of Japan that had their own distinct culture and language? ",
    answers: [
      {text: "Jomon", correct: false},
      {text: "Ryukyu", correct: false},
      {text: "Yayoi", correct: false},
      {text: "Ainu", correct: true},
    ]
  },

  {
    question: "What era marked when Japan began to modernize? ",
    answers: [
      {text: "Meiji", correct: true},
      {text: "Edo", correct: false},
      {text: "Kamakura", correct: false},
      {text: "Asuka", correct: false},
    ]
  },

  {
    question: "Which of the following is a native religion that did not begin from mainland Asia? ",
    answers: [
      {text: "Confucianism", correct: false},
      {text: "Shintoism", correct: true},
      {text: "Zen Buddhism", correct: false},
      {text: "Daoism", correct: false},
    ]
  },

  {
    question: "Which Japanese artist is famous for 'The Great Wave off Kanagawa'? ",
    answers: [
      {text: "Hokusai", correct: true},
      {text: "Sen-no-rikyu", correct: false},
      {text: "Natsume Souseki", correct: false},
      {text: "Ashikaga", correct: false},
    ]
  },

  {
    question: "Which one of the following is not one of the three unifiers of Japan during the sengoku period?  ",
    answers: [
      {text: "Oda Nobunaga", correct: false},
      {text: "Toyotomi Hideyoshi", correct: false},
      {text: "Tokugawa Ieyasu", correct: false},
      {text: "Takeda Shingen", correct: true},
    ]
  },

  {
    question: "What is the philosophy of Wabi-Sabi?   ",
    answers: [
      {text: "The modern movement of focusing on futuristic designs with traditional aesthetics", correct: false},
      {text: "The importance of conformity and stability over individualism and uncertainty", correct: false},
      {text: "The concept of finding beauty in imperfection, impermanance, and acceptance of wear", correct: true},
      {text: "The act of always doing things with full effort", correct: false},
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
