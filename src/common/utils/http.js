import axios from 'axios'


export function searchQuery(data){
    return axios.get(`/api/search?fromIndex=${data.fromIndex}&fetchSize=5&query=${data.inputValue}`)
}