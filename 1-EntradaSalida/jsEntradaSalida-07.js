/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

var firstNumber;
var secondNumber;
var concatenatedOperation;

alert("Welcome to the Admission Course Calculator");
alert("Please insert two numbers in the proper spaces");
alert("After inserting numbers you can do whatever operation you would like!");
function sumar()
{
	firstNumber = document.getElementById("txtIdNumeroUno").value;
	secondNumber = document.getElementById("txtIdNumeroDos").value;

	if(!isNaN(firstNumber) && !isNaN (secondNumber))
	{
		alert("Thanks for placing the asked numbers correctly!")

		firstNumber = parseInt(firstNumber);
		secondNumber = parseInt(secondNumber);

		concatenatedOperation = 'The sumatory of the numbers added earlier is = ';
		concatenatedOperation += (firstNumber + secondNumber);
		alert(concatenatedOperation);
	}
	else
	{
		alert("One of the two asked numbers wasn't a number, please check it and retry!")
	}
}

function restar()
{
	firstNumber = document.getElementById("txtIdNumeroUno").value;
	secondNumber = document.getElementById("txtIdNumeroDos").value;

	if(!isNaN(firstNumber) && !isNaN (secondNumber))
	{
		alert("Thanks for placing the asked numbers correctly!");

		firstNumber = parseInt(firstNumber);
		secondNumber = parseInt(secondNumber);

		concatenatedOperation = 'The rest of the numbers added earlier is = ';
		concatenatedOperation += (firstNumber - secondNumber);
		alert(concatenatedOperation);
	}
	else
	{
		alert("One of the two asked numbers wasn't a number, please check it and retry!")
	}

}

function multiplicar()
{ 
	firstNumber = document.getElementById("txtIdNumeroUno").value;
	secondNumber = document.getElementById("txtIdNumeroDos").value;

	if(!isNaN(firstNumber) && !isNaN (secondNumber))
	{
		alert("Thanks for placing the asked numbers correctly!")

		firstNumber = parseInt(firstNumber);
		secondNumber = parseInt(secondNumber);

		concatenatedOperation = 'The multiplication of the numbers added earlier is = ';
		concatenatedOperation += (firstNumber * secondNumber);
		alert(concatenatedOperation);
	}
	else
	{
		alert("One of the two asked numbers wasn't a number, please check it and retry!")
	}
}

function dividir()
{
	firstNumber = document.getElementById("txtIdNumeroUno").value;
	secondNumber = document.getElementById("txtIdNumeroDos").value;

	if(!isNaN(firstNumber) && !isNaN (secondNumber))
	{
		alert("Thanks for placing the asked numbers correctly!")

		firstNumber = parseInt(firstNumber);
		secondNumber = parseInt(secondNumber);

		concatenatedOperation = 'The division of the numbers added earlier is = ';
		concatenatedOperation += (firstNumber / secondNumber);
		alert(concatenatedOperation);
	}
	else
	{
		alert("One of the two asked numbers wasn't a number, please check it and retry!")
	}
}