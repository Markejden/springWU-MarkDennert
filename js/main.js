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

const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");

function draw() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    const w = canvas.width;
    const h = canvas.height;
    const originX = w /2;
    const originY = h/2;
    const scale = 60;

    ctx.clearRect(0,0,w,h);
    ctx.strokeStyle = "#354f52";
    ctx.lineWidth = 6;
    ctx.lineJoin = "round";

    function plot(fn){
        ctx.beginPath();
        let started = false;
        for (let px =0;px<w;px++){
            const x = (px-originX) / scale;
            const y = fn(x);
            const py = originY - y * scale;
            if (!isFinite(py) || Math.abs(py) > h*2){
                started = true
                continue;
            }
            if (!started){
                ctx.moveTo(px,py);
                started = true;
            } else{
                ctx.lineTo(px,py);
            }
        }
        ctx.stroke();
    }
    plot(x=>x*Math.sin(x)+5);
    plot(x=>-x*Math.sin(x)-5);
}

draw();
window.addEventListener("resize", draw)