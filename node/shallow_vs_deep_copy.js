
// Objects passed to functions are passed by reference, not by value.
function modify(obj) {
  obj.value = 200;
}

const item = { value: 100 };
modify(item);

console.log(item.value); // 200

// Reassignment inside function affects only the local param, not the original object.
function modify(obj) {
  obj = { value: 999 };
}

const item = { value: 100 };
modify(item);

console.log(item.value); // 100

// Changing reference value vs Reassinging
function modify(obj) {
// return obj.value = 999
return obj = {value: 1}
}

const item = { value: 100 };
const res = modify(item);

console.log(item.value); 
console.log(res)



