function Mostrar()
{
	var importeVentas;
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
		while(dia == 1)
		{
			 importeMinimo = 1;
			 importeMaximo = 1; 
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
}



	












	

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



