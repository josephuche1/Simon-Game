let userClickedPattern = [];
let gamePattern = [];
let buttonColors = ["red", "blue",  "green", "yellow"];
let level = 0;
let started = false;

$(".btn").click(function(){
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});

$(document).keypress(function(){
    started = true;
    nextSequence();
    
})

function nextSequence(){
    userClickedPattern = [];
    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor)
    
    
    $("h1").text("Level "+level);
    level++;
    
}

function playSound(name){
    let audio = new Audio("./sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel){
  if(gamePattern[currentLevel] == userClickedPattern[currentLevel]){
    console.log("success");
  }
  else{
    console.log("wrong");
    let wrong = new Audio("./sounds/wrong.mp3");
    wrong.play();
    $("body").addClass("game-over")
    setTimeout(function (){
        $("body").removeClass("game-over");
    },200);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  }

  if(gamePattern.length == userClickedPattern.length){
    setTimeout(function () {
        nextSequence();
    }, 1000);
  }
}

function startOver(){
   level = 0;
   started =false;
   gamePattern = [];
}
