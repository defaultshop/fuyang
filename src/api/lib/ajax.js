import axios from 'axios'
import { Dialog } from 'vant';
const service = axios.create({
  timeout: 20000
})

service.interceptors.request.use(
  config => {
    config.headers['Content-type'] = "application/json;charset=UTF-8"
    config.headers['sendChl'] = "hzsmk.h5"
    config.headers['sendClient'] = "hellohzsmk"
    return config;
  },
  error => {
      return Promise.reject(error);
  })

service.interceptors.response.use(
  response => {
      if(response.status === 200) {
        const res = response.data;
        if(res.code && res.code == 'PY0000') {
          return res;
        }else if(res.code && res.code == 'Error1003') {
          Dialog({
            message: res.msg
          })
          return res;
        }else{
          return res;
        }
      }else {
        reject(new Error('访问出错！'));
      }
  },
  error => {
    if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
      Dialog({ message: '网络异常请稍后在试！' })
    }
      return Promise.reject(error);
  }
)


const ajax = function (url, sendData) {
  return new Promise((resolve, reject) => {
    service.post(url, sendData).then(response => {
        resolve(response);
    }).catch(err => {
        reject(err);
    })
  })
}

export default ajax

