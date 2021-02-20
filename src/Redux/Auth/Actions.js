export const ACTION_TYPES = {
    LOGIN_USER      : "LOGIN_USER",
    LOGOUT_USER     : "LOGOUT_USER",
    CHANGE_ROLE     : "CHANGE_ROLE"
}

export const loginUser = (data) => {
    // SET YOUR LOGIN INFO HERE
    localStorage.setItem('isLoggedIn', true)
    localStorage.setItem('userInfo', JSON.stringify(data.userInfo))
    return {
        type : ACTION_TYPES.LOGIN_USER,
        ...data
    }
}

export const changeRole = () => {
    return {
        type : ACTION_TYPES.CHANGE_ROLE
    }
}

export const logOutUser = () => {
    localStorage.clear();
    return {
        type : ACTION_TYPES.LOGOUT_USER,
    }
}