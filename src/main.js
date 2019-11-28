/**
 * KYIV MEDIA
 * 28.11.2019
 */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./components/App";
import reducer from "./reducers";
import { Route, HashRouter } from "react-router-dom";

//create store

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component={App} />
    </HashRouter>
  </Provider>,

  document.getElementById("mount-point")
);

// store.subscribe(()=>{
//     console.log('subscribe',store.getState());
//     const list = document.querySelectorAll('.list')[0]
//     list.innerHTML=''
//     document.querySelectorAll('.trackInput')[0].value=''
//     store.getState().forEach(track => {
//         const li = document.createElement('li')
//         li.textContent = track;
//         list.appendChild(li)
//     });
// })

// //add track to store

// const addTrackBtn = document.querySelectorAll('.addTrack')[0]

// addTrackBtn.addEventListener('click',()=>{
//     const trackName = document.querySelectorAll('.trackInput')[0].value
//      console.log('trackName',trackName);
//      store.dispatch({ type: 'ADD_TRACK', payload: trackName})
// })
