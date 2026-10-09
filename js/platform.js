const androidPlatform = document.getElementById("androidPlatform");
const iosPlatform = document.getElementById("iosPlatform");

const androidPreview = document.getElementById("androidPreview");
const iosPreview = document.getElementById("iosPreview");
const webPlatform = document.getElementById("webPlatform");
const webPreview = document.getElementById("webPreview");

androidPlatform.onclick = () => {

    window.currentPlatform = "android";

    androidPreview.classList.remove("hidden");
    iosPreview.classList.add("hidden");
    webPreview.classList.add("hidden");

    androidPlatform.classList.remove("border", "border-[#433B4D]");
    androidPlatform.classList.add("border-2", "border-violet-500");

    iosPlatform.classList.remove("border-2", "border-violet-500");
    iosPlatform.classList.add("border", "border-[#433B4D]");

    webPlatform.classList.remove("border-2", "border-violet-500");
    webPlatform.classList.add("border", "border-[#433B4D]");

    document.getElementById("shapeSection").classList.remove("hidden");

    setTimeout(fixIconSize, 50);

};

iosPlatform.onclick = () => {

    window.currentPlatform = "ios";

    androidPreview.classList.add("hidden");
    iosPreview.classList.remove("hidden");
    webPreview.classList.add("hidden");

    iosPlatform.classList.remove("border", "border-[#433B4D]");
    iosPlatform.classList.add("border-2", "border-violet-500");

    androidPlatform.classList.remove("border-2", "border-violet-500");
    androidPlatform.classList.add("border", "border-[#433B4D]");

    webPlatform.classList.remove("border-2", "border-violet-500");
    webPlatform.classList.add("border", "border-[#433B4D]");

    document.getElementById("shapeSection").classList.add("hidden");

    setTimeout(fixIconSize, 50);
};


webPlatform.onclick = () => {

    window.currentPlatform = "web";

    androidPreview.classList.add("hidden");
    iosPreview.classList.add("hidden");
    webPreview.classList.remove("hidden");

    androidPlatform.classList.remove("border-2", "border-violet-500");
    androidPlatform.classList.add("border", "border-[#433B4D]");

    iosPlatform.classList.remove("border-2", "border-violet-500");
    iosPlatform.classList.add("border", "border-[#433B4D]");

    webPlatform.classList.remove("border", "border-[#433B4D]");
    webPlatform.classList.add("border-2", "border-violet-500");

    document.getElementById("shapeSection").classList.remove("hidden");

    setTimeout(fixIconSize, 50);
};

// ========================================
// SYNC SELECTED ICON WITH PLATFORM CARDS
// ========================================

function syncPlatformIcons() {

    const previewIcon =
        document.getElementById("previewIcon");

    const androidPlatformIcon =
        document.getElementById("androidPlatformIcon");

    const iosPlatformIcon =
        document.getElementById("iosPlatformIcon");

    const webPlatformIcon =
        document.getElementById("webPlatformIcon");

    if (!previewIcon) return;

    const selectedIcon =
        previewIcon.getAttribute("icon");

    if (!selectedIcon) return;


    // Android card
    if (androidPlatformIcon) {
        androidPlatformIcon.setAttribute(
            "icon",
            selectedIcon
        );
    }


    // iOS card
    if (iosPlatformIcon) {
        iosPlatformIcon.setAttribute(
            "icon",
            selectedIcon
        );
    }


    // Web card
    if (webPlatformIcon) {
        webPlatformIcon.setAttribute(
            "icon",
            selectedIcon
        );
    }
}


// ========================================
// WATCH MAIN PREVIEW ICON
// ========================================

const mainPreviewIcon =
    document.getElementById("previewIcon");

if (mainPreviewIcon) {

    const iconObserver =
        new MutationObserver(() => {

            syncPlatformIcons();

        });

    iconObserver.observe(mainPreviewIcon, {
        attributes: true,
        attributeFilter: ["icon"]
    });


    // Initial sync
    syncPlatformIcons();
}