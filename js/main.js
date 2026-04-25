const menu = document.querySelector(".menu");
const layer = document.querySelector(".fade-layer");
const icon = document.querySelector("i.material-icons");

function showMenu() {
    menu.classList.toggle("show");
    layer.classList.toggle("visible");
    document.body.style.overflow = menu.classList.contains("show") ? "hidden" : "";
}

icon.addEventListener("click", showMenu);
layer.addEventListener("click", showMenu);