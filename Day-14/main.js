const $ = (selector) => document.getElementById(selector);
const requestOptions = {
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: { 'Content-Type': 'application/json' },
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
}

const createPost = async (url = '', payload = {}) => {

  const response = await fetch(url, {

    method: 'POST',

    ...requestOptions,

    body: JSON.stringify(payload) // body data type must match "Content-Type" header​
  });
  return response.json(); // parses JSON response into native JavaScript objects​
}

const updatePost = async (url = '', payload = {}) => {

  const response = await fetch(url, {

    method: 'PUT',

    ...requestOptions,

    body: JSON.stringify(payload)
  });

  return response.json();

}

const deletePost = async (url = '') => {

  const response = await fetch(url, {

    method: 'DELETE',

    ...requestOptions,

  });

  return response.json();

}

const userThanh = {
  id: 0,
  name: "thanh dep chai",
  phoneNumber: "0986258888",
  email: "thanhdepchai@gmail.com",
  birthday: "05/08/2002"
}

$("get-list").onclick = () => {
  const data = fetch('http://localhost:3001/students').then(function (response) {
    response.json().then((res) => {
      console.log(res);
      try {
        let content = '';
        for (let i = 0; i < res.length; i++) {
          content += `<p>${res[i].name}</p>`;
        }
        document.getElementById("block").innerHTML = content;
      } catch (error) {
        console.log(error);
      }
    });
    return response;
  });
}

$('add-student').onclick = () => {
  createPost("http://localhost:3001/students", userThanh);
}

$('update-student').onclick = () => {
  updatePost("http://localhost:3001/students/3", {
    id:3,
    name: "trường đẹp chai",
    phoneNumber: "0986259999",
    email: "truongdepchai@gmail.com",
    birthday: "05/08/2002"
  });

}

$('delete-student').onclick = () => {
  deletePost("http://localhost:3001/students/3");
}