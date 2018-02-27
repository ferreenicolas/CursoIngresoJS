function Mostrar()
{
 	var precio;
 	var porcentajeDeDescuento;
 	var importeFinal;
 	var descuento;
 	var importeFinalFinal;

 	precio =prompt("Precio.");	
 	porcentajeDeDescuento = prompt("Porcentaje de descuento.");
 	porcentajeDeDescuento= parseInt(porcentajeDeDescuento);
 	precio =parseInt(precio);

 	 descuento = porcentajeDeDescuento / 100 // 0.20
 	 importeFinal = descuento * precio //
 	 
 	
 	document.getElementById('importeFinal').value = importeFinal;


// 3 numeros e ingresar cual es el mayor


  /*var importefinal;
  var importeproducto;
  var importemedio;

  importeproducto=parseInt(prompt("Importe")); 
  importemedio= importeproducto *21/100;
  importefinal= importeproducto + importemedio;
  document.getElementById('importeFinal').value=importefinal;*/

}
