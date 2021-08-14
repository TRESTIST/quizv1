// database questions

const quizDataAll = {
  english: [
    {
      language: "english",
      id: 0,
      tag: "beginner",
      name: "Beginner",
      quiz: [
        {
          question: "How do you do?",
          a: "SDASDAS",
          b: "ADSASD",
          c: "DSAD",
          d: "ALLL",
          correct: "d",
        },
        {
          question: "Simple dimpl or Pop it?",
          a: "Simple dimpl",
          b: "no",
          c: "Pop it",
          d: "sckvirt",
          correct: "d",
        },
        {
          question: "What is JS?",
          a: "JS",
          b: "ZALUPA",
          c: "Programming language",
          d: "Iron man",
          correct: "d",
        },
      ],
    },
    {
      language: "english",
      id: 1,
      tag: "preIntermediate",
      name: "Pre-Intermediate",
      quiz: [
        {
          question: "How do you do?",
          a: "How are you?",
          b: "How you do?",
          c: "How do you do?",
          d: "Салам",
          correct: "d",
        },
        {
          question: "Simple dimpl or Pop it?",
          a: "Simple dimpl",
          b: "no",
          c: "Pop it",
          d: "sckvirt",
          correct: "d",
        },
        {
          question: "What is JS?",
          a: "JS",
          b: "ZALUPA",
          c: "Programming language",
          d: "Iron man",
          correct: "d",
        },
      ],
    },
    {
      language: "english",
      id: 2,
      tag: "advanced",
      name: "Advanced",
      quiz: [
        {
          question: "Advanced",
          a: "aaa?",
          b: "How you do?",
          c: "How do you do?",
          d: "Салам",
          correct: "d",
        },
        {
          question: "Simple dimpl or Pop it?",
          a: "Simple dimpl",
          b: "no",
          c: "Pop it",
          d: "sckvirt",
          correct: "d",
        },
        {
          question: "What is JS?",
          a: "JS",
          b: "ZALUPA",
          c: "Programming language",
          d: "Iron man",
          correct: "d",
        },
      ],
    },
  ],
  german: [
    {
      language: "german",
      id: 0,
      tag: "beginner",
      name: "1Beginner",
      quiz: [
        {
          question: "How do you do?",
          a: "SDASDAS",
          b: "ADSASD",
          c: "DSAD",
          d: "ALLL",
          correct: "d",
        },
        {
          question: "Simple dimpl or Pop it?",
          a: "Simple dimpl",
          b: "no",
          c: "Pop it",
          d: "sckvirt",
          correct: "d",
        },
        {
          question: "What is JS?",
          a: "JS",
          b: "ZALUPA",
          c: "Programming language",
          d: "Iron man",
          correct: "d",
        },
      ],
    },
    {
      language: "german",
      id: 1,
      tag: "preIntermediate",
      name: "1Pre-Intermediate",
      quiz: [
        {
          question: "How do you do?",
          a: "How are you?",
          b: "How you do?",
          c: "How do you do?",
          d: "Салам",
          correct: "d",
        },
        {
          question: "Simple dimpl or Pop it?",
          a: "Simple dimpl",
          b: "no",
          c: "Pop it",
          d: "sckvirt",
          correct: "d",
        },
        {
          question: "What is JS?",
          a: "JS",
          b: "ZALUPA",
          c: "Programming language",
          d: "Iron man",
          correct: "d",
        },
      ],
    },
  ],
};

// Sources
const english = document.querySelector("#english");
const german = document.querySelector("#german");
const math = document.querySelector("#math");
const nav = document.querySelector(".nav");
const sideNav = document.querySelector(".sidenav");
const sideNavEls = document.querySelectorAll(".sidenav p");
const mainHead = document.querySelector(".main");
const main = document.querySelector(".main__inner");
const quiz = document.querySelector(".quiz-container");
const submitBtn = document.querySelector("#btn-next");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.querySelector("#question");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");

window.addEventListener("load", () => {
  const chose = quizDataAll.english;
  const temp = chose
    .map((item, index) => {
      CHOSED = item.language;
      return `
    <div>
    <h2>${item.name}</h2>
    <div class="button">
        <button onclick="openTest(${[index]})" class="${item.tag} ${
        item.language
      }" id="btn-next">Пройти</button>
      </div>
    </div>
    `;
    })
    .join("");

  main.innerHTML = temp;
});
english.addEventListener("click", (e) => {
  const chose = quizDataAll.english;
  const temp = chose
    .map((item, index) => {
      CHOSED = item.language;
      return `
    <div>
    <h2>${item.name}</h2>
    <div class="button">
        <button onclick="openTest(${[index]})" class="${item.tag} ${
        item.language
      }" id="btn-next">Пройти</button>
      </div>
    </div>
    `;
    })
    .join("");

  main.innerHTML = temp;
});

german.addEventListener("click", (e) => {
  const chose = quizDataAll.german;
  const temp = chose
    .map((item, index) => {
      CHOSED = item.language;

      return `
    <div>
    <h2>${item.name}</h2>
    <div class="button">
        <button onclick="openTest(${[index]})" class="${item.tag}  ${
        item.language
      }" id="btn-next">Пройти</button>
      </div>
    </div>
    `;
    })
    .join("");

  main.innerHTML = temp;
});

//SOMEDATA
let CHOSED;
let i = 0;
// score of right questions
let score = 0;
// question right now
let currentQuiz = 0;

// download questions from database
const quizLoad = (road) => {
  deselectAnswers();

  questionEl.innerHTML = road["quiz"][i].question;
  a_text.innerHTML = road["quiz"][i].a;
  b_text.innerHTML = road["quiz"][i].b;
  c_text.innerHTML = road["quiz"][i].c;
  d_text.innerHTML = road["quiz"][i].d;
};

// openTest

let ourRoad;
function openTest(road) {
  main.style.display = "none";
  ourRoad = quizDataAll[CHOSED][road];
  quizLoad(quizDataAll[CHOSED][road]);
  let chosedTest = quizDataAll[CHOSED][road];
  quiz.classList.add("quiz-container-show");
}

// chosedQuiz
let chosedQuiz;
sideNavEls.forEach((item) => {
  item.addEventListener("click", (e) => {
    chosedQuiz = e.target.id;
  });
});

// selection validation
const getSelected = () => {
  let answer = null;
  answerEls.forEach((item) => {
    if (item.checked) {
      answer = item.id;
    }
  });

  return answer;
};

// delete chose  after send
function deselectAnswers() {
  answerEls.forEach((item) => {
    item.checked = false;
  });
}

let myAnswers = [];
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const answer = getSelected();

  // quizLoad(ourRoad);
  if (answer) {
    myAnswers.push(answer);
    if (answer === ourRoad["quiz"][i].correct) {
      score++;
    }
    i++;
    currentQuiz++;
    if (currentQuiz < ourRoad["quiz"].length) {
      quizLoad(ourRoad);
    } else {
      quiz.innerHTML = `
      <div class="quiz-over-modal">
      <div class="content">
          <h1>Хороший результат!</h1>
          <p>
              Вы ответил на
              ${score} из 
              ${currentQuiz} вопросов
          </p>
          <button onclick="showMeRightAnswers()" id="btn-try-again">Подробнее </button>
      </div>
    </div>
    `;
    }
  } else {
    alert("chose one of them!");
  }
});

function showMeRightAnswers() {
  const temp = quizDataAll[CHOSED].map((item, index) => {
    console.log(item["quiz"][index].question);
    return `
      <ol type="a" id="ol">
      <h1>${item["quiz"][index].question}</h1>
      <li>${item["quiz"][index].a}</li>
      <li>${item["quiz"][index].b}</li>
      <li>${item["quiz"][index].c}</li>
      <li>${item["quiz"][index].d}</li>
      <h2>Правильный ответ: <span>${item["quiz"][index].correct}</span></h2>
      <h2>Вы ответили: <span style="color: #f76767">${myAnswers[index]}</span></h2>
      </ol>
      <div id="answers-tracker"></div>
    `;
  }).join("");

  quiz.innerHTML = temp;
  quiz.insertAdjacentHTML(
    "beforeend",
    `<div class="button">
      <button style="text-align: center" onclick="reset()" id="btn-next">Завершить</button>
    </div>`
  );
}

// reload
function reset() {
  window.location.reload();
}

// open sideNav
function openSideNav() {
  nav.classList.toggle("change");
  setTimeout(() => {
    sideNav.classList.toggle("active");
  },200)
}

// nav.addEventListener("click",() => {
//   // sideNav.classList.add("change");
// })
