import { ACTIONS } from "../../constants/actiontypes";

const initialState = {
  listAlbums: {}
};

export default (Album = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_NEW_ALBUM:
      return {
        ...state,
        listAlbums: {
          ...state.listAlbums,
          [action.payload.value.id]:
          {
            ...action.payload.value
          }
        }
      };

    case ACTIONS.DELETE_ALBUM:
      return {
        ...state,
        listAlbums: {
          ...action.payload.value
        }
      }
      
    case ACTIONS.UPDATE_PHOTOS:
      return{
        ...state,
        listAlbums: {
          ...state.listAlbums,
          [action.payload.value.id]:
          {
            ...state.listAlbums[action.payload.value.id],
            photos: action.payload.value.photos,
            numPhotos: action.payload.value.photos.length
          }
        }
      };



      

    default:
      return state;
  }
});
