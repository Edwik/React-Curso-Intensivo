import { call, put, takeEvery } from 'redux-saga/effects'
import Constans from './../../utils/Constans'
import LoginService from './../../API/services/LoginService'

function * login(action){
    try{
        const data = yield call(LoginService.login, action.payload)

        if(data.status !== 200){
            return yield put({
                type: Constans.FailFetchLogin,
                payload: data
            })
        }
        yield put({
            type: Constans.SuccessFetchLogin,
            payload: data
        })
    }
    catch(e){
        yield put({
            type: Constans.FailFetchLogin,
            payload: e.message
        })
    }
}

export function * loginSaga(){
    yield takeEvery(Constans.loginAction, login)
}