function Mostrar()
{
var sexo = prompt("Ingrese f o m:");

while(sexo!="f" && sexo!="m")
{
	sexo = prompt("ingrese f o m :");
}

document.getElementById('Sexo').value=sexo;
}//FIN DE LA FUNCIÓN