var chart = c3.generate({
    bindto:'#chart9',
    data: {
        columns: [
            ['L', 99,28],
            ['M', 83,128],
            ['H', 28,114]
        ],
        type: 'bar'
    },
    axis: {
        x: {
            type: 'category',
            categories: ['No','Yes' ]
        }
    }
});

    setTimeout(function () {
    chart.load({
        columns: [
            ['H', 28,114]
        ]
    });
}, 1000);