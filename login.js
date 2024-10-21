document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('#login-form');

    loginForm.addEventListener('submit', function(event) {
        const emailField = document.querySelector('#email');
        const passwordField = document.querySelector('#password');
        
        let isValid = true;

        // Email 
        if (emailField.value === '') {
            alert('Please enter your email.');
            isValid = false;
        }

        // Password 
        if (passwordField.value === '') {
            alert('Please enter your password.');
            isValid = false;
        }

        // No submission if validation fails
        if (!isValid) {
            event.preventDefault();
        }
    });
});
