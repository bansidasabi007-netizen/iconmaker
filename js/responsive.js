// ==========================================
// ICONBUILDER - RESPONSIVE PREVIEW
// Scales the (fixed-size) Android / iOS / Web preview so it always fits
// the space it has, on phones, tablets and small laptops.
// Does not touch any other script: it only sets a CSS transform on
// #previewScaler (and the height of #previewViewport below 1024px).
// ==========================================

(function () {

    const DESKTOP_MIN_WIDTH = 1024;   // Tailwind "lg"
    const MOBILE_PREVIEW_MAX_HEIGHT = 380;
    const MIN_SCALE = 0.2;

    let scheduled = false;

    function fitPreview() {

        scheduled = false;

        const viewport = document.getElementById("previewViewport");
        const scaler = document.getElementById("previewScaler");

        if (!viewport || !scaler) {
            return;
        }

        const isDesktop = window.innerWidth >= DESKTOP_MIN_WIDTH;

        // Desktop: height comes from the layout (CSS). Phone/tablet: we set it.
        if (isDesktop) {
            viewport.style.height = "";
        }

        // offsetWidth / offsetHeight ignore transforms = natural preview size
        const naturalWidth = scaler.offsetWidth;
        const naturalHeight = scaler.offsetHeight;

        if (!naturalWidth || !naturalHeight) {
            return;
        }

        let scale = Math.min(1, viewport.clientWidth / naturalWidth);

        if (isDesktop) {

            if (viewport.clientHeight) {
                scale = Math.min(scale, viewport.clientHeight / naturalHeight);
            }

        } else {

            scale = Math.min(scale, MOBILE_PREVIEW_MAX_HEIGHT / naturalHeight);
            scale = Math.max(scale, MIN_SCALE);

            viewport.style.height = Math.ceil(naturalHeight * scale) + "px";
        }

        scale = Math.max(scale, MIN_SCALE);

        scaler.style.transform =
            scale < 0.999 ? "scale(" + scale.toFixed(4) + ")" : "none";
    }

    function scheduleFit() {

        if (scheduled) {
            return;
        }

        scheduled = true;
        window.requestAnimationFrame(fitPreview);
    }

    function init() {

        const scaler = document.getElementById("previewScaler");

        if (!scaler) {
            return;
        }

        window.addEventListener("resize", scheduleFit);
        window.addEventListener("orientationchange", scheduleFit);
        window.addEventListener("load", scheduleFit);

        // Platform switch (Android / iOS / Web) changes the scaler's size
        if (typeof ResizeObserver === "function") {
            new ResizeObserver(scheduleFit).observe(scaler);
        }

        // Fallback: class changes (hidden / visible) on the previews
        new MutationObserver(scheduleFit).observe(scaler, {
            attributes: true,
            attributeFilter: ["class"],
            subtree: true
        });

        // Wallpaper images finish loading later and can change the size
        scaler.addEventListener("load", scheduleFit, true);

        scheduleFit();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

})();

// ==========================================
// TAB HIGHLIGHT SYNC (Clipart / Text / Image)
// Highlights the tab button whose panel is currently visible
// ==========================================
(function () {

    const TABS = [
        { btn: "clipartTab", panel: "clipartPanel" },
        { btn: "textTab",    panel: "textPanel"    },
        { btn: "imageTab",   panel: "imagePanel"   }
    ];

    function syncTabs() {

        let activeIndex = TABS.findIndex(function (t) {
            const panel = document.getElementById(t.panel);
            return panel && !panel.classList.contains("hidden");
        });

        if (activeIndex === -1) {
            activeIndex = 0;
        }

        TABS.forEach(function (t, i) {

            const btn = document.getElementById(t.btn);

            if (!btn) {
                return;
            }

            const isActive = i === activeIndex;

            btn.classList.toggle("bg-violet-500", isActive);
            btn.classList.toggle("text-white", isActive);
            btn.classList.toggle("hover:bg-[#3A3344]", !isActive);
            btn.setAttribute("aria-selected", isActive ? "true" : "false");
        });
    }

    function initTabHighlight() {

        // Panel show/hide thaay tyare automatically sync
        TABS.forEach(function (t) {

            const panel = document.getElementById(t.panel);

            if (panel) {
                new MutationObserver(syncTabs).observe(panel, {
                    attributes: true,
                    attributeFilter: ["class"]
                });
            }

            const btn = document.getElementById(t.btn);

            // Click par pan sync (tabs.js pachhi chale etle thodu delay)
            if (btn) {
                btn.addEventListener("click", function () {
                    setTimeout(syncTabs, 0);
                });
            }
        });

        syncTabs();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initTabHighlight);
    } else {
        initTabHighlight();
    }

})();