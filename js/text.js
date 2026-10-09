const textInput = document.getElementById("textInput");
const fontSelect = document.getElementById("fontSelect");
const textColor = document.getElementById("textColor");
const textEffect = document.getElementById("textEffect");

const boldBtn = document.getElementById("boldBtn");
const italicBtn = document.getElementById("italicBtn");

// ================= FONT OPTIONS =================

const fonts = [
    "Arial",
    "Helvetica",
    "Verdana",
    "Tahoma",
    "Trebuchet MS",
    "Times New Roman",
    "Georgia",
    "Garamond",
    "Courier New",
    "Impact",
    "Comic Sans MS"
];

fonts.forEach(font => {

    const option = document.createElement("option");

    option.value = font;
    option.textContent = font;

    option.style.fontFamily = font;

    fontSelect.appendChild(option);

});


// Default font
fontSelect.value = "Arial";


// ================= TEXT STYLE =================

let isBold = false;
let isItalic = false;


function updateTextStyle() {

    const font = fontSelect.value;

    [previewText, iosPreviewText, webPreviewText].forEach(text => {

        if (!text) return;

        text.style.fontFamily = font;
        text.style.fontWeight = isBold ? "700" : "400";
        text.style.fontStyle = isItalic ? "italic" : "normal";

    });

}


// ================= FONT CHANGE =================

fontSelect.addEventListener("change", () => {

    updateTextStyle();

});


// ================= BOLD =================

boldBtn.addEventListener("click", () => {

    isBold = !isBold;

    boldBtn.classList.toggle("bg-violet-500", isBold);
    boldBtn.classList.toggle("text-white", isBold);

    updateTextStyle();

});


// ================= ITALIC =================

italicBtn.addEventListener("click", () => {

    isItalic = !isItalic;

    italicBtn.classList.toggle("bg-violet-500", isItalic);
    italicBtn.classList.toggle("text-white", isItalic);

    updateTextStyle();

});


updateTextStyle();

textInput.addEventListener("input", () => {

    const value = textInput.value.trim();

    if (value === "") {

        // Show icons
        previewIcon.style.display = "flex";
        iosPreviewIcon.style.display = "flex";
        webPreviewIcon.style.display = "flex";

        previewText.style.width = "100%";
        previewText.style.height = "100%";

        iosPreviewText.style.width = "100%";
        iosPreviewText.style.height = "100%";

        webPreviewText.style.width = "100%";
        webPreviewText.style.height = "100%";

        // Hide text
        previewText.classList.add("hidden");
        iosPreviewText.classList.add("hidden");
        webPreviewText.classList.add("hidden");

        previewText.style.display = "none";
        iosPreviewText.style.display = "none";
        webPreviewText.style.display = "none";

        return;
    }

    // Hide icons
    previewIcon.style.display = "none";
    iosPreviewIcon.style.display = "none";
    webPreviewIcon.style.display = "none";

    // Show text
    previewText.classList.remove("hidden");
    iosPreviewText.classList.remove("hidden");
    webPreviewText.classList.remove("hidden");

    previewText.style.display = "flex";
    iosPreviewText.style.display = "flex";
    webPreviewText.style.display = "flex";

    // Update text
    document.getElementById("previewTextValue").textContent = value;
    document.getElementById("iosPreviewTextValue").textContent = value;
    document.getElementById("webPreviewTextValue").textContent = value;

    const webText = document.getElementById("webPreviewTextValue");

    const len = value.length;

    if (len <= 2) {
        webText.style.fontSize = "10px";
    } else if (len <= 4) {
        webText.style.fontSize = "8px";
    } else if (len <= 6) {
        webText.style.fontSize = "6px";
    } else {
        webText.style.fontSize = "5px";
    }

});

// Color — registered ONCE, works anytime (even before typing)
textColor.addEventListener("input", () => {

    const color = textColor.value;

    previewText.style.color = color;
    iosPreviewText.style.color = color;
    webPreviewText.style.color = color;

});

// Effect — registered ONCE, works anytime (even before typing)
textEffect.addEventListener("change", () => {

    const effect = textEffect.value;

    [previewText, iosPreviewText, webPreviewText].forEach(text => {

        // Reset
        text.style.textShadow = "";
        text.style.webkitTextStroke = "";

        switch (effect) {

            case "Shadow":
                text.style.textShadow = "2px 2px 6px rgba(0,0,0,0.5)";
                break;

            case "Glow":
                text.style.textShadow = "0 0 8px white, 0 0 16px white";
                break;

            case "Outline":
                text.style.webkitTextStroke = "1px black";
                break;

            default:
                break;

        }

    });

});