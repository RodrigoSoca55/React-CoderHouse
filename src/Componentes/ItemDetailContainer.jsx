import { doc, getFirestore, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";

const ItemDetailContainer = () => {
   const [item, setItem] = useState({});
   const {id} = useParams();
   const [loading,setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore()
        const document = doc(db, "items",id)
        getDoc(document, id).then(element => {
            setItem({id:element.id, ...element.data()})
            setLoading(false);

        });

    }, [id]);

    return (
        <div> { loading ? <Loading/> : <ItemDetail item={item} /> }
</div>
)
}

export default ItemDetailContainer;