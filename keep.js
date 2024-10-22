
(function() {
    // 解码 Base64 并初始化替换函数
    function decodeBase64(input) {
        const keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        let output = '';
        let chr1, chr2, chr3;
        let enc1, enc2, enc3, enc4;
        let i = 0;

        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');

        while (i < input.length) {
            enc1 = keyStr.indexOf(input.charAt(i++));
            enc2 = keyStr.indexOf(input.charAt(i++));
            enc3 = keyStr.indexOf(input.charAt(i++));
            enc4 = keyStr.indexOf(input.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            output += String.fromCharCode(chr1);

            if (enc3 != 64) {
                output += String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output += String.fromCharCode(chr3);
            }
        }

        return output;
    }

    // 处理 API 响应的 body
    var body = $response.body;
    var body_orginal = body
    // 替换相关字段
    body = body.replace(/\"memberStatus":\d+/g, '"memberStatus":1') // 修改会员状态为 1
               .replace(/\"username":".*?"/g, '"username":"你最🐂B你最帅"') // 设置用户名
               .replace(/\"hasPaid\":\w+/g, '"hasPaid":true') // 修改支付状态
               .replace(/\"videoTime\":\d+/g, '"videoTime":3000') // 设置视频时间为 3000 秒
               .replace(/\"startEnable\":\w+/g, '"startEnable":true') // 启动激活
               .replace(/\"preview\":\w+/g, '"preview":false') // 禁用预览模式
               .replace(/\"status\":false/g, '"status":true') // 确保都是 true
               .replace(/\"ok\":false/g, '"ok":true') // 确保都是 true
               .replace(/\"code\":700014/g, '"code":200') // 解锁会员视频  
               .replace(/\"level\":\d+/g, '"level":10') //   
               .replace(/\"memberValid\":false/g, '"memberValid":true') //当日计划
               .replace(/\"memberOffDays\":0/g, '"memberOffDays":300') //当日计划
               .replace(/\"errorCode\":407011/g,'"errorCode":0') //解锁计划编排;

    // 返回修改后的 body
    var response = {
        body: body
    };
    console.log(`keep before modify : ${body_orginal} response body: ${body}`)

    $done(response);
})();

