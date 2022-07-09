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
import SinglePostPage from './features/posts/SinglePostPage';

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
          <Route
              exact
              path="/posts/:postId"
              component={SinglePostPage}
          />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
