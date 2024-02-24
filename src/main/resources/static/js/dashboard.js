
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
        return response.json(); // Processar a resposta JSON
      } else {
        
      }
    })
    .then(data => {
        // Chamar a segunda requisição para obter o ID
         fetch('/auth/gerId', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao obter ID');
            }
            return response.text(); // Retorna o ID como texto
        })
        .then(id => {
            // Redirecionar para a página de dashboard com o ID anexado à URL
            window.location.href = '/wallet/dashboard#' + id;
        });
    });
}

if(!localStorage.getItem('isLogged')){
    window.location.href = '/auth/login';
}

