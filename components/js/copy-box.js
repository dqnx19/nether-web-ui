export function useStyles() {
    applyStyles({
        selector: ".copy-box",
        styles: {
            "display": "flex",
            "gap": "5px",
            "flex-direction": "column",
            "overflow": "hidden"
        }
    });

    applyStyles({
        selector: ".copy-box > *",
        styles: {
            "background-color": "var(--background-color)"
        }
    });

    applyStyles({
        selector: ".copy-box .head",
        styles: {
            "border-top-left-radius": "10px",
            "border-top-right-radius": "10px",
            "border-bottom-left-radius": "5px",
            "border-bottom-right-radius": "5px",
            "display": "flex",
            "align-items": "center",
            "padding": "16px 20px",
            "font-weight": "600",
            "font-size": "1.05rem",
            "color": "#f0f0f0"
        }
    });

    applyStyles({
        selector: ".copy-box .body",
        styles: {
            "padding": "20px",
            "border-top-left-radius": "5px",
            "border-top-right-radius": "5px",
            "border-bottom-left-radius": "10px",
            "border-bottom-right-radius": "10px"
        }
    });

    applyStyles({
        selector: ".copy-box .body .code",
        styles: {
            "font-family": "'JetBrains Mono', monospace",
            "font-size": "0.95rem",
            "color": "#e6e6e6",
            "line-height": "1.5",
            "white-space": "pre-wrap",
            "font-weight": "100"
        }
    });

    applyStyles({
        selector: ':root, [data-theme="light"]',
        styles: {
            "--background-color": "#f0f2f5"
        }
    });

    applyStyles({
        selector: '[data-theme="dark"]',
        styles: {
            "--background-color": "#2c2e35"
        }
    });
}

export function create(options = {}) {
    const id = options.id;
    const language = options.language;
    const code = options.code;
    const parent = options.parent;

    const element = document.createElement("div");
    element.className = "copy-box";
    id
        ? element.dataset.id = id
        : null
    element.innerHTML = `
        <div class="head">
            <span class="language">${language ?? ""}</span>
        </div>
        <div class="body">
            <div class="code">${code ?? ""}</div>
        </div>
    `;

    parent
        ? typeof options.parent === "string"
            ? document.querySelector(options.parent).appendChild(element)
            : options.parent.appendChild(element)
        : null


    return element;
}

export function changeLanguage(options = {}) {
    const id = options.id;
    const language = options.language;

    document.querySelector(`.copy-box[data-id="${id}"] .head .language`).textContent = language;
}

export function changeCode(options = {}) {
    const id = options.id;
    const code = options.code;

    document.querySelector(`.copy-box[data-id="${id}"] .body .code`).textContent = code;
}