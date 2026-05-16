const menuBtn = document.getElementById("menuBtn");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    document.getElementById("navMenu").classList.toggle("open");
  });
}