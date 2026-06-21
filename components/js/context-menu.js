const menu = document.getElementById("menu");

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();

    menu.style.left = e.pageX + "px";
    menu.style.top = e.pageY + "px";

    menu.classList.add("open");
});

document.addEventListener("click", () => {
    menu.classList.remove("open");
});

function copyURL() {
    navigator.clipboard.writeText(window.location.href);
}

function copy() {
    const selectedText = window.getSelection().toString().trim();

    if (selectedText) {
        navigator.clipboard.writeText(selectedText);
    }
}