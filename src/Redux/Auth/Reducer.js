import { ACTION_TYPES } from './Actions';

const initState = {
    isLoggedIn  : localStorage.getItem('isLoggedIn')? (localStorage.getItem('isLoggedIn') === "true" ) : false,
    userInfo    : localStorage.getItem('userInfo') ? localStorage.getItem('userInfo') : {}
}

const Reducer = (state = initState, action) => {
    switch (action.type) {
        case ACTION_TYPES.LOGIN_USER:
            return {
                ...state,
                userInfo        : action.userInfo,
                isLoggedIn      : true
            };

        case ACTION_TYPES.LOGOUT_USER:
            return {
                ...state,
                isLoggedIn: false
            };
        
        default:
            return state;
    }
    
}

export default Reducer;