/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/

alert ("Enter your first name please & then enter your age please!");

function mostrar()
{	
	var nameAsk;
	var ageAsk;
	var concatenatedNameAndAge;

	nameAsk = document.getElementById("txtIdNombre").value;

	ageAsk = document.getElementById("txtIdEdad").value; 

	if(isNaN(nameAsk) && !isNaN(ageAsk))
	{
		alert("All the asked data was validated and now it'll be desplayed together");

		concatenatedNameAndAge = "Usted se llama ";
		concatenatedNameAndAge += nameAsk;
		concatenatedNameAndAge += " y tiene ";
		concatenatedNameAndAge += ageAsk;
		concatenatedNameAndAge += " años";

		alert(concatenatedNameAndAge);
	}
}

