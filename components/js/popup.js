export function create(options = {}) {
    if (typeof options === "string") {
        options = JSON.parse(options);
    }

    const id = options.id;
    const innerHTML = options.innerHTML;
    const addCloseButton = options.addCloseButton;

    const popupDiv = document.createElement("div");
    popupDiv.className = "popup";
    popupDiv.dataset.id = id;
    popupDiv.innerHTML = innerHTML;

    if (addCloseButton === true) {
        const button = document.createElement("button");
        button.className = "close-button";
        button.innerText = "Close";
        button.addEventListener("click", () => {
            popupDiv.style.display = "none";
        })

        popupDiv.appendChild(button);
    }

    document.body.appendChild(popupDiv);

    return popupDiv;
}

export function close(options = {}) {
    if (typeof options === "string") {
        options = JSON.parse(options);
    }

    const id = options.id;

    const popupDiv = document.querySelector(`.popup[data-id="${id}"]`);
    popupDiv.style.display = "none";
}