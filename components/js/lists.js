window.nwui = window.nwui || {};

nwui.lists = {
    create(options = {}) {
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
}