import { request } from './request'

export function getAllStudentInfoEnrolled () {
  return request({
      url: 'student/all',
      method: 'get'
  })
}

export function getAllStudentInfoAdmitted () {
  return request({
      url: 'student/allunEn',
      method: 'get'
  })
}

export function getAllBusinessEvaluation () {
  return request({
      url: 'student/allBsn',
      method: 'get'
  })
}

export function getAllDirectorData () {
  return request({
      url: 'staff/findDrec',
      method: 'post'
  })
}

export function getAllSupervisionData () {
  return request({
      url: 'staff/findSup',
      method: 'post'
  })
}

export function getAllTherapistsData () {
  return request({
      url: 'staff/findThp',
      method: 'post'
  })
}

export function getAllAssessorData () {
  return request({
      url: 'staff/findAses',
      method: 'post'
  })
}

export function getAllLogisticsData () {
  return request({
      url: 'staff/findOth',
      method: 'post'
  })
}

export function getStudentDailyManage () {
  return request({
    url: 'student/DaliyManage',
    method: 'get'
  })
}

export function getDirectorDailyManage () {
  return request({
    url: '/staff/manage/director',
    method: 'get'
  })
}

export function getSupervisionDailyManage () {
  return request({
    url: '/staff/manage/supervisor',
    method: 'get'
  })
}

export function getTherapistsDailyManage () {
  return request({
    url: '/staff/manage/teacher',
    method: 'get'
  })
}

export function getAssessorDailyManage () {
  return request({
    url: '/staff/manage/assessor',
    method: 'get'
  })
}

export function getLogisticsDailyManage () {
  return request({
    url: '/staff/manage/other',
    method: 'get'
  })
}
