$(function () {
    $(".datepicker").datepicker({
      dateFormat: "dd/mm/yy",
      minDate: 0,
    });
  });

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.needs-validation');
    const dadosSalvos = document.getElementById('dadosSalvos');

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      event.stopPropagation();

      if (form.checkValidity()) {
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const address2 = document.getElementById('address2').value;
        const country = document.getElementById('country').value;
        const state = document.getElementById('state').value;
        const zip = document.getElementById('zip').value;
        const ccName = document.getElementById('cc-name').value;
        const ccNumber = document.getElementById('cc-number').value;
        const ccExpiration = document.getElementById('cc-expiration').value;
        const ccCVV = document.getElementById('cc-cvv').value;
        const formattedCCNumber = ccNumber.replace(/(\d{4})/g, '$1 ').trim(); // Adiciona espaço a cada 4 dígitos

        const savedData = `
          <p><strong>Nome:</strong> ${firstName} ${lastName}</p>
          <p><strong>Username:</strong> ${username}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Endereço:</strong> ${address}</p>
          <p><strong>Endereço 2:</strong> ${address2}</p>
          <p><strong>País:</strong> ${country}</p>
          <p><strong>Estado:</strong> ${state}</p>
          <p><strong>CEP:</strong> ${zip}</p>
          <p><strong>Nome no cartão:</strong> ${ccName}</p>
          <p><strong>Número do cartão:</strong> ${ccNumber}</p>
          <p><strong>Data de expiração:</strong> ${ccExpiration}</p>
          <p><strong>CVV:</strong> ${ccCVV}</p>
          <button class="btn btn-sm btn-primary editar" onclick="editarDados(this)">Editar</button>
          <button class="btn btn-sm btn-danger excluir" onclick="excluirDados(this)">Excluir</button>
        `;

        dadosSalvos.innerHTML = savedData;
      }

      form.classList.add('was-validated');
    });
  });


  function editarDados(element) {
    const dados = element.parentElement;
    const dadosEditados = dados.cloneNode(true);

    const buttonEditar = dadosEditados.querySelector('.editar');
    const buttonExcluir = dadosEditados.querySelector('.excluir');

    buttonEditar.remove();
    buttonExcluir.remove();

    dados.innerHTML = '';
    dados.appendChild(dadosEditados);

    const form = document.querySelector('.needs-validation');

    form.classList.remove('was-validated');
  }

  function excluirDados(element) {
    const dados = element.parentElement;
    dados.remove();

    // Ignorar a validação do formulário ao excluir os dados
    const form = document.querySelector('.needs-validation');
    form.classList.remove('was-validated');
  }
  
  const ccNumberInput = document.getElementById('cc-number');

ccNumberInput.addEventListener('input', function (event) {
  const input = event.target;
  const sanitizedValue = input.value.replace(/\D/g, ''); // Remover todos os caracteres não numéricos
  const formattedValue = sanitizedValue.replace(/(\d{4})(?=\d)/g, '$1 '); // Adicionar espaço a cada 4 dígitos

  input.value = formattedValue;
});

const cepInput = document.getElementById('zip');

cepInput.addEventListener('input', function (event) {
  const input = event.target;
  const sanitizedValue = input.value.replace(/\D/g, ''); // Remover todos os caracteres não numéricos
  const formattedValue = sanitizedValue.slice(0, 8); // Limitar o valor a no máximo 8 dígitos
  const formattedWithHyphen = formattedValue.replace(/(\d{5})(\d)/, '$1-$2'); // Adicionar o hífen após os primeiros 5 dígitos

  input.value = formattedWithHyphen;
});

const cvvInput = document.getElementById('cc-cvv');

cvvInput.addEventListener('input', function (event) {
  const input = event.target;
  const sanitizedValue = input.value.replace(/\D/g, ''); // Remover todos os caracteres não numéricos
  const formattedValue = sanitizedValue.slice(0, 3); // Limitar o valor a no máximo 3 dígitos

  input.value = formattedValue;
});