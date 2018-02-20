function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroactual=0;

while(contador<5)
{
 contador++
 numeroactual = prompt("Ingrese un numero");
 numeroactual = parseInt(numeroactual);
 acumulador = numeroactual+acumulador;
}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN