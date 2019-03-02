// console.log("hello")
var movieCharacters = ["Terminator", "007", "Dr.Evil", "Harry-Potter", "Grinch","Tommy-boy", "Robocop", "Darth-Vader", "Indiana-Jones", "Spok","Bad-Santa"];

function buttonGenerator(){
	$('#buttons').empty()
	for (var i=0; i<movieCharacters.length; i++){
		var characters = $('<button>').text(movieCharacters[i]);
		characters.addClass('newCharacter btn btn-dark')
		$('#buttons').append(characters)
	}
}

// adds newCharacter class to buttons and adds gif on click
$(document).on('click', '.newCharacter', function(){
	 $('#gifs').empty()

	 $.ajax({
          url: "http://api.giphy.com/v1/gifs/search?q="+ $(this).text() + "&api_key=B7CWm3MjRuIYc9YfQtOocP4fy3OqkFRE",
          method: "GET"
        }).then(function(response) {
        	for (var i=0; i<10; i++){
       			var div= $('<div>')
        		var gifCharacters = $('<img>').attr('src', response.data[i].images.fixed_height.url)
        		gifCharacters.attr('sandy-still',response.data[i].images['fixed_height_still'].url)
        		gifCharacters.attr('sandy-anim',response.data[i].images.fixed_height.url)
        		var gifRating = $('<p>').text(response.data[i].rating)

        		div.append(gifCharacters, gifRating)
        		$('#gifs').append(div)

        	}
        	console.log(response.data)
        });
  	// console.log(this)
})

// animate and still of gifs
$(document).on('click', '#gifs img', function(){
	console.log(this)

	var stillCharacter =  $(this).attr('sandy-still')
	var animCharacter = $(this).attr('sandy-anim')
	var gif = $(this).attr('src')

	if (gif==animCharacter){
		$(this).attr('src', stillCharacter)
	}else{
		$(this).attr('src', animCharacter)

	}
	// var state = $(this).attr('data-state');

	// if (state == 'still'){
	// 	var anim = $(this).attr('data-animate');
	// 	$(this).attr('src', anim)
	// 	$(this).attr('data-state', 'animate')
	// } else{
	// 	var still = $(this).attr('data-still');
	// 	$(this).attr('src', still)
	// 	$(this).attr('data-state', 'still');
	// }
})


// }

// when you click on the submit button it will create the button with your character name
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