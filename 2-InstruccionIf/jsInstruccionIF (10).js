function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var x = (Math.random()*10);
	x=Math.round(x);
		if(x>=9){
		alert("EXELENTE");
		}
		else if(x>=4){
			alert("APROBO");
		}
		else{
			
			alert("Vamos, la proxima se puede");
		}
	alert(x);
}//FIN DE LA FUNCIÓN