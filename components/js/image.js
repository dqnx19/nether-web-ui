import { applyStyles } from "../internal/applyStyles.js"

export function useStyles() {
    applyStyles(`
        img {
    border-radius: 20px;
}
    `)
}

export function create(options = {}) {
    const image = document.createElement("img");

    image.className = options.class || "";
    image.id = options.id || "";
    image.src = options.source || "";
    image.alt = options.alt || "";
    image.width = options.width || "";
    image.height = options.height || "";
    image.title = options.title || "";

    if (typeof options.parent === "string") {
        document.querySelector(options.parent)?.appendChild(image);
    } else if (options.parent instanceof HTMLElement) {
        options.parent.appendChild(image);
    }

    return image;
}