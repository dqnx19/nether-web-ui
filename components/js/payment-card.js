import { applyStyles } from "../internal/applyStyles";

export function useStyles() {
    applyStyles(`.payment-card {
    width: 350px;
    height: 200px;

    border-radius: 20px;
    background: #ff0000;
}`)
}

export function create(options = {}) {
    const element = document.createElement("div");
    element.className = "payment-card";

    const cardNumber = document.createElement("span");
    cardNumber.className = "card-number";
    if (options.cardNumber) {
        cardNumber.innerText = options.card_number;
    }

    const cvc = document.createElement("span");
    cvc.className = "cvc";
    if (options.cvc) {
        cvc.innerText = options.cvc;
    }

    const validUntil = document.createElement("span");
    validUntil.className = "valid-until";
    if (options.validUntil) {
        validUntil.innerText = options.validUntil;
    }

    if (options.backgroundImage) {
        element.style.backgroundImage = options.backgroundImage;
    } else {
        element.style.background
    }

    return element;
}