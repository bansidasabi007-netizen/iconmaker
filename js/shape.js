const squareShape = document.getElementById("squareShape");
const squircleShape = document.getElementById("squircleShape");
const circleShape = document.getElementById("circleShape");

// const iconBackground = document.getElementById("iconBackground");
// const iosIconBackground = document.getElementById("iosIconBackground");
// const webTabIcon = document.getElementById("webTabIcon");



const shapeButtons = [
    squareShape,
    squircleShape,
    circleShape
];

function resetShapeButtons() {

    shapeButtons.forEach(button => {

        button.classList.remove(
            "bg-violet-500",
            "text-white",
            "border-violet-500"
        );

        button.classList.add(
            "bg-[#2B2532]",
            "text-white",
            "border",
            "border-[#45404D]"
        );

    });

}

// iOS icon ne hammesha square (original size) par lock rakhva mate
// iOS icon ne hammesha standard squircle shape par lock rakhva mate
// (original iPhone icon jevij - sharp square nahi)
function lockIosSquare() {

    // iOS icon — original IconKitchen size
    iosIconBackground.style.width = "56px";
    iosIconBackground.style.height = "56px";
    iosIconBackground.style.minWidth = "56px";
    iosIconBackground.style.minHeight = "56px";
    iosIconBackground.style.maxWidth = "56px";
    iosIconBackground.style.maxHeight = "56px";

    // iOS standard rounded-square shape
    iosIconBackground.style.borderRadius = "12px";

    // iOS text preview — same size
    iosPreviewText.style.width = "56px";
    iosPreviewText.style.height = "56px";
    iosPreviewText.style.minWidth = "56px";
    iosPreviewText.style.minHeight = "56px";
    iosPreviewText.style.borderRadius = "24px";
}
function applyShape(radius) {

    iconBackground.style.borderRadius = radius;
    // iOS ne have touch nathi karta - e hammesha square j rehshe
    webTabIcon.style.borderRadius = radius;

    if (radius === "24px") {

        // Squircle
        previewText.style.width = "52px";
        previewText.style.height = "52px";

        webPreviewText.style.width = "16px";
        webPreviewText.style.height = "16px";

    } else if (radius === "50%") {

        // Circle
        previewText.style.width = "54px";
        previewText.style.height = "54px";

        webPreviewText.style.width = "17px";
        webPreviewText.style.height = "17px";

    } else {

        // Square

        previewText.style.width = "56px";
        previewText.style.height = "56px";

        webPreviewText.style.width = "18px";
        webPreviewText.style.height = "18px";

    }

    // Ensure iOS stays square no matter what
    lockIosSquare();

}
squareShape.onclick = () => {

    resetShapeButtons();

    squareShape.classList.remove(
        "bg-[#2B2532]",
        "border-[#45404D]"
    );

    squareShape.classList.add(
        "bg-violet-500",
        "border-violet-500"
    );

    applyShape("0px");

};

squircleShape.onclick = () => {

    resetShapeButtons();

    squircleShape.classList.remove(
        "bg-[#2B2532]",
        "border-[#45404D]"
    );

    squircleShape.classList.add(
        "bg-violet-500",
        "border-violet-500"
    );

    applyShape("24px");

};

circleShape.onclick = () => {

    resetShapeButtons();

    circleShape.classList.remove(
        "bg-[#2B2532]",
        "border-[#45404D]"
    );

    circleShape.classList.add(
        "bg-violet-500",
        "border-violet-500"
    );

    applyShape("50%");

};

// Default
circleShape.click();

window.iconBackground = iconBackground;
window.iosIconBackground = iosIconBackground;
window.webTabIcon = webTabIcon;

const textSquareShape = document.getElementById("textSquareShape");
const textSquircleShape = document.getElementById("textSquircleShape");
const textCircleShape = document.getElementById("textCircleShape");

const textShapeButtons = [
    textSquareShape,
    textSquircleShape,
    textCircleShape
];

function resetTextShapeButtons() {

    textShapeButtons.forEach(button => {

        button.classList.remove("bg-violet-500", "border-violet-500");

        button.classList.add("bg-[#2B2532]", "border", "border-[#45404D]");

    });

}

function applyTextShape(radius) {

    previewText.style.borderRadius = radius;
    webPreviewText.style.borderRadius = radius;

    iconBackground.style.borderRadius = radius;
    webTabIcon.style.borderRadius = radius;

    // iOS ne square j rakhvu
    lockIosSquare();

}


textSquareShape.onclick = () => {

    resetTextShapeButtons();

    textSquareShape.classList.remove("bg-[#2B2532]", "border-[#45404D]");
    textSquareShape.classList.add("bg-violet-500", "border-violet-500");

    applyTextShape("0px");

};

textSquircleShape.onclick = () => {

    resetTextShapeButtons();

    textSquircleShape.classList.remove("bg-[#2B2532]", "border-[#45404D]");
    textSquircleShape.classList.add("bg-violet-500", "border-violet-500");

    applyTextShape("24px");

};

textCircleShape.onclick = () => {

    resetTextShapeButtons();

    textCircleShape.classList.remove("bg-[#2B2532]", "border-[#45404D]");
    textCircleShape.classList.add("bg-violet-500", "border-violet-500");

    applyTextShape("50%");

};

textCircleShape.click();

const imageSquareShape = document.getElementById("imageSquareShape");
const imageSquircleShape = document.getElementById("imageSquircleShape");
const imageCircleShape = document.getElementById("imageCircleShape");

const imageShapeButtons = [
    imageSquareShape,
    imageSquircleShape,
    imageCircleShape
];

function resetImageShapeButtons() {

    imageShapeButtons.forEach(button => {

        button.classList.remove("bg-violet-500", "border-violet-500");

        button.classList.add(
            "bg-[#2B2532]",
            "border",
            "border-[#45404D]"
        );

    });

}

function applyImageShape(radius) {

    iconBackground.style.borderRadius = radius;
    webTabIcon.style.borderRadius = radius;

    // iOS ne square j rakhvu
    lockIosSquare();

}

imageSquareShape.onclick = () => {

    resetImageShapeButtons();

    imageSquareShape.classList.remove("bg-[#2B2532]", "border-[#45404D]");
    imageSquareShape.classList.add("bg-violet-500", "border-violet-500");

    applyImageShape("0px");

};

imageSquircleShape.onclick = () => {

    resetImageShapeButtons();

    imageSquircleShape.classList.remove("bg-[#2B2532]", "border-[#45404D]");
    imageSquircleShape.classList.add("bg-violet-500", "border-violet-500");

    applyImageShape("24px");

};

imageCircleShape.onclick = () => {

    resetImageShapeButtons();

    imageCircleShape.classList.remove("bg-[#2B2532]", "border-[#45404D]");
    imageCircleShape.classList.add("bg-violet-500", "border-violet-500");

    applyImageShape("50%");

};

imageCircleShape.click();

// Page load thata j iOS icon ne square lock kari do
lockIosSquare();