//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var contador;
	var mayor;
	var menor;

	for(contador=0;contador<7;contador++)
	{
		importe=prompt("Ingrese importe.");
		importe=parseInt(importe);
		while(importe < 1)
		{
			alert("Importe invalido");
			importe=prompt("Ingrese importe.");
			importe=parseInt(importe);
		}

		if(contador==0)
		{
			mayor=importe;
			menor=importe;
		}

		if(importe > mayor)
		{
			mayor= importe;
		}
		else
		{
			if(importe < menor)
			{
				menor= importe;
			}
		}
	
	}
	document.write("<br> el menor importe de venta fue: "+menor);
	document.write("<br> el mayor importe de venta fue: "+mayor);
}

