window.nwui = window.nwui || {};

nwui.copyBox = {
    create(options = {}) {
        const element = document.createElement("div");

        element.className = "copy-box";

        if (options.class) {
            element.classList.add(options.class);
        }

        if (options.id) {
            element.id = options.id;
        }

        element.innerHTML = `
            <div class="head">
                <span class="language">${options.language ?? ""}</span>
            </div>
            <div class="body">
                <div class="code">${options.code ?? ""}</div>
            </div>
        `;

        if (options.parent) {
            const parent = typeof options.parent === "string"
                ? document.querySelector(options.parent)
                : options.parent;

            if (parent) {
                parent.appendChild(element);
            }
        }

        return element;
    }
};