// 网路请求分层处理。home页调用home相关网络请求
import request from './network'


export function getData() {
  return request({
    url: '/api/home',
  })
}

export function getGoods(type, page) {
  return request({
    url: '/api/home/goods',
    data: {
      type,
      page
    }
  })
}