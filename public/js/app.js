// Navbar laden in elke pagina
fetch("components/navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
    setupNavbar();
  });

function setupNavbar() {
  const navbar = document.querySelector(".bottom-nav");

  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      navbar.classList.remove("hide");
      return;
    }

    if (currentScroll > lastScroll) {
      navbar.classList.add("hide"); // scroll omlaag
    } else {
      navbar.classList.remove("hide"); // scroll omhoog
    }

    lastScroll = currentScroll;
  });

  // Actieve pagina highlight
  const links = document.querySelectorAll(".nav-link");

  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });
}

// Dark mode toggle
const toggle = document.getElementById("darkModeToggle");

if (toggle) {
  // Laad opgeslagen voorkeur
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
    toggle.checked = true;
  }

  toggle.addEventListener("change", () => {
    const enabled = toggle.checked;
    document.body.classList.toggle("dark", enabled);
    localStorage.setItem("darkMode", enabled);
  });
}

// Toepassen op elke pagina bij laden
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
}