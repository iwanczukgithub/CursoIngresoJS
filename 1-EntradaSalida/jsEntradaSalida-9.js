/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var x=document.getElementById("sueldo").value;
    
    x=parseInt(x);
    y=((x*10)/100)+x;
    document.getElementById("resultado").value=y;
    //y=parseInt(y);
   //var resultado= x % y;
   //alert("el resto es   " + resultado);
	
}
