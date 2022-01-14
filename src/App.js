import './App.css';
import PostList from './components/PostList';
import { PostProvider } from './context/PostContext'

function App() {
  return (
    <PostProvider>
      <div className="App">
        <PostList />
      </div>
    </PostProvider>
  );
}

export default App;
