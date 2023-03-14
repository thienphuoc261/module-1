let b = document.getElementById("carogame");
let board = [];
let output = "";
for (let i = 0; i < 10; i++){
    board[i] = new Array(0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0);
}


for (let i = 1; i < 10; i++){
    output += "</br>"
    for (let j = 0; j < 10; j++){
        output += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
    }
}
b.innerHTML = output;

function changeValue (){
    let x = parseInt(document.getElementById("x").value);
    let y = parseInt(document.getElementById("y").value);
    output = "";
    board[x][y] = "x";
    for (let i = 0; i < 10; i++){
        output += "<br>"
        for (let j = 0; j < 10; j++){
            output += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;"
        }
    }
    b.innerHTML = output;
}
