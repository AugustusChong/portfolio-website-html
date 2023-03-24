const header = document.querySelector("header");
const birds = document.getElementById("birds");
const clouds = document.getElementById("clouds");
const mountainsBehind = document.getElementById("mountainsBehind");
const sun = document.getElementById("sun");
const topButton = document.getElementById("toTopButton");
const footer = document.querySelector("footer");
const treesFront = document.getElementById("treesFront");
const text = document.getElementById("text");
const projects = document.querySelectorAll(".project");
const projectDescription = document.querySelector(".projectDescription");

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

animateProjects();
window.addEventListener("scroll", animateProjects);

projectDescription.addEventListener("mousemove", (e) => {
  const paragraphBackground = projectDescription.querySelector(
    ".paragraphBackground"
  );
  const childWidth = paragraphBackground.offsetWidth;
  const childHeight = paragraphBackground.offsetHeight;
  const centerX = childWidth / 2;
  const centerY = childHeight / 2;
  const mouseX = e.offsetX;
  const mouseY = e.offsetY;
  const moveX = (centerX - mouseX) / 20;
  const moveY = (centerY - mouseY) / 20;
  paragraphBackground.style.transform = `rotateX(${moveY}deg) rotateY(${moveX}deg)`;
});

function scrollFunction() {
  if (
    (window.innerWidth > 400 && document.body.scrollTop > 20) ||
    (window.innerWidth > 400 && document.documentElement.scrollTop > 20)
  ) {
    topButton.style.display = "block";
    footer.style.display = "block";
  } else {
    topButton.style.display = "none";
    footer.style.display = "none";
  }
}

function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function animateProjects() {
  projects.forEach((project) => {
    const projectTop = project.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (projectTop < windowHeight - 30) {
      project.classList.add("animate");
    }
  });
}

window.onload = function () {
  var javascriptIcon = bodymovin.loadAnimation({
    container: document.getElementById("javascriptIcon"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    name: "Animated Javascript Icon",
    path: "../src/assets/icons/icons8-javascript.json",
  });

  var reactIcon = bodymovin.loadAnimation({
    container: document.getElementById("reactIcon"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    name: "Animated Javascript Icon",
    path: "../src/assets/icons/icons8-react.json",
  });

  let clickFlag = false;

  $("#stackTop")
    .on("mouseenter", showSkills)
    .on("mouseout", showSkillsHeader)
    .on("click", onSkillsClick);
  $("#stackMiddle")
    .on("mouseenter", showSkills)
    .on("mouseout", showSkillsHeader)
    .on("click", onSkillsClick);
  $("#stackBottom")
    .on("mouseenter", showSkills)
    .on("mouseout", showSkillsHeader)
    .on("click", onSkillsClick);
  $(window).on("click", onSkillsClick);

  function showSkillsHeader(e) {
    if (clickFlag === true && e.currentTarget.id === "stackBottom") {
      $("#skillsHeader").hide();
      $("#frontEndSkills").hide();
      $("#middleTierSkills").hide();
    } else if (clickFlag === true && e.currentTarget.id === "stackMiddle") {
      $("#skillsHeader").hide();
      $("#frontEndSkills").hide();
      $("#backEndSkills").hide();
    } else if (clickFlag === true && e.currentTarget.id === "stackTop") {
      $("#skillsHeader").hide();
      $("#middleTierSkills").hide();
      $("#backEndSkills").hide();
    } else {
      $("#skillsHeader").show();
      $("#frontEndSkills").hide();
      $("#middleTierSkills").hide();
      $("#backEndSkills").hide();
    }
  }

  function showSkills(e) {
    if (e.currentTarget.id === "stackTop") {
      $("#skillsHeader").hide();
      $("#frontEndSkills").show();
      $("#middleTierSkills").hide();
      $("#backEndSkills").hide();
    } else if (e.currentTarget.id === "stackMiddle") {
      $("#skillsHeader").hide();
      $("#frontEndSkills").hide();
      $("#middleTierSkills").show();
      $("#backEndSkills").hide();
    } else if (e.currentTarget.id === "stackBottom") {
      $("#skillsHeader").hide();
      $("#frontEndSkills").hide();
      $("#middleTierSkills").hide();
      $("#backEndSkills").show();
    }
  }

  function onSkillsClick(e) {
    if (
      e.target.id === "stackBottom" ||
      e.target.id === "stackMiddle" ||
      e.target.id === "stackTop"
    ) {
      clickFlag = true;
    } else {
      clickFlag = false;
      $("#skillsHeader").show();
      $("#frontEndSkills").hide();
      $("#middleTierSkills").hide();
      $("#backEndSkills").hide();
    }
  }
};
