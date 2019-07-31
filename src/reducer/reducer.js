import { GET_ALL_ALBUMS } from '../actions/actionTypes'
const defaultState = {
    albums:[]
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
      case GET_ALL_ALBUMS:
        // let albums = state.albums;
        // let newAlbums = [...albums, action.data];
        // console.log(newAlbums);
        return {
            ...state,
            albums: action.data
        };

      default:
        return state
    }
  }
  
  export default reducer;