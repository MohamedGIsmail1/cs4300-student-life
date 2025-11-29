// ------------------------------
// Active Navigation Highlight
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop(); 
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
});


// ------------------------------
// Random Motivational Quote
// (Only runs on pages where #quoteText exists)
// ------------------------------
const quotes = [
    "You are capable of amazing things.",
    "Small steps every day lead to big results.",
    "Believe in yourself and all that you are.",
    "Success is built on consistency.",
    "Your potential is endless.",
    "Every day is a chance to learn something new.",
    "Focus on progress, not perfection.",
    "You’re stronger than you think."
];

document.addEventListener("DOMContentLoaded", () => {
    const quoteElement = document.getElementById("quoteText");
    if (quoteElement) {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteElement.textContent = randomQuote;
    }
});
