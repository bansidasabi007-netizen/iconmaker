const badgeInput = document.getElementById("badgeInput");
const badgeColor = document.getElementById("badgeColor");

const badges = [
    document.getElementById("previewBadge"),
    document.getElementById("iosPreviewBadge"),
    document.getElementById("webPreviewBadge")
];

// Badge Text
badgeInput.addEventListener("input", () => {

    const value = badgeInput.value.trim();

    badges.forEach(badge => {

        if (!badge) return;

        if (value === "") {
            badge.classList.add("hidden");
        } else {
            badge.classList.remove("hidden");
            badge.textContent = value;
        }

    });

});

// Badge Background Color
badgeColor.addEventListener("input", () => {

    badges.forEach(badge => {

        if (!badge) return;

        badge.style.backgroundColor = badgeColor.value;

    });

});

// Default Color
badges.forEach(badge => {

    if (!badge) return;

    badge.style.backgroundColor = badgeColor.value;

});