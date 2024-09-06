const whileLoop = document.getElementById('while')
const forLoop = document.getElementById('for')
const answer = document.getElementById('answer')



whileLoop.onclick = () => {
    answer.innerHTML = '';

    let number = 1;
    while (number <= 10) {
        answer.innerHTML += number + '<br>';
        number += 1;
    }
}

    forLoop.onclick = () => {
    answer.innerHTML = '';

        for (let number = 1; number <= 10; number++) {
            answer.innerHTML += number + '<br>';
        }
}