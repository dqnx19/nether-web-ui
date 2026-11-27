import { applyStyles } from "../internal/applyStyles.js"

export function useStyles() {
    applyStyles(`
        .text {
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 4px;
}

.text p {
    margin: 0 0 12px 0;

    font-size: clamp(0.95rem, 0.3vw + 0.9rem, 1.05rem);
    font-weight: 100;

    line-height: 1.6;
    letter-spacing: 0.2px;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    max-width: 70ch;
}

.text a {
    font-family: 'Lexend', sans-serif;
    font-size: 11pt;
    text-decoration: none;
}

.text a:hover {
    color: #58a6ff;
    text-decoration: underline;
}

.text img {
    height: 16px;
    width: 16px;
}`)
}

export function create(options = {}) {
    const parent = options.parent;
    const id = options.id;
    const objects = options.objects;

    const container = document.createElement("div");
    container.dataset.id = id;

    objects.forEach(object => {
        switch (object.type) {
            case "paragraph":
                const paragraph = document.createElement("p");
                paragraph.textContent = object.text;
                container.appendChild(paragraph);

                break

            case "link":
                const link = document.createElement("a");
                link.textContent = object.text;
                link.href = object.href;
                container.appendChild(link);

                break

            case "image":
                const img = document.createElement("img");
                img.src = object.src;
                container.appendChild(img);

                break
        }
    });

    typeof parent === "string"
        ? document.querySelector(parent).appendChild(container)
        : parent.appendChild(container)

    return container;
}