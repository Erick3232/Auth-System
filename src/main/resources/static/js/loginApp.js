function submitForm() {
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
        fetch('/auth/getId', {  // Use return para passar o resultado para o próximo then
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data.login)
        })
          .then(idResponse => {
            // Redirecionar para a página de dashboard com o ID anexado à URL
           
            const id = idResponse.body();
            window.location.href = '/wallet/dashboard/' + id;
          })
      } else {
        alert('Login failed. Please check your credentials and try again.');
      }
    });
<<<<<<< HEAD
}
=======
  }
  function login(){
    localStorage.setItem('isLogged', 'true');
    window.location.href = '/wallet/dashboard'
  }
>>>>>>> 695bcd3e6ed49c7daea9a01b35d5bc018db2956f
