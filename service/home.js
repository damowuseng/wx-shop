// 网路请求分层处理。home页调用home相关网络请求


import request from './network'


const baseURL = 'http://127.0.0.1:9000'

export function getData() {
  return request({
    url: baseURL + '/api/home',
  })
}