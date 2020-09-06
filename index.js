function ButtonAnimation(currontKey){   
    var list = ['w','s','a','d','j','k','l'];
    if (list.includes(currontKey)){
    $("."+currontKey).addClass("pressed")
    window.setTimeout(function(){
        $("."+currontKey).removeClass("pressed");},100)}
}

function playSound(key){ // given a input play specific sound
    switch (key) {
        case "w":
            var music = new Audio('sounds/tom-1.mp3');
            music.play();
            break;
        case "a":
            var music = new Audio('sounds/snare.mp3');
            music.play();
            break;
        case "s":
            var music = new Audio('sounds/tom-2.mp3');
            music.play();
            break;
        case "d":
            var music = new Audio('sounds/kick-bass.mp3');
            music.play();
            break;
        case "j":
            var music = new Audio('sounds/tom-3.mp3');
            music.play();   
            break; 
        case "k":
            var music = new Audio('sounds/crash.mp3');
            music.play();
            break;
        case "l":
            var music = new Audio('sounds/tom-4.mp3');
            music.play();
            break;          
        default:
            // console.log("Incorrent Key");
            break;
}
}
$(".drum").click(function(){
    playSound(this.innerHTML);
    ButtonAnimation(this.innerHTML);});

$(document).keypress(function(event){
    playSound(event.key);
    ButtonAnimation(event.key);
});



