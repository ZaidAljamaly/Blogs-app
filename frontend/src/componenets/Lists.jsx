import React from 'react'
import { Link } from 'react-router-dom';
let getContent =(blog) =>{
  let content =blog?.content?.split('\n')[0]
  if(content?.length >45){
    return content?.slice(0 ,45)
  }
  return content
}


export default function Lists({blog}) {
  return (
      <div className=" col-lg-6 col-md-6">
        <div className="card m-5">
          <img src={blog?.photo} className='photo'/>
          <h1>{blog?.title}</h1>
          <p>{blog?.date_created}</p>
          <p>{blog?.category}</p>
          <h4>{getContent(blog)}</h4>
          <Link to={`/Blogs/${blog.id}`} >continue reading</Link>
        </div>
      </div>
    

  )
}
