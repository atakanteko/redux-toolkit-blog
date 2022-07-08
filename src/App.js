import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import './App.scss';

import PostForm from './features/posts/postsForm';
import PostsList from './features/posts/PostsList';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={()=> (
            <div className="container">
              <PostForm />
              <PostsList />
            </div>
          )}
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
