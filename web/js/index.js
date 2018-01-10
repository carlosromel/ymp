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

    $(".someTimer").TimeCircles();
});

function anoBissexto(ano) {

    return new Date(ano, 1, 29).getDate() === 29;
}

function quantidadeDiasAno(ano) {

    return anoBissexto(ano) ? 366 : 365;
}

function formatarData(data) {

    return ('0' + data.getDate()).slice(-2) + '/' +
            ('0' + (data.getMonth() + 1)).slice(-2) + '/' +
            ('0000' + data.getFullYear()).slice(-4) + ' ' +
            ('0' + data.getHours()).slice(-2) + ':' +
            ('0' + data.getMinutes()).slice(-2) + ':' +
            ('0' + data.getSeconds()).slice(-2);
}

function formatarDataISO(data) {

    return ('0000' + data.getFullYear()).slice(-4) + '-' +
            ('0' + (data.getMonth() + 1)).slice(-2) + '-' +
            ('0' + data.getDate()).slice(-2) + ' ' +
            ('0' + data.getHours()).slice(-2) + ':' +
            ('0' + data.getMinutes()).slice(-2) + ':' +
            ('0' + data.getSeconds()).slice(-2);
}

function criarCronometro(descricao, data, span) {
    var titulo = document.createElement('h2');
    var legenda = document.createElement('div');
    var cronometro = document.createElement('div');
    var corpo = document.createElement('div');

    titulo.textContent = descricao;

    legenda.style.textAlign = 'center';
    legenda.appendChild(titulo);

    cronometro.classList.add('someTimer');
    cronometro.setAttribute('data-date', formatarDataISO(data));

    if (parseFloat(span) > 0) {
        cronometro.setAttribute('data-span', span);
    }

    corpo.appendChild(legenda);
    corpo.appendChild(cronometro);

    return corpo;
}
