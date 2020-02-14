const refs = {
  button: document.querySelector(".toggleMenu"),
  menu: document.querySelector(".menu__container")
};

function toggleMenu() {
  refs.menu.classList.toggle("invisible");
}

refs.button.addEventListener("click", toggleMenu);
