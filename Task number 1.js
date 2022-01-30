let objAll = {
  country: "Russia",
  town: "Moscow",
  street: "Soviet",
  home: 71
};

function dataLocation(obj){
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      console.log('Ключ:' + key + ';' + 'Значение:' + obj[key]);
    }
  }
}
dataLocation(objAll);