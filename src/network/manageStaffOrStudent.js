import { request } from './request'

export function postStudentManageData (values) {
  return request({
      url: '/student/updateAtt',
      method: 'post',
      emulateJSON: true,
      data: {
        values
      }
  })
}
