

function birthday() {
  userName = prompt("Please enter your name:");
  userBirthday = prompt("Please enter your birth date(dd/mm/yyyy): ");
  today = new Date();
  today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  var someDay = new Date(today.getFullYear(), userBirthday.split("/")[1] - 1, userBirthday.split("/")[0]);
  if (today - someDay == 0) alert('Happy BirthDay to You <3 ');
  else {
    var day = someDay > today ? (someDay - today) / (24 * 3600 * 1000) : 365 + (someDay - today) / (24 * 3600 * 1000);
    alert('Còn ' + day + ' ngày nữa là đến sinh nhật bạn ' + userName);
  }
}

function vietlot() {
  const arr = new Array(46);
  arr[0] = undefined;
  const arrVietlot = new Array(6);
  const arrUser = new Array(6);
  arr.fill(0);
  countLoop = 0;
  checkWin = 0;
  do {
    countLoop = 0;
    yourNumber = prompt("Nhập vào 6 số(từ 1 đến 45) cách nhau bằng dấu cách : ");
    if (yourNumber == '') {
      alert("Bạn chưa nhập gì vào.");
      countLoop++;
    }
    else {
      for (let i = 0; i < 6; i++) {
        arrUser[i] = +yourNumber.split(" ")[i];
        arr[arrUser[i]]++;
        if (arr[yourNumber.split(" ")[i]] === undefined || arr[yourNumber.split(" ")[i]] > 1) {
          alert("Dữ liệu nhập vào không đúng hoặc bị trùng vui lòng nhập lại");
          countLoop++;
          arr.fill(0);
          break;
        }
        else {
          countLoop = 0;
        }
      }

      if (countLoop === 0) {
        for (let i = 0; i < 6; i++) {
          arrVietlot[i] = Math.floor(Math.random() * 45 + 1);
          if (arr[arrVietlot[i]] > 0) checkWin++;
        }

        console.log('Vietlot Number : ' + arrVietlot);
        console.log('Your Number : ' + arrUser);
        console.log("🚀~ vietlot ~ checkWin", checkWin);
        switch (true) {
          case checkWin === 2:
            alert("🚀~ vietlot ~ Dãy số : " + arrVietlot + '. Chúc mừng bạn đã trúng thưởng giải khuyến khích!');
            console.log("🚀~ vietlot ~ Giải Khuyến Khích.");
            break;
          case checkWin === 3:
            alert("🚀~ vietlot ~ Dãy số : " + arrVietlot + '. Chúc mừng bạn đã trúng thưởng giải ba!');
            console.log("🚀~ vietlot ~ Giải Ba.");
            break;
          case checkWin === 4:
            alert("🚀~ vietlot ~ Dãy số : " + arrVietlot + '. Chúc mừng bạn đã trúng thưởng giải nhì!');
            console.log("🚀~ vietlot ~ Giải Nhì.");
            break;
          case checkWin === 5:
            alert("🚀~ vietlot ~ Dãy số : " + arrVietlot + '. Chúc mừng bạn đã trúng thưởng giải nhất!');
            console.log("🚀~ vietlot ~ Giải Nhất.");
            break;
          case checkWin === 6:
            alert("🚀~ vietlot ~ Dãy số : " + arrVietlot + '. Chúc mừng bạn đã trúng thưởng giải jackpot!Bạn là người may mắn nhất hôm nay.');
            console.log("🚀~ vietlot ~ Giải JackPot.");
            break;
          default:
            alert("🚀~ vietlot ~ Dãy số : " + arrVietlot + '. Tiếc quá bạn chưa trúng thưởng.Tích cực quay tay vận may sẽ đến.Chúc bạn may mắn lần sau.');
        }

      }

    }


  }
  while (countLoop !== 0)
}



