
import './App.css';
import Header from './component/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Reviews from "./component/Reviews/Reviews";
import Dashboard from "./component/Dashboard/Dashboard"
import NotFound from "./NotFound/NotFound"
import { createContext, useState } from 'react';
export const ReviewsContext = createContext();

function App() {
  const [reviews, setReviews] = useState([])

  return (

    <ReviewsContext.Provider value={[reviews, setReviews]}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </ReviewsContext.Provider>

  );
}

export default App;
