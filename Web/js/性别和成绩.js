var chart = c3.generate({
    data: {
        columns: [
            ['L', 24,103],
            ['M', 76,135]
            
        ],
        type: 'bar'
    },
    axis: {
        x: {
            type: 'category',
            categories: ['Female', 'Male', ]
        }
    }
});

    setTimeout(function () {
    chart.load({
        columns: [
            ['H', 75,67]
        ]
    });
}, 1000);