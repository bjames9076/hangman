//array of possible words
var words = ["salad", "apple", "pear", "car", "dog"];

//function that chooses a random word from words and returns it
exports.chooseWord = function(){
	var randNum = Math.floor((Math.random()*words.length)+1);
	return words[randNum];
}