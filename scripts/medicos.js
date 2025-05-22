const themeToggleHeader = document.getElementById('themeToggle');
const themeToggleMobile = document.getElementById('themeToggle1');
const body = document.body;
const logoImg = document.getElementById('logo-img');
const logoImg1 = document.getElementById('logo-img1');

function setTheme(isDark) {
  if (isDark) {
    body.classList.add('dark-mode');
    if (themeToggleHeader) themeToggleHeader.textContent = '☀️';
    if (themeToggleMobile) themeToggleMobile.textContent = '☀️';
    if (logoImg) logoImg.src = '/imgs/logo h.png';
    if (logoImg1) logoImg1.src = '/imgs/logo h.png';
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-mode');
    if (themeToggleHeader) themeToggleHeader.textContent = '🌙';
    if (themeToggleMobile) themeToggleMobile.textContent = '🌙';
    if (logoImg) logoImg.src = '/imgs/logo sem fundo h.png';
    if (logoImg1) logoImg1.src = '/imgs/logo sem fundo h.png';
    localStorage.setItem('theme', 'light');
  }
}

if (themeToggleHeader) {
  themeToggleHeader.addEventListener('click', () => {
    const isDark = body.classList.contains('dark-mode');
    setTheme(!isDark);
  });
}
if (themeToggleMobile) {
  themeToggleMobile.addEventListener('click', () => {
    const isDark = body.classList.contains('dark-mode');
    setTheme(!isDark);
  });
}

// Carregar tema salvo
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  setTheme(true);
}
let lastScroll = 0;
const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll && currentScroll > 80) {
    // Descendo: esconde o header
    header.classList.add('header-hide');
  } else {
    // Subindo: mostra o header
    header.classList.remove('header-hide');
  }
  lastScroll = currentScroll;
});
  // Alternar tema claro/escuro
  const themeToggle = document.getElementById('themeToggle');
  const themeToggleFloat = document.getElementById('themeToggle1');

  function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  themeToggle?.addEventListener('click', toggleTheme);
  themeToggleFloat?.addEventListener('click', toggleTheme);

  // Aplica tema salvo
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }

  // Simulação de login
  const loginLink = document.getElementById('login-link');
  const userMenu = document.getElementById('user-menu');
  const userName = document.getElementById('user-name');
  const logoutBtn = document.getElementById('logout-btn');

  const loginFloatBtn = document.getElementById('loginFloatBtn');
  const logoutFloatBtn = document.getElementById('logoutFloatBtn');

  function checkLogin() {
    const user = localStorage.getItem('user');
    if (user) {
      loginLink.style.display = 'none';
      userMenu.classList.remove('hidden');
      userName.textContent = `Olá, ${user}`;
      loginFloatBtn.style.display = 'none';
      logoutFloatBtn.style.display = 'block';
    } else {
      loginLink.style.display = 'inline';
      userMenu.classList.add('hidden');
      loginFloatBtn.style.display = 'block';
      logoutFloatBtn.style.display = 'none';
    }
  }

  loginFloatBtn.addEventListener('click', () => {
    const nome = prompt("Digite seu nome para simular login:");
    if (nome) {
      localStorage.setItem('user', nome);
      checkLogin();
    }
  });

  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('user');
    checkLogin();
  });

  logoutFloatBtn.addEventListener('click', () => {
    localStorage.removeItem('user');
    checkLogin();
  });

  checkLogin();
