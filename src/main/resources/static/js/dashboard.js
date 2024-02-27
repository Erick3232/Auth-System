function getUserDetailsFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  if (id) {
    getUserDetails(id);
  } else {
    console.error('ID não encontrado na URL');
  }
}

function getUserDetails(id) {
  fetch('/auth/getUserDetails/' + id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(response => {
    if(response.ok){
      return response.json();
    } else {
      alert('Erro ao obter detalhes do usuário');
    }
  })
  .then(jsonObject => {
    const name = jsonObject.login;
    const balance = jsonObject.balance;
    alert(name);
    alert(balance);
    
    // Atualize os elementos na sua página HTML com os dados obtidos
    document.getElementById('loginName').textContent = name;
    document.getElementById('user-balance').textContent = balance;
  });
}

// Chama a função para obter os detalhes do usuário da URL
getUserDetailsFromURL();

