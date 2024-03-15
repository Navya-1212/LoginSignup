import React, { useState } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
// *-**--*-*-*--*-*-*--*-*-*-*-*-**--*--*-*-
import Home from "./components/home/Home"
import Navbar from "./components/navbar/Navbar";
import Login from "./components/account/Login"; 
import Profile from "./components/account/Profile"
import NoMatch from "./components/noMatch/NoMatch"; 
import AboutUs from "./components/aboutUs/AboutUs"
import Projects from "./components/projects/Projects";

// =============================


const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ?
    <>
      <Navbar />
      <Outlet />
    </>
    : <Navigate replace to='/login' />
}

const App = () => {
  const [isAuthenticated, isUserAuthenticated] = useState(false)

  return (
    <div className="App">

      <Routes>
        <Route path="/login" element={<Login isUserAuthenticated={isUserAuthenticated} />} />

        {/* Setting up a private route */}

        {/* Navbar Routes */}
        <Route path="/" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/" element={<Home />} />
        </Route>
        
        <Route path="/projects" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/projects" element={<Projects />} />
        </Route>

        <Route path="/aboutus" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/aboutus" element={<AboutUs />} />
        </Route>



        <Route path='/profile' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
          <Route path="/profile" element={<Profile />} />
        </Route>


        {/* ---------------------------------- */}
        <Route path="*" element={<NoMatch />} />

      </Routes>
    </div>
  );
};

export default App;
