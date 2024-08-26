//Cálculo do ICMS

function inserirDados() {
    let peso = parseFloat(prompt("Insira seu peso em kg:"));
    let altura = parseFloat(prompt("Insira sua altura em metros:"));
    return { peso, altura };
}


function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

o
function mostrarResultado(imc) {
    alert("Seu IMC é: " + imc.toFixed(2));
}


function calcularEExibirIMC() {
    let dados = inserirDados();
    let imc = calcularIMC(dados.peso, dados.altura);
    mostrarResultado(imc);
}


calcularEExibirIMC();