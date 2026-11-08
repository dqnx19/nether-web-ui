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