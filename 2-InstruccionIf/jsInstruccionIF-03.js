function mostrar()
{
	var enterAge;
	
	enterAge = document.getElementById("txtIdEdad").value;

	if(!isNaN(enterAge))
	{
		enterAge = parseInt(enterAge);

		alert("Thanks for entering your age correctly!");

		if(enterAge > 17)
		{
			alert("You are an adult!");
		}
		else
		{		
			alert("You're not an adult");
		}	
	}
	else
	{
		alert("You've entered something different than a number in the age box! Try again");
	}


}//FIN DE LA FUNCIÓN