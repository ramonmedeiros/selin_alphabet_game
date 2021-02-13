
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


document.ontouchmove = function(e){
	e.preventDefault();
}

function updateLetter() {
	if (letter == alphabet.length -1)
		letter = 0;
	else
		letter++;
	document.getElementById("letter").innerHTML = alphabet[letter];
}

function openKeyboard(){
    var inputElement = document.getElementById('hiddenInput');

	inputElement.onfocus = function () {
		window.scrollTo(0, 0);
		document.body.scrollTop = 0;
	}

    inputElement.style.visibility = 'visible'; // unhide the input
    inputElement.focus(); // focus on it so keyboard pops
    inputElement.style.visibility = 'hidden'; // hide it again
};