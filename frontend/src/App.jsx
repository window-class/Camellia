import React, { createContext, useContext, useState, useEffect } from "react"; 
import axios from "axios"; 
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom"; 

import Register from './components/Register'; 
import Login from './components/Login';

import Home from "./Home";
import AddPost from "./Add/AddPost";
import GetPost from "./Get/GetPost";
import UpdatePost from "./Update/UpdatePost";

import AddCandidate from "./Add/AddCandidate";
import GetCandidate from "./Get/GetCandidate";
import UpdateCandidate from "./Update/UpdateCandidate";
import Report from "./Report";

const AuthContext = createContext({}); 
export const useAuth = () => useContext(AuthContext); 
//  Protect with Outlet for hihg scalable pages... 
const Protected = () => { 
  const { isAuthenticated, loading } = useAuth(); 
  if (loading) return <div>Loading...</div>; 
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />; 
};

function App(){

  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true); 
 
  const setAuthToken = (token) => { 
    if (token) { 
      axios.defaults.headers.common["x-auth-token"] = token; 
      localStorage.setItem("token", token); 
    } else { 
      delete axios.defaults.headers.common["x-auth-token"]; 
      localStorage.removeItem("token"); 
    } 
  }; 
 
  useEffect(() => { 
    const checkAuth = async () => { 
      const token = localStorage.getItem("token"); 
      if (token) { 
        setAuthToken(token); 
        try { 
          const res = await axios.get("http://localhost:8785/api/auth/user"); 
          setUser(res.data); 
          setIsAuthenticated(true); 
        } catch { 
          setAuthToken(null); 
        } 
      } 
setLoading(false); 
}; 
checkAuth(); 
}, []); 
// use loginUser function 
const loginUser = async (token) => { 
setAuthToken(token); 
try { 
const res = await axios.get("http://localhost:8785/api/auth/user"); 
setUser(res.data); 
setIsAuthenticated(true); 
return true; 
} catch { 
setAuthToken(null); 
return false; 
} 
}; 
const logoutUser = () => { 
setAuthToken(null); 
setIsAuthenticated(false); 
setUser(null); 
}; 
const authContextValue = { 
isAuthenticated, 
    user, 
    loading, 
    loginUser,   // again use loginUser and logoutUser functions 
    logoutUser, 
  };

  return(
    <AuthContext.Provider value={authContextValue}> 
    <BrowserRouter>
    <Routes>
    <Route path="/register" element={<Register />} /> 
    <Route path="/login" element={<Login />} /> 
      <Route element={<Protected />}> 
      <Route path="/" element={<Home />} />
      <Route path="/AddPost" element={<AddPost />} />
      <Route path="/GetPost" element={<GetPost />} />
      <Route path="/UpdatePost/:id" element={<UpdatePost />} />

      <Route path="/AddCandidate" element={<AddCandidate />} />
      <Route path="/GetCandidate" element={<GetCandidate />} />
      <Route path="/UpdateCandidate/:id" element={<UpdateCandidate />} />
      <Route path="/report" element={<Report />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;