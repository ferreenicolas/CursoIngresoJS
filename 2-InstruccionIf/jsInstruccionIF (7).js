function Mostrar()
{
//tomo la edad  
var estadoCivil= document.getElementById('estadoCivil').value;
var edad= document.getElementById('edad').value;

if(edad<18 && estadoCivil != "Soltero")
{
	alert("Es muy pequeño para NO ser soltero.");
}


// ! niega la condicion 
// == comparacion - mismo tipo

/*
"Soltero"	
"Casado"
"Divorciado"
*/

}//FIN DE LA FUNCIÓN