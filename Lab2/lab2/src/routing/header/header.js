import { NavLink } from "react-router-dom";
import './style.css';
let Header = ()=>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-around p-8" data-bs-theme="dark">
  <a className="navbar-brand text-light" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <li><NavLink style={({isActive})=>({color:isActive?'blue':'white'})} to={"/"}>Home</NavLink></li>
            <li><NavLink style={({isActive})=>({color:isActive?'blue':'white'})} to={"/users/5"}>User Details</NavLink></li>
            <li><NavLink style={({isActive})=>({color:isActive?'blue':'white'})} to={"/profile"}>Profile</NavLink></li>
            <li><NavLink style={({isActive})=>({color:isActive?'blue':'white'})} to={"/khaiff"}>Error</NavLink></li>
                </div>
           
</nav>
    </div>
    )
}
export default Header;