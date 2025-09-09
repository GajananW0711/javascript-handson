const arrayNum = [20,11,40,25,23,11,9,31,60,2,19];

console.log(`The Given Array is ${arrayNum}`);
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

const addArray = arrayNum.map(num => num + 10);
console.log(`By adding 10 in Given Array ${addArray}`);
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

const cubeArray = arrayNum.map(num => num * num *num);
console.log(`By adding 10 in Given Array ${cubeArray}`);

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

const indexArray = arrayNum.map((Element, index) => Element + index) ;
console.log(`By adding Index ${indexArray}`);



