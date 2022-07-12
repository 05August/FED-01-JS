
const $ = (selector) => document.querySelectorAll(selector);
let textScreen = '';
let textCulcalator = '';



$('.buttons').forEach(element => element.onclick = () => {

  if (textScreen.length < 21) { //check độ dài của số xem có tràn mh hay không
    switch (true) {
      
      case (element.innerHTML === '/' || element.innerHTML === '*'|| element.innerHTML ==='exp'|| element.innerHTML === '%')&&(textScreen.length< 1):
        console.log(1);
        $('#calculator-screen-text')[0].innerHTML ='Cần có tham số ở trước.';
        break;

      case element.innerHTML === '.':
        if (textScreen.length < 1) {
          textScreen += '0.';
          textCulcalator+='0.';
          $('#calculator-screen-text')[0].innerHTML = textScreen;
        }
        else {
          if (textScreen[textScreen.length - 1] !== '.') {
            textScreen += '.';
            textCulcalator +='.';
            $('#calculator-screen-text')[0].innerHTML = textScreen;
          }
        }
        break;

      case element.innerHTML === 'del':
        if (textScreen.length <= 1) {
          textScreen = '';
          textCulcalator ='';
          $('#calculator-screen-text')[0].innerHTML = '0';
        } else {
          textScreen=textScreen.slice(0,-1);
          if(textCulcalator.slice(-1)==='*'){
            textCulcalator=textCulcalator.slice(0,-2);
          }else{
            textCulcalator=textCulcalator.slice(0,-1);
          }
          $('#calculator-screen-text')[0].innerHTML = textScreen;
        }
        break;

      case element.innerHTML === 'C':
        textScreen = '';
        textCulcalator = '';
        $('#calculator-screen-text')[0].innerHTML = '0';
        break;

      case element.innerHTML === 'exp':
        textScreen += '^';
        textCulcalator += '**';
        $('#calculator-screen-text')[0].innerHTML = textScreen;
        
        break;

      case element.innerHTML === '=':
        textScreen =''+ Math.round(eval(textCulcalator)*100)/100;
        textCulcalator =''+ textScreen;
        $('#calculator-screen-text')[0].innerHTML = textScreen;
        break;

      case element.innerHTML === '%':
        //Đoạn này em có nghĩ đến bug tràn màn hình , em định if 1 cái length của textScreen<18 mới cho chạy cái dưới còn cái tràn màn hình chưa biết làm sao cho hợp lí.
        textScreen =Math.round(eval(textCulcalator)*10000)/100 +'%';
        $('#calculator-screen-text')[0].innerHTML = textScreen;
        break;

      default:
        if((element.innerHTML==='-'&&textCulcalator.slice(-1)==='-')||(element.innerHTML==='+'&&textCulcalator.slice(-1)==='+')){
          textCulcalator=textCulcalator.slice(0,-1);
          if(textCulcalator.slice(-1)!=='+'){
          textCulcalator+='+';
          }
        }
        else{
          textCulcalator += element.innerHTML;
        }
        textScreen += element.innerHTML;
        $('#calculator-screen-text')[0].innerHTML = textScreen;
        break;

    }
    console.log(textCulcalator);
  }
})