const textureSelect = document.getElementById("textureSelect");

const androidTexture = document.getElementById("androidTexture");
const iosTexture = document.getElementById("iosTexture");
const webTexture = document.getElementById("webTexture");

const textTextureSelect = document.getElementById("textTextureSelect");
const textTextureColorBtn = document.getElementById("textTextureColorBtn");
const textTextureColor = document.getElementById("textTextureColor");

const androidTextTexture = document.getElementById("androidTexture");
const iosTextTexture = document.getElementById("iosTexture");
const webTextTexture = document.getElementById("webTexture");

const imageTextureSelect = document.getElementById("imageTextureSelect");

// Apply texture to all previews
function applyTexture(path) {

    [androidTexture, iosTexture, webTexture].forEach(texture => {

        texture.classList.add("hidden");
        texture.removeAttribute("src");

        setTimeout(() => {

            texture.src = path + "?v=" + Date.now();
            texture.classList.remove("hidden");

        }, 0);

    });

}

function hideTextTextures() {

    [androidTextTexture, iosTextTexture, webTextTexture].forEach(texture => {

        texture.classList.add("hidden");

    });

}

function updateTextTexture() {

    textTextureSelect.blur();

    const texture = textTextureSelect.value
        .toLowerCase()
        .replace(/\s+/g, "_");

    if (texture === "none") {

        hideTextTextures();
        return;

    }

    const path = `assets/textures/${texture}.svg`;

    applyTextTexture(path);

}

function applyTextTexture(path) {

    [androidTextTexture, iosTextTexture, webTextTexture].forEach(texture => {

        texture.classList.add("hidden");
        texture.removeAttribute("src");

        setTimeout(() => {

            texture.src = path + "?v=" + Date.now();
            texture.classList.remove("hidden");

        }, 0);

    });

}
// Hide texture from all previews
function hideTextures() {

    [androidTexture, iosTexture, webTexture].forEach(texture => {

        texture.classList.add("hidden");
        texture.removeAttribute("src");

    });

}
// Update texture
function updateTexture() {

    textureSelect.value = textureSelect.value || "none";

    const texture = textureSelect.value
        .toLowerCase()
        .replace(/\s+/g, "_");

    if (texture === "none") {

        hideTextures();
        return;

    }

    const path = `assets/textures/${texture}.svg`;

    applyTexture(path);

}
function updateImageTexture() {

    const texture = imageTextureSelect.value
        .toLowerCase()
        .replace(/\s+/g, "_");

    if (texture === "none") {

        hideTextures();
        return;

    }

    const path = `assets/textures/${texture}.svg`;

    applyTexture(path);

}

textureSelect.value = "none";
hideTextures();

textTextureSelect.value = "none";   // 👈 add karo
hideTextTextures();                 // 👈 hideTextures() nahi, aa saachu function chhe

imageTextureSelect.value = "none";  // 👈 add karo
hideTextures();

// Event
textureSelect.addEventListener("change", updateTexture);

// Initial Load
updateTexture();

textTextureSelect.value = "none";
hideTextTextures();

textTextureSelect.addEventListener("change", updateTextTexture);

imageTextureSelect.addEventListener("change", updateImageTexture);

updateImageTexture();