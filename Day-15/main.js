const requestOptions = {
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: { 'Content-Type': 'application/json' },
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
}

const localStorageFeature = (key, defaultValue) => {
  const setItem = (data) => localStorage.setItem(key, JSON.stringify(data));
  const getItem = () => JSON.parse(localStorage.getItem(key)) || defaultValue;
  const deleteItem = () => localStorage.removeItem(key);
  return {
    setItem,
    getItem,
    deleteItem,
  };
}

const severFeature = () => {
  const getPost = async (url = '') => {
    const data = fetch(url).then(function (response) {
      response.json().then((res) => {
        try {
          for (let i = 0; i < res.length; i++) {
            console.log(res[i].name);
          }
        } catch (error) {
          console.log(error);
        }
      });
      return response;
    });
  };

  const createPost = async (url = '', data = {}) => {

    const response = await fetch(url, {

      method: 'POST',

      ...requestOptions,

      body: JSON.stringify(data) // body data type must match "Content-Type" header​
    });
    return response.json(); // parses JSON response into native JavaScript objects​
  };

  const updatePost = async (url = '', payload = {}) => {

    const response = await fetch(url, {

      method: 'PUT',

      ...requestOptions,

      body: JSON.stringify(payload)
    });

    return response.json();

  };

  const deletePost = async (url = '') => {

    const response = await fetch(url, {

      method: 'DELETE',

      ...requestOptions,

    });

    return response.json();

  };

  return {
    getPost,
    createPost,
    updatePost,
    deletePost,
  };
}

const validationData=()=> {
  const validateName = (input) => {
    if (input == null || input == "") {
      return 'Null';
    } else if (input.trim().length < 6) {
      return 'Tên ngắn hơn 6 kí tự';
    }
    else {
      return 'Tên tạm ổn.';
    }
  }

  const validateEmail = (input) => {
    if (String(input)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) !== null) return 'Email đúng định dạng';
    else {
      if (input == null || input == "") {
        return 'Null';
      }
      else{
        return 'Sai định dạng';
      }
    }
  };

  return {
    validateName,
    validateEmail,
  }
}




