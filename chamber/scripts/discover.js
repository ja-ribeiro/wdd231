import { places } from "../data/places.mjs";

const container = document.getElementById("cards-container");

// CREATE CARDS
places.forEach((place, index) => {
  const card = document.createElement("section");

  card.classList.add("discover-card");

  card.style.gridArea = `card${index + 1}`;

  card.innerHTML = `
    <h2>${place.name}</h2>
    <figure>
      <img 
        src="${place.image}" 
        alt="${place.name}" 
        width="300" 
        height="200"
        loading="${index === 0 ? "eager" : "lazy"}"
        fetchpriority="${index === 0 ? "high" : "auto"}"
        decoding="async"
      >
    </figure>
    <address>${place.address}</address>
    <p>${place.description}</p>
    <button>Learn More</button>
  `;

  container.appendChild(card);
});


// LOCAL STORAGE MESSAGE
const visitMessage = document.getElementById("visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

  visitMessage.textContent =
    days < 1
      ? "Back so soon! Awesome!"
      : days === 1
      ? "You last visited 1 day ago."
      : `You last visited ${days} days ago.`;
}

localStorage.setItem("lastVisit", now);


// FOOTER
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;


// MOBILE MENU (SEGURO)
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hide");
  });
}