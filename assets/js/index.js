const menu = document.getElementById("menuNav");
const hamburgerMenu = document.getElementById("hamburgerNav");

hamburgerMenu.addEventListener("click", () => {
  if (menu.classList.contains("flex")) {
    menu.classList.replace("flex", "hidden");
  } else {
    menu.classList.replace("hidden", "flex");
  }
});
