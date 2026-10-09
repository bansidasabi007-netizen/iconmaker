const bgColorBtn = document.getElementById("bgColorBtn");
const bgGradientBtn = document.getElementById("bgGradientBtn");
const bgMeshBtn = document.getElementById("bgMeshBtn");
const bgImageBtn = document.getElementById("bgImageBtn");

const textGradientColor1 = document.getElementById("textGradientColor1");
const textGradientColor2 = document.getElementById("textGradientColor2");
const textGradientAngle = document.getElementById("textGradientAngle");

const textMeshStyle = document.getElementById("textMeshStyle");
const textMeshColor1 = document.getElementById("textMeshColor1");
const textMeshColor2 = document.getElementById("textMeshColor2");

const colorControls = document.getElementById("colorControls");
const gradientControls = document.getElementById("gradientControls");

const meshControls = document.getElementById("meshControls");
const meshStyle = document.getElementById("meshStyle");

const meshColor1 = document.getElementById("meshColor1");
const meshColor2 = document.getElementById("meshColor2");

const backgroundColor = document.getElementById("backgroundColor");
const gradientColor1 = document.getElementById("gradientColor1");
const gradientColor2 = document.getElementById("gradientColor2");
const gradientAngle = document.getElementById("gradientAngle");

const iconBackground = document.getElementById("iconBackground");
const iosIconBackground = document.getElementById("iosIconBackground");
const webTabIcon = document.getElementById("webTabIcon");

const backgroundImageInput = document.getElementById("backgroundImageInput");
const textBackgroundColor = document.getElementById("textBackgroundColor");

const textBackgroundImageInput = document.getElementById("textBackgroundImageInput");
const textUploadImageBtn = document.getElementById("textUploadImageBtn");

const imageBackgroundColor = document.getElementById("imageBackgroundColor");

const imageBgColorBtn = document.getElementById("imageBgColorBtn");
const imageBgGradientBtn = document.getElementById("imageBgGradientBtn");
const imageBgMeshBtn = document.getElementById("imageBgMeshBtn");

const imageColorControls = document.getElementById("imageColorControls");
const imageGradientControls = document.getElementById("imageGradientControls");
const imageMeshControls = document.getElementById("imageMeshControls");

const imageBgImageBtn = document.getElementById("imageBgImageBtn");

const imageImageControls = document.getElementById("imageImageControls");

const imageBackgroundImageInput = document.getElementById("imageBackgroundImageInput");

const imageUploadImageBtn = document.getElementById("imageUploadImageBtn");

function resetButtons() {

    [
        bgColorBtn,
        bgGradientBtn,
        bgMeshBtn,
        bgImageBtn
    ].forEach(btn => {

        btn.classList.remove("bg-violet-500");
        btn.classList.add("bg-[#2B2532]");
        btn.classList.add("border");
        btn.classList.add("border-[#45404D]");

    });

}

function applyBackground(value) {

    iconBackground.style.background = value;
    iosIconBackground.style.background = value;
    webTabIcon.style.background = value;

}

function updateGradient() {

    const gradient = `linear-gradient(
        ${gradientAngle.value}deg,
        ${gradientColor1.value},
        ${gradientColor2.value}
    )`;

    applyBackground(gradient);

}

function updateMesh() {

    let mesh = "";

    const c1 = meshColor1.value;
    const c2 = meshColor2.value;

    switch (meshStyle.value) {

        case "mesh1":
            mesh = `
                radial-gradient(circle at 20% 20%, ${c1}, transparent 40%),
                radial-gradient(circle at 80% 80%, ${c2}, transparent 45%),
                #4C1D95
            `;
            break;

        case "mesh2":
            mesh = `
                radial-gradient(circle at 10% 10%, ${c1}, transparent 40%),
                radial-gradient(circle at 90% 90%, ${c2}, transparent 45%),
                #7C2D12
            `;
            break;

        case "mesh3":
            mesh = `
                radial-gradient(circle at 20% 30%, ${c1}, transparent 40%),
                radial-gradient(circle at 80% 70%, ${c2}, transparent 45%),
                #1E3A8A
            `;
            break;

        case "mesh4":
            mesh = `
                radial-gradient(circle at 30% 20%, ${c1}, transparent 40%),
                radial-gradient(circle at 80% 80%, ${c2}, transparent 45%),
                #14532D
            `;
            break;

        case "mesh5":
            mesh = `
                radial-gradient(circle at 30% 20%, ${c1}, transparent 40%),
                radial-gradient(circle at 80% 80%, ${c2}, transparent 45%),
                #312E81
            `;
            break;

    }

    applyBackground(mesh);

}

function updateTextMesh() {

    let mesh = "";

    const c1 = textMeshColor1.value;
    const c2 = textMeshColor2.value;

    switch (textMeshStyle.value) {

        case "mesh1":
            mesh = `
                radial-gradient(circle at 20% 20%, ${c1}, transparent 40%),
                radial-gradient(circle at 80% 80%, ${c2}, transparent 45%),
                #4C1D95
            `;
            break;

        case "mesh2":
            mesh = `
                radial-gradient(circle at 10% 10%, ${c1}, transparent 40%),
                radial-gradient(circle at 90% 90%, ${c2}, transparent 45%),
                #7C2D12
            `;
            break;

        case "mesh3":
            mesh = `
                radial-gradient(circle at 20% 30%, ${c1}, transparent 40%),
                radial-gradient(circle at 80% 70%, ${c2}, transparent 45%),
                #1E3A8A
            `;
            break;

        case "mesh4":
            mesh = `
                radial-gradient(circle at 30% 20%, ${c1}, transparent 40%),
                radial-gradient(circle at 80% 80%, ${c2}, transparent 45%),
                #14532D
            `;
            break;

        case "mesh5":
            mesh = `
                radial-gradient(circle at 30% 20%, ${c1}, transparent 40%),
                radial-gradient(circle at 80% 80%, ${c2}, transparent 45%),
                #312E81
            `;
            break;

    }

    applyTextBackground(mesh);

}

// COLOR
bgColorBtn.onclick = () => {

    resetButtons();

    bgColorBtn.classList.remove("bg-[#2B2532]");
    bgColorBtn.classList.add("bg-violet-500");

    colorControls.classList.remove("hidden");
    gradientControls.classList.add("hidden");
    meshControls.classList.add("hidden");

    applyBackground(backgroundColor.value);

};


// COLOR PICKER
backgroundColor.addEventListener("input", () => {

    if (!bgColorBtn.classList.contains("bg-violet-500")) return;

    applyBackground(backgroundColor.value);

});


// GRADIENT
bgGradientBtn.onclick = () => {

    resetButtons();

    bgGradientBtn.classList.remove("bg-[#2B2532]");
    bgGradientBtn.classList.add("bg-violet-500");

    colorControls.classList.add("hidden");
    gradientControls.classList.remove("hidden");
    meshControls.classList.add("hidden");

    updateGradient();

};
function updateTextGradient() {

    const gradient = `linear-gradient(
        ${textGradientAngle.value}deg,
        ${textGradientColor1.value},
        ${textGradientColor2.value}
    )`;

    applyTextBackground(gradient);

}

// Gradient Controls
gradientColor1.addEventListener("input", updateGradient);
gradientColor2.addEventListener("input", updateGradient);
gradientAngle.addEventListener("input", updateGradient);


// MESH
bgMeshBtn.onclick = () => {

    resetButtons();

    bgMeshBtn.classList.remove("bg-[#2B2532]");
    bgMeshBtn.classList.add("bg-violet-500");

    colorControls.classList.add("hidden");
    gradientControls.classList.add("hidden");
    meshControls.classList.remove("hidden");

    updateMesh();

};


// IMAGE
bgImageBtn.onclick = () => {

    resetButtons();

    bgImageBtn.classList.remove("bg-[#2B2532]");
    bgImageBtn.classList.add("bg-violet-500");

    colorControls.classList.add("hidden");
    gradientControls.classList.add("hidden");
    meshControls.classList.add("hidden");

    backgroundImageInput.click();

};


backgroundImageInput.addEventListener("change", (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    iconBackground.style.backgroundImage = `url(${imageUrl})`;
    iosIconBackground.style.backgroundImage = `url(${imageUrl})`;
    webTabIcon.style.backgroundImage = `url(${imageUrl})`;

    iconBackground.style.backgroundSize = "cover";
    iosIconBackground.style.backgroundSize = "cover";
    webTabIcon.style.backgroundSize = "cover";

    iconBackground.style.backgroundPosition = "center";
    iosIconBackground.style.backgroundPosition = "center";
    webTabIcon.style.backgroundPosition = "center";

    [iconBackground, iosIconBackground, webTabIcon].forEach(bg => {
        bg.style.backgroundRepeat = "no-repeat";
        bg.style.backgroundSize = "cover";
        bg.style.backgroundPosition = "center";
        bg.style.backgroundClip = "padding-box";
        bg.style.overflow = "hidden";
    });

});


meshStyle.addEventListener("change", updateMesh);
meshColor1.addEventListener("input", updateMesh);
meshColor2.addEventListener("input", updateMesh);






const textBgColorBtn = document.getElementById("textBgColorBtn");
const textBgGradientBtn = document.getElementById("textBgGradientBtn");
const textBgMeshBtn = document.getElementById("textBgMeshBtn");
const textBgImageBtn = document.getElementById("textBgImageBtn");

const textColorControls = document.getElementById("textColorControls");
const textGradientControls = document.getElementById("textGradientControls");
const textMeshControls = document.getElementById("textMeshControls");
const textImageControls = document.getElementById("textImageControls");

function setTextBackgroundTab(type) {

    textColorControls.classList.add("hidden");
    textGradientControls.classList.add("hidden");
    textMeshControls.classList.add("hidden");
    textImageControls.classList.add("hidden");

    textBgColorBtn.classList.remove("bg-violet-500");
    textBgGradientBtn.classList.remove("bg-violet-500");
    textBgMeshBtn.classList.remove("bg-violet-500");
    textBgImageBtn.classList.remove("bg-violet-500");

    textBgColorBtn.classList.add("bg-[#2B2532]");
    textBgGradientBtn.classList.add("bg-[#2B2532]");
    textBgMeshBtn.classList.add("bg-[#2B2532]");
    textBgImageBtn.classList.add("bg-[#2B2532]");

    switch (type) {

        case "color":
            textColorControls.classList.remove("hidden");
            textBgColorBtn.classList.remove("bg-[#2B2532]");
            textBgColorBtn.classList.add("bg-violet-500");
            break;

        case "gradient":
            textGradientControls.classList.remove("hidden");
            textBgGradientBtn.classList.remove("bg-[#2B2532]");
            textBgGradientBtn.classList.add("bg-violet-500");
            break;

        case "mesh":
            textMeshControls.classList.remove("hidden");
            textBgMeshBtn.classList.remove("bg-[#2B2532]");
            textBgMeshBtn.classList.add("bg-violet-500");
            break;

        case "image":
            textImageControls.classList.remove("hidden");
            textBgImageBtn.classList.remove("bg-[#2B2532]");
            textBgImageBtn.classList.add("bg-violet-500");
            break;

    }

}

function applyTextBackground(value) {

    previewText.style.background = value;
    iosPreviewText.style.background = value;
    webPreviewText.style.background = value;

}

textBgColorBtn.onclick = () => {

    setTextBackgroundTab("color");

    applyTextBackground(textBackgroundColor.value);

};

textBackgroundColor.addEventListener("input", () => {

    if (!textBgColorBtn.classList.contains("bg-violet-500")) return;

    applyTextBackground(textBackgroundColor.value);

});

// textBackgroundColor.addEventListener("input", () => {

//     if (!textBgColorBtn.classList.contains("bg-violet-500")) return;

//     previewText.style.background = textBackgroundColor.value;
//     iosPreviewText.style.background = textBackgroundColor.value;
//     webPreviewText.style.background = textBackgroundColor.value;

// });
textBgGradientBtn.onclick = () => {

    setTextBackgroundTab("gradient");

    updateTextGradient();

};
textBgMeshBtn.onclick = () => {

    setTextBackgroundTab("mesh");

    updateTextMesh();

};
textBgImageBtn.onclick = () => {

    setTextBackgroundTab("image");

};

setTextBackgroundTab("color");
textGradientColor1.addEventListener("input", updateTextGradient);
textGradientColor2.addEventListener("input", updateTextGradient);
textGradientAngle.addEventListener("input", updateTextGradient);

textMeshStyle.addEventListener("change", updateTextMesh);
textMeshColor1.addEventListener("input", updateTextMesh);
textMeshColor2.addEventListener("input", updateTextMesh);

textUploadImageBtn.onclick = () => {

    textBackgroundImageInput.click();

};

textBackgroundImageInput.addEventListener("change", (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    previewText.style.backgroundImage = `url(${imageUrl})`;
    iosPreviewText.style.backgroundImage = `url(${imageUrl})`;
    webPreviewText.style.backgroundImage = `url(${imageUrl})`;

    previewText.style.backgroundSize = "cover";
    iosPreviewText.style.backgroundSize = "cover";
    webPreviewText.style.backgroundSize = "cover";

    previewText.style.backgroundPosition = "center";
    iosPreviewText.style.backgroundPosition = "center";
    webPreviewText.style.backgroundPosition = "center";

});

function applyImageBackground() {

    const color = imageBackgroundColor.value;

    [previewImage, iosPreviewImage, webPreviewImage].forEach(img => {

        if (!img) return;

        img.parentElement.style.background = color;

    });

}

function setImageBackgroundTab(type) {

    imageColorControls.classList.add("hidden");
    imageGradientControls.classList.add("hidden");
    imageMeshControls.classList.add("hidden");
    imageImageControls.classList.add("hidden");

    imageBgColorBtn.classList.remove("bg-violet-500");
    imageBgGradientBtn.classList.remove("bg-violet-500");
    imageBgMeshBtn.classList.remove("bg-violet-500");
    imageBgImageBtn.classList.remove("bg-violet-500");

    imageBgColorBtn.classList.add("bg-[#2B2532]");
    imageBgGradientBtn.classList.add("bg-[#2B2532]");
    imageBgMeshBtn.classList.add("bg-[#2B2532]");
    imageBgImageBtn.classList.add("bg-[#2B2532]");

    switch (type) {

        case "color":
            imageColorControls.classList.remove("hidden");
            imageBgColorBtn.classList.remove("bg-[#2B2532]");
            imageBgColorBtn.classList.add("bg-violet-500");
            break;

        case "gradient":
            imageGradientControls.classList.remove("hidden");
            imageBgGradientBtn.classList.remove("bg-[#2B2532]");
            imageBgGradientBtn.classList.add("bg-violet-500");
            break;

        case "mesh":
            imageMeshControls.classList.remove("hidden");
            imageBgMeshBtn.classList.remove("bg-[#2B2532]");
            imageBgMeshBtn.classList.add("bg-violet-500");
            break;
    }

}

function updateImageGradient() {

    const gradient = `linear-gradient(
        ${imageGradientAngle.value}deg,
        ${imageGradientColor1.value},
        ${imageGradientColor2.value}
    )`;

    [previewImage, iosPreviewImage, webPreviewImage].forEach(img => {

        if (img && img.parentElement) {
            img.parentElement.style.background = gradient;
        }

    });

}

function updateImageMesh() {

    let mesh = "";

    const c1 = imageMeshColor1.value;
    const c2 = imageMeshColor2.value;

    switch (imageMeshStyle.value) {

        case "mesh1":
            mesh = `
                radial-gradient(circle at 20% 20%, ${c1}, transparent 40%),
                radial-gradient(circle at 80% 80%, ${c2}, transparent 45%),
                #4C1D95
            `;
            break;

        case "mesh2":
            mesh = `
                radial-gradient(circle at 10% 10%, ${c1}, transparent 40%),
                radial-gradient(circle at 90% 90%, ${c2}, transparent 45%),
                #7C2D12
            `;
            break;

        case "mesh3":
            mesh = `
                radial-gradient(circle at 20% 30%, ${c1}, transparent 40%),
                radial-gradient(circle at 80% 70%, ${c2}, transparent 45%),
                #1E3A8A
            `;
            break;

        case "mesh4":
            mesh = `
                radial-gradient(circle at 30% 20%, ${c1}, transparent 40%),
                radial-gradient(circle at 80% 80%, ${c2}, transparent 45%),
                #14532D
            `;
            break;

        case "mesh5":
            mesh = `
                radial-gradient(circle at 30% 20%, ${c1}, transparent 40%),
                radial-gradient(circle at 80% 80%, ${c2}, transparent 45%),
                #312E81
            `;
            break;

        case "image":

            imageImageControls.classList.remove("hidden");

            imageBgImageBtn.classList.remove("bg-[#2B2532]");
            imageBgImageBtn.classList.add("bg-violet-500");

            break;
    }

    [previewImage, iosPreviewImage, webPreviewImage].forEach(img => {
        if (img && img.parentElement) {
            img.parentElement.style.background = mesh;
        }
    });

}

imageBgColorBtn.onclick = () => {
    setImageBackgroundTab("color");
    applyImageBackground();
};

imageBgGradientBtn.onclick = () => {
    setImageBackgroundTab("gradient");
    updateImageGradient();
};

imageBgMeshBtn.onclick = () => {
    setImageBackgroundTab("mesh");
    updateImageMesh();
};

imageBgImageBtn.onclick = () => {

    setImageBackgroundTab("image");
    imageBackgroundImageInput.click();

};

imageUploadImageBtn.onclick = () => {

    imageBackgroundImageInput.click();

};

imageMeshStyle.addEventListener("change", updateImageMesh);
imageMeshColor1.addEventListener("input", updateImageMesh);
imageMeshColor2.addEventListener("input", updateImageMesh);


imageGradientColor1.addEventListener("input", updateImageGradient);
imageGradientColor2.addEventListener("input", updateImageGradient);
imageGradientAngle.addEventListener("input", updateImageGradient);

setImageBackgroundTab("color");

imageBackgroundColor.addEventListener("input", applyImageBackground);

applyImageBackground();

imageBackgroundImageInput.addEventListener("change", (e) => {

    const file = e.target.files[0];

    if (!file) return;
    
    const imageUrl = URL.createObjectURL(file);

    [
        previewImage.parentElement,
        iosPreviewImage.parentElement,
        webPreviewImage.parentElement
    ].forEach(bg => {

        if (!bg) return;

        bg.style.backgroundImage = `url(${imageUrl})`;
        bg.style.backgroundSize = "cover";
        bg.style.backgroundPosition = "center";
        bg.style.backgroundRepeat = "no-repeat";

    });

});