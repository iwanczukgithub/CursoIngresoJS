/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
 var x=document.getElementById("numeroUno").value;
 var y=document.getElementById("numeroDos").value;
 var resultado;
 x=parseInt(x);
 y=parseInt(y);
 resultado=x+y;
 alert(resultado);
}

