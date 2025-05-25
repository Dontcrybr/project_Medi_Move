

      // Fecha dropdown se clicar fora
      window.addEventListener("click", (e) => {
        if (!userMenu.contains(e.target)) {
          userDropdown.style.display = "none";
        }
      });
  
 function getGoogleUserName() {
  const token = localStorage.getItem('google_token');
  if (!token) return null;
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.name || payload.given_name || null;
  } catch (e) {
    return null;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // DESKTOP
  const loginLink = document.getElementById("login-link");
  const userMenu = document.getElementById("user-menu");
  const userNameSpan = document.getElementById("user-name");
  const nomeUsuario = document.getElementById('nomeUsuario');
  const logoutBtn = document.getElementById("logout-btn");
  const loggedUser = localStorage.getItem("loggedUser");
  const googleUserName = getGoogleUserName();

  if (googleUserName) {
    if (loginLink) loginLink.classList.add("hidden");
    if (userMenu) userMenu.classList.remove("hidden");
    if (userNameSpan) userNameSpan.textContent = `Olá, ${googleUserName}`;
    if (nomeUsuario) nomeUsuario.textContent = googleUserName;
  } else if (loggedUser) {
    if (loginLink) loginLink.classList.add("hidden");
    if (userMenu) userMenu.classList.remove("hidden");
    if (userNameSpan) userNameSpan.textContent = `Olá, ${loggedUser}`;
    if (nomeUsuario) nomeUsuario.textContent = loggedUser;
  } else {
    if (loginLink) loginLink.classList.remove("hidden");
    if (userMenu) userMenu.classList.add("hidden");
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("loggedUser");
      localStorage.removeItem("google_token");
      window.location.reload();
    });
  }
});

  document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menuLinks = document.querySelector(".menu-links");

  hamburger.addEventListener("click", () => {
    menuLinks.classList.toggle("active");
  });

  // Opcional: fechar menu ao clicar fora
  document.addEventListener("click", (event) => {
    if (!menuLinks.contains(event.target) && !hamburger.contains(event.target)) {
      menuLinks.classList.remove("active");
    }
  });
});

  const hamburger = document.getElementById('hamburger-btn');
  const menu = document.getElementById('menu');

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
  });
// ...existing code...
const hamburgerBtn = document.getElementById('hamburgerBtn');
const menuLinks = document.getElementById('menuLinks');

hamburgerBtn.addEventListener('click', () => {
  menuLinks.classList.toggle('open');
});

// Fecha o menu ao clicar fora
document.addEventListener('click', function(event) {
  if (!menuLinks.contains(event.target) && !hamburgerBtn.contains(event.target)) {
    menuLinks.classList.remove('open');
  }
});







