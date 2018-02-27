function Mostrar()
{
  var importe;
  var importefinal;
  importe=prompt("Ingresar importe: ");
  importefinal=importe*1.21;
  document.getElementById('importeFinal').value=importefinal;
}
