var playButton = document.querySelectorAll(".drum");

for(var i=0;i<playButton.length;i++)
 {

  playButton[i].addEventListener("click", function(){

    makeSound(this.innerHTML);

  });
 }

document.addEventListener("keydown", function(event){

    makeSound(event.key);

})

function makeSound(response)
{
    if (response === 'w') {
        var audio = new Audio('sounds/tom-1.mp3');
             audio.play();
        }
    
        if (response === 'a') {
        var audio = new Audio('sounds/tom-2.mp3');
             audio.play();
        }
    
        if (response === 's') {
        var audio = new Audio('sounds/tom-3.mp3');
             audio.play();
        }
    
        if (response === 'd') {
        var audio = new Audio('sounds/tom-4.mp3');
             audio.play();
        }
    
        if (response === 'j') {
        var audio = new Audio('sounds/crash.mp3');
             audio.play();
        }
    
        if (response === 'k') {
        var audio = new Audio('sounds/snare.mp3');
             audio.play();
        }
    
        if (response === 'l') {
        var audio = new Audio('sounds/kick-bass.mp3');
             audio.play();
        }
        
        document.querySelector("."+response).classList.add("pressed");

        var myTimer =  setTimeout(function(){
          document.querySelector("."+response).classList.remove("pressed");
        },100);
}
    
    
    
    
    
    
