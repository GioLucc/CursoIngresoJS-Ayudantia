/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var askedName;

	askedName = document.getElementById("txtIdNombre").value;

	if(isNaN(askedName))
	{
		alert(askedName);
	}
	else
	{
		alert("Se ha pedido que ingrese un nombre y has ingresado un numero!");
	}

}