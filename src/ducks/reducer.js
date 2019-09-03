let initialState = {
    mobile: false,
    loginOrRegister: 'login', 
    registerPass: '',
    reenterRegisterPass: '',
    registerEmail: '',
    registerUsername: '',
    loginUsername: '',
    loginPassword: '',
    sessionUsername: '',
    sessionUserId: null,
    sessionPeopleAndGroups: []
}

const SET_MOBILE = 'SET_MOBILE';
const SET_LOGIN_OR_REGISTER = 'SET_LOGIN_OR_REGISTER';
const SET_REGISTER_PASS = 'SET_REGISTER_PASS';
const SET_REENTER_REGISTER_PASS = 'SET_REENTER_REGISTER_PASS';
const SET_REGISTER_EMAIL = 'SET_REGISTER_EMAIL';
const SET_REGISTER_USERNAME = 'SET_REGISTER_USERNAME';
const SET_LOGIN_USERNAME = 'SET_LOGIN_USERNAME';
const SET_LOGIN_PASSWORD = 'SET_LOGIN_PASSWORD';
const SET_SESSION_USERNAME = 'SET_SESSION_USERNAME';
const SET_SESSION_USER_ID = 'SET_SESSION_USER_ID';
const SET_SESSION_PEOPLE_AND_GROUPS = 'SET_SESSION_PEOPLE_AND_GROUPS';

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

export const updateRedux = (val, type, prop) => {
    return {
        type: type,
        payload: {
            [prop]: val
        }
    }
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type){
        //
        //
        // Checks if the device is in mobile view (for styling purposes)
        //
        //
        case SET_MOBILE:
            return {
                ...state,
                mobile: payload.mobile
            }
        //
        //
        // A toggle to display the login box or register box in the Auth component
        //
        //
        case SET_LOGIN_OR_REGISTER:
            return {
                ...state,
                loginOrRegister: payload.loginOrRegister
            }
        //
        //
        // Updates state for each of the inputs in the login and register areas, again from the Auth component
        //
        //
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
        //
        //
        // Sets session username and user_id to redux state to be used within the application
        //
        //
        case SET_SESSION_USERNAME:
            return {
                ...state,
                sessionUsername: payload.sessionUsername
            }
        case SET_SESSION_USER_ID:
            return {
                ...state,
                sessionUserId: payload.sessionUserId
            }
        //
        //
        // Retrieves people and groups from database, linked to the user_id on sessions
        //
        //
        case SET_SESSION_PEOPLE_AND_GROUPS:
            return {
                ...state,
                sessionPeopleAndGroups: payload.sessionPeopleAndGroups
            }
        default:
            return state
    }
}

export default reducer;