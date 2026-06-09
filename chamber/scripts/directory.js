const container = document.getElementById("members");
const url = "data/members.json";

async function getMembers() {
  if (!container) return;

  const response = await fetch(url);
  const data = await response.json();
  displayMembers(data);
}

function displayMembers(members) {
  container.innerHTML = "";

  members.forEach(member => {
    const card = document.createElement("section");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${member.image}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;

    container.appendChild(card);
  });
}

getMembers();

// BOTÕES
const gridBtn = document.getElementById("gridBtn");
const listBtn = document.getElementById("listBtn");

if (gridBtn && listBtn && container) {
  gridBtn.onclick = () => {
    container.classList.add("grid");
    container.classList.remove("list");
  };

  listBtn.onclick = () => {
    container.classList.add("list");
    container.classList.remove("grid");
  };
}

// FOOTER
const yearDir = document.getElementById("year");
const lastModifiedDir = document.getElementById("lastModified");

if (yearDir && lastModifiedDir) {
  yearDir.textContent = new Date().getFullYear();
  lastModifiedDir.textContent = document.lastModified;
}