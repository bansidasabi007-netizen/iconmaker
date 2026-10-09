// ================= ICON PADDING =================

const paddingTop = document.getElementById("paddingTop");
const paddingRight = document.getElementById("paddingRight");
const paddingBottom = document.getElementById("paddingBottom");
const paddingLeft = document.getElementById("paddingLeft");

// paddingTop.value = "0%";
// paddingRight.value = "0%";
// paddingBottom.value = "0%";
// paddingLeft.value = "0%";

const paddingAll = document.getElementById("paddingAll");
const paddingLink = document.getElementById("paddingLink");
const paddingIndividual = document.getElementById("paddingIndividual");

// paddingAll.value = "0%";


// All → apply same value to all sides
paddingAll.addEventListener("input", () => {

    const value = paddingAll.value;

    paddingTop.value = value;
    paddingRight.value = value;
    paddingBottom.value = value;
    paddingLeft.value = value;

    updateIconPadding();

});


// Show / hide individual padding
paddingLink.onclick = () => {

    paddingIndividual.classList.toggle("hidden");

};


function updateIconPadding() {

    const top = parseInt(paddingTop.value) || 0;
    const right = parseInt(paddingRight.value) || 0;
    const bottom = parseInt(paddingBottom.value) || 0;
    const left = parseInt(paddingLeft.value) || 0;

    // Scale based on the largest padding
    const maxPad = Math.max(top, right, bottom, left);

    const minScale = 0.4;
    const maxScale = 1.4;

    const scale =
        maxScale - ((maxPad / 100) * (maxScale - minScale));

    // Offset so each side feels different
    const offsetX = (left - right) / 2;
    const offsetY = (top - bottom) / 2;

    const baseScale = 1.5;

    [previewIcon, iosPreviewIcon, webPreviewIcon].forEach(icon => {

        icon.style.transformOrigin = "center center";

        icon.style.transform =
            `translate(${offsetX}%, ${offsetY}%) scale(${baseScale * scale})`;

    });

}


paddingTop.addEventListener("input", updateIconPadding);
paddingRight.addEventListener("input", updateIconPadding);
paddingBottom.addEventListener("input", updateIconPadding);
paddingLeft.addEventListener("input", updateIconPadding);

updateIconPadding();


// ================= TEXT PADDING =================

const textPaddingAll = document.getElementById("textPaddingAll");

const textPaddingTop = document.getElementById("textPaddingTop");
const textPaddingRight = document.getElementById("textPaddingRight");
const textPaddingBottom = document.getElementById("textPaddingBottom");
const textPaddingLeft = document.getElementById("textPaddingLeft");

const textPaddingLink = document.getElementById("textPaddingLink");
const textPaddingIndividual =
    document.getElementById("textPaddingIndividual");

console.log("Padding Working");

textPaddingAll.value = "0";

textPaddingTop.value = "0";
textPaddingRight.value = "0";
textPaddingBottom.value = "0";
textPaddingLeft.value = "0";


// All → apply same value to all sides
textPaddingAll.addEventListener("input", () => {

    const value = textPaddingAll.value;

    textPaddingTop.value = value;
    textPaddingRight.value = value;
    textPaddingBottom.value = value;
    textPaddingLeft.value = value;

    updateTextPadding();

});


// Show / hide individual padding
textPaddingLink.onclick = () => {

    textPaddingIndividual.classList.toggle("hidden");

};


function updateTextPadding() {

    const top = parseInt(textPaddingTop.value) || 0;
    const right = parseInt(textPaddingRight.value) || 0;
    const bottom = parseInt(textPaddingBottom.value) || 0;
    const left = parseInt(textPaddingLeft.value) || 0;

    const maxPad = Math.max(top, right, bottom, left);

    const minScale = 0.4;
    const maxScale = 1.0;

    const scale =
        maxScale - ((maxPad / 100) * (maxScale - minScale));

    const offsetX = (left - right) / 2;
    const offsetY = (top - bottom) / 2;

    [previewText, iosPreviewText, webPreviewText].forEach(text => {

        text.style.padding = "0";

        text.style.transformOrigin = "center center";

        text.style.transform =
            `translate(calc(-50% + ${offsetX}%),
                       calc(-50% + ${offsetY}%))
             scale(${scale})`;

    });

}


textPaddingTop.addEventListener("input", updateTextPadding);
textPaddingRight.addEventListener("input", updateTextPadding);
textPaddingBottom.addEventListener("input", updateTextPadding);
textPaddingLeft.addEventListener("input", updateTextPadding);

updateTextPadding();


// ================= IMAGE PADDING =================

const imagePaddingAll = document.getElementById("imagePaddingAll");

const imagePaddingTop = document.getElementById("imagePaddingTop");
const imagePaddingRight = document.getElementById("imagePaddingRight");
const imagePaddingBottom = document.getElementById("imagePaddingBottom");
const imagePaddingLeft = document.getElementById("imagePaddingLeft");

const imagePaddingLink = document.getElementById("imagePaddingLink");
const imagePaddingIndividual =
    document.getElementById("imagePaddingIndividual");

imagePaddingAll.value = "0";

imagePaddingTop.value = "0";
imagePaddingRight.value = "0";
imagePaddingBottom.value = "0";
imagePaddingLeft.value = "0";


// All → apply same value to all sides
imagePaddingAll.addEventListener("input", () => {

    const value = imagePaddingAll.value;

    imagePaddingTop.value = value;
    imagePaddingRight.value = value;
    imagePaddingBottom.value = value;
    imagePaddingLeft.value = value;

    updateImagePadding();

});


// Show / hide individual padding
imagePaddingLink.onclick = () => {

    imagePaddingIndividual.classList.toggle("hidden");

};


function updateImagePadding() {

    const top = parseInt(imagePaddingTop.value) || 0;
    const right = parseInt(imagePaddingRight.value) || 0;
    const bottom = parseInt(imagePaddingBottom.value) || 0;
    const left = parseInt(imagePaddingLeft.value) || 0;

    const maxPad = Math.max(top, right, bottom, left);

    const minScale = 0.4;
    const maxScale = 1.0;

    const scale =
        maxScale - ((maxPad / 100) * (maxScale - minScale));

    const offsetX = (left - right) / 2;
    const offsetY = (top - bottom) / 2;

    [previewImage, iosPreviewImage, webPreviewImage].forEach(img => {

        img.style.transformOrigin = "center center";

        img.style.transform =
            `translate(${offsetX}%, ${offsetY}%) scale(${scale})`;

    });

}


imagePaddingTop.addEventListener("input", updateImagePadding);
imagePaddingRight.addEventListener("input", updateImagePadding);
imagePaddingBottom.addEventListener("input", updateImagePadding);
imagePaddingLeft.addEventListener("input", updateImagePadding);

updateImagePadding();

