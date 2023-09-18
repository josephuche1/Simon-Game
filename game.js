let userClickedPattern = [];
let gamePattern = [];
let buttonColors = ["red", "blue",  "green", "yellow"];
let randomChosenColor = buttonColors[nextSequence()];

gamePattern.push(randomChosenColor);
function nextSequence(){
    let randomNumber = Math.floor(Math.random()*4);
    return randomNumber;
}

$("#"+randomChosenColor).fadeOut(100).fadeIn(100);
let audio = new Audio("./sounds/"+randomChosenColor+".mp3");
audio.play();

$("button").click(function(){
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
});

