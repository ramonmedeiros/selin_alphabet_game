
var letter = 0;
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ".split('')
var lastKey='';

document.onkeypress = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    
	if (charStr.toUpperCase() == alphabet[letter].toUpperCase())
		updateLetter();
};

function updateLetter() {
	if (letter == alphabet.length -1)
		letter = 0;
	else
		letter++;
	document.getElementById("letter").innerHTML = alphabet[letter];
}
