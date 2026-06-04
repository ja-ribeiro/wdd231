document.addEventListener("DOMContentLoaded", () => {

  // timestamp
  document.getElementById("timestamp").value = new Date().toISOString();

  // abrir modal
  document.querySelectorAll("[data-modal]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.getElementById(btn.dataset.modal).showModal();
    });
  });

  // fechar modal
  document.querySelectorAll(".close").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest("dialog").close();
    });
  });

});