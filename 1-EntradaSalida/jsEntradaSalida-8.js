function SacarResto()
{
	var x=document.getElementById("numeroDividendo").value;
    var y=document.getElementById("numeroDivisor").value;
    x=parseInt(x);
    y=parseInt(y);
   var resultado=x%y;
   alert("el resto es "+resultado);
}
