const clipartTab = document.getElementById("clipartTab");
const textTab = document.getElementById("textTab");
const imageTab = document.getElementById("imageTab");

const clipartPanel = document.getElementById("clipartPanel");
const textPanel = document.getElementById("textPanel");
const imagePanel = document.getElementById("imagePanel");

const previewText = document.getElementById("previewText");
const iosPreviewText = document.getElementById("iosPreviewText");
const webPreviewText = document.getElementById("webPreviewText");

function setIconVisible(visible) {
    [previewIcon, iosPreviewIcon, webPreviewIcon].forEach(el => {
        el.style.display = visible ? "flex" : "none";
    });
}

function setTextVisible(visible) {
    [previewText, iosPreviewText, webPreviewText].forEach(el => {
        el.style.display = visible ? "flex" : "none";
        el.classList.toggle("hidden", !visible);
    });
}

function setImageVisible(visible) {
    [previewImage, iosPreviewImage, webPreviewImage].forEach(el => {
        el.style.display = visible ? "block" : "none";
        el.classList.toggle("hidden", !visible);
    });
}

// Show Clipart
clipartTab.onclick = () => {

    clipartPanel.classList.remove("hidden");
    textPanel.classList.add("hidden");
    imagePanel.classList.add("hidden");
    clipartTab.classList.add("bg-violet-500");
    textTab.classList.remove("bg-violet-500");
    imageTab.classList.remove("bg-violet-500");

    setIconVisible(true);
    setTextVisible(false);
    setImageVisible(false);

};

// Show Text
textTab.onclick = () => {

    clipartPanel.classList.add("hidden");
    imagePanel.classList.add("hidden");
    textPanel.classList.remove("hidden");

    clipartTab.classList.remove("bg-violet-500");
    textTab.classList.add("bg-violet-500");
    imageTab.classList.remove("bg-violet-500");

    setIconVisible(false);
    setTextVisible(true);
    setImageVisible(false);

};

// Show Image
imageTab.onclick = () => {

    clipartPanel.classList.add("hidden");
    textPanel.classList.add("hidden");
    imagePanel.classList.remove("hidden");

    clipartTab.classList.remove("bg-violet-500");
    textTab.classList.remove("bg-violet-500");
    imageTab.classList.add("bg-violet-500");

    setIconVisible(false);
    setTextVisible(false);
    setImageVisible(true);

};

// Initial state — Clipart tab active by default
setIconVisible(true);
setTextVisible(false);
setImageVisible(false);