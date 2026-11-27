import { applyStyles } from "../internal/applyStyles.js"

export function useStyles() {
    applyStyles(`
        .timeline {
    display: flex;
    flex-direction: column;
    position: relative;
    padding-left: 28px;
}

/* vertical line (lepší než ::after na každém markeru) */
.timeline::before {
    content: "";
    position: absolute;
    left: 7px;
    top: 0;
    bottom: 0;

    width: 2px;
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.15),
        rgba(255, 255, 255, 0.05)
    );

    border-radius: 2px;
}

.event {
    display: flex;
    gap: 14px;

    position: relative;

    padding: 14px 0;
}

/* marker */
.marker {
    width: 12px;
    height: 12px;

    border-radius: 50%;

    background: #4da3ff;

    flex-shrink: 0;

    margin-top: 4px;

    box-shadow:
        0 0 0 4px rgba(77, 163, 255, 0.15),
        0 6px 14px rgba(0, 0, 0, 0.25);
}

/* date */
.date {
    width: 110px;

    font-size: 0.85rem;
    font-weight: 600;

    color: rgba(255, 255, 255, 0.55);

    flex-shrink: 0;
}

/* content */
.content {
    flex: 1;

    color: rgba(255, 255, 255, 0.85);

    line-height: 1.5;
}

/* hover interaction (iOS feel) */
.event {
    transition: transform 0.2s ease;
}

.event:hover {
    transform: translateX(4px);
}

/* LIGHT MODE */
@media (prefers-color-scheme: light) {
    .timeline::before {
        background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.15),
            rgba(0, 0, 0, 0.05)
        );
    }

    .date {
        color: rgba(0, 0, 0, 0.6);
    }

    .content {
        color: rgba(0, 0, 0, 0.85);
    }

    .marker {
        box-shadow:
            0 0 0 4px rgba(77, 163, 255, 0.12),
            0 6px 14px rgba(0, 0, 0, 0.1);
    }
}`)
}

export function create(options = {}) {
    const timeline = document.createElement("div");
    timeline.className = "timeline";

    if (options.id) {
        timeline.dataset.id = options.id;
    }

    if (options.events && Array.isArray(options.events)) {
        options.events.forEach(event => {
            const eventDiv = document.createElement("div");

            eventDiv.className = "event"
            eventDiv.innerHTML = `
                    <div class="marker"></div>
                    <div class="date">${event.date}</div>
                    <div class="description">${event.description}</div>
                `

            timeline.appendChild(eventDiv)
        });
    }

    if (options.parent) {
        const parent = typeof options.parent === "string"
            ? document.querySelector(options.parent)
            : options.parent;

        if (parent) {
            parent.appendChild(timeline);
        }
    }
}

export function addEvent(options = {}) {
    const eventDiv = document.createElement("div");

    eventDiv.className = "event"
    eventDiv.innerHTML = `
            <div class="marker"></div>
            <div class="date">${options.date}</div>
            <div class="description">${options.description}</div>
        `

    if (options.parent) {
        const parent = document.querySelector(
            `.timeline[data-id="${CSS.escape(options.parent)}"]`
        );

        if (parent) {
            parent.appendChild(eventDiv);
        }
    }
}
