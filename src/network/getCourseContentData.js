import { request } from './request'

// 获取课程详细信息，即课程结构全部信息

export function getGxContentData () {
  return request({
      url: '/datatrans/gexun',
      method: 'get'
  })
}

export function getJxContentData () {
  return request({
      url: '/datatrans/jingxi',
      method: 'get'
  })
}

export function getYyContentData () {
  return request({
      url: '/datatrans/yuyan',
      method: 'get'
  })
}

export function getSjContentData () {
  return request({
      url: '/datatrans/shejiao',
      method: 'get'
  })
}

export function getJtContentData () {
  return request({
      url: '/datatrans/jiti',
      method: 'get'
  })
}
