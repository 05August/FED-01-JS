//Bai-1 --------------------------------------------------
const helloUser=(yourName)=>{
  alert("Hello " + yourName);
}

const lessonTwo=(a,b,c)=>{
  return a+b>+c ?  a-b-c : false;
}

const lessonThree=(math,physics,chemistry,biology,literature,history,geography,english)=>{
  avgScore=(math+physics+chemistry+biology+literature+history+geography+english)/8;
  switch(true){
    case avgScore <5 :
      alert("Học sinh yếu.");
      break;
    case avgScore < 6.5:
      alert("Học sinh trung bình.");
      break;
    case avgScore< 8:
      alert("Học sinh khá.");
      break;
    case avgScore>=8:
    case avgScore<=10:
      alert("Học sinh giỏi.");
      break;
    default:
      alert("Không biết nưaaaaaaaaaaa! Nhập sai mai trả lời :3");
  }
}




//Bai-2 --------------------------------------------------
let userName;
let userNumber;
let totalMoney = 0;
let moneyLevel1 = 0;
let moneyLevel2 = 0;
let moneyLevel3 = 0;
let moneyLevel4 = 0;


const level = {
  one: {
    price: 3000,
    milestones: 150,
  },
  two: {
    price: 5000,
    milestones: 350,
  },
  there: {
    price: 10000,
    milestones: 1000,
  },
  four: {
    price: 20000,
    milestones: 1501,
  },
}

function complete() {
  totalMoney=0;
  userName = document.getElementById("user-name").value;
  userNumber = document.getElementById("user-use").value;
  if (!isNaN(+userNumber)) {
    if (userNumber < 100 || userNumber > 2000) {
       alert("Yêu cầu là số và lớn hơn 100, nhỏ hơn 2000.");
    }
    else {
      switch (true) {
        case userNumber > 1500:
          moneyLevel4 = 0;
          moneyLevel4 += level.four.price * (userNumber - 1500);
          totalMoney += moneyLevel4;
          document.getElementById("milestones4").innerText = userNumber - 1500;
          document.getElementById("money4").textContent = moneyLevel4 + " Đồng";

        case userNumber > 500:
          moneyLevel3 = 0;
          if (userNumber > 1500) {
            moneyLevel3 += level.there.price * 1000;
          }
          else {
            moneyLevel3 += level.there.price * (userNumber - 500);
          }
          totalMoney += moneyLevel3;
          document.getElementById("milestones3").innerText = userNumber > 1500 ? 1000 : (userNumber - 500);
          document.getElementById("money3").textContent = moneyLevel3 + " Đồng";

        case userNumber > 150:
          moneyLevel2 = 0;
          if (userNumber > 500) {
            moneyLevel2 += level.two.price * 350;
          }
          else {
            moneyLevel2 += level.two.price * (userNumber - level.one.milestones);
          }
          totalMoney += moneyLevel2;
          document.getElementById("milestones2").innerText = userNumber > 500 ? 350 : (userNumber - 150);
          document.getElementById("money2").textContent = moneyLevel2 + " Đồng";

        case userNumber >= 100:
          moneyLevel1 = 0;
          if (userNumber > 150) {
            moneyLevel1 += level.one.price * 150;
          }
          else {
            moneyLevel1 += level.one.price * userNumber;
          }
          totalMoney += moneyLevel1;
          document.getElementById("milestones1").innerText = userNumber > 150 ? 150 : userNumber;
          document.getElementById("money1").textContent = moneyLevel1 + " Đồng";
          document.getElementById("total-money").textContent = "Khách hàng " + userName.toUpperCase() + " đã sử dụng " + userNumber + "kWh " + " và số tiền phải đóng là : " + totalMoney + " Đồng.";

          break;

        default:
      }

    }
  }
  else {
    alert("Cảnh báo nhập sai dữ liệu số điện.");
  }

}



