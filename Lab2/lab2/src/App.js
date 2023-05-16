import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./routing/header/header";
import Registeration from "./component-interaction/registeration/registeration";
import Home from './component-interaction/Home/home';
import Profile from "./routing/profile/profile";
import Details from "./routing/details/details";
import Error from "./routing/error/error";
function App() {
  return (
    <div>
    <div className="allComp">
        <BrowserRouter>
             <div className="header">
                 <Header/>
             </div>
            <Routes>
                 <Route path="/" element={<Home/>}/>
                
                <Route path="/users/:id" element={<Details/>}/>
                {/* <Route path="/users" element={<Users/>}>
                    <Route path="me" element={<Profile/>}/>
                    <Route path=":id" element={<Details/>}/>
                </Route> */}
            {/* <Route path="/details" element={<Profile/>}/> */}
                <Route path="/profile" element={<Profile/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    </div>
</div>
  );
}

export default App;
