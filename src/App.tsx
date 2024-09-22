import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { useAuth } from "./contexts/authContext";
import Login from "./pages/login";

function App() {
    const {userLoggedIn}= useAuth();

  
   return( <div className="bg-gray-100 h-screen">
    {userLoggedIn ? (
      <>
       
        <NavBar />
        <div className="flex gap-2">
          <SideBar />
          <div className="p-5 flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
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
