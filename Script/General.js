fetch("/Components/Header.html")
  .then(res => {
    if (!res.ok) throw new Error("No se pudo cargar Header");
    return res.text();
  })
  .then(html => {
    const headerContainer = document.getElementById("header");
    headerContainer.innerHTML = html;

    iniciarHeaderScroll(); // 🔑 IMPORTANTE
  })
  .catch(err => console.error(err));

function iniciarHeaderScroll() {
  const header = document.querySelector(".header");
  if (!header) return;

  header.classList.toggle("fixed", window.scrollY > 10);

  window.addEventListener("scroll", () => {
    header.classList.toggle("fixed", window.scrollY > 10);
  });
}




fetch("/Layout/Sesion.html")
  .then(res => {
    if (!res.ok) throw new Error("No se pudo cargar Layout");
    return res.text();
  })
  .then(html => {
    document.getElementById("cart1").innerHTML = html;
  })
  .catch(err => console.error(err));

  fetch("/Components/Footer.html")
  .then(res => {
    if (!res.ok) throw new Error("No se pudo cargar Layout");
    return res.text();
  })
  .then(html => {
    document.getElementById("footer").innerHTML = html;
  })
  .catch(err => console.error(err));

  

  