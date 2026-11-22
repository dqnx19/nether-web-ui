import { applyStyles } from "../internal/applyStyles.js"

export function useStyles() {
    applyStyles({
        selector: "header",
        styles: {
            "position": "fixed",
            "top": "0",
            "left": "0",
            "right": "0",
            "height": "100px",
            "width": "100%",
            "border-bottom-left-radius": "10px",
            "border-bottom-right-radius": "10px",
            "display": "flex",
            "align-items": "center",
            "justify-content": "center",
            "z-index": "1000"
        }
    });

    applyStyles({
        selector: ".logo",
        styles: {
            "width": "75px",
            "height": "75px",
            "border": "none",
            "background-color": "transparent",
            "cursor": "pointer",
            "transition": "none",
            "border-radius": "0%",
            "background-color": "unset"
        }
    });

    applyStyles({
        selector: ".logo:hover",
        styles: {
            "background-color": "none"
        }
    });

    applyStyles({
        selector: ".logo img",
        styles: {
            "width": "75px",
            "height": "75px"
        }
    });
}

export function create(options = {}) {
    const header = document.createElement("header");

    if (options.class) {
        header.classList.add(options.class);
    }

    if (options.id) {
        header.dataset.id = options.id;
    }

    if (options.logo) {
        const logo = document.createElement("img");

        logo.src = options.logo;
        header.appendChild(logo);
    }

    if (options.parent) {
        const parent = typeof options.parent === "string"
            ? document.querySelector(options.parent)
            : options.parent;

        if (parent) {
            parent.appendChild(header);
        }
    }

    return header;
}