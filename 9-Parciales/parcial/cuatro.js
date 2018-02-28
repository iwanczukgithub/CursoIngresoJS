function Mostrar()
{
	var numero1;
	var numero2;
	var numero3;

	numero1=prompt("Ingrese el numero 1:");
	numero2=prompt("Ingrese el numero 2:");
	numero3=prompt("Ingrese el numero 3:");
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);
	numero3=parseInt(numero3);

	if(numero1==numero2&&numero2==numero3)
	{
		alert("Son iguales.");
	}
	
	else if(numero1>=numero2&&numero1>=numero3)
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
	

	else if(numero2>=numero1&&numero2>=numero3)
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

	else if(numero3>=numero1&&numero3>=numero2)
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
}
/*
	var numerouno;
	var numerodos;
	var numerotres;
	var numerouno1;
	var numerodos2;
	var numerotres3;
	var Mayor;
	var Menor;
	
	numerouno1= prompt("Ingrese primer numero");
	numerodos2= prompt("Ingrese segundo numero");
	numerotres3= prompt("Ingrese tercer numero");

	numerouno=parseInt(numerouno1);
	numerodos=parseInt(numerodos2);
	numerotres=parseInt(numerotres3);

	if(numerouno>numerodos && numerouno>numerotres)
	{
		Mayor=numerouno;
	}
	else
		{
			if (numerodos>numerotres)
			{
		 		Mayor=numerodos;
			}
			else	
			{	
				Mayor=numerotres;
			}

		}
	
	if(numerouno<numerodos && numerouno<numerotres)
	{
		Menor=numerouno;
	}
	else
	{
		if(numerodos<numerotres)
		{
			Menor=numerodos;
		}
		else	
		{	
			Menor=numerotres;
		}

	}

	alert("El numero mayor es "+ Mayor);
	alert("El numero menor es "+ Menor);
*\