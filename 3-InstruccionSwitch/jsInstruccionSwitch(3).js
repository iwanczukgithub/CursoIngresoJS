function Mostrar()
{
//tomo la edad  
var mes=document.getElementById('mes').value;

if(mes=="Febrero")
{
	alert("Este mes no tiene más de 29 días.");
}
if(mes!="Febrero")
{
	alert("Este mes tiene 30 o más días.");
}
//alert (mesDelAño);
}//FIN DE LA FUNCIÓN