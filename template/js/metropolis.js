let prevScrollState = window.pageYOffset;
let op = 0;
window.onscroll = function () {
  let currentScrollState = window.pageYOffset;
  if (prevScrollState < currentScrollState) {
    let fadeIn = setInterval(function () {
      op += 0.01;
      if (document.getElementById("header").style.opacity >= 0.8) {
        clearInterval(fadeIn);
        op = 0.8;
      }
      document.getElementById("header").style.opacity = op;
    }, 150);
  } else if (currentScrollState == 0) {
    let fadeOutOpacity = document.getElementById("header").style.opacity;
    let fadeOut = setInterval(function () {
      fadeOutOpacity -= 0.1;
      if (document.getElementById("header").style.opacity <= 0) {
        clearInterval(fadeOut);
        fadeOutOpacity = 0;
      }
      document.getElementById("header").style.opacity = fadeOutOpacity;
    }, 10);
  }
  prevScrollState = currentScrollState;
};

function clickArrow() {
  document.getElementById("main").scrollIntoView();
}
