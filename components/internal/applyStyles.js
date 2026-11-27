export function applyStyles(styles) {
    const style = document.createElement("style");
    style.textContent = styles ?? "";
    document.head.appendChild(style);

    return style;
}