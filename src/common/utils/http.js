import axios from 'axios'

// 请求list接口
export function searchQuery(data){
    return axios.get(`/api/search?fromIndex=${data.fromIndex}&fetchSize=5&query=${data.inputValue}`)
}

// 请求detail接口
export function searchQueryDetail(data){
    return axios.get(`/api/caipanwenshu/${data.detailId}`)
}