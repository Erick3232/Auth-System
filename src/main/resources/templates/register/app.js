document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const personType = document.getElementById('gender').value;
    const document = document.getElementById('username').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Perform validation and further processing here
    console.log({
        fullName,
        email,
        password,
        gender,
        username,
        phoneNumber,
        confirmPassword
    });
});