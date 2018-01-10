$(function () {
    var cronometros = document.querySelector('#cronometros');
    var primeiroDiaAno = new Date(new Date().getFullYear(), 0, 1, 0, 0, 0);
    var milisegundosAno = 1000 * 60 * 60 * 24 * quantidadeDiasAno(new Date().getFullYear());
    var proximos = 5;

    for (var percentil = 0; percentil <= 100; ++percentil) {
        var percentual = percentil * (milisegundosAno - 1) / 100;
        var dataPercentual = new Date(primeiroDiaAno.getTime() + percentual);

        if (new Date() < dataPercentual) {
            var titulo = percentil + '% = ' + formatarData(dataPercentual);
            cronometros.appendChild(criarCronometro(titulo, dataPercentual));

            if (!--proximos) {
                break;
            }
        }
    }

    $(".someTimer").TimeCircles({
        time: {
            Days: {text: "Dias"},
            Hours: {text: "Horas"},
            Minutes: {text: "Minutos"},
            Seconds: {text: "Segundos"}
        }
    });
});
