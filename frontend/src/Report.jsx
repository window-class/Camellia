import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import {useReactToPrint} from 'react-to-print'

function Report(){
    const [reportData, setReportData] = useState([]);

    useEffect(()=>{
         const fetchReport = async()=>{
            try {
            const res = await axios.get("http://localhost:8785/api/report", reportData);
            console.log("All data are found");
            setReportData(res.data);    
            } catch (error) {
            console.log(error);    
            }
         }
         fetchReport();
    },[]);
//PrintLogic
const contentRef = useRef(null);
const handlePrint = useReactToPrint({
    contentRef,
});


    return(
        <div className="min-h-screen bg-blue-400">
        <header className="w-full text-white p-4 font-bold text-md sm:text-lg md:text-xl lg:text-2xl space-x-4 bg-blue-500 shadow fixed sticky top-0 left-0">
            <Link className="p-2 hover:bg-blue-300 hover:shadow-md hover:scale-102 hover:text-black/60 transition-all duration-500 rounded" to='/GetPost'>posts</Link>
            <Link className="p-2 hover:bg-blue-300 hover:shadow-md hover:scale-102 hover:text-black/60 transition-all duration-500 rounded" to='/GetCandidate'>candidates</Link>
        </header>            
           <div className="w-6xl bg-gray-50 ml-12 rounded-lg shadow-lg" ref={contentRef}>
            <h1 className="p-2 font-bold text-2xl">Now Final Report</h1>
             <table className="w-full">
                <thead className="bg-blue-500 text-white">
                    <tr>
                        <th className="p-2 font-medium">Post Id</th>
                        <th className="p-2 font-medium">Post Name</th>
                        <th className="p-2 font-medium">C.N.I</th>
                        <th className="p-2 font-medium">FName</th>
                        <th className="p-2 font-medium">LName</th>
                        <th className="p-2 font-medium">Gender</th>
                        <th className="p-2 font-medium">D.O.B</th>
                        <th className="p-2 font-medium">Exam Date</th>
                        <th className="p-2 font-medium">Phone-No</th>
                        <th className="p-2 font-medium">Marks</th>
                    </tr>
                </thead>
                <tbody>
                    {reportData.map((item)=>(
                    <tr key={item} className="border-b-1 border-green-400 hover:bg-blue-200">
                        <td className="p-2 font-medium">{item.PostId}</td>
                        <td className="p-2 font-medium">{item.PostName}</td>
                        <td className="p-2 font-medium">{item.CNI}</td>
                        <td className="p-2 font-medium">{item.Fname}</td>
                        <td className="p-2 font-medium">{item.Lname}</td>
                        <td className="p-2 font-medium">{item.Gender}</td>
                        <td className="p-2 font-medium">{item.DOB}</td>
                        <td className="p-2 font-medium">{item.ExamDate}</td>
                        <td className="p-2 font-medium">{item.PNumber}</td>
                        <td className="p-2 font-medium">{item.Marks}</td>
                    </tr>    
                    ))}
                </tbody>
             </table>            
           </div>
            <div className="w-full p-2">
            <button onClick={handlePrint} className="p-2 bg-blue-800 mt-2 mb-2 cursor-pointer hover:bg-pink-800 float-left hover:scale-102 text-white font-bold rounded transion-all duration-500">Print report</button>
            <Link to="/" className="p-2 bg-green-500 hover:bg-green-700 text-white font-bold float-right rounded">Home</Link>    
            </div>            
        </div>
    )
}

export default Report;