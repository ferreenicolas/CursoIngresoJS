
function Mostrar()
{
	var base;
	var resultado;

	base = document.getElementById('laBase').value;
	base = parseInt(base);

	resultado= base * base;

	alert(resultado);
}
