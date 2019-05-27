
let gamePlace = document.getElementById('gamePlace');
let turn = 0;

gamePlace.onclick = e => {
    console.log(e);
    if (e.target.className == 'box') {
        if (turn % 2 === 0) {
            e.target.innerHTML = 'O';
        } else {
            e.target.innerHTML = 'X';
        }
        turn++;
    }
}