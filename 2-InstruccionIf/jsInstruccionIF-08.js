function mostrar()
{
	var enterAge;
	var civilStatus;
	
	enterAge = document.getElementById("txtIdEdad").value;
	civilStatus = document.getElementById("estadoCivil").value;

	if(!isNaN(enterAge))
	{
		enterAge = parseInt(enterAge);

		alert("Thanks for entering your age correctly!");

		if(enterAge < 18 && civilStatus != "Soltero")
		{
			alert("Do nothing!");
		}
		else
		{
			if(enterAge > 18 && civilStatus == "Soltero")
			{
				alert("He's single and he's not Under-Aged");
			}
		}
	}
	else
	{
		alert("You've entered something different than a number in the age box! Try again");
	}

}//FIN DE LA FUNCIÓN