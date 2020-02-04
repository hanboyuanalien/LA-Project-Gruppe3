var chart = c3.generate({
    
    data: {
        columns: [
            ['L', 3,2,0,34,69,2,6,1,0,4,1,3,2,0],
            ['M', 3,4,8,89,76,6,0,2,4,5,3,3,8,0]
            
        ],
        type: 'bar'
    },
    axis: {
        x: {
            type: 'category',
            categories: ['Egypt', 'Iran', 'Irap', 'Jordan', 'KW', 'Lebanon','Lybia', 'Morocco', 'Palestine', 'SaudiArabia', 'Syria', 'Tunis','USA','Venezuela']
        }
    }
});

    setTimeout(function () {
    chart.load({
        columns: [
            ['H', 3,0,14,53,35,11,0,1,6,7,2,3,6,1]
        ]
    });
}, 1000);