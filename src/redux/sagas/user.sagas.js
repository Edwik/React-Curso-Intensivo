import { call, put, takeEvery } from 'redux-saga/effects'
import Constans from './../../utils/Constans'
import LoginService from './../../API/services/LoginService'

function * createUser(action){
    try{
        const data = yield call(LoginService.create, action.payload)

        if(data.status !== 200){
            return yield put({
                type: Constans.FailFetchCreateUser,
                payload: data
            })
        }
        yield put({
            type: Constans.SuccessFetchCreateUser,
            payload: data
        })
    }
    catch(e){
        yield put({
            type: Constans.FailFetchCreateUser,
            payload: e.message
        })
    }
}

export function * createUserSaga(){
    yield takeEvery(Constans.CreateUserAction, createUser)
}