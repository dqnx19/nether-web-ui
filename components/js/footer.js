function initFooterDrag() {
    const footer = document.querySelector("footer");
    const expandBar = footer.querySelector(".expand-bar");

    let dragging = false;

    const minHeight = 60;
    const maxHeight = window.innerHeight * 0.95;

    function startDrag(e) {
        dragging = true;

        footer.classList.add("dragging");
        footer.style.transition = "none";

        document.body.style.userSelect = "none";

        expandBar.setPointerCapture(e.pointerId);
    }

    function drag(e) {
        if (!dragging) return;

        const height = window.innerHeight - e.clientY;

        const clampedHeight = Math.max(minHeight, Math.min(height, maxHeight));
        footer.style.height = clampedHeight + "px";
    }

    function endDrag(e) {
        if (!dragging) return;

        dragging = false;

        footer.classList.remove("dragging");

        document.body.style.userSelect = "";
        footer.style.transition = "";

        const shouldExpand = e.clientY < window.innerHeight / 2;

        if (shouldExpand) {
            footer.classList.add("expanded");
            footer.style.height = "";
        } else {
            footer.classList.remove("expanded");
            footer.style.height = "";
        }
    }

    expandBar.addEventListener("pointerdown", startDrag);
    document.addEventListener("pointermove", drag);
    document.addEventListener("pointerup", endDrag);
}

initFooterDrag()