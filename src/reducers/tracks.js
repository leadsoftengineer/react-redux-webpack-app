/**
 * KYIV MEDIA
 * 28.11.2019
 */
//create playlist with state and action

const initialState = [];

export default function playlist(state = initialState, action) {
  if (action.type === "ADD_TRACK") {
    return [...state, action.payload];
  } else if (action.type === "FETCH_TRACKS_SUCCESS") {
    return action.payload;
  }
  return state;
}
