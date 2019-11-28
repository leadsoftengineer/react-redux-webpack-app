/**
 * KYIV MEDIA
 * 28.11.2019
 */
//create playlist with state and action

const initialState = "";

export default function filterTracks(state = initialState, action) {
  if (action.type === "FIND_TRACK") {
    return action.payload;
  }
  return state;
}
