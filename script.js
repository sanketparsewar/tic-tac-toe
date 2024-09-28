const boxId0 = document.getElementById("boxId0");
const boxId1 = document.getElementById("boxId1");
const boxId2 = document.getElementById("boxId2");
const boxId3 = document.getElementById("boxId3");
const boxId4 = document.getElementById("boxId4");
const boxId5 = document.getElementById("boxId5");
const boxId6 = document.getElementById("boxId6");
const boxId7 = document.getElementById("boxId7");
const boxId8 = document.getElementById("boxId8");
const player = document.getElementById("player");
const restart=document.getElementById('restart')

let options = ["", "", "", "", "", "", "", "", ""];
function checkForWinner(options) {
  for (let i = 0; i < winCondition.length; i++) {
    const condition = winCondition[i];
    const box1 = options[condition[0]];
    const box2 = options[condition[1]];
    const box3 = options[condition[2]];
    if (box1 == "" || box2 == "" || box3 == "") {
      continue;
    }
    if (box1 === box2 && box2 === box3) {
      player.innerText = "Winner is : " + box1;
      restart.style.visibility='visible'
      break;
    }
  }
}
const winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

let count = 1;
function generate(boxNumber) {
  if (count % 2 == 0) {
    val = "x";
    player.innerText = `o's Turn`;
  } else {
    val = "o";
    player.innerText = "x's Turn";
  }

  switch (boxNumber) {
    case 0:
      boxId0.innerText = val;
      break;
    case 1:
      boxId1.innerText = val;
      break;
    case 2:
      boxId2.innerText = val;
      break;
    case 3:
      boxId3.innerText = val;
      break;
    case 4:
      boxId4.innerText = val;
      break;
    case 5:
      boxId5.innerText = val;
      break;
    case 6:
      boxId6.innerText = val;
      break;
    case 7:
      boxId7.innerText = val;
      break;
    case 8:
      boxId8.innerText = val;
      break;
  }
  options[boxNumber] = val;
  count += 1;
  if (count === 8) {
    console.log("Draw");
  } else {
    checkForWinner(options);
  }
}

