import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
import Posts from "./components/Posts"
import Pagination from './components/Pagination';

//import Testing from "./components/testing";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  // get post data
  useEffect(() =>{
    
    const loadPosts = async () => {
    setLoading(true);
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(res.data);
    setLoading(false);
    };

    loadPosts();
  }, 
  []);

  // get current posts
  const lastIndexOfCurrentPage = currentPage * postsPerPage;
  const firstIndexOfCurrentPage = lastIndexOfCurrentPage - postsPerPage;
  const currentPosts = posts.slice(firstIndexOfCurrentPage, lastIndexOfCurrentPage);
  
  // change page
  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My Pagination</h1>
      <Posts posts={currentPosts} loading={loading}></Posts>
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length}
      paginate ={paginate}></Pagination>
    </div>
  );
  };

export default App;
