//Данные игры
let game = {
    isClicked: false,
    gamerX: "X",
    gamerO: "O",
    cross: [],
    round: [],
    winningArray: [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[2,5,8],[3,6,9],[1,5,9],[7,5,3]]
};

//
const takeTheInput = data => {
    if(!game.isClicked){
        data.innerHTML = game.gamerX;
        getData(data, game.cross, game.gamerX);
        game.isClicked = !game.isClicked
    }else if(game.isClicked){
        data.innerHTML = game.gamerO;
        getData(data, game.round, game.gamerO);
        game.isClicked = !game.isClicked
    }
};

const getData = (data, whichGame, player) => {
    let box = getData.getAttribute('data-box');

    if(!game.isClicked){
        game.cross.push(box)
    }else if(game.isClicked){
        game.round.push(box)
    }
    data.removeAttribute('onclick');
    checkMoves(whichGame, player)
};

const checkMoves = (arr, player) => {
    let compare = arr.map(v => parseInt(v, 10)).sort();
    for(let i = 0; i < game.winningArray.length; i++){
        if(
            compare.includes()
        ){

        }
    }
}