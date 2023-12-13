document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const username = document.getElementById('utilisateur');
    const email = document.getElementById('email');
    const password = document.getElementById('mdp');
    const confirmPassword = document.getElementById('mdpconf');

    const usernameRegex = /^[a-zA-Z_-][a-zA-Z0-9_-]{3,23}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    form.addEventListener('input', function(event) {
        let valid = true;

        if (!usernameRegex.test(username.value)) {
            displayError(username, 'Choisissez un pseudo entre 3 et 24 caractères');
            valid = false;
        }

        if (!emailRegex.test(email.value)) {
            displayError(email, 'Rentrez un email valide');
            valid = false;
        }

        if (!passwordRegex.test(password.value)) {
            displayError(password, 'Un symbole, une lettre minuscule, un chiffre. Au moins 8 caractères');
            valid = false;
        }

        if (password.value !== confirmPassword.value) {
            displayError(confirmPassword, 'Les mots de passe ne correspondent pas');
            valid = false;
        }

        if (!valid) {
            event.preventDefault(); // Empêche l'envoi du formulaire si des erreurs sont présentes
        }
    });

    function displayError(input, message) {
        const parent = input.parentElement;
        const error = parent.querySelector('.message-alerte');

        error.textContent = message;
        error.style.display = 'block';
    }

});
