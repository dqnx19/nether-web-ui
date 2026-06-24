function showTab(id, button = null) {
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });

    document.getElementById(id)?.classList.add('active');

    if (button) {
        button.classList.add('active');
    } else {
        document
            .querySelector(`.tab[data-tab="${id}"]`)
            ?.classList.add('active');
    }
}