const app_drawer = document.querySelector(".app-drawer");

function open_app_drawer() {
    app_drawer.classList.toggle("open");
}

// klik mimo → zavřít
document.addEventListener("click", (e) => {
    const clickedInsideDrawer = app_drawer.contains(e.target);
    const clickedButton = app_drawer_button.contains(e.target);

    if (!clickedInsideDrawer && !clickedButton) {
        app_drawer.classList.remove("open");
    }
});