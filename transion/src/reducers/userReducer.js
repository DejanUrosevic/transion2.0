import { USER_LOGGED_IN, USER_LOGGED_OUT, USER_REGISTRATED, USER_FOUND, USER_NOT_FOUND } from '../types/userTypes'

export default function UserReducer(state = {}, action ={}){
    switch(action.type){
        case USER_LOGGED_IN:
            return action.user;
        case USER_LOGGED_OUT:
            return {};
        case USER_REGISTRATED:
            return action.user;
        case USER_FOUND:
            return action.user;
        default:
            return state;
    }
}