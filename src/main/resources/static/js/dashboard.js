
function submitForm(){
    const login = document.getElementById('login').value;
    const loginName = document.getElementById('loginName').value;
    const password = document.getElementById('loginPassword').value;
  
    const data = {
      login: login,
      password: password,
      loginName: "erick"
    };
    
    const getName = document.getElementById('login-name');
    getName.addEventListener("DOMContentLoaded", () => {
      document.getElementById("loginName").value = data.loginName;
    })
    fetch('/auth/processLogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        
      }
    })
    .then(data => {
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
            return response.text(); 
        })
        .then(id => {
            window.location.href = '/wallet/dashboard#' + id;
        });
    });
}
