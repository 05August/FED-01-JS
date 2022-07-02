

const validationRule = {
  username: { min: 4, max: 8, isRequired: true, regExPattern: '', isNumber: false },
  password: { min: 6, max: 9, isRequired: true, regExPattern: '', isNumber: false },
  phoneNumber: { min: 10, max: 11, isRequired: true, regExPattern: '', isNumber: true },
  address: { min: 10, max: 60, isRequired: true, regExPattern: '', isNumber: false },

};

document.getElementById('submit').onclick = () => {
  const username = $('#username').value;
  const password = $('#password').value;
  const phoneNumber = $('#phonenumber').value;
  const address = $('#address').value;



  const fieldValue = {
    username: username,
    password: password,
    phoneNumber: phoneNumber,
    address: address,
  };
  const arrayFieldValid = Object.keys(fieldValue).map((keyItem) => {
    if (!fieldValue[keyItem] && validationRule[keyItem].isRequired) {
      return { [keyItem]: false };

    }

    if (
      fieldValue[keyItem].length < validationRule[keyItem].min ||
      fieldValue[keyItem].length > validationRule[keyItem].max
    ) {
      return { [keyItem]: false };

    }
    if (isNaN(fieldValue[keyItem]) && validationRule[keyItem].isNumber === true) {
      return { [keyItem]: false };

    }

    return { [keyItem]: true };
  });
  console.log("🚀 ~ file: script.js ~ line 38 ~ arrayFieldValid ~ arrayFieldValid", arrayFieldValid)
}