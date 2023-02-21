const ItemDetail = ({item}) => {
  
    return (
        <div className="container">
         
         <div className="row">
            <div className="col-8 " style={ {objectFit: 'contain',}}>
                <img src={item.imagen} alt=""  style={{width:"90%"}}/>
            </div>

            <div className="col-4">
                <div className="row">
                    <h1>{item.nombre}</h1>
                </div>
                <div className="row">
                    <p>{item.direccion} </p>
                </div>
                <div className="row">
                    <h5>Description</h5>
                    <p>{item.descripcion}</p>
                </div>
                <div className="row">
                    <h5> Price U$D {item.Precio}</h5>
                </div>
                <div className="row justify-content-center" >
                <button type="button" className="btn btn-secondary" style={{width:"95%"}}>Add To Cart</button>
                </div>

              
            </div>
         </div>
        
           
         
         
         </div>

     
          
      
    )

}

export default ItemDetail;