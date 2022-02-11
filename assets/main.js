const hamburgerButton = document.querySelector(".hamburger-menu");
const navUl = document.querySelector(".navUl");
const pageBody = document.querySelector(".body");
const menuLine1 = document.querySelector(".line1");
const menuLine2 = document.querySelector(".line2");
const navLink = document.querySelectorAll(".navUl li");

hamburgerButton.addEventListener("click", () => {
  navUl.classList.toggle("active");
  pageBody.classList.toggle("overflow");
  // hamburgerButton.classList.toggle("active");
  menuLine1.classList.toggle("active");
  menuLine2.classList.toggle("active");

  // navLinksAnimation
  navLink.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `linksFade 0.3s ease forwards ${index / 5 + 0.3}s`;
    }
  });
});

// swiper js script ---------------------------------------
var swiper = new Swiper(".testimonal-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  // autoplay: {
  //   delay: 3000,
  // },
  // loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1240: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
  },
});
