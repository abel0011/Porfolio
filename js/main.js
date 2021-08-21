document.addEventListener("DOMContentLoaded", () => {
  const mainNav = document.getElementById("main-nav"),
    toggleMenu = document.getElementById("toggle-menu"),
    toggleBar = document.getElementById("toggle-bar"),
    headerElement = document.getElementById("header"),
    mainElement = document.getElementById("main");
  toggleMenu.addEventListener("click", () => {
    toggleBar.classList.toggle("active"),
      mainNav.classList.toggle("main-nav--show"),
      header.classList.toggle("blur"),
      main.classList.toggle("blur"),
      document.body.classList.toggle("no-scroll");
  });
});
