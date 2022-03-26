import { request } from './request'

export function getWhichTimeHaveCourse (values) {
    return request({
        url: '/supervisor/findcourse',
        method: 'post',
        emulateJSON: true,
        data: {
            values
        }
    })
}
