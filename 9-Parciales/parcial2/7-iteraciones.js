//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nota;
	var alumno;
	var sexo;
	var sexof = 0;
	var sexom = 0;
	var notaBaja;
	var promedio;
	var acumulador=0;
	var contadorVaronesSeis=0;
	
	for(contador=0;contador<6;contador++)
	{
		nota= prompt("Ingresar nota.");
		nota=parseInt(nota);
		while(nota < 0 || nota > 10|| isNaN(nota))
		{
			alert("Nota invalida.");
			nota= prompt("Ingresar nota.");
			nota=parseInt(nota);
		}
		sexo=prompt("Ingresar sexo.");

		while(sexo != "f" && sexo != "m" )
		{
			alert("Sexo invalido.");
			sexo=prompt("Ingresar sexo.");
		}
		if(sexo== "f" )
		{
			sexof++
		}
		else
		{
			if(sexo == "m")	
			{
				sexom++
			}
		}

		if(contador==0)
		{
			notaBaja= nota;
		}
		
		if(nota < notaBaja)
		{
			notaBaja=nota;
		}
		if(nota > 5 && sexo== "m")
		{
			contadorVaronesSeis++
		}

		acumulador = acumulador + nota;
	}
	promedio= acumulador / 6;
	document.write("<br> El promedio general de notas es: " +promedio); 
	document.write("<br> La nota mas baja fue: " +notaBaja);
	document.write("<br> La cantidad de varones con nota mayor o igual a 6 son: " +contadorVaronesSeis);
}

