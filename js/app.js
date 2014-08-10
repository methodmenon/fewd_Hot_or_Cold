
$(document).ready(function(){
	
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

  	
  	var user_guess = $("#userGuess").val();
  	
  	$("#guessButton").click(function(e){
  		e.preventDefault(e);
  		console.log(user_guess);
  		temp(+user_guess);

  	});

});

//function for deciding how close my number is to actual
var temp = function(x) {
	while ((x > 0) && (x < 100)) {

		//return a random number between 1 and 100
		//Math.random() returns a random number between 0 and 1
		//Math.floor(x) returns x, rounded DOWN to the nearest integer
		var random_number = Math.floor((Math.random() * 100) + 1);
		console.log(random_number);
		//find absolute value of difference between random value and user's input
		var abs_diff = Math.abs(x - random_number);
		if (abs_diff == 0)
		{
			
			//document.getElementById("#feedback").innerHTML = "Correct!";
			$("#feedback").html("Correct!");
		
			//return("Correct!");
		}
		else if (abs_diff > 50)
		{
			//document.getElementById("#feedback").innerHTML = "Very Cold!";
			$("#feedback").html("Very Cold!");
			//return("Very Cold!");
		}
		else if (abs_diff > 20)
		{
			//document.getElementById("#feedback").innerHTML = "Cold!";
			$("#feedback").html("Cold");
			//return("Cold");
		}
		else
		{
			//document.getElementById("#feedback").innerHTML = "Very Warm!";
			$("#feedback").html("Very Warm!");
			//if abs_diff <=5
			//return("Very Warm!");
		}
	}
}