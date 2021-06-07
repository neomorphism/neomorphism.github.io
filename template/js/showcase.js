const hideList = document.querySelectorAll(".hide");
const showHide = function () {
  if (hideList) {
    hideList.forEach((element) => {
      if (window.innerHeight > element.getBoundingClientRect().top) {
        element.classList.add("show");
      }
    });
  }
};
window.addEventListener("scroll", showHide);

const nav = document.querySelectorAll(".nav-link--animation");
const section = document.querySelectorAll(".section");

const scroll = function (nav, section) {
  nav.addEventListener("click", function () {
    section.scrollIntoView(true);
  });
};
var i;
for (i = 1; i < nav.length; i++) {
  scroll(nav[i], section[i - 1]);
}
