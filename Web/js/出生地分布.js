var chart = c3.generate({
    bindto:'#chart3',
    data: {
        // iris data from R
        columns: [
            ['Egypt', 9], 
            ['Iran', 6],
            [ 'Iraq', 22],
            ['Jordan', 176],
            ['KW', 180],
            ['Lebanon', 19],
            ['Lybia', 6],
            ['Morocco', 4],
            ['Palestine', 10],
            [ 'SaudiArabia', 16],
            ['Syria', 6],
            ['Tunis', 9],
            ['USA', 16],
            ['Venzuela', 1],
        ],
        type : 'pie',
       
    }
});