function mostrar()
{
	var enterAge;
	
	enterAge = document.getElementById("txtIdEdad").value;

	if(!isNaN(enterAge))
	{
		enterAge = parseInt(enterAge);

		alert("Thanks for entering your age correctly!");

		if(enterAge > 12 && enterAge < 18)
		{
			alert("You're teenager");
		}
		else
		{
			alert("You're not a teenager");
		}
	}
	else
	{
		alert("You've entered something different than a number in the age box! Try again");
	}

}//FIN DE LA FUNCIÓN