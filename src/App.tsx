import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { useAuth } from "./contexts/authContext";
import Login from "./pages/login";

function App() {
    const {userLoggedIn}= useAuth();

  
   return( <div className="bg-gray-100 h-screen overflow-y-auto">
    {userLoggedIn ? (
      <>
       
        <NavBar />
        <div className="flex gap-0">
          <SideBar />
          <div className="p-5 flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Navigate to='/' />} /> 
            </Routes>
          </div>
        </div>
      </>
    ) : (

      <Routes>
        <>
         {console.log(userLoggedIn)}
        </>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    )}
  </div>)
}

export default App;
