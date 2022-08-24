const $ = (selector) => document.getElementById(selector);
const pointerArr = $('screen').querySelectorAll("div");
const redDotHtml = '<div class="red-dot"></div>';
const blackDotHtml = '<div class="black-dot"></div>';
const arrowButton = document.getElementsByClassName("arrow-btn");
let indexRedDot = 0;
let indexBlackDotArr = [];
let isStart = false
const mapLimit = {
  top: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  left: [0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210],
  right: [14, 29, 44, 59, 74, 89, 104, 119, 134, 149, 164, 179, 194, 209, 224],
  bot: [210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224],
}

const startBtnClick = () => {
  alert('Bắt đầu trò chơi.');
  isStart = true;
  indexRedDot = 0;
  for (let i = 0; i < 225; i++) {
    pointerArr[i].innerHTML = '';
  }
  indexBlackDotArr = [];
  pointerArr[0].innerHTML = redDotHtml;
  do {
    let randomNumber = Math.floor(Math.random() * 224 + 1);
    if (!indexBlackDotArr.includes(randomNumber)) {
      indexBlackDotArr.push(randomNumber);
    }
  } while (indexBlackDotArr.length < 6);

  indexBlackDotArr.forEach(function (index) {
    pointerArr[index].innerHTML = blackDotHtml;
  })
}

const attackBtnClick = () => {
  indexBlackDotArr = indexBlackDotArr.filter(index => index !== indexRedDot);
  if (indexBlackDotArr.length === 0) {
    alert('Chúc mừng bạn đã chiến thắng');
    isStart = false;
  }
}

const arrowClickHandle = (arrow) => {
  if (isStart) {
    pointerArr[indexRedDot].innerHTML = '';
    if (indexBlackDotArr.includes(indexRedDot)) {
      pointerArr[indexRedDot].innerHTML = blackDotHtml;
    }
    switch (arrow) {
      case 'left':
        if (!mapLimit.left.includes(indexRedDot)) {
          indexRedDot -= 1;
        }
        break;
      case 'top':
        if (!mapLimit.top.includes(indexRedDot)) {
          indexRedDot -= 15;
        }
        break;
      case 'right':
        if (!mapLimit.right.includes(indexRedDot)) {
          indexRedDot += 1;
        }
        break;
      case 'bot':
        if (!mapLimit.bot.includes(indexRedDot)) {
          indexRedDot += 15;
        }
        break;
      default: break;
    }
    pointerArr[indexRedDot].innerHTML = redDotHtml;
  }
}

$('start-btn').onclick = function () {
  startBtnClick();
};

$('attack-btn').onclick = () => {
  attackBtnClick();
}


for (let i = 0; i < 4; i++) {
  arrowButton[i].onclick = () => {
    switch (i) {
      case 0:
        arrowClickHandle('top');
        break;
      case 1:
        arrowClickHandle('right');
        break;
      case 2:
        arrowClickHandle('left');
        break;
      case 3:
        arrowClickHandle('bot');
        break;
      default: break;
    }
  }
}


function checkKey(e) {
  e = e || window.event;

  switch (e.keyCode) {
    case 37:
      arrowClickHandle('left');
      break;
    case 38:
      arrowClickHandle('top');
      break;
    case 39:
      arrowClickHandle('right');
      break;
    case 40:
      arrowClickHandle('bot');
      break;
    case 83:
      startBtnClick();
      break;
    case 65:
      attackBtnClick();
      break;
    default: break;
  }

}

document.onkeydown = checkKey;
