function submitForm() {
  
  const fullNameInput = document.getElementById('fullName').value;
  const emailInput = document.getElementById('email').value;
  const documentInput = document.getElementById('document').value;
  const passwordInput = document.getElementById('password').value;
  const confirmPasswordInput = document.getElementById('confirmPassword').value;
  const roleInput = document.querySelector('input[name="type"]:checked').id === 'personTypeCPF' ? 'CPF' : 'CNPJ';

  if (passwordInput !== confirmPasswordInput) {
    alert('Password and Confirm Password do not match');
    return;
  }
  if(!validateEmail(emailInput)){
    alert("Insira um email válido!");
    return false;
  }
  const data = {
    login: fullNameInput,
    email: emailInput,
    document: documentInput,
    password: passwordInput,
    role: roleInput
  };

  fetch('/auth/process', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  
  .then(response => {
    if (response.status === 201) {
      alert('Usuário cadastrado');
      window.location.href = '/auth/login';
    } else {
      alert('CPF/CNPJ already exist');
      window.location.reload();
    }
  });
}

window.onload = function() {
  var documentInput = document.getElementById('document');

  documentInput.addEventListener('input', function() {
    var value = documentInput.value.replace(/\D/g, '');
    var roleInput = document.querySelector('input[name="type"]:checked').id;
    var formattedValue;

    if (roleInput === 'personTypeCPF') {
      formattedValue = formatCPF(value);
    } else if (roleInput === 'personTypeCNPJ') {
      formattedValue = formatCNPJ(value); 
    }

    documentInput.value = formattedValue;
  });
  function formatCPF(value) {
    var formattedValue = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
    return formattedValue;
  }
  function formatCNPJ(value) {
    var formattedValue = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
    return formattedValue;
  }
};

function personTypeChange(type) {
  var documentInput = document.getElementById('document');

  if (type === 'CPF') {
    documentInput.setAttribute('pattern', '\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}');
    documentInput.setAttribute('maxlength', '14');
  } else if (type === 'CNPJ') {
    documentInput.setAttribute('pattern', '\\d{2}\\.\\d{3}\\.\\d{3}/\\d{4}-\\d{2}');
    documentInput.setAttribute('maxlength', '18');
  } else {
    documentInput.removeAttribute('pattern');
    documentInput.removeAttribute('maxlength');
  }
}
function validateEmail(inputEmail){
  var re = /\S+@\S+\.\S+/;
  return re.test(inputEmail);
}
