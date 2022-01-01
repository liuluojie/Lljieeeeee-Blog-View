import request from "@/utils/request";

export function getArticlePage(current, size) {
    return request({
        method: 'get',
        url: `/article/${current}/${size}`
    })
}

export function getArticleById(id) {
    return request({
        method: 'get',
        url: `/article/${id}`
    })
}