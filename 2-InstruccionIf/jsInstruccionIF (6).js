function Mostrar()
{
//tomo la edad  
	var edad

	edad= document.getElementById('edad').value;

	if(edad<13)
	{
      alert("Niño");
	} else
	{
		if(edad>17)
		{
			alert("Adulto");
		} else
		if(edad>12 || edad<19){
			alert("Adolescente");

	}
		}



}//FIN DE LA FUNCIÓN