let initialState = {
    mobile: false,
    loginOrRegister: 'login', 
    registerPass: '',
    reenterRegisterPass: '',
    registerEmail: '',
    registerUsername: '',
    loginUsername: '',
    loginPassword: ''
}

const SET_MOBILE = 'SET_MOBILE';
const SET_LOGIN_OR_REGISTER = 'SET_LOGIN_OR_REGISTER';
const SET_REGISTER_PASS = 'SET_REGISTER_PASS';
const SET_REENTER_REGISTER_PASS = 'SET_REENTER_REGISTER_PASS';
const SET_REGISTER_EMAIL = 'SET_REGISTER_EMAIL';
const SET_REGISTER_USERNAME = 'SET_REGISTER_USERNAME';
const SET_LOGIN_USERNAME = 'SET_LOGIN_USERNAME';
const SET_LOGIN_PASSWORD = 'SET_LOGIN_PASSWORD';

export const setMobile = (bool) => {
    return {
        type: 'SET_MOBILE',
        payload: {
            mobile: bool
        }
    }
}

export const setLoginOrRegister = (val) => {
    return {
        type: 'SET_LOGIN_OR_REGISTER',
        payload: {
            loginOrRegister: val
        }
    }
}

export const setInputs = (val, type, inputName) => {
    return {
        type: type,
        payload: {
            [inputName]: val
        }
    }
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type){
        case SET_MOBILE:
            return {
                ...state,
                mobile: payload.mobile
            }
        case SET_LOGIN_OR_REGISTER:
            return {
                ...state,
                loginOrRegister: payload.loginOrRegister
            }
        case SET_REGISTER_PASS:
            return {
                ...state,
                registerPass: payload.registerPass
            }
        case SET_REENTER_REGISTER_PASS:
            return {
                ...state,
                reenterRegisterPass: payload.reenterRegisterPass
            }
        case SET_REGISTER_EMAIL:
            return {
                ...state,
                registerEmail: payload.registerEmail
            }
        case SET_REGISTER_USERNAME:
            return {
                ...state,
                registerUsername: payload.registerUsername
            }
        case SET_LOGIN_USERNAME:
            return {
                ...state,
                loginUsername: payload.loginUsername
            }
        case SET_LOGIN_PASSWORD:
            return {
                ...state,
                loginPassword: payload.loginPassword
            }
        default:
            return state
    }
}

export default reducer;