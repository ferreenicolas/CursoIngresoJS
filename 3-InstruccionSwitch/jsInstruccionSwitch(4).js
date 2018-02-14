function Mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

	//alert (mesDelAño);
	// enero 31, feb 28, mar31,ab30,may31,jun30
	//jul31,agos31,sep30,oct31,nov30,dic31

	switch(mesDelAño)
	{
		case "Febrero":
		alert("Tiene 28.");
			break;

		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
		alert("Tiene 30 días.");
			break;

		default:
		alert("Tiene 31 días.");
		
		
	}	
	
	



}//FIN DE LA FUNCIÓN