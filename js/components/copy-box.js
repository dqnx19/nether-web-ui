document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".copy-box .head .copy-button");
    const input = document.querySelector(".copy-box .body .code");

    button.addEventListener("click", async () => {
        await navigator.clipboard.writeText(input.value);

        button.innerHTML = `
            <button class="copy-button">
                <img src="img/copy-icon.svg" alt="Copy Icon">
                Copied!
            </button>
        `;

        setTimeout(() => {
            button.innerHTML = `
                <button class="copy-button" >
                    <img src="img/copy-icon.svg" alt="Copy Icon">
                    Copy
                </button>
            `;
        }, 1500);
    });
})