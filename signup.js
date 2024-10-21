document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.querySelector('#signup-form');

    signupForm.addEventListener('submit', function(event) {
        const nameField = document.querySelector('#name');
        const emailField = document.querySelector('#email');
        const passwordField = document.querySelector('#password');
        
        let isValid = true;

        // Name 
        if (nameField.value === '') {
            alert('Please enter your full name.');
            isValid = false;
        }

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
