// se ingresa hasta q el usuario quiera el nombre d un animal, el peso del mismo(validar q sea mayor a 0) y la temperatura del habitat
// de este animal(entre -40 y 40). informar la cantidad de temperaturas pares la cantidad de temperaturas impares el nombre del animal
// mas pesado, el nombre del animal menos pesado, la cantidad de animales q viven en habitat menores a 0(inclusive), el promedio
//del peso de todos los animales, la temperatura max y la min.
function Mostrar()
{
	var animal;
	var peso;
	var temperatura;
	var contadorTemperaturasPares = 0;
	var contadorTemperaturasImp = 0;
	var animalMas;
	var animalMenos;
	var contadorAnimalesMenosCero = 0;
	var acumuladorPeso = 0;
	var tempMax;
	var tempMin;
	var rta= "";
	var contador = 0;


	while(rta!= "no")
	{
		contador ++;
		animal= prompt("Ingresar nombre del animal"); //animal
		
		peso= prompt("Ingresar el peso del animal"); //peso
		peso=parseInt(peso);
		while(peso < 0 || isNaN(peso))
		{
			alert("Peso invalido.");
			peso= prompt("Ingresar el peso del animal");
			peso=parseInt(peso);
		}
		if(contador == 1)
		{
			animalMas = peso;
			animalMenos = peso;
			animal = animalMas;
			animal = animalMenos;
		}
		
		
		if(peso > animalMas)
		{
			animalMas = animal;

		}
		else
		{
			if(peso < animalMenos)
			{
				animalMenos = animal;

			}
		}
		

		temperatura= prompt("Ingresar temperatura."); //temperatura
		temperatura= parseInt(temperatura);

		while(temperatura < -40 || temperatura > 40 || isNaN(temperatura))
		{
			alert("Temperatura invalida.");
			temperatura= prompt("Ingresar temperatura.");
			temperatura= parseInt(temperatura);
		}
		if(temperatura %2 == 0 && temperatura != 0)
		{
			contadorTemperaturasPares++		
		}
		else
		{
			if(temperatura != 0)
			{
				contadorTemperaturasImp++
			}
		}


		rta= prompt("¿Desea ingresar?");
	}

	alert(animalMas);
	alert(animalMenos);
	
}

