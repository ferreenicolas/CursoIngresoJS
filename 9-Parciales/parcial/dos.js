function Mostrar()
{
  var importefinal;
  var importeproducto;
  var importemedio;

  importeproducto=parseInt(prompt("Importe")); 
  importemedio= importeproducto *21/100;
  importefinal= importeproducto + importemedio;
  document.getElementById('importeFinal').value=importefinal;

}
