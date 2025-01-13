(function() {
     // 处理 API 响应的 body
    var body = JSON.parse($response.body);  
    
    // 返回修改后的 body
    var response = {
        body: JSON.stringify(body)
    };
    console.log(`scanner after response  : ${JSON.stringify(body)} `)
    $done(response);
    
})();
