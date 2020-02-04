var chart = c3.generate({
    bindto:'#chart20',
    data: {
        columns: [
            ['Correct rate(%)', 66.67,69.79,83.33,64.58,76.04],
            ['rate', 66.67,69.79,83.33,64.58,76.04]
            
        ],
        type: 'bar',
        types: {
           
            rate: 'line',
            
        },

        
       
    },
    axis: {
        x: {
            type: 'category',
            categories: ['Logistic Regression', 'Improve Logistic Regression', 'Random Forest', 'KNN', 'SVM', ]
        }
    }
});