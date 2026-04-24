import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "./App";

function Home(){
  const { logoutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login"); 
  };
    return(
        <div className="min-h-screen bg-blue-300">
        <header className="w-full text-white p-4 font-bold text-md sm:text-lg md:text-xl lg:text-2xl space-x-4 bg-blue-500 shadow fixed sticky top-0 left-0">
            <Link className="p-2 hover:bg-blue-300 hover:shadow-md hover:scale-102 hover:text-black/60 transition-all duration-500 rounded" to='/AddPost'>posts</Link>
            <Link className="p-2 hover:bg-blue-300 hover:shadow-md hover:scale-102 hover:text-black/60 transition-all duration-500 rounded" to='/AddCandidate'>candidates</Link>
            <Link className="p-2 hover:bg-blue-300 hover:shadow-md hover:scale-102 hover:text-black/60 transition-all duration-500 rounded" to='/report'>report</Link>
            <button title="Logout your account" className="p-1 bg-green-500 font-medium hover:bg-green-700 hover:scale-102 transition-all duration-500 rounded cursor-pointer float-right" onClick={handleLogout}>logout</button>
        </header>
           <div className="w-full p-2 rounded shadow backdrop-blur-500">
           <h1 className="text-black/80 text-md sm:text-sm md:text-md font-extrabold lg:text-lg xl:text-xl p-3" style={{fontFamily:'ui-serif'}}>
           <marquee>Welcome To Camellia Posts and Candidates management Portal</marquee>
           </h1>
         </div>        
        <div className="w-full grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
           <div className="w-full bg-gray-200 h-full rounded shadow p-12">
           <h1 className="font-medium"><u>Introduce Our services</u></h1>
           <p className="font-medium">. Cafe Camellia</p>
           <p className="font-medium">. Branches: Kigali, Rwamagana, Kayonza, Rusizi,...</p>    
           </div>
           <div className="w-full bg-gray-200 h-full rounded shadow p-12">
           <h1 className="font-medium"><u>News available</u></h1>
           <p className="font-medium">Fast Operations and actions</p>
           <p className="font-medium">Eazy to use with it customizable</p>    
           </div>
           <div className="w-full bg-gray-200 h-full rounded shadow p-12">
           <h1 className="font-medium"><u>What added ?</u></h1>
           <p className="font-medium">Posts, Candidates management</p>
           <p className="font-medium">. Branches: Kigali, Rwamagana, Kayonza, Rusizi,...</p>    
           </div>
           <div className="w-full bg-gray-200 h-full rounded shadow p-12">
           <h1 className="font-medium"><u>Best News</u></h1>
           <p className="font-medium">Bring new actions like add, view, modify, and delete</p>
           <p className="font-medium">Auto-report generator...</p>    
           </div>                                 
        </div>
        <div className="w-full p-12">
        <h1 className="font-bold text-xl text-center">Mostly Liked Images from our services...</h1>
        <strong className="text-2xl">🍵☕🍶🥛🍼🍺🥂🍷🎂
        🍰🥮🍥🥐🍞🥖🥯🥪🥛🧋
        🥛🍼🍇🍊🍌🍒🍎🥭🍍
        </strong>
        </div>
        <footer className="bg-gray-800 bottom-0 left-0 z-50 w-full">
        <div className="w-full grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="w-full p-2 rounded">
           <h1 className="font-medium text-white underline">History</h1>
           <p className="text-white">Our Cafe camellia has brought a new idea to make people in rwanda get quick services without any modifications</p>
          </div>
          <div className="w-full p-2 rounded">
            <h1 className="font-medium text-white underline">What's you'll find:</h1>
            <p className="text-white">Quick coffee delivery</p>
            <p className="text-white">bleeding services</p>
            <p className="text-white">Good sweets for your babies or fiancee</p>
          </div>
          <div className="w-full p-2 rounded">
           <h1 className="font-medium text-white underline">Quick Links</h1>
           <p><Link to="/GetPost" className="text-white hover:underline">Post registered</Link></p>
           <p><Link to="/GetCandidate" className="text-white hover:underline">Available candidates</Link></p>
           <p><Link to="/report" className="text-white hover:underline">printable report</Link></p>
          </div>
          <div className="w-full p-2 rounded">
             <h1 className="font-medium text-yellow-200">Help and Availability</h1>
             <p className="text-green-600">Site type: <em className="text-green-400">offline</em></p>
             <p className="text-blue-500">Camellia: <em className="hover:underline">cafecamellia@info.shop</em></p>
             <p className="text-green-400"><a href="#">Email Us: <em className="hover:underline">@cafecamellia250@gmail.com</em></a></p>
             <p className="text-green-400"><a href="$">Follow Us on TikTok, X, Instagram...</a></p>
          </div>
        </div>
        </footer>
        </div>
    )
}

export default Home;