import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

function GetCandidate(){
    const [candidates, setCandidates] = useState([]);

    useEffect(()=>{
         const fetchCandidate = async()=>{
            try {
            const res = await axios.get("http://localhost:8785/api/getAllCandidate", candidates);
            console.log("All data are found");
            setCandidates(res.data);    
            } catch (error) {
            console.log(error);    
            }
         }
         fetchCandidate();
    },[]);

    const deleteOne = async (id) => {
        axios.delete(`http://localhost:8785/api/deleteCandidate/${id}`)
        .then((res)=>{
            setCandidates((prevCand)=>prevCand.filter((can)=>can._id !==id));
            console.log(res);
        })
        .catch((error)=>{
            console.log("Failed to delete one candidate:",error);
        })
    }
    return(
        <div className="min-h-screen flex justify-center items-center bg-blue-400">
           <div className="w-6xl bg-gray-50 rounded-lg shadow-lg">
            <h1 className="p-2 font-bold text-2xl">Candidates List...</h1>
             <table className="w-full">
                <thead className="bg-blue-500 text-white">
                    <tr>
                        <th className="p-2 font-medium">No</th>
                        <th className="p-2 font-medium">C.N.I</th>
                        <th className="p-2 font-medium">FName</th>
                        <th className="p-2 font-medium">LName</th>
                        <th className="p-2 font-medium">Gender</th>
                        <th className="p-2 font-medium">D.O.B</th>
                        <th className="p-2 font-medium">Exam Date</th>
                        <th className="p-2 font-medium">Phone-No</th>
                        <th className="p-2 font-medium">Marks</th>
                        <th className="p-2 font-medium" colSpan={2}>action</th>
                    </tr>
                </thead>
                <tbody>
                    {candidates.map((candidate, idx)=>(
                    <tr key={candidate._id} className="border-b-1 border-green-400 hover:bg-blue-200">
                        <td className="p-2 font-medium">{idx +1}</td>
                        <td className="p-2 font-medium">{candidate.CNI}</td>
                        <td className="p-2 font-medium">{candidate.Fname}</td>
                        <td className="p-2 font-medium">{candidate.Lname}</td>
                        <td className="p-2 font-medium">{candidate.Gender}</td>
                        <td className="p-2 font-medium">{candidate.DOB}</td>
                        <td className="p-2 font-medium">{candidate.ExamDate}</td>
                        <td className="p-2 font-medium">{candidate.PNumber}</td>
                        <td className="p-2 font-medium">{candidate.Marks}</td>
                        <td className="p-2">
                        <button className="bg-red-400 text-white hover:bg-red-600 p-1 rounded cursor-pointer" onClick={()=>deleteOne(candidate._id)}>delete</button>
                        </td>
                        <td className="p-2">
                        <Link to={`/UpdateCandidate/`+candidate._id} className="bg-green-500 text-white hover:bg-green-600 p-1 rounded">update</Link>
                            </td>
                    </tr>    
                    ))}
                </tbody>
             </table>
            <div className="w-full p-2">
            <Link to="/AddCandidate" className="font-medium text-blue-500 hover:underline float-left p-2">Add New</Link>
            <Link to="/" className="font-medium text-blue-500 hover:underline float-right p-2">Home</Link>    
            </div> 
           </div>
        </div>
    )
}

export default GetCandidate;