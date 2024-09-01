function calcularIMC() {

    let form = document.querySelector('.form');
    let resultado = document.querySelector('.resultado');

    function recebeEventoForm(evento) {

        evento.preventDefault();
        let peso = form.querySelector('.peso');
        let altura = form.querySelector('.altura');
        let [imc, grau] = logicaIMC(peso, altura);

        resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (${grau})`;

    }

    function logicaIMC(peso, altura) {
        peso = Number(peso.value);
        altura = Number(altura.value);
        let imc = peso / ((altura / 100) * (altura / 100));
        let grau;

        if (imc > 40) {
            grau = "Obesidade Grau 3";
            return [imc, grau];
        }
        if (imc > 35) {
            grau = "Obesidade Grau 2";
            return [imc, grau];
        }
        if (imc > 30) {
            grau = "Obesidade Grau 1";
            return [imc, grau];
        }
        if (imc > 25) {
            grau = "Sobrepeso";
            return [imc, grau];
        }
        if (imc > 18.6) {
            grau = "Peso Normal";
            return [imc, grau];
        }
        if (imc < 18.5) {
            grau = "Abaixo do Peso";
            return [imc, grau];
        }

    }
    
    form.addEventListener('submit',recebeEventoForm);
}
calcularIMC();