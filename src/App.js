import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios';

import Navbar from './components/Category/Navbar/Navbar';
import Home from './pages/Home/Home';
import Category from './components/Category/Category';
import Favorites from './pages/Favorites/Favorites';
import Postdetail from './components/Postdetail';
import Defaultlayout from './admin/layout/Defoulayout';

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

          {/* admin */}
          <Route path='/admin' element={<Defaultlayout />}/>

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
