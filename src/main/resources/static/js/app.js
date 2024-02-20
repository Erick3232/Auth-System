function submitForm() {
  const fullNameInput = document.getElementById('fullName').value;
  const emailInput = document.getElementById('email').value;
  const documentInput = document.getElementById('document').value;
  const passwordInput = document.getElementById('password').value;
  const confirmPasswordInput = document.getElementById('confirmPassword').value;
  const roleInput = document.querySelector('input[name="type"]:checked').id === 'personTypeCPF' ? 'CPF' : 'CNPJ';

  // Verifique se os campos de senha coincidem
  if (passwordInput !== confirmPasswordInput) {
    alert('Password and Confirm Password do not match');
    return;
  }

  const data = {
    login: fullNameInput,
    email: emailInput,
    document: documentInput,
    password: passwordInput,
    role: roleInput
  };


  // Enviar dados para o backend
  fetch('/auth/process', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(data => {
      // Redirecionar para a página de login após o registro bem-sucedido
      alert('USUARIO CRIADO');
      window.location.href = '/auth/login';
    })
    .catch(error => {
      console.error('Error during registration:', error);
      alert('Registration failed');
    });
}
