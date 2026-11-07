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