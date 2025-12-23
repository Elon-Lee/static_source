/**
 * Shadowrocket 接口监听脚本
 * 目标域名: hytapi.cd120.com
 */

const url = $request.url;
const method = $request.method;

// 处理请求部分 (打印入参)
if (typeof $response === "undefined") {
    let requestBody = $request.body;
    
    // 尝试格式化 JSON，如果不是 JSON 则直接打印原文本
    try {
        if (requestBody) {
            requestBody = JSON.parse(requestBody);
            requestBody = JSON.stringify(requestBody, null, 2);
        }
    } catch (e) {
        // 保持原样
    }

    console.log(`\n🔔 [Hytapi Request]\n【地址】: ${url}\n【方法】: ${method}\n【入参】: \n${requestBody || '无入参'}\n`);
} 

// 处理响应部分 (打印出参)
else {
    let responseBody = $response.body;

    try {
        if (responseBody) {
            let obj = JSON.parse(responseBody);
            responseBody = JSON.stringify(obj, null, 2);
        }
    } catch (e) {
        // 保持原样
    }

    console.log(`\n✅ [Hytapi Response]\n【地址】: ${url}\n【出参】: \n${responseBody || '无数据'}\n`);
}

$done({});
