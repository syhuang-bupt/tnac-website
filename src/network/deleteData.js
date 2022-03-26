import { request } from './request'

// 行政相关删除
// 行政删除已入学学生
export function deleteEnrolledStudent (values) {
  return request({
    url: 'student/delEnrolled',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}

// 行政未入学学生
export function deleteAdmittedStudent (values) {
  return request({
    url: 'student/delunEnrolled',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}

// 行政删除商业学生
export function deleteBusinessEvaluationStudent (values) {
  return request({
    url: 'student/delBsn',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}

// 行政删除教导主任
export function deleteDirector (values) {
  return request({
    url: 'staff/delDirector',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}

// 行政删除督导
export function deleteSupervision (values) {
  return request({
    url: 'staff/delSupervisor',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}

// 行政删除康复师
export function deleteTherapists (values) {
  return request({
    url: 'staff/delThp',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}

// 行政删除评估师
export function deleteAssessor (values) {
  return request({
    url: 'staff/delAssessor ',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}

// 行政删除其他员工
export function deleteLogistics (values) {
  return request({
    url: 'staff/delOther',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}

// 教导主任相关删除
export function directorDeleteStudentCourse (values) {
  return request({
    url: 'director/delclass',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}

// 督导相关删除
export function supervisionDeleteStudentDetailCourse (values) {
  return request({
    url: 'supervisor/delTask',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}
