import { applyStyles } from "../internal/applyStyles.js"

export function useStyles() {
    applyStyles(`
        .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 90%;
    max-width: 450px;
    padding: 24px;

    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(0, 0, 0, 0.08);

    z-index: 10000;
}

.popup .close-button {
    background-color: rgb(255, 0, 0);

    border-radius: 10px;
    width: 100%;
}
    `)
}

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