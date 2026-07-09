let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let turnMsg = document.querySelector("#turn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let player1 = document.querySelector("#player1");
let player2 = document.querySelector("#player2");

let turnO= true;
let count=0;

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
    player1.classList.add("active");
    player2.classList.remove("active");
    turnO=true;
    count=0;
    enableBoxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if (turnO) {
    box.innerText = "O";
    turnO = false;

    player1.classList.remove("active");
    player2.classList.add("active");

} else {
    box.innerText = "X";
    turnO = true;

    player2.classList.remove("active");
    player1.classList.add("active");
}

        box.disabled=true;
        count++;

        let iswinner=checkwinner();
        if(count===9 && !iswinner){
            gameDraw();
        }
    });
});

const gameDraw = () => {
  msg.innerText = "🤝Its a DRAW!";
  msgcontainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showwinner = (winner) => {
    if (winner === "O") {
        msg.innerText = "🎉 Congratulations! Player 1 Wins";
    } else {
        msg.innerText = "🎉 Congratulations! Player 2 Wins";
    }
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

const checkwinner=()=>{
    for(let pattern of winPattern){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val !="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val === pos2Val && pos2Val===pos3Val){
            showwinner(pos1Val);
            return true;
            }
        }
    }
};

newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);

const emojiBg = document.querySelector("#emoji-bg");

const emojis = ["🎮","🎲","✨","⭐","🎉","💖","😊","😎","🌸","💫", "🎅","🧔","🥟","🥞","🍟","🎁","🎍","🎇","🎄","🎀"];

for(let i = 0; i < 50; i++){
    const emoji = document.createElement("span");
    emoji.classList.add("emoji");

    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.animationDuration = (6 + Math.random() * 8) + "s";
    emoji.style.fontSize = (20 + Math.random() * 30) + "px";
    emoji.style.animationDelay = Math.random() * 5 + "s";

    emojiBg.appendChild(emoji);
}