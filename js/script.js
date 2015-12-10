var dict = { };	
var misWords = [];
var misWordsDiv = document.querySelector("#misWords");
function spellCheck(wArray, dictionary, divID) {			
	for (var i = 0; i < wArray.length; i++) {														
		if(dictionary.hasOwnProperty(wArray[i].replace(/[.,-\/#!/"\?$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase()) === false) {
			misWords.push(wArray[i].replace(/[.,-\/#!/"\?$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase());
			wArray[i] = '<span class="underline">' + wArray[i] + '</span>'
		}			   
	}
	$(divID).html(wArray.join(' '));
	return misWords;
}
$('#check').click(function() {
	misWordsDiv.innerHTML = "";
	misWords = [];
	var a = document.querySelector("#textinput").value;
	$('#sentence').html(a);
	var wordArray = a.split(' ');
	spellCheck(wordArray, dict, sentence);
	document.querySelector("#textinput").value = "";
	for (var j = 0; j < misWords.length; j++) {
		$('#misWords').append('<div>' + misWords[j] + '&nbsp; <span class="addButton">Add to Dictionary</span></div>');
		(function(k){
			misWordsDiv.children[k].addEventListener('click', function() {						
				dict[misWords[k]] = misWords[k];
				misWordsDiv.children[k].classList.add('added');
				misWordsDiv.children[k].innerHTML = 'Added!';												
			}) 					
		})(j);
	}
})