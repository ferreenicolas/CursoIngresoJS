function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var promedio;
	var suma;
	var numeroMayor;
	var numeroMenor;


	numeroUno= prompt("Numero uno");
	numeroDos=prompt("Numero dos");
	numeroTres= prompt("Numero tres");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	numeroTres=parseInt(numeroTres);

	if(numeroTres > numeroDos && numeroTres > numeroUno)
	{
		numeroMayor = numeroTres
	}
	else
	{
		if(numeroDos > numeroUno && numeroDos > numeroTres)
		{
			numeroMayor = numeroDos
		}
		else
		{
			numeroMayor= numeroUno
		}
	}

	if(numeroTres < numeroDos && numeroTres < numeroUno)
	{
		numeroMenor = numeroTres
	}
	else
	{
		if(numeroDos < numeroUno && numeroDos < numeroTres)
		{ 
			numeroMenor = numeroDos
		}
		else
		{
			numeroMenor= numeroUno
		}
	} 

	
		
	alert("el numero mayor es " +numeroMayor+ " y el menor es " + numeroMenor);

}
	







		/*var numeroUno;
	var numeroDos;
	var suma;
	var multi;
	var resta;


	numeroUno = prompt("Ingrese su primer numero.");

	numeroDos = prompt("Ingrese su segundo numero.");

	numeroUno = parseInt(numeroUno);

	numeroDos = parseInt(numeroDos);


	while(numeroUno== 0 || numeroDos== 0)
	{
		numeroUno = prompt("Ingrese su primer numero.");

		numeroDos = prompt("Ingrese su segundo numero.");
	}

	if(numeroUno > numeroDos)
	{
		resta = numeroUno - numeroDos;
		document.write(resta);
	}
	else
	{
		if(numeroUno == numeroDos)
		{
			multi = numeroUno * numeroDos;
			document.write(multi);
		}
		else
		{
			suma = numeroUno + numeroDos;
			document.write(suma);
		}
	} */

// MAYOR APUNTA HACIA LA DERECHA REVERENDISIMO FFFFORRO
// MENOS APUNTA HACIA LA IZQUIERDA REVERENDISIMO PPPPPELOTUDO

