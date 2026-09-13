/* =========================
   TYPING ANIMATION
========================= */

const texts = [
    "Welcome to my digital world",
    "Technology • Creativity • Future",
    "Building something amazing",
    "This is RAFI46"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeWriter() {

    if (!typing) return;

    const currentText = texts[textIndex];

    if (!deleting) {

        typing.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentText.length) {

            deleting = true;

            setTimeout(typeWriter, 1600);

            return;
        }

    } else {

        typing.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            textIndex++;

            if (textIndex >= texts.length) {
                textIndex = 0;
            }
        }
    }

    setTimeout(
        typeWriter,
        deleting ? 45 : 85
    );
}

typeWriter();


/* =========================
   MOBILE MENU
========================= */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}


/* =========================
   CLOSE MENU AFTER CLICK
========================= */

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* =========================
   CURRENT YEAR
========================= */

const year =
    document.getElementById("year");

if (year) {
    year.textContent =
        new Date().getFullYear();
}


/* =========================
   SCROLL TO TOP
========================= */

const topBtn =
    document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (
        document.documentElement.scrollTop > 400
    ) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});


if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
