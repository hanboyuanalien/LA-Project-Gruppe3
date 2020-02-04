var chart = c3.generate({
    bindto:'#chart4',
    data: {
        columns: [
            ['L', 8,65,54],
            ['M', 14,79,118,],
            ['H', 11,55,76]
            
        ],
        type: 'bar'
    },
    axis: {
        x: {
            type: 'category',
            categories: ['Lowerschool', 'MiddelSchool', 'HighSchool', ]
        }
    }
});

    setTimeout(function () {
    chart.load({
        columns: [
            ['H', 11,55,76]
        ]
    });
}, 1000);