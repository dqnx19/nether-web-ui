export function applyStyles(styles) {
    const styles = styles ?? "";

    const style = document.createElement("style");
    style.textContent = styles;
    document.head.appendChild(style);

    return style;
}