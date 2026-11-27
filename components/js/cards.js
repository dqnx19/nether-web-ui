import { applyStyles } from "../internal/applyStyles.js"

export function useStyles() {
    applyStyles(`
        .cards {
    all: unset;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    padding: 16px;
    flex-direction: row;
}

.card {
    all: unset;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    padding: 20px;
    background: #1e1f20;
    border-radius: 20px;
    transition: transform .25s ease, box-shadow .25s ease, background .25s ease, border-color .25s ease;
    font-size: unset;
}

.card img {
    width: 64px;
    height: 64px;
}

.card span {
    font-size: 32px;
}

.card:hover {
    background-color: #2d2e2e;
}
    `)
}

export function create(options) {
    if (typeof options === "string") {
        options = JSON.parse(options)
    }

    const parent = options.parent;
    const id = options.id;
    const cards = options.cards;

    const cardsContainer = document.createElement("div");
    cardsContainer.className = "cards";
    cardsContainer.dataset.id = id;

    cards.forEach(card => {
        const cardDiv = document.createElement("div");
        cardDiv.className = "card";

        const img = document.createElement("img");
        img.src = card.image
        cardDiv.appendChild(img);

        const span = document.createElement("span");
        span.textContent = card.heading
        cardDiv.appendChild(span);

        typeof card.onclick === "string"
            ? cardDiv.addEventListener("click", () => eval(card.onclick))
            : cardDiv.addEventListener("click", card.onclick)

        cardsContainer.appendChild(cardDiv);
    });

    typeof parent === "string"
        ? document.querySelector(parent).appendChild(cardsContainer)
        : parent.appendChild(cardsContainer)

    return cardsContainer;
}

export function addCard(options) {
    if (typeof options === "string") {
        options = JSON.parse(options);
    }

    const parent = options.parent;
    const onclick = options.onclick;
    const image = options.image;
    const heading = options.heading;

    const cardDiv = document.createElement("div");
    cardDiv.className = "card";

    const img = document.createElement("img");
    img.src = image;
    cardDiv.appendChild(img);

    const span = document.createElement("span");
    span.textContent = heading;
    cardDiv.appendChild(span);

    typeof onclick === "string"
        ? cardDiv.addEventListener("click", () => eval(onclick))
        : cardDiv.addEventListener("click", onclick)

    document.querySelector(`.cards[data-id="${parent}"]`).appendChild(cardDiv);

    return cardDiv;
}