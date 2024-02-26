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
      // Após o login bem-sucedido, chame a função getId para obter o ID do usuário e redirecionar para a página de dashboard
      getId(data.login);
    } else {
      alert('Login failed. Please check your credentials and try again.');
    }
  });
}

function getId(login) {
  fetch('/auth/getId/' + login, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(response => {
    if(response.ok){
      return response.json();
      } else {
        alert('error')
      }
    })
  .then(jsonObject => {
    const id = jsonObject.id;
    alert(id);
    console.log(id);
    // Redirecionar o usuário para a página de dashboard com o ID como parâmetro na URL
    window.location.href = '/wallet/dashboard?id=' + encodeURIComponent(id);
  });
}
