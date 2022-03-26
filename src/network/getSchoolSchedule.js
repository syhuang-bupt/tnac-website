import { request } from './request'

// 获取课程时间安排

export function getSchoolSchedule () {
  return request({
      url: '/datatrans/schedule',
      method: 'get'
  })
}
