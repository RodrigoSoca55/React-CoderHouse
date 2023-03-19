import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
const Thanks = () => {
   
    const {orderId} = useParams();
 

    return(
        <div className="container">
            <div className="row">
            {orderId ? <div className="alert alert-success text-center" role="alert"><h3 className="font-weight-bold">THANKS FOR YOUR ORDER!</h3><p>This is you order id: <b>{orderId}</b></p></div> : ""}
            </div>
            <div className="row mb-3">
                <Link className="btn btn-outline-success" to="/">See More Products</Link>
            </div>
        </div>
    )
}


export default Thanks;