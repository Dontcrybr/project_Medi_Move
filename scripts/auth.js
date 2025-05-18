
  document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");

    if (registerForm) {
      registerForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = registerForm.querySelector('input[name="fullname"]').value.trim();
        const email = registerForm.querySelector('input[name="email"]').value.trim();
        const password = registerForm.querySelector('input[name="password"]').value;
        const confirmPassword = registerForm.querySelector('input[name="confirm_password"]').value;

        if (password !== confirmPassword) {
          alert("As senhas não coincidem.");
          return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || {};

        if (users[email]) {
          alert("Usuário já cadastrado.");
          return;
        }

        users[email] = { name, password };

        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("loggedUser", name); // salva nome para exibir na home

        window.location.href = "/html/home.html";
      });
    }
  });

