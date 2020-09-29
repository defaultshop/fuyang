import Config from '../../config';
let crossdomain = Config.CROSSDOMAIN; //是否开启跨域

export const setTitle = (title) => { //头部设置
    window.document.title = title
}

//获取完整的api请求地址
export const getApiUrl = (api) => {
    let baseURL = Config.PROD_URL //生产环境
    if(crossdomain){
        return `${baseURL}/${api}`
    }

    if(process.env.NODE_ENV === 'production'){
        return `${baseURL}/${api}`
    }

    return `/api${api}/`
}
