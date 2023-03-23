let b = document.getElementById("carogame");
let output = "";
let board = [];
var h = 1;

for (let i = 0; i < 5; i++) {
    board[i] = new Array("(.)", "(.)", "(.)", "(.)", "(.)");
}

for (let i = 0; i < 5; i++) {
    output += "<br>";
    for (let j = 0; j < 5; j++) {
        output += board[i][j] + "&ensp;";
    }
}
b.innerHTML = output;

function changeValue() {
    output = "";
    let x = parseInt(prompt("Nhập x: "));
    let y = parseInt(prompt("Nhập y: "));

    if (h % 2 == 0) {
        board[x][y] = "x";
    } else {
        board[x][y] = "o";
    }
    h++;
    for (let i = 0; i < 5; i++) {
        output += "<br>";
        for (let j = 0; j < 5; j++) {
            output += board[i][j] + "&ensp;" +"&ensp;" +"&ensp;";
        }
    }
    b.innerHTML = output;

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if ((board[i][j] === "x" && board[i][j + 1] === "x" && board[i][j + 2] === "x") ||
                (board[i][j] === "x" && board[i + 1][j] === "x" && board[i + 2][j] === "x")) {
                alert("X win");
            } else if ((board[i][j] === "o" && board[i][j + 1] === "o" && board[i][j + 2] === "o") ||
                (board[i][j] === "o" && board[i + 1][j] === "o" && board[i + 2][j] === "o")) {
                alert("O win");
            }
        }
    }
}