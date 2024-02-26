function addCard(){
    const title = document.getElementById("titleCard").value;
    const number = document.getElementById("numberCard").value;
    const validate = document.getElementById("validateCard").value;
    const cvv = document.getElementById("cvvCard").value;

    const data = {
        title: title,
        number: number,
        validate: validate,
        cvv: cvv
    }

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
document.getElementById('numberCard').addEventListener('input',function(event){
    var value = event.target.value;
    var valueFormat = numberTypeCard(value);
    event.target.value = valueFormat;
})

