const correctPassword = 'azizkot';

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    
    if (passwordInput.value === correctPassword) {
        
        window.location.href = 'welcome.html'; 
    } else {
        errorMessage.textContent = 'Неверный пароль. Попробуйте снова.';
    }

    passwordInput.value = '';
});