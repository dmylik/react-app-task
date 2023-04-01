import React from "react";
import './style/App.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import AddBacon from "./pages/AddBacon.jsx";
import FoundData from "./pages/FoundData.jsx";

function App() {
  return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AddBacon/>}/>
                <Route path='/data' element={<FoundData/>}/>
                <Route path='*' element={<AddBacon/>}/>
            </Routes>
        </BrowserRouter>
  );
}

export default App;
