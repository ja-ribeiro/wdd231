document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("timestamp").value = new Date().toISOString();

  document.querySelectorAll("[data-modal]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.getElementById(btn.dataset.modal).showModal();
    });
  });

  document.querySelectorAll(".close").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest("dialog").close();
    });
  });

});