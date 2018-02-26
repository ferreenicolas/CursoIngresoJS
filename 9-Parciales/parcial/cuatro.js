function Mostrar()
{
	var numeroUno;
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
	}

// MAYOR APUNTA HACIA LA DERECHA REVERENDISIMO FFFFORRO
// MENOS APUNTA HACIA LA IZQUIERDA REVERENDISIMO PPPPPELOTUDO

}
