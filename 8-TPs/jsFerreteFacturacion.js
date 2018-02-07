/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1;
	var precio2;
	var precio3;
	var resultado;

precio1= parseInt(document.getElementById('PrecioUno').value);
precio2= parseInt(document.getElementById('PrecioDos').value);
precio3= parseInt(document.getElementById('PrecioTres').value);
resultado= precio1+ precio2+ precio3;

alert(resultado);


}
function Promedio () 
{
	var precio1;
	var precio2;
	var precio3;
	var resultado1;
	var resultadofinal;


precio1= parseInt(document.getElementById('PrecioUno').value);
precio2= parseInt(document.getElementById('PrecioDos').value);
precio3= parseInt(document.getElementById('PrecioTres').value);
resultado1= precio1+ precio2+ precio3;
resultadofinal= resultado1 / 3;

alert(resultadofinal)
}
function PrecioFinal () 
{
	var precio1;
	var precio2;
	var precio3;
	var resultadoneto;
	var resultado21;
	var resultadoiva;


precio1= parseInt(document.getElementById('PrecioUno').value);
precio2= parseInt(document.getElementById('PrecioDos').value);
precio3= parseInt(document.getElementById('PrecioTres').value);
resultadoneto= precio1+ precio2+ precio3;
resultado21= resultadoneto *21 /100 ;
resultadoiva= resultadoneto + resultado21;
alert(resultadoiva);

}