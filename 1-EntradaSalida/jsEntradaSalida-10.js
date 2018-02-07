/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var importe;
	var resultado;
	var descuento25;
	
	

	importe=document.getElementById('importe').value;
	
	importe=parseInt(importe);
	resultado=parseInt(resultado);

	descuento25= importe * 0.25;
	resultado= importe - descuento25;
	

	document.getElementById('resultado').value=resultado;
}
