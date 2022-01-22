/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var firstNumber;
	var secondNumber;
	var restOfDivision;

	firstNumber = document.getElementById("txtIdNumeroDividendo").value;
	secondNumber = document.getElementById("txtIdNumeroDivisor").value;

	if(!isNaN(firstNumber) && !isNaN (secondNumber))
	{
		alert("Thanks for placing the asked numbers correctly!")

		firstNumber = parseInt(firstNumber);
		secondNumber = parseInt(secondNumber);

		result = firstNumber % secondNumber;
		
		alert(result);
	}
}
