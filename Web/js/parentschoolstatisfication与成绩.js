var chart = c3.generate({
    bindto:'#chart10',
    data: {
        columns: [
            ['L', 84,43],
            ['M', 80,131],
            ['H', 24,118]
        ],
        type: 'bar'
    },
    axis: {
        x: {
            type: 'category',
            categories: ['Bad','Good' ]
        }
    }
});

    setTimeout(function () {
    chart.load({
        columns: [
            ['H', 24,118]
        ]
    });
}, 1000);