function Mostrar()
{
	var dia;
	
	dia = prompt("Ingrese el día aquí.");

	switch(dia)
	{
		case "sabado":
		case "domingo":
		case "Sabado":
		case "Domingo":
		case "sábado":
		case "Sábado":


		alert("Es fin de semana.");
		break;

		default:
		alert("A trabajar.");
	}




}
