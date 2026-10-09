const imageUpload = document.getElementById("imageUpload");
const uploadImageArea = document.getElementById("uploadImageArea");

const previewImage = document.getElementById("previewImage");
const iosPreviewImage = document.getElementById("iosPreviewImage");
const webPreviewImage = document.getElementById("webPreviewImage");

const imageCenterBtn = document.getElementById("imageCenterBtn");
const imageCropBtn = document.getElementById("imageCropBtn");

const imageMask = document.getElementById("imageMask");
const imageEffect = document.getElementById("imageEffect");

const imagePreviews = [
    previewImage,
    iosPreviewImage,
    webPreviewImage
];

function removeImageOutline() {

    imagePreviews.forEach(img => {

        if (!img) return;

        img.style.setProperty("border", "none", "important");
        img.style.setProperty("outline", "none", "important");
        img.style.setProperty("box-shadow", "none", "important");

        img.setAttribute("tabindex", "-1");

    });

}

// Remove any unwanted browser/CSS border from images
imagePreviews.forEach(img => {

    if (!img) return;

    img.style.setProperty("border", "none", "important");
    img.style.setProperty("outline", "none", "important");
    img.style.setProperty("box-shadow", "none", "important");

});


// ============================================================
// IMAGE BASE STYLE
// ============================================================

function resetImageStyles(img) {

    if (!img) return;

    // IMPORTANT:
    // Remove any unwanted browser/CSS border
    img.style.setProperty("border", "none", "important");
    img.style.setProperty("outline", "none", "important");
    img.style.setProperty("box-shadow", "none", "important");

    // Image should not have its own background
    img.style.setProperty("background", "transparent", "important");

    // Remove inline effects
    img.style.setProperty("outline-offset", "0", "important");

}


// ============================================================
// APPLY BASE STYLE TO ALL PREVIEWS
// ============================================================

function initializeImagePreviews() {

    imagePreviews.forEach(img => {

        if (!img) return;

        resetImageStyles(img);

        img.style.display = "none";

        img.style.width = "100%";
        img.style.height = "100%";

        img.style.objectFit = "contain";
        img.style.objectPosition = "center";

        img.style.borderRadius = "0";

    });

}

initializeImagePreviews();


// ============================================================
// OPEN FILE PICKER
// ============================================================

if (uploadImageArea && imageUpload) {

    uploadImageArea.addEventListener("click", () => {

        imageUpload.click();

    });

}


// ============================================================
// IMAGE SELECTED
// ============================================================

if (imageUpload) {

    imageUpload.addEventListener("change", () => {

        const file = imageUpload.files[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) {

            console.log("Selected file is not an image.");

            return;

        }

        const reader = new FileReader();

        reader.onload = function (e) {

            const imageUrl = e.target.result;


            // ---------------------------------------------
            // Set image on all previews
            // ---------------------------------------------

            imagePreviews.forEach(img => {

                if (!img) return;

                img.src = imageUrl;

                img.classList.remove("hidden");

                img.style.display = "block";

                resetImageStyles(img);

            });


            // ---------------------------------------------
            // Default scaling
            // ---------------------------------------------

            applyImageCenter();


            // ---------------------------------------------
            // Apply mask state
            // ---------------------------------------------

            applyImageMask();


            // ---------------------------------------------
            // Apply current effect
            // ---------------------------------------------

            applyImageEffect();


            // ---------------------------------------------
            // Hide icons
            // ---------------------------------------------

            if (typeof previewIcon !== "undefined") {
                previewIcon.style.display = "none";
            }

            if (typeof iosPreviewIcon !== "undefined") {
                iosPreviewIcon.style.display = "none";
            }

            if (typeof webPreviewIcon !== "undefined") {
                webPreviewIcon.style.display = "none";
            }


            // ---------------------------------------------
            // Hide text
            // ---------------------------------------------

            if (typeof previewText !== "undefined") {
                previewText.classList.add("hidden");
            }

            if (typeof iosPreviewText !== "undefined") {
                iosPreviewText.classList.add("hidden");
            }

            if (typeof webPreviewText !== "undefined") {
                webPreviewText.classList.add("hidden");
            }

        };

        reader.readAsDataURL(file);

    });

}


// ============================================================
// CENTER
// ============================================================

function applyImageCenter() {

    if (!imageCenterBtn || !imageCropBtn) return;


    imageCenterBtn.classList.add("bg-violet-500");
    imageCenterBtn.classList.remove(
        "bg-[#2B2532]",
        "border",
        "border-[#45404D]"
    );


    imageCropBtn.classList.remove("bg-violet-500");

    imageCropBtn.classList.add(
        "bg-[#2B2532]",
        "border",
        "border-[#45404D]"
    );


    imagePreviews.forEach(img => {

        if (!img) return;

        resetImageStyles(img);

        img.style.width = "100%";
        img.style.height = "100%";

        img.style.objectFit = "contain";
        img.style.objectPosition = "center";

    });

}


// ============================================================
// CENTER BUTTON
// ============================================================

if (imageCenterBtn) {

    imageCenterBtn.addEventListener("click", () => {

        applyImageCenter();

    });

}


// ============================================================
// CROP
// ============================================================

function applyImageCrop() {

    if (!imageCropBtn || !imageCenterBtn) return;


    imageCropBtn.classList.add("bg-violet-500");

    imageCropBtn.classList.remove(
        "bg-[#2B2532]",
        "border",
        "border-[#45404D]"
    );


    imageCenterBtn.classList.remove("bg-violet-500");

    imageCenterBtn.classList.add(
        "bg-[#2B2532]",
        "border",
        "border-[#45404D]"
    );


    imagePreviews.forEach(img => {

        if (!img) return;

        resetImageStyles(img);

        img.style.width = "100%";
        img.style.height = "100%";

        img.style.objectFit = "cover";
        img.style.objectPosition = "center";

    });

}


// ============================================================
// CROP BUTTON
// ============================================================

if (imageCropBtn) {

    imageCropBtn.addEventListener("click", () => {

        applyImageCrop();

    });

}


// ============================================================
// DEFAULT = CENTER
// ============================================================

if (imageCenterBtn) {

    imageCenterBtn.click();

}


// ============================================================
// MASK
// ============================================================

function applyImageMask() {

    if (!imageMask) return;


    imagePreviews.forEach(img => {

        if (!img) return;

        resetImageStyles(img);


        if (imageMask.checked) {

            img.style.borderRadius = "50%";

        } else {

            img.style.borderRadius = "0px";

        }

    });


    // Re-apply current effect after changing radius
    applyImageEffect();

}


if (imageMask) {

    imageMask.addEventListener("change", () => {

        applyImageMask();

    });

}


// ============================================================
// IMAGE EFFECT
// ============================================================

function applyImageEffect() {

    if (!imageEffect) return;


    imagePreviews.forEach(img => {

        if (!img) return;


        // ALWAYS remove unwanted border
        img.style.setProperty("border", "none", "important");
        img.style.setProperty("outline", "none", "important");


        switch (imageEffect.value) {

            case "shadow":

                img.style.filter =
                    "drop-shadow(0px 6px 12px rgba(0,0,0,0.45))";

                break;


            case "cast":

                img.style.filter =
                    "drop-shadow(8px 8px 0 rgba(0,0,0,0.35))";

                break;


            case "glow":

                img.style.filter =
                    "drop-shadow(0 0 12px #a855f7)";

                break;


            case "outline":

                img.style.filter =
                    "drop-shadow(0 0 1px rgba(255,255,255,0.8))";

                break;


            default:

                img.style.filter = "none";

                break;

        }

    });

}


// ============================================================
// EFFECT CHANGE
// ============================================================

if (imageEffect) {

    imageEffect.addEventListener("change", () => {

        applyImageEffect();

    });

}


// ============================================================
// FINAL BORDER PROTECTION
// ============================================================

// Prevent other code/CSS from leaving a border
imagePreviews.forEach(img => {

    if (!img) return;

    img.style.setProperty("border", "none", "important");
    img.style.setProperty("outline", "none", "important");
    img.style.setProperty("box-shadow", "none", "important");

});