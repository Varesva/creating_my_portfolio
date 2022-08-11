// pour avoir l'année actualisée du copyright 
let dateCopyright = new Date();
let yearCopyright = dateCopyright.getFullYear();
document.getElementById("year").innerHTML = yearCopyright;

// SHOW AND HIDE
const mediaQueryArrows = window.matchMedia("(min-width: 1024px)");

const divArrowDown = document.getElementsByClassName("full-arrow-down");
// console.log(divArrowDown);   => 3 élements

// Boucler sur chaque élement
for (const arrow of divArrowDown) {
    if (mediaQueryArrows.matches) {
        arrow.style.display = "none";
    } else {
        arrow.style.display = "block";
    };  
};