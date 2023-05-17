//Question: 1

let obj1 = {
  name: 'person1',
  age: 5
};
    
let obj2 = {
  age: 5,
  name: 'person2'
};
    
const isEqual = JSON.stringify(obj1) === JSON.stringify(obj2);

console.log(isEqual); // true