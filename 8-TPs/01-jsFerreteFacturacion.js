/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

alert("Welcome to 'Ferrete Facturación' Please enter the price of each product and then hit a button to realize the operation");

function Sumar () 
{
    var enterFirstPrice;
    var enterSecondPrice;
    var enterThirdPrice;
    var pricesSumatory;

    enterFirstPrice = document.getElementById("txtIdPrecioUno").value;
    enterSecondPrice = document.getElementById("txtIdPrecioDos").value;
    enterThirdPrice = document.getElementById("txtIdPrecioTres").value;

    if(!isNaN(enterFirstPrice) && !isNaN(enterSecondPrice) && !isNaN (enterThirdPrice))
    {
        alert("Thanks for entering all the prices correctly!");

        enterFirstPrice = parseInt(enterFirstPrice);
        enterSecondPrice = parseInt(enterSecondPrice);
        enterThirdPrice = parseInt(enterThirdPrice);

        pricesSumatory = enterFirstPrice + enterSecondPrice + enterThirdPrice;

        alert("The sumatory of all prices is $"+pricesSumatory+"!");
    }
    else
    {
        alert("You've entered something different than a number in one of the three boxes! Try again");
    }
    
}    
function Promedio () 
{
	var enterFirstPrice;
    var enterSecondPrice;
    var enterThirdPrice;
    var pricesSumatory;
    var pricesAverage;

    enterFirstPrice = document.getElementById("txtIdPrecioUno").value;
    enterSecondPrice = document.getElementById("txtIdPrecioDos").value;
    enterThirdPrice = document.getElementById("txtIdPrecioTres").value;

    if(!isNaN(enterFirstPrice) && !isNaN(enterSecondPrice) && !isNaN (enterThirdPrice))
    {
        alert("Thanks for entering all the prices correctly!");

        enterFirstPrice = parseInt(enterFirstPrice);
        enterSecondPrice = parseInt(enterSecondPrice);
        enterThirdPrice = parseInt(enterThirdPrice);

        pricesSumatory = enterFirstPrice + enterSecondPrice + enterThirdPrice;
        pricesAverage = pricesSumatory / 3;
        pricesAverage = pricesAverage.toFixed(2); // 2.d;

        alert("The sumatory of all prices is $"+pricesSumatory+"! and it's average is $"+pricesAverage+"!");
    }
    else
    {
        alert("You've entered something different than a number in one of the three boxes! Try again");
    }
}
function PrecioFinal () 
{
    var enterFirstPrice;
    var enterSecondPrice;
    var enterThirdPrice;
    var pricesSumatory;
    var IvaPrice;
    var finalPricePlus21Iva;

    enterFirstPrice = document.getElementById("txtIdPrecioUno").value;
    enterSecondPrice = document.getElementById("txtIdPrecioDos").value;
    enterThirdPrice = document.getElementById("txtIdPrecioTres").value;

    if(!isNaN(enterFirstPrice) && !isNaN(enterSecondPrice) && !isNaN (enterThirdPrice))
    {
        alert("Thanks for entering all the prices correctly!");

        enterFirstPrice = parseInt(enterFirstPrice);
        enterSecondPrice = parseInt(enterSecondPrice);
        enterThirdPrice = parseInt(enterThirdPrice);

        pricesSumatory = enterFirstPrice + enterSecondPrice + enterThirdPrice;
        IvaPrice = pricesSumatory * 0.21;
        finalPricePlus21Iva = pricesSumatory + IvaPrice;

        alert("The sumatory of all prices is $"+pricesSumatory+"! your final price with the 21% of IVA is $"+finalPricePlus21Iva+"!");
    }
    else
    {
        alert("You've entered something different than a number in one of the three boxes! Try again");
    }
}