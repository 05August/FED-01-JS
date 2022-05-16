var numberType = 23;
var stringType = 'FED01';
var booleanType = true;
var nullType = null;
var undefinedType = undefined;
var arrayType = [3, 4, 8, 2, 4, 7, 1];
var objex = {
  name: 'tên',
  age: 18,
  gender: 'female',
}

function examplefunction() {
  alert('Đây là đài tiếng nói Việt Nam phát thanh từ Hà Nội thủ đô nước CHXH Chủ Nghĩa Việt Nam');
}

var totalMoney = (2000000/(0.5/100))*(Math.pow((1+(0.5/100)),37) -1);


document.getElementById('alert-money').onclick = () => {
  alert('Tổng số tiền bạn nhận được là : ' + totalMoney.toFixed(2) +'VND' );
}

document.getElementById('alert-name').onclick = () =>{
  var nameUser = prompt('Nhập tên của bạn : ');
  alert('Hello ' + nameUser +  ', hôm nay là ngày ' + new Date());
}

document.getElementById('alert-subject').onclick = () =>{
  var subject = prompt('Nhập vào môn học yêu thích : ');
  if(subject=='công nghệ thông tin'||subject=='Công Nghệ Thông Tin'||subject=='cong nghe thong tin'||subject=='cntt')
  {
    alert('true!');
  }
  else{
    alert('false!');
  }
}

