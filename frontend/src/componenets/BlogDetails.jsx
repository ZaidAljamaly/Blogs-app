import React,{useState,useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function BlogDetails() {
  let{ id } =useParams();
  let [blog,setBlog] =useState(null);
  let getBlog =async () =>{
      let response = await fetch(`/api/Blogs/${ id }/`)
     let data = await response.json()
     setBlog(data)
  }
    useEffect(()=>{
    getBlog()
  },[id])
  return (

    <div className='details'>
      <h1>{blog?.title}</h1>
      <hr/>
      <img src={blog?.photo} className='photo'/>
      <p>{blog?.date_created}</p>
      <h4>{blog?.category}</h4>
      <p>{blog?.content}</p>
    </div>
    

  )
}
