function mostrar()
{	
	/*	
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
			if(enterAge > 0)
			{
				alert("You're not an adult");
			}
			else
			{
				alert("You haven't been born yet");
			}
		}	
	}
	else
	{
		alert("You've entered something different than a number in the age box! Try again");
	}
	*/
	var edadIngresada;

	edadIngresada=document.getElementById('txtIdEdad');

	edadIngresada=parseInt(edadIngresada.value);
	

	if(edadIngresada==15){
		alert("Niña bonita");
	}
	txtIdEdad.value="";

}//FIN DE LA FUNCIÓN