import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ItemCount = ({stock,onAdd}) => {
    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdded, setItemsAdded] = useState(false);

const incrementarStock = () =>{
    if (items < itemStock) {
    setItems(items + 1);
    }

}
 
const decrementarStock = () => {
    if (items > 1) {
    setItems(items - 1);
    }

}

const addToCart = ( ) => {
    if (itemStock >= items){
        setItemStock(itemStock - items);
        setItems(1);
        setItemsAdded(true);
        onAdd(items);
    }
    

}
    useEffect(() => {
        setItemStock(stock);
    }, [stock]);


    return(
        <div className="container">
            <div className="row" >
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-outline-secondary" onClick={decrementarStock}>-</button>
                    <button type="button" className="btn btn-outline-secondary"> {items} </button>
                    <button type="button" className="btn btn-outline-secondary" onClick={incrementarStock}>+</button>
                </div>
                
            </div>
            <div className="row"  style={{marginTop:"10px"}}>
                {itemAdded ? <Link to= {"/cart"} className="btn btn-secondary">Proceed to Chekout</Link> :
                <button type="button" className="btn btn-secondary" onClick={addToCart}>Add To Cart</button>
                }

            </div>  
       
        </div>
    )



}




export default ItemCount;