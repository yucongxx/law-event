import axios from 'axios'

// 请求list接口
export function searchQuery(data){
    return axios.get(`/api/search?fromIndex=${data.fromIndex}&fetchSize=10&query=${data.inputValue}`)
}

// 请求detail接口
export function searchQueryDetail(data){
    return axios.get(`/api/caipanwenshu/${data.detailId}`)
}

// 请求图表接口
export function getEchartsList(value){
    return axios.get(`/api/search/charts?query=${value}`)
}