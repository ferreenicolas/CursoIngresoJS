function Mostrar()
{
  var importe;
  var final;
  var descuento;

  importe= prompt("Ingrese el importe. ");
  importe= parseInt(importe);
  descuento= importe * 0.25;


  final= importe - descuento;
  
  document.getElementById('importeFinal').value = final;


}
