
function Mostrar()
{
	var base;
	var perimetro;
	var superficie;
	var altura;
	base=document.getElementById('laBase').value;
	altura=prompt("Ingresar altura: ");

	perimetro=base*3;
	superficie=(base*altura)/2;
	
	alert("El perimetro es de "+perimetro+"mts, y la superficie es de "+superficie+"mts2");
}
