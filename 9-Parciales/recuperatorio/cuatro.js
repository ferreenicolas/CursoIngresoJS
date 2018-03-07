function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var suma;
	var resultado;

	numeroUno = prompt("Ingrese el primer numero.");
	numeroDos = prompt("Ingrese el segundo numero.");

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	suma = numeroUno + numeroDos;
	suma = parseInt(suma);

	if(suma > 0)
	{
		resultado = "Positivo.";
	}
	else
	{
		if(suma < 0)
		{
			resultado = "Negativo.";
		}
		else
		{
			resultado = "Cero."
		}
	}
	document.write("<br> El resultado es: "+ resultado)
}
