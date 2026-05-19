const url = "data/members.json";
const container = document.getElementById("members");

async function getMembers() {
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
      <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">${member.website}</a>
    `;

    container.appendChild(card);
  });
}

getMembers();

// BOTÕES
document.getElementById("gridBtn").addEventListener("click", () => {
  container.classList.add("grid");
  container.classList.remove("list");
});

document.getElementById("listBtn").addEventListener("click", () => {
  container.classList.add("list");
  container.classList.remove("grid");
});

// FOOTER
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;