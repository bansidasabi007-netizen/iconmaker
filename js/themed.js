const themedToggle = document.getElementById("themedToggle");
const textThemedToggle = document.getElementById("textThemedToggle");
const imageThemedToggle = document.getElementById("imageThemedToggle");

const allThemedToggles = [themedToggle, textThemedToggle, imageThemedToggle];

// Material You style DARK themed tones
const THEMED_BG = "#3a3341";
const THEMED_FG = "#D0BCFF";

function applyThemed(isChecked) {

    const backgrounds = [iconBackground, iosIconBackground, webTabIcon];
    const icons = [previewIcon, iosPreviewIcon, webPreviewIcon];
    const images = [previewImage, iosPreviewImage, webPreviewImage];
    const texts = [previewText, iosPreviewText, webPreviewText];

    if (isChecked) {

        backgrounds.forEach(bg => {
            bg.style.background = THEMED_BG;
        });

        icons.forEach(icon => {
            icon.style.color = THEMED_FG;
            icon.style.filter = "";
        });

        images.forEach(img => {
            img.style.filter =
                "grayscale(1) brightness(1.6) sepia(1) hue-rotate(215deg) saturate(2)";
        });

        texts.forEach(text => {
            text.style.color = THEMED_FG;
            text.style.filter = "";
        });

    } else {

        backgrounds.forEach(bg => {
            bg.style.background = "";
        });

        icons.forEach(icon => {
            icon.style.color = "";
            icon.style.filter = "";
        });

        images.forEach(img => {
            img.style.filter = "";
        });

        texts.forEach(text => {
            text.style.color = "";
            text.style.filter = "";
        });

    }

}

allThemedToggles.forEach(toggle => {

    toggle.addEventListener("change", () => {

        const isChecked = toggle.checked;

        // Sync all toggles together
        allThemedToggles.forEach(t => {
            t.checked = isChecked;
        });

        applyThemed(isChecked);

    });

});