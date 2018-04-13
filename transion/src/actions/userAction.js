import userApi from '../api/userApi';
import {USER_LOGGED_IN, USER_LOGGED_OUT} from '../types/userTypes';

export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
});

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT
});

export const login = credentials => dispatch => 
    userApi.user.login(credentials)
        .then(user => {
            localStorage.setItem("email", user.email);
            dispatch(userLoggedIn(user));
        });


export const logout = () => dispatch => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    dispatch(userLoggedOut());
}
