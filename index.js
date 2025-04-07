let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgamebtn =document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");
 
let turnO = true;

const  winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6]
] 

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerHTML="O";
            turnO = false;
        }
        else{
            box.innerHTML="X"; 
            turnO = true;
        }
        box.disabled = true;

        checkWinner();

    })
})

const disableBox =() =>{
    for (const box of boxes) {
        box.disabled=true;
    }
}

const  checkWinner = () =>{
for ( let pattern of winPatterns) {
   // console.log( boxes[pattern[0]].innerHTML="",boxes[pattern[1]].innerHTML="",boxes[pattern[2]].innerHTML="");
  let  post1val = boxes[pattern[0]].innerText;
  let  post2val = boxes[pattern[1]].innerText;
  let  post3val = boxes[pattern[2]].innerText;

    if( post1val !="" && post2val !="" && post3val !=""){
        if(post1val===post2val && post2val===post3val){
            console.log("winner");   
            showWinner(post1val);
        }}

    
}
}


const showWinner =(winner) =>{
msg.innerText =` congratulation, winner is ${winner}`;
msgcontainer.classList.remove("hide");
disableBox();
}

const resetGame =() =>{
    turnO= true;
    enableBoxes(); 
    msgcontainer.classList.add("hide");

}
    const enableBoxes =() =>{
        for (const box of boxes) {
            box.disabled=false;
            box.innerText= " ";
        }
    }


    newgamebtn.addEventListener("click",resetGame);
    reset.addEventListener("click",resetGame);
    
