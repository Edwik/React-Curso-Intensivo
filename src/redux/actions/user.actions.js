import Constans from './../../utils/Constans'

export const CreateUser = (payload) => {
    return{
        type: Constans.CreateUserAction,
        payload
    }
}