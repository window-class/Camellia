import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router";

function AddCandidate(){
    const navigate = useNavigate();
    const candidates = {
         CNI:'', Fname:'', Lname:'', Gender:'', DOB:'', PostId:'',
         ExamDate:'', PNumber:'', Marks:''
    };
   const [candidate, setCandidate] = useState(candidates);
   const handleInput = async(e)=>{
    const {name, value} = e.target;
    setCandidate({...candidate, [name]: value});
    console.log(name, value);
   }

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

   const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
     const res = await axios.post("http://localhost:8785/api/addCandidate", candidate);
     console.log("Some candidate added well:", res);
     navigate("/GetCandidate");   
    } catch (error) {
     console.log("Failed to add candidate:", error); 
     setTimeout(()=>{window.location.reload();}, 3000);  
    }
   } 
    return(
        <div className="min-h-screen bg-blue-400 flex justify-center items-center">
        <div className="w-2xl p-4 bg-gray-50 rounded shadow-lg">
         <h1 className="font-bold text-2xl sm:text-lg md:text-xl lg:text-2xl p-2">
            Register Candidate
         </h1>
        <form onSubmit={handleSubmit}>
         <div className="grid grid-cols-2 gap-2">   
        <div>
            <label className="block font-medium">Candidate National Id</label>
            <input type="number" name="CNI"
                   autoComplete="off" onChange={handleInput}
                   pattern="\d{16}" maxLength={16}
                   required placeholder="Enter 16 Id digits..."
                   className="w-full p-2 outline-1 outline-blue-400 focus:outline-none focus:ring-2 focus:ring-green-400 rounded" />
        </div>
        <div>
        <label className="block font-medium">First Name</label>
        <input type="text" name="Fname"
               autoComplete="off" onChange={handleInput}
               required placeholder="Enter first name..."
               className="w-full p-2 outline-1 outline-blue-400 focus:outline-none focus:ring-2 focus:ring-green-400 rounded" />
    </div>
        <div>
        <label className="block font-medium">Last Name</label>
        <input type="text" name="Lname"
               autoComplete="off" onChange={handleInput}
               required placeholder="Enter last name..."
               className="w-full p-2 outline-1 outline-blue-400 focus:outline-none focus:ring-2 focus:ring-green-400 rounded" />
    </div>
        <div>
        <label className="block font-medium">Gender</label>
        <select name="Gender"
               autoComplete="off" onChange={handleInput}
               required
               className="w-full p-2 outline-1 outline-blue-400 focus:outline-none focus:ring-2 focus:ring-green-400 rounded">
        <option value="">Select gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        </select>        
    </div>
        <div>
        <label className="block font-medium">Date of Birth</label>
        <input type="date" name="DOB"
               autoComplete="off" onChange={handleInput}
               required
               className="w-full p-2 outline-1 outline-blue-400 focus:outline-none focus:ring-2 focus:ring-green-400 rounded" />
    </div> 
        <div>
        <label className="block font-medium">Post Id</label>
        <select name="PostId"
               autoComplete="off" onChange={handleInput}
               required
               className="w-full p-2 outline-1 outline-blue-400 focus:outline-none focus:ring-2 focus:ring-green-400 rounded">
        <option value="">Select post Id</option>
        {posts.map((post, idx)=>(
         <option value={post._id} key={post._id}>{idx +1}. {post.PostId}</option>   
        ))}
        </select>        
    </div> 
        <div>
        <label className="block font-medium">Exam date</label>
        <input type="date" name="ExamDate"
               autoComplete="off" onChange={handleInput}
               required
               className="w-full p-2 outline-1 outline-blue-400 focus:outline-none focus:ring-2 focus:ring-green-400 rounded" />
    </div>
        <div>
        <label className="block font-medium">Phone Number</label>
        <input type="number" name="PNumber"
               autoComplete="off" onChange={handleInput}
               pattern="\d{10}" minLength={10} maxLength={15}
               required placeholder="enter phone number..."
               className="w-full p-2 outline-1 outline-blue-400 focus:outline-none focus:ring-2 focus:ring-green-400 rounded" />
    </div>
        <div>
        <label className="block font-medium">Marks</label>
        <input type="number" name="Marks"
               autoComplete="off" onChange={handleInput}
               maxLength={100} minLength={0}
               required placeholder="Enter marks..."
               className="w-full p-2 outline-1 outline-blue-400 focus:outline-none focus:ring-2 focus:ring-green-400 rounded" />
    </div> 
    </div>                            
    <button type="submit" className="font-medium p-2 bg-green-500 hover:bg-blue-500 mt-2 rounded text-white">register</button>&nbsp;&nbsp;
    <Link to="/GetCandidate" className="font-medium text-blue-500 hover:underline p-2">candidates list</Link>        
        </form> 
        </div>
        </div>
    )
}

export default AddCandidate;