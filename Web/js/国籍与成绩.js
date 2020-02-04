var chart = c3.generate({
    
    data: {
        columns: [
            ['L', 3,2,0,37,68,2,6,1,0,1,2,4,1,0],
            ['M', 4,4,8,82,75,6,0,2,16,4,3,5,2,0]
            
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
            ['H', 2,0,14,53,36,9,0,1,12,6,2,3,3,1]
        ]
    });
}, 1000);