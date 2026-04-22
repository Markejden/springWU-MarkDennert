document.querySelector(".fade-layer").addEventListener("click",showMenu);
document.querySelector("i.material-icons").addEventListener("click",showMenu);

function showMenu(){
    let menu = document.querySelector(".menu");
    menu.classList.toggle("show");
    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle("visible");
}