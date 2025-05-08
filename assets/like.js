document.addEventListener("DOMContentLoaded", () => {
  // Sélectionne tous les boutons "like"
  const likeInputs = document.querySelectorAll(".like input, .like1 input");

  likeInputs.forEach((input) => {
    // Trouve le nom du resto associé (via DOM)
    const parent = input.closest("article, .menu-title");
    const titleEl = parent.querySelector(".card-title, h2");
    if (!titleEl) return;

    const key = `like-${titleEl.textContent.trim()}`;

    // Met à jour l'état au chargement
    input.checked = localStorage.getItem(key) === "true";

    // Sauvegarde au clic
    input.addEventListener("change", () => {
      localStorage.setItem(key, input.checked);
    });
  });
});
