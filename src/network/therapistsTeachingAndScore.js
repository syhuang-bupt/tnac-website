import { request } from './request'

export function therapistsTeachingTodayCourse (values) {
  return request({
      url: '/teacher/myclass',
      method: 'post',
      emulateJSON: true,
      data: {
        values
      }
  })
}

// 康复师请求某节课的详细信息
export function getTherapistsTeachingTodayCourseDetail (values) {
  return request({
      url: '/teacher/detailCur',
      method: 'post',
      emulateJSON: true,
      data: {
        values
      }
  })
}

// 康复师发送某节课的成绩
export function postTherapistsTeachingTodayCourseDetail (values) {
  return request({
      url: '/teacher/addRec',
      method: 'post',
      emulateJSON: true,
      data: {
        values
      }
  })
}

export function therapistsTeachingMaintain (values) {
  return request({
      url: '/teacher/findMaintain',
      method: 'post',
      emulateJSON: true,
      data: {
        values
      }
  })
}
