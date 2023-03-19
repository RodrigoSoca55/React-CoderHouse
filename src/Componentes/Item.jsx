
import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <Link to={"/item/" + item.id} className="text-decoration-none text-dark ">
            <div className="card m-3">
                <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                <div className="card-body text-center">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text"> {item.zona}</p>
                    <p className="card-text"> U$D {item.precio}</p>
                    
                </div>
            </div>
        </Link>
    )
}

export default Item;