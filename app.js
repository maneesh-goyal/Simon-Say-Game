let gameSeq=[];
let userseq=[];

let btns=["yellow","purple","red","green"];


let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){ // if game is not started-
        console.log("game  is started"); // only one time print
        started =true;
        levelup();    // call levelup function
    }
});

 
function gameFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
    }


function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;

    // random btn choose
let randomeIdx=Math.floor(Math.random()*3);
let randomeColor=btns[randomeIdx];
let randomeBtn = document.querySelector(`.${randomeColor}`);
// console.log(randomeIdx);
// console.log(randomeColor);
// console.log(randomeBtn);
gameSeq.push(randomeColor);
console.log(gameSeq);
    gameFlash(randomeBtn); //btnflash function ko call kra
}


function checkAns (idx){
    // console.log("curr level:",level); // check current level
    // let idx =level-1;
    if(userseq[idx]===gameSeq[idx]){
      if(userseq.length==gameSeq.length){ //  // jiske hum last mai hain
        setTimeout(levelup,1000);
        
      }  
    }else{
        h2.innerHTML=`Game over! your score was <b> ${level} <b/>  <br> press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();
    }
}

function btnPress (){
    // console.log(this);
   let btn= this;
   userFlash(btn);
//    gameFlash(btn);
userColor=btn.getAttribute("id");
userseq.push(userColor);
checkAns(userseq.length-1);// call kra 
};
 

let allBtns =document.querySelectorAll(".btn");
for(btn of allBtns){
btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userseq=[];
    level=0;
}