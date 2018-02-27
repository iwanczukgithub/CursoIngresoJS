function Mostrar()
{
	var numero1;
	var numero2;
	var numero3;

	numero1=prompt("Ingrese el numero 1:");
	numero2=prompt("Ingrese el numero 2:");
	numero3=prompt("Ingrese el numero 3:");

	if(numero1>numero2&&numero1>numero3)
	{
		alert("El numero "+numero1+" es el mayor.");
		if(numero2<numero3)
		{
		alert("El numero "+numero2+" es el menor.");
		}
		else
		{
		alert("El numero "+numero3+" es el menor.");
		}
	}

	if(numero2>numero1&&numero2>numero3)
	{
		alert("El numero "+numero2+" es el mayor.");
		if(numero1<numero3)
		{
		alert("El numero "+numero1+" es el menor.");
		}
		else
		{
		alert("El numero "+numero3+" es el menor.");
		}
	}

	if(numero3>numero1&&numero3>numero2)
	{
		alert("El numero "+numero3+" es el mayor.");
		if(numero2<numero1)
		{
		alert("El numero "+numero2+" es el menor.");
		}
		else
		{
		alert("El numero "+numero1+" es el menor.");
		}
	}
	
	if(numero1==numero2&&numero2==numero3)
	{
		alert("Son iguales.");
	}
}
