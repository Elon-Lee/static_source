/**
 * Shadowrocket 接口监听脚本 (增强版)
 * 目标域名: hytapi.cd120.com
 * 功能：打印 URL、方法、请求头、入参、出参
 */

const url = $request.url;
const method = $request.method;
const requestHeaders = $request.headers; // 获取请求头

// 格式化请求头
let formattedHeaders = JSON.stringify(requestHeaders, null, 2);

// 处理请求部分 (打印入参 + 请求头)
if (typeof $response === "undefined") {
    let requestBody = $request.body;
    
    // 尝试格式化 JSON 入参
    try {
        if (requestBody) {
            requestBody = JSON.parse(requestBody);
            requestBody = JSON.stringify(requestBody, null, 2);
        }
    } catch (e) {
        // 保持原样
    }

    console.log(`\n🔔 [Hytapi Request]\n【地址】: ${url}\n【方法】: ${method}\n【请求头】: \n${formattedHeaders}\n【入参】: \n${requestBody || '无入参'}\n`);
} 

// 处理响应部分 (打印出参)
else {
    let responseBody = $response.body;

    // 尝试格式化 JSON 出参
    try {
        if (responseBody) {
            let obj = JSON.parse(responseBody);
            responseBody = JSON.stringify(obj, null, 2);
        }
    } catch (e) {
        // 保持原样
    }

    // 在响应日志中，通常也可以顺便打印出当时的请求头，方便对照分析
    console.log(`\n✅ [Hytapi Response]\n【地址】: ${url}\n【出参】: \n${responseBody || '无数据'}\n`);
}

$done({});
