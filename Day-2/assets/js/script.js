let numberType = 23;
let stringType = 'FED01';
let booleanType = true;
let nullType = null;
let undefinedType = undefined;
let arrayType = [3, 4, 8, 2, 4, 7, 1];
let objex = {
  name: 'tên',
  age: 18,
  gender: 'female',
}

function examplefunction() {
  alert('Đây là đài tiếng nói Việt Nam phát thanh từ Hà Nội thủ đô nước CHXH Chủ Nghĩa Việt Nam');
}

document.getElementById('alert-money').onclick = () => {
  let money = prompt('Nhập vào số tiền đóng hàng tháng : ');
  let interest = prompt('Nhập vào lãi suất hằng năm : ');

  if(interest[interest.length-1]==='%')
  {
    interest = interest.slice(0,interest.length-1)-0;
  }
  else
  {
    interest -= 0;
    console.log(interest);
  }

  let period = prompt('Nhập vào thời hạn : ');

  let totalMoney = (money/((interest/12)/100))*(Math.pow((1+((interest/12)/100)),period*12 + 1) -1);
  alert('Tổng số tiền bạn nhận được là : ' + totalMoney.toFixed(2) +'VND' );
}

document.getElementById('alert-name').onclick = () =>{
  let nameUser = prompt('Nhập tên của bạn : ');
  let datetime = new Date();
  alert('Hello ' + nameUser +  ', hôm nay là ngày ' + datetime.getDate() + ' tháng ' + (datetime.getMonth() + 1) + ' năm ' + datetime.getFullYear());
  console.log(datetime)
}

document.getElementById('alert-subject').onclick = () =>{
  let subject = prompt('Nhập vào môn học yêu thích : ');
  if(subject==='công nghệ thông tin'||subject==='Công Nghệ Thông Tin'||subject==='cong nghe thong tin'||subject==='cntt')
  {
    alert('true!');
  }
  else{
    alert('false!');
  }
}

