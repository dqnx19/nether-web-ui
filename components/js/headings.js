import { applyStyles } from "../internal/applyStyles.js"

export function useStyles() {
    applyStyles({
        selector: "h1",
        styles: {
            "font-family": "'Lexend', sans-serif",
            "font-size": "30px",
            "font-weight": "bold",
            "color": "var(--color)",
            "line-height": "1.15",
            "padding": "16px",
            "margin-bottom": "60px",
            "border-radius": "16px",
            "text-align": "left"
        }
    });

    applyStyles({
        selector: "h2",
        styles: {
            "font-family": "'Lexend', sans-serif",
            "font-size": "24px",
            "font-weight": "bold",
            "color": "var(--color)",
            "margin-bottom": "30px"
        }
    });

    applyStyles({
        selector: ':root, [data-theme="dark"]',
        styles: {
            "--color": "#efefef"
        }
    });

    applyStyles({
        selector: ':root, [data-theme="light"]',
        styles: {
            "--color": "#0d1117"
        }
    });
}

export function create(options = {}) {
    const id = options.id;
    const content = options.content;

    const heading = document.createElement(`h${options.level || 1}`);
    heading.dataset.id = id || "";
    heading.textContent = content || "";

    typeof options.parent === "string"
        ? document.querySelector(options.parent).appendChild(heading)
        : options.parent.appendChild(heading)

    return heading;
}