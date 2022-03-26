import { request } from './request'

export function postSupervisionCourseTaskData (values) {
  return request({
      url: 'supervisor/updatecourse',
      method: 'post',
      emulateJSON: true,
      data: {
        values
      }
  })
}
