import userApi from '../api/userApi';
import {USER_LOGGED_IN, USER_LOGGED_OUT, USER_REGISTRATED, USER_FOUND, USER_NOT_FOUND} from '../types/userTypes';

export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
});

export const login = credentials => dispatch => 
    userApi.user.login(credentials)
        .then(user => {
            localStorage.setItem("username", user.username);
            dispatch(userLoggedIn(user));
        });

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT
});

export const logout = () => dispatch => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    dispatch(userLoggedOut());
};

export const userRegistration = (user) => ({
    type: USER_REGISTRATED,
    user
});

export const registrationUser = userData => dispatch => 
    userApi.user.registration(userData)
        .then(user => {
            dispatch(userRegistration(user));            
        });

export const userFound = (user) => ({
    type: USER_FOUND,
    user
})

export const userNotFound = () => ({
    type: USER_NOT_FOUND
})

export const findUserByMail = email => dispatch =>
    userApi.user.findUserByEmail(email)
        .then(user => {
            dispatch(userFound(user));
            return user;
        })
        .catch(error =>{
            dispatch(userNotFound());
        })
