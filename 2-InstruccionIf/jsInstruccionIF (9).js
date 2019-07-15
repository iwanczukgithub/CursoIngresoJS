function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var x = (Math.random()*100);
	x=Math.round(x);
	//alert(x);
	document.getElementById("demo").innerHTML = Math.floor(Math.random()*1000);
}//FIN DE LA FUNCIÓN