var chart = c3.generate({
    bindto:'#chart2',
    data: {
        // iris data from R
        columns: [
            ['F', 175], 
            ['M', 305],
            
        ],
        type : 'pie',
       
    }
});