
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
  //     seniority = prompt('Please! Enter your seniority(Thâm Niên) : ') - 0;
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
        console.log('Thưởng trình độ Senior chức vụ Teamlead và Thâm niên dưới 3 năm: 500.000 Đồng.');
        totalSalary += 500000;
      }
      if ((seniority >= 3) && (seniority < 5)) {
        console.log('Thưởng trình độ Senior chức vụ Teamlead và Thâm niên trên 3 năm: 2.000.000 Đồng.');
        totalSalary += 2000000;
      }
      if ((seniority >= 5) && (seniority < 8)) {
        console.log('Thưởng trình độ Senior chức vụ Teamlead và Thâm niên trên 5 năm: 5.000.000 Đồng.');
        totalSalary += 5000000;
      }
      if (seniority >= 8) {
        console.log('Thưởng trình độ Senior chức vụ Teamlead và Thâm niên trên 8 năm: 10.000.000 Đồng.');
        totalSalary += 10000000;
      }
    }
    if ((position === 'PM') || (position === 'pm')) {
      if ((seniority >= 5) && (seniority < 8)) {
        console.log('Thưởng chức vụ PM và Thâm niên trên 5 năm(5% totalSalary): ' + totalSalary * 5 / 100 + ' Đồng.');
        totalSalary += totalSalary * 5 / 100;
      }
      if (seniority >= 8) {
        console.log('Thưởng chức vụ PM và Thâm niên trên 8 năm(6% totalSalary): ' + totalSalary * 6 / 100 + ' Đồng.');
        totalSalary += totalSalary * 6 / 100;
      }
    }
  }

  // getInfor();
  console.log('Lương Trình Độ' + '(' + level + ')' + ': ' + getSalaryBasic() + ' Đồng.');
  console.log('Lương Chức Vụ' + '(' + position + ')' + ': ' + getSalaryBonusPosition() + ' Đồng.');
  console.log('Lương Thâm Niên' + '(' + seniority + ')' + ': ' + getSalaryBonusSeniority() + ' Đồng.');
  calculateSalary();
  console.log('Tổng Cộng: ' + totalSalary + ' Đồng.');
  console.log('-----------------------------------------------------');
  alert('Receive Total Salary : ' + totalSalary + ' Đồng.');
}

document.getElementById("division").onclick = () => {
  console.log('Những số chia hết cho 4 mà không chia hết cho 8 và bé hơn 200 là: ')
  for (let i = 0; i < 200; i++) if ((i % 4 === 0) && (i % 8 !== 0)) console.log(i);
  console.log('-----------------------------------------------------');
  alert('Đã in ra các số theo yêu cầu.');
}



document.getElementById("array-ex").onclick = () => {
  let arr = [2, 3, 5, 6, 3, 6, 8, 7, 3, 1, 2, 5, 7, 8, 4];
  console.log('Mảng khi chưa sắp xếp : ' + arr);

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

  console.log('Mảng sau khi sắp xếp : ' + arr);
  console.log('Tổng các giá trị trong mảng : ' + totalarr);
  alert('Đã sắp xếp và tính tổng theo yêu cầu.');

}




