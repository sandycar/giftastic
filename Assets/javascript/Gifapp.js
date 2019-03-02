// console.log("hello")
var movieCharacters = ["Terminator", "007", "Dr.Evil"];

function buttonGenerator(){
	$('#buttons').empty()
	for (var i=0; i<movieCharacters.length; i++){
		var characters = $('<button>').text(movieCharacters[i]);
		characters.addClass('newCharacter')
		$('#buttons').append(characters)
	}
}


$(document).on('click', '.newCharacter', function(){
	 $('#gifs').empty()

	 $.ajax({
          url: "http://api.giphy.com/v1/gifs/search?q="+ $(this).text() + "&api_key=B7CWm3MjRuIYc9YfQtOocP4fy3OqkFRE",
          method: "GET"
        }).then(function(response) {
        	for (var i=0; i<10; i++){
        		var gifCharacters = $('<img>').attr('src', response.data[i].images.fixed_height.url)
        		$('#gifs').append(gifCharacters)
        	}
        	console.log(response.data)
        });
  	// console.log(this)
})

// animate and still of gifs
// $(document).on('click', '.newCharacter', function(){

// }

$('#submit').on('click', function(){
	event.preventDefault()
	var typeCharacter = $('#inputCharacter').val()
	movieCharacters.push(typeCharacter)
	// console.log(movieCharacters)
	// console.log('click')
	// console.log(typeCharacter)
buttonGenerator()
})

buttonGenerator()