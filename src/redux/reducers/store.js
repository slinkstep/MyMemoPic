import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import RootReducer from './Index';

const rootPersistConfig = {
    key: 'root',
    storage,
    timeout: null,
    blacklist: ['currentAlbum','newAlbum']
}

const persistedReducer = persistReducer(rootPersistConfig, RootReducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);