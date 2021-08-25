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

let welcomeCurPage = 1;
const welcomePrevButton = document.querySelector(
  ".welcome-button-prev.welcome-btn"
);
const welcomeNextButton = document.querySelector(
  ".welcome-button-next.welcome-btn"
);

//welcomePage의 curpage값을 기반으로 버튼을 온오프 해주는함수
function welcomeButtonOnOff(curpage) {
  if (curpage == 1) {
    welcomePrevButton.classList.add("disable");
  } else {
    welcomePrevButton.classList.remove("disable");
  }
  if (curpage == 3) {
    welcomeNextButton.classList.add("disable");
  } else {
    welcomeNextButton.classList.remove("disable");
  }
}

welcomePrevButton.addEventListener("click", function () {
  if (welcomeCurPage != 1) {
    welcomeCurPage--;
  }
  welcomeButtonOnOff(welcomeCurPage);
});

welcomeNextButton.addEventListener("click", function () {
  if (welcomeCurPage != 3) {
    welcomeCurPage++;
  }
  welcomeButtonOnOff(welcomeCurPage);
});
// roadmap swiper
const roadmapSwiper = new Swiper(".swiper-container.roadmap", {
  direction: "horizontal",
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".roadmap-button-next.roadmap-btn",
    prevEl: ".roadmap-button-prev.roadmap-btn",
  },
});

let roadmapCurPage = 1;
const roadMapPrevButton = document.querySelector(
  ".roadmap-button-prev.roadmap-btn"
);
const roadMapNextButton = document.querySelector(
  ".roadmap-button-next.roadmap-btn"
);

//welcomePage의 curpage값을 기반으로 버튼을 온오프 해주는함수
function roadMapButtonOnOff(curpage) {
  if (curpage == 1) {
    roadMapPrevButton.classList.add("disable");
  } else {
    roadMapPrevButton.classList.remove("disable");
  }
  if (curpage == 3) {
    roadMapNextButton.classList.add("disable");
  } else {
    roadMapNextButton.classList.remove("disable");
  }
}

roadMapPrevButton.addEventListener("click", function () {
  if (roadmapCurPage != 1) {
    roadmapCurPage--;
  }
  roadMapButtonOnOff(roadmapCurPage);
});

roadMapNextButton.addEventListener("click", function () {
  if (roadmapCurPage != 3) {
    roadmapCurPage++;
  }
  roadMapButtonOnOff(roadmapCurPage);
});
// new-courses
const newCoursesSwiper = new Swiper(".swiper-container.new-courses", {
  direction: "horizontal",
  slidesPerView: 5,
  spaceBetween: 30,
  slidesPerGroup: 5,

  navigation: {
    nextEl: ".new-courses-button-next.new-courses-btn",
    prevEl: ".new-courses-button-prev.new-courses-btn",
  },
});

let newCoursesCurPage = 1;
const newCoursesPrevButton = document.querySelector(
  ".new-courses-button-prev.new-courses-btn"
);
const newCoursesNextButton = document.querySelector(
  ".new-courses-button-next.new-courses-btn"
);

function newCoursesButtonOnOff(curpage) {
  console.log(newCoursesCurPage);
  if (curpage == 1) {
    newCoursesPrevButton.classList.add("disable");
  } else {
    newCoursesPrevButton.classList.remove("disable");
  }
  if (curpage == 3) {
    newCoursesNextButton.classList.add("disable");
  } else {
    newCoursesNextButton.classList.remove("disable");
  }
}

newCoursesPrevButton.addEventListener("click", function () {
  if (newCoursesCurPage != 1) {
    newCoursesCurPage--;
  }
  newCoursesButtonOnOff(newCoursesCurPage);
});

newCoursesNextButton.addEventListener("click", function () {
  if (newCoursesCurPage != 3) {
    newCoursesCurPage++;
  }
  newCoursesButtonOnOff(newCoursesCurPage);
});

//review swiper
const reviewSwiper = new Swiper(".swiper-container.review", {
  direction: "vertical",
  autoHeight: true,
  loop: true,
  mousewheel: true,
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 30,
});

// banner2 swiper
const banner2Swiper = new Swiper(".swiper-container.banner2", {
  direction: "horizontal",
  slidesPerView: 1,

  navigation: {
    nextEl: ".banner2-button-next",
    prevEl: ".banner2-button-prev",
  },
});

let banner2CurPage = 1;
const banner2PrevButton = document.querySelector(
  ".banner2-button-prev.banner2-btn"
);
const banner2NextButton = document.querySelector(
  ".banner2-button-next.banner2-btn"
);

//welcomePage의 curpage값을 기반으로 버튼을 온오프 해주는함수
function banner2ButtonOnOff(curpage) {
  if (curpage == 1) {
    banner2PrevButton.classList.add("disable");
  } else {
    banner2PrevButton.classList.remove("disable");
  }
  if (curpage == 4) {
    banner2NextButton.classList.add("disable");
  } else {
    banner2NextButton.classList.remove("disable");
  }
}

banner2PrevButton.addEventListener("click", function () {
  if (banner2CurPage != 1) {
    banner2CurPage--;
  }
  banner2ButtonOnOff(banner2CurPage);
});

banner2NextButton.addEventListener("click", function () {
  if (banner2CurPage != 4) {
    banner2CurPage++;
  }
  banner2ButtonOnOff(banner2CurPage);
});
