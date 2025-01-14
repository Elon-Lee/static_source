
(function() { 
    // 处理 API 响应的 body
    var body = $response.body;
    var body_orginal = body
    // 替换相关字段
    body = body.replace(/\"hasPurchase":false/g, '"hasPurchase":true') // 修改会员状态为 1
               .replace("2021-09-20", '2099-09-20')// 设置用户名
    // 返回修改后的 body
    var response = {
        body: body
    };
    console.log(`xinkebiao_english after modifyresponse body: ${body}`)
    $done(response);
})();
