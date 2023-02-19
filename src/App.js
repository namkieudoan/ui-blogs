import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios';

import Navbar from './Navbar/Navbar';
import Home from './components/Home/Home';
import Category from './components/Category/Category';
import Favorites from './components/Favorites/Favorites';

function App() {

  const [postList, setPostList] = useState([]);

  //get Data from API
  useEffect(()=> { 
    async function getData(){
      const res = await axios.get("http://localhost:8000/v1/post");
      return res;
    }
    getData().then((res)=> setPostList(res.data));
    getData().catch((err)=>console.log(err));
  },[])

  return (
    <Router>
      <Navbar/>
      <div className="app">
        <Routes>
          <Route path='/' element={<Home postList={postList}/>}/>
          <Route path='/category' element={<Category/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
        </Routes>
      </div>        
    </Router>
    
  );
}

export default App;
