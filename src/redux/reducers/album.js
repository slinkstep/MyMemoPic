import { ACTIONS } from "../../constants/actiontypes";

const initialState = {
  listAlbums: []
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

    default:
      return state;
  }
});
