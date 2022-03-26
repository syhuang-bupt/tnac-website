import { request } from './request'

export function getAssignedState (values) {
  return request({
      url: 'director/updateassigned/check',
      method: 'post',
      emulateJSON: true,
      data: {
        values
      }
  })
}

export function postAssignedSupervisorData (values) {
  return request({
      url: 'director/updateassigned/supervisor',
      method: 'post',
      emulateJSON: true,
      data: {
        values
      }
  })
}

export function postAssignedAssessmentData (values) {
  return request({
      url: 'director/updateassigned/assessment',
      method: 'post',
      emulateJSON: true,
      data: {
        values
      }
  })
}

export function postAssignedCourseData (values) {
  return request({
      url: 'director/updateassigned/course',
      method: 'post',
      emulateJSON: true,
      data: {
        values
      }
  })
}
