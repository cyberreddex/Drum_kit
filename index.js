// document.querySelectorAll("button")[0].addEventListener("click",buttonclick);
// document.querySelectorAll("button")[1].addEventListener("click",buttonclick);
// document.querySelectorAll("button")[2].addEventListener("click",buttonclick);
// document.querySelectorAll("button")[3].addEventListener("click",buttonclick);
// document.querySelectorAll("button")[4].addEventListener("click",buttonclick);
// document.querySelectorAll("button")[5].addEventListener("click",buttonclick);
// document.querySelectorAll("button")[6].addEventListener("click",buttonclick);
// function buttonclick(){
//   alert("i got clicked");
// }

var noofbuttons=document.querySelectorAll(".drum").length;
for(var i=0;i<noofbuttons;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var buttoninnerhtml=this.innerHTML;
        makesound(buttoninnerhtml);
        addanimation(buttoninnerhtml);


});
}
document.addEventListener("keypress",function(event){
    makesound(event.key);
    addanimation(event.key);
});

function makesound(key){
    switch(key){
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
            console.log(buttoninnerhtml);    
 
}  
}
function addanimation(currentkey){
    var activebutton=document.querySelector("."+currentkey);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");},100)
    }


