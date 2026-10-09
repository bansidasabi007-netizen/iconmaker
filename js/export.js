const downloadBtn = document.getElementById("downloadBtn");

function createCanvas(size = 1024) {

    const canvas = document.createElement("canvas");

    canvas.width = size;
    canvas.height = size;

    return {
        canvas,
        ctx: canvas.getContext("2d")
    };

}

function drawBackground(ctx, color) {

    ctx.fillStyle = color;

    ctx.fillRect(
        0,
        0,
        1024,
        1024
    );

}

window.currentPlatform = "android";

// Jyare ek platform nu tab active hoy, biju platform nu preview element
// (display:none / hidden class thi) chupayelu hoy chhe. Aavu hidden element
// export karva jata pehla temporary visible banavvu jaruri chhe, nahi to
// htmlToImage.toPng() 0-size / blank image aape ke fail thay.
function forceVisible(el) {

    const changed = [];
    let node = el;

    while (node && node !== document.body && node !== null) {

        const computed = window.getComputedStyle(node);
        const wasHiddenByDisplay = computed.display === "none";
        const wasHiddenByVisibility = computed.visibility === "hidden";

        if (wasHiddenByDisplay || wasHiddenByVisibility) {

            const entry = {
                node,
                prevInlineDisplay: node.style.display,
                prevInlineVisibility: node.style.visibility,
                prevInlinePosition: node.style.position,
                prevInlineLeft: node.style.left,
                prevInlineTop: node.style.top
            };

            if (wasHiddenByDisplay) {

                node.style.display = "block";

                // Panel ne DOM ma properly render thava do, pan screen ni
                // bahar rakho jethi user ne fadko/flash na dekhay.
                node.style.position = "fixed";
                node.style.left = "-99999px";
                node.style.top = "0";

            }

            if (wasHiddenByVisibility) {
                node.style.visibility = "visible";
            }

            changed.push(entry);

        }

        node = node.parentElement;

    }

    return changed;

}

function restoreVisibility(changed) {

    changed.forEach((entry) => {

        entry.node.style.display = entry.prevInlineDisplay;
        entry.node.style.visibility = entry.prevInlineVisibility;
        entry.node.style.position = entry.prevInlinePosition;
        entry.node.style.left = entry.prevInlineLeft;
        entry.node.style.top = entry.prevInlineTop;

    });

}

// Ek element ne base PNG (base64) banave - pachi ame e ne resize kari ne badha sizes kadhishu
async function exportIcon(element, ratio) {

    if (!element) {
        throw new Error("exportIcon: element not found (undefined/null)");
    }

    const restoreList = forceVisible(element);

    try {

        element.querySelectorAll("img").forEach(img => {
            if (!img.src || img.naturalWidth === 0) {
                img.remove();
            }
        });

        // Force layout ne settle thava do (hidden -> visible thaya pachi
        // browser ne ek frame joie sacha dimensions calculate karva)
        await new Promise((resolve) => requestAnimationFrame(resolve));

        if (element.offsetWidth === 0 || element.offsetHeight === 0) {
            throw new Error(
                "exportIcon: element has zero size even after making it visible. " +
                "Check CSS (width/height/display) for this preview panel."
            );
        }

        return await htmlToImage.toPng(element, {
            pixelRatio: ratio,
            backgroundColor: null,
            cacheBust: true
        });

    } finally {

        restoreVisibility(restoreList);

    }

}

// Base64 PNG ne dataURL mathi ek specific pixel size na PNG blob ma resize kare
function resizeDataUrlToBlob(dataUrl, size) {

    return new Promise((resolve) => {

        const img = new Image();

        img.onload = () => {

            const canvas = document.createElement("canvas");
            canvas.width = size;
            canvas.height = size;

            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, size, size);

            canvas.toBlob((blob) => resolve(blob), "image/png");

        };

        img.src = dataUrl;

    });

}

// ============ ANDROID SIZES ============
const ANDROID_DENSITIES = [
    { folder: "mipmap-mdpi", size: 48 },
    { folder: "mipmap-hdpi", size: 72 },
    { folder: "mipmap-xhdpi", size: 96 },
    { folder: "mipmap-xxhdpi", size: 144 },
    { folder: "mipmap-xxxhdpi", size: 192 }
];

// Android nu icon banavi ne aapela zip (ke zip folder) ma umeri de
async function addAndroidFiles(targetZip, baseDataUrl) {

    for (const d of ANDROID_DENSITIES) {

        const blob = await resizeDataUrlToBlob(baseDataUrl, d.size);
        targetZip.folder(d.folder).file("ic_launcher.png", blob);

    }

    // Play Store icon (512x512)
    const storeBlob = await resizeDataUrlToBlob(baseDataUrl, 512);
    targetZip.file("play_store_512.png", storeBlob);

}

// ============ IOS SIZES ============
const IOS_SIZES = [
    { name: "icon-20@2x.png", size: 40 },
    { name: "icon-20@3x.png", size: 60 },
    { name: "icon-29@2x.png", size: 58 },
    { name: "icon-29@3x.png", size: 87 },
    { name: "icon-40@2x.png", size: 80 },
    { name: "icon-40@3x.png", size: 120 },
    { name: "icon-60@2x.png", size: 120 },
    { name: "icon-60@3x.png", size: 180 },
    { name: "icon-76.png", size: 76 },
    { name: "icon-76@2x.png", size: 152 },
    { name: "icon-83.5@2x.png", size: 167 },
    { name: "icon-1024.png", size: 1024 }
];

// iOS nu icon banavi ne aapela zip (ke zip folder) ma umeri de
async function addIosFiles(targetZip, baseDataUrl) {

    const appIconSet = targetZip.folder("AppIcon.appiconset");

    for (const item of IOS_SIZES) {

        const blob = await resizeDataUrlToBlob(baseDataUrl, item.size);
        appIconSet.file(item.name, blob);

    }

    // iOS AppIcon Contents.json
    const contentsJson = {
        images: [
            {
                filename: "icon-20@2x.png",
                idiom: "iphone",
                scale: "2x",
                size: "20x20"
            },
            {
                filename: "icon-20@3x.png",
                idiom: "iphone",
                scale: "3x",
                size: "20x20"
            },
            {
                filename: "icon-29@2x.png",
                idiom: "iphone",
                scale: "2x",
                size: "29x29"
            },
            {
                filename: "icon-29@3x.png",
                idiom: "iphone",
                scale: "3x",
                size: "29x29"
            },
            {
                filename: "icon-40@2x.png",
                idiom: "iphone",
                scale: "2x",
                size: "40x40"
            },
            {
                filename: "icon-40@3x.png",
                idiom: "iphone",
                scale: "3x",
                size: "40x40"
            },
            {
                filename: "icon-60@2x.png",
                idiom: "iphone",
                scale: "2x",
                size: "60x60"
            },
            {
                filename: "icon-60@3x.png",
                idiom: "iphone",
                scale: "3x",
                size: "60x60"
            },
            {
                filename: "icon-20@2x.png",
                idiom: "ipad",
                scale: "2x",
                size: "20x20"
            },
            {
                filename: "icon-29@2x.png",
                idiom: "ipad",
                scale: "2x",
                size: "29x29"
            },
            {
                filename: "icon-40@2x.png",
                idiom: "ipad",
                scale: "2x",
                size: "40x40"
            },
            {
                filename: "icon-76.png",
                idiom: "ipad",
                scale: "1x",
                size: "76x76"
            },
            {
                filename: "icon-76@2x.png",
                idiom: "ipad",
                scale: "2x",
                size: "76x76"
            },
            {
                filename: "icon-83.5@2x.png",
                idiom: "ipad",
                scale: "2x",
                size: "83.5x83.5"
            },
            {
                filename: "icon-1024.png",
                idiom: "ios-marketing",
                scale: "1x",
                size: "1024x1024"
            }
        ],
        info: {
            author: "xcode",
            version: 1
        }
    };

    appIconSet.file(
        "Contents.json",
        JSON.stringify(contentsJson, null, 2)
    );

}

// ============ WEB SIZES ============
const WEB_SIZES = [
    { name: "favicon-16x16.png", size: 16 },
    { name: "favicon-32x32.png", size: 32 },
    { name: "favicon-48x48.png", size: 48 },
    { name: "android-chrome-192x192.png", size: 192 },
    { name: "android-chrome-512x512.png", size: 512 }
];

// Web nu icon banavi ne aapela zip (ke zip folder) ma umeri de
async function addWebFiles(targetZip, baseDataUrl) {

    for (const item of WEB_SIZES) {

        const blob = await resizeDataUrlToBlob(baseDataUrl, item.size);
        targetZip.file(item.name, blob);

    }

}

// ============ SINGLE-PLATFORM ZIP HELPERS (agar kyaay bija use thata hoy to) ============
async function buildAndroidZip(baseDataUrl) {

    const zip = new JSZip();
    await addAndroidFiles(zip, baseDataUrl);
    return zip;

}

async function buildIosZip(baseDataUrl) {

    const zip = new JSZip();
    await addIosFiles(zip, baseDataUrl);
    return zip;

}

async function buildWebZip(baseDataUrl) {

    const zip = new JSZip();
    await addWebFiles(zip, baseDataUrl);
    return zip;

}

// Download button click -> Android + iOS + Web, badhu ek j zip ma (icon.kitchen jem)
downloadBtn.addEventListener("click", async () => {

    try {

        const zip = new JSZip();

        // Android
        try {
            const androidBase = await exportIcon(iconBackground, 1024 / 56);
            const androidFolder = zip.folder("android");
            await addAndroidFiles(androidFolder, androidBase);
        } catch (err) {
            throw new Error("Android export failed: " + err.message);
        }

        // iOS
        try {
            const iosBase = await exportIcon(iosIconBackground, 1024 / 60);
            const iosFolder = zip.folder("ios");
            await addIosFiles(iosFolder, iosBase);
        } catch (err) {
            throw new Error("iOS export failed: " + err.message);
        }

        // Web
        try {
            const webBase = await exportIcon(webTabIcon, 1024 / 18);
            const webFolder = zip.folder("web");
            await addWebFiles(webFolder, webBase);
        } catch (err) {
            throw new Error("Web export failed: " + err.message);
        }

        const zipBlob = await zip.generateAsync({ type: "blob" });
        const zipUrl = URL.createObjectURL(zipBlob);

        const link = document.createElement("a");
        link.href = zipUrl;
        link.download = "app-icons.zip";
        link.click();

        URL.revokeObjectURL(zipUrl);

    } catch (e) {

        console.error(e);

        console.log("Message:", e.message);
        console.log("Stack:", e.stack);
        console.dir(e);

        alert(e.message);

    }

});