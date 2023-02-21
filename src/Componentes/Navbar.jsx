import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from "./images/East States-logos_black.png"
const Navbar = () => {
    return(
        <div className="container">
            <div className="row bg-light">
                <div className="col">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                             <NavLink className="navbar-brand" to={"/"}><img src={logo} alt="East State"/></NavLink> 
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                               <NavLink to={"/category/casa"}  activeclassname={"active"} className="nav-link "> Homes</NavLink>
                               <NavLink to={"/category/apartamento"} activeclassname={"active"} className="nav-link ">Apartments</NavLink>
                               <NavLink to={"/category/garages"} activeclassname={"active"} className="nav-link "> Garages</NavLink>
                               <NavLink to={"/onsale"} activeclassname={"active"}  className="nav-link ">For Sale </NavLink>
                            </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col d-flex align-content-center align-items-center justify-content-end">
                   <Link to={"/"}><CartWidget/></Link> 
                </div>
            </div>
        </div>
    )
}

export default Navbar;