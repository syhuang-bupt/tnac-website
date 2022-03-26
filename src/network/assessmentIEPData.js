import { request } from './request'

export function getVBAssessment (values) {
    return request({
        url: '/assessment/VB',
        method: 'post',
        data: {
            values
        }
    })
}

export function getIEP (values) {
    return request({
        url: '/assessment/IEP',
        method: 'post',
        data: {
            values
        }
    })
}

export function postIEP (values) {
    return request({
        url: '/assessment/IEPSave',
        method: 'post',
        data: {
            values
        }
    })
}

export function getAssessorIEP (values) {
    return request({
        url: 'assessor/myIEP',
        method: 'post',
        data: {
            values
        }
    })
}
