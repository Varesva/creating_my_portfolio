// pour avoir l'année actualisée du copyright 
let dateCopyright = new Date();
let yearCopyright = dateCopyright.getFullYear();
document.getElementById("year").innerHTML = yearCopyright;

// SHOW AND HIDE
const mediaQueryArrows = window.matchMedia("(min-width: 1130px)");

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

// BACK TO TOP 

const btnTop = document.getElementById('toTop');

window.onscroll = function () { scrollToTop() };

function backToTop() {
    document.body.scrollTop = -1; // For Safari
    document.documentElement.scrollTop = -1; // For Chrome, Firefox, IE and Opera
}

function scrollToTop() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btnTop.style.display = "block";
    }
    else {
        btnTop.style.display = "none";
    }
}