/*eslint-disable import/default*/

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import {addSearchNote} from './actions/fuelSavingsActions'
import './styles/styles.scss'; //Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.

const store = configureStore();

setInterval(()=>{
  let s = store.getState();
  fetch('https://swq1lg8p9e.execute-api.us-west-2.amazonaws.com/hackday/single', {
    method: "post",
    body: JSON.stringify({"search": s.fuelSavingsAppState.searchValue})
  })
  .then((result)=>{return result.json()})
  .then((json)=>{
    let notes = json.body.results
    notes.map((n)=>{
      let v = n.value
      store.dispatch(addSearchNote(v.noteid, v.author, v.text, v.clipid));
    });
  });


}, 3000);

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('app')
);
