const header = document.querySelector("header");
const birds = document.getElementById("birds");
const clouds = document.getElementById("clouds");
const mountainsBehind = document.getElementById("mountainsBehind");
const sun = document.getElementById("sun");
const topButton = document.getElementById("toTopButton");
const treesFront = document.getElementById("treesFront");
const text = document.getElementById("text");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  clouds.style.left = value + "px";
  birds.style.left = value * 0.25 + "px";
  birds.style.top = value * -0.5 + "px";
  sun.style.top = value * 1.05 + "px";
  mountainsBehind.style.top = value * 0.5 + "px";
  treesFront.style.top = value * 0 + "px";
  text.style.marginRight = value * 6 + "px";
  text.style.marginTop = value * 1.5 + "px";
  header.style.top = value * 0.5 + "px";
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
