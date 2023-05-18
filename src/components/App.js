import '../App.css';
import Home from './Home';
import Navbar from './Navbar';
import CreatePost from './CreatePost';
import PostDetails from './PostDetails';
import { Routes ,Route } from "react-router-dom";
function App() {
  return (
    <div className="container">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/post/:postId' element={<PostDetails />} />
      </Routes>
    </div>
  );
}

export default App;