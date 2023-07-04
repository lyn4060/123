import axios from "axios"
const http = axios.create({
  baseURL: "https://codegeex.cn",
  headers: {
    // Accept: "application/json",
    "Content-Type": "application/json",
    charset: "utf-8"
  }
})
http.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
http.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)
export default http
