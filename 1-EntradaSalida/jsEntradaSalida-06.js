/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var firstNumber;
	var secondNumber;
	var sumatoryOfNumbers;

	firstNumber = document.getElementById("txtIdNumeroUno").value;
	secondNumber = document.getElementById("txtIdNumeroDos").value;

	if(!isNaN(firstNumber) && !isNaN(secondNumber))
	{
		alert("Thanks for putting two numbers!");
		firstNumber = parseInt(firstNumber);
		secondNumber = parseInt(secondNumber);
		sumatoryOfNumbers = (firstNumber + secondNumber);

		alert("The sumatory of the numbers are "+ sumatoryOfNumbers);
	}
	else
	{
		alert("Try putting your numbers again!");
	}
}

