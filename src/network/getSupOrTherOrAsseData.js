import { request } from './request'

export function getSupervisionData () {
  return request({
      url: '/director/findSup',
      method: 'get'
  })
}

export function getTherapistsData () {
  return request({
      url: '/director/findThpBase',
      method: 'get'
  })
}

// 获得属于督导的康复师信息
export function getSupervisionTherapistsData (values) {
  return request({
      url: '/supervisor/relativeThp',
      method: 'post',
      emulateJSON: true,
      data: {
        values
      }
  })
}

// 查单人课的空闲老师
export function getFreeTherapistsData (values) {
  return request({
      url: '/director/findThp',
      method: 'post',
      emulateJSON: true,
      data: {
        values
      }
  })
}
// 查多人课的空闲老师，包括辅助老师
export function getMultiFreeTherapistsData (values) {
  return request({
      url: '/director/findThpMuti',
      method: 'post',
      emulateJSON: true,
      data: {
        values
      }
  })
}

export function getAssessorData () {
  return request({
      url: '/director/findAsm',
      method: 'get'
  })
}
