function mostrarAumento()
{
	var x=document.getElementById("importe").value;
    x=parseInt(x);
    y=x-((x*25)/100);
    document.getElementById("resultado").value=y;
}
