/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var nombre;
	var edad;

	nombre=prompt("Por favor ingresa tu nombre:");
	edad=prompt("Ingresa tu edad:");
	document.getElementById('z').value=nombre+" "+edad;
}

