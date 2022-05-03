import Nav from './components/Nav';
import { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router, Route,Routes
} from "react-router-dom";
import Home from './components/Home';
import Wish from './components/Wish';
function App() {
  const [wish,setWish] = useState([]);

  const addWishList = (id,title) => {
    let newBook = wish.filter(book => book.id === id);
    if(newBook.length === 0) {
        setWish([
            ...wish,
            {
                id: id,
                title: title
            }
        ])

    }
}

const deleteWish = (id) => {
  let updatedList = wish.filter(book => book.id !== id);
  setWish([
    ...updatedList
  ])
} 
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path ='/' element = {<Home addWish = {addWishList} />} />
          <Route path ='/wish' element = {<Wish wish = {wish} deleteWish = {deleteWish}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
