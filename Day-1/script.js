var $Name_User1 = prompt("Nhập tên của bạn", "");
alert('Tên người dùng đã nhập là : ' + $Name_User1);

document.getElementById('question-gender').onclick = () => 
{

  var answer = confirm("Do you gay ??");
  if(answer == 1){
    alert('OK  ' + $Name_User1 + ' Gay!')
  }
  else{
    alert('OK  ' +$Name_User1 + ' Không Gay!')
  }


}

var name='user';
var number = 10023;
var arr = [1,2,3];

console.log('name = ' + name,'number = ' + number,'arr = ' + arr);


