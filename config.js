function isAuthenticated() {
  return localStorage.getItem("isLoggedIn") === "true";
}

// Verificar se o usuário está autenticado ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
  if (!isAuthenticated() && isRestrictedPage()) {
    showPopup();
  }
});

// Verificar se a página é restrita
function isRestrictedPage() {
  // Verifique o URL da página atual ou qualquer outra lógica para identificar se é uma página restrita
  // Retorne true se for uma página restrita e false caso contrário
  // Exemplo simples:
  var currentPage = window.location.href;
  return currentPage.includes("conta.html");
}
// Exibir o pop-up
function showPopup() {
  // Exibir o pop-up aqui, por exemplo, alterando a visibilidade de um elemento HTML ou utilizando uma biblioteca/modal personalizado
  alert("Você precisa fazer login para acessar esta página.");
  window.location.href = "index.html"; // Redirecionar para a página de login
}

document.getElementById("loginBtn").addEventListener("click", function () {
  document.getElementById("loginModal").style.display = "block";
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Verifica o nome de usuário e senha
    if (username === "aaa" && password === "aaa") {
      localStorage.setItem("isLoggedIn", "true");
      // Login bem-sucedido
      alert("Login bem-sucedido!");
      var loginModal = document.getElementById("loginModal");
      loginModal.style.display = "none";
      
      // Atualizar o botão de login e de acesso aos links
      updateLoginButton();
      checkButtonAccess();
      
      // Adicione aqui o redirecionamento para a página restrita ou atualização da interface para mostrar o conteúdo restrito
    } else {
      // Login inválido
      alert("Nome de usuário ou senha incorretos. Por favor, tente novamente.");
    }
  });
});
  
document.getElementById("closeBtn").addEventListener("click", function () {
  document.getElementById("loginModal").style.display = "none"
});

// Função para atualizar o botão de login
function updateLoginButton() {
  var isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  var loginButton = document.getElementById("loginBtn");
  
  if (isLoggedIn) {
    loginButton.textContent = "Logoff";
    loginButton.removeEventListener("click", handleLoginClick);
    loginButton.addEventListener("click", handleLogoffClick);
    
  } else {
    loginButton.textContent = "Login";
    loginButton.removeEventListener("click", handleLogoffClick);
    loginButton.addEventListener("click", handleLoginClick);
    loginModal.style.display = "none";
    checkButtonAccess();
  }
}

// Função para lidar com o evento de clique no botão de login
function handleLoginClick() {
  document.getElementById("loginModal").style.display = "block";
}

// Função para lidar com o evento de clique no botão de logoff
function handleLogoffClick() {
  localStorage.removeItem("isLoggedIn");
  updateLoginButton();
}

function checkButtonAccess() {
  var isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  var buttons = document.querySelectorAll("#block");

  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];

    if (!isLoggedIn) {
      button.addEventListener("click", preventButtonClick);
    } else {
      button.removeEventListener("click", preventButtonClick);
    }
  }
}

// Função para impedir o clique nos botões bloqueados
function preventButtonClick(event) {
  event.preventDefault();
  alert("Você precisa fazer login para acessar esta página.");
}

// Verificar e atualizar o botão de login no carregamento da página
document.addEventListener("DOMContentLoaded", function() {
  updateLoginButton();
  checkButtonAccess();
});
