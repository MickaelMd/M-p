document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const tableContents = document.getElementById("table_contents_mobile");

  menuToggle.addEventListener("click", () => {
    tableContents.classList.toggle("active");
  });
});

// -------------------

const scrollToTopBtn = document.querySelector(".scrollToTopBtn");
scrollToTopBtn.addEventListener("click", scrollToTop);
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// -----------------

document.querySelectorAll(".clickable-image").forEach((image) => {
  image.addEventListener("click", () => {
    // Crée l'overlay s'il n'existe pas déjà
    let overlay = document.querySelector(".fullscreen-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.classList.add("fullscreen-overlay");
      document.body.appendChild(overlay);
    }

    // Clone l'image et la transforme s'il n'y a pas déjà une image agrandie
    let imgClone = document.querySelector(".fullscreen-image");
    if (!imgClone) {
      imgClone = image.cloneNode();
      imgClone.classList.add("fullscreen-image");
      document.body.appendChild(imgClone);
    } else {
      // Si l'image est déjà en grand, la cacher et supprimer l'overlay
      imgClone.remove();
      overlay.remove();
    }

    // Affiche l'overlay et l'image
    overlay.style.display = "block";

    // Ferme l'image et enlève l'overlay quand on clique dessus
    overlay.addEventListener("click", () => {
      imgClone.remove();
      overlay.remove();
    });

    // Ferme l'image quand on clique directement dessus
    imgClone.addEventListener("click", () => {
      imgClone.remove();
      overlay.remove();
    });
  });
});
