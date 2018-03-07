function Mostrar()
{
	var peso;
	var maxPes;
	var minPes;

	for(contador=0; contador < 50; contador++)
	{
		peso = prompt("Ingresar el peso en kilos.");
		peso = parseInt(peso);
		while(peso < 1 || isNaN(peso))
		{
			alert("Valor invalido.");
			peso = prompt("Ingresar el peso en kilos.");
			peso = parseInt(peso);
		}

		if(contador == 1)
		{
			maxPes = peso;
			minPes = peso;
		}
		if(peso > maxPes)
		{
			maxPes = peso;
		}
		else
		{
			if(peso < minPes)
			{
				minPes = peso;
			}
		}
	}
	alert("El mas pesado fue: "+maxPes+ " y el menos pesado fue: "+minPes);
}
	
