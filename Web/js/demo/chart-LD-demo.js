// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var myChart = echarts.init(document.getElementById('graphics'));

    // specify chart configuration item and data
    option = {
        
        tooltip: {},
        legend: {
            data: ['预算分配', '实际开销']
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
               { name: '销售（sales）', max: 6500},
               { name: '管理（Administration）', max: 16000},
               { name: '信息技术（Information Techology）', max: 30000},
               { name: '客服（Customer Support）', max: 38000},
               { name: '研发（Development）', max: 52000},
               { name: '市场（Marketing）', max: 25000}
            ]
        },
        series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data : [
                {
                    value : [4300, 10000, 28000, 35000, 50000, 19000],
                    name : '预算分配'
                },
                 {
                    value : [5000, 14000, 28000, 31000, 42000, 21000],
                    name : '实际开销'
                }
            ]
        }]
    };
    /* var option = {
        title: {
            text: 'ECharts entry example'
        },
        tooltip: {},
        legend: {
            data: ['Sales']
        },
        xAxis: {
            data: ["shirt", "cardign", "chiffon shirt", "pants", "heels", "socks"]
        },
        yAxis: {},
        series: [{
            name: 'Sales',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    }; */

    // use configuration item and data specified to show chart
    myChart.setOption(option);



/* var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["胜率", " "],
    datasets: [{
      data: [45, 55],
      backgroundColor: ['#4e73df', '#f0f0f0'],
      hoverBackgroundColor: ['#2e59d9', '#f0f0f0'],
      hoverBorderColor: ['#2e59d9', '#f0f0f0'],
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 0.5,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 1,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
}); */

