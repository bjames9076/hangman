
var main = require("./main.js");

var letter = require("./letter.js");
//declares array to store letters
exports.letterArry = [];
//function that checks if a letter is in the word
exports.checker = function(){
	var wordToCheck = main.chosenWord;
	exports.letterArry.push(main.letter);
	var detected = 0; 
	for(var i = 0; i < wordToCheck.length; i++){
		if(wordToCheck.charAt(i) == main.letter){
			letter.editArray(i, main.letter);
			detected++;
		}
	}
	letter.displayWord();
	if(detected == 0){
		main.lives++; 
	}
	main.requestInfo();

}; 

