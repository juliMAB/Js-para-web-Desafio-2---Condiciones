// Lógica para el problema 3: password con selects
const resultPassword = document.getElementById('password-result');

function OnClickValidate() {
    const d1 = document.getElementById('digit1').value;
    const d2 = document.getElementById('digit2').value;
    const d3 = document.getElementById('digit3').value;
    const password = d1 + d2 + d3;
    if (password === '911') {
        resultPassword.textContent = 'password 1 correcto';
    } else if (password === '714') {
        resultPassword.textContent = 'password 2 es correcto';
    } else {
        resultPassword.textContent = 'password incorrecto';
    }
}