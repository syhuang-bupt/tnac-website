import { request } from './request'

export function isCourseHaveToday (values) {
  return request({
      url: '/supervisor/finddate',
      method: 'post',
      emulateJSON: true,
      data: {
        values
      }
  })
}
