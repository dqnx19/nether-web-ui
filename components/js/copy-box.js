document.addEventListener("DOMContentLoaded", () => {

    // ČEKÁNÍ NA ELEMENTY PŘES MUTATIONOBSERVER
    const waitFor = (selector, callback) => {
        const el = document.querySelector(selector);
        if (el) return callback(el);

        const observer = new MutationObserver(() => {
            const el = document.querySelector(selector);
            if (el) {
                observer.disconnect();
                callback(el);
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });
    };

    // ČEKÁME NA BUTTON
    waitFor(".copy-box .head .copy-button", (button) => {

        // A ČEKÁME NA CODE
        waitFor(".copy-box .body .code", (code) => {

            button.addEventListener("click", async () => {
                await navigator.clipboard.writeText(code.innerHTML);

                button.innerHTML = `
                    <button class="copy-button">
                        <img src="img/copy-icon.svg" alt="Copy Icon">
                        Copied!
                    </button>
                `;

                setTimeout(() => {
                    button.innerHTML = `
                        <button class="copy-button">
                            <img src="img/copy-icon.svg" alt="Copy Icon">
                            Copy
                        </button>
                    `;
                }, 1500);
            });

        });

    });

});
