


window.localStorage.setItem("indexPage", "0");

const validateEmail = (input) => {
  if (String(input)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) !== null) return true;
  else {
    if (input == null || input == "") {
      // alert("Email can't be blank");
      return false;
    }
    alert("Email is not a valid email address.");
    return false;
  }
};

const validateAge = (input) => {
  if (input >= 15 && input <= 65) return true;
  else {
    if (input == null || input == "") {
      // alert("Age can't be blank");
      return false;
    }
    alert("Age is not a valid age(15<=Age<=65).");
    return false;
  }
}

const validateName = (input) => {
  if (input == null || input == "") {
    // alert("Name can't be blank");
    return false;
  } else if (input.length < 6) {
    alert("Name must be at least 6 characters long.");
    return false;
  }
  return true;
}

const validatePhoneNumber = (input) => {
  if (input == null || input == "") {
    // alert("PhoneNumber can't be blank");
    return false;
  } else if (input.length < 10) {
    alert("PhoneNumber must be at least 10 characters long.");
    return false;
  }
  return true;
}


const checkValidInput = () => {
  let emailInput = document.getElementById("email").value;
  let nameInput = document.getElementById("fullname").value;
  let ageInput = +document.getElementById("age").value;
  let phoneNumberInput = document.getElementById("phonenumber").value;
  window.localStorage.setItem("emailInput", emailInput);
  window.localStorage.setItem("nameInput", nameInput);
  window.localStorage.setItem("ageInput", ageInput);
  window.localStorage.setItem("phoneNumberInput", phoneNumberInput);

  if(!validateName(nameInput) && !validateEmail(emailInput) && !validateAge(ageInput) && !validatePhoneNumber(phoneNumberInput)){
    alert("Input can't be empty!");
  }
  else{
    if (!validateName(nameInput) || !validateEmail(emailInput) || !validateAge(ageInput) || !validatePhoneNumber(phoneNumberInput)) {
      alert("Input can't be empty!");
    }
    else {
      window.location.assign("./courses.html");
    }
  }
}

const countAmountCourses = () => {

  count = 0;
  validateMoney = 0;
  totalMoney = 0;
  for (let i = 0; i < arrValueCheckbox.length; i++) {
    if (arrValueCheckbox[i].checked === true) {
      count++;
      totalMoney += arrDataCourses[i].coursesPrice;
      if (count < 4) validateMoney += arrDataCourses[i].coursesPrice;
    }
  }
  window.localStorage.setItem("totalMoney", totalMoney);

}

const checkCountAmountCourses = () => {

  countAmountCourses();
  if (count === 4) {
    if (validateMoney > 300) {
      alert("You can only choose up to 3 courses!");
      window.location.reload();
    }
  }
  if (count > 4) {
    alert("Oh sorry you are over the limit!");
    window.location.reload();
  }
}

const checkPageCourses = () => {
  if (count == 0) {
    alert("Please choose a course ");
  }
  else {
    for (let i = 0; i < arrValueCheckbox.length; i++) {
      if (arrValueCheckbox[i].checked === true) {
        arrDataUser.push(arrDataCourses[i]);
      }
    }
    const strArrObj = JSON.stringify(arrDataUser);

    window.localStorage.setItem("arrDataUser", strArrObj);
    window.location.assign("./checkout.html");
  }
}

const insertText = () => {

  for (let i = 0; i < arrData.length; i++) {
    switch (true) {
      case i === 0:
        document.getElementById("index-first").textContent = "1";
        document.getElementById("name-courses-first").textContent = arrData[0].coursesName;
        document.getElementById("price-courses-first").textContent = arrData[0].coursesPrice + "k";
        break;
      case i === 1:
        document.getElementById("index-second").textContent = "2";
        document.getElementById("name-courses-second").textContent = arrData[1].coursesName;
        document.getElementById("price-courses-second").textContent = arrData[1].coursesPrice + "k";
        break;

      case i === 2:
        document.getElementById("index-third").textContent = "3";
        document.getElementById("name-courses-third").textContent = arrData[2].coursesName;
        document.getElementById("price-courses-third").textContent = arrData[2].coursesPrice + "k";
        break;
      case i === 3:
        document.getElementById("index-four").textContent = "4";
        document.getElementById("name-courses-four").textContent = arrData[3].coursesName;
        document.getElementById("price-courses-four").textContent = arrData[3].coursesPrice + "k";
        break;
      default:
        break;
    }
  }
  document.getElementById("name-user").textContent = window.localStorage.getItem("nameInput");
  document.getElementById("email-user").textContent = window.localStorage.getItem("emailInput");
  document.getElementById("age-user").textContent = window.localStorage.getItem("ageInput");
  document.getElementById("phonenumber-user").textContent = window.localStorage.getItem("phoneNumberInput");
  document.getElementById("total-money").textContent = window.localStorage.getItem("totalMoney") + "k";


}

const checkValidateTotalMoney=() => {
  totalMoney=+window.localStorage.getItem("totalMoney");
  if(document.getElementById("coupon").value==="01062022"){
    totalMoney -= 50;
  }
  if (totalMoney > 600 && totalMoney < 1000) {
    alert("Bạn được giảm giá 5% vì tổng số tiền lớn hơn 600k");
    totalMoney = totalMoney * (95 / 100);
  }
  if (totalMoney > 1000) {
    alert("Bạn được giảm giá 10% vì tổng số tiền lớn hơn 1.000k");
    totalMoney = totalMoney * (9 / 10);
  }
  
  document.getElementById("total-money-after").textContent = Math.round(totalMoney) + "k";
}

const checkCoupon = () => {
  totalMoney = +window.localStorage.getItem("totalMoney");
  let valueCoupon = document.getElementById("coupon").value;
  if (valueCoupon === "01062022") {
    alert("Mã giảm giá hợp lệ ,bạn được giảm 50k.");
    totalMoney -= 50;
  }
  else if(valueCoupon === ""){
    alert("Bạn không sử dụng mã giảm giá.");
  }
  else {
    alert("Mã giảm giá không hợp lệ, vui lòng kiểm tra lại.");
    document.getElementById("coupon").value="";
  }
}


const paymentSuccess = () => {
  let momoMethod = document.getElementById("momo").checked;
  let visaMethod = document.getElementById("visa").checked;
  let cashMethod = document.getElementById("cash").checked;
  if(momoMethod===true||visaMethod===true||cashMethod===true){
    alert("Thanh toán thành công . Hóa đơn đã được gửi về email của bạn. Xin cảm ơn!");
    window.location.assign("./register.html");
  }
  else{
    alert("Vui lòng chọn phương thức thanh toán.");
  }
}



const nextPage = () => {
  if (window.localStorage.getItem("indexPage") === '1') {
    checkPageCourses();
  }
  if (window.localStorage.getItem("indexPage") === '0') {
    checkValidInput();
  }
  if (window.localStorage.getItem("indexPage") === '2') {
    paymentSuccess();
  }

};


document.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    nextPage();
  }
});





