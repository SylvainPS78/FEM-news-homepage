const openMenuButton = document.getElementById("button-menu-open");
const closeMenuButton = document.getElementById("button-menu-close");
const navMenu = document.querySelector(".menu");
const main = document.querySelector("main");
const illustration = document.getElementById("illustration");

openMenuButton.addEventListener("click",()=>{
    navMenu.classList.add("menu-open");
    overlayOn();
});

closeMenuButton.addEventListener("click",()=>{
    navMenu.classList.remove("menu-open");
    overlayOff();
});

function updateIllustration () {
    if (window.innerWidth >= 1000) {
        illustration.src = './assets/images/image-web-3-desktop.jpg';
    }
    else {
        illustration.src = './assets/images/image-web-3-mobile.jpg';
    }
}

function overlayOn() {
    document.getElementById("overlay").style.display="block";
}

function overlayOff() {
    document.getElementById("overlay").style.display="none";
}

updateIllustration();

window.addEventListener('resize', updateIllustration);