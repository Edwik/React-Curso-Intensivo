import Constans from './../../utils/Constans'

const UserState = {
    UserResponse: {}
}

export default (state = UserState, action) => {
    switch(action.type){
        
        case Constans.SuccessFetchCreateUser:
            return {...state, UserResponse: action.payload}

        case Constans.FailFetchCreateUser:
            return {...state, UserResponse: action.payload}
            
        default:
        return state
    }
}