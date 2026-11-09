export function create(options = {}) {
    if (typeof options === "string") {
        options = JSON.parse(options);
    }

    const parent = options.parent;
    const id = options.id;
    const tabs = options.tabs;

    const tabsDiv = document.createElement("div");
    tabsDiv.className = "tabs";
    tabsDiv.dataset.id = id;

    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "buttons";
    tabsDiv.appendChild(buttonsDiv);

    const contentsDiv = document.createElement("div");
    contentsDiv.className = "contents";
    tabsDiv.appendChild(contentsDiv);

    tabs.forEach(tab => {
        const button = document.createElement("button");
        button.className = "button";
        button.dataset.id = tab.id;

        button.addEventListener("click", () => {
            buttonsDiv.querySelectorAll(".button").forEach(btn => {
                btn.classList.remove("active");
            });

            contentsDiv.querySelectorAll(".content").forEach(item => {
                item.classList.remove("active");
            });

            button.classList.add("active");
            content.classList.add("active");
        });

        const buttonImage = document.createElement("img");
        buttonImage.src = tab.image;
        button.appendChild(buttonImage);

        const buttonTitle = document.createElement("span");
        buttonTitle.textContent = tab.title;
        button.appendChild(buttonTitle);

        buttonsDiv.appendChild(button);


        const content = document.createElement("div");
        content.className = "content";
        content.dataset.id = tab.id;
        content.innerHTML = tab.innerHTML;

        contentsDiv.appendChild(content);
    });

    typeof parent === "string"
        ? document.querySelector(parent).appendChild(tabsDiv)
        : parent.appendChild(tabsDiv)

    buttonsDiv.querySelector(".button")?.click();

    return tabsDiv;
}

export function addTab(options = {}) {
    if (typeof options === "string") {
        options = JSON.parse(options);
    }

    const parent = options.parent;
    const id = options.id;
    const image = options.image;
    const title = options.title;
    const innerHTML = options.innerHTML;

    const button = document.createElement("button");
    button.className = "button";
    button.dataset.id = id;

    const buttonImage = document.createElement("img");
    buttonImage.src = image;
    button.appendChild(buttonImage);

    const buttonTitle = document.createElement("span");
    buttonTitle.textContent = title;
    button.appendChild(buttonTitle);


    const content = document.createElement("div");
    content.className = "content";
    content.dataset.id = id;
    content.innerHTML = innerHTML;

    button.addEventListener("click", () => {
        target.querySelectorAll(".button").forEach(btn => {
            btn.classList.remove("active");
        });

        target.querySelectorAll(".content").forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");
        content.classList.add("active");
    });

    const target = document.querySelector(`.tabs[data-id="${parent}"]`);
    target.querySelector(".buttons").appendChild(button);
    target.querySelector(".contents").appendChild(content)
}

export function displayTab(options = {}) {
    if (typeof options === "string") {
        options = JSON.parse(options);
    }

    const tabs = options.tabs;
    const tab = options.tab;

    const target = document.querySelector(`.tabs[data-id="${tabs}"]`);

    target.querySelectorAll(".button.active, .content.active")
        .forEach(element => {
            element.classList.remove("active");
        });

    const button = target.querySelector(
        `.buttons .button[data-id="${CSS.escape(tab)}"]`
    );

    const content = target.querySelector(
        `.contents .content[data-id="${CSS.escape(tab)}"]`
    );

    button.classList.add("active");
    content.classList.add("active");
}