import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {db} from "../Firebase/index";
import {getDocs, collection, query, where} from "firebase/firestore";
import Loading from "./Loading";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();
    const [loading,setLoading] = useState(true)

useEffect(() => {
    const itemsCollection = collection(db, "items");
    const filter = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
    getDocs(filter).then(elements => {
        setItems(elements.docs.map(element => ({id:element.id, ...element.data()})));
        setLoading(false);
    });
}, [id]);

return (
    <div className="container">{ loading ? <Loading/> : <ItemList items={items} />}
    </div>
)
}

export default ItemListContainer;