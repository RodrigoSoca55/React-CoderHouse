import banner from "./images/vecteezy_newyork-city-highrise-skyline-simplicity-flat-design_11651324_443.png"


const Footer = () => {
  
    return(
        <div className="container footer">

            <div className="row iconos">
                <div className="col"><i className="bi bi-linkedin ln" ></i></div>
                <div className="col"><i className="bi bi-instagram ig" ></i></div>
                <div className="col"><i className="bi bi-youtube yt" ></i></div>
                <div className="col"><i  className="bi bi-spotify stfy" ></i></div>
                <div className="col"><i className="bi bi-info-square-fill ln" ></i></div>


            </div>
            <div className="row d-flex justify-content-center"   > 
                
                <div id="copy">© Copyright 2023 / East State</div>
            
            </div>
            <div className="row footer-ban " > <img src={banner} alt="banner" />
            
            </div>
        </div>
    )


}


export default Footer;