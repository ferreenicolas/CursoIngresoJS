function Mostrar()
{

	//variables
	var largo;
	var ancho;
	var resultadolados;
	var resultado;
	//asignaciones
	largo=document.getElementById('largo').value;
	ancho=document.getElementById('ancho').value;
	//cuentas
	resultadolados= largo *2 + ancho * 2;
	resultado = resultadolados *3

	//final
	alert(resultado)


}
