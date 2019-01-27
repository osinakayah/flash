import storage from 'redux-persist/lib/storage';
const REDUX_PERSIST = {
    storeConfig: {
        key: 'root',
        storage,
        whitelist: [],
    }
};

export default REDUX_PERSIST;
