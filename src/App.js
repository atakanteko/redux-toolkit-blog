import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import './App.scss';

import PostForm from './features/posts/PostsForm';
import PostsList from './features/posts/PostsList';
import SinglePostPage from './features/posts/SinglePostPage';
import {EditPostForm} from "./features/posts/EditPostForm";

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
          <Route exact path="/editPost/:postId" component={EditPostForm} />
          <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
