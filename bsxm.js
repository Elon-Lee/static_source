/******************************
  博商小麦响应日志与字段改写
  *******************************

  [rewrite_local]
  http:\/\/yyy\.bosum\.com\/enterprise url script-response-body <替换为你的脚本地址>

  [mitm]
  hostname = yyy.bosum.com

  *******************************/

  const PREFIX = '[BosumTrace]';

  function log(label, value) {
    try {
      const content = typeof value === 'string'
        ? value
        : JSON.stringify(value ?? null);
      console.log(`${PREFIX} ${label}: ${content}`);
    } catch (_) {
      console.log(`${PREFIX} ${label}: [unserializable]`);
    }
  }

  const request = typeof $request === 'undefined' ? {} : $request;
  const originalBody = $response.body || '';

  log('Request URL', request.url || '');
  log('Request Headers', request.headers || {});
  log('Request Body', request.body || '');
  log('Response Headers', $response.headers || {});
  log('Response Body (Original)', originalBody);

  const rewrittenBody = originalBody
    .replace(/"hasCourseWork":"N"/g, '"hasCourseWork":"Y"')
    .replace(/"tryAndSee":"N"/g, '"tryAndSee":"Y"');

  log('Response Body (Rewritten)', rewrittenBody);

  $done({
    body: rewrittenBody
  });
