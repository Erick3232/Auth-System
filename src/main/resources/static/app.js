function submitForm() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const document = document.getElementById('document').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const role = document.querySelector('input[name="type"]:checked').id === 'personTypeCPF' ? 'CPF' : 'CNPJ';
  
    // Verifique se os campos de senha sao iguais
    if (password !== confirmPassword) {
      alert('Password and Confirm Password do not match');
      return;
    }
  
    const data = {
      login: fullName,
      email: email,
      document: document,
      password: password,
      role: role
    };
  
    // Enviar dados para o backend
    fetch('/auth/process', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Registration failed');
      }
      return response.json();
    })
    .then(data => {
      alert('Registration successful');
       // Redirecionar para a página de login após o registro bem-sucedido
      window.location.href = '/auth/login';
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Registration failed');
    });
  }