export function applyStyles(options = {}) {
    const selector = options.selector;
    const styles = options.styles ?? {};

    const style = document.createElement("style");

    const css = Object.entries(styles)
        .map(([property, value]) => `${property}: ${value};`)
        .join("\n");

    style.textContent = `${selector} {\n${css}\n}`;

    document.head.appendChild(style);

    return style;
}