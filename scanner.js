(function() {
     // 处理 API 响应的 body
    var body = JSON.parse($response.body);  
    body.data.psnl_vip_property = {
    renew_method: "appstore",            // 续费方式
    initial_tm: "1666666666",           // 初始时间
    svip: 1,                            // 超级会员标识
    auto_renewal: true,                 // 自动续费
    ms_first_pay: 0,                    // 首次支付
    pending: 0,                         // 待处理状态
    group2_paid: 0,                     // 组2支付状态
    inherited_flag: 0,                  // 继承标志
    nxt_renew_tm: "9915126887",        // 下次续费时间
    level_info: {                       // 等级信息
        level: 1,                       // 等级
        days: 1,                        // 天数
        end_days: 30                    // 结束天数
    },
    group1_paid: 1,                     // 组1支付状态
    ys_first_pay: 0,                    // 首次支付标记
    renew_type: "manual",              // 续费类型
    expiry: 8888888888,                // 过期时间（很久以后）
    grade: 2,                          // 会员等级
    last_payment_method: "appstore",    // 最后支付方式
    product_id: "com.premium.yearly"    // 产品ID（年度会员）
};
    // 返回修改后的 body
    var response = {
        body: JSON.stringify(body)
    };
    console.log(`scanner after response  : ${JSON.stringify(body)} `)
    $done(response);
    
})();
