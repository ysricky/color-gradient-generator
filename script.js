const body = document.getElementById("bgcolor");
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const h2 = document.querySelector(".colortext");

const changeColor = () => {
    body.style.background = `linear-gradient(90deg, ${color1.value}, ${color2.value})`;
    h2.textContent = `linear-gradient(90deg, ${color1.value}, ${color2.value})`;
}

color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);
