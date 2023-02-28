let birds = document.getElementById("birds");
let clouds = document.getElementById("clouds");
let header = document.querySelector("header");
let mountainsBehind = document.getElementById("mountainsBehind");
let sun = document.getElementById("sun");
let text = document.getElementById("text");
let topButton = document.getElementById("toTopButton");
let treesFront = document.getElementById("treesFront");

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
