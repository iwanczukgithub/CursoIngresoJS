	/*pedir el nombre, peso, y la temperatura del habitat de un animal
	(entre -40 y 40)
	debemos informar la cantidad de temperaturas pares ingresadas
	la cantidad de temperaturas impares
	el nombre del animal mas pesado
	el nombre del menos pesado
	la cantidad de animales cuyo habitat tiene menos de cero grados
	el promedio de peso de todos los animales
	la temperatura maxima y minima ingresadas*/

function Mostrar()
{
	var nombre; 
	var peso; 
	var temperatura; 
	var respuesta;
	var contadorTempPares = 0;
	var contadorTempImpares = 0;
	var contador = 0;
	var maximo = 0;
	var minimo = 0;
	var nombreDelMenosPesado;
	var nombreDelMasPesado;
	var contadorHabitatMenorCeroGrados = 0;
	var acumuladorPeso = 0;
	var temperaturaMaxima = 0;
	var temperaturaMinima = 0;

	while (respuesta != "no")
	{
		nombre = prompt("Ingrese el nombre de un animal");
		peso = prompt("Ingrese el peso del animal");		

		while(isNaN(peso)|| peso<=0)
		{
			peso = prompt("Ingrese el peso del animal");
		}

		peso = parseInt(peso);
		acumuladorPeso = acumuladorPeso + peso;
		
		temperatura = prompt("Ingrese la temperatura del habitat ( entre -40 y 40 grados)");

		while(temperatura < -40 || temperatura > 40 || isNaN(temperatura))
		{
			temperatura = prompt("Ingrese la temperatura del habitat ( entre -40 y 40 grados)");
		}

		if (temperatura % 2 == 0)
		{
			contadorTempPares++;
		}
		else
		{
			contadorTempImpares++;
		}

		if (temperatura < 0) 
		{
			contadorHabitatMenorCeroGrados++;
		}

		if (contador == 0) 
		{
			temperaturaMaxima = temperatura;
			temperaturaMinima = temperatura;
			maximo = peso;
			minimo = peso;
		}
		else
		{
			if (temperatura > temperaturaMaxima) 
			{
				temperaturaMaxima = temperatura;
			}

			if (temperatura < temperaturaMinima) 
			{
				temperaturaMinima = temperatura;
			}

			if (peso > maximo) 
			{
				maximo = peso;
				nombreDelMasPesado = nombre;
			}

			if (peso < minimo) 
			{
				minimo = peso;
				nombreDelMenosPesado = nombre;
			}
		}		

		contador++;

		respuesta = prompt("¿Desea ingresar otro animal?");
	}

	document.write("<br>" + "La cantidad de temperaturas pares ingresadas es: " + contadorTempPares);
	document.write("<br>" + "La cantidad de temperaturas pares ingresadas es: " + contadorTempImpares);
	document.write("<br>" + "El nombre del animal mas pesado es: " + nombreDelMasPesado);
	document.write("<br>" + "El nombre del animal menos pesado es: " + nombreDelMenosPesado);
	document.write("<br>" + "La cantidad de animales cuyo habitat tiene una temperatura menor a cero grados es: " + contadorHabitatMenorCeroGrados);
	document.write("<br>" + "El promedio de los pesos de los animales es: " + acumuladorPeso / contador);
	document.write("<br>" + "La temperatura maxima ingresada es: " + temperaturaMaxima);
	document.write("<br>" + "La temperatura minima ingresada es: " + temperaturaMinima);
}
