import { applyStyles } from "../internal/applyStyles.js"

export function useStyles() {
    applyStyles(`
        .details-panel {
    background-color: var(--background-color);
    color: var(--color);
    border-radius: 12px;
    padding: 16px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.details-panel .detail {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.4;
}

.details-panel .detail img {
    width: 28px;
    height: 28px;
    object-fit: contain;
    flex-shrink: 0;
}

.details-panel .detail span {
    font-weight: 600;
}

:root,
[data-theme="dark"] {
    --background-color: #12315a;
    --color: #f1f5ff;
}

[data-theme="light"] {
    --background-color: #f8fafc;
    --color: #1e293b;
}`)
}

export function create(options = {}) {
    const parent = options.parent;
    const id = options.id;
    const details = options.details;

    const detailsPanel = document.createElement("div");
    detailsPanel.className = "details-panel";

    id
        ? detailsPanel.dataset.id = id
        : null

    if (details) {
        details.forEach(detailSrc => {
            const detail = document.createElement("div");
            detail.className = "detail";
            detailsPanel.appendChild(detail);

            const image = document.createElement("img");
            image.src = detailSrc.image;
            detail.appendChild(image);

            const text = document.createElement("span");
            text.textContent = detailSrc.text;
            detail.appendChild(text);
        });
    };

    if (parent) {
        typeof parent === "string"
            ? document.querySelector(parent).appendChild(detailsPanel)
            : parent.appendChild(detailsPanel)
    }

    return detailsPanel;
}

export function addDetail(options = {}) {
    const parent = options.parent;
    const image = options.image;
    const text = options.text;

    const detail = document.createElement("div");
    detail.className = "detail";

    const img = document.createElement("img");
    img.src = image;
    detail.appendChild(img);

    const span = document.createElement("span");
    span.textContent = text;
    detail.appendChild(span);

    document.querySelector(`.details-panel[data-id="${parent}"]`).appendChild(detail)

    return detail;
}