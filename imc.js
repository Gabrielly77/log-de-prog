<meta charset = "UTF-8">

<script>
	function pulaLinha(){
		document.write("<br><br>");
	}

	function mostra(frase){
		document.write(frase);
		pulaLinha();
	}

//IMC = peso / (altura * altura)
	
	function calcularImc(altura, peso){
		var imc = peso/(altura*altura);
		mostra(" O imc calculado é " + Math.round(imc));
	}

	calcularImc(1.83, 60);
	calcularImc(1.72, 68);

	

</script>
