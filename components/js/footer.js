import { applyStyles } from "../internal/applyStyles.js"

export function useStyles() {
    applyStyles({
        selector: "footer",
        styles: {
            "position": "fixed",
            "left": "0",
            "right": "0",
            "bottom": "0",
            "transition": "height 0.1s ease",
            "border-top-left-radius": "10px",
            "border-top-right-radius": "10px",
            "display": "flex",
            "justify-content": "center",
            "flex-direction": "row",
            "gap": "5px",
            "padding": "10px",
            "z-index": "1000",
            "overflow-x": "auto",
            "align-items": "flex-end"
        }
    });

    applyStyles({
        selector: "footer button, footer a",
        styles: {
            "display": "flex",
            "flex-direction": "row",
            "align-items": "center",
            "gap": "10px",
            "padding": "5px",
            "width": "fit-content",
            "border-radius": "12px",
            "cursor": "pointer",
            "border": "none",
            "background": "transparent",
            "transition": "transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease"
        }
    });

    applyStyles({
        selector: "footer button img, footer a img",
        styles: {
            "width": "40px",
            "height": "40px",
            "pointer-events": "none",
            "border-radius": "0px"
        }
    });

    applyStyles({
        selector: "footer button:hover, footer a:hover",
        styles: {
            "transform": "scale(1.06)",
            "background": "rgba(255, 255, 255, 0.15)",
            "box-shadow": "0 4px 10px rgba(0,0,0,0.25)"
        }
    });
}