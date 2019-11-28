/**
 * KYIV MEDIA
 * 28.11.2019
 */
//create playlist with state and action

const initialState = {
  playlists: ["My home playlists", "My work playlists"]
};

export default function playlist(state = initialState, action) {
  if (action.type === "ADD_PLAYLIST") {
    return state;
  } else if (action.type === "DELETE_PLAYLIST") {
    return state;
  }
  return state;
}
