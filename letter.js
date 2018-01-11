var main = require('./main.js');
//array for the guessed letters
exports.guessArry = [];
//var for guessed letters
var guess = "";
//array for the letters in the chosen word
exports.wordArry = [];

//puts the chosen word into an array
exports.display = function(){
	var wordGuess = main.chosenWord;
	for(var i = 0; i<wordGuess.length; i++){
		exports.wordArry.push(wordGuess.charAt(i));
		if(wordGuess.charAt(i) == '\xa0'){
			exports.guessArry.push('\xa0');		
		}
		else{
		exports.guessArry.push('_');
		}
	};
}
//updates what the user has guessed
exports.displayGuess = function(){
	guess = "";
	for(var i = 0; i <exports.guessArry.length; i++){
		guess += exports.guessArry[i]+" ";
	}
	console.log(guess);
};

//changes the guess array when a letter is guessed
exports.editArray = function(position, letter){
	exports.guessArry[position] = letter; 
};
