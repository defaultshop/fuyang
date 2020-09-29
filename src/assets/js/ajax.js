import axios from 'axios';
import * as utils from './utils';
import configs from '../../config';
import {getStore} from "./cookie";
import {Toast} from "vant";
import store from '../../store'

let baseUrl = configs.DEV_URL;
if(process.env.NODE_ENV === 'production'){
    baseUrl = configs.PROO_URL
}

const Axios = axios.create({
    baseUrl: baseUrl,
    timedout: 1000
})

Axios.interceptors.request.use((config) => {
    config.url = utils.getApiUrl(config.url);
    console.log(1)
    if (sessionStorage.getItem('token')) {
    } else {
      window.location.href = `${configs.httpUrl}/exthtml/smk-h5/html/login.html?url=${encodeURIComponent(location.href)}`
    }

    if(config.method == 'post'){
        config.data['token'] = sessionStorage.getItem('token')
    } else if(config.method == 'get'){
        config.params['token'] = sessionStorage.getItem('token')
    }
    store.commit('changeloading',true);
    return config;
}, error => {
    store.commit('changeloading',true);
  return Promise.reject(error);
})

Axios.interceptors.response.use(response => {
    response = response.data;
    store.commit('changeloading',false);
      return Promise.resolve(response);

    // if(response.errorCode === 0){
    //   return Promise.resolve(response);
    // } else {
    // if(response.msg == 'accessToken不能为空'){
    //   Toast(response.value)
    // } else {
    //   Toast(response.value)
    //   }
    // }
},error => {
    store.commit('changeloading',false);
    return Promise.reject(error)
})

export default Axios
