let arrStudents = new Array();
const dataStudent = new Array();
let checkIdNumber = false;
let checkName = false;
let checkDob = false;
let checkPhoneNumber = false;
let textHtmlStudents = '';
const arrAccount = [
  { name: 'admin1', password: '12345678' },
  { name: 'admin', password: 'Aa@123456' },
  { name: 'admin2', password: 'admin123admin' }
]
localStorage.setItem('admin', JSON.stringify(arrAccount));

//tạo class students
class student {
  constructor(idnumber, name, dob, phonenumber) {
    this.idnumberStudent = idnumber;
    this.nameStudent = name;
    this.dobStudent = dob;
    this.phonenumberStudent = phonenumber;
  }
}

//Kiểm tra trạng thái xem còn đăng nhâpj không.

if (localStorage.getItem('login-status') === 'successful') {
  document.getElementById("container-modal").style.display = "none";
  document.getElementById("register-form").style.display = "flex";
}

//kiểm tra data xem có không để in ra
if (localStorage.getItem('data-students') !== null) {
  arrStudents = JSON.parse(localStorage.getItem('data-students'));
  textHtmlStudents = `<tr> <th>ID</th> <th>Name</th> <th>DOB</th> <th>Phone Number</th></tr>`;
  for (element in arrStudents) {
    textHtmlStudents += `<tr> <td>${arrStudents[element].idnumberStudent} </td> <td>${arrStudents[element].nameStudent}</td> <td>${arrStudents[element].dobStudent}</td> <td>${arrStudents[element].phonenumberStudent}</td> </tr>`;
  }
  document.getElementById("table-students").innerHTML = textHtmlStudents;
}

//phần ni của modal
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
      document.getElementById('account-name').value = '';
      document.getElementById('password').value = '';
      document.getElementById("container-modal").style.display = "none";
      document.getElementById("register-form").style.display = "flex";
      localStorage.setItem('login-status', 'successful');
    }
  }
}


//phần ni của form mà chưa hoàn thiện

const alertInput = (idAlert, idInput, textAlert, styleDisplayAlert, colorBorderInput) => {
  document.getElementById(idAlert).innerHTML = textAlert;
  document.getElementById(idAlert).style.display = styleDisplayAlert;
  document.getElementById(idInput).style.borderColor = colorBorderInput;
}

const validateIdNumber = (input) => {
  checkIdNumber = false;
  if (input == null || input == "") {
    alertInput('alert-idnumber', 'idnumber', 'Không được để trống.', 'block', 'red');
  }
  else {
    if (isNaN(input)) {
      alertInput('alert-idnumber', 'idnumber', 'Sai định dạng.', 'block', 'red');
    }
    else {
      if ((input.length === 9) || (input.length === 12)) {
        alertInput('alert-idnumber', 'idnumber', '', 'none', '#ccc');
        checkIdNumber = true;
      }
      else {
        alertInput('alert-idnumber', 'idnumber', 'CMND là 9 số CCCD là 12 số.', 'block', 'red');
      }
    }
  }
}

const validateName = (input) => {
  checkName = false;
  if (input == null || input == "") {
    alertInput('alert-name', 'name', 'Không được để trống.', 'block', 'red');
  } else if (input.trim().length < 6 || input.trim().length > 30) {
    alertInput('alert-name', 'name', 'Tên phải có độ dài lớn hơn 6 và bé hơn 30.', 'block', 'red');
  }
  else {
    checkName = true;
    alertInput('alert-name', 'name', '', 'none', '#ccc');
  }
}

const validateDob = (input) => {
  checkDob = false;
  if (String(input)
    .match(
      /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/
    ) !== null) {
    checkDob = true;
    alertInput('alert-dob', 'dob', '', 'none', '#ccc');
  }
  else {
    if (input == null || input == "") {
      alertInput('alert-dob', 'dob', 'Không được để trống.', 'block', 'red');
    } else {
      alertInput('alert-dob', 'dob', 'Vui lòng nhập đúng định dạng(DD/MM/YYYY).', 'block', 'red');
    }
  }
};

const validatePhoneNumber = (input) => {
  checkPhoneNumber = false;
  if (String(input)
    .match(
      /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/
    ) !== null) {
    checkPhoneNumber = true;
    alertInput('alert-phonenumber', 'phonenumber', '', 'none', '#ccc');
  }
  else {
    if (input == null || input == "") {
      alertInput('alert-phonenumber', 'phonenumber', 'Không được để trống.', 'block', 'red');
    } else {
      alertInput('alert-phonenumber', 'phonenumber', 'Vui lòng nhập đúng định dạng.', 'block', 'red');
    }
  }
}


document.getElementById("idnumber").addEventListener("input", function (e) {
  validateIdNumber(document.getElementById('idnumber').value);
});

document.getElementById("name").addEventListener("input", function (e) {
  validateName(document.getElementById('name').value);
});

document.getElementById("dob").addEventListener("input", function (e) {
  validateDob(document.getElementById('dob').value);
});

document.getElementById("phonenumber").addEventListener("input", function (e) {
  validatePhoneNumber(document.getElementById('phonenumber').value);
});

//phần ni để in ra bảng
const drawTableStudents = () => {
  localStorage.setItem('data-students', JSON.stringify(arrStudents));

  textHtmlStudents = '';
  textHtmlStudents = `<tr> <th>ID</th> <th>Name</th> <th>DOB</th> <th>Phone Number</th></tr>`;
  for (element in arrStudents) {
    textHtmlStudents += `<tr> <td>${arrStudents[element].idnumberStudent} </td> <td>${arrStudents[element].nameStudent}</td> <td>${arrStudents[element].dobStudent}</td> <td>${arrStudents[element].phonenumberStudent}</td> </tr>`;
  }
  document.getElementById("table-students").innerHTML = textHtmlStudents;
}

function resetInputValue() {
  $('#idnumber')[0].value = '';
  $('#name')[0].value = '';
  $('#dob')[0].value = '';
  $('#phonenumber')[0].value = '';
}


document.getElementById('insert-student').onclick = () => {

  const idNumber = $('#idnumber')[0].value;
  const name = $('#name')[0].value;
  const dob = $('#dob')[0].value;
  const phoneNumber = $('#phonenumber')[0].value;

  if ((checkName === true) && (checkIdNumber === true) && (checkDob === true) && (checkPhoneNumber === true)) {
    if (arrStudents.length < 1) {
      arrStudents.push(new student(idNumber, name, dob, phoneNumber));
      alert("Thêm thành công!");
      resetInputValue();
      drawTableStudents();
    }
    else {
      let indexStudent = arrStudents.findIndex(element => element.idnumberStudent === idNumber);
      if (indexStudent !== -1) {
        arrStudents[indexStudent].nameStudent = name;
        arrStudents[indexStudent].dobStudent = dob;
        arrStudents[indexStudent].phonenumberStudent = phoneNumber;
        alert("Số cccd đã tồn tại.Sửa dữ liệu thành công!");
        resetInputValue();
        drawTableStudents();

      } else {
        arrStudents.push(new student(idNumber, name, dob, phoneNumber));
        alert("Thêm thành công!");
        resetInputValue();
        drawTableStudents();
      }
    }
  }
  else {
    alert("Vui lòng kiểm tra lại input.");
  }

}




//phần ni để đăng xuất
document.getElementById("log-out").onclick = () => {
  alert("Đăng xuất thành công!");
  document.getElementById("container-modal").style.display = "flex";
  document.getElementById("register-form").style.display = "none";
  localStorage.removeItem('login-status');

}




