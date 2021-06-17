//видео на ютубе к уроку
//https://www.youtube.com/watch?v=uLlXx0KyS6k&t=104s
//https://www.youtube.com/watch?v=oyTLfIPN7Fw

const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const container = document.querySelector(".container");

const slidesCount = mainSlide.querySelectorAll("div").length;

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener("click", () => {
  changeSlide("up");
});

downBtn.addEventListener("click", () => {
  changeSlide("down");
});

//добавим прокрутку слайдера по нажатию клавиш Вверх-Вниз на клавиатуре
document.addEventListener("keydown", (event) => {
  //console.log(event.key)
  if (event.key === "ArrowUp") {
    changeSlide("up");
  } else if (event.key === "ArrowDown") {
    changeSlide("down");
  }
});

function changeSlide(direction) {
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }

  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  //в строке между `` НЕ делать пробелы!!!!
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}
