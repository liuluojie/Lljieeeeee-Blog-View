import request from "@/utils/request";

export function getAllTag() {
    return request({
        method: 'get',
        url: `/tag/getAllTag`
    })
}

export function getTagMap() {
    return request({
        method: 'get',
        url: `/category/getTagMap`
    })
}
