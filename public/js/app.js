// Navbar laden in elke pagina
fetch("components/navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
    setupNavbar();
    applyTranslations(document.getElementById("navbar"));
    renderAppIcons(document.getElementById("navbar"));
  });

const APP_ICON_PATHS = {
  home: "M4 11.5L12 4l8 7.5V20h-5.5v-5.5h-5V20H4z",
  add_circle: "M12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16Zm1 4v3h3v2h-3v3h-2v-3H8v-2h3V8h2Z",
  bar_chart: "M5 19V9h3v10H5Zm5 0V5h3v14h-3Zm5 0v-7h3v7h-3Z",
  settings: "M19.14 12.94a7.97 7.97 0 0 0 .06-.94c0-.32-.02-.63-.06-.94l2.03-1.58a.5.5 0 0 0 .12-.64l-1.92-3.32a.5.5 0 0 0-.6-.22l-2.39.96a7.28 7.28 0 0 0-1.63-.94l-.36-2.54A.5.5 0 0 0 13.87 2h-3.74a.5.5 0 0 0-.49.42l-.36 2.54c-.57.23-1.12.53-1.63.94l-2.39-.96a.5.5 0 0 0-.6.22L2.74 8.48a.5.5 0 0 0 .12.64l2.03 1.58c-.04.31-.06.62-.06.94s.02.63.06.94l-2.03 1.58a.5.5 0 0 0-.12.64l1.92 3.32a.5.5 0 0 0 .6.22l2.39-.96c.51.41 1.06.71 1.63.94l.36 2.54a.5.5 0 0 0 .49.42h3.74a.5.5 0 0 0 .49-.42l.36-2.54c.57-.23 1.12-.53 1.63-.94l2.39.96a.5.5 0 0 0 .6-.22l1.92-3.32a.5.5 0 0 0-.12-.64l-2.03-1.58ZM12 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z",
  restaurant: "M7 3v18h2V3H7Zm4 0v7c0 1.1.9 2 2 2v9h2V3h-2v7h-1V3h-1Zm6 0h-1v18h2V3h-1Z",
  water_drop: "M12 2s6 6.5 6 11a6 6 0 0 1-12 0C6 8.5 12 2 12 2Z",
  bedtime: "M7 13a5 5 0 1 0 7.9-4.1A7 7 0 1 1 7 13Z",
  directions_run: "M13.5 5.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm-1.2 2.1 2.1 2.1 2.3.7-.7 2.2-2.8-.9-1.7-1.7-1.3 2.2 2 1.2 1 4.9h-2.3l-.8-3.9-2.2-1.3-2 3.2H5.8l2.9-4.7 1.5-2.6-1.6-.8-1.1 1.7-1.9-.9.9-2 3.2 1.5 1.7.9 1.3-2.1Z",
  save: "M5 3h11l3 3v13H5V3Zm2 2v5h8V5H7Zm0 9v3h8v-3H7Zm1-8h5v3H8V6Z",
  picture_as_pdf: "M6 2h8l4 4v16H6V2Zm8 1.5V7h3.5L14 3.5ZM9 12v6h2.2c1.8 0 3-1.1 3-3s-1.2-3-3-3H9Zm2 1.5h.2c1 0 1.5.6 1.5 1.5s-.5 1.5-1.5 1.5H11v-3Zm6 0h3v1.5h-1.5V15H21v1.5h-1.5V18H18v-4.5Zm-5 0h1.2l1.2 2 1.2-2H17l-1.9 3 1.9 3h-1.2l-1.2-2-1.2 2H12l1.9-3-1.9-3Z",
  delete: "M7 6h10l-.8 12.2A2 2 0 0 1 14.2 20H9.8a2 2 0 0 1-2-1.8L7 6Zm3-3h4l1 1h3v2H5V4h3l1-1Zm-.5 6h1.5v7H9.5V9Zm4 0H15v7h-1.5V9Z",
  add: "M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6V5Z",
  edit: "M4 16.5V20h3.5L17.9 9.6l-3.5-3.5L4 16.5Zm13.7-8.2a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0l-1.3 1.3 3.5 3.5 1.3-1.8Z"
};

function createAppIcon(name, size) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");
  svg.classList.add("app-icon");
  svg.style.width = size;
  svg.style.height = size;

  const path = APP_ICON_PATHS[name] || APP_ICON_PATHS.settings;
  svg.innerHTML = `<path d="${path}"></path>`;
  return svg;
}

function renderAppIcons(root = document) {
  root.querySelectorAll(".material-symbols-outlined").forEach(el => {
    if (el.dataset.appIconRendered === "true") return;
    const iconName = (el.textContent || "").trim();
    const computedSize = window.getComputedStyle(el).fontSize || "24px";
    const icon = createAppIcon(iconName, computedSize);
    el.dataset.appIconRendered = "true";
    el.replaceWith(icon);
  });
}

const appIconObserver = new MutationObserver(mutations => {
  for (const mutation of mutations) {
    mutation.addedNodes.forEach(node => {
      if (!(node instanceof Element)) return;
      if (node.matches(".material-symbols-outlined")) {
        renderAppIcons(node.parentElement || document);
        return;
      }
      if (node.querySelector(".material-symbols-outlined")) {
        renderAppIcons(node);
      }
    });
  }
});

if (document.body) {
  appIconObserver.observe(document.body, { childList: true, subtree: true });
  renderAppIcons(document);
} else {
  window.addEventListener("DOMContentLoaded", () => {
    appIconObserver.observe(document.body, { childList: true, subtree: true });
    renderAppIcons(document);
  });
}

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