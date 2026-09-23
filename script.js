/* =========================================================
   SOCIALGUARD - MAIN JAVASCRIPT
   script.js
========================================================= */


/* ================= MOBILE MENU ================= */

function toggleMenu() {

    const mobileMenu = document.getElementById("mobileMenu");

    if (mobileMenu) {
        mobileMenu.classList.toggle("show");
    }

}


/* ================= CLOSE MENU AFTER CLICK ================= */

document.addEventListener("DOMContentLoaded", function () {

    const mobileMenu = document.getElementById("mobileMenu");

    if (!mobileMenu) {
        return;
    }

    const menuLinks = mobileMenu.querySelectorAll("a");

    menuLinks.forEach(function (link) {

        link.addEventListener("click", function () {
            mobileMenu.classList.remove("show");
        });

    });

});


/* ================= CLOSE MENU WHEN CLICKING OUTSIDE ================= */

document.addEventListener("click", function (event) {

    const mobileMenu = document.getElementById("mobileMenu");
    const menuButton = document.querySelector(".menu-btn");

    if (!mobileMenu || !menuButton) {
        return;
    }

    if (
        mobileMenu.classList.contains("show") &&
        !mobileMenu.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {
        mobileMenu.classList.remove("show");
    }

});


/* ================= QUIZ ================= */

function checkQuiz() {

    let score = 0;

    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');
    let q4 = document.querySelector('input[name="q4"]:checked');
    let q5 = document.querySelector('input[name="q5"]:checked');

    if (q1 && q1.value == "no") {
        score++;
    }

    if (q2 && q2.value == "avoid") {
        score++;
    }

    if (q3 && q3.value == "yes") {
        score++;
    }

    if (q4 && q4.value == "online") {
        score++;
    }

    if (q5 && q5.value == "report") {
        score++;
    }

    document.getElementById("result").innerHTML =
        "Your Score: " + score + " / 5";
}
