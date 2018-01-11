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

