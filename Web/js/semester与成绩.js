var chart = c3.generate({
    bindto:'#chart7',
    data: {
        // iris data from R
        columns: [
            ['F-H', 62], 
            ['F-L', 77],
            [ 'F-M', 106],
            ['S-H', 80],
            ['S-L', 50],
            ['S-M', 105],
            
        ],
        type : 'pie',
       
    }
});