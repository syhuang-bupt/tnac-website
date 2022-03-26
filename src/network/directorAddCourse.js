import { request } from './request'

export function directorAddCourse (values) {
  return request({
    url: '/director/addclass',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}
