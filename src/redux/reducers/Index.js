import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import Album from './album'
import CurrentAlbum from './currentAlbum'

const newAlbumPersistConfig= {
    key: 'newAlbum',
    storage: storage,
    blacklist: ['listAlbums'],
    timeout: null
}

const currentAlbumPersistConfig= {
    key: 'currentAlbum',
    storage: storage,
    blacklist: ['date','cover','coverUri','title'],
    timeout: null
}

export default combineReducers({
    newAlbum: persistReducer(newAlbumPersistConfig, Album),
    currentAlbum: persistReducer(currentAlbumPersistConfig, CurrentAlbum)

})