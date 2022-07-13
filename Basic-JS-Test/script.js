const $ = (selector) => document.getElementById(selector);
let userName = '';
let points = 0;
let indexQuestion = 1;
$('btn-start').onclick = () => {
  userName = $('name-user').value;
  if (userName === '') {
    alert('Please enter your name!');
  } else {
    $('container-modal').style.display = "none";
    $('my-game').style.display = "block";
    alert(`Xin chào ${userName} , bạn đã săn sàng chưa?`);
  }
}

const arrQuestion = [
  {
    content: 'Đâu là thủ đô của Việt Nam?',
    optionA: 'Hà Nội',
    optionB: 'Cần Thơ',
    optionC: 'Đà Nẵng',
    optionD: 'TP. Hồ Chí Minh',
  },
  {
    content: 'Bệnh gì bác sĩ bó tay?',
    optionA: 'Ung Thư',
    optionB: 'Ngu',
    optionC: 'Gẫy Chân',
    optionD: 'Gẫy Tay',
  },
  {
    content: ' Con gì ăn lửa với nước than?',
    optionA: 'Con Rồng',
    optionB: 'Con Khủng Long',
    optionC: 'Con Chó',
    optionD: 'Con Tàu Lửa',
  },
  {
    content: '1+1=?',
    optionA: 'Bằng 1',
    optionB: 'Bằng 2',
    optionC: 'Bằng 3',
    optionD: 'Bằng 4',
  },
  {
    content: 'Thuận có đẹp chai k?',
    optionA: 'Quá đẹp',
    optionB: 'Số 2 Cần Thơ Không Ai Số 1',
    optionC: 'Có cần phải hỏi câu này không?',
    optionD: 'Lee Min Ho Cần Thơ(gợi ý)',
  },
  {
    content: 'Lớp mình ai đẹp chai nhất?',
    optionA: 'Thầy',
    optionB: 'Vẫn là thầy nhưng ở đáp án B',
    optionC: 'Không khác 2 câu trên nhưng câu này sai',
    optionD: 'không khác câu C nhưng câu này đúng',
  },
  {
    content: ' Con gì ăn lửa với nước than?',
    optionA: 'Con Rồng',
    optionB: 'Con Khủng Long',
    optionC: 'Con Chó',
    optionD: 'Con Tàu Lửa',
  },
  {
    content: ' Con gì ăn lửa với nước than?',
    optionA: 'Con Rồng',
    optionB: 'Con Khủng Long',
    optionC: 'Con Chó',
    optionD: 'Con Tàu Lửa',
  },
  {
    content: ' Con gì ăn lửa với nước than?',
    optionA: 'Con Rồng',
    optionB: 'Con Khủng Long',
    optionC: 'Con Chó',
    optionD: 'Con Tàu Lửa',
  },
  {
    content: ' Con gì ăn lửa với nước than?',
    optionA: 'Con Rồng',
    optionB: 'Con Khủng Long',
    optionC: 'Con Chó',
    optionD: 'Con Tàu Lửa',
  },

];

const arrAnswer = ['a', 'd', 'd', 'b', 'd', 'd', 'd', 'd', 'd', 'd'];

const insertContent = (objectX) => {
  $('points').innerText = points + ' Điểm';
  $('question-oder').innerText = `Câu ${indexQuestion}.`;
  $('question-content').innerText = objectX.content;
  $('option-a-content').innerText = objectX.optionA;
  $('option-b-content').innerText = objectX.optionB;
  $('option-c-content').innerText = objectX.optionC;
  $('option-d-content').innerText = objectX.optionD;
}

$('btn-next').onclick = () => {
  indexQuestion++;
  points++;
  insertContent(arrQuestion[indexQuestion - 1]);
  $('btn-next').style.display = "none";
  alert('Bạn đã sử dụng sự trợ giúp bỏ qua câu hỏi này.');
}

$('btn-excommunicate').onclick = () => {
  let answer = arrAnswer[indexQuestion - 1];
  let newArrAnswer = ['a', 'b', 'c', 'd'].filter(word => word !== answer);
  $(`option-${newArrAnswer[0]}-content`).innerText = '';
  $(`option-${newArrAnswer[2]}-content`).innerText = '';
  $('btn-excommunicate').style.display = "none";
  alert('Bạn đã sử dụng sự trợ giúp 50/50.');

}



$('answer-submit').onclick = () => {
  let arrRadioBtn = document.getElementsByName("answer");
  if (arrRadioBtn[0].checked === true || arrRadioBtn[1].checked === true || arrRadioBtn[2].checked === true || arrRadioBtn[3].checked === true) {
    if ($(`option-${arrAnswer[indexQuestion - 1]}`).checked === true) {
      points++;
      indexQuestion++;
      if (indexQuestion === 10) {
        $('btn-next').style.display = "none";
      }
      if (indexQuestion === 11) {
        alert('Chúc mừng bạn đã chiến thắng trò chơi của chúng tôi . I love diu pặc pặc. nice to meet you . see you again . bai!');
        $('container-modal').style.display = "flex";
        $('my-game').style.display = "none";
        $('btn-next').style.display = "inline-block";
        $('btn-excommunicate').style.display = "inline-block";
        points = 0;
        indexQuestion = 1;
        insertContent(arrQuestion[indexQuestion - 1]);
      } else {
        alert('Xin chúc mừng bạn đã chọn đáp án đúng.');
        insertContent(arrQuestion[indexQuestion - 1]);
      }

    }
    else {
      alert(`Câu trả lời đúng là đáp án ${arrAnswer[indexQuestion - 1]}. Thật đáng tiếc khi phải ra về với số điểm là ${points}. Cảm ơn và hẹn gặp lại bạn ${userName}!`);
      $('container-modal').style.display = "flex";
      $('my-game').style.display = "none";
      $('btn-next').style.display = "inline-block";
      $('btn-excommunicate').style.display = "inline-block";
      points = 0;
      indexQuestion = 1;
      insertContent(arrQuestion[indexQuestion - 1]);
    }
  } else {
    alert("Vui lòng chọn đáp án.");
  }
  arrRadioBtn.forEach(element => element.checked = false);
}