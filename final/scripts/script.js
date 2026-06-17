// MENU
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

if (btn) btn.onclick = () => nav.classList.toggle("open");

// CAROUSEL SLIDE
const track = document.querySelector(".carousel-track");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

if (track && next && prev) {
  const items = document.querySelectorAll(".item");
  let index = 0;

  function update() {
    const width = items[0].offsetWidth;
    track.style.transform = `translateX(-${index * width}px)`;
  }

  next.onclick = () => {
    if (index < items.length - 4) {
      index++;
      update();
    }
  };

  prev.onclick = () => {
    if (index > 0) {
      index--;
      update();
    }
  };
}

// FILTER
const buttons = document.querySelectorAll(".tabs button");
const cards = document.querySelectorAll(".card");

buttons.forEach(b => {
  b.onclick = () => {
    const f = b.dataset.filter;
    cards.forEach(c => {
      c.style.display =
        f === "all" || c.classList.contains(f) ? "block" : "none";
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
        div.classList.add("review");
        div.innerHTML = `<p><strong>${x.name}</strong>: ${x.comment}</p>`;
        container.appendChild(div);
      });
    })
    .catch(() => {
      container.innerHTML = "Reviews not available";
    });
}