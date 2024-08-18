function generateVerificationCode() {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
}


function displayVerificationCode() {
    const verificationDisplay = document.getElementById('verificationDisplay');
    verificationDisplay.textContent = generateVerificationCode();
}

window.onload = displayVerificationCode;


