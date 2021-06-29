console.log("Tic Tac Toe");

// Grab all the fields
let winnerDisplay = document.getElementById('winnerDisplay');
let resetBtn = document.getElementById('resetBtn');
let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let b5 = document.getElementById('b5');
let b6 = document.getElementById('b6');
let b7 = document.getElementById('b7');
let b8 = document.getElementById('b8');
let b9 = document.getElementById('b9');
let b = document.getElementsByClassName('b');

let turn = 1;

// Functions to fill the boxes according to your turn
// X on first turn and 0 on second turn
// And make the filled box disabled
function checkTurn1(){
    // let turn = 1;
    if( turn==1 ){
        b1.value = "X";
        b1.disabled = true;
        turn=0;
    }
    else{
        b1.value = "0";
        b1.disabled = true;
        turn=1;
    }
}

function checkTurn2(){
    // let turn = 1
    if( turn==1 ){
        b2.value = "X";
        b2.disabled = true;
        turn=0;
    }
    else{
        b2.value = "0";
        b2.disabled = true;
        turn=1;
    }
}

function checkTurn3(){
    // let turn = 1;
    if( turn==1 ){
        b3.value = "X";
        b3.disabled = true;
        turn=0;
    }
    else{
        b3.value = "0";
        b3.disabled = true;
        turn=1;
    }
}

function checkTurn4(){
    // let turn = 1;
    if( turn==1 ){
        b4.value = "X";
        b4.disabled = true;
        turn=0;
    }
    else{
        b4.value = "0";
        b4.disabled = true;
        turn=1;
    }
}

function checkTurn5(){
    // let turn = 1;
    if( turn==1 ){
        b5.value = "X";
        b5.disabled = true;
        turn=0;
    }
    else{
        b5.value = "0";
        b5.disabled = true;
        turn=1;
    }
}

function checkTurn6(){
    // let turn = 1;
    if( turn==1 ){
        b6.value = "X";
        b6.disabled = true;
        turn=0;
    }
    else{
        b6.value = "0";
        b6.disabled = true;
        turn=1;
    }
}

function checkTurn7(){
    // let turn = 1;
    if( turn==1 ){
        b7.value = "X";
        b7.disabled = true;
        turn=0;
    }
    else{
        b7.value = "0";
        b7.disabled = true;
        turn=1;
    }
}

function checkTurn8(){
    // let turn = 1;
    if( turn==1 ){
        b8.value = "X";
        b8.disabled = true;
        turn=0;
    }
    else{
        b8.value = "0";
        b8.disabled = true;
        turn=1;
    }
}

function checkTurn9(){
    // let turn = 1;
    if( turn==1 ){
        b9.value = "X";
        b9.disabled = true;
        turn=0;
    }
    else{
        b9.value = "0";
        b9.disabled = true;
        turn=1;
    }
}

// Check who is the winner
// Function to check if X or 0 are making a straight line of X or 0
// And disable other boxes which are not making a straight line
function checkWinner(){
    // check for x 
    if(b1.value=="X" && b2.value=="X" && b3.value=="X"){
        winnerDisplay.innerText = "Player X won";
        b4.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
    }
    else if(b4.value=="X" && b5.value=="X" && b6.value=="X"){
        winnerDisplay.innerText = "Player X won";
        b1.disabled = true;
        b2.disabled = true;
        b3.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
    }
    else if(b7.value=="X" && b8.value=="X" && b9.value=="X"){
        winnerDisplay.innerText = "Player X won";
        b1.disabled = true;
        b2.disabled = true;
        b3.disabled = true;
        b4.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
    }
    else if(b1.value=="X" && b5.value=="X" && b9.value=="X"){
        winnerDisplay.innerText = "Player X won";
        b2.disabled = true;
        b3.disabled = true;
        b4.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
    }
    else if(b3.value=="X" && b5.value=="X" && b7.value=="X"){
        winnerDisplay.innerText = "Player X won";
        b1.disabled = true;
        b2.disabled = true;
        b4.disabled = true;
        b6.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
    }
    else if(b1.value=="X" && b4.value=="X" && b7.value=="X"){
        winnerDisplay.innerText = "Player X won";
        b2.disabled = true;
        b3.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
    }
    else if(b2.value=="X" && b5.value=="X" && b8.value=="X"){
        winnerDisplay.innerText = "Player X won";
        b1.disabled = true;
        b3.disabled = true;
        b4.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b9.disabled = true;
    }
    else if(b3.value=="X" && b6.value=="X" && b9.value=="X"){
        winnerDisplay.innerText = "Player X won";
        b1.disabled = true;
        b2.disabled = true;
        b4.disabled = true;
        b5.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
    }
    // check for 0
    else if(b1.value=="0" && b2.value=="0" && b3.value=="0"){
        winnerDisplay.innerText = "Player 0 won";
        b4.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
    }
    else if(b4.value=="0" && b5.value=="0" && b6.value=="0"){
        winnerDisplay.innerText = "Player 0 won";
        b1.disabled = true;
        b2.disabled = true;
        b3.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
    }
    else if(b7.value=="0" && b8.value=="0" && b9.value=="0"){
        winnerDisplay.innerText = "Player 0 won";
        b1.disabled = true;
        b2.disabled = true;
        b3.disabled = true;
        b4.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
    }
    else if(b1.value=="0" && b5.value=="0" && b9.value=="0"){
        winnerDisplay.innerText = "Player 0 won";
        b2.disabled = true;
        b3.disabled = true;
        b4.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
    }
    else if(b3.value=="0" && b5.value=="0" && b7.value=="0"){
        winnerDisplay.innerText = "Player 0 won";
        b1.disabled = true;
        b2.disabled = true;
        b4.disabled = true;
        b6.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
    }
    else if(b1.value=="0" && b4.value=="0" && b7.value=="0"){
        winnerDisplay.innerText = "Player 0 won";
        b2.disabled = true;
        b3.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
    }
    else if(b2.value=="0" && b5.value=="0" && b8.value=="0"){
        winnerDisplay.innerText = "Player 0 won";
        b1.disabled = true;
        b3.disabled = true;
        b4.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b9.disabled = true;
    }
    else if(b3.value=="0" && b6.value=="0" && b9.value=="0"){
        winnerDisplay.innerText = "Player 0 won";
        b1.disabled = true;
        b2.disabled = true;
        b4.disabled = true;
        b5.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
    }
    // else{
    //     winnerDisplay.innerText = "Game Draw";
    //     b1.disabled = true;
    //     b2.disabled = true;
    //     b3.disabled = true;
    //     b4.disabled = true;
    //     b5.disabled = true;
    //     b6.disabled = true;
    //     b7.disabled = true;
    //     b8.disabled = true;
    //     b9.disabled = true;
    // }
}

// Reset the window
resetBtn.addEventListener('click', ()=>{
    location.reload();
})





















// function checkWinner() {
//     if(b1.value=="X" && b4.value=="X" && b7.value=="X" || b2.value=="X" && b5.value=="X" && b8.value=="X" || b3.value=="X" && b6.value=="X" && b9.value=="X" || b1.value=="X" && b2.value=="X" && b3.value=="X" || b4.value=="X" && b5.value=="X" && b6.value=="X" || b7.value=="X" && b8.value=="X" && b9.value=="X" || b1.value=="X" && b5.value=="X" && b9.value=="X" || b3.value=="X" && b5.value=="X" && b7.value=="X"){
//         console.log("Player X wins");
//     }
//     else if(b1.value=="0" && b4.value=="0" && b7.value=="0" || b2.value=="0" && b5.value=="0" && b8.value=="0" || b3.value=="0" && b6.value=="0" && b9.value=="0" || b1.value=="0" && b2.value=="0" && b3.value=="0" || b4.value=="0" && b5.value=="0" && b6.value=="0" || b7.value=="0" && b8.value=="0" && b9.value=="0" || b1.value=="0" && b5.value=="0" && b9.value=="0" || b3.value=="0" && b5.value=="0" && b7.value=="0"){
//         console.log("Player 0 wins");
//     }
//     else{
//         console.log("Draw");
//     }
// }
// checkWinner();

// setInterval(() => {

// if(b1.value!='' && b2.value!='' && b3.value!='' && b4.value!='' && b5.value!='' && b6.value!='' && b7.value!='' && b8.value!='' && b9.value!=''){
//     takeInput();
//     return;
// }    

// }, 1000);



// (b1.value!="" && b4.value!="" && b7.value!="" && b2.value!="" && b5.value!="" && b8.value!="" && b3.value!="" && b6.value!="" && b9.value!="" && b1.value!="" && b2.value!="" && b3.value!="" && b4.value!="" && b5.value!="" && b6.value!="" && b7.value!="" && b8.value!="" && b9.value!="" && b1.value!="" && b5.value!="" && b9.value!="" && b3.value!="" && b5.value!="" && b7.value!="")