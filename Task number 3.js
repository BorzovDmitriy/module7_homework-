function createEmptyObject(){
  
  let emptyObj = Object.create(null);
  
  return emptyObj;
}

let obj = createEmptyObject();
console.log(obj);