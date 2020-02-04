var chart = c3.generate({
    bindto:'#chart6',
    data: {
        columns: [
            ['L', 17, 4, 8, 10, 16, 0,3,38,7,6,10,8],
            ['M', 23,10,6,18,29,18,12,42,8,8,25,12],
            ['H', 19,16,10,17,20,6,4,15,6,8,16,5]
        ],
        type: 'bar',
        groups: [
            ['L', 'M','H']
        ]
    },
    grid: {
        y: {
            lines: [{value:0}]
        }
    },
    axis: {
        x: {
            type: 'category',
            categories: [ 'Arabic','Biology','Chemistry','Englisch','French','Geology','History','IT','Math','Quran','Science','Spanish' ]
        }
    }
});