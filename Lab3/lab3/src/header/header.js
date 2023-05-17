import { NavLink } from "react-router-dom";
import './style.css';
let Header = ()=>{
    return(
        <div className="BackgroundColor text-center m-auto mt-5 alert alert-primary">
              <NavLink className="centered" to={"/artists"}>Music DB</NavLink>
            <img className="cover" src={process.env.PUBLIC_URL + '/cover.png'} alt="music" />
            
                </div>
           

    )
}
export default Header;