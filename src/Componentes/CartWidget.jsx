import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
const CartWidget = () => {
    const {cartNumber} = useContext(CartContext);

    return (cartNumber() > 0) ?  
        <Link to={"/cart"} type="button" className="btn">
            <i className="bi bi-bag"></i> <span className="badge bg-secondary">{cartNumber()}</span>
        </Link> : "";

    
}

export default CartWidget;