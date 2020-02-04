Highcharts.chart('container2', {
    chart: {
        type: 'boxplot'
    },
    title: {
        text: 'AnnouncementsView'
    },
    legend: {
        enabled: false
    },
    xAxis: {
        categories: ['Low', 'Medium', 'High'],
        title: {
            text: 'Experiment No.'
        }
    },
    yAxis: {
        title: {
            text: 'Observations'
        },
        plotLines: [{
                value: 33,
                color: 'blue',
                width: 1,
                label: {
                    text: 'mean: 33',
                    align: 'space-around',
                    style: {
                        color: 'black'
                    }
                }
            }]
    },
    series: [{
            name: 'Observations',
            data: [
                [0, 4, 11, 20, 44],
                [0, 21, 37.5, 58.5, 100],
                [0, 34, 52, 76, 100]

            ],
            tooltip: {
                headerFormat: '<em>Experiment No {point.key}</em><br/>'
            }
        }, {
            name: 'Outlier',
            color: Highcharts.getOptions().colors[0],
            type: 'scatter',
            data: [// x, y positions where 0 is the first category
                [0, 48],
                [0, 50],
                [0, 50],
                [0, 50],
                [0, 53],
                [0, 59],
                [0, 62],
                [0, 64],
                [0, 62],
                [0, 64],
                [0, 66],
            ],
            marker: {
                fillColor: 'red',
                lineWidth: 1,
                lineColor: Highcharts.getOptions().colors[0]
            },
            tooltip: {
                pointFormat: 'Observation: {point.y}'
            }
        }]
});