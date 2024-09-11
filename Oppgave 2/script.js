const password = document.getElementById('password')
const start = document.getElementById('start')
const answer = document.getElementById('answer')


start.onclick = () => {
let sign;
let attempts = 0;

sign = prompt("What is the password to your acount");

    while (sign !== password.value && attempts < 3) {
        attempts++;

        if (attempts === 3) {
            alert('Acount locked. Too many attepts.');
            return;
        }

        alert('Not correct')
        sign = prompt("What is the password to your acount");
        
    }
    
        alert('Password correct')
        answer.innerHTML = 'Welcome'
};