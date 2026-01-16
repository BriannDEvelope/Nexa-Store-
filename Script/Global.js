// Inyectar CSS global
const css = document.createElement("link");
css.rel = "stylesheet";
css.href = "/Css/Global.css"; // RUTA ABSOLUTA

document.head.appendChild(css);

// ===== FONT AWESOME =====
const fa = document.createElement("link");
fa.rel = "stylesheet";
fa.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
fa.crossOrigin = "anonymous";
document.head.appendChild(fa);



window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");

  if (!header) return;

  if (window.scrollY > 5) {
    header.classList.add("fixed");
    document.body.classList.add("with-header");
  } else {
    header.classList.remove("fixed");
    document.body.classList.remove("with-header");
  }
});








