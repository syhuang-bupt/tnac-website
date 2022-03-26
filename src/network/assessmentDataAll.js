import { request } from './request'

// 获取评估师当前评估
export function getAssessmentData (values) {
  return request({
    url: 'assessor/myassessment',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}

// 发送VB评估数据
export function postVbAssessmentData (values) {
  return request({
    url: '/assessment/addVB',
    method: 'post',
    emulateJSON: true,
    data: {
      values
    }
  })
}

// 评估图表数据请求
export function vBchartsData (values) {
  return request({
      url: 'assessment/chart/VB',
      method: 'post',
      emulateJSON: true,
      data: {
        values
      }
  })
}
