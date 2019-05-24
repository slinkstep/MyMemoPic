import { ACTIONS } from "../../constants/actiontypes";
import { LIST_COVERS } from "../../constants/constants";

const initialState = {
  id: null,
  title: "",
  cover: 0,
  coverUri: null,
  photos: [],
  date: null,
  lastedited: null,
  numPhotos: "0"
};

export default (CurrentAlbum = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_TITLE:
      return {
        ...state,
        title: action.payload.value
      };

    case ACTIONS.SET_DATE:
      return {
        ...state,
        date: action.payload.value
      };

    case ACTIONS.SET_ID:
      return {
        ...state,
        id: action.payload.value
      };

    case ACTIONS.SELECT_COVER:
      return {
        ...state,
        cover: action.payload.value,
        coverUri: LIST_COVERS[action.payload.value].source
      };

    case ACTIONS.SET_PHOTOS:
      return {
        ...state,
        photos: action.payload.value
      };

    default:
      return state;
  }
});
