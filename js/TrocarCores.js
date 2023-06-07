// Obtém o botão do tema
const themeButton = document.getElementById('bd-theme');

// Obtém o menu suspenso do tema
const themeDropdown = document.querySelector('.dropdown-menu');

// Obtém os itens do menu suspenso do tema
const themeItems = document.querySelectorAll('.dropdown-item');

// Adiciona um evento de clique ao botão do tema
themeButton.addEventListener('click', function (event) {
  // Verifica se o menu suspenso está atualmente visível
  const isDropdownVisible = themeDropdown.classList.contains('show');

  if (isDropdownVisible) {
    // Se o menu suspenso estiver visível, fecha-o e impede a propagação do evento de clique
    themeDropdown.classList.remove('show');
    event.stopPropagation();
  } else {
    // Se o menu suspenso estiver oculto, abre-o
    themeDropdown.classList.add('show');
  }
});

// Adiciona um evento de clique a cada item do menu suspenso do tema
themeItems.forEach(function (item) {
  item.addEventListener('click', function () {
    // Obtém o valor do tema selecionado
    const selectedTheme = item.getAttribute('data-bs-theme-value');

    // Atualiza o tema selecionado
    handleThemeSelection(selectedTheme);

    // Fecha o menu suspenso do tema
    themeDropdown.classList.remove('show');
  });
});

// Função para atualizar o tema selecionado
function handleThemeSelection(themeValue) {
  // Remove as classes ativas de todos os itens do menu suspenso
  themeItems.forEach(function (item) {
    item.classList.remove('active');
    item.setAttribute('aria-pressed', 'false');
  });

  // Adiciona a classe ativa ao item do tema selecionado
  const selectedThemeItem = document.querySelector(`[data-bs-theme-value="${themeValue}"]`);
  selectedThemeItem.classList.add('active');
  selectedThemeItem.setAttribute('aria-pressed', 'true');

  // Atualiza o tema conforme o valor selecionado
  if (themeValue === 'light') {
    // Aplica o tema claro
    document.body.classList.remove('dark');
  } else if (themeValue === 'dark') {
    // Aplica o tema escuro
    document.body.classList.add('dark');
  }
}