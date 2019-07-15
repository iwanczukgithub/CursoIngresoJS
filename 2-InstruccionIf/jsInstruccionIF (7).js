function mostrar()
{
//tomo la edad  


    var x=document.getElementById("edad").value;

    var y=document.getElementById("estadoCivil").value;


    if(x<18 && y!="Soltero" ){
     alert( "Es muy pequeño para NO ser soltero. ");
    }
        /*else if(x>=18) {
        alert("la persona es mayor de edad");
        }
        else {
        alert("niño o menor a 13años");
        }*/

}//FIN DE LA FUNCIÓN