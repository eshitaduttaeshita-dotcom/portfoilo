// Welcome Message
window.onload = function () {
    console.log("Welcome to Ishita's Portfolio");
};

// Smooth Scroll for Navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Button Click Message
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
    alert("Welcome! Scroll down to see my projects.");
});

// Animation on Scroll
const items = document.querySelectorAll(".card, .project");

window.addEventListener("scroll", () => {
    items.forEach(item => {
        const position = item.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if (position < screen - 100) {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }
    });
});

// Initial Style
items.forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(30px)";
    item.style.transition = "0.6s";
});