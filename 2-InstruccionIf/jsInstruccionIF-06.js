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
			alert("You're an adult");
		}
		else
		{
			if(enterAge > 12)
			{
				alert("You're a teenager");
			}
			else
			{
				alert("You're Under-age");
			}
		}
	}
	else
	{
		alert("You've entered something different than a number in the age box! Try again");
	}

}//FIN DE LA FUNCIÓN