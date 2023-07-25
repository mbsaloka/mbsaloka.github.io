// Parallax Hero
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  $(".hero .container").css({
    transform: "translate(0px, " + wScroll / 20 + "%)",
  });
});

// Animasi Hero
const observerHero1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-hero-1");
    } else {
      entry.target.classList.remove("show-hero-1");
    }
  });
});

const hiddenElementsHero1 = document.querySelectorAll(".hidden-hero-1");
hiddenElementsHero1.forEach((el) => observerHero1.observe(el));

const observerHero2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-hero-2");
    } else {
      entry.target.classList.remove("show-hero-2");
    }
  });
});

const hiddenElementsHero2 = document.querySelectorAll(".hidden-hero-2");
hiddenElementsHero2.forEach((el) => observerHero2.observe(el));

const observerHero3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-hero-3");
    } else {
      entry.target.classList.remove("show-hero-3");
    }
  });
});

const hiddenElementsHero3 = document.querySelectorAll(".hidden-hero-3");
hiddenElementsHero3.forEach((el) => observerHero3.observe(el));

// Animasi About
const observerAbout1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-about-1");
    } else {
      entry.target.classList.remove("show-about-1");
    }
  });
});

const hiddenElementsAbout1 = document.querySelectorAll(".hidden-about-1");
hiddenElementsAbout1.forEach((el) => observerAbout1.observe(el));

const observerAbout2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-about-2");
    } else {
      entry.target.classList.remove("show-about-2");
    }
  });
});

const hiddenElementsAbout2 = document.querySelectorAll(".hidden-about-2");
hiddenElementsAbout2.forEach((el) => observerAbout2.observe(el));
