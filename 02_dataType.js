 console.log("Question 1");
 
 var bankName;
 console.log(`bank name before initialiazation is : ${bankName}`);
  console.log(`Its datatype is ${typeof bankName}`);

var bankName = "SBI";
 console.log(`bank name after initialiazation is ${bankName}`);
 console.log(`Its datatype is ${typeof bankName}`);

console.log("=====================================================================");

 console.log("Question 2");
 
 var marks ='90%';
  console.log(`marks is :${marks} and its datatype is ${ typeof marks}`);

  console.log("=====================================================================");

 console.log("Question 3");

 var isWorking;
 console.log(`The value of isWorking ${isWorking}and the datatype is ${typeof isWorking}` );

  var isWorking = true;
 console.log(`The value of isWorking ${isWorking}and the datatype is ${typeof isWorking}` );
 

  console.log("=====================================================================");

 console.log("Question 5");

  var totalCount = "Ten thousand";
 console.log(`The value of totalCount is ${totalCount}and the datatype is ${typeof totalCount}` );

  var totalCount = 10000;
 console.log(`The value of totalCount is ${totalCount}and the datatype is ${typeof totalCount}` );


//  console.log("Question 1 ");
var sweety = "Sweety";
var cutie = "cutie";

console.log(`Before swapping sweety is ${sweety} and cuite is ${cutie}`);
sweety = cutie;
console.log(`After swapping sweety is ${sweety} and cuite is ${cutie}`);


 console.log("=====================================================================");

console.log("Question 2");

var num1 = 100;
var num2 = 200;
var num3 = 300;
console.log(`Before swapping num1 is ${num1} and num2 is ${num2} and num3 is ${num3}`);
num1 = num2;
num2 = num3;
num3 = num1;

console.log(`After swapping num1 is ${num1} and num2 is ${num2} and num3 is ${num3}`);



  console.log("=====================================================================");

  console.log("Question 1");

  function  show(){
 console.log("Hi how are you?");
  }
  show();

  function name(){
console.log("My name is Gajanan");
  }
name();


console.log("=====================================================================");

  console.log("Question 2");

  function details(firstName,lastName,collegeName){
    console.log(`My name is ${firstName} ${lastName} and my college name is ${collegeName}`);

  }
  details("Gajanan","Wadje","JSPM")



  
console.log("=====================================================================");

  console.log("Question 3");

  function addThreeValues(a,b,c) {
    let result = a + b +c; 
if
    (typeof a== "number" && typeof b== "number" && typeof c== "number"){
console.log(`Sum is ${result}`);

    }else if
    (typeof a== "string" && typeof b== "string" && typeof c== "string"){
        console.log(`String is ${result}`);

    }else 
    console.log(`Mix type detacted ${result}`);
    
     


  }
addThreeValues(10.23, 600, 40)
addThreeValues("Hello", "Good", "Moring")





var n1=13;
if (n1%2 == 0){
console.log(`${n1} is Even`);
} else{
  console.log(`${n1} is Odd`);
}



