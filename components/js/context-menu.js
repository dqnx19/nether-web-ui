const menu = document.getElementById("menu");

let lastX = 0;
let lastY = 0;

/* =========================
   OPEN MENU (mouse)
========================= */
document.addEventListener("contextmenu", (e) => {
    e.preventDefault();

    openMenu(e.pageX, e.pageY);
});

/* =========================
   OPEN MENU (keyboard - context menu key / Shift+F10)
========================= */
document.addEventListener("keydown", (e) => {
    const active = document.activeElement;

    // Shift + F10 (standard context menu shortcut)
    if (e.shiftKey && e.key === "F10") {
        e.preventDefault();
        openMenu(lastX || 100, lastY || 100);
    }

    // ContextMenu key (right-click key on keyboard)
    if (e.key === "ContextMenu") {
        e.preventDefault();
        openMenu(lastX || 100, lastY || 100);
    }

    // ESC closes menu
    if (e.key === "Escape") {
        closeMenu();
    }

    // track last interaction position fallback
    document.addEventListener("mousemove", (ev) => {
        lastX = ev.pageX;
        lastY = ev.pageY;
    });
});

/* =========================
   CLICK OUTSIDE CLOSE
========================= */
document.addEventListener("click", (e) => {
    if (!menu.contains(e.target)) {
        closeMenu();
    }
});

/* =========================
   CORE FUNCTIONS
========================= */
function openMenu(x, y) {
    menu.style.left = x + "px";
    menu.style.top = y + "px";

    menu.classList.add("open");

    // accessibility focus
    menu.setAttribute("tabindex", "-1");
    menu.focus();
}

function closeMenu() {
    menu.classList.remove("open");
}

/* =========================
   COPY FUNCTIONS
========================= */
function copyURL() {
    navigator.clipboard.writeText(window.location.href);
}

function copy() {
    const selectedText = window.getSelection().toString().trim();

    if (selectedText) {
        navigator.clipboard.writeText(selectedText);
    }
}