/* global expect */

describe('index', function () {

    describe('Cálculo de anos bissextos.', function () {
        it('Determinar um ano bissexto.', function () {
            expect(anoBissexto(2017)).toEqual(false);
        });

        it('Determinar um ano não bissexto.', function () {
            expect(anoBissexto(2016)).toEqual(true);
        });
    });

    describe('Obter o número de dias de um ano.', function () {
        it('Um ano comum possui 365 dias.', function () {
            expect(quantidadeDiasAno(2010)).toEqual(365);
        });

        it('Um ano bissexto possui 366 dias.', function () {
            expect(quantidadeDiasAno(2000)).toEqual(366);
        });
    });

    describe('Formatador de datas.', function () {
        it('Uma data no formato ISO (YYYY-MM-DD HH:MM:SS).', function () {
            expect(formatarDataISO(new Date(2018, 0, 1, 0, 0, 0))).toEqual('2018-01-01 00:00:00');
        });
    });
});
