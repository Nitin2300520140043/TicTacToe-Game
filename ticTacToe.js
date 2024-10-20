// Selecting all the boxes
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

// 2-D Array
// let arr = [["Mango", "Apple"], ["Potato", "Onion"], ["Pants", "Shirts"]];


let turnX = true; //playerX, PlayerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


const resetGame = () => {
    turnX = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}




let count = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        // console.log("box was clicked");
        if(turnX){   //PlayerO
            box.innerText = "X";
            turnX = false;
        }
        else{    //PlayerX
            box.innerText = "O";
            turnX = true;
        }
        count++;
        // console.log(count);

       
        box.disabled = true;

        checkWinner();

        if(count === 9){
            
            resetMessage();
        }

    });
});





const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "" ;
    }
}


const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    count = 0;

}


const resetMessage = () => {
    msg.innerText =`Sorry Tied`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    count = 0;
}


const checkWinner = () => {
    for(let pattern of winPatterns){
        //console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                // console.log("Winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);