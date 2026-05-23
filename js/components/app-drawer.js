const app_drawer = document.querySelector(".app-drawer");
const app_drawer_button = document.querySelector(".app-drawer-button");

export function open_app_drawer() {
    app_drawer.classList.toggle("open");
}

export function generate_app_drawer_button() {
    app_drawer_button.innerHTML = `
    <div class="dots">
        <span></span><span></span><span></span>
        <span></span><span></span><span></span>
        <span></span><span></span><span></span>
    </div>
`;
}

// klik mimo → zavřít
document.addEventListener("click", (e) => {
    const clickedInsideDrawer = app_drawer.contains(e.target);
    const clickedButton = app_drawer_button.contains(e.target);

    if (!clickedInsideDrawer && !clickedButton) {
        app_drawer.classList.remove("open");
    }
});