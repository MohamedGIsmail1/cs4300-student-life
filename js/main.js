// ------------------------------
// 1. Active Navigation Highlight
// This highlights which page you're currently on in the menu
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
    // Get current page name (like "events.html")
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    
    // Find all navigation links
    const navLinks = document.querySelectorAll("nav a");

    // Check each link
    navLinks.forEach(link => {
        // If the link matches current page, highlight it
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});


// ------------------------------
// 2. Button Click Alert
// Shows a message when you click buttons
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
    // Find all buttons with class "btn"
    const buttons = document.querySelectorAll(".btn");
    
    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            // If button has no real link (href="#"), show alert
            if (button.getAttribute("href") === "#") {
                e.preventDefault();
                alert("This feature is coming soon!");
            }
        });
    });
});


// ------------------------------
// 3. Current Date Display
// Shows today's date on the page
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
    // Get today's date
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = today.toLocaleDateString('en-US', options);
    
    // Create a date display element
    const dateDisplay = document.createElement("p");
    dateDisplay.textContent = "Today is: " + dateString;
    dateDisplay.style.textAlign = "center";
    dateDisplay.style.color = "#003366";
    dateDisplay.style.marginTop = "10px";
    dateDisplay.style.fontWeight = "bold";
    
    // Add it to the footer
    const footer = document.querySelector("footer");
    if (footer) {
        footer.insertBefore(dateDisplay, footer.firstChild);
    }
});