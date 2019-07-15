/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar(x,y)
{	
   // getNumeros(x,y);
   var x=document.getElementById("numeroUno").value;
    var y=document.getElementById("numeroDos").value;
    x=parseInt(x);
    y=parseInt(y);
   var resultado=x+y;
   alert("la suma es   " +resultado);
}

function restar()
{
	var x=document.getElementById("numeroUno").value;
    var y=document.getElementById("numeroDos").value;
    x=parseInt(x);
    y=parseInt(y);
   var resultado=x-y;
   alert("la resta es   " +resultado);
}

function multiplicar()
{ 
	var x=document.getElementById("numeroUno").value;
    var y=document.getElementById("numeroDos").value;
    x=parseInt(x);
    y=parseInt(y);
   var resultado=x*y;
   alert("la multiplicacion es   " +resultado);
}

function dividir()
{
	var x=document.getElementById("numeroUno").value;
    var y=document.getElementById("numeroDos").value;
    x=parseInt(x);
    y=parseInt(y);
   var resultado=x/y;
   alert("la division es   " +resultado);
}

/*function getNumeros(x,y)
{
    var x=document.getElementById("numeroUno").value;
    var y=document.getElementById("numeroDos").value;
    x=parseInt(x);
    y=parseInt(y);
    return x * y;
}*/