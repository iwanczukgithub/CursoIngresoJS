function Mostrar()
{
//tomo la edad  
var mes=document.getElementById('mes').value;
switch(mes)
{
case "Julio":
case "Agosto":
	alert("Estamos en invierno, abrigate que hace frio.");
	break;
case "Enero":
case "Febrero":
case "Marzo":
case "Abril":
case "Mayo":
case "Junio":
	alert("Falta para el invierno.");
	break;
case "Septiembre":
case "Octubre":
case "Noviembre":
case "Diciembre":
	alert("Ya pasó el invierno.");
	break;
}
}//FIN DE LA FUNCIÓN