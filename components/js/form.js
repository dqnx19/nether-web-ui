import { applyStyles } from "../internal/applyStyles.js"

export function useStyles() {
    applyStyles(`
        form {
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 16px;
}
    `);
}