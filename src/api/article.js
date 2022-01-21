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


export function getArticlePageByCategory(current, size, queryArticleVo) {
    return request({
        method: 'post',
        url: `/article/getArticlePageByCategory/${current}/${size}`,
        data: queryArticleVo
    })
}

export function getArticlePageByTag(current, size, queryArticleVo) {
    return request({
        method: 'post',
        url: `/article/getArticlePageByTag/${current}/${size}`,
        data: queryArticleVo
    })
}

export function getArchiveList() {
    return request({
        method: 'get',
        url: `/article/getArchiveList`
    })
}
