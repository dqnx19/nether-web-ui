window.nwui = window.nwui || {};

nwui.paymentCard = {
    create(options = {}) {
        const element = document.createElement("div");
        element.className = "payment-card";

        if (options.class) {
            element.classList.add(options.class);
        };

        if (options.id) {
            element.id = options.id;
        };

        const cardNumber = document.createElement("span");
        cardNumber.className = "card-number";
        if (options.card_number) {
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
}