import Constans from './../../utils/Constans'

const loginState = {
    LoginResponse: {}
}

export default (state = loginState, action) => {
    switch(action.type){
        
        case Constans.SuccessFetchLogin:
            return {...state, LoginResponse: action.payload}

        case Constans.FailFetchLogin:
            return {...state, LoginResponse: action.payload}
            
        default:
        return state
    }
}