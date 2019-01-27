import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../Sagas/';
import { persistReducer } from 'redux-persist';
import reduxPersist from '../Config/ReduxPersist';
export default () => {

    /* ------------- Assemble The Reducers ------------- */
    const rootReducer = combineReducers({
        login: require('./LoginRedux').reducer
    });

    const persistConfig = reduxPersist.storeConfig;
    const finalReducers = persistReducer(persistConfig, rootReducer);


    return configureStore(finalReducers, rootSaga);
};
