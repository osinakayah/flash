import { takeLatest, all } from 'redux-saga/effects';
import AuthenticationAPI from '../Service/AuthenticationService/api'

/* ------------- Types ------------- */
import {LoginTypes } from "../Redux/LoginRedux";
/* ------------- Sagas ------------- */
import { loginSaga } from "./LoginSaga";

/* ------------- API ------------- */
const authenticationAPI = AuthenticationAPI.create();

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.



/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
    yield all([
        takeLatest(LoginTypes.LOGIN_REQUEST, loginSaga, authenticationAPI)
    ]);
}
