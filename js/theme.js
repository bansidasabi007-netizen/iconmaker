const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

function applyTheme(theme) {

    if (theme === "light") {

        document.body.classList.add("light-theme");

        themeIcon.setAttribute(
            "icon",
            "solar:moon-bold"
        );

    } else {

        document.body.classList.remove("light-theme");

        themeIcon.setAttribute(
            "icon",
            "solar:sun-bold"
        );

    }
}


// Load saved theme
const savedTheme =
    localStorage.getItem("iconBuilderTheme") || "dark";

applyTheme(savedTheme);


// Toggle
themeToggle.addEventListener("click", () => {

    const isLight =
        document.body.classList.contains("light-theme");

    const newTheme =
        isLight ? "dark" : "light";

    applyTheme(newTheme);

    localStorage.setItem(
        "iconBuilderTheme",
        newTheme
    );

});

const moreBtn = document.getElementById("moreBtn");
const moreMenu = document.getElementById("moreMenu");
const startOverBtn = document.getElementById("startOverBtn");


// =========================
// MORE MENU
// =========================

moreBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    moreMenu.classList.toggle("hidden");

});


// =========================
// CLOSE MENU
// =========================

document.addEventListener("click", () => {

    moreMenu.classList.add("hidden");

});


// =========================
// START OVER
// =========================

startOverBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    moreMenu.classList.add("hidden");

    // Completely reset the editor
    window.location.reload();

});