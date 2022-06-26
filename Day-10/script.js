const validationRule = {
  username: { min: 4, max: 8, isRequired: true, regExPattern: '' },
  password: { min: 6, max: 9, isRequired: true, regExPattern: '' },
  phoneNumber: { min: 10, max: 11, isRequired: true, regExPattern: '',isNumber: true,name },
  address: { min: 10, max: 60, isRequired: true, regExPattern: '' },

};

document.getElementById('submit').onclick = () => {

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const phoneNumber = document.getElementById('phonenumber').value;
  const address = document.getElementById('address').value;



  const fieldValue = {
    username: username,
    password: password,
    phoneNumber: phoneNumber,
    address: address,
  };
  const arrayFieldValid = Object.keys(fieldValue).map((keyItem) => {
    if (!fieldValue[keyItem] && validationRule[keyItem].isRequired) {
      return false;
    }

    if (
      fieldValue[keyItem].length < validationRule[keyItem].min ||
      fieldValue[keyItem].length > validationRule[keyItem].max
    ) {
      return false;
    }
    if(isNaN)

    return true;
  });
  console.log("🚀 ~ file: script.js ~ line 38 ~ arrayFieldValid ~ arrayFieldValid", arrayFieldValid)
}