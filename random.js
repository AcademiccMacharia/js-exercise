let randomNum = Math.floor(Math.random() * 10) + 1;
let guess = prompt("Hey Kid! Guess a number between 1 and 10");

if (parseInt(guess) === randomNum) {
    alert("Good Work");
}else{
    alert("Not matched");
}