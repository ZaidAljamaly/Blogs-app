import React from 'react'
import {HashRouter as Router, Routes,Route} from 'react-router-dom';
import Nav from './componenets/Nav';
import BlogsPage from './componenets/BlogsPage';
import BlogDetails from './componenets/BlogDetails'
export default function App() {
  return (
    <div>
      <Nav/>
      <Router>
        <Routes>
          <Route path='/' element={<BlogsPage/>} />
          <Route path = '/Blogs/:id'element={<BlogDetails/>} />
        </Routes>
      </Router>
    </div>
  )
}
