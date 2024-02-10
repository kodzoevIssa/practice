//// Бургер

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
let CollapsedBurger = false;

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});

//// Бургер
//////////////////////////
//// Слайдер

const sliderImages = document.querySelectorAll(".slider_img");
const sliderLine = document.querySelector(".slider-line");
let sliderCustomInput = document.querySelector(".input-custom_iner");
let offset = 0;

sliderImages.forEach((image) => {
  image.addEventListener("click", function () {
    offset = offset + 382;
    let currentLeft = parseInt(sliderCustomInput.style.left) || 0;
    sliderCustomInput.style.left = currentLeft + 25 + "%";
    if (offset > 1370) {
      offset = 0;
      sliderCustomInput.style.left = 0;
    }
    sliderLine.style.left = -offset + "px";
  });
});

//// Слайдер
//////////////////////////
//// Таймер

function startTimer(hours, minutes, seconds) {
  let endTime = new Date();
  endTime.setHours(endTime.getHours() + hours);
  endTime.setMinutes(endTime.getMinutes() + minutes);
  endTime.setSeconds(endTime.getSeconds() + seconds);

  let x = setInterval(function () {
    let now = new Date().getTime();
    let timeLeft = endTime - now;

    let hoursLeft = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("hours").innerText =
      (hoursLeft < 10 ? "0" : "") + hoursLeft + ":";
    document.getElementById("minutes").innerText =
      (minutesLeft < 10 ? "0" : "") + minutesLeft + ":";
    document.getElementById("seconds").innerText =
      (secondsLeft < 10 ? "0" : "") + secondsLeft;
  }, 1000);
}

startTimer(23, 59, 59);

//// Таймер
//////////////////////////
//// Большая кнопка
let popup = document.querySelector(".popup");
let openPopup = document.querySelector(".main-btn");
let popupClose = document.querySelector(".popup-btnX");
let popupBlack = document.querySelector(".popup-black");

openPopup.addEventListener("click", function () {
  popup.classList.toggle("popup-toggle");
  popupBlack.classList.toggle("popup-black-toggle");
  document.body.style.overflow = "hidden";
});
popupClose.addEventListener("click", function () {
  popup.classList.toggle("popup-toggle");
  popupBlack.classList.toggle("popup-black-toggle");
  document.body.style.overflow = "visible";
});
//// Большая кнопка
//////////////////////////
//// Кнопка стрелка

let btnArrow = document.querySelector(".arrow-btn");
let main = document.querySelector(".main");
let hide = document.querySelector(".hide-content");
let image = document.querySelector(".main-bot_img");
let Collapsed = false;

btnArrow.addEventListener("click", function () {
  if (Collapsed === false) {
    hide.classList.remove("visible");
    hide.classList.toggle("hide");
    main.style.height = "1118px";
    image.style.transform = "rotate(180deg)";
    Collapsed = true;
  } else {
    hide.classList.remove("hide");
    hide.classList.toggle("visible");
    main.style.height = "1308px";
    image.style.transform = "rotate(360deg)";
    Collapsed = false;
  }
});

//// Кнопка стрелка
//////////////////////////
//// Кнопка футера

let footerSize = document.querySelector(".footer");
let btnRead = document.querySelector(".footer-btn");
let footerHide = document.querySelector(".footer-hide");
let footerBtnHide = document.querySelector(".footer-btn_hide");
let CollapsedFooter = false;

btnRead.addEventListener("click", function () {
  footerBtnHide.style.display = "block";
  btnRead.classList.toggle("display-none");
  footerHide.classList.toggle("display-none");
  footerSize.style.height = "150px";
  btnRead.style.top = "300px";
});
footerBtnHide.addEventListener("click", function () {
  footerBtnHide.style.display = "none";
  footerHide.classList.remove("display-none");
  btnRead.classList.remove("display-none");
  footerSize.style.height = "364px";
});

//// Кнопка футера
//////////////////////////
