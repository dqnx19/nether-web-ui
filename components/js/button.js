import { applyStyles } from "../internal/applyStyles.js"

export function useStyles() {
    applyStyles(`
        button:not(header button, footer button) {
    appearance: none;
    -webkit-appearance: none;
    background-color: var(--background-color);
    border-radius: 12px;
    height: 50px;
    padding: 10px 14px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: background-color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

button:not(header button, footer button):hover {
    background-color: #242a33;
    border-color: rgba(255, 255, 255, 0.12);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
    transform: translateY(-1px);
}

button:not(header button, footer button):active {
    transform: translateY(0) scale(0.97);
    box-shadow: none;
}

button:not(header button, footer button):focus-visible {
    outline: 2px solid rgba(255, 165, 0, 0.6);
    outline-offset: 2px;
}

:root,
[data-theme="light"] {
    --background-color: #f2f2f2;
}

[data-theme="dark"] {
    --background-color: #191b1e;
}
    `)
}

export function create(options = {}) {
    const button = document.createElement("button");

    if (options.class) {
        button.classList.add(options.class);
    };

    if (options.id) {
        button.id = options.id;
    }

    if (typeof options.onclick === "string") {
        button.onclick = new Function("event", options.onclick);
    };

    if (options.parent) {
        const parent = typeof options.parent === "string"
            ? document.querySelector(options.parent)
            : options.parent;

        if (parent) {
            parent.appendChild(button);
        }
    }

    return button;
}