import { applyStyles } from "../internal/applyStyles.js"

export function useStyles() {
    applyStyles({
        selector: "li",
        styles: {
            "font-size": "16px",
            "line-height": "1.6",
            "margin-left": "30px"
        }
    });
}

export function create(options = {}) {
    const list = document.createElement(options.ordered ? "ol" : "ul");

    if (options.parent) {
        const parent = typeof options.parent === "string"
            ? document.querySelector(options.parent)
            : options.parent;

        if (parent) {
            parent.appendChild(list);
        }
    };

    if (options.class) {
        list.classList.add(options.class);
    };

    if (options.id) {
        list.id = options.id;
    };

    if (options.items) {
        options.items.forEach(item => {
            const li = document.createElement("li");

            li.innerText = item;
            list.appendChild(li);
        });
    }

    return list;
}