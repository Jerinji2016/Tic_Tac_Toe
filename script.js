var player = 1;
var winner = 0;
var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];

const PLAYER_1 = "X", PLAYER_2 = "O";
const PLAYER_1_COLOR = "rgb(253, 10, 10)";  //  red
const PLAYER_2_COLOR = "rgb(6, 175, 6)";    //  green

window.onload = function () {
    setEnv(document.getElementById('1'));
}

var count = 0;
function playerMark(event) {
    var n = parseInt(event.id);

    if (arr[n - 1] > 0 ? false : true) {
        if (player == 2) {
            event.style.color = "green";
            event.innerHTML = PLAYER_1;
            player--;
            setEnv(event);
        }
        else {
            event.style.color = "red";
            event.innerHTML = PLAYER_2;
            player++;
            setEnv(event);
        }
        arr[n - 1] = player;
        count++;
        evaluate();
    }

    console.log(arr);
}

function setEnv(event) {
    if (player == 1) {
        event.parentNode.parentNode.style.borderColor = PLAYER_1_COLOR;
        event.parentNode.parentNode.style.boxShadow = "0px 0px 10px " + PLAYER_1_COLOR;
    } else {
        event.parentNode.parentNode.style.borderColor = PLAYER_2_COLOR;
        event.parentNode.parentNode.style.boxShadow = "0px 0px 10px " + PLAYER_2_COLOR;
    }
}

function clear() {
    console.log("clearing");
    for (let i = 0; i < 9; i++) {
        document.getElementById(i + 1).innerHTML = "";
        arr[i] = 0;
        count = 0;
    }
}

function evaluate() {
    var w;
    console.log("Count: ", count);
    if (arr[0] == arr[1] && arr[1] == arr[2] && arr[0] > 0 && arr[1] > 0 && arr[2] > 0)
        w = arr[0];
    if (arr[3] == arr[4] && arr[4] == arr[5] && arr[3] > 0 && arr[4] > 0 && arr[5] > 0)
        w = arr[3];
    if (arr[6] == arr[7] && arr[7] == arr[8] && arr[6] > 0 && arr[7] > 0 && arr[8] > 0)
        w = arr[6];
    if (arr[0] == arr[3] && arr[3] == arr[6] && arr[0] > 0 && arr[3] > 0 && arr[6] > 0)
        w = arr[0];
    if (arr[1] == arr[4] && arr[4] == arr[7] && arr[1] > 0 && arr[4] > 0 && arr[7] > 0)
        w = arr[1];
    if (arr[2] == arr[5] && arr[5] == arr[8] && arr[2] > 0 && arr[5] > 0 && arr[8] > 0)
        w = arr[2];
    if (arr[0] == arr[4] && arr[4] == arr[8] && arr[0] > 0 && arr[4] > 0 && arr[8] > 0)
        w = arr[0];
    if (arr[2] == arr[4] && arr[4] == arr[6] && arr[2] > 0 && arr[4] > 0 && arr[6] > 0)
        w = arr[2];

    if (w > 0) {
        if (w == 1)
            document.getElementById('p1-score').innerHTML = parseInt(document.getElementById('p1-score').innerHTML) + 1;
        else
            document.getElementById('p2-score').innerHTML = parseInt(document.getElementById('p2-score').innerHTML) + 1;

        alert("Player " + ((w == 1) ? "X" : "O" )+ " Wins");
        clear();
    } else if (count == 9) {
        alert("BOTH PLAYERS PLAYED WELL.. ITS A DRAW");
        clear();
    }
}