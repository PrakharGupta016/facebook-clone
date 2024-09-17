import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import NavBar from "./components/NavBar";

function App() {

  return (
    <>
    <NavBar/>
    <Routes>
        <Route path="/" element={<HomePage/>}></Route>
    </Routes>
    </>
  );
}

export default App;
