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