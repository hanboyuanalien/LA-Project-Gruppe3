Highcharts.chart('container3', {
    chart: {
        type: 'boxplot'
    },
    title: {
        text: 'RaiseHand'
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
                value: 51,
                color: 'blue',
                width: 1,
                label: {
                    text: 'mean: 50',
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
                [0, 5, 10, 20.5, 43.75],
                [0, 24, 50, 72, 100],
                [24.25, 61, 75, 85.5, 100]

            ],
            tooltip: {
                headerFormat: '<em>Experiment No {point.key}</em><br/>'
            }
        }, {
            name: 'Outlier',
            color: Highcharts.getOptions().colors[0],
            type: 'scatter',
            data: [// x, y positions where 0 is the first category
                [0, 49],
                [0, 50],
                [0, 52],
                [0, 55],
                [0, 69],
                [0, 70],
                [0, 70],
                [0, 72],
                [0, 75],
                [0, 80],
                [2, 10],
                [2, 13],
                [2, 13], [2, 14],
                [2, 14],
                [2, 15],
                [2, 15],
                [2, 15], [2, 19],
                [2, 22],
                [2, 23],
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