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
    var estatisticas = document.querySelector('#estatisticas');

    fimMes.setMonth(fimMes.getMonth() + 1, -1);

    fimSemana.setHours(0);
    fimSemana.setMinutes(0);
    fimSemana.setSeconds(0);

    if (fimSemana.getDay() < 6) {
        fimSemana.setMonth(fimSemana.getMonth(), fimSemana.getDate() + 5 - fimSemana.getDay());
    } else {
        fimSemana.setMonth(fimSemana.getMonth(), fimSemana.getDate() + 12 - fimSemana.getDay());
    }

    estatisticas.appendChild(criarEstatistica('Dias ano', diasAno));
    estatisticas.appendChild(criarEstatistica('Primeiro dia', formatarData(primeiroDiaAno)));
    estatisticas.appendChild(criarEstatistica('Agora', formatarData(agora)));
    estatisticas.appendChild(criarEstatistica('Fim da semana', formatarData(fimSemana)));
    estatisticas.appendChild(criarEstatistica('Fim do mês', formatarData(fimMes)));
    estatisticas.appendChild(criarEstatistica('Último dia do ano', formatarData(ultimoDiaAno)));
    estatisticas.appendChild(criarEstatistica('Horas do ano', horasAno));
    estatisticas.appendChild(criarEstatistica('Minutos do ano', minutosAno));
    estatisticas.appendChild(criarEstatistica('Segundos do ano', segundosAno));
    estatisticas.appendChild(criarEstatistica('Milisegundos do ano', milisegundosAno));
});

function formatarData(data) {

    return ('0' + data.getDate()).slice(-2) + '/' +
            ('0' + (data.getMonth() + 1)).slice(-2) + '/' +
            ('0000' + data.getFullYear()).slice(-4) + ' ' +
            ('0' + data.getHours()).slice(-2) + ':' +
            ('0' + data.getMinutes()).slice(-2) + ':' +
            ('0' + data.getSeconds()).slice(-2) + '.' +
            ('000' + data.getMilliseconds()).slice(-3);
}

function criarEstatistica(nome, valor) {
    var linha = document.createElement('tr');
    var colunaTitulo = document.createElement('th');
    var colunaValor = document.createElement('td');

    linha.align = 'right';
    colunaTitulo.textContent = nome;
    colunaValor.textContent = valor;

    linha.appendChild(colunaTitulo);
    linha.appendChild(colunaValor);

    return linha;
}