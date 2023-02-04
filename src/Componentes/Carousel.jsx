import carousel1 from "./images/carousel/Realestate1.png"
import carousel2 from "./images/carousel/Realestate2.png"
import carousel3 from "./images/carousel/Realestate3.png"
const Carousel = () => {
    return(
        <div className="container carousel">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carousel1} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={carousel2} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={carousel3} className="d-block w-100" alt="..."/> 
          </div>
        </div>
      </div>
      </div>
    )
}


export default Carousel; 