let initialState = {
    mobile: false,
    loginOrRegister: 'login', 
    registerPass: '',
    reenterRegisterPass: '',
    registerEmail: '',
    registerUsername: '',
    loginUsername: '',
    loginPassword: '',
    addPersonGroupName: '',
    addPageName: '',
    addTodoItem: '',
    sessionUsername: '',
    sessionUserId: null,
    sessionPeopleAndGroups: [],
    personPages: [],
    pageTodos: [],
    showAddPerson: false,
    showAddPage: false,
    selectedPerson: null,
    selectedPage: null,
    showAddTodo: false
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
const SET_PERSON_PAGES = 'SET_PERSON_PAGES';
const SET_PAGE_TODOS = 'SET_PAGE_TODOS';
const SET_SHOW_ADD_PERSON = 'SET_SHOW_ADD_PERSON';
const SET_ADD_PERSON_GROUP_NAME = 'SET_ADD_PERSON_GROUP_NAME';
const SET_SHOW_ADD_PAGE = 'SET_SHOW_ADD_PAGE';
const SET_ADD_PAGE_NAME = 'SET_ADD_PAGE_NAME';
const SET_SELECTED_PERSON = 'SET_SELECTED_PERSON';
const SET_SELECTED_PAGE = 'SET_SELECTED_PAGE';
const SET_SHOW_ADD_TODO = 'SET_SHOW_ADD_TODO';
const SET_ADD_TODO_ITEM = 'SET_ADD_TODO_ITEM';

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
        // Updates state for each of the inputs throughout the app
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
        case SET_ADD_PERSON_GROUP_NAME:
            return {
                ...state,
                addPersonGroupName: payload.addPersonGroupName
            }
        case SET_ADD_PAGE_NAME:
            return {
                ...state,
                addPageName: payload.addPageName
            }
        case SET_ADD_TODO_ITEM:
            return {
                ...state,
                addTodoItem: payload.addTodoItem
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
        //
        //
        // Retrieves pages from database, linked to the pesron_id on the person_table
        //
        //    
        case SET_PERSON_PAGES:
            return {
                ...state,
                personPages: payload.personPages
            }
        //
        //
        // Retrieves todos from database, linked to the page_id on the pages_table
        //
        // 
        case SET_PAGE_TODOS:
            return {
                ...state,
                pageTodos: payload.pageTodos
            }
        //
        //
        // The below cases store the id of the person or page that is selected
        //
        //
        case SET_SELECTED_PERSON:
            return {
                ...state,
                selectedPerson: payload.selectedPerson
            }
        case SET_SELECTED_PAGE:
            return {
                ...state,
                selectedPage: payload.selectedPage
            }
        //
        //
        // the following three cases are to display the input boxes to add a new person/group, page, and todo (respectively)
        //
        //
        case SET_SHOW_ADD_PERSON:
            return {
                ...state,
                showAddPerson: payload.showAddPerson
            }
        case SET_SHOW_ADD_PAGE:
            return {
                ...state,
                showAddPage: payload.showAddPage
            }
        case SET_SHOW_ADD_TODO:
            return {
                ...state,
                showAddTodo: payload.showAddTodo
            }
        default:
            return state
    }
}

export default reducer;