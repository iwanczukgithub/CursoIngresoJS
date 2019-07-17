function mostrar()
{
    var x=document.getElementById("edad").value;

    var y=document.getElementById("estadoCivil").value;

    if(x<18 && y!="Soltero")
    {
       alert( "Es muy pequeño para no ser soltero.");
    }
}
