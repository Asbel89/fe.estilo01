(() => {
  const WA_LINK = "https://wa.me/qr/OMDJ2NT2SAGII1";

  const IMAGENS = [
    "img/peca-1.webp",
    "img/peca-2.webp",
    "img/peca-3.webp",
    "img/peca-4.webp",
    "img/peca-5.webp",
    "img/sobre.webp",
    "img/peca-6.webp",
    "img/peca-7.webp",
    "img/peca-8.webp",
    "img/peca-9.webp",
    "img/peca-10.webp",
    "img/hero.webp"
  ];

  const galeria = document.getElementById("galeria");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxClose = document.getElementById("lightboxClose");

  IMAGENS.forEach((src, i) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "card";
    card.setAttribute("aria-label", "Ampliar peça " + (i + 1));

    const img = document.createElement("img");
    img.src = src;
    img.alt = "Peça FÉ & ESTILO " + (i + 1);
    img.loading = "lazy";

    const overlay = document.createElement("div");
    overlay.className = "card-overlay";
    const span = document.createElement("span");
    span.textContent = "Ampliar";
    overlay.appendChild(span);

    card.appendChild(img);
    card.appendChild(overlay);
    card.addEventListener("click", () => abrirLightbox(img));
    galeria.appendChild(card);
  });

  function abrirLightbox(img) {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function fecharLightbox() {
    lightbox.hidden = true;
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }

  lightboxClose.addEventListener("click", fecharLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) fecharLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") fecharLightbox();
  });
})();