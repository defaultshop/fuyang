
/**
 * 存储sessionStorage
 * name
 * content
 * duration Storage有效时间，单位：小时
 * set_time 是否设置时间
 * PREFIX 自定义字段
 */

export const PREFIX = '';

export const setStore = (name, content, set_time = false, duration = 0) => {
    if (!name) return false;
    name = PREFIX + name;
    if (typeof content !== 'string') {
        content = JSON.stringify(content)
    }
    if (set_time) {
        let date = new Date;
        if (duration > 0) {
            content += '&' + (date.getTime() + duration * 3600 * 1e3)
        } else {
            content += '&0'
        }
        content += '&' + (date.getTime())
    }
    window.sessionStorage.setItem(name, content)
};

/**
 * 获取sessionStorage
 * name
 * parse // 是否json格式化
 *
 */
export const getStore = (name, parse = false) => {
    if (!name) return false;
    // name = PREFIX + name; //暂时写死
    name = 'A853A6C0C865DA15406EB5AC84C8B1D56F1C5E171480CA25AD70FFA0CC2D311BD2F4C846A07186E195850A90335EAC5940A36F22765740B8';
    if (parse) {
        if (typeof(window.sessionStorage.getItem(name)) == "string" && window.sessionStorage.getItem(name) != "undefined") {
            return JSON.parse(window.sessionStorage.getItem(name))
        }
    }
    return window.sessionStorage.getItem(name)
};

/**
 * 删除sessionStorage
 */
export const removeStore = name => {
    if (!name) return false;
    name = PREFIX + name;
    window.sessionStorage.removeItem(name)
};

/**
 * 生成cookie
 * name cookie名称
 * value cookie值
 * duration cookie有效时间，单位：小时
 */
export const addCookie = (name, value, duration) => {
    name = PREFIX + name;
    let n = name + '=' + escape(value) + '; path=/';
    if (duration > 0) {
        let date = new Date;
        date.setTime(date.getTime() + duration * 3600 * 1e3);
        n = n + ';expires=' + date.toGMTString()
    }
    document.cookie = n
};

/**
 * 获取cookie
 * name cookie名称
 *
 */
export const getCookie = (name) => {
    name = PREFIX + name;
    let t = document.cookie;
    let a = t.split('; ');
    for (let n = 0; n < a.length; n++) {
        let r = a[n].split('=');
        if (r[0] === name) {
            return unescape(r[1])
        }
    }
    return null
};

/**
 * 移除cookie
 * name cookie名称
 */
export const delCookie = (name) => {
    name = PREFIX + name;
    let t = new Date;
    t.setTime(t.getTime() - 1);
    let a = getCookie(name);
    if (a !== null) document.cookie = name + '=' + a + '; path=/;expires=' + t.toGMTString()
};
