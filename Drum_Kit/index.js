function makeSound(key){
    switch (key) {
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;  
        case "k":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;     
        default:
            break;
    }  
}


function buttonAnimation(key1) {
    var currentKey=document.querySelector("."+key1);
    currentKey.classList.add("pressed");
    var delayInMilliseconds = 400; //1 second
    setTimeout(function() {
        currentKey.classList.remove("pressed");
        }, delayInMilliseconds);
    }    

// Handles click
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var key=this.innerHTML;
        makeSound(key);
        buttonAnimation(key);
    });
}

// Handles key Press
document.addEventListener("keypress",function (event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


