/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	var nombre;
	var edad;

	nombre = prompt("por favor ingresa tu nombre");
	edad = prompt("por favor ingresa tu edad");

	alert("Usted se llama"+ nombre +"y tiene" "+edad+" "años");
}

