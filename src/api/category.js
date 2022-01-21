import request from "@/utils/request";

export function getAllCategory() {
    return request({
        method: 'get',
        url: `/category/getAllCategory`
    })
}

export function getCategoryMap() {
    return request({
        method: 'get',
        url: `/category/getCategoryMap`
    })
}

