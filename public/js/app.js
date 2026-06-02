// Navbar laden in elke pagina
fetch("components/navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
    setupNavbar();
    applyTranslations(document.getElementById("navbar"));
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

// Vertalingen toepassen op de huidige pagina
applyTranslations(document);

// Delegate clicks on elements with `data-href` so we can remove inline onclicks
document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-href]');
  if (!el) return;
  const href = el.dataset.href;
  if (href) window.location.href = href;
});

// Make clickable cards keyboard-accessible (Enter key)
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter') return;
  const el = document.activeElement;
  if (el && el.dataset && el.dataset.href) {
    window.location.href = el.dataset.href;
  }
});

// Ensure elements with data-href are focusable and have appropriate role
document.querySelectorAll('[data-href]').forEach(el => {
  if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '0');
  if (!el.getAttribute('role')) el.setAttribute('role', 'link');
});

function showConfirmDialog({ title, message, confirmText, cancelText, confirmClass = "btn-danger" }) {
  return new Promise(resolve => {
    const existing = document.getElementById("appConfirmDialog");
    if (existing) existing.remove();

    const overlay = document.createElement("div");
    overlay.id = "appConfirmDialog";
    overlay.className = "app-dialog-overlay";
    overlay.innerHTML = `
      <div class="app-dialog" role="dialog" aria-modal="true" aria-labelledby="appConfirmDialogTitle" aria-describedby="appConfirmDialogMessage">
        <div class="app-dialog-icon">!</div>
        <div class="app-dialog-content">
          <h5 class="app-dialog-title" id="appConfirmDialogTitle"></h5>
          <p class="app-dialog-message" id="appConfirmDialogMessage"></p>
        </div>
        <div class="app-dialog-actions">
          <button type="button" class="btn btn-light app-dialog-cancel" data-action="cancel"></button>
          <button type="button" class="btn app-dialog-confirm" data-action="confirm"></button>
        </div>
      </div>`;

    const titleEl = overlay.querySelector("#appConfirmDialogTitle");
    const messageEl = overlay.querySelector("#appConfirmDialogMessage");
    const cancelBtn = overlay.querySelector("[data-action='cancel']");
    const confirmBtn = overlay.querySelector("[data-action='confirm']");

    titleEl.textContent = title;
    messageEl.textContent = message;
    cancelBtn.textContent = cancelText;
    confirmBtn.textContent = confirmText;
    confirmBtn.className = `btn app-dialog-confirm ${confirmClass}`;

    const close = (result) => {
      document.removeEventListener("keydown", onKeyDown);
      overlay.remove();
      document.body.classList.remove("dialog-open");
      resolve(result);
    };

    const onKeyDown = (event) => {
      if (event.key === "Escape") close(false);
    };

    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) close(false);
    });

    cancelBtn.addEventListener("click", () => close(false));
    confirmBtn.addEventListener("click", () => close(true));

    document.body.classList.add("dialog-open");
    document.addEventListener("keydown", onKeyDown);
    document.body.appendChild(overlay);
    window.requestAnimationFrame(() => confirmBtn.focus());
  });
}

window.showConfirmDialog = showConfirmDialog;

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js").catch(err => {
      console.warn("Service worker registration failed", err);
    });
  });
}