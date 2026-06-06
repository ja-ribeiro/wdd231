document.addEventListener("DOMContentLoaded", () => {

  // timestamp
  document.getElementById("timestamp").value = new Date().toISOString();

  // last modified
  document.getElementById("lastModified").textContent = document.lastModified;

  // modals
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