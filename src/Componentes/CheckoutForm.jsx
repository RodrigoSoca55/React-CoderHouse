import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { db } from "../Firebase/index";
import { Navigate } from "react-router-dom";




const ChekoutForm = () => {
    const { cart, cartSum, clear } = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");
    const generarOrden = () => {
        const buyer = { name: nombre, email: email, phone: telefono };
        const fecha = new Date();
        const date = `${fecha.getFullYear()}-${fecha.getMonth() + 1}- ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
        const order = { buyer, items: cart, date: date, total: cartSum() };

        if ((nombre.length === 0) && (email.length === 0) &&(telefono.length === 0)) {
            alert("please complete the form");
            return (
             false
            );
        }
        if (nombre.length === 0) {
            return false ;
        }
        if (email.length === 0) {
            return false;
        }
        if (telefono.length === 0) {
            return false;
        }



        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(data => {
            setOrderId(data.id);
            clear();

        });

    }
    return (
        <div className="container ">
             <div className="row w-90">
                <form className="needs-validation" novalidate>
                    <div className="mb-4 form-group was-validated">
                        <label htmlFor="nombre" className="form-label">Name</label>
                        <input type="text" className="form-control" placeholder="Jhon Foose" id="nombre"required  onInput={(e) => { setNombre(e.target.value) }}  />
                        <div className="invalid-feedback">
                            Please write your Name
                        </div>
                    </div>
                    <div className="mb-4 form-group was-validated">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input required type="email"  placeholder="name@example.com"  className="form-control" id="email" onInput={(e) => { setEmail(e.target.value) }} />
                        <div className="invalid-feedback">
                            Please write your Email 
                        </div>
                    </div>
                    <div className="mb-5 form-group was-validated">
                        <label htmlFor="telefono" className="form-label">Phone Number</label>
                        <div class="input-group">
                        <div class="input-group-text">+1</div>
                        <input required type="tel" pattern=".{9,}" placeholder="239 239 222" className="form-control" id="telefono" onInput={(e) => { setTelefono(e.target.value) }} />
                         <div className="invalid-feedback">
                            Please write your Phone Number
                        </div>
                        </div>
                       
                    </div>
                    <button style={{width:"100%"}} type="button" className="btn btn-secondary" onClick={generarOrden}>Generarate Order</button>
                </form>


            <div>
                {orderId ? <Navigate to={"/thanks/" + orderId} /> : ""}
            </div>
            </div>

        </div>


    )


}


export default ChekoutForm;