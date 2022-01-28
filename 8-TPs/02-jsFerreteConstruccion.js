/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var enterLenght;
    var enterWidth;
    var landPerimeter;
    var wireQtyToBuy;

    enterLenght = document.getElementById("txtIdLargo").value;
    enterWidth = document.getElementById("txtIdAncho").value;

    if(!isNaN(enterLenght) && !isNaN(enterWidth))
    {
        alert("Thanks for entering correctly the Lenght and Width of your land!");

        enterLenght = parseInt(enterLenght);
        enterWidth = parseInt(enterWidth);

        landPerimeter = (enterLenght * 2) + (enterWidth *2);

        wireQtyToBuy = landPerimeter * 3;

        alert("The quantity of wire you have to buy according to the perimeter of your land is ("+wireQtyToBuy+")Meters!");
    }
    else
    {
        alert("You've entered something different than a number in the Lenght or Width boxes! Try again");
    }
}
function Circulo () 
{
    var enterRadius;
    var radiusOperation;
    var wireQtyToBuy;

    enterRadius = document.getElementById("txtIdRadio").value;

    if(!isNaN(enterRadius))
    {
        alert("Thanks for entering correctly the Radius of your land!");

        enterRadius = parseInt(enterRadius);

        radiusOperation = 2 * Math.PI * enterRadius;

        wireQtyToBuy = radiusOperation * 3;
        wireQtyToBuy = wireQtyToBuy.toFixed(2);

        alert("The quantity of wire you have to buy according to the radius of your land is ("+wireQtyToBuy+")Meters!");
    }
    else
    {
        alert("You've entered something different than a number in the Radius Box! Try again");
    }
	
}
function Materiales () 
{
    var enterLenght;
    var enterWidth;
    var landPerimeter;
    var limeToBuy;
    var cementToBuy;

    enterLenght = document.getElementById("txtIdLargo").value;
    enterWidth = document.getElementById("txtIdAncho").value;

    if(!isNaN(enterLenght) && !isNaN(enterWidth))
    {
        alert("Thanks for entering correctly the Lenght and Width of your land!");

        enterLenght = parseInt(enterLenght);
        enterWidth = parseInt(enterWidth);

        landPerimeter = enterLenght * enterWidth;

        cementToBuy = enterLenght * 2;
        limeToBuy = enterWidth * 3;

        alert("The quantity of cement and lime you have to buy according to the perimeter of your land is ("+cementToBuy+") cement and ("+limeToBuy+") lime!");
    }
    else
    {
        alert("You've entered something different than a number in the Lenght or Width boxes! Try again");
    }
}