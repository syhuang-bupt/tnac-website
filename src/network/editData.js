import { request } from './request'

// 行政相关编辑
// 行政编辑已入学学生
export function getEnrolledStudentData (values) {
  return request({
    url: 'student/enrollcheck',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}

export function editEnrolledStudent (values) {
  return request({
    url: 'student/enrollupdate',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}

// 行政编辑未入学学生
export function getAdmittedStudentData (values) {
  return request({
    url: 'student/unEncheck',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}

export function editAdmittedStudent (values) {
  return request({
    url: 'student/unEnupdate',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}

// 行政编辑商业学生
export function getEvaluationStudentData (values) {
  return request({
    url: 'student/Bsncheck',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}

export function editEvaluationStudent (values) {
  return request({
    url: 'student/Bsnupdate',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}

// 行政编辑教导主任
export function getDirectorData (values) {
  return request({
    url: 'staff/drecCheck',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}

export function editDirector (values) {
  return request({
    url: 'staff/drecUpdate',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}

// 行政编辑督导
export function getSupervisionData (values) {
  return request({
    url: 'staff/supCheck',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}

export function editSupervision (values) {
  return request({
    url: 'staff/supUpdate',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}

// 行政编辑康复师
export function getTherapistData (values) {
  return request({
    url: 'staff/thpCheck',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}

export function editTherapist (values) {
  return request({
    url: 'staff/thpUpdate',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}

// 行政编辑评估师
export function getAssessorData (values) {
  return request({
    url: 'staff/asmCheck',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}

export function editAssessor (values) {
  return request({
    url: 'staff/asmUpdate',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}

// 行政编辑其他工作人员
export function getLogisticsData (values) {
  return request({
    url: 'staff/otherCheck',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}

export function editLogistics (values) {
  return request({
    url: 'staff/otherUpdate',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}

// 教导主任改大课
export function editBigCourse (values) {
  return request({
    url: 'director/classUpdate',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}

// 教导主任改学生关系
export function editRelationship (values) {
  return request({
    url: 'director/supUpdate',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}

// 督导改小课
export function editCourseDetail (values) {
  return request({
    url: 'supervisor/taskUpdate',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}
