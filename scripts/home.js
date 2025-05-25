

      // Fecha dropdown se clicar fora
      window.addEventListener("click", (e) => {
        if (!userMenu.contains(e.target)) {
          userDropdown.style.display = "none";
        }
      });
  
 document.addEventListener("DOMContentLoaded", () => {
  // DESKTOP
  const loginLink = document.getElementById("login-link");
  const userMenu = document.getElementById("user-menu");
  const userNameSpan = document.getElementById("user-name");
  const logoutBtn = document.getElementById("logout-btn");
  const loggedUser = localStorage.getItem("loggedUser");

  if (loggedUser) {
    if (loginLink) loginLink.classList.add("hidden");
    if (userMenu) userMenu.classList.remove("hidden");
    if (userNameSpan) userNameSpan.textContent = `Olá, ${loggedUser}`;
  } else {
    if (loginLink) loginLink.classList.remove("hidden");
    if (userMenu) userMenu.classList.add("hidden");
  }
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("loggedUser");
      window.location.reload();
    });
  }

  // MOBILE
  const loginFloatBtn = document.getElementById('loginFloatBtn');
  const logoutFloatBtn = document.getElementById('logoutFloatBtn');

  if (loginFloatBtn && logoutFloatBtn) {
    if (loggedUser) {
      loginFloatBtn.textContent = `Olá, ${loggedUser}`;
      loginFloatBtn.onclick = null;
      loginFloatBtn.classList.add('logged');
      loginFloatBtn.style.background = "#28a745";
      logoutFloatBtn.style.display = "block";
      logoutFloatBtn.onclick = () => {
        localStorage.removeItem("loggedUser");
        window.location.reload();
      };
    } else {
      loginFloatBtn.textContent = "Entrar";
      loginFloatBtn.onclick = () => window.location.href='/login.html';
      loginFloatBtn.classList.remove('logged');
      loginFloatBtn.style.background = "#007bff";
      logoutFloatBtn.style.display = "none";
    }
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







