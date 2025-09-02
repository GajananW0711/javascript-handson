let greet = () => {
    console.log("Good Morning, Today is Friday");
};
greet();


let multiply = (num1, num2, num3 = 1) => {
    let result = num1 * num2 * num3;
    console.log(`Multiplication of ${num1}, ${num2}, ${num3} = ${result}`);
};
    multiply(5, 5, 2);
    multiply(10,4);

    let add = (a, b, c, d, e) => {
    return a + b + c + d + e;
};

let sum1 = add(100, 100, 200, 349, 756);
console.log(`Addition of numbers = ${sum1}`);

let sum2 = add("I am", " learning", " ES6", " features", " in depth");
console.log(`Concatenation result = ${sum2}`);