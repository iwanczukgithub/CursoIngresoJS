/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var x=document.getElementById("importe").value;
    
    x=parseInt(x);
    y=x-((x*25)/100);
    document.getElementById("resultado").value=y;
}
