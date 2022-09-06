import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home.js";
import List from "./pages/list/List.js";
import SingleCabin from "./pages/SingleCabin/SingleCabin.js";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cabins" element={<List/>}/>
      <Route path="/cabins/:id" element={<SingleCabin/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
