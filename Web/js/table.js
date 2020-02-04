window.onload=function requestData(){
    /* $.ajax({
        type: 'POST',
        url:"/table",
        contentType: 'application/json; charset=UTF-8',
        success:function(response4){ //成功的话，得到消息
            //alert(data); */
            showTable1();
      /*   }
    }); */
};

function showTable1() {
    var str = "";//定义用于拼接的字符串
    for (var i = 0; i < 3; i++) {
        
        str = "<tr><td>" + 'WK' 
            + "</td><td>" + 'HG'
            + "</td><td>" + 'HG'
            + "</td><td>" + 'HG'
            + "</td><td>" + 'HG'
            + "</td><td>" + 'HG'
            + "</td><td>" + 'HG'
            + "</td><td>" + 'HG'
            + "</td><td>" + 'HG'
            + "</td><td>" + 'HG'
            + "</td><td>" + 'HG'
            + "</td><td>" + 'HG'
            + "</td><td>" + 'HG'
            + "</td><td>" + 'HG'
            + "</td><td>" + 'HG'
            + "</td><td>" + 'HG'
            + "</td><td>" + 'HG'
            + "</td><td>" + 'HG'
            + "</td></tr>";
            $("#tab").append(str);    
    }
}


