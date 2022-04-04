
import './App.css';
import Header from './component/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Reviews from "./component/Reviews/Reviews";
import Dashboard from "./component/Dashboard/Dashboard"
import NotFound from "./NotFound/NotFound"
import About from "./component/About/About"
import Blogs from "./component/Blogs/Blogs"


function App() {


  return (

    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>

  );
}

export default App;
