function login(){
  const login = document.getElementById('login').value;
  const loginPassword = document.getElementById('loginPassword').value;

  const data = {
      login: login,
      password: loginPassword
  };

  fetch('/auth/processLogin', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Login failed');
      }
      alert('Login successful');
      window.location.href = 'https://localhost:8080/wallet';
  })
  .catch(error => {
      console.error('Error during login:', error);
      alert('Login failed');
  });
}
