// ----------------------- Constructors -------------------------
function Cell() { //One field constructor
    this.htmlObj = document.createElement("div");
    this.allive = false;

    var actualCell = this;
    this.changeState = function () {
        if (actualCell.allive == false) {
            actualCell.makeAllive();
        } else {
            actualCell.makeDead();
        }
    }
}

Cell.prototype.makeAllive = function () {
    this.allive = true;
    this.htmlObj.style.backgroundColor = "black";
}

Cell.prototype.makeDead = function () {
    this.allive = false;
    this.htmlObj.style.backgroundColor = "white";
}


function Game() {
    this.board = document.getElementById("board"); //Generate map with right size
    this.allCells = [];
    this.nextStepTable = [];

    this.drawEmptyBoard = function () { //function drawing the board
        this.numberOfElX = parseInt(document.getElementById("x_size").value);
        this.numberOfElY = parseInt(document.getElementById("y_size").value);
        this.board.style.width = this.numberOfElX * 5 + "px";
        this.board.style.height = this.numberOfElY * 5 + "px";
        this.board.innerHTML = "";

        for (var i = 0; i < this.numberOfElX; i++) {
            var arrTemp = [];
            for (var j = 0; j < this.numberOfElY; j++) {

                var newCell = new Cell();
                arrTemp.push(newCell);
                this.board.appendChild(newCell.htmlObj);
                newCell.htmlObj.addEventListener('click', newCell.changeState);
            }
            this.allCells.push(arrTemp);
        }
        startButton.disabled = false;
    }

    this.letsPlay = function () {
        drawTableButton.disabled = true;
        pauseButton.disabled = false;
        startButton.disabled = true;
        var self = this;
        this.id = setInterval(function () {
            self.makeEvolution()
        }, 300);
    }
    this.makeEvolution = function () {
        this.nextStepTable = [];
        for (var i = 0; i < this.allCells.length; i++) {
            var tempArr = [];
            for (var j = 0; j < this.allCells[i].length; j++) {
                var neighbours = 0;
                var isAllive = 0;

                if (i == 0 && j == 0) {  //Conditions which allows to move through borders (left-right, top-bottom)
                    if (this.allCells[i][j + 1].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i + 1][j].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i + 1][j + 1].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i][this.numberOfElX - 1].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i + 1][this.numberOfElX - 1].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i + this.numberOfElY - 1][j].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i + this.numberOfElY - 1][j + 1].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[this.numberOfElY - 1][this.numberOfElX - 1].allive == true) {
                        neighbours++;
                    }
                } else if (i == 0 && j > 0 && j < this.numberOfElX - 1) {
                    if (this.allCells[i][j - 1].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i][j + 1].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i + 1][j - 1].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i + 1][j].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i + 1][j + 1].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[this.numberOfElY - 1][j - 1].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[this.numberOfElY - 1][j].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[this.numberOfElY - 1][j + 1].allive == true) {
                        neighbours++;
                    }
                } else if (i == 0 && j == this.numberOfElY - 1) {
                    if (this.allCells[i][j - 1].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i + 1][j - 1].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i + 1][j].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[0][0].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[1][0].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[this.numberOfElY - 1][this.numberOfElX - 1].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[this.numberOfElY - 1][this.numberOfElX - 2].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[this.numberOfElY - 1][0].allive == true) {
                        neighbours++;
                    }
                } else if (i > 0 && i < this.numberOfElY - 1 && j == this.numberOfElX - 1) {
                    if (this.allCells[i - 1][j].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i - 1][j - 1].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i][j - 1].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i + 1][j - 1].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i + 1][j].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i - 1][0].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i][0].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i + 1][0].allive == true) {
                        neighbours++;
                    }
                } else if (i == this.numberOfElY - 1 && j == this.numberOfElX - 1) {
                    if (this.allCells[i - 1][j].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i - 1][j - 1].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i][j - 1].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i - 1][0].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i][0].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[0][j - 1].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[0][j].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[0][0].allive == true) {
                        neighbours++;
                    }
                } else if (i == this.numberOfElY - 1 && j > 0 && j < this.numberOfElX - 1) {
                    if (this.allCells[i - 1][j - 1].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i - 1][j].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i - 1][j + 1].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i][j - 1].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i][j + 1].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[0][j - 1].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[0][j].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[0][j + 1].allive == true) {
                        neighbours++;
                    }
                } else if (i == this.numberOfElY - 1 && j == 0) {
                    if (this.allCells[0][0].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[0][1].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[0][this.numberOfElX - 1].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i - 1][j].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i - 1][j + 1].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i][j + 1].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i - 1][this.numberOfElX - 1].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i][this.numberOfElX - 1].allive == true) {
                        neighbours++;
                    }
                } else if (i > 0 && i < this.numberOfElY - 1 && j == 0) {
                    if (this.allCells[i - 1][j].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i - 1][j + 1].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i][j + 1].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i + 1][j + 1].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i + 1][j].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i - 1][this.numberOfElX - 1].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i][this.numberOfElX - 1].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i + 1][this.numberOfElX - 1].allive == true) {
                        neighbours++;
                    }
                } else {
                    if (this.allCells[i - 1][j - 1].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i - 1][j].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i - 1][j + 1].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i][j - 1].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i][j + 1].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i + 1][j - 1].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i + 1][j].allive == true) {
                        neighbours++;
                    }
                    if (this.allCells[i + 1][j + 1].allive == true) {
                        neighbours++;
                    }
                }

                //Checking if cell remains allive or dead
                if (this.allCells[i][j].allive == true) {
                    if (neighbours > 1 && neighbours < 4) {
                        isAllive = 1;
                    }
                } else {
                    if (neighbours == 3) {
                        isAllive = 1;
                    }
                }
                tempArr.push(isAllive);
            }
            this.nextStepTable.push(tempArr);
        }
        this.drawTable();
    }

    this.drawTable = function () {
        for (var i = 0; i < this.nextStepTable.length; i++) {
            for (var j = 0; j < this.nextStepTable[i].length; j++) {
                if (this.nextStepTable[i][j] == 1) {
                    this.allCells[i][j].makeAllive();
                } else {
                    this.allCells[i][j].makeDead();
                }
            }
        }
    }

    this.stopSimulation = function () {
        clearInterval(this.id);
        pauseButton.disabled = true;
        startButton.disabled = false;
    }
}

// ----------------------- Variables -------------------------
var playGame = new Game();
var drawTableButton = document.getElementById("draw_table");
var startButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");

// ----------------------- Events -------------------------
drawTableButton.addEventListener("click", function (event) {
    event.preventDefault();
    playGame.drawEmptyBoard();
});

startButton.addEventListener("click", function () {
    playGame.letsPlay();
});

pauseButton.addEventListener("click", function () {
    playGame.stopSimulation();
});