import { request } from './request'

export function getMaintain (values) {
  return request({
      url: 'supervisor/findMaintain',
      method: 'post',
      emulateJSON: true,
      data: {
        values
      }
  })
}
