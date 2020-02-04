/* $("#teamSelect").ready(function(){ */
   /*  $("#teamSelect").on('change',function(){
        var objS3=document.getElementById('teamSelect');
        var objS4=document.getElementById('positionSelect');
        var teamName=objS3.options[objS3.selectedIndex].value;
        var position=objS4.options[objS4.selectedIndex].value;
        var data={};
        data['select']=[teamName,position];
        $.ajax({
            type: 'POST',
            url:"/player",
            data:JSON.stringify(data),  //转化字符串 
            contentType: 'application/json; charset=UTF-8',
            success:function(response2){ //成功的话，得到消息
                //alert(data);
                addselect(response2);
            }
        });
    }); */
    
    /* $("#positionSelect").on('change',function(){
        var objS3=document.getElementById('teamSelect');
        var objS4=document.getElementById('positionSelect');
        var teamName=objS3.options[objS3.selectedIndex].value;
        var position=objS4.options[objS4.selectedIndex].value;
        var data={};
        data['select']=[teamName,position];
        $.ajax({
            type: 'POST',
            url:"/player",
            data:JSON.stringify(data),  //转化字符串 
            contentType: 'application/json; charset=UTF-8',
            success:function(response2){ //成功的话，得到消息
                //alert(data);
                addselect(response2);
            }
        });
    });
     */
    $("#playerSelect").on('change',function(){
        var objS5=document.getElementById('playerSelect');
        var playerName=objS5.options[objS5.selectedIndex].value;
        var data={};
        data['selectPlayer']= playerName;
        /* $.ajax({
            type: 'POST',
            url:"/rank",
            data:JSON.stringify(data),  //转化字符串 
            contentType: 'application/json; charset=UTF-8',
            success:function(response3){ //成功的话，得到消息
                //alert(data); */
                drawGraphs()
            /* }
        }); */
    });
    
    function addselect(response2){
        playerName=response2.split(",");
        var select=document.getElementById("playerSelect");
        //删除所有原来的子结点元素
        $("#playerSelect").empty();
        for(var i=0;i<playerName.length;++i)
        {
            var newItem=document.createElement("option");
            var newItemText=document.createTextNode(playerName[i]);
            newItem.value = playerName[i];
            newItem.appendChild(newItemText);
            select.appendChild(newItem);
        }
    }
    
    function drawGraphs(){
        drawAreaChart()
        drawLDGraph()
    }
    
    function number_format(number, decimals, dec_point, thousands_sep) {
        // *     example: number_format(1234.56, 2, ',', ' ');
        // *     return: '1 234,56'
        number = (number + '').replace(',', '').replace(' ', '');
        var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function(n, prec) {
        var k = Math.pow(10, prec);
        return '' + Math.round(n * k) / k;
        };
        // Fix for IE parseFloat(0.55).toFixed(0) = 0;
        s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
        if (s[0].length > 3) {
          s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
        }
        if ((s[1] || '').length < prec) {
          s[1] = s[1] || '';
          s[1] += new Array(prec - s[1].length + 1).join('0');
        }
        return s.join(dec);
    }
    
    function drawAreaChart(){
       /*  data = response3.split(','); */
        var ctx = document.getElementById("myAreaChart");
        var myLineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["18Spring", "18Summer", "S8", "19Spring", "19Summer", "S9"],
                datasets: [{
                label: "Earning",
                lineTension: 0.3,
                //backgroundColor: "#000000",
                borderColor: "#000000",
                backgroundColor: "rgba(78, 115, 223, 0.05)",
                //borderColor: "rgba(78, 115, 223, 1)",
                pointRadius: 3,
                pointBackgroundColor: "#000000",
                pointBorderColor: "#000000",
                //pointBackgroundColor: "rgba(78, 115, 223, 1)",
                //pointBorderColor: "rgba(78, 115, 223, 1)",
                pointHoverRadius: 3,
                pointHoverBackgroundColor: "#000000",
                pointHoverBorderColor: "000000",
                //pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
                //pointHoverBorderColor: "rgba(78, 115, 223, 1)",
                pointHitRadius: 10,
                pointBorderWidth: 2,
                data: [0.1,0.2,0.3,0.4,0.5,0.6]
                }],
            },
            options: {
                maintainAspectRatio: false,
                layout: {
                padding: {
                    left: 10,
                    right: 25,
                    top: 25,
                    bottom: 0
                }
                },
                scales: {
                xAxes: [{
                    time: {
                    unit: 'date'
                    },
                    gridLines: {
                    display: false,
                    drawBorder: false
                    },
                    ticks: {
                    maxTicksLimit: 7
                    }
                }],
                yAxes: [{
                    ticks: {
                    maxTicksLimit: 5,
                    padding: 10,
                    // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                        return number_format(value) + '%';
                    }
                    },
                    gridLines: {
                    color: "rgb(234, 236, 244)",
                    zeroLineColor: "rgb(234, 236, 244)",
                    drawBorder: false,
                    borderDash: [2],
                    zeroLineBorderDash: [2]
                    }
                }],
                },
                legend: {
                display: false
                },
                tooltips: {
                backgroundColor: "rgb(255,255,255)",
                bodyFontColor: "#858796",
                titleMarginBottom: 10,
                titleFontColor: '#6e707e',
                titleFontSize: 14,
                borderColor: '#dddfeb',
                borderWidth: 1,
                xPadding: 15,
                yPadding: 15,
                displayColors: false,
                intersect: false,
                mode: 'index',
                caretPadding: 10,
                callbacks: {
                    label: function(tooltipItem, chart) {
                    var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                    return datasetLabel + number_format(tooltipItem.yLabel) + '%';
                    }
                }
                }
            }
        });
    }
    
    function drawLDGraph() {
        /* data = response3.split(','); */
        var myChart = echarts.init(document.getElementById('graphics'));
    
        // specify chart configuration item and data
        option = {
            
            tooltip: {},
            legend: {
                data: ['最新赛季', '上一赛季']
            },
            radar: {
                // shape: 'circle',
                name: {
                    textStyle: {
                        color: '#fff',
                        backgroundColor: '#999',
                        borderRadius: 3,
                        padding: [3, 5]
                   }
                },
                indicator: [
                   { name: 'KDA', max: 9},
                   { name: '参团率', max: 1},
                   { name: '分均输出', max: 800},
                   { name: '分均承伤', max: 1000},
                   { name: '分均经济', max: 500},
                ]
            },
            series: [{
                name: 'Player Data',
                type: 'radar',
                // areaStyle: {normal: {}},
                data : [
                    {
                        value : [4.5,0.8,700,900,400],
                        name : '最新赛季'
                    },
                     {
                        value : [6.7,0.1,300,500,123],
                        name : '上一赛季'
                    }
                ]
            }]
        };
        // use configuration item and data specified to show chart
        myChart.setOption(option);
    }