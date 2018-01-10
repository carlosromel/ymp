/* global Highcharts */
/*
 * https://jsfiddle.net/highcharts/g54v7h5x/?utm_source=website&utm_medium=embed&utm_campaign=g54v7h5x
 * @returns {undefined}
 */

$(function () {
// Uncomment to style it like Apple Watch
    if (!Highcharts.theme) {
        Highcharts.setOptions({
            chart: {
//                backgroundColor: 'black'
            },
            colors: ['#7cb5ec', '#f7a35c', '#90ee7e', '#7798BF', '#aaeeee', '#ff0066',
                '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
            title: {
                style: {color: 'silver'}
            },
            tooltip: {
                style: {color: 'silver'}
            }
        });
    }

    function renderIcons() {

        // Move icon
        if (!this.series[0].icon) {
            this.series[0].icon = this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8])
                    .attr({
                        'stroke': '#303030',
                        'stroke-linecap': 'round',
                        'stroke-linejoin': 'round',
                        'stroke-width': 2,
                        'zIndex': 10
                    })
                    .add(this.series[2].group);
        }
        this.series[0].icon.translate(
                this.chartWidth / 2 - 10,
                this.plotHeight / 2 - this.series[0].points[0].shapeArgs.innerR -
                (this.series[0].points[0].shapeArgs.r - this.series[0].points[0].shapeArgs.innerR) / 2
                );

        // Exercise icon
        if (!this.series[1].icon) {
            this.series[1].icon = this.renderer.path(
                    ['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8,
                        'M', 8, -8, 'L', 16, 0, 8, 8]
                    )
                    .attr({
                        'stroke': '#ffffff',
                        'stroke-linecap': 'round',
                        'stroke-linejoin': 'round',
                        'stroke-width': 2,
                        'zIndex': 10
                    })
                    .add(this.series[2].group);
        }
        this.series[1].icon.translate(
                this.chartWidth / 2 - 10,
                this.plotHeight / 2 - this.series[1].points[0].shapeArgs.innerR -
                (this.series[1].points[0].shapeArgs.r - this.series[1].points[0].shapeArgs.innerR) / 2
                );

        // Stand icon
        if (!this.series[2].icon) {
            this.series[2].icon = this.renderer.path(['M', 0, 8, 'L', 0, -8, 'M', -8, 0, 'L', 0, -8, 8, 0])
                    .attr({
                        'stroke': '#303030',
                        'stroke-linecap': 'round',
                        'stroke-linejoin': 'round',
                        'stroke-width': 2,
                        'zIndex': 10
                    })
                    .add(this.series[2].group);
        }

        this.series[2].icon.translate(
                this.chartWidth / 2 - 10,
                this.plotHeight / 2 - this.series[2].points[0].shapeArgs.innerR -
                (this.series[2].points[0].shapeArgs.r - this.series[2].points[0].shapeArgs.innerR) / 2
                );
    }

    Highcharts.chart('container', {

        chart: {
            type: 'solidgauge',
            height: '110%',
//            events: {render: renderIcons}
        },
        title: {
            text: 'Activity',
            style: {fontSize: '24px'}
        },
        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {fontSize: '16px'},
            pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
            positioner: function (labelWidth) {
                return {
                    x: (this.chart.chartWidth - labelWidth) / 2,
                    y: (this.chart.plotHeight / 2) + 15
                };
            }
        },
        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{
                    outerRadius: '112%',
                    innerRadius: '88%',
                    backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0])
                            .setOpacity(0.3)
                            .get(),
                    borderWidth: 0
                }, {
                    outerRadius: '87%',
                    innerRadius: '63%',
                    backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1])
                            .setOpacity(0.3)
                            .get(),
                    borderWidth: 0
                }, {
                    outerRadius: '62%',
                    innerRadius: '38%',
                    backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2])
                            .setOpacity(0.3)
                            .get(),
                    borderWidth: 0
                }, {
                    outerRadius: '62%',
                    innerRadius: '38%',
                    backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2])
                            .setOpacity(0.3)
                            .get(),
                    borderWidth: 0
                }]
        },
        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        },
        plotOptions: {
            solidgauge: {
                dataLabels: {
                    enabled: false
                },
                linecap: 'round',
                stickyTracking: false,
                rounded: true
            }
        },
        series: [{
                name: 'Segundos',
                data: [{
                        color: Highcharts.getOptions().colors[0],
                        radius: '112%',
                        innerRadius: '88%',
                        y: 80
                    }]
            }, {
                name: 'Minutos',
                data: [{
                        color: Highcharts.getOptions().colors[1],
                        radius: '87%',
                        innerRadius: '63%',
                        y: 65
                    }]
            }, {
                name: 'Horas',
                data: [{
                        color: Highcharts.getOptions().colors[2],
                        radius: '62%',
                        innerRadius: '38%',
                        y: 50
                    }]
            }, {
                name: 'Dias',
                data: [{
                        color: Highcharts.getOptions().colors[3],
                        radius: '62%',
                        innerRadius: '38%',
                        y: 50
                    }]
            }]
    });
});