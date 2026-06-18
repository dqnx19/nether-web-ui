function open_app_drawer() {
    const app_drawer = document.querySelector(".app-drawer");

    if (!app_drawer) {
        console.log("drawer nenalezen");
        return;
    }

    app_drawer.classList.toggle("open");
}

document.addEventListener("click", (e) => {
    const app_drawer = document.querySelector(".app-drawer");
    const app_drawer_button = document.querySelector(".app-drawer-button");

    if (!app_drawer || !app_drawer_button) return;

    const clickedInsideDrawer = app_drawer.contains(e.target);
    const clickedButton = app_drawer_button.contains(e.target);

    if (!clickedInsideDrawer && !clickedButton) {
        app_drawer.classList.remove("open");
    }
});