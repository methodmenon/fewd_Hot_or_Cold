
$(document).ready(function(){
	//random number variable
	var random_number = Math.floor((Math.random() * 100) + 1);
	console.log(random_number);
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*---Click to start a new game---*/
  	$(".new").click(function(){
  		window.location.reload();
  	});

  	
  	//var user_guess = $("#userGuess").val();
  	
  	$("#guessButton").click(function(e){
  		e.preventDefault(e);
  		var user_guess = $("#userGuess").val();
  		hotOrCold(user_guess);

  	});

  	var hotOrCold = function(x) {
	if ((x > 0) && (x < 100)) {

		
		var abs_diff = Math.abs(x - random_number);
		if (abs_diff == 0)
		{
			$("#feedback").html("Correct!");
		
		}
		else if (abs_diff > 50)
		{
			$("#feedback").html("Very Cold!");
			
		}
		else if (abs_diff > 20)
		{
			$("#feedback").html("Cold");
		}
		else
		{
			$("#feedback").html("Very Warm!");
		}
	}
};

});



