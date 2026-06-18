// MENU
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

if (btn) btn.onclick = () => nav.classList.toggle("open");

// GALLERY LOGIC
const mainPhoto = document.getElementById("main-photo");
const thumbs = document.querySelectorAll(".thumb");

if (mainPhoto && thumbs.length > 0) {
  thumbs.forEach(thumb => {
    thumb.addEventListener("click", function() {
      // 1. Remove o efeito ativo de todas as miniaturas
      thumbs.forEach(t => t.classList.remove("active"));
      
      // 2. Adiciona o efeito ativo na miniatura clicada
      this.classList.add("active");
      
      // 3. Aplica um efeito suave de transição ao trocar a foto
      mainPhoto.style.opacity = 0;
      setTimeout(() => {
        mainPhoto.src = this.src;
        mainPhoto.style.opacity = 1;
      }, 200);
    });
  });
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

// REVIEWS & LOCALSTORAGE LOGIC
const container = document.getElementById("reviews");
const reviewForm = document.getElementById("review-form");

// Comentários padrão caso o arquivo JSON seja bloqueado localmente pelo navegador
const defaultReviews = [
  { "name": "Ana", "comment": "Amazing coffee!" },
  { "name": "Carlos", "comment": "Great atmosphere!" },
  { "name": "Julia", "comment": "Loved the latte!" }
];

// Função que renderiza os comentários na tela
function renderReviews(reviewsList) {
  container.innerHTML = ""; // Limpa o container antes de renderizar
  reviewsList.forEach(x => {
    const div = document.createElement("div");
    div.classList.add("review");
    div.innerHTML = `<p><strong>${x.name}</strong>: ${x.comment}</p>`;
    container.appendChild(div);
  });
}

// Inicialização das reviews
if (container) {
  // 1. Verifica se já existem comentários salvos no LocalStorage do navegador
  let savedReviews = localStorage.getItem("coffeeSpotReviews");

  if (savedReviews) {
    // Se existir, carrega e exibe
    renderReviews(JSON.parse(savedReviews));
  } else {
    // Se não existir, tenta carregar do JSON externo
    fetch("reviews.json")
      .then(r => r.json())
      .then(data => {
        localStorage.setItem("coffeeSpotReviews", JSON.stringify(data));
        renderReviews(data);
      })
      .catch(() => {
        // Se o fetch falhar (Erro de CORS / arquivo local), usa a lista padrão e salva
        localStorage.setItem("coffeeSpotReviews", JSON.stringify(defaultReviews));
        renderReviews(defaultReviews);
      });
  }
}

// Lógica de envio do formulário
if (reviewForm) {
  reviewForm.addEventListener("submit", function(e) {
    e.preventDefault(); // Evita que a página recarregue ao enviar o formulário

    const nameInput = document.getElementById("reviewer-name");
    const commentInput = document.getElementById("reviewer-comment");

    // Cria o novo objeto de comentário
    const newReview = {
      name: nameInput.value,
      comment: commentInput.value
    };

    // Pega a lista atual do localStorage
    let currentReviews = JSON.parse(localStorage.getItem("coffeeSpotReviews")) || defaultReviews;
    
    // Adiciona o novo comentário no início ou fim da lista
    currentReviews.push(newReview);

    // Salva a lista atualizada de volta no localStorage
    localStorage.setItem("coffeeSpotReviews", JSON.stringify(currentReviews));

    // Renderiza novamente a lista na tela para mostrar o novo comentário imediatamente
    renderReviews(currentReviews);

    // Limpa os campos do formulário
    reviewForm.reset();
  });
}