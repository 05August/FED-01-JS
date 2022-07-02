class chessMan {
  constructor(type) {
    this.type = type;
  }

  movingMethod = () => {
  }
}

class tank extends chessMan {
  // constructor(name,color){
  //   this.name=name;
  //   this.color=color;
  // }
  type = 'tank';
  movingMethod = () => {
    return 'Đi thẳng';
  }
}

class knight extends chessMan {
  type = 'knight';
  movingMethod = () => {
    return ' Đi ngang 2 ô và đi dọc 1 ô (hoặc đi dọc 2 ô và đi ngang 1 ô) cho mỗi nước đi.';
  }
}

class cannon extends chessMan {
  type = 'cannon';
  movingMethod = () => {
    return 'Đi ngang và dọc giống như xe. Điểm khác biệt là nếu pháo muốn ăn quân, pháo phải nhảy qua đúng 1 quân nào đó. Khi không ăn quân, tất cả những điểm từ chổ đi đến chổ đến phải không có quân cản.';
  }
}

class defender extends chessMan {
  type = 'defender';
  movingMethod = () => {
    return 'Đi chéo 2 ô (ngang 2 và dọc 2) cho mỗi nước đi. Tượng chỉ được phép ở một bên của bàn cờ, không được di chuyển sang nữa bàn cờ của đối phương. Nước đi của tượng sẽ không hợp lệ khi có một quân cờ nằm chặn giữa đường đi.';
  }
}

class guardian extends chessMan {
  type = 'guardian';
  movingMethod = () => {
    return 'Đi xéo 1 ô mỗi nước. Sĩ luôn luôn phải ở trong cung như con Tướng.';
  }
}

class general extends chessMan {
  type = 'general';
  movingMethod = () => {
    return "Đi từng ô một, đi ngang hoặc dọc. Tướng luôn luôn phải ở trong phạm vi cung và không được ra ngoài. “Cung” tức là hình vuông 3*3 được đánh dấu bởi lằng chéo hình chử X.";
  }
}

class solider extends chessMan {
  constructor(type) {
    super(type);
  }
  movingMethod = () => {
    return 'Đi một ô mỗi nước. Nếu chuột chưa vượt qua sông, nó chỉ có thể đi thẳng tiến. Khi đã vượt sông rồi, chuột có thể đi ngang 1 nước hay đi thẳng tiến 1 bước mỗi nước.';
  }
}

let boardGame = new Array(10).fill();
boardGame = boardGame.map((item) => new Array(9).fill({}));

let board = '';

boardGame.map((arrItem, y) => {
  let row = '';
  arrItem.map((item, x) => {
    row = row + `<div data-x="${x}" data-y="${y}"></div>`;
  });

  board = board + '<div>' + row + '</div>';
});


boardGame[0][0] = new tank();
// // boardGame[0][8] = new tank;
// // boardGame[9][0] = new tank;
// // boardGame[9][8] = new tank;
// boardGame[3][0] = new solider('solider');

document.getElementById('board').innerHTML = board;
document.querySelector("[data-x='8'][data-y='0']").innerHTML = "<div class='chess'>Xe</div>";
document.querySelector("[data-x='0'][data-y='0']").innerHTML = "<div class='chess'>Xe</div>";
document.querySelector("[data-x='7'][data-y='0']").innerHTML = "<div class='chess'>Mã</div>";
document.querySelector("[data-x='1'][data-y='0']").innerHTML = "<div class='chess'>Mã</div>";
document.querySelector("[data-x='6'][data-y='0']").innerHTML = "<div class='chess'>Tượng</div>";
document.querySelector("[data-x='2'][data-y='0']").innerHTML = "<div class='chess'>Tượng</div>";
document.querySelector("[data-x='5'][data-y='0']").innerHTML = "<div class='chess'>Sĩ</div>";
document.querySelector("[data-x='3'][data-y='0']").innerHTML = "<div class='chess'>Sĩ</div>";
document.querySelector("[data-x='4'][data-y='0']").innerHTML = "<div class='chess'>Tướng</div>";
document.querySelector("[data-x='8'][data-y='9']").innerHTML = "<div class='chess'>Xe</div>";
