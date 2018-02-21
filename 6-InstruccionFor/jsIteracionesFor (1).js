function Mostrar()
{
	var contadorDePositivos=0;
	var contadorDeNegativos=0;
	var contadorDeCeros=0;

	for(contador = -100; contador < 100; contador++)
	{
		if(contador>0)
		{
			contadorDePositivos++;
		}
		else
		{
			if(contador<0)
			{
				contadorDeNegativos++;
			}
			else
			{
				contadorDeCeros++;
			}
		}
	}
	document.write("Positivos: "+contadorDePositivos);
	document.write("<br>" + "Negativos: "+contadorDeNegativos);
	document.write("<br>" + "Ceros:"+contadorDeCeros);

}
	/*var contador=0;

	for(;;)
	{
		contador++;
		document.write("<br>"+contador);
		if(contador==10)
		{
			document.write("<br>break"+contador);
			break;
		}
		if(contador==5)
		{
			continue;
		}
		document.write("<br>continue"+contador);
	}*/