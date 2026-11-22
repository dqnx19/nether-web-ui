import { applyStyles } from "../internal/applyStyles.js"

export function useStyles() {
    applyStyles({
        selector: "form",
        styles: {
            "display": "flex",
            "flex-direction": "column",
            "gap": "14px",
            "padding": "16px"
        }
    });
}