const arrStudents = new Array();
const dataStudent = new Array();
let textHtmlStudents ='';
const arrAccount = [
  { name: 'admin', password: 'Aa@123456' },
  { name: 'admin2', password: 'admin123admin' }
]
localStorage.setItem('admin', JSON.stringify(arrAccount));


class student {
  constructor(idnumber, name, dob, phonenumber) {
    this.idnumberStudent = idnumber;
    this.nameStudent = name;
    this.dobStudent = dob;
    this.phonenumberStudent = phonenumber;
  }
}
if (localStorage.getItem('login-status') === 'successful') {
  document.getElementById("container-modal").style.display = "none";
  document.getElementById("register-form").style.display = "block";
}
if(localStorage.getItem('data-students')!==null) {
  var userLocalStorage = JSON.parse(localStorage.getItem('data-students'));
  textHtmlStudents = `<tr> <th>ID</th> <th>Name</th> <th>DOB</th> <th>Phone Number</th></tr>`;
  for (element in userLocalStorage) {
    textHtmlStudents += `<tr> <td>${userLocalStorage[element].idnumberStudent} </td> <td>${userLocalStorage[element].nameStudent}</td> <td>${userLocalStorage[element].dobStudent}</td> <td>${userLocalStorage[element].phonenumberStudent}</td> </tr>`;
  }
  document.getElementById("table-students").innerHTML=textHtmlStudents;
}

document.getElementById('btn-login').onclick = () => {
  const accUser = document.getElementById('account-name').value;
  const passUser = document.getElementById('password').value;
  if (accUser === '') {
    document.getElementById('alert-1').innerHTML = 'Tài khoản không được để trống';
    document.getElementById('alert-1').style.display = 'block';
  }
  if (passUser === '') {
    document.getElementById('alert-2').innerHTML = 'Mật khẩu không được để trống';
    document.getElementById('alert-2').style.display = 'block';
  }
  else {
    const checkAccName = arrAccount.map(({ name }) => name).findIndex(element => element === accUser);
    const checkPass = arrAccount.map(({ password }) => password).findIndex(element => element === passUser);
    document.getElementById('alert-1').innerHTML = '';
    document.getElementById('alert-2').innerHTML = '';
    if (checkAccName === -1) {
      document.getElementById('alert-1').innerHTML = 'Sai tài khoản vui lòng kiểm tra lại';
      document.getElementById('alert-1').style.display = 'block';
    }
    if (checkPass === -1) {
      document.getElementById('alert-2').innerHTML = 'Sai mật khẩu vui lòng kiểm tra lại';
      document.getElementById('alert-2').style.display = 'block';
    }
    else {
      alert("Đăng nhập thành công!");
      document.getElementById('account-name').value='';
      document.getElementById('password').value='';
      document.getElementById("container-modal").style.display = "none";
      document.getElementById("register-form").style.display = "block";
      localStorage.setItem('login-status', 'successful');
    }
  }
}

function resetInputValue() {
  $('#idnumber')[0].value='';
  $('#name')[0].value='';
  $('#dob')[0].value='';
  $('#phonenumber')[0].value='';
}


document.getElementById('insert-student').onclick = () => {
  const validationRule = {
    idNumber: { minlength: 9, maxlength: 12, isRequired: true, regExPattern: '', isNumber: true },
    name: { minlength: 4, maxlength: 20, isRequired: true, regExPattern: '', isNumber: false },
    dob: { isRequired: true, regExPattern: '', isNumber: false },
    phoneNumber: { minlength: 10, maxlength: 11, isRequired: true, regExPattern: '', isNumber: true },
  };

  const idNumber = $('#idnumber')[0].value;
  const name = $('#name')[0].value;
  const dob = $('#dob')[0].value;
  const phoneNumber = $('#phonenumber')[0].value;
  let count = 0;
  dataStudent.push(idNumber);
  dataStudent.push(name);
  dataStudent.push(dob);
  dataStudent.push(phoneNumber);

  const fieldValue = {
    idNumber: idNumber,
    name: name,
    dob: dob,
    phoneNumber: phoneNumber,
  };
  const arrayFieldValid = Object.keys(fieldValue).map((keyItem) => {
    if (!fieldValue[keyItem] && validationRule[keyItem].isRequired) {
      return false;
    }
    // if (
    //   fieldValue[keyItem] < validationRule[keyItem].min ||
    //   fieldValue[keyItem] > validationRule[keyItem].max
    // ) {
    //   return false;

    // }

    if (
      fieldValue[keyItem].length < validationRule[keyItem].minlength ||
      fieldValue[keyItem].length > validationRule[keyItem].maxlength
    ) {
      return false;

    }
    if (isNaN(fieldValue[keyItem]) && validationRule[keyItem].isNumber === true) {
      return false;

    }
    count++;
    return true;

  });



  console.log("🚀 ~ file: script.js ~ line 38 ~ arrayFieldValid ~ arrayFieldValid", arrayFieldValid)

  if (count === 4) {
    if (arrStudents.length < 1) {
      arrStudents.push(new student(idNumber, name, dob, phoneNumber));
      alert("Thêm thành công!");
      resetInputValue();
    }
    else {
      let indexStudent = arrStudents.findIndex(element => element.idnumberStudent === idNumber);
      if (indexStudent !== -1) {
        arrStudents[indexStudent].nameStudent = name;
        arrStudents[indexStudent].dobStudent = dob;
        arrStudents[indexStudent].phonenumberStudent = phoneNumber;
        alert("Số cccd đã tồn tại.Sửa dữ liệu thành công!");
        resetInputValue();
      } else {
        arrStudents.push(new student(idNumber, name, dob, phoneNumber));
        alert("Thêm thành công!");
        resetInputValue();
      }
    }
  }
  else{
    alert("Vui lòng nhập đúng định dạng.");
  }

}

document.getElementById("submit-student").onclick = () => {
  if(textHtmlStudents===''){
  textHtmlStudents = `<tr> <th>ID</th> <th>Name</th> <th>DOB</th> <th>Phone Number</th></tr>`;
  }
  localStorage.setItem('data-students', JSON.stringify(arrStudents));
  for (element in arrStudents) {
    textHtmlStudents += `<tr> <td>${arrStudents[element].idnumberStudent} </td> <td>${arrStudents[element].nameStudent}</td> <td>${arrStudents[element].dobStudent}</td> <td>${arrStudents[element].phonenumberStudent}</td> </tr>`;
  }
  document.getElementById("table-students").innerHTML=textHtmlStudents;
}


document.getElementById("log-out").onclick = () => {
  alert("Đăng xuất thành công!");
      document.getElementById("container-modal").style.display = "flex";
      document.getElementById("register-form").style.display = "none";
  localStorage.removeItem('login-status');

}
