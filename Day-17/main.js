let checkPromise= false;
var myPromise = new Promise(
  function(resolve,reject){
    if(checkPromise){
        resolve();
    }else{
        reject();
    }
  }
    );

myPromise
  .then(function(){
      console.log('khong co loi');
  })
  .catch(function(){
      console.log('co loi');
  })
  .finally(function(){
      console.log('hoan thanh');
  });