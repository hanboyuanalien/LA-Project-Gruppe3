Highcharts.chart('container1', {
    chart: {
        type: 'boxplot'
    },
    title: {
        text: 'Discussion'
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
                value: 39,
                color: 'blue',
                width: 1,
                label: {
                    text: 'mean: 39',
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
                [0, 13, 21, 49.5, 91.25],
                [0, 22, 40, 66, 100],
                [0, 30, 62, 71, 100]

            ],
            tooltip: {
                headerFormat: '<em>Experiment No {point.key}</em><br/>'
            }
        }, {
            name: 'Outlier',
            color: Highcharts.getOptions().colors[0],
            type: 'scatter',
            data: [// x, y positions where 0 is the first category
                [0, 91],
                [0, 97],
                [0, 98],
                [0, 98],
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