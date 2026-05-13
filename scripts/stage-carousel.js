const stages = [
  {
    id: 1,
    title: "Строительство железнодорожной магистрали Москва-Васюки",
  },
  {
    id: 2,
    title: "Открытие фешенебельной гостиницы «Проходная пешка» и других",
  },
  {
    id: 3,
    title:
      "Поднятие сельского хозяйства в радиусе на тысячу километров:производство овощей, фруктов, икры, шоколадных конфет",
  },
  {
    id: 4,
    title: "Строительство дворца для турнира",
  },
  {
    id: 5,
    title: "Размещение гаражей для гостевого автотранспорта",
  },
  {
    id: 6,
    title:
      "Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов",
  },
  {
    id: 7,
    title:
      "Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых самолётов и дирижаблей во все концы света, включая Лос-Анжелос и Мельбурн",
  },
];

renderStages(".stage__grid");
const stageCarousel = document.querySelector(".stage__carousel");
const stageTrack = stageCarousel.querySelector("#track");
let current = 0;

// stages.forEach((s) => (stageTrack.innerHTML += createSlide(s)));
for (let i = 0; i < stages.length; i++) {
  let specialCase = stages[i].id == 2 || stages[i].id == 5;
  if (stages[i].id == 2 || stages[i].id == 5) continue;
  // stageTrack.innerHTML += createSlide(s);

  createSlide(stages[i]);
  stageTrack.innerHTML += `
  <div class="stage__slide card">
    ${createSlide(stages[i])}
    ${stages[i].id == 1 || stages[i].id == 4 ? createSlide(stages[i + 1]) : ""}
  </div>`;
}

function createSlide(ss) {
  return `
        <div class="stage__slide_row">
          <span>${ss.id}</span>
          <p class="title">${ss.title}</p>
        </div>`;
}

function getVisibleCount() {
  return 1;
}

function getCardWidth() {
  const card = stageCarousel.querySelector(".stage__slide");
  return card.getBoundingClientRect().width + 8;
}

function update(animate = true) {
  const visibleCount = getVisibleCount();
  const cardWidth = getCardWidth();
  stageTrack.style.transition = animate ? "transform 200ms ease" : "none";
  stageTrack.style.transform = `translateX(-${current * getCardWidth()}px)`;
  const prevBtn = stageCarousel.querySelector("#prev");
  const NextBtn = stageCarousel.querySelector("#next");
  current >= stages.length - 3
    ? (NextBtn.disabled = true)
    : (NextBtn.disabled = false);

  current == 0 ? (prevBtn.disabled = true) : (prevBtn.disabled = false);
}

stageCarousel.querySelector("#prev").onclick = () => {
  const visibleCount = getVisibleCount();
  if (current > 0) current--;
  update();
};
stageCarousel.querySelector("#next").onclick = () => {
  const visibleCount = getVisibleCount();
  if (current < stages.length - 1) current++;
  update();
};

update(false);

function renderStages(containerSelector) {
  const container = document.querySelector(containerSelector);
  console.log("here", container);

  if (!container) return;

  container.innerHTML = "";

  stages.forEach((stage) => {
    const card = document.createElement("div");
    card.classList.add("card");

    if (stage.id === 3) card.classList.add("tall");
    if (stage.id === 7) card.classList.add("wide");

    const span = document.createElement("span");
    span.textContent = String(stage.id);

    const paragraph = document.createElement("p");
    paragraph.textContent = stage.title;
    paragraph.classList.add("title");

    card.appendChild(span);
    card.appendChild(paragraph);

    container.appendChild(card);
  });
}
