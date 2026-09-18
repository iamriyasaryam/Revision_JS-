let intro = document.querySelector(".intro");

intro.style.color = "Red";

let btn = document.createElement("p")

btn.innerText = "Click ME"

let p = document.querySelector("p");

p.after(btn);

btn.remove()