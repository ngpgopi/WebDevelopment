var squares = document.querySelectorAll(".square");
var heading = document.querySelector("h1");
var quizzedColor = document.querySelector("#quizzedColor");
var quizzedNumber;
var choosenColor;
var message = document.querySelector("#message");
var reset = document.querySelector("#newGame");

var colors = ["#232323","#232323","#232323","#232323","#232323","#232323"];

var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
var flag = "hard";

populateSquare();

reset.addEventListener("click" , function () {
    populateSquare();
    reset.textContent = "New Game";
    heading.style.backgroundColor = "steelblue";
    message.textContent = "";

})

easyButton.addEventListener("click",function () {
    if(flag !== "easy"){
        flag = "easy";
        easyButton.classList.add("selected");
        hardButton.classList.remove("selected");
        colors = ["#232323","#232323","#232323"];
        populateSquare();
        message.textContent = "";
        for(i=3;i<squares.length;i++){
            squares[i].style.backgroundColor = "#232323";
        }
    }
})

hardButton.addEventListener("click",function () {
    if(flag !== "hard"){
        flag = "hard";
        hardButton.classList.add("selected");
        easyButton.classList.remove("selected");
        colors = ["#232323","#232323","#232323","#232323","#232323","#232323"];
        message.textContent = "";
        populateSquare();
    }
})


for (i = 0 ; i <colors.length ; i++){
    squares[i].addEventListener("click" ,function () {
        choosenColor = this.style.backgroundColor;
        console.log(choosenColor,quizzedColor.textContent);
        if(choosenColor === quizzedColor.textContent){
            correctAnswer();
        }
        else{
            message.textContent = "Try Again";
            this.style.backgroundColor = "#232323";
        }
    });
}


function populateSquare() {
    for (i = 0; i < colors.length ; i++){
        colors[i] = generateColors();
        quizzedNumber = Math.floor(Math.random()*colors.length);
        quizzedColor.textContent = colors[quizzedNumber];
        squares[i].style.backgroundColor = colors[i];
    }
}

function generateColors(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function correctAnswer() {
    message.textContent = "Correct:)";
    heading.style.backgroundColor = choosenColor;
    changeRemainingSquare();
    reset.textContent = "Play Again?"
}

function changeRemainingSquare() {
    for(i = 0 ; i < colors.length ; i++){
        squares[i].style.backgroundColor = choosenColor;
    }
}