import request from "@/utils/request";

export function getCategoryMap() {
    return request({
        method: 'get',
        url: `/category/getAllCategory`
    })
}
