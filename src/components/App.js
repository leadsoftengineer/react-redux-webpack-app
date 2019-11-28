/**
 * KYIV MEDIA
 * 28.11.2019
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { getTracks } from "../actions/tracks";
require("./App.css");

class App extends Component {
  addTrack() {
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value = "";
  }
  findTrack() {
    this.props.onFindTrack(this.searchInput.value);
  }

  render() {
    console.log(this.props.tracks);
    return (
      <div>
        <div>
          <input
            type="text"
            className="trackInput"
            ref={input => {
              this.trackInput = input;
            }}
          />
          <button className="addTrack" onClick={this.addTrack.bind(this)}>
            Add track
          </button>
        </div>
        <div>
          <input
            type="text"
            className="searchInput"
            ref={input => {
              this.searchInput = input;
            }}
          />
          <button className="findTrack" onClick={this.findTrack.bind(this)}>
            Find track
          </button>
        </div>
        {/* <div>
          <button className="getTracks" onClick={this.props.onGetTracks}>Get tracks</button>
        </div> */}
        <ul className="list">
          {this.props.tracks.map((track, index) => (
            <li key={index}>{track.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

// добавление строк  в dispatch (trackName)
// export default connect(
//   state => ({
//     tracks: state.tracks
//   }),
//   dispatch => ({
//     onAddTrack: trackName => {
//       dispatch({ type: "ADD_TRACK", payload: trackName });
//     }
//   })
// )(App);

//добавление обЪектов в dispatch
export default connect(
  state => ({
    tracks: state.tracks.filter(track =>
      track.name.includes(state.filterTracks)
    )
  }),
  dispatch => ({
    onAddTrack: name => {
      const payload = {
        id: Date.now().toString(),
        name
      };
      dispatch({ type: "ADD_TRACK", payload });
    },
    onFindTrack: name => {
      dispatch({ type: "FIND_TRACK", payload: name });
    },
    onGetTracks: () => {
      dispatch(getTracks());
    }
  })
)(App);
