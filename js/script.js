const openMenuButton = document.getElementById("button-menu-open");
const closeMenuButton = document.getElementById("button-menu-close");
const navMenu = document.querySelector(".menu");
const main = document.querySelector("main");
const illustration = document.getElementById("illustration");

openMenuButton.addEventListener("click",()=>{
    navMenu.classList.add("menu-open");
    main.classList.add("overlay");
});

closeMenuButton.addEventListener("click",()=>{
    navMenu.classList.remove("menu-open");
    main.classList.remove("overlay");
});

function updateIllustration () {
    if (window.innerWidth >= 1000) {
        illustration.src = './assets/images/image-web-3-desktop.jpg';
    }
    else {
        illustration.src = './assets/images/image-web-3-mobile.jpg';
    }
}

updateIllustration();

window.addEventListener('resize', updateIllustration);