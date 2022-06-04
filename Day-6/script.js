// Biến BÀI 1 -----------------------------------------------------
const students = ['thuận', 'vũ', 'toàn', 'quang', 'thành', 'hoàng', 'tùng', 'trường'];
let newStudent = new Array(5);
// Biến BÀI 2 -----------------------------------------------------
let amountSpent = new Array();
let variable;
let index = 1;
const initialValue = 0;

// Biến BÀI 3 ----------------------------------------------------
const arrEx = [1, -2, 3, 4, -9, 6, 5, 2, 6, 7, 0, 3, 5, 3, -6, 4, -7];
const maxOfArray = arrEx.reduce(
  (previousValue, currentValue) => previousValue > currentValue ? previousValue : currentValue,
);
const indexMax = arrEx.findIndex(element => element === maxOfArray);
const newArrEx = arrEx.slice(indexMax - 2, indexMax + 3);

// Biến BÀI 4 ------------------------------
const textContent = "Pokémon (Nhật: ポケモン Hepburn: Pokemon?) (tiếng Anh: /ˈpoʊkɪˌmɒn, -ki-, -keɪ-/)[1][2] còn được gọi là Pocket Monsters (Nhật: ポケットモンスター Hepburn: Poketto Monsutā?, n.đ Quái vật bỏ túi) tại Nhật Bản, là thương hiệu nhượng quyền truyền thông được quản lý bởi The Pokémon Company, một tập đoàn Nhật Bản giữa Nintendo, Game Freak và Creatures. [3] Bản quyền nhượng quyền được chia sẻ bởi cả ba công ty, nhưng Nintendo là chủ sở hữu duy nhất của nhãn hiệu này. [4] Nhượng quyền được tạo bởi Satoshi Tajiri vào năm 1999,[5] và tập trung vào các sinh vật hư cấu gọi là \"Pokémon\", mà con người, được gọi là Pokémon Trainers (Tiếng Việt gọi là Những nhà huấn luyện Pokémon), bắt và huấn luyện để chiến đấu với nhau để chơi thể thao. Khẩu hiệu tiếng Anh cho nhượng quyền thương mại là \"Gotta Catch 'Em All\". [6][7] Các tác phẩm trong thương hiệu nhượng quyền thương mại được đặt trong vũ trụ Pokémon."
let pos = 0;
let countVar = 0;
////////////// Đây là bài 1.
const lessonOne = () => {
  alert("OK");
  console.log("Bài 1 --------------------------------------------------------");

  console.log(students);
  students.push('Melody Mask');
  students.unshift('Ms.Puiyi');
  console.log("🚀 ~ Mảng sau khi thêm giá trị đầu và cuối ", students);
  students.fill('Yui Hatano', 3, 4);
  console.log("🚀 ~ Mảng sau khi thêm Yui Hatano vào index 3 ", students);
  const indexStudent = Math.floor(Math.random() * 5);
  newStudent = students.slice(indexStudent, indexStudent + 5);
  students.splice(indexStudent, 5);
  console.log("🚀 ~ 5 giá trị liền kề khi tách ", newStudent);
  console.log("🚀 ~ Mảng còn lại sau khi tách 5 giá trị ", students);
}




///Hàm này là để nhập giá trị bài 2
function getAmountSpent() {
  do {
    variable = prompt('Nhập vào chi tiêu thứ ' + index + ' của bạn : ');
    index++;
    if (variable === "Done" ) {
      alert("Bạn đã nhập xong các khoản chi tiêu và giờ tôi sẽ tính tổng cộng cho bạn.");
      break;
    }
    amountSpent.push(+variable);
    if (isNaN(variable) || variable === ''|| variable === null) {
      alert("Có vẻ như bạn đã nhập chữ hoặc không nhập gì. Vui lòng nhập lại từ đầu.");
      amountSpent = new Array();
      index = 1;
    }

  } while (true)
}

///Hàm này để tính tổng.
function sumOfArray(arrayValue) {
  const sumWithAmount = arrayValue.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  return sumWithAmount;
}

////////////// Đây là bài 2.
const lessonTwo = () => {
  console.log("Bài 2 --------------------------------------------------------");
  getAmountSpent();
  console.log("Tổng số chi tiêu của bạn là : " + sumOfArray(amountSpent) + " Đồng.");
  alert("Tổng số chi tiêu của bạn là : " + sumOfArray(amountSpent) + " Đồng.");
  amountSpent = new Array();
  index = 1;
}


////////////// Đây là bài 3.
const lessonThree = () => {
  console.log("Bài 3 ---------------------------------------------------------");
  alert("Tổng 2 số trước và sau số lớn nhất trong mảng là : " + (sumOfArray(newArrEx) - maxOfArray));
  console.log("Mảng cho trước : " + arrEx);
  console.assert("Số lớn nhất trong mảng là " + maxOfArray);
  console.log("2 liền trước và 2 số liền sau số lớn nhất : " + newArrEx);
  console.log("Tổng 2 số trước và sau số lớn nhất trong mảng là : " + (sumOfArray(newArrEx) - maxOfArray));
}

////////////// Đây là bài 4.
const lessonFour = () => {
  countVar = 0;
  let index = 0;
  do {
    pos = textContent.indexOf("Pokémon", index);
    if (pos < 0) break;
    index = pos + 1;
    countVar++;
  } while (true);
  alert("Từ Pokémon xuất hiện " + countVar + " lần trong đoạn văn đã cho");
  console.log("Từ Pokémon xuất hiện " + countVar + " lần trong đoạn văn đã cho");
  alert("Sau đây tôi sẽ chia đoạn text này thành từng câu, và viết lên màn hình từng dòng đó bằng write. ");
  const arrText = textContent.split(". ");
  const myWindow = window.open();
  for (let i = 0; i < arrText.length; i++) {
    myWindow.document.write(arrText[i] + ".<br>");

  }
}












