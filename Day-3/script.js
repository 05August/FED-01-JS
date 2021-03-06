
document.getElementById("salary").onclick = () => {
  let level;
  let position;
  let seniority;
  let totalSalary;


  const typeValueEmployee = (contentPrompt, isNumber, caseArray) => {
    let isValid = false;
    do {
      value = prompt(contentPrompt);
      if (caseArray) {
        switch (value) {
          case caseArray[0]:
          case caseArray[1]:
          case caseArray[2]:
          case caseArray[3]:
            isValid = true;
            break;
          default:
            isValid = false;
        }
      }
      else{
        isValid = true;
        if(value){
          if(isNumber&& !isNaN(+value)){
            isValid = true;
          }
          else isValid=false;
        }
        else{
          isValid = false;
        }
      }
    }
    while (!isValid);
    return value;
  }


  level=typeValueEmployee('Please! Enter your level(Fresher, Junior, Middle, Senior) : ',false,['Fresher','Junior','Middle','Senior']);
  position=typeValueEmployee('Please! Enter your position(Member, Trainer, Teamlead, PM) : ',false,['Member','Teamlead','PM','Trainer']);
  seniority=typeValueEmployee('Please! Enter your seniority(>=0) : ',true);
  // function getInfor() {
  //   checkLevel = checkPosition = checkSeniority = 0;
  //   do {
  //     if (checkLevel > 0) {
  //       alert('You entered incorrectly, please re-enter(Fresher, Junior, Middle, Senior):')
  //     }
  //     level = prompt('Please! Enter your level(Fresher, Junior, Middle, Senior) : ');
  //     checkLevel++;
  //   }
  //   while ((level !== 'Fresher') && (level !== 'Junior') && (level !== 'Middle') && (level !== 'Senior') && (level !== 'junior') && (level !== 'fresher') && (level !== 'middle') && (level !== 'senior'));


  //   do {
  //     if (checkPosition > 0) {
  //       alert('You entered incorrectly, please re-enter(Member, Trainer, Teamlead, PM):')
  //     }
  //     position = prompt('Please! Enter your position(Member, Trainer, Teamlead, PM) : ');
  //     checkPosition++;
  //   }
  //   while ((position !== 'Member') && (position !== 'Trainer') && (position !== 'Teamlead') && (position !== 'PM') && (position !== 'trainer') && (position !== 'member') && (position !== 'teamlead') && (position !== 'pm'));


  //   do {
  //     if (checkSeniority > 0) {
  //       alert('You entered incorrectly, please re-enter(Seniority >=0):')
  //     }
  //     seniority = prompt('Please! Enter your seniority(Th??m Ni??n) : ') - 0;
  //     checkSeniority++;
  //   }
  //   while (seniority < 0)
  // }

  function getSalaryBasic() {
    let salaryBasic;
    switch (level) {
      case 'fresher':
      case 'Fresher':
        salaryBasic = 8000000;
        break;
      case 'junior':
      case 'Junior':
        salaryBasic = 10000000;
        break;
      case 'middle':
      case 'Middle':
        salaryBasic = 15000000;
        break;
      case 'senior':
      case 'Senior':
        salaryBasic = 20000000;
        break;
      default:
    }
    return salaryBasic;
  }

  function getSalaryBonusPosition() {
    let salaryBonusPosition;
    switch (position) {
      case 'member':
      case 'Member':
        salaryBonusPosition = 0;
        break;
      case 'trainer':
      case 'Trainer':
        salaryBonusPosition = 1000000;
        break;
      case 'teamlead':
      case 'Teamlead':
        salaryBonusPosition = 3000000;
        break;
      case 'pm':
      case 'PM':
        salaryBonusPosition = 8000000;
        break;
      default:
    }
    return salaryBonusPosition;
  }

  function getSalaryBonusSeniority() {
    let salaryBonusSeniority;
    if ((seniority >= 0) && (seniority < 3)) salaryBonusSeniority = 0;
    if ((seniority >= 3) && (seniority < 5)) salaryBonusSeniority = 500000;
    if ((seniority >= 5) && (seniority < 8)) salaryBonusSeniority = 2000000;
    if (seniority >= 8) salaryBonusSeniority = 4000000;
    return salaryBonusSeniority;
  }

  function calculateSalary() {
    totalSalary = getSalaryBasic() + getSalaryBonusSeniority() + getSalaryBonusPosition();
    if ((level === 'Senior') && (position === 'Teamlead') || (level === 'senior') && (position === 'teamlead') || (level === 'Senior') && (position === 'teamlead') || (level === 'senior') && (position === 'Teamlead')) {
      if (seniority < 3) {
        console.log('Th?????ng tr??nh ????? Senior ch???c v??? Teamlead v?? Th??m ni??n d?????i 3 n??m: 500.000 ?????ng.');
        totalSalary += 500000;
      }
      if ((seniority >= 3) && (seniority < 5)) {
        console.log('Th?????ng tr??nh ????? Senior ch???c v??? Teamlead v?? Th??m ni??n tr??n 3 n??m: 2.000.000 ?????ng.');
        totalSalary += 2000000;
      }
      if ((seniority >= 5) && (seniority < 8)) {
        console.log('Th?????ng tr??nh ????? Senior ch???c v??? Teamlead v?? Th??m ni??n tr??n 5 n??m: 5.000.000 ?????ng.');
        totalSalary += 5000000;
      }
      if (seniority >= 8) {
        console.log('Th?????ng tr??nh ????? Senior ch???c v??? Teamlead v?? Th??m ni??n tr??n 8 n??m: 10.000.000 ?????ng.');
        totalSalary += 10000000;
      }
    }
    if ((position === 'PM') || (position === 'pm')) {
      if ((seniority >= 5) && (seniority < 8)) {
        console.log('Th?????ng ch???c v??? PM v?? Th??m ni??n tr??n 5 n??m(5% totalSalary): ' + totalSalary * 5 / 100 + ' ?????ng.');
        totalSalary += totalSalary * 5 / 100;
      }
      if (seniority >= 8) {
        console.log('Th?????ng ch???c v??? PM v?? Th??m ni??n tr??n 8 n??m(6% totalSalary): ' + totalSalary * 6 / 100 + ' ?????ng.');
        totalSalary += totalSalary * 6 / 100;
      }
    }
  }

  // getInfor();
  console.log('L????ng Tr??nh ?????' + '(' + level + ')' + ': ' + getSalaryBasic() + ' ?????ng.');
  console.log('L????ng Ch???c V???' + '(' + position + ')' + ': ' + getSalaryBonusPosition() + ' ?????ng.');
  console.log('L????ng Th??m Ni??n' + '(' + seniority + ')' + ': ' + getSalaryBonusSeniority() + ' ?????ng.');
  calculateSalary();
  console.log('T???ng C???ng: ' + totalSalary + ' ?????ng.');
  console.log('-----------------------------------------------------');
  alert('Receive Total Salary : ' + totalSalary + ' ?????ng.');
}

document.getElementById("division").onclick = () => {
  console.log('Nh???ng s??? chia h???t cho 4 m?? kh??ng chia h???t cho 8 v?? b?? h??n 200 l??: ')
  for (let i = 0; i < 200; i++) if ((i % 4 === 0) && (i % 8 !== 0)) console.log(i);
  console.log('-----------------------------------------------------');
  alert('???? in ra c??c s??? theo y??u c???u.');
}



document.getElementById("array-ex").onclick = () => {
  let arr = [2, 3, 5, 6, 3, 6, 8, 7, 3, 1, 2, 5, 7, 8, 4];
  console.log('M???ng khi ch??a s???p x???p : ' + arr);

  // function swapTwoNumber(numberA, numberB){
  //   let x = numberA;
  //   numberA = numberB;
  //   numberB = x;
  //   console.log(numberA, numberB);
  // }

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        let x = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = x;
      }
    }
  }



  let totalarr = 0;
  for (let i = 0; i < arr.length; i++) totalarr += arr[i];

  console.log('M???ng sau khi s???p x???p : ' + arr);
  console.log('T???ng c??c gi?? tr??? trong m???ng : ' + totalarr);
  alert('???? s???p x???p v?? t??nh t???ng theo y??u c???u.');

}




