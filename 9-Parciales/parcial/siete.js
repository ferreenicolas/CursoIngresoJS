function Mostrar()
{
	//pedir hasta q el cliente quiera while rta si una letra, validar q sea una letra y no un numero 
	//ingresar un numero entre -200 y 200 inclusive. el promedio de todos los numeros q se ingresaron
	//dsp d una vocal, la letra del maximo y la letra del minimo
	
	var letra;
	var contador = 0;
	var numero;
	var respuesta = "si";
	var contador= 0;
	var vocal;
	var letraMaximo;
	var letraMinimo;
	var contadorVocal=0;
	var acumulador=0;

	

	while(respuesta != "no")
	{	

		letra = prompt("Ingrese letra");
		
		while(!(isNaN(letra))) // validacion letra <<<<<<
		{
			letra = prompt("Ingrese si o si una letra");
		}

		numero= prompt("Ingrese un numero");
		numero= parseInt(numero);

		while(numero < -201 || numero > 201 || isNaN(numero))
		{
			numero= prompt("Ingrese un numero entre -200 y 200")
			numero= parseInt(numero);
		}

		switch(letra)
		{
			case "a":
			case "e":
			case "i":
			case "o":
			case "u":

			contadorVocal++
			acumulador = acumulador + numero;
			break;

		}
		

		respuesta = prompt("Ingrese si para continuar");
	}
	promedio = acumulador/contadorVocal;
	alert(promedio);


}
