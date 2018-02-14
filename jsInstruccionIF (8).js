function Mostrar()
{
//tomo la edad 
var edad= document.getElementById('edad').value;
var estadoCivil= document.getElementById('estadoCivil').value;


	if(edad > 17 && estadoCivil == "Soltero")
	{
		alert("Es soltero y no es menor.");
	}	if(edad < 18 && estadoCivil !== "Soltero") 	
		{	
			console.log("NO HACER NADA");
		}
	
//uso console.log y console.info("cartel", variable);

}//FIN DE LA FUNCIÓN