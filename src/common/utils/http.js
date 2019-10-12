import axios from 'axios'



export function searchQuery(data){
    return axios.get(`/api/search?fromIndex=1&fetchSize=10&query=${data}`)
}