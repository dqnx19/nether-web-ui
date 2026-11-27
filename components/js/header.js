import { applyStyles } from "../internal/applyStyles.js"

export function useStyles() {
    applyStyles(`
        header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    width: 100%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.logo {
    width: 75px;
    height: 75px;
    border: none;
    background-color: unset;
    cursor: pointer;
    transition: none;
    border-radius: 0%;
}

.logo:hover {
    background-color: none;
}

.logo img {
    width: 75px;
    height: 75px;
}
    `)
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