import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios';

import Navbar from './Navbar/Navbar';
import Home from './components/Home/Home';
import Category from './components/Category/Category';
import Favorites from './components/Favorites/Favorites';
import Postdetail from './Postdetail';

function App() {

  const [postList, setPostList] = useState([]);
  const [postItem,setPostItem] = useState({});

  const [postItemID, setPostItemId] = useState("");
  
  //getidwhileclickpost
  const getIDPost = (id)=>{
    setPostItemId(id);
  }; 
  useEffect(()=>{
    async function getAPost(){
      const res = await axios.get(`http://localhost:8000/v1/post/${postItemID}` );
      return setPostItem(res.data);
    };
    getAPost();
    // getAPost().then((res)=> setPostItem(res.data)); ///
    // getAPost().catch((err)=> console.log(err)); ///
  },[postItemID]);

  //get data from API
  useEffect(()=> { 
    async function getAllPost(){
      const res = await axios.get("http://localhost:8000/v1/post");
      return setPostList(res.data);
    };
    
    getAllPost();
    // getAllPost().then((res)=> );
    // getAllPost().catch((err)=>console.log(err));
  },[]);



  return (
    <Router>
      <Navbar/>
      <div className="app">
        <Routes>
          <Route path='/category' element={<Category/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path='/:id' element={<Postdetail postItem ={postItem} />}/>
          <Route path='/' element={<Home postList={postList} getIDPost={getIDPost}/>}/>
        </Routes>
      </div>        
    </Router>
    
  );
}

export default App;
