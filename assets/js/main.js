function calcularIMC() {

    let form = document.querySelector('.form');
    let resultado = document.querySelector('.resultado');

    function recebeEventoForm(evento) {

        evento.preventDefault();

        let peso = form.querySelector('.peso');
        let altura = form.querySelector('.altura');
        peso = Number(peso.value);
        altura = Number(altura.value);

        let imc = peso / ((altura / 100) * (altura / 100));
        let grau;

        if (imc < 18.5) {
            grau = "Abaixo do Peso";


        }
        if (18.6 < imc && imc < 24.9) {
            grau = "Peso Normal";


        }
        if (25 < imc && imc < 29.9) {
            grau = "Sobrepeso";


        }
        if (30 < imc && imc < 34.9) {
            grau = "Obresidade Grau 1";


        }
        if (35 < imc && imc < 39.9) {
            grau = "Obresidade Grau 2";


        }
        if (40 < imc) {
            grau = "Obresidade Grau 3";


        }
        console.log(imc, grau);
        resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (${grau})`;




    }
    form.addEventListener('submit', recebeEventoForm);



}
calcularIMC();