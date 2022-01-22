/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

alert("Please write your salary in the 'sueldo' blank space");

function mostrarAumento()
{
	var askedSalary;
	var tenPercentSalaryRise;
	var salaryIncreased;

	askedSalary = document.getElementById("txtIdSueldo").value;

	if(!isNaN(askedSalary))
	{
		askedSalary = parseInt(askedSalary);

		tenPercentSalaryRise = askedSalary * 0.10;
		salaryIncreased = askedSalary + tenPercentSalaryRise;

		document.getElementById("txtIdResultado").value = salaryIncreased;

	}
	else
	{
		alert("You have put something wrong in your salary, try it again!")
	}
}
