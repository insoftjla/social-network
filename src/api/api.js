import axios from "axios";
import Cookies from "universal-cookie";

const instance = axios.create({
    withCredentials: true,
    responseType: 'application/json',
    baseURL: 'http://localhost:8080/api'
})

const apiVersion = '/v1'

const Api = {

    login(username, password) {
        return instance.post(`/auth/login`, { username, password })
            .catch(error => {
                console.log(error)
            })
    },

    logout() {
        const cookies = new Cookies();
        cookies.remove('token_api')
    },

    checkLogin() {
        return instance.get(`/auth`)
            .catch(error => {
                console.log("ERROR: checkLogin in api.js")
            })
    },

    getUsers(page, size) {
        return instance.get(`${apiVersion}/admin/customers?page=${page}&size=${size}`)
    },

    getUserById(id) {
        return instance.get(`${apiVersion}/admin/customers/${id}`);
    }
}

export default Api;