import { call, put } from 'redux-saga/effects'
import LoginActions from '../Redux/LoginRedux'
import { LoginSelectors } from '../Redux/LoginRedux'

export function * loginSaga (api, action) {

    const { data } = action

    const response = yield call(api.loginUser, data);

    // success?
    if (response.ok) {
        yield put(LoginActions.loginSuccess(response.data))
    }
    else {
        yield put(LoginActions.loginFailure())
    }
}
