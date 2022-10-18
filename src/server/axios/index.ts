// axios 封装
import originAxios from 'axios';
import { ENVIRONMENT_URL } from '..';
import { axiosType } from '../../type';

export default function request(option:axiosType.Moption) {
  return new Promise((resolve, reject) => {
    // 1.创建axios的实例
    const instance = originAxios.create({
      baseURL: ENVIRONMENT_URL,
      timeout: 1000 * 60 * 5,			
      withCredentials: true,
      params: {
        cookie: ''
      }
    });

    // 配置请求和响应拦截
    instance.interceptors.request.use(config => {
      return config
    }, err => {			
      return err
    })

    instance.interceptors.response.use(response => {			
      return response
    }, err => {
      // console.log('来到了response拦截failure中');
      // console.log(err);
      if (err && err.response) {
        switch (err.response.status) {
        case 400:
          err.message = '请求错误'
          break
        case 401:
          err.message = '未授权的访问'
          break
        default:
          err.message = "其他错误信息"
        }
      }
      return err
    })

    // 2.传入对象进行网络请求
    instance(option).then((res) => {      
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
