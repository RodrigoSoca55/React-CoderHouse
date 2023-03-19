import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart,removeItem,clear,cartSum, cartNumber} = useContext(CartContext);

        if (cartNumber() === 0){
        return(
            <div className="container d-flex justify-content-center">
             <Link to={"/onsale"} className="btn  btn-outline-secondary"><h1> Empty Cart Search Products</h1></Link>
            </div>
        )
        }

    return(
        <div className="container">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                        <th>
                        <button className="btn btn-light" onClick={()=>{clear()}}> Clear Cart</button>
                        </th>
                    </tr>
                </thead>

                
            {
                cart.map(item => 
                <tbody>
                <tr key={item.index}>
                    
                    <td> <Link to={"/item/" + item.id}><img src={item.imagen} alt={item.nombre} width="100px" /></Link> </td>
                    <td  className="align-middle">{item.nombre}</td>
                    <td  className="align-middle" >   {item.quantity} x ${item.precio}</td>
                    <td  className="align-middle" > ${item.precio*item.quantity} </td>
                    <td  className="align-middle" > <Link onClick={() => {removeItem(item.index)}}>  <i className="bi bi-trash"></i></Link> </td>
                    
                </tr>
                </tbody>
               )
                    }
            </table>
            
            <div className="row">
                <div className="col " style={{textAlign:"end"}}>
                    <h5 className="font-weight-bold" >Total: ${cartSum()} </h5> 
                    
                </div>
            </div>
            <div className="row">
              <Link className="btn btn-outline-dark" to={"/checkout"}>
                Checkout
              </Link>
            </div>
                    
                
           
        </div>
            
            
            
            
           

    )
}



export default Cart ;