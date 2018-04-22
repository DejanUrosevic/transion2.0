import axios from 'axios';

export default {
    user: {
        login: (user) => {
            return axios.post('http://localhost:8080/login', { "email": user.email, "password":user.password })
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
        }
    }
}