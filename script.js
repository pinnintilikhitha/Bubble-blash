var score = 0;
const windowWidth = Math.floor(window.innerWidth/60);
const windowHeight = Math.floor(window.innerHeight/60);
function bubbleMaker(){
    var clutter = "";
    for(var i=1;i<=windowWidth*windowHeight;i++){
        var id = Math.floor(Math.random()*10);
        clutter += <div class="bubble">${id}</div>;
    }
    document.querySelector(".panel-bottom").innerHTML = clutter;
}
var hitrn = 0;
function hitMaker(){
    hitrn = document.querySelector("#hitValue").textContent = Math.floor(Math.random()*10);
}
function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function setTimer(){
    var timer = 20;
    var timerInterval = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }else{
            document.querySelector(".panel-bottom").innerHTML = <h2>Total Score : ${score}</h2><h1>Game Over</h1>
            clearInterval(timerInterval)
        }
    },1000)
}
document.querySelector(".panel-bottom")
.addEventListener("click",function(details){
    var clickedNum = Number(details.target.textContent);
    if(clickedNum === hitrn){
        increaseScore();
        bubbleMaker();
        hitMaker();
    }
})
setTimer();
bubbleMaker();
hitMaker();
