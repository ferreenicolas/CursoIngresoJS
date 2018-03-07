function Mostrar()
{
	var edad;
	var sexo;
	var sexoM= 0;
	var acumuladorEdad=0;
	var edadMin;
	var promedio;
	
	for(contador=0; contador < 10; contador++)
	{
		edad= prompt("Ingresar edad.");
		edad= parseInt(edad);

		while(edad < 0 || edad > 100 || isNaN(edad))
		{
			alert("Invalido.");
			edad= prompt("Ingresar edad.");
			edad= parseInt(edad);
		}

		sexo= prompt("Ingresar sexo.");

		while(sexo != "f" && sexo!= "m" )
		{
			alert("Invalido. Ingrese m o f");
			sexo= prompt("Ingresar sexo.");
		}

		if(contador == 1)
		{
			edadMin= edad;
		}
		if(edad < edadMin)
		{
			edadMin = edad;
		}

		if(sexo == "m" && edad > 19)
		{
			sexoM++;
		}

		acumuladorEdad= acumuladorEdad + edad;
	}

	promedio = acumuladorEdad / 10;

	document.write("<br> El promedio: " + promedio);
	document.write("<br> La edad mas baja: "+ edadMin);
	document.write("<br> la cantidad de varones de edad mayor a 20: "+ sexoM);
}
