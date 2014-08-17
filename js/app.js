
$(document).ready(function(){
	//random number variable
	var random_number = Math.floor((Math.random() * 100) + 1);
	console.log(random_number);
	var num_guess = 0;
	
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
  		//console.log(num_guess);
  		num_guess++;
  		var user_guess = $("#userGuess").val();
  		hotOrCold(user_guess);
  		$("#count").html(num_guess);
  		$("#guessList").append("<li>" + user_guess + "</li>");

  	});

  	var hotOrCold = function(x) {
  	//type of x is currently string, need to try to convert it into an integer
  	x = parseInt(x);
  	//make sure x is an integer
  	if ((typeof x == "number") && Math.floor(x) == x)
  	{
		if ((x > 0) && (x < 100)) {

		
			var abs_diff = Math.abs(x - random_number);
			if (abs_diff == 0)
			{
				$("#feedback").html("Correct!");
		
			}
			else if (abs_diff > 50)
			{
				$("#feedback").html("Very Cold!");
				$("#userGuess").val("");
			}
			else if (abs_diff > 20)
			{
				$("#feedback").html("Cold");
				$("#userGuess").val("");
			}
			else if (abs_diff > 5)
			{
				$("#feedback").html("Warm!");
				$("#userGuess").val("");
			}
			else
			{
				$("#feedback").html("Very Warm!");
				$("#userGuess").val("");
			}
		}
		else
		{
			alert("Please enter an integer between 1 and 100!");
			window.location.reload();
		}
	}
	else
	{
		alert("Please enter an integer between 1 and 100!");
		window.location.reload();
	}
};

});



