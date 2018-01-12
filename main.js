
var game = require('./game.js');

var inquirer = require('inquirer');

var word = require('./word.js');

var letter = require('./letter.js')

var choice;

exports.letter; 

exports.wordGuess;

exports.lives = 0; 

exports.chosenWord = game.chooseWord();

//asks the user 
exports.requestInfo = function(){
	if(exports.lives >= 10){
		console.log("Good Luck");
		exports.playAgain();
	}
	else{
		var questions = [
	{
		type: "list",
		name: "whatDo",
		message: "What is your guess?\n You have used "+exports.lives+" out of 10.",
		choices:[
		"letter",
		"word"
		]
	}
    ];
    
	inquirer.prompt(questions).then(function(answers){

		if(answers.whatDo == "letter"){
			var letterQ = [
			{
				type: "input",
				name: "letter",
				message: "You have already chosen: "+word.letterArry+"\nCurrent Guess: "
			}
			];

			inquirer.prompt(letterQ).then(function(answers){
				exports.letter = answers.letter;
				word.checker();
			})
		}

		else if(answers.whatDo == "word"){
			var wordQ = [
			{
				type: "input",
				name: "word",
				message: "Which word would you like to guess?"
			}
			];
			inquirer.prompt(wordQ).then(function(answers){
				exports.wordGuess = answers.word;
				word.wordCheck();
			})
		}

		else{
			console.log("Wrong answer.");
			exports.requestInfo();
		}
	})
	}
	
};

//Function to reset the game and allow the user to play again. 
exports.playAgain = function(){
	var questions = [
	{
		type: "list",
		name: "playAgain",
		message: "Would you like to play again?",
		choices:[
		"yes",
		"no"
		]
	}
	];

	inquirer.prompt(questions).then(function(answer){
		if(answer.playAgain == "yes"){
			exports.lives = 0; 
			exports.chosenWord = game.chooseWord();
			letter.guessArry = [];
			letter.wordArry = [];
			word.letterArry = [];
			letter.display();
			letter.displayGuess();
			exports.requestInfo();
		}
		else{
			console.log("Thankyou for playing");
		}
	});
}
//function calls
letter.display();
letter.displayGuess();
exports.requestInfo();