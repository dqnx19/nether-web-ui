import { applyStyles } from "../internal/applyStyles.js"

export function useStyles() {
    applyStyles({
        selector: "*",
        styles: {
            "margin": "0",
            "padding": "0",
            "box-sizing": "border-box",
            "color": "var(--color)",
            "font-family": "'Lexend', sans-serif",
            "font-weight": "bold",
            "-webkit-font-smoothing": "antialiased"
        }
    });

    applyStyles({
        selector: "body",
        styles: {
            "min-width": "100vw",
            "min-height": "100vh",
            "overflow": "hidden",
            "text-rendering": "optimizeLegibility",
            "background-color": "var(--background-color)"
        }
    });

    applyStyles({
        selector: ':root, [data-theme="light"]',
        styles: {
            "--background-color": "#f8fafd",
            "--color": "black"
        }
    });

    applyStyles({
        selector: '[data-theme="dark"]',
        styles: {
            "--background-color": "#1b1b1b",
            "--color": "white"
        }
    });
}

export function create(options = {}) {
    const theme = options.theme ?? "light";
    const language = options.language;

    if (!document.body) {
        const body = document.createElement("body");
        document.documentElement.appendChild(body);
    }

    const body = document.body;

    body.dataset.theme = theme;
    body.dataset.language = language;

    return body;
}

export function getAppRoot() {
    return document.body;
}

export function setTheme(options = {}) {
    const theme = options.theme ?? "light";

    const body = document.body;
    if (body) body.dataset.theme = theme;
}

export function setLanguage(options = {}) {
    const language = options.language;

    const body = document.body;
    if (body) body.dataset.language = language;
}