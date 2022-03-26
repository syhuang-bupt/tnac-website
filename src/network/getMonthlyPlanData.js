import { request } from './request'

export function getMonthlyPlanData (values) {
  return request({
      url: 'supervisor/findmonth',
      method: 'post',
      emulateJSON: true,
      data: {
        values
      }
  })
}
