const ItemListContainer = ({ greeting }) => {

    return (
        <div className="container Itemlist">
            <div className="row">
                    <div class="alert alert-warning" role="alert">
                        <h1>{greeting}</h1>
                    </div>
            </div>
        </div>
    )

}


export default ItemListContainer;