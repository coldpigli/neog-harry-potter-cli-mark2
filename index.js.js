//importing the required libs
const readLineSync = require('readline-sync');
const chalk = require('chalk');

//score stored in global variable
let userScore = 0;

//Welcome Screen
const initalRender = () => {
  console.log(chalk.yellow.bold.underline("Hi User! Welcome to Hogwarts. To pass you must answer some questions.."));
  console.log(chalk.red.bold.underline("You need to enter your name to continue"));
  console.log("####################################################");
  const userName = readLineSync.question("Enter your name ");
  console.log(chalk.magenta.bold("Hello " + userName + "! Answer the following questions to check if you know your way through Hogwarts"));
  console.log("####################################################");
}

//level-1 question bank

const levelOne = [
  {
    question:"Who did Harry marry?", options:"a. Ginny\nb. Hermoine\nc. Hagrid\nd. Snape", answer:"a"
  },
  {
    question:"What is the name of Harry's pet?: ", options:"a. Fawkes\nb. Hedwig\nc. Scabbers\nd. Crookshanks", answer:"b"
  }
];

//level-2 question bank

const levelTwo = [
  {
    question:"What is the most powerful wand?", options:"a. Elder Wand\nb. fakewand\nc. diewand\nd. voldemort's wand", answer:"a"
  },
  {
    question:"How many children do Harry and Ginny have? ", options:"a. None\nb. 4\nc. 3\nd. 11", answer:"c"
  }
];

//level-3 question bank

const levelThree = [
  {
    question:"What is the most powerful wand?", options:"a. Elder Wand\nb. fakewand\nc. diewand\nd. voldemort's wand", answer:"a"
  },
  {
    question:"How many children do Harry and Ginny have? ", options:"a. None\nb. 4\nc. 3\nd. 11", answer:"c"
  }
];


//function to start level 1
const startLevelOne = () => {
  for(let i = 0; i<levelOne.length; i++){
  eachQuestion(i+1,levelOne[i].question, levelOne[i].options,levelOne[i].answer);
}
}

//function to start level 2
const startLevelTwo = () => {
  for(let i = 0; i<levelTwo.length; i++){
  eachQuestion(i+1,levelTwo[i].question,levelTwo[i].options, levelTwo[i].answer);
}
}

//function to start level 3
const startLevelThree = () => {
  for(let i = 0; i<levelThree.length; i++){
  eachQuestion(i+1,levelThree[i].question,levelThree[i].options, levelThree[i].answer);
}
}

//function to display each question and maintain count of correct answers
const eachQuestion = (id,question,options,answer) => {
  console.log("Question Number " + id);
  console.log(question);
  console.log(options);
  const userAnswer = readLineSync.question("Enter your answer ");
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green.bold("Correct Answer"));
    userScore++;
    console.log(chalk.blue.underline("Current Score " + userScore))

  }
  else{
    console.log(chalk.red.bold("That isn't correct. You seem to be an MUGGLE!!"));
    console.log(chalk.blue.underline("Current Score " + userScore));
  }
}




//Driving-code
initalRender();
console.log("Welcome to level One");
startLevelOne();
console.log("Welcome to level Two");
startLevelTwo();
console.log("Welcome to level Three");
startLevelThree();
console.log("################################################");
console.log("Your final score is " + userScore);