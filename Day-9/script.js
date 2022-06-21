// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const draw = () => {
  let textContent = '';
  let amount = +document.getElementById("input-number").value;
  for (let i = 0; i < amount; i++) {
    for (let j = 0; j < i + 1; j++) {
      textContent += "^";
    }
    textContent += "<br/>";
  }
  modal.style.display = "none";
  document.getElementById("text").innerHTML = textContent;
}

document.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    draw();
  }
});

const listShop = [

  {

    nameShop: 'corgiShop',

    address: '29 Lê Quang Sung',

    chargedOf: 'Lộc',

    phoneNumber: 935964949,



    products: [

      { sku: 10001, name: 'sản phẩm 1', price: 10 },

      { sku: 10002, name: 'sản phẩm 2', price: 100 },

    ],

  },



  {

    nameShop: 'huskyShop',

    address: '29 Quang Trung',

    chargedOf: 'Lộc 2',

    phoneNumber: 9359622234,



    products: [

      { sku: 10001, name: 'sản phẩm 3', price: 10 },

      { sku: 10002, name: 'sản phẩm 2', price: 100 },

    ],

  },

  {

    nameShop: 'shibaShop',

    address: '29 Lê lợi',

    chargedOf: 'Lộc 3',

    phoneNumber: 9344622234,



    products: [

      { sku: 10001, name: 'sản phẩm 2', price: 10 },

      { sku: 10002, name: 'sản phẩm 5', price: 100 },

    ],

  },

];


listShop.map(x => x.products = x.products.map(element => element = element.sku + "-" + element.name + "-" + element.price).join("<br/>"));
let htmlTable = '';

for(element in listShop){
  htmlTable +=`<tr> <td>${listShop[element].nameShop} </td> <td>${listShop[element].address}</td> <td>${listShop[element].chargedOf}</td> <td>${listShop[element].phoneNumber}</td> <td>${listShop[element].products}</td> </tr>`
}



document.getElementById("content-table").innerHTML = htmlTable;
// listShop.map(el => el.products = el.products.join("<br/>"));