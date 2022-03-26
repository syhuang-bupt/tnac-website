import { request } from './request'

export function getDirectorBusinessEvaluationStudentData () {
  return request({
      url: '/director/allBsn',
      method: 'get'
  })
}

export function getBusinessEvaluationStudentDetail (values) {
  return request({
    url: '/director/findBsn',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}

export function postAssessmentData (values) {
  return request({
    url: 'director/addBsn/assessment',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}

export function getAllAssessmentData (values) {
  return request({
    url: 'director/findBsn/assessment',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}

export function getAssessmentChartDataDetail (values) {
  return request({
    url: 'assessment/chart/VBbsn',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}

export function getAllIEPData (values) {
  return request({
    url: '/director/findBsn/IEP',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}

// 属于特定评估师的函数
export function getAssessorBusinessStudent (values) {
  return request({
    url: 'assessor/mystudentBsn',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}

export function getAssessorAllBusinessStudentAssessment (values) {
  return request({
    url: 'assessor/myassessment',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}

export function postVbBusinessAssessmentData (values) {
  return request({
    url: 'assessment/addVBbsn',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}

export function getAssessorAllBusinessStudentIEP (values) {
  return request({
    url: '/assessor/myIEP',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}

export function getVBAssessment (values) {
  return request({
      url: '/assessment/VBbsn',
      method: 'post',
      data: {
          values
      }
  })
}

export function postIEP (values) {
  return request({
    url: 'assessment/IEPsavebsn',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}
