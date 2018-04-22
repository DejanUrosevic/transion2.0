import userApi from '../api/userApi';
import {USER_LOGGED_IN, USER_LOGGED_OUT, USER_REGISTRATED} from '../types/userTypes';

export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
});

export const login = credentials => dispatch => 
    userApi.user.login(credentials)
        .then(user => {
            localStorage.setItem("email", user.email);
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

