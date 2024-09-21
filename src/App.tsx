import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="flex gap-2">
        <SideBar />
        <div className="p-5">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
