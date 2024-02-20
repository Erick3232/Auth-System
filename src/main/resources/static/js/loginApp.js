function Login(){
    const login = document.getElementById('login')
    const loginPasword = document.getElementById('loginPassword')
  
    fetch('/auth/process-Login', {
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
      return response.json();
    })
    .then(data => {
      alert('Login successful');
      window.location.href = '/wallet';
    })
  }