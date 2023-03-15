function processAnswer(answer){
    let result = "";
    if (answer){
        result = "Ok let's go";
    } else {
        result = "Fine!";
    }
    return result;
} 

let confirmAnswer = confirm("Shall we go?");
let theAnswer = processAnswer(confirmAnswer);
alert(theAnswer);