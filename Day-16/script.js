const userObject = {

  name: 'Lộc',

  greeting: function () {

    return `Xin chào ${this.name}`;

  },

};

const studentObject = {

  name: 'Thành',

  moveBy: function (a) {

    return `${this.name} di chuyển bằng ${a}`;
  },
}

studentObject.moveBy=function(a,b,c){
  return `${this.name} di chuyển bằng ${a} và ${b} và ${c}`;
};

const thanhDiChuyenBangXeMay = studentObject.moveBy.call(userObject,'xe may','xe dap','may bay');
userObject.age='18';
studentObject.calculatorAge= function(){
  return this.age;
}
const ageUser=studentObject.calculatorAge.bind(userObject)();

const arrBtn = document.querySelector('button');
function testThis() {
  // e && e.preventDefault();
  this.textContent='Đang Click Me';
}
// let test =function(){
//   for(let i=0;i<arrBtn.length;i++){
//     arrBtn[i].onclick=function (){
//       testThis();
//       console.log('2');
//     }
//   }
// }

