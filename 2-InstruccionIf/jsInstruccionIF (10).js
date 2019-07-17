function mostrar()
{
	var x=(Math.random()*10);
	x=Math.round(x);
    if(x>=9)
    {
		alert("Excelente.");
		}
    else if(x>=4)
    {
		alert("Aprobo.");
		}
    else
    {
		alert("Vamos, la proxima se puede.");
		}
	  alert(x);
}
