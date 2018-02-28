//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var importeDos;
	var iva= 0.21;
	var importeFinal;

	importe= prompt("Ingrese el importe del producto.");
	importe= parseInt(importe);
	importeDos= importe * iva 
	importeDos= parseInt(importeDos);
	importeFinal= importe + importeDos;




	document.getElementById('importe').value = importeFinal;


	
}

