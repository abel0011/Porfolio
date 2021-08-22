document.addEventListener("DOMContentLoaded", () => {
  const mainNav = document.getElementById("main-nav"),
    toggleMenu = document.getElementById("toggle-menu"),
    toggleBar = document.getElementById("toggle-bar"),
    headerElement = document.getElementById("header"),
    mainElement = document.getElementById("main"),
    arrowUp = document.getElementById("arrow");

  toggleMenu.addEventListener("click", () => {
    toggleBar.classList.toggle("active"),
      mainNav.classList.toggle("main-nav--show"),
      header.classList.toggle("blur"),
      main.classList.toggle("blur"),
      document.body.classList.toggle("no-scroll");
  });

  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;

    if (Math.ceil(scrolled) === scrollable) {
      console.log("has llegado al final");
    }
  });

  arrowUp.addEventListener("click", () => {
    window.scrollTo(0, document.querySelector(".arrow").scrollHeight);
  });
});
