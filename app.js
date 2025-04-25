let gameSeq=[];
let userSeq =[];
let Btns=["yellow","green","red","purple"]

let started = false;
let level =0;
let h2 =document.querySelector("h2");
let startBtn = document.querySelector(".start-btn");
startBtn.addEventListener("click",function (){
    if(started==false){
        console.log("game is started");
        started=true;

        levelUp();
    }
});

// document.addEventListener("keypress",function (){
    
// });

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function()  {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function()  {
        btn.classList.remove("userFlash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randIndx = Math.floor(Math.random() * 3); 
    let randColor = Btns[randIndx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    
    // console.log(randIndx);
    // console.log(randColor);
    // console.log(randBtn);

    //random button flashed
    gameFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx]=== gameSeq[idx]){
        if(userSeq.length== gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over! Your score was <b>${level} <b> <br> Press Start Button to start the Game.`;
        const music = document.querySelector("body").style.backgroundColor="red";
        if(music){
            audio.play();
        }
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

const audio = new Audio();
audio.src = "./audio.mp3";

function btnPress(){
    //console.log(this);
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    //console.log(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset (){

    started = false;
    gameSeq =[];
    userSeq = [];
    level = 0;
}