function submitForm(){
    const login = document.getElementById('login').value;
    const password = document.getElementById('loginPassword').value;
  
    const data = {
      login: login,
      password: password
    };
  
    fetch('/auth/processLogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.ok) {
        alert('Login successful');
        window.location.href = '/wallet/dashboard'; // Redirecionar para a página de dashboard após o login bem-sucedido
      } else {
        alert('Login failed. Please check your credentials and try again.');
      }
    });
  }