//simplest statements
1;
!false;

// special keyword let followed by name of binding/variable = an operator and expression
//caught is binding/variable
let caught = 5 * 5;

//ten is binding/variable
let ten = 10;
console.log(ten * ten);
//100

//mood is binding/variable
let mood = 'light';
console.log(mood);
//light

mood = 'dark';
console.log(mood);
//dark

//luigisDebt is binding/variable
let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt)
//105

//single let ststement can define multiple binding only if commas are between each binding
let one = 1 , two = 2;
console.log(one + two);
//3

//const and var can also be used to create bindings/variables
var name = 'Ayda';
const greeting = 'Hello';
console.log(greeting + name);
//Hello Ayda

//prompt() shows dialog box that asks for user input
// prompt("Enter passcode");

//return values
// console.log(Math.max(2 , 4));
//4

// console.log(Math.min(2 , 4) + 100);
//102

// Control flow tells a story from top to bottom 
// let theNumber = Number(prompt("Pick a number"));
// console.log("Your number is the square root of" + theNumber * theNumber);

//Conditional statement using if keyword
// let theNumber = Number(prompt("Pick a number"));
// if(theNumber.isNaN(theNumber)) {
// console.log("Your number is the suqare root of" + theNumber * theNumber);
// }

// if (1 +1 == 2); console.log("It's true");
//It's true

//else is paired with if to creat second alternate execution path
// if(theNumber.isNaN(theNumber)) {
//     console.log("Your number is the suqare root of" + theNumber * theNumber);
//     }else {
//         console.log("Hey why didn't you give me a number?");
//     }

//chain of multiple if/else statements
// let num = Number(prompt("Pick a number."));
// if(num < 10) {
//     console.log("small");
// }else if(num > 100) {
//     console.log("medium");
// }else{
//     console.log("Large");
// }

//while and do loops
// console.log(0);
// console.log(2);
// console.log(4);
// console.log(6);
// console.log(8);
// console.log(10);
// console.log(12);

//loop with binding/variable that counts
let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}
//0
//2
//4
//6
//8
//10
//12

//power to the 10th using while loop
// let result = 1;
// let counter = 0;
// while(counter < 10) {
//   result = result * 2;
//   counter = counter + 1;
// }
// console.log(result);
//1024

//do loop  always execute body once but can stop after only the first time
let yourName;
do {
yourName = prompt("Who are you?");
} while(!yourName);
console.log(yourName)

//indenting code inside blocks make the structure standout
if(false != true) {
  console.log("That makes sense.")
  if(1 < 2){
    console.log("No surprise there.")
  }
}

// for loops creates an infinate loop 
for(let number = 0; number <= 12; number = number + 2){
  console.log(number);
}
//0
//2
//4
//6
//8
//10

//for loop demonstrating 2 to power of 10
let result = 1;
for(let counter = 0; counter < 10; counter = counter + 1){
  result = result * 2;
}
console.log(result);
//1024

//for loop that finds number greater than or equal to 20 and divisable by 7 with break to end loop
for (let current = 20 ; ; current = 20 + 1){
  if(current % 7 == 0){
    console.log(current);
    break;
  }
}
//21


//using switch evalutes each block of code until match is found if no match is found default is put into action
//uncommon code
// if (x == "value1") action1();
// else if(x == "value2") action2();
// else if(x == "value3") action3();
// else defaultAction2();

// switch
switch(prompt("What is the weather like?")){
  case "rainy":
    console.log("Remember to bring an unbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
    break;
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!")
    break;
}

//Single line comments use two // then thew comment text after
// let accoutBalance = calulateBalance(account);
// //It's green hollow where the river sings
// accoutBalance.adjust();
// //madly catching white tatersa in the grass
// let report = new Report();
// // Where the sun on the proud mountain sings
// addToReport(accoutBalance, report);
//it's a little valley, foaming like light inb a glass

//Chapter Exercise LOOPING TRIANGLE
loopingTriangle = () => {
  //indicating num of rows
  const rows = 6;
  //define i
  let i = 1;
  //for loop that goes through each row addin 1 to each row
  for(i = 1; i <= rows; i++){
    //creatinmg sub loop that goes through rows adding 1
    for( j = 1; j <= rows; j++){
      console.log("#");
    }
    //creates individual rows
    console.log("/n")
  }
}
loopingTriangle()

// Chapter Exercise FIZZ BUZZ

fizzBuzz = () => {
  const num = 100
  let i = 1;
  //loop through 1 -100
  for(i = 1; i <= num; i++){
    //if num is multiple of 3
    if(i % 3 == 0)
    console.log("fizz")
    //if num is multiple of 5
    if(i % 5 == 0)
    console.log("buzz")
    //if num is both multiple of 5 & 3
    if((i % 3 == 0) && (i % 5 == 0)){
      console.log("fizz-buzz")
      }
    //if num in none of the above print number
    else{
    console.log(i)
    }
  }
}
fizzBuzz()


