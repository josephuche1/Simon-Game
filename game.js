let userClickedPattern = [];
let gamePattern = [];
let buttonColors = ["red", "blue",  "green", "yellow"];
let level = 0;

$(".btn").click(function(){
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});

$(document).keypress(function(){
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
  }

  if(gamePattern.length == userClickedPattern.length){
    setTimeout(function () {
        nextSequence();
    }, 1000);
    
  }
  
  
}
