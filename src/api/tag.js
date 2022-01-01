import request from "@/utils/request";

export function getTagMap(current, size) {
    return request({
        method: 'get',
        url: `/tag/getAllTag`
    })
}