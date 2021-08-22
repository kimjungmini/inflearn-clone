// topSwiper
//renderBullet에 속성을 주면 여기를 순회하는것 같음
const topMenu = [
  "광복절 주간 이벤트",
  "수강생 6만 기념",
  "나에게 맞는 강의",
  "코딩 입문 가이드",
  "지금 할인중 💸",
  "신규 강의 🎁",
  "인프런은 🌱",
];

const topSwiper = new Swiper(".swiper-container.top", {
  direction: "horizontal",
  loop: true,
  autoplay: true,
  slidesPerView: 1,

  pagination: {
    el: ".swiper-pagination.top",
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}">${topMenu[index]}</span>`;
    },
  },

  navigation: {
    nextEl: ".control-button-next.top",
    prevEl: ".control-button-prev.top",
  },
});

const topPlayButton = document.querySelector(".swiper-container.top .play");
const topStopButton = document.querySelector(".swiper-container.top .stop");

topPlayButton.addEventListener("click", function () {
  topSwiper.autoplay.start();
  topPlayButton.classList.add("invisible");
  topStopButton.classList.remove("invisible");
});

topStopButton.addEventListener("click", function () {
  topSwiper.autoplay.stop();
  topPlayButton.classList.remove("invisible");
  topStopButton.classList.add("invisible");
});

// welcome swiper
const welcomeSwiper = new Swiper(".swiper-container.welcome", {
  direction: "horizontal",
  slidesPerView: 5,
  spaceBetween: 30,
  slidesPerGroup: 5,

  navigation: {
    nextEl: ".welcome-button-next.welcome-btn",
    prevEl: ".welcome-button-prev.welcome-btn",
  },
});

let curPage = 1;
const welcomePrevButton = document.querySelector(
  ".welcome-button-prev.welcome-btn"
);
const welcomeNextButton = document.querySelector(
  ".welcome-button-next.welcome-btn"
);

//welcomePage의 curpage값을 기반으로 버튼을 온오프 해주는함수
function buttonOnOff(curpage) {
  if (curPage == 1) {
    welcomePrevButton.classList.add("disable");
  } else {
    welcomePrevButton.classList.remove("disable");
  }
  if (curPage == 3) {
    welcomeNextButton.classList.add("disable");
  } else {
    welcomeNextButton.classList.remove("disable");
  }
}

welcomePrevButton.addEventListener("click", function () {
  if (curPage != 1) {
    curPage--;
  }
  buttonOnOff(curPage);
});

welcomeNextButton.addEventListener("click", function () {
  if (curPage != 3) {
    curPage++;
  }
  buttonOnOff(curPage);
});
// welcome swiper slider hover
