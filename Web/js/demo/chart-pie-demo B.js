// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChartB");
var myPieChartB = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["胜率", " "],
    datasets: [{
      data: [55, 45],
      backgroundColor: ['#ff0000', '#f0f0f0'],
      hoverBackgroundColor: ['#ce0000', '#f0f0f0'],
      hoverBorderColor: ['#ce0000', '#f0f0f0'],
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
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
