import CartWidget from "../CartWidget";
import img from "../../assets/logo.png"
import { NavLink } from "react-router-dom";
import "./navbar.css";

function NavBar(){
    return (<div>
        <ul className="lista">
            <li><NavLink to={"/"}><img src={img} alt="Logo Vivero" className="logo"/></NavLink></li>            
            <li><NavLink to={"/category/interior"}>Interior</NavLink></li>
            <li><NavLink to={"/category/exterior"}>Exterior</NavLink></li>
            <li><NavLink to={"/category/sombra"}>Media Sombra</NavLink></li>
            <li><CartWidget /></li>            
        
        </ul>
    </div>)
}

export default NavBar;