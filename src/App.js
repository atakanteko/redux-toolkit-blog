import './App.scss';

import PostForm from './features/posts/postsForm';
import PostsList from './features/posts/PostsList';

function App() {
  return (
    <div className="container">
     <PostForm />
     <PostsList />
    </div>
  );
}

export default App;
