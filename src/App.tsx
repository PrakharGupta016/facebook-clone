import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {

  return (
    <>
    <NavBar/>
    <SideBar/>
    <Routes>
        <Route path="/" element={<HomePage/>}></Route>
    </Routes>
    </>
  );
}

export default App;
