/**
 * KYIV MEDIA
 * 28.11.2019
 */
var mockApiData = [
  {
    id: 1,
    name: "Time"
  },
  {
    id: 2,
    name: "Crazy"
  },
  {
    id: 3,
    name: "Dust in the Wind"
  },
  {
    id: 4,
    name: "I got you"
  },
  {
    id: 5,
    name: "Love"
  }
];

export const getTracks = () => dispatch => {
  setTimeout(() => {
    dispatch({ type: "FETCH_TRACKS_SUCCESS", payload: mockApiData });
  }, 2000);
};
