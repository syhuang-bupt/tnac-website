import { request } from './request'

// 教导主任相关
export function getDirectorStudentDetail (values) {
    return request({
        url: 'student/findname',
        method: 'post',
        data: {
          values
        }
    })
}

export function getDirectorStudentDetailHistoryInfo (values) {
    return request({
        url: 'student/findname/history',
        method: 'post',
        data: {
          values
        }
    })
}

export function getDirectorStudentDetailStudentSchedule (values) {
  return request({
      url: 'student/findname/course',
      method: 'post',
      data: {
        values
      }
  })
}

export function getAllSupervisionData (values) {
  return request({
      url: 'director/findSupOnlyName',
      method: 'get'
  })
}

export function postStudentScheduleBackup (values) {
  return request({
      url: '/director/backupCur',
      method: 'post',
      emulateJSON: true,
      data: {
        values
      }
  })
}

export function getStudentBackupSchedule (values) {
  return request({
      url: '/director/checkBakDate',
      method: 'post',
      emulateJSON: true,
      data: {
        values
      }
  })
}

export function getStudentBackupDetail (values) {
  return request({
      url: '/director/checkBakDetail',
      method: 'post',
      emulateJSON: true,
      data: {
        values
      }
  })
}

export function getAllAssessmentIEPData (values) {
  return request({
      url: 'director/find/IEP',
      method: 'post',
      emulateJSON: true,
      data: {
        values
      }
  })
}

// 督导相关
export function getSupervisionStudentDetail (values) {
  return request({
      url: 'student/findname',
      method: 'post',
      data: {
        values
      }
  })
}

export function getSupervisionStudentDetailHistoryInfo (values) {
  return request({
      url: 'student/findname/history',
      method: 'post',
      data: {
        values
      }
  })
}

export function getSupervisionStudentDetailStudentSchedule (values) {
  return request({
      url: 'student/findname/course',
      method: 'post',
      data: {
        values
      }
  })
}

export function getSupervisorAllAssessmentData (values) {
  return request({
      url: 'supervisor/findAsm',
      method: 'post',
      emulateJSON: true,
      data: {
        values
      }
  })
}

// 康复师相关
export function getTherapistStudentDetail (values) {
  return request({
      url: 'student/findname',
      method: 'post',
      data: {
        values
      }
  })
}

export function getTherapistStudentDetailHistoryInfo (values) {
  return request({
      url: 'student/findname/history',
      method: 'post',
      data: {
        values
      }
  })
}

// 评估数相关
export function getAssessorStudentDetail (values) {
  return request({
      url: 'student/findname',
      method: 'post',
      data: {
        values
      }
  })
}

export function getAssessorStudentDetailHistoryInfo (values) {
  return request({
      url: 'student/findname/history',
      method: 'post',
      data: {
        values
      }
  })
}

// 家长相关
export function getParentStudentDetail (values) {
  return request({
      url: 'student/findname',
      method: 'post',
      data: {
        values
      }
  })
}

export function getParentStudentDetailStudentSchedule (values) {
  return request({
      url: 'student/findname/course',
      method: 'post',
      data: {
        values
      }
  })
}
