// Обьявим все нужные переменные
let gamePlace = document.getElementById('gamePlace');
let turn = 0;
let turnWho = document.getElementById('turnWho');
let box = document.getElementsByClassName('box');
let result = document.getElementById('result');
// Обьявим массив победных комбинаций
let winningArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
];
// Функция, при клике добавляется либо Х, либо О, в зависимости от хода
gamePlace.onclick = e => {
    if (e.target.className === 'box') {
        if (turn % 2 === 0) {
            console.log(e.target);
            e.target.innerHTML = 'X';
            turnWho.innerHTML = 'Ход ноликов (O)';
            e.target.className = 'box clicked';
        } else {
            e.target.innerHTML = 'O';
            turnWho.innerHTML = 'Ход крестиков (Х)';
            e.target.className = 'box clicked';
        }
        turn++;
        checkWinner();
    }
};


//Проверка игровых клеток и сравнение их с winningArray
checkWinner = () => {
    for (let i = 0; i<winningArray.length; i++){
        if (box[winningArray[i][0]].innerHTML === 'X' && box[winningArray[i][1]].innerHTML === 'X' && box[winningArray[i][2]].innerHTML === 'X') {
            result.innerHTML += 'Победили крестики!';
            turnWho.style.display = 'none';
            console.log('Победили крестики')
        } else if (box[winningArray[i][0]].innerHTML === 'O' && box[winningArray[i][1]].innerHTML === 'O' && box[winningArray[i][2]].innerHTML === 'O') {
            result.innerHTML += 'Победили нолики!';
            turnWho.style.display = 'none';
            console.log('Победили нолики')
        } else if(gamePlace.length === 9)  {
            console.log('Ничья');
        }
    }
};