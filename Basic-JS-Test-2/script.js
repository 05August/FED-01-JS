const $ = (selector) => document.getElementById(selector);
let listNotify = new Array();
listNotify=JSON.parse(localStorage.getItem('notify-list'));
let textHtmlNotify = '';


const isFutureDay = (notifyDay) => {
  const today = new Date();
  return today.setHours(0, 0, 0, 0) <= notifyDay.setHours(0, 0, 0, 0) ? true : false;
}

const isToday = (notifyDay) => {
  const today = new Date();
  return today.setHours(0, 0, 0, 0) === notifyDay.setHours(0, 0, 0, 0) ? true : false;
}




const deleteItem = () => {
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      var indexOfListNotify =div.getAttribute('index');
      if(isToday(new Date(listNotify[indexOfListNotify].date[0], listNotify[indexOfListNotify].date[1] - 1, listNotify[indexOfListNotify].date[2]))){
        $('today-notify').innerHTML="";
      }
      listNotify = listNotify.filter(element => element.content !== listNotify[indexOfListNotify].content);
      insertNotify();
    }
  }
}






const insertNotify = () => {
  textHtmlNotify = '';
  for (let i = 0; i < listNotify.length; i++) {
    if (isToday(new Date(listNotify[i].date[0], listNotify[i].date[1] - 1, listNotify[i].date[2]))) {
      textHtmlNotify += `<div class="item today" index="${i}">Ngày ${listNotify[i].date[2]}/${listNotify[i].date[1]}/${listNotify[i].date[0]} <p>${listNotify[i].content}</p><span class="close">x</span></div>`;
      $('today-notify').innerHTML=`<div><p>${listNotify[i].content}</p></div>`;
    } else {
      textHtmlNotify += `<div class="item" index="${i}">Ngày ${listNotify[i].date[2]}/${listNotify[i].date[1]}/${listNotify[i].date[0]} <p>${listNotify[i].content}</p><span class="close">x</span></span></div>`;
    }
  }
  $('notify-list').innerHTML = textHtmlNotify;
  localStorage.setItem('notify-list', JSON.stringify(listNotify));
  deleteItem();
}

if(JSON.parse(localStorage.getItem('notify-list'))!==null){
  listNotify=JSON.parse(localStorage.getItem('notify-list'));
  insertNotify();
}

$('btnSave').onclick = function () {
  const content = $('notify-content').value;
  const day = $('notify-day').value;
  const arrDay = day.split("-");
  if (content === '') {
    $('error-alert-content').style.display = 'block';
  }
  if (day === '') {
    $('error-alert-day').style.display = 'block';
  }
  if (!isFutureDay(new Date(arrDay[0], arrDay[1] - 1, arrDay[2]))) {
    $('error-alert-day').style.display = 'block';
    $('error-alert-day').innerHTML = 'Bạn lựa chọn ngày nhắc chưa phù hợp';
  }
  else {
    $('error-alert-content').style.display = 'none';
    $('error-alert-day').style.display = 'none';
    listNotify.push({ content: content, date: arrDay });
    insertNotify();
    var array = Object.keys(document.getElementsByTagName('input'))
      .map(function (key) {
        return document.getElementsByTagName('input')[key];
      });
    array.forEach(element => element.value = '');

  }
  deleteItem();
}

if(listNotify.length > 0){
  listNotify = listNotify.filter(element => isFutureDay(new Date(element.date[0], element.date[1] - 1, element.date[2])));
  insertNotify();

}
