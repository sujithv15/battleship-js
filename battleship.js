

let count_col = 0;
const attackRows = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
let attackRowsIndex = 0;
document.getElementById("new-game-btn").onclick = function () {
    setupShips(3)
    console.log(board);

}
document.getElementById("increaseButton1").onclick = function () {
    if (attackRowsIndex !== 6) {
        attackRowsIndex+=1;
    }

    document.getElementById("button-1-label").innerHTML = attackRows[attackRowsIndex];
}
document.getElementById("decreaseButton1").onclick = function () {
    if (attackRowsIndex !== 0) {
        attackRowsIndex -= 1;
    }
    document.getElementById("button-1-label").innerHTML = attackRows[attackRowsIndex];
}
document.getElementById("increaseButton2").onclick = function () {
    if (count_col !== 6) {
        count_col += 1;
    }
    document.getElementById("button-2-label").innerHTML = count_col;
}
document.getElementById("decreaseButton2").onclick = function () {
    if (count_col !== 0) {
        count_col -= 1;
    }
    document.getElementById("button-2-label").innerHTML = count_col;
}
document.getElementById("fire-btn").onclick = function () {

    attack(attackRowsIndex, count_col);
}


let board = [[], [], [], [], [], [], []];
for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
        board[i][j] = 0;
    }
}

function attack(row, col) {
    let strConv = row.toString() + col.toString();

    console.log(strConv)
    console.log(board[row][col])
    if (board[row][col] === 1) {
       /* let squareAttacked = document.getElementById(strConv);
        let hitImage = document.createElement('hit-img');
        hitImage.src = "/images/stock-photo-military-ship-d-wireframe-with-thin-blue-lines-navy-futuristic-hologram-on-black-background-d-1839358582.jpg";
        squareAttacked.append(hitImage);*/
        document.getElementById(strConv).classList.add('hit')

    }
    else {/*
        let squareAttacked = document.getElementById(strConv);
        let missImage = document.createElement('miss-img');
        missImage.src = "/images/word-miss-bubble-sign-background-62935012.jpg";
        squareAttacked.append(missImage);*/
        document.getElementById(strConv).classList.add('miss')
    }
}

function setupShips(numShips) {
    for (let i = 0; i < numShips; i++) {

        let ship = {
            'row': 0,
            'col': 0,
            'orientation': 0,
            'size': 0
        }

        ship.row = Math.floor(Math.random() * 7);
        ship.col = Math.floor(Math.random() * 7);
        ship.orientation = Math.floor(Math.random() * 2)
        ship.size = Math.floor(Math.random() * (6 - 3) + 3)

        // if ship is vertical
        if (ship.orientation === 0) {
            let currSize = 0
            let currRow = ship.row;
            while (currSize < ship.size && currRow <= 6) {
                board [currRow][ship.col] = 1;
                currRow++;
                currSize++;
            }
            // in case ship length goes outside board
            if (currSize < ship.size) {
                currRow = ship.row - 1;
                while (currSize < ship.size) {
                    board[currRow][ship.col] = 1;
                    currRow--;
                    currSize++;
                }
            }
        }

        // same as previous but ship is horizontal
        if (ship.orientation === 1) {
            let currSize = 0
            let currCol = ship.col;
            while (currSize < ship.size && currCol <= 6) {
                board [ship.row][currCol] = 1;
                currCol++;
                currSize++;
            }
            if (currSize < ship.size) {
                currCol = ship.col - 1;
                while (currSize < ship.size) {
                    board[ship.row][currCol] = 1;
                    currCol--;
                    currSize++;
                }
            }
        }
    }
}