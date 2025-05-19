function toggleForm() {
      const loginForm = document.getElementById("loginForm");
      const registerForm = document.getElementById("registerForm");

      if (loginForm.classList.contains("hidden")) {
        loginForm.classList.remove("hidden");
        registerForm.classList.add("hidden");
        clearErrors();
      } else {
        loginForm.classList.add("hidden");
        registerForm.classList.remove("hidden");
        clearErrors();
      }
    }

    function clearErrors() {
      document.getElementById('loginError').style.display = 'none';
      document.getElementById('loginError').textContent = '';
      document.getElementById('registerError').style.display = 'none';
      document.getElementById('registerError').textContent = '';
    }

    // Funções para salvar e buscar usuários no localStorage
    function getUsers() {
      return JSON.parse(localStorage.getItem('users') || '{}');
    }

    function saveUsers(users) {
      localStorage.setItem('users', JSON.stringify(users));
    }

    // Mostrar/ocultar senha
    document.querySelectorAll('.toggle-password').forEach(button => {
      button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const input = document.getElementById(targetId);
        const img = button.querySelector('img');

        if (input.type === 'password') {
          input.type = 'text';
          img.src = '/imgs/fechar-o-olho.png';
          img.alt = 'Ocultar senha';
        } else {
          input.type = 'password';
          img.src = '/imgs/olho.png';
          img.alt = 'Mostrar senha';
        }
      });
    });

    // Validação da força da senha no cadastro
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
      passwordInput.addEventListener('input', () => {
        const val = passwordInput.value;
        setValid(document.getElementById('length'), val.length >= 8);
        setValid(document.getElementById('uppercase'), /[A-Z]/.test(val));
        setValid(document.getElementById('number'), /\d/.test(val));
        setValid(document.getElementById('special'), /[!@#$%^&*(),.?":{}|<>]/.test(val));
      });
    }

    function setValid(el, isValid) {
      if (!el) return;
      if (isValid) {
        el.classList.add('valid');
        el.classList.remove('invalid');
      } else {
        el.classList.add('invalid');
        el.classList.remove('valid');
      }
    }

    // Login
    document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();

      const email = this.email.value.trim();
      const password = document.getElementById('login_password').value;

      if (!email || !password) {
        showError('loginError', 'Preencha todos os campos.');
        return;
      }

      const users = getUsers();

      if (!users[email]) {
        showError('loginError', 'Usuário não cadastrado.');
        return;
      }

      if (users[email].password !== password) {
        showError('loginError', 'Senha incorreta.');
        return;
      }

      // Login bem-sucedido
      localStorage.setItem('loggedUser', users[email].name);
      alert('Login realizado com sucesso!');
      window.location.href = '/home.html';
    });

    // Cadastro
document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const fullname = this.fullname.value.trim();
  const email = this.email.value.trim();
  const password = this.password.value;
  const confirmPassword = this.confirm_password.value;

  if (!fullname || !email || !password || !confirmPassword) {
    showError('registerError', 'Preencha todos os campos.');
    return;
  }

  if (password !== confirmPassword) {
    showError('registerError', 'As senhas não coincidem.');
    return;
  }

  // NOVO: Validação de força da senha
  if (
    password.length < 8 ||
    !/[A-Z]/.test(password) ||
    !/\d/.test(password) ||
    !/[!@#$%^&*(),.?":{}|<>]/.test(password)
  ) {
    showError('registerError', 'A senha deve ter no mínimo 8 caracteres, uma letra maiúscula, um número e um caractere especial.');
    return;
  }

  const users = getUsers();

  if (users[email]) {
    showError('registerError', 'Usuário já cadastrado.');
    return;
  }

  users[email] = {
    name: fullname,
    password: password
  };

  saveUsers(users);

  localStorage.setItem('loggedUser', fullname);
  alert('Cadastro realizado com sucesso!');
  window.location.href = '/home.html';
});

    function showError(id, msg) {
      const el = document.getElementById(id);
      el.textContent = msg;
      el.style.display = 'block';
    }
  document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.carousel-card');
    let currentIndex = 0;

    function showNextCard() {
      cards[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % cards.length;
      cards[currentIndex].classList.add('active');
    }

    setInterval(showNextCard, 4000); // Troca a cada 4 segundos
  });

