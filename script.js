const body = document.querySelector(".body");
const bigCards = document.querySelectorAll(".card");
const smallCards = document.querySelectorAll(".minicard");
const toggle = document.querySelector(".toggle");
const toggleText = document.querySelector(".toggleText");
const title = document.querySelector(".title");
var dark = false;


toggle.addEventListener("click", toggleDark);


function toggleDark() {
    if (dark === false) {
        console.log(dark);
        toggle.classList.remove("lighton");
        toggle.classList.add("darkToggle");
        toggleText.classList.add("darkmode");
        title.classList.add("darkmode");
        body.classList.add("darkmode");
        body.classList.add("darkmodebg");
        bigCards.forEach(card => {
            card.classList.remove("lightmodecards");
            card.classList.add("darkmodecards");
        })
        smallCards.forEach(card => {
            card.classList.remove("lightmodecards");
            card.classList.add("darkmodecards");
        })
        dark = true;
    } else {
        console.log(dark);
        toggle.classList.add("lighton");
        toggle.classList.remove("darkToggle");
        toggleText.classList.remove("darkmode");
        title.classList.remove("darkmode");
        body.classList.remove("darkmode");
        body.classList.remove("darkmodebg");
        bigCards.forEach(card => {
            card.classList.add("lightmodecards");
            card.classList.remove("darkmodecards");
        })
        smallCards.forEach(card => {
            card.classList.add("lightmodecards");
            card.classList.remove("darkmodecards");
        })
        dark = false;
    }
}







console.log(toggleText);