document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const tableContents = document.getElementById("table_contents_mobile");

  menuToggle.addEventListener("click", () => {
    tableContents.classList.toggle("active");
  });
});

// -------------------

// document.addEventListener("scroll", handleScroll);
const scrollToTopBtn = document.querySelector(".scrollToTopBtn");
scrollToTopBtn.addEventListener("click", scrollToTop);
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
