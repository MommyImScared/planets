const modal = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");
const wikiFrame = document.getElementById("wikiFrame");

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function wikiMercury() {
    wikiFrame.src = "https://en.wikipedia.org/wiki/Mercury_(planet)";
    modal.style.display = "flex";
}

function wikiVenus() {
    wikiFrame.src = "https://en.wikipedia.org/wiki/Venus";
    modal.style.display = "flex";
}

function wikiEarth() {
    wikiFrame.src = "https://en.wikipedia.org/wiki/Earth";
    modal.style.display = "flex ";
}

function wikiMars() {
    wikiFrame.src = "https://en.wikipedia.org/wiki/Mars";
    modal.style.display = "flex";
}

function wikiJupiter() {
    wikiFrame.src = "https://en.wikipedia.org/wiki/Jupiter";
    modal.style.display = "flex";
}

function wikiSaturn() {
    wikiFrame.src = "https://en.wikipedia.org/wiki/Saturn";
    modal.style.display = "flex";
}

function wikiUranus() {
    wikiFrame.src = "https://en.wikipedia.org/wiki/Uranus";
    modal.style.display = "flex";
}

function wikiNeptune() {
    wikiFrame.src = "https://en.wikipedia.org/wiki/Neptune";
    modal.style.display = "flex";
}

function wikiSun() {
    wikiFrame.src = "https://en.wikipedia.org/wiki/Sun";
    modal.style.display = "flex";
}

// stars //

const root = document.querySelector(".root");
const starCount = 50;

for (let i = 0; i < starCount; i++) {
    createStar();
}
function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = Math.random() * 98 + "%";
    star.style.left = Math.random() * 98 + "%";
    const size = Math.random() * 3 + 1;
    star.style.width = size + "px";
    star.style.height = size + "px";
    //star.style.animationDuration = (Math.random() * 3 + 2) + "s";
    root.appendChild(star);
}