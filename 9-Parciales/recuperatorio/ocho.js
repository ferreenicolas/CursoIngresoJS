function Mostrar()
{
	var numero;
	var rta = "";
	var acumuladorNum = 0;
	var promedio;
	var contador= 0;
	var numPar= 0;
	var suma;
	var numMax;
	var numMin;


	while(rta != "no")
	{
		contador++;
		numero= prompt("Ingrese un numero.")
		numero= parseInt(numero);

		while(numero < 1)
		{
			alert("Numero invalido.")
			numero= prompt("Ingrese un numero.")
			numero= parseInt(numero);
		}

		if(numero % 2 == 0)
		{
			numPar++;
		}

		if(contador==1)
		{
			numMax = numero;
			numMin = numero;
		}

		if(numero < numMin)
		{
			numMin = numero;
		}
		else
		{
			if(numero > numMax)
			{
				numMax = numero;
			}
		}
		
		acumuladorNum = acumuladorNum + numero;

		rta= prompt("Ingrese no para salir.");
	}
	promedio = acumuladorNum / contador;


	document.write("<br> num pares: "+ numPar);
	document.write("<br> promedio: "+ promedio);
	document.write("<br> suma: "+ acumuladorNum);
	document.write("<br> max: "+numMax);
	document.write("<br> min: "+numMin);
}

// 2, 9, 4, 6
// 10,10,10,10,10,10
// 500 50 100 3
//