import Home from './pages/Home';
import Post from './pages/Post';
import { Route,Routes } from 'react-router';
function App(){
return (
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/post/:slug' element={<Post/>}></Route>
  </Routes>
)
}


export default App;