import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css'
import ListPage from '../ListPage/ListPage';
import DetailPage from '../DetailPage/DetailPage';

export default function App() {
  return <Router>
    <Switch>
      <Route
        path="/"
        exact
        render={(routerProps) => <ListPage {...routerProps} />}
      />
      <Route
        path="/:name"
        exact
        render={(routerProps) => <DetailPage {...routerProps} />}
      />
    </Switch>
  </Router>;
}