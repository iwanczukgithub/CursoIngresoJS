function mostrarAumento()
{
    var x=document.getElementById("sueldo").value;

    x=parseInt(x);
    y=((x*10)/100)+x;
    document.getElementById("resultado").value=y;
}
