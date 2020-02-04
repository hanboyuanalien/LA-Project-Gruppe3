// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChartA");
var myPieChartA = new Chart(ctx, {
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
});
