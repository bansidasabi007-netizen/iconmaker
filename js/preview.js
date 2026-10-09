const iconColor = document.getElementById("iconColor");

iconColor.addEventListener("input", () => {

    if (themedToggle.checked) return;

    const color = iconColor.value;

    document.getElementById("previewIcon").style.color = color;
    document.getElementById("iosPreviewIcon").style.color = color;
    document.getElementById("webPreviewIcon").style.color = color;

});

const appNameInput = document.getElementById("appNameInput");

appNameInput.addEventListener("input", () => {

    const name = appNameInput.value || "App Name";

    document.getElementById("appName").textContent = name;
    document.getElementById("iosAppName").textContent = name;
    document.getElementById("webTabName").textContent = name;

});