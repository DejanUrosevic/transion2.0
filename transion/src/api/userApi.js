import axios from 'axios';

export default {
    user: {
        login: (user) => {
            return axios.post('http://localhost:8080/login', { "username": user.username, "password":user.password })
            .then(function(response){
                localStorage.setItem("token", response.headers.authorization);
                return response.data;
            })
            .catch(error => {
                console.log(error);
            })
        },
        registration: (user) => {
            return axios.post('http://localhost:8080/api/transionUser', user)
            .then(function(response){
                return response.data;
            })
            .catch(error => {
                console.log(error);
            })
        },
        findUserByEmail: (username) => {
            axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
            return axios.get('http://localhost:8080/api/transionUser/findemail', {params: {"username" : username}})
            .then(function(response){
                return response.data;
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
}