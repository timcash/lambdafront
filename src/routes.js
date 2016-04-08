import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import FuelSavingsPage from './containers/FuelSavingsPage';
import SearchPage from './containers/SearchPage.js';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={FuelSavingsPage} />
    <Route path="search" component={SearchPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
