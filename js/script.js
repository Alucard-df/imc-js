function calcularImc() {
    let altura = document.getElementById('altura').value;
    let peso   = document.getElementById('peso').value;
    let result = document.getElementById('result');
    let imc    = document.getElementById('imc');

    // substitui , por .
    altura = altura.replace(',' , '.');
    peso   = peso.replace(',' , '.');

    // calcular imc
    let calculo = peso / (altura * altura);

    // arredondando valores, tem colocar antes do resultado
    calculo = calculo.toFixed(2);

    // mostra na tela o imc do usuário
    result.innerHTML = calculo.replace('.' , ',') + '<br>';

    // mostra se o usuário está dentro do peso ideal ou não
    if (calculo < 18.5)
        imc.innerHTML = "Você está abaixo do peso.";
    else if (calculo >= 18.5 && calculo <= 24.9)
        imc.innerHTML = "Você está no peso ideal.";
    else if (calculo >= 25 && calculo <= 29.9)
        imc.innerHTML = "Você está acima do peso.";
    else if (calculo >= 30 && calculo <= 40)
        imc.innerHTML = "Você está com obesidade.";
    else 
        imc.innerHTML = "Você está com obesidade mórbida.";    
}

function resetar() {
    document.getElementById("result").innerHTML = "";
    document.getElementById("imc").innerHTML = "";
}