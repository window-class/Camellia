import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router";

function AddPost(){
    const navigate = useNavigate();
    const posts = {
        PostId:'',
        PostName:''
    };
   const [post, setPost] = useState(posts);
   const handleInput = async(e)=>{
    const {name, value} = e.target;
    setPost({...post, [name]: value});
    console.log(name, value);
   }
   const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
     const res = await axios.post("http://localhost:8785/api/addPost", post);
     console.log("Some post added well:", res);
     navigate("/GetPost");   
    } catch (error) {
     console.log("Failed to add post:", error); 
     setTimeout(()=>{window.location.reload();}, 3000);  
    }
   } 
    return(
        <div className="min-h-screen bg-blue-400 flex justify-center items-center">
        <div className="w-2xl p-4 bg-gray-50 rounded shadow-lg">
         <h1 className="font-bold text-2xl sm:text-lg md:text-xl lg:text-2xl p-2">
            Register Post
         </h1>
        <form onSubmit={handleSubmit}>
        <div>
            <label className="block font-medium">Post Id</label>
            <input type="text" name="PostId"
                   autoComplete="off" onChange={handleInput}
                   required placeholder="Enter post id..."
                   className="w-full p-2 outline-1 outline-blue-400 focus:outline-none focus:ring-2 focus:ring-green-400 rounded" />
        </div>
        <div>
        <label className="block font-medium">Post Name</label>
        <input type="text" name="PostName"
               autoComplete="off" onChange={handleInput}
               required placeholder="Enter post name..."
               className="w-full p-2 outline-1 outline-blue-400 focus:outline-none focus:ring-2 focus:ring-green-400 rounded" />
    </div>
    <button type="submit" className="font-medium p-2 bg-green-500 hover:bg-blue-500 mt-2 rounded text-white">post</button>&nbsp;&nbsp;
    <Link to="/GetPost" className="font-medium text-blue-500 hover:underline p-2">posts list</Link>        
        </form> 
        </div>
        </div>
    )
}

export default AddPost;