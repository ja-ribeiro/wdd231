const apiKey = "b676a5f8ea3a81c6e9d5a1c319d0ee88";
const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=Sao Paulo&units=metric&appid=${apiKey}`;

// WEATHER
async function getWeather() {
  try {
    const response = await fetch(weatherURL);
    const data = await response.json();

    const current = data.list[0];

    document.getElementById("temp").textContent =
      `Temp: ${current.main.temp}°C`;

    document.getElementById("desc").textContent =
      current.weather[0].description;

    document.getElementById("day1").textContent =
      `Day 1: ${data.list[8].main.temp}°C`;

    document.getElementById("day2").textContent =
      `Day 2: ${data.list[16].main.temp}°C`;

    document.getElementById("day3").textContent =
      `Day 3: ${data.list[24].main.temp}°C`;

  } catch (error) {
    console.error("Erro no weather:", error);
  }
}

if (document.getElementById("temp")) {
  getWeather();
}


// SPOTLIGHT
async function getSpotlights() {
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();

    const filtered = data.filter(m => m.membership === 3 || m.membership === 2);

    const shuffled = filtered.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    const container = document.getElementById("spotlights");

    selected.forEach(member => {
      const card = document.createElement("div");
      card.classList.add("spotlight-card");

      card.innerHTML = `
        <h3>${member.name}</h3>
        <img src="${member.image}" alt="${member.name}">
        <p>${member.phone}</p>
        <p>${member.address}</p>
        <a href="${member.website}" target="_blank">Visit</a>
        <p>${member.membership === 3 ? "GOLD" : "SILVER"}</p>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    console.error("Erro no spotlight:", error);
  }
}

getSpotlights();


// FOOTER
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;