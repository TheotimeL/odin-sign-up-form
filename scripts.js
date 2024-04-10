
password1 = document.getElementById('password');
password2 = document.getElementById('confirmpassword');

// Handlers when password is modified
password1.onchange = validatePassword;
password2.onchange = validatePassword;

function validatePassword(){
    if(password1.value != password2.value) {
        password2.setCustomValidity('Passwords do not match.');
        password2.reportValidity();
    } else {
        password2.setCustomValidity('');
        password2.reportValidity();
    }
    }

