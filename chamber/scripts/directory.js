const container = document.getElementById("members");
const url = "data/members.json";

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
      <img src="images/${member.image}" alt="${member.name}">
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
document.getElementById("gridBtn").onclick = () => {
  container.classList.add("grid");
  container.classList.remove("list");
};

document.getElementById("listBtn").onclick = () => {
  container.classList.add("list");
  container.classList.remove("grid");
};

// FOOTER
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;