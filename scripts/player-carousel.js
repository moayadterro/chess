const players = [
  {
    name: "Хозе-Рауль Капабланка",
    title: "Чемпион мира по шахматам",
    img: "assets/images/player-avatar.png",
  },
  {
    name: "Эммануил Ласкер",
    title: "Чемпион мира по шахматам",
    img: "assets/images/player-avatar.png",
  },
  {
    name: "Александр Алехин",
    title: "Чемпион мира по шахматам",
    img: "assets/images/player-avatar.png",
  },
  {
    name: "Арон Нимцович",
    title: "Чемпион мира по шахматам",
    img: "assets/images/player-avatar.png",
  },
  {
    name: "Рихард Рети",
    title: "Чемпион мира по шахматам",
    img: "assets/images/player-avatar.png",
  },
  {
    name: "Остап Бендер",
    title: "Гроссмейстер",
    img: "assets/images/player-avatar.png",
  },
];

const playerCarousel = document.querySelector(".player__carousel");
const playerTrack = playerCarousel.querySelector("#track");
const counter = playerCarousel.querySelector("#counter");
let current = 0;

players.forEach((p) => (playerTrack.innerHTML += createCarouselSlide(p)));

function createCarouselSlide(player) {
  return `<div class="player__card">
        <img src="${player.img}" alt="${player.name}">
        <p class="player__name">${player.name}</p>
        <p class="player__title">${player.title}</p>
        <button class="btn btn--small btn--secondary" onclick="alert('Вы выбрали игрока: ${player.name}');">Подробнее</button>
      </div>`;
}

function getVisibleCount() {
  return window.innerWidth <= 768 ? 1 : 3;
}

function getCardWidth() {
  const card = playerCarousel.querySelector(".player__card");
  return card.getBoundingClientRect().width + 8;
}

function update(animate = true) {
  const visibleCount = getVisibleCount();
  const cardWidth = getCardWidth();
  playerTrack.style.transition = animate ? "transform 200ms ease" : "none";
  playerTrack.style.transform = `translateX(-${current * getCardWidth()}px)`;
  counter.innerHTML = `${current + visibleCount} <span>/ ${players.length}</span>`;
}

playerCarousel.querySelector("#prev").onclick = () => {
  const visibleCount = getVisibleCount();
  current < 1 ? (current = players.length - visibleCount) : current--;
  update();
};

playerCarousel.querySelector("#next").onclick = () => {
  const visibleCount = getVisibleCount();
  current >= players.length - visibleCount ? (current = 0) : current++;
  update();
};

update(false);
