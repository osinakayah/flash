import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore} from 'redux-persist';
// creates the store
export default (rootReducer, rootSaga) => {
    /* ------------- Redux Configuration ------------- */

    const middleware = [];
    const enhancers = [];


    /* ------------- Saga Middleware ------------- */

    const sagaMonitor = null;
    const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
    middleware.push(sagaMiddleware);

    enhancers.push(applyMiddleware(...middleware));

    const store = createStore(rootReducer, compose(...enhancers));


    // kick off root saga
    sagaMiddleware.run(rootSaga);
    const persistor = persistStore(store);
    return {store, persistor};
};
