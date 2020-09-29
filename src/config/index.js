/**
 * 1 生产
 * 2 测试
 * 3 验证
 */
const env = '3'

const cig = {};

switch(env) {
    case '1':
        cig.baseUrl = 'https://bi.96225.com/smk_qttalent/app';
        cig.homeUlr = '',
        cig.httpUrl = 'https://smkmp.96225.com'
        break
    case '2':
        cig.baseUrl = 'http://115.236.162.166:18081/talentCard/app';
        cig.homeUlr = '',
        cig.httpUrl = 'http://115.236.162.166:18081'
        break
    case '3':
        cig.baseUrl = 'https://smkmp.96225.com/exthtml/hangZhouTalentCardTest/';
        cig.homeUlr = ''
        break
}

/**
 * PROD_URL 生产环境
 * DEV_URL  测试环境
 * HOME_URL 首页路径
 * CROSSDOMAIN 是否开启跨域
 * VERSION 版本号
 * */
module.exports = {
    PROD_URL: cig.baseUrl,
    DEV_URL: cig.dev_url,
    HOME_URL: cig.homeUlr,
    card: cig.card,
    httpUrl: cig.httpUrl,
    httpUrl2: cig.httpUrl2,
    CROSSDOMAIN: true,
    VERSION: '1.0.0'
}
