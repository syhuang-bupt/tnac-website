import { request } from './request'

export function getAssignedStudentData () {
  return request({
      url: '/director/allstudent/unassigned',
      method: 'get'
  })
}

export function getDirectorStudentData () {
  return request({
      url: '/director/allstudent/assigned',
      method: 'get'
  })
}

export function getDirectorAdmittedStudentData () {
  return request({
      url: '/student/allunEn',
      method: 'get'
  })
}

export function getSupervisionRehabilitationPlanStudent (values) {
  return request({
    url: 'supervisor/mystudent',
    method: 'post',
    emulateJSON: true,
      data: {
        values
      }
  })
}

// 督导相关
export function getSupervisionStudentData (values) {
  return request({
    url: 'supervisor/mystudent',
    method: 'post',
    emulateJSON: true,
      data: {
        values
      }
  })
}

// 康复师相关
export function getTherapistStudentData (values) {
  return request({
    url: 'teacher/mystudent',
    method: 'post',
    emulateJSON: true,
      data: {
        values
      }
  })
}

// 评估师相关
export function getAssessorStudentData (values) {
  return request({
    url: 'assessor/mystudent',
    method: 'post',
    emulateJSON: true,
      data: {
        values
      }
  })
}

// 家长相关
export function getParentStudentData (values) {
  return request({
    url: 'student/parentfind',
    method: 'post',
    emulateJSON: true,
      data: {
        values
      }
  })
}
