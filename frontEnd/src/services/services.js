import axios from 'axios'

const serverHost = "http://localhost:8080"

export const getHelloMsg = function() {
    return axios.get(serverHost+"/")
}

export const getFilesList = function() {
    return axios.get(serverHost+"/getAllFiles")
}
