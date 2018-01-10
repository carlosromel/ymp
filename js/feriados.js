$(function () {
    var cronometros = document.querySelector('#cronometros');

    cronometros.appendChild(criarCronometro('Aniversário de SP', new Date(2018, 0, 25)));
    cronometros.appendChild(criarCronometro('Carnaval', new Date(2018, 1, 12)));
    cronometros.appendChild(criarCronometro('Semana Santa', new Date(2018, 2, 28)));
    cronometros.appendChild(criarCronometro('Dia do Trabalho', new Date(2018, 4, 1)));
    cronometros.appendChild(criarCronometro('Corpus Christi', new Date(2018, 4, 31)));
    cronometros.appendChild(criarCronometro('Constituição de São Paulo', new Date(2018, 6, 9)));
    cronometros.appendChild(criarCronometro('Independência', new Date(2018, 8, 7)));
    cronometros.appendChild(criarCronometro('Finados', new Date(2018, 10, 1)));
    cronometros.appendChild(criarCronometro('República', new Date(2018, 10, 15)));
    cronometros.appendChild(criarCronometro('Consciência Negra', new Date(2018, 10, 20)));
    cronometros.appendChild(criarCronometro('Nossa Senhora', new Date(2018, 11, 12)));
    cronometros.appendChild(criarCronometro('Recesso', new Date(2018, 11, 20)));

    $(".someTimer").TimeCircles({
        time: {
            Days: {text: "Dias"},
            Hours: {text: "Horas"},
            Minutes: {text: "Minutos"},
            Seconds: {text: "Segundos"}
        }
    });
});
