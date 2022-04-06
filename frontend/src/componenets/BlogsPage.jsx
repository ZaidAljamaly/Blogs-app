import React from 'react'
import {useState,useEffect} from 'react';
import Lists from './Lists'
import Search from './search'
export default function BlogsPage() {
  let [blog,setBlog] =useState([])
  let [item,setItem] = useState('')
  useEffect(() =>{
    getBlog()
  },[item])
      let getBlog = async () => {

        let response = await fetch(`/api/Blogs?q=${item}`)
        let data = await response.json()
        console.log(data)
        setBlog(data)
    }
  return (
    <div> 
       <div className="Head">
           <h1 className='text-center text-uppercase text-dark pt-5'>
             All topics and News
           </h1>
        </div>
        <Search searchText={(text) =>setItem(text)}/>
      <div className="row gx-5">
        {blog?.map((blog,index)=>(
          <Lists key={index} blog={blog} />
        ))}
      </div>
    </div>
  )
}
