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