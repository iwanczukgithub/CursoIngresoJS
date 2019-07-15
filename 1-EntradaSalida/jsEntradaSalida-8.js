/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var x=document.getElementById("numeroDividendo").value;
    var y=document.getElementById("numeroDivisor").value;
    x=parseInt(x);
    y=parseInt(y);
   var resultado= x % y;
   alert("el resto es   " + resultado);
}
