import { applyStyles } from "../internal/applyStyles.js"

export function useStyles() {
    applyStyles({
        selector: "app-drawer",
        styles: {
            "display": "none",
            "flex-direction": "column",

            "width": "300px",
            "height": "100px",

            "background-color": "rgb(12, 12, 12)"
        }
    })

    applyStyles({
        selector: ".app-drawer.open",
        styles: {
            "display": "flex"
        }
    })

    applyStyles({
        selector: ".app-drawer-button .dots",
        styles: {
            "display": "grid",
            "grid-template-columns": "repeat(3, 5px)",
            "grid-template-rows": "repeat(3, 5px)",
            "gap": "4px"
        }
    })

    applyStyles({
        selector: ".app-drawer-button .dots span",
        styles: {
            "width": "5px",
            "height": "5px",
            "border-radius": "50%",
            "background": "rgba(255, 255, 255, 0.7)"
        }

    })
}

export function create(options = {}) {
    const wrapper = document.createElement("div");
    wrapper.className = "app-drawer-wrapper";

    const toggleButton = document.createElement("button");
    toggleButton.className = "app-drawer-button";
    toggleButton.type = "button";

    toggleButton.innerHTML = `
        <div class="dots">
            <span></span><span></span><span></span>
            <span></span><span></span><span></span>
            <span></span><span></span><span></span>
        </div>
    `;

    const appDrawer = document.createElement("div");
    appDrawer.className = "app-drawer";

    (options.apps ?? []).forEach(app => {
        const appButton = document.createElement("a");

        appButton.href = app.link;
        appButton.innerHTML = `
            <img src="${app.icon}" alt="${app.name} icon">
            <span>${app.name}</span>
        `;

        appDrawer.appendChild(appButton);
    });

    toggleButton.addEventListener("click", () => {
        toggle({ selector: appDrawer });
    });

    wrapper.append(toggleButton, appDrawer);

    const parent = typeof options.parent === "string"
        ? document.querySelector(options.parent)
        : options.parent ?? document.body;

    parent?.appendChild(wrapper);

    return wrapper;
}

export function toggle(options = {}) {
    const appDrawer = typeof options.selector === "string"
        ? document.querySelector(options.selector)
        : options.selector;

    if (!appDrawer) {
        console.log("App drawer not found");
        return;
    }

    appDrawer.classList.toggle("open");
}