import axios from "axios"
// 创建axios.create变量
const ajax = axios.create({
    baseURL:'http://jsonplaceholder.typicode.com'
})
// 抛出axios.create().get方法
export const getPosts = () => {
    return ajax.get("./posts")
}