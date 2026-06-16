document.addEventListener("click", (e) => {
  const select = e.target.closest(".select");

  // zavřít všechny selecty
  document.querySelectorAll(".select.open").forEach(s => {
    if (s !== select) s.classList.remove("open");
  });

  // klikl jsi na select → toggle
  if (select) {
    select.classList.toggle("open");
  }
});
