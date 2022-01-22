/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{

	var nameAsk;

	nameAsk = prompt ("Please enter a name!");

	if(isNaN(nameAsk))
	{
		alert("Thanks for following instructions!");
		document.getElementById("txtIdNombre").value = nameAsk;
	}
	else
	{
		alert("Try again putting a correct name!");
	}
}

