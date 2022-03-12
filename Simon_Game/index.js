
var level=0;
var gameStarted=false;
var gamePattern=[];
var userClickedPattern=[];
var buttonColors=["green","red","yellow","blue"];
var randomNumber;
var randomChosenColor;

$(document).one("keypress",function(){
    if(!gameStarted)
    {   gameStarted=true;
        nextSequence();
    }
});

function nextSequence(){
    level++;
    $("#level-title").text("Level- "+level);
    randomNumber=numberGenerator();
    randomChosenColor=buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    //console.log(gamePattern);
    let idx=0;
    const timer=setInterval(function(){
        var color=gamePattern[idx++];
        //console.log(color);
        makeSound(color);
        animateColor(color);
        if(idx===gamePattern.length){
            clearInterval(timer);
        }
    },800);
}

function comparePattern(index){
    if(gamePattern[index]===userClickedPattern[index])
    return true;
    else
    return false;
}

function flash(color){
    $(color).fadeOut(80).fadeIn(80).fadeOut(80).fadeIn(80);
}

function animateColor(color){
    flash("#"+color);
    $("#"+color).addClass("pressed");
    setTimeout(function(){
       $("#"+color).removeClass("pressed"); 
    },100);
}
function makeSound(key){
    switch (key) {
        case "green":
            var audio=new Audio("sounds/green.mp3");
            audio.play();
            break;
        case "blue":
            var audio=new Audio("sounds/blue.mp3");
            audio.play();
            break;
        case "red":
            var audio=new Audio("sounds/red.mp3");
            audio.play();
            break;
        case "yellow":
            var audio=new Audio("sounds/yellow.mp3");
            audio.play();
            break;   
        default:
            var audio=new Audio("sounds/wrong.mp3");
            audio.play();
            break;         
    }
}

function numberGenerator(){
    var r=Math.floor(Math.random()*4);
    return r;
}

function restart(){
    level=0;
    gamePattern=[];
    gameStarted=false;
}

function gameOver(){
    userClickedPattern=[];
    makeSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").hide()
    $(".score").show();
    var s=level-1;
    $("#score").text("Your Score="+s);
    $(".container ").hide();
    flash("body");
    setTimeout(function(){
    $("body").removeClass("game-over");
     },200);
    restart();
}
$(".btn").click(function(){
    if(gameStarted){
        var userChosenColor=this.id;
        userClickedPattern.push(userChosenColor);
        makeSound(userChosenColor);
        animateColor(userChosenColor);
        //console.log(userClickedPattern);
        //console.log(gamePattern);
        
        if(comparePattern(userClickedPattern.length-1)){
            if(userClickedPattern.length==gamePattern.length){
                userClickedPattern=[];
                setTimeout(function(){
                    nextSequence();
                },1000);
            }   
        }
        else if (gamePattern.length!=0){
           gameOver();
        }
    }
});

$("#restart").click(function(){
    if(!gameStarted)
    {   gameStarted=true;
        nextSequence();
    }
    $(".container").show();
    $("#level-title").show();
    $(".score").hide();
});