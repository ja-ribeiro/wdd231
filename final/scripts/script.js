// MENU
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

if (btn) {
  btn.onclick = () => nav.classList.toggle("open");
}

// CAROUSEL
const track = document.querySelector(".carousel-track");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

if (track && next && prev) {
  let scroll = 0;

  next.onclick = () => {
    scroll += 200;
    track.style.transform = `translateX(-${scroll}px)`;
  };

  prev.onclick = () => {
    scroll -= 200;
    if (scroll < 0) scroll = 0;
    track.style.transform = `translateX(-${scroll}px)`;
  };
}

// FILTER
const buttons = document.querySelectorAll(".tabs button");
const cards = document.querySelectorAll(".card");

buttons.forEach(b => {
  b.onclick = () => {
    const f = b.dataset.filter;

    cards.forEach(c => {
      c.style.display = (f === "all" || c.classList.contains(f)) ? "block" : "none";
    });
  };
});

// REVIEWS
const container = document.getElementById("reviews");

if (container) {
  fetch("reviews.json")
    .then(r => r.json())
    .then(data => {
      data.forEach(x => {
        const div = document.createElement("div");
        div.innerHTML = `<p><strong>${x.name}</strong>: ${x.comment}</p>`;
        container.appendChild(div);
      });
    });
}