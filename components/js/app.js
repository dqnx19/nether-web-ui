export function create(options = {}) {
    const theme = options.theme;
    const language = options.language;

    if (!document.body) {
        const body = document.createElement("body");
        document.documentElement.appendChild(body);
    }

    const body = document.body;

    body.dataset.theme = theme;
    body.dataset.language = language;
}

export function setTheme(options = {}) {
    const theme = options.theme;

    const body = document.body;
    if (body) body.dataset.theme = theme;
}

export function setLanguage(options = {}) {
    const language = options.language;

    const body = document.body;
    if (body) body.dataset.language = language;
}