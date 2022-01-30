let objAll = {
  country: "Russia",
  town: "Moscow",
  street: "Soviet",
  home: 71
};

let set = "street";

function hasProp(prop, obj){
  if (prop in obj) {
    return true;
  } else {
    return false;
  }
}
let result = hasProp(set, objAll);
console.log(result);