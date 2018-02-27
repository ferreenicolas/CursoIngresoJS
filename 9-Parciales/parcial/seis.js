function Mostrar()
{
	// -60 -50 0 20 60 10
	// ingresar equis numeros,entre -50 y 50(validarlos) informar cuantos pares e impares hay y el promedio de los positivos
	//ademas del maximo y el minimo.

	var numero;
	var respuesta= "si"
	var contador = 0;
	var acumulador= 0;
	var pares = 0;
	var impares = 0;
	var maximo;
	var minimo;
	var promedioPos;
	var contadorPar = 0;
	var contadorImpar = 0;
	var contadorPos = 0;
	var acumuladorPos = 0;


	
	
	while(respuesta == "si")
	{		
		numero = prompt("Numero")
		numero = parseInt(numero);
		while(numero < -51 || numero > 51)
		{
			alert("Numero invalido");
			numero = prompt("Numero");
			numero = parseInt(numero);
		}


		contador ++;
		acumulador  = acumulador + numero;
		
		respuesta = prompt("Ingrese si para ingresar otro numero.")
		
		if(numero % 2 == 0 && numero != 0)
		{
			contadorPar++ 
		}
		else
		{
			if(numero !=0)
			{
				contadorImpar++
			}

		if(numero > 0)
		{
			acumuladorPos++;
			acumulador = acumulador + numero;	
		}

		




		
		}



		document.write("<br> Cantidad de numeros ingresados: "+ contador);
		document.write("<br> Suma de los numeros ingresados: "+ acumulador);
		document.write("<br> Cantidad de numeros pares: "+ contadorPar);
		document.write("<br> Cantidad de numeros impares: "+ contadorImpar);
		document.write("<br> Promedio positivos: " +promedioPos);



	}
}

	/*var importeVentas;
	var importeMinimo;
	var importeMaximo; 
	var dia;
	

	

	for(dia = 1; dia < 25; dia++)
	{
		importeVentas= prompt("Importe de ventas.");
		importeVentas = parseInt(importeVentas);


		while(importeVentas < 1)
		{
			importeVentas= prompt("Importe de ventas.");
			importeVentas = parseInt(importeVentas);
		}
		if(dia == 1)
		{
			 importeMinimo = importeVentas;
			 importeMaximo = importeVentas; 
		}

		if (importeVentas < importeMinimo)
		{
			importeMinimo = importeVentas;
		}
		else
		{
			if(importeVentas > importeMaximo)
			{
				importeMaximo = importeVentas;
			}
		}
	}
	document.write("<br> El importe máximo es: " + importeMaximo);
	document.write("<br> El importe mínimo es: " + importeMinimo); */



	












	

/*	for(dia = 1; dia < 25; dia++)
	{
		importeMinimo ;
		importeMaximo ;
		importeVentas= prompt("Ingrese el importe del día.");
		
		
		while(importeVentas <=0)
		{
			importeVentas= prompt("Ingrese el importe del día.");
		}

		if(dia ==1)
		{
			importeMinimo= importeVentas;
			importeMaximo= importeVentas;
		}
		else
		{
			if(importeMinimo < importeVentas )
			{
				importeMinimo = importeVentas;	
						
			}
			else
			{
				if(importeMaximo > importeVentas)
				{
					importeMaximo = importeVentas;
					
				}
			}
		}

	}
	
*/


	



	// 



