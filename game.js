let userClickedPattern = [];
let gamePattern = [];
let buttonColors = ["red", "blue",  "green", "yellow"];



function nextSequence(){
    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor)
}

$(".btn").click(function(){
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
});

function playSound(name){
    let audio = new Audio("./sounds/"+name+".mp3");
    audio.play();
}




