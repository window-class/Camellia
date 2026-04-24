import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

function GetPost(){
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
         const fetchPost = async()=>{
            try {
            const res = await axios.get("http://localhost:8785/api/getAllPost", posts);
            console.log("All data are found");
            setPosts(res.data);    
            } catch (error) {
            console.log(error);    
            }
         }
         fetchPost();
    },[]);

    const deleteOne = async (id) => {
        axios.delete(`http://localhost:8785/api/deletePost/${id}`)
        .then((res)=>{
            setPosts((prevPo)=>prevPo.filter((post)=>post._id !==id));
            console.log(res);
        })
        .catch((error)=>{
            console.log("Failed to delete one post:",error);
        })
    }
    return(
        <div className="min-h-screen flex justify-center items-center bg-blue-400">
           <div className="w-2xl bg-gray-50 rounded-lg shadow-lg">
            <h1 className="p-2 font-bold text-2xl">Posted List...</h1>
             <table className="w-full">
                <thead className="bg-blue-500 text-white">
                    <tr>
                        <th className="p-2 font-medium">No</th>
                        <th className="p-2 font-medium">Trade Id</th>
                        <th className="p-2 font-medium">Trade Name</th>
                        <th className="p-2 font-medium" colSpan={2}>action</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post, idx)=>(
                    <tr key={post._id} className="border-b-1 border-green-400 hover:bg-blue-200">
                        <td className="p-2 font-medium">{idx +1}</td>
                        <td className="p-2 font-medium">{post.PostId}</td>
                        <td className="p-2 font-medium">{post.PostName}</td>
                        <td className="p-2">
                        <button className="bg-red-400 text-white hover:bg-red-600 p-1 rounded cursor-pointer" onClick={()=>deleteOne(post._id)}>delete</button>
                        </td>
                        <td className="p-2">
                        <Link to={`/UpdatePost/`+post._id} className="bg-green-500 text-white hover:bg-green-600 p-1 rounded">update</Link>
                            </td>
                    </tr>    
                    ))}
                </tbody>
             </table>
            <div className="w-full p-2">
            <Link to="/AddPost" className="text-blue-500 hover:underline font-bold float-left p-2">Add New</Link>
            <Link to="/" className="text-blue-500 hover:underline font-medium float-right p-2">Home</Link>
            </div> 
           </div>
        </div>
    )
}

export default GetPost;