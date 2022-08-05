let arrName=new Array();
let index=0;
let amount;
function isAmount(number){
  if(isNaN(number)||number===''||number===null){
    return false;
  }else{
    if(number>=3&&number<=10){
      return true;
    }
    return false;
  }
}


// do{
//   amount= prompt("Nhập vào số lượng tên (min 3 max 10): ")-0;
// }while(!isAmount(amount));

// do{
//   let nameInput=prompt(`Nhập vào tên bạn thứ ${index+1}: `);
//   if(nameInput!==null&&nameInput!==''){
//     arrName.push(nameInput);
//     index++;
//   }
// }while(index!==amount);

document.getElementById("random-select").onclick=() => {
  let numberRandom=Math.floor(Math.random()*amount);
  document.getElementById("text").textContent=arrName[numberRandom];
}
