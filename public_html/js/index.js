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

    fimMes.setMonth(fimMes.getMonth() + 1, -1);

    fimSemana.setHours(0);
    fimSemana.setMinutes(0);
    fimSemana.setSeconds(0);

    if (fimSemana.getDay() < 6) {
        fimSemana.setMonth(fimSemana.getMonth(), fimSemana.getDate() + 5 - fimSemana.getDay());
    } else {
        fimSemana.setMonth(fimSemana.getMonth(), fimSemana.getDate() + 12 - fimSemana.getDay());
    }

    cronometros.appendChild(criarCronometro('Fim da semana', fimSemana));
    cronometros.appendChild(criarCronometro('Fim do ano', ultimoDiaAno));

    $(".someTimer").TimeCircles();
});

function formatarDataISO(data) {

    return ('0000' + data.getFullYear()).slice(-4) + '-' +
            ('0' + (data.getMonth() + 1)).slice(-2) + '-' +
            ('0' + data.getDate()).slice(-2) + ' ' +
            ('0' + data.getHours()).slice(-2) + ':' +
            ('0' + data.getMinutes()).slice(-2) + ':' +
            ('0' + data.getSeconds()).slice(-2);
}

function criarCronometro(titulo, data) {
    var corpo = document.createElement('div');
    var legenda = document.createElement('div');
    var cronometro = document.createElement('div');
    var tituloH3 = document.createElement('h3');

    tituloH3.textContent = titulo;

    legenda.style.textAlign = 'center';
    legenda.appendChild(tituloH3);

    cronometro.classList.add('someTimer');
    cronometro.setAttribute('data-date', formatarDataISO(data));

    corpo.appendChild(legenda);
    corpo.appendChild(cronometro);

    return corpo;
}