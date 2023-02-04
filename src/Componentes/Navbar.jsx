import CartWidget from "./CartWidget";
import logo from "./images/East States-logos_black.png"
const Navbar = () => {
    return(
        <div className="container">
            <div className="row bg-light">
                <div className="col">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href={"/logo"}> <img src={logo} alt="East State" /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link active" aria-current="page" href={"/Homes"}>Homes</a>
                                <a className="nav-link" href={"/apartments"}>Apartments</a>
                                <a className="nav-link" href={"/garages"}>Garages</a>
                                <a className="nav-link " href={"/findagents"} >Find Agents</a>
                            </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col d-flex align-content-center align-items-center justify-content-end">
                    <CartWidget></CartWidget>
                </div>
            </div>
        </div>
    )
}

export default Navbar;