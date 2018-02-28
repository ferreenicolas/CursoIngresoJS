//no se usa while, solo if. se ingresan dos numeros. si son iguales se concatenan. si el mayor es el primero
// se multiplican de lo contrario se restan.
function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	var resultado2;
	

	numeroUno = prompt("Ingrese el primer numero.");
	numeroDos = prompt("Ingrese el segundo numero.");

	
	if(numeroUno == numeroDos)
	{
		resultado = numeroUno + numeroDos;
	}
	else
	{
		numeroUno=parseInt(numeroUno);
		numeroDos=parseInt(numeroDos);

		if(numeroUno > numeroDos)
		{
			resultado = numeroUno * numeroDos;

		}
		else
		{
			resultado = numeroUno - numeroDos;
		}
	}
  	
  	if(resultado % 2 == 0 && resultado != 0)
	{
		alert(resultado + resultado2);
	}
	

  	
}









	/*
	var numeroUno;
	var numeroDos;
	var resultado;
	

	numeroUno = prompt("Ingrese el primer numero.");
	numeroDos = prompt("Ingrese el segundo numero.");
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	
	if(numeroUno == numeroDos)
	{
		resultado = numeroUno * numeroDos;
	}
	else
	{
		if(numeroUno < numeroDos)
		{
			resultado = numeroUno - numeroDos;
		}
		else
		{
			resultado =numeroUno + numeroDos;
		}
	}
	document.write(resultado); 
	*/

