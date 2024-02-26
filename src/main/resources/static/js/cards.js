function addCard(){
    const titleInput = document.getElementById('title').value;
    const numberInput = document.getElementById('number').value;
    const validateInput = document.getElementById("date").value;
    const cvvInput = document.getElementById("cvv").value;

    const data = {
        title: titleInput,
        number: numberInput,
        date: validateInput,
        cvv: cvvInput
    };
    fetch('/cards/processCard', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => {
        if(response.status === 201){
            alert('Card registered!');
            window.location.reload();
        } else {
            alert('Failed on register your card!');
        }
    });
}
function toUpperCase(input){
    input.value = input.value.toUpperCase();
}
function validateCard(value){
    var value = value.replace(/\D/g, '');
    var formatValid = value.replace(/^(\d{2})(\d{2})$/, '$1/$2');
    return formatValid;
}
function formatCardNumber(input) {
    var formattedValue = validateCard(input.value);
    input.value = formattedValue;
}
function numberTypeCard(value){    
    var numericValue = value.replace(/\D/g, '');
    var formattedValue = numericValue.replace(/(\d{4}(?=\d))/g, '$1 ');
    return formattedValue;
}
document.getElementById('number').addEventListener('input',function(event){
    var value = event.target.value;
    var valueFormat = numberTypeCard(value);
    event.target.value = valueFormat;
})

