let index=0;


const listQuestion = [
  {
    contentQuestion:"Bạn có phải là đàn ông không?",
    selectYes:1,
    selectNo:2
  },
  {
    contentQuestion:"Bạn có bạn gái rồi phải không?",
    selectYes:3,
    selectNo:4
  },
  {
    contentQuestion:"Bạn có bạn trai rồi phải không?",
    selectYes:5,
    selectNo:6
  },
  {
    contentQuestion:"Hai bạn đã hôn chưa?",
    selectYes:7,
    selectNo:8
  },
  {
    contentQuestion:"Bạn không biết tán gái?",
    selectYes:9,
    selectNo:10
  },
  {
    contentQuestion:"Hai bạn đã đẩy xe bò với nhau chưa?",
    selectYes:11,
    selectNo:12
  },
  {
    contentQuestion:"Có người đang tán bạn?",
    selectYes:13,
    selectNo:14
  },
  {
    contentQuestion:"Bạn có định tiến xa hơn không?",
    selectYes:15,
    selectNo:15
  },
  {
    contentQuestion:"Bạn có bị yếu sinh lý không?",
    selectYes:15,
    selectNo:15
  },
  {
    contentQuestion:"Bạn có đang thích ai không?",
    selectYes:15,
    selectNo:15
  },
  {
    contentQuestion:"Bạn có giàu không?",
    selectYes:15,
    selectNo:15
  },
  {
    contentQuestion:"Bạn định lấy chồng trong năm nay không?",
    selectYes:15,
    selectNo:15
  },
  {
    contentQuestion:"Bạn định chia tay không?",
    selectYes:15,
    selectNo:15
  },
  {
    contentQuestion:"Bạn có thích người đó không?",
    selectYes:15,
    selectNo:15
  },
  {
    contentQuestion:"Bạn có đang thích ai không?",
    selectYes:15,
    selectNo:15
  },
  {
    contentQuestion:"Hết rồi mai chơi tiếp nhé!",
    selectYes:15,
    selectNo:15
  }

]

const changeQuestion=(numberQuestion)=>{
  let nextQuestion;
  if(numberQuestion===1){
    nextQuestion=listQuestion[index].selectYes;
  }
  if(numberQuestion===2){
    nextQuestion=listQuestion[index].selectNo;
  }
  index=nextQuestion;
  document.getElementById("quiz-questions").innerHTML= listQuestion[index].contentQuestion;
}

const handleInputYes=()=>{
  if(index===15){
    alert("Đóng hộ cái tab với .");
  }
  changeQuestion(1);
}

const handleInputNo=()=>{
  if(index===15){
    alert("Biểu mai chơi rồi mà còn lì rứa bây .");
  }
  changeQuestion(2);
}

document.getElementById("button-yes").onclick = handleInputYes;
document.getElementById("button-no").onclick = handleInputNo;







