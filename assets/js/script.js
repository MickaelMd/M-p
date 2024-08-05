document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const tableContents = document.getElementById("table_contents_mobile");

  menuToggle.addEventListener("click", () => {
    tableContents.classList.toggle("active");
  });
});
