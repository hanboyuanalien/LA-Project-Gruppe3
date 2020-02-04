$(document).ready(function(){
    $("button").click(function(){
        /* var objS1=document.getElementById('selectBox1');
        var objS2=document.getElementById('selectBox2');
        var team1=objS1.options[objS.selectedIndex].value;
        var team2=objS2.options[objS.selectedIndex].value;
        var data={};
        data['city']=[team1, team2];
        $.ajax({
            type: 'POST',
            url:"/province",
            data:JSON.stringify(data),  //转化字符串 
            contentType: 'application/json; charset=UTF-8',
            success:function(data){ //成功的话，得到消息
                //alert(data); */
        predict();
    })
}) /* );
    });
}); */

function predict()
{
  changePieCharts();
  changeText();
  changeAttributeText();
  changeAttributeValue();

}

function changePieCharts(){
  var ctx = document.getElementById("myPieChartA");
  var myPieChartA = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: ["胜率", " "],
          datasets: [{
          data: [75, 25],
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


var ctx = document.getElementById("myPieChartB");
var myPieChartB = new Chart(ctx, {
type: 'doughnut',
data: {
  labels: ["胜率", " "],
  datasets: [{
    data: [35, 65],
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
}

function changeText(){
  let message_div1 = document.getElementById("Header1");
  message_div1.innerText = "近期胜率:".concat(25)+"%";
  let message_div2 = document.getElementById("Header2");
  message_div2.innerText = "近期胜率:".concat(35)+"%";
}

function changeAttributeText(){
  let message_divA1 = document.getElementById("TextA1");
  message_divA1.innerText = "30%";
  let message_divB1 = document.getElementById("TextB1");
  message_divB1.innerText = "30%";
  
  let message_divA2 = document.getElementById("TextA2");
  message_divA2.innerText = "30%";
  let message_divB2 = document.getElementById("TextB2");
  message_divB2.innerText = "30%";
  
  let message_divA3 = document.getElementById("TextA3");
  message_divA3.innerText = "30%";
  let message_divB3 = document.getElementById("TextB3");
  message_divB3.innerText = "30%";
  
  let message_divA4 = document.getElementById("TextA4");
  message_divA4.innerText = "30%";
  let message_divB4 = document.getElementById("TextB4");
  message_divB4.innerText = "30%";  
  
  let message_divA5 = document.getElementById("TextA5");
  message_divA5.innerText = "30%";
  let message_divB5 = document.getElementById("TextB5");
  message_divB5.innerText = "30%";  
  
  let message_divA6 = document.getElementById("TextA6");
  message_divA6.innerText = "30%";
  let message_divB6 = document.getElementById("TextB6");
  message_divB6.innerText = "30%";  
  
  let message_divA7 = document.getElementById("TextA7");
  message_divA7.innerText = "30%";
  let message_divB7 = document.getElementById("TextB7");
  message_divB7.innerText = "30%";  
  
  let message_divA8 = document.getElementById("TextA8");
  message_divA8.innerText = "30%";
  let message_divB8 = document.getElementById("TextB8");
  message_divB8.innerText = "30%";  

}

function changeAttributeValue(){
  let message_divA1 = document.getElementById("ValueA1");
  message_divA1.style = "width: 10%";
  let message_divB1 = document.getElementById("ValueB1");
  message_divB1.style = "width: 10%";

  let message_divA2 = document.getElementById("ValueA2");
  message_divA2.style = "width: 20%";
  let message_divB2 = document.getElementById("ValueB2");
  message_divB2.style = "width: 20%";

  let message_divA3 = document.getElementById("ValueA3");
  message_divA3.style = "width: 30%";
  let message_divB3 = document.getElementById("ValueB3");
  message_divB3.style = "width: 30%";

  let message_divA4 = document.getElementById("ValueA4");
  message_divA4.style = "width: 40%";
  let message_divB4 = document.getElementById("ValueB4");
  message_divB4.style = "width: 40%";

  let message_divA5 = document.getElementById("ValueA5");
  message_divA5.style = "width: 50%";
  let message_divB5 = document.getElementById("ValueB5");
  message_divB5.style = "width: 50%";

  let message_divA6 = document.getElementById("ValueA6");
  message_divA6.style = "width: 60%";
  let message_divB6 = document.getElementById("ValueB6");
  message_divB6.style = "width: 60%";

  let message_divA7 = document.getElementById("ValueA7");
  message_divA7.style = "width: 70%";
  let message_divB7 = document.getElementById("ValueB7");
  message_divB7.style = "width: 70%";

  let message_divA8 = document.getElementById("ValueA8");
  message_divA8.style = "width: 80%";
  let message_divB8 = document.getElementById("ValueB8");
  message_divB8.style = "width: 80%";

}

