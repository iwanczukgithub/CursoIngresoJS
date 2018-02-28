//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero1;
	var numero2;
	var numero3;
	numero1=prompt("Ingrese el numero1:");
	numero1=parseInt(numero1);
	numero2=prompt("Ingrese el numero2:");
	numero2=parseInt(numero2);
	
	if(numero1==numero2)
	{
		numero3=numero1*numero2;
	}

	else if(numero1>numero2)
	{
		numero3=numero1-numero2;
	}

	else
	{
		numero3=numero1+numero2;
	}

	document.write(numero3);
}

