const boxes = document.querySelectorAll('.box');
const winningMsg = document.getElementById('msg');
const btn = document.getElementById('game-btn');
let turnX = true;
const winsPattern = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [0, 5, 10, 15],
    [3, 6, 9, 12]
]

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if(turnX){
            box.innerText = "✔️";
            turnX = false;
        }else{
            box.innerText = "❌";
            turnX = true;
        }
        box.disabled = true;
        checkWin();
    })
})


function checkWin(){
    for(let win of winsPattern){
        let pattern0 = boxes[win[0]].innerText;
        let pattern1 = boxes[win[1]].innerText;
        let pattern2 = boxes[win[2]].innerText;
        let pattern3 = boxes[win[3]].innerText;
        if(pattern0 != "" && pattern1 != "" && pattern2 != "" && pattern3 != ""){
            if(pattern0 == pattern1 && pattern1 == pattern2 && pattern2 == pattern3){
                winningMsg.innerText = `Winner is ${pattern0}`;
                boxes.forEach((box) => {
                    box.disabled = true;
                })
            }
        }
    }
}

btn.addEventListener('click', () => {
    turnX = true;
    winningMsg.innerText = "";
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    })
})