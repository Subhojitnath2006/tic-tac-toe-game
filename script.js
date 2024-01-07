let boxes = document.querySelectorAll(".box");
let reserbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPatterns = [
   [0, 1, 2],
   [0, 3, 6],
   [0, 4, 8],
   [1, 4, 7],
   [2, 5, 8],
   [3, 4, 5],
   [6, 7, 8]
];

const resetgame = () => {
   turn0 = true;
   enableboxes();
   msg.container.classList.add("hide");
};

boxes.forEach((box) => {
   box.addEventListener("click", () => {
      if (turn0 == true) {
         box.innerText = "0";
         turn0 = false;
      }
      else {
         box.innerText = "x";
         turn0 = true;
      }
      box.disabled = true;
      const showwinner = (winner) => {
         msg.innerText = `congratulations,winner is ${winner}`;
         msgContainer.classList.remove("hide");
      };
      const disableboxes = () => {
         for (let box of boxes) {
            box.disabled = true;
         }
      }
      const enableboxes = () => {
         for (let box of boxes) {
            box.disabled = false;
            box.innerText = empty;
         }
      }


      checkwinner = () => {
         for (let pattern of winPatterns) {
            console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);

            let pos1val = boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText;
            let pos3val = boxes[pattern[2]].innerText;

            if (pos1val != "" && pos2val != "" && pos3val != "") {
               if (pos1val === pos2val && pos2val === pos3val) {
                  console.log("winner", pos1val);
                  disableboxes();
                  showwinner(pos1val);
               }
            }
         }
      }
   }
   )
})
newgamebtn.addEventListener("click", resetgame);
reserbtn.addEventListener("click", resetgame);
