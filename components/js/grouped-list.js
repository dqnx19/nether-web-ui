import { applyStyles } from "../internal/applyStyles.js"

export function useStyles() {
    applyStyles({
        selector: ".grouped-list",
        styles: {
            "all": "unset",
            "display": "flex",
            "flex-direction": "column",
            "gap": "5px",
            "padding": "8px 0"
        }
    });

    applyStyles({
        selector: ".grouped-list .item",
        styles: {
            "all": "unset",
            "display": "flex",
            "align-items": "center",
            "gap": "18px",
            "width": "100%",
            "padding": "18px 20px",
            "background": "hsl(220 15% 12%)",
            "border-radius": "10px",
            "color": "hsl(0 0% 98%)",
            "cursor": "pointer",
            "box-shadow": "0 1px 2px hsl(0 0% 0% / 0.25)",
            "transition": "background .25s ease, box-shadow .25s ease, transform .2s ease"
        }
    });

    applyStyles({
        selector: ".grouped-list .item:hover",
        styles: {
            "background": "hsl(220 15% 16%)",
            "box-shadow": "0 4px 10px hsl(0 0% 0% / 0.25)"
        }
    });

    applyStyles({
        selector: ".grouped-list .item:active",
        styles: {
            "transform": "scale(0.97)"
        }
    });

    applyStyles({
        selector: ".grouped-list .item img",
        styles: {
            "width": "32px",
            "height": "32px",
            "padding": "6px",
            "background": "hsl(220 15% 20%)",
            "border-radius": "50%",
            "opacity": "0.9",
            "transition": "opacity .25s ease, transform .25s ease"
        }
    });

    applyStyles({
        selector: ".grouped-list .item:hover img",
        styles: {
            "opacity": "1",
            "transform": "scale(1.05)"
        }
    });

    applyStyles({
        selector: ".grouped-list:first-child, .grouped-list:last-child",
        styles: {
            "border-radius": "20px"
        }
    });
}