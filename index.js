// This is my first programing in JavaScript and this is my answer to 1st, 2nd and 3rd questions.

var readlineSync=require("readline-sync")
// var userName=readlineSync.question("What is your name? ")
// console.log("Welcome! ", userName)

// This is to find whether answer is correct or not.

// score=0
// var myAge=readlineSync.question("Is my age greater than 25? ")
// if (myAge==="No") {
//   console.log("You are Right")
//   score=score+1
// }
// else {
//   console.log("You are Wrong")
//   score=score-1
// }
// console.log("Your score is ", score)

// This is to add two numbers using function.

// function add(num1, num2) {
//   sum=num1+num2
//   console.log("Sum of num1 and num2 is: ", sum)
// }
// add(9,76)

// Ex 08 : Functio to check the answer.

// score=0;
// function askQuestion(question, answer) {
//   userAnswer=readlineSync.question(question);
//   if (userAnswer===answer) {
//     console.log("You are right!");
//     score=score+1;
//   } else {
//     console.log("I HATE YOU!!!!!!");
//     score=score-1;
//   }
// }
// askQuestion("What is my Name? : ", "Bhartendu")
// console.log("You scored: ", score)

// Ex 09 : Print yor name 5 times using for loop.

// for (i=0; i<5; i=i+1) {
//   console.log("Bhartendu")
// }

// Ex 09 : Homework Star Pattern.

// Ex 10 : Grocery List of items to buy.

// var groceryList=["Rice", "Sugar", "Medicine", "Soap", "Pasta"]
// console.log(groceryList[groceryList.length-1])

// Ex 12 : Info about suprheroes

// var superman= {
//   name:"Superman",
//   color:"Red"
// }
// var batman= {
//   name:"Batman",
//   color:"Black"
// }


//console.log(batman.name)

// Play a game of superheroes using function.

// var superHeroes=[superman, batman]
// for (var i=0; i<superHeroes.length; i++) {
//   console.log(superHeroes[i].name)
//   console.log(superHeroes[i].color)
//   console.log("___________")
// }

// PREPARE A SERIES OF QUESTION WITH MCQs, WHICH IS ABOUT YOU AND REWARD THE USER/PLAYER IF THEY GIVE RIGHT ANSWERS,BY GIVING ONE POINT FOR EACH RIGHT ANSWER.

// var questionOne={
//   question:"What is my Full Name? ",
//   answer:"Bhartendu Thakur"
// }
// var questionTwo={
//   question:"Where was I Born? ",
//   answer:"Madhubani"
// }
// var questionThree={
//   question:"Who is my Idol? ",
//   answer:"MS Dhoni"
// }
// var questionFour={
//   question:"Which College I went to? ",
//   answer:"BIT Mesra"
// }
// var questionFive={
//   question:"Which sports Do I love to play? ",
//   answer:"VolleyBall"
// }
// var infoMe=[questionOne, questionTwo, questionThree, questionFour, questionFive]
// for (var i=0; i<infoMe.length; i++) {
//   userQuestion=infoMe[i]
//   console.log(userQuestion.question)
//   console.log(userQuestion.answer)
//   console.log("______________________________")
// }

//PLAY A GAME:

// console.log("WELCOME TO THE QUIZ 'HOW WELL DO YOU KNOW ME?'")
// console.log("LET'S START!!!!!!!")
// var answerOne=readlineSync.question("What is my Name? ")
var score=0
function infoMe(question, answer) {
  userAnswer=readlineSync.question(question)
  if (userAnswer===answer) {
    console.log("Right")
    score=score+1
    console.log("Your current score is:", score)
  } else {
    console.log("Wrong!")
    console.log("The right answer is:",answer)
    console.log("Your current score is:",score)
  }
  console.log("____________________________")
}
infoMe("Q1. What is my Name? \nA.Divyendu Thakur \nB.Bhartendu Thakur \nC.Suvendu Thakur \nD.Purnendu Thakur\n", "Bhartendu Thakur")
infoMe("Q2. Where was I Born? \nA.Patna \nB.Ranchi \nC.Madhubani \nD.Delhi\n", "Madhubani")
infoMe("Q3. What is my Date of Birth? \nA.12-12-1998 \nB.11-12-1998 \nC.12-12-1999 \nD.04-08-1999\n", "12-12-1999")
infoMe("Q4. Which College I went to? \nA.BIT Mesra \nB.Ranchi University \nC.Goosner College \nD.I Didn't go to college\n", "BIT Mesra")
infoMe("Q5. Which sports Do I like to Play? \nA.Cricket \nB.Tennis \nC.VolleyBall \nD.None\n", "VolleyBall")
console.log("You Final score is:",score)
console.log("_____________________________________________")
if (score===5) {
  console.log("WOW! You Know Me Better than I Know Myself")
} else {
  console.log("Good")
}
if (score>=4) {
  console.log("Welcome to Level 2")
  infoMe("Q6. What Food Do I Like? \nA.Curry \nB.Rice \nC.Biryani \nD.Aloo Paratha\n", "Aloo Paratha")
}
console.log("Your New score is", score)