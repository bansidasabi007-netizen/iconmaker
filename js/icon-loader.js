let selectedButton = null;

const grid = document.getElementById("iconGrid");
const search = document.getElementById("iconSearch");

const iconEffect = document.getElementById("imageEffect");

const iconPreviews = [
    previewIcon,
    iosPreviewIcon,
    webPreviewIcon
];

// console.log("Clicked:", icon);

async function loadIcons(query = "home") {

    try {

        grid.innerHTML =
            `<div class="col-span-7 text-center text-gray-400">Loading...</div>`;

        const res = await fetch(
            `https://api.iconify.design/search?query=${query}&limit=120`
        );

        const data = await res.json();

        grid.innerHTML = "";

        data.icons.forEach(icon => {

            const btn = document.createElement("button");

            btn.className =
                `
                h-12
                rounded-xl
                bg-[#302937]
                border
                border-[#443D4F]
                hover:bg-violet-500
                transition
                flex
                items-center
                justify-center
                `;

            btn.innerHTML = `
                <iconify-icon
                    icon="${icon}"
                    width="24"
                    height="24">
                </iconify-icon>
            `;

            btn.onclick = () => {

                document.getElementById("previewIcon").style.display = "flex";
                document.getElementById("iosPreviewIcon").style.display = "flex";
                document.getElementById("webPreviewIcon").style.display = "flex";

                document.getElementById("previewIcon").setAttribute("icon", icon);
                document.getElementById("iosPreviewIcon").setAttribute("icon", icon);
                document.getElementById("webPreviewIcon").setAttribute("icon", icon);

                document.getElementById("iconBackground").classList.remove("hidden");

                setTimeout(fixIconSize, 50);

            };
            
            grid.appendChild(btn);

        });

    }

    catch (err) {

        console.log(err);

    }

}

function fixIconSize() {

    ["previewIcon", "iosPreviewIcon", "webPreviewIcon"].forEach(id => {

        const iconEl = document.getElementById(id);

        if (iconEl.shadowRoot) {

            const svg = iconEl.shadowRoot.querySelector("svg");

            if (svg) {
                svg.style.width = "50%";
                svg.style.height = "50%";
            }

        }

    });

}

loadIcons();

search.addEventListener("input", () => {

    loadIcons(search.value || "home");

});
iconEffect.addEventListener("change", function () {

    iconPreviews.forEach(icon => {

        icon.style.filter = "";
        // icon.style.transform = "";
        icon.style.opacity = "1";

        switch (this.value) {

            case "shadow":
                icon.style.filter =
                    "drop-shadow(0 6px 12px rgba(0,0,0,.45))";
                break;

            case "cast":
                icon.style.filter =
                    "drop-shadow(8px 8px 0 rgba(0,0,0,.35))";
                break;

            case "glow":
                icon.style.filter =
                    "drop-shadow(0 0 12px #a855f7)";
                break;

            default:
                break;
        }

    });

});

const iconEffectSelect = document.getElementById("iconEffectSelect");

iconEffectSelect.addEventListener("change", function () {

    const iconPreviews = [previewIcon, iosPreviewIcon, webPreviewIcon];

    iconPreviews.forEach(icon => {

        icon.style.filter = "";

        switch (this.value) {

            case "shadow":
                icon.style.filter = "drop-shadow(0px 6px 12px rgba(0,0,0,0.45))";
                break;

            case "cast":
                icon.style.filter = "drop-shadow(8px 8px 0 rgba(0,0,0,0.35))";
                break;

            case "glow":
                icon.style.filter = "drop-shadow(0 0 12px #a855f7)";
                break;

            default:
                break;
        }

    });

});


