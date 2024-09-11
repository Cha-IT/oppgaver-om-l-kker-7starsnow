const btnEven = document.getElementById('even')
const btnOdd = document.getElementById('odd')
const div = document.getElementById('answer')

btnEven.onclick = () => {
    let number = 0;
    div.innerHTML = ''

    while (number < 100) {
        number += 2;
        div.innerHTML += number + '<br>';
    }
}

btnOdd.onclick = () => {
    let number = 0;
    div.innerHTML = ''

    while (number < 100) {
        number++;
        div.innerHTML += number + '<br>';
    }
}