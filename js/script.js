// Обьявим все нужные переменные
let gamePlace = document.getElementById('gamePlace');
let turn = 0;
let turnWho = document.getElementById('turnWho');
let box = document.getElementsByClassName('box');
let result = document.getElementById('result');
let restart = document.getElementById('restart');
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
            e.target.innerHTML = 'X';
            turnWho.innerHTML = 'Ход ноликов (O)';
            e.target.className = 'box clicked';
            console.log(document.all);
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
    for (let i = 0; i<winningArray.length; i++) {
        if (box[winningArray[i][0]].innerHTML === 'X' && box[winningArray[i][1]].innerHTML === 'X' && box[winningArray[i][2]].innerHTML === 'X') {
            result.innerHTML += 'Победили крестики!';
            endGame();
        } else if (box[winningArray[i][0]].innerHTML === 'O' && box[winningArray[i][1]].innerHTML === 'O' && box[winningArray[i][2]].innerHTML === 'O') {
            result.innerHTML += 'Победили нолики!';
           endGame();
        } else {
            noWin();
        }
    }
};
// UI
fadeOut = () => {
    gamePlace.style.opacity = '0';
};
gameDisabled = () => {
    gamePlace.style.display = 'none';
};
endGame = () => {
    turnWho.style.display = 'none';
    setTimeout(fadeOut, 2000);
    setTimeout(gameDisabled, 3000);
    restart.style.display = 'block';

};

// Если ничья, игра предложит начать заново
noWin = () => {
    if (document.all[13].className === 'box clicked' && document.all[14].className === 'box clicked' && document.all[15].className === 'box clicked' && document.all[16].className === 'box clicked' && document.all[17].className === 'box clicked' && document.all[18].className === 'box clicked' && document.all[19].className === 'box clicked' && document.all[20].className === 'box clicked' && document.all[21].className === 'box clicked') {
        restart.style.display = 'block';
        turnWho.style.display = 'none';
    }
};
