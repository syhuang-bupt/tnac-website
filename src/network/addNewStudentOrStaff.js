import { request } from './request'

// 添加新学生或新员工

export function addEnrolledStudent (values) {
  return request({
    url: '/student/enrolladd',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}

export function addAdmittedStudent (values) {
  return request({
      url: '/student/unenrolladd',
      method: 'post',
      emulateJSON: true,
      data: {
        values
      }
  })
}

export function addBusinessEvaluationStudent (values) {
  return request({
      url: '/student/businessadd',
      method: 'post',
      emulateJSON: true,
      data: {
        values
      }
  })
}

export function addDirector (values) {
  return request({
      url: '/staff/directoradd',
      method: 'post',
      emulateJSON: true,
      data: {
        values
      }
  })
}

export function addSupervision (values) {
  return request({
      url: '/staff/supervisoradd',
      method: 'post',
      emulateJSON: true,
      data: {
        values
      }
  })
}

export function addTherapists (values) {
  return request({
      url: '/staff/teacheradd',
      method: 'post',
      emulateJSON: true,
      data: {
        values
      }
  })
}

export function addAssessor (values) {
  return request({
      url: '/staff/assessoradd',
      method: 'post',
      emulateJSON: true,
      data: {
        values
      }
  })
}

export function addLogistics (values) {
  return request({
      url: '/staff/otheradd',
      method: 'post',
      emulateJSON: true,
      data: {
        values
      }
  })
}
