function mostrar()
{
//tomo la edad  


//tomo la edad  
var x=document.getElementById("edad").value;
 if(x>=13 && x<=17 ){
     alert( "la persona es un adolesente ");
 }
 else if(x>=18) {
    alert("la persona es mayor de edad");
}
else {
    alert("niño o menor a 13años");
}

}//FIN DE LA FUNCIÓN