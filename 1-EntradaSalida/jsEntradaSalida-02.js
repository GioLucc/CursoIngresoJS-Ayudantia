/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón 'mostrar'*/
function mostrar()
{

	var nameAsk;

	nameAsk = prompt ("Ingrese su nombre porfavor!");

	if(isNaN(nameAsk))
	{
		alert(nameAsk);
	}
	else
	{
		alert("Se ha pedido que ingrese un nombre y has ingresado un numero!");
	}
}

