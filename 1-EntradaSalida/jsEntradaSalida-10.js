/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

alert("Please the amount you want to discount in the 'importe' blank space");

function mostrarAumento()
{
	var askedAmount;
	var twentyFivePercentAmountDiminished;
	var finalAmountDecreased;

	askedAmount = document.getElementById("txtIdImporte").value;

	if(!isNaN(askedAmount))
	{
		askedAmount = parseInt(askedAmount);

		twentyFivePercentAmountDiminished = askedAmount * 0.25;
		finalAmountDecreased = askedAmount - twentyFivePercentAmountDiminished;

		document.getElementById("txtIdResultado").value = finalAmountDecreased;

	}
	else
	{
		alert("You have put something wrong in your salary, try it again!")
	}
}
