function Mostrar()
{
	var contador = -10;
	var contadorPositivo=0;
	var contadorNegativo=0;
	var contadorCero=0
	var iteraciones =-10;


	for(;;)
	{
		document.write("<br>" + contador);

		if(contador == 0)
		{
			contadorCero++
		}
		else
		{
			if(contador > 0)
			{
				contadorNegativo++
			}
			else
			{
				contadorPositivo++
			}
			if(contador 2%== 0)
			{
				contadorPar++
			}
			else
			{
				contadorImpar++
			}
		}

		contador++;
		if(contador == iteraciones)
		{
			break;
		}
	} 

	document.write("<br> Pares: " +contadorPar);
	document.write("<br> Impares: " +contadorImpar);
	document.write("<br> Ceros: " +contadorCero);
	document.write("<br> Positivos: " +contadorImpar);
	document.write("<br> Negativos: " +contadorCero);

}







	/*for(;;)
	{
		document.write("<br>" +contador);
		if(contador %2 == 0)
		{
			contadorPar++
		}
		else
		{
			contadorImpar++
		}
		if (contador == 0)
		{
			contadorCero++
		}	


		contador++;
		if(contador == 10)
		{
			break;
		}
	} 

	document.write("<br> Pares: " +contadorPar);
	document.write("<br> Impares: " +contadorImpar);
	document.write("<br> Ceros: " +contadorCero);
	*/


		


}