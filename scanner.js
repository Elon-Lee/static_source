
(function() {
    // 处理 API 响应的 body
   
     // 处理 API 响应的 body
    var body = $response.body;
    var body_orginal = body
    // 替换相关字段
     
    // 返回修改后的 body
    var response = {
        body: body
    };
    console.log(`scanner before modify : ${body_orginal} response body: ${body}`)

    $done(response);
    
})();
