import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import  Header  from './header/header';
import Artists from './artists/artists';
import Details from './details/details';
import './App.css';
function App() {
  return (
    <div>
    <BrowserRouter>
              <Routes>
              <Route path="/" element={<Header/>}/>
                  <Route path="/artists" element={<Artists />} />
                  <Route path="/artists/:id" element={<Details/>} />
                    </Routes>
    </BrowserRouter>
</div>
  );
}

export default App;
