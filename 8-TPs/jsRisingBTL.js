/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var edad;
 	var sexo;
 	var estadoCivil;
 	var sueldo;
 	var legajo;
 	var nacionalidad;
 	var sexof = 0;
 	var sexom = 0;
 	var soltero = 1;
 	var casados= 2;
 	var divorciados = 3;
 	var viudos = 4;
 	var argentinos = "a"
 	var extranjeros = "e"
 	var nacionalizados = "n"

 
 		edad=prompt("Ingrese su edad.");
 		edad=parseInt(edad);
 		while(edad < 18 || edad > 90 || isNaN(edad))
 		{
 			alert("Edad invalida.");
 			edad=prompt("Ingrese su edad.");
 			edad=parseInt(edad);
 		}
		sexo=prompt("Ingresar sexo.");
		while(sexo != "f" && sexo != "m" )
		{
			alert("Sexo invalido.");
			sexo=prompt("Ingresar sexo.");
		}
		if(sexo== "f" )
		{
			sexo = "Femenino"
		}
		else
		{
			if(sexo == "m")	
			{
				sexo = "Masculino"
			}
		}

 		estadoCivil= prompt("Ingresar su estado civil.");
		while(estadoCivil != soltero && estadoCivil != casados && estadoCivil!= divorciados && estadoCivil != viudos)
		{
			alert("Estado civil invalido, ingrese 1 = soltero, 2= casado, 3= divorciado y 4= viudo.")
			estadoCivil = prompt("Ingresar su estado civil.");
		}
		switch(estadoCivil)

		
		sueldo=prompt("Ingresar sueldo bruto (no menor a 8000).");
		sueldo=parseInt(sueldo);
		while(sueldo < 8000)
		{
			sueldo=prompt("Ingresar sueldo bruto (no menor a 8000).");
			sueldo=parseInt(sueldo);
		}

 		legajo= prompt("Ingrese el legajo.");
 		
 		while(legajo > 9999 || legajo < 1000)
 		{
 			alert("Legajo invalido.");
 			legajo= prompt("Ingrese el legajo.");
 		}
 		
 		nacionalidad=prompt("Ingresar nacionalidad.");
 		
 		while(nacionalidad != argentinos && nacionalidad != extranjeros && nacionalidad != nacionalizados)
 		{
 			alert("Nacionalidad invalida.");
 			nacionalidad= prompt("Ingresar nacionalidad.");
 		}
	 	alert("Edad: "+edad);
	 	alert("Sexo: "+sexo);
	 	alert("Estado Civil: "+estadoCivil);	
		alert("Sueldo: "+sueldo);
		alert("Legajo: "+legajo);
		alert("Nacionalidad: "+nacionalidad);
}
 

