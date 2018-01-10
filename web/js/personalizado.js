$(function () {
    var agora = new Date();
    var diasAno = 365;
    var horasAno = 24 * diasAno;
    var minutosAno = 60 * horasAno;
    var segundosAno = 60 * minutosAno;
    var milisegundosAno = 1000 * segundosAno;
    var primeiroDiaAno = new Date(agora.getFullYear(), 0, 1, 0, 0, 0);
    var ultimoDiaAno = new Date(agora.getFullYear(), 11, 31, 23, 59, 59);
    var fimMes = new Date();
    var fimSemana = new Date();
    var cronometros = document.querySelector('#cronometros');
    var proximoFeriado = new Date(2018, 0, 25);
    var rafaEstavel = new Date(2018, 5, 11);

    fimMes.setMonth(fimMes.getMonth() + 1, -1);

    fimSemana.setHours(0);
    fimSemana.setMinutes(0);
    fimSemana.setSeconds(0);

    if (fimSemana.getDay() < 6) {
        fimSemana.setMonth(fimSemana.getMonth(), fimSemana.getDate() + 6 - fimSemana.getDay());
    } else {
        fimSemana.setMonth(fimSemana.getMonth(), fimSemana.getDate() + 13 - fimSemana.getDay());
    }

    cronometros.appendChild(criarCronometro('Fim da semana', fimSemana, 7));
    cronometros.appendChild(criarCronometro('Próximo feriado', proximoFeriado), 30);
    cronometros.appendChild(criarCronometro('Fim do mês', fimMes, 30));
    cronometros.appendChild(criarCronometro('Rafa estável', rafaEstavel));
    cronometros.appendChild(criarCronometro('Fim do ano', ultimoDiaAno));

    $(".someTimer").TimeCircles();

    $('#sandbox-container input').datepicker({
        daysOfWeekHighlighted: "0,6",
        autoclose: true,
        todayHighlight: true
    });
});

function formatarDataISO(data) {

    return ('0000' + data.getFullYear()).slice(-4) + '-' +
            ('0' + (data.getMonth() + 1)).slice(-2) + '-' +
            ('0' + data.getDate()).slice(-2) + ' ' +
            ('0' + data.getHours()).slice(-2) + ':' +
            ('0' + data.getMinutes()).slice(-2) + ':' +
            ('0' + data.getSeconds()).slice(-2);
}

function criarCronometro(titulo, data, span) {
    var corpo = document.createElement('div');
    var legenda = document.createElement('div');
    var cronometro = document.createElement('div');
    var tituloH = document.createElement('h6');

    tituloH.textContent = titulo;

    legenda.style.textAlign = 'center';
    legenda.appendChild(tituloH);

    cronometro.classList.add('someTimer');
    cronometro.setAttribute('data-date', formatarDataISO(data));

    if (parseFloat(span) > 0) {
        cronometro.setAttribute('data-span', span);
    }

    corpo.appendChild(legenda);
    corpo.appendChild(cronometro);

    return corpo;
}
