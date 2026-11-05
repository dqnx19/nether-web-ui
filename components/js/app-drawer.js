export function create(options = {}) {
    const wrapper = document.createElement("div");
    wrapper.className = "app-drawer-wrapper";

    const toggleButton = document.createElement("button");
    toggleButton.className = "app-drawer-button";
    toggleButton.type = "button";

    toggleButton.innerHTML = `
        <div class="dots">
            <span></span><span></span><span></span>
            <span></span><span></span><span></span>
            <span></span><span></span><span></span>
        </div>
    `;

    const appDrawer = document.createElement("div");
    appDrawer.className = "app-drawer";

    (options.apps ?? []).forEach(app => {
        const appButton = document.createElement("a");

        appButton.href = app.link;
        appButton.innerHTML = `
            <img src="${app.icon}" alt="${app.name} icon">
            <span>${app.name}</span>
        `;

        appDrawer.appendChild(appButton);
    });

    toggleButton.addEventListener("click", () => {
        toggle({ selector: appDrawer });
    });

    wrapper.append(toggleButton, appDrawer);

    const parent = typeof options.parent === "string"
        ? document.querySelector(options.parent)
        : options.parent ?? document.body;

    parent?.appendChild(wrapper);

    return wrapper;
}

export function toggle(options = {}) {
    const appDrawer = typeof options.selector === "string"
        ? document.querySelector(options.selector)
        : options.selector;

    if (!appDrawer) {
        console.log("App drawer not found");
        return;
    }

    appDrawer.classList.toggle("open");
}