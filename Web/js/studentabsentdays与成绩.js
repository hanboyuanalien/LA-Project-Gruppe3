var chart = c3.generate({
    bindto:'#chart8',
    data: {
        columns: [
            ['L', 116,11],
            ['M', 71,140],
            ['H', 4,138]
            
        ],
        type: 'bar'
    },
    axis: {
        x: {
            type: 'category',
            categories: ['Above-7','Under-7' ]
        }
    }
});

    setTimeout(function () {
    chart.load({
        columns: [
            ['H', 4,138]
        ]
    });
}, 1000);