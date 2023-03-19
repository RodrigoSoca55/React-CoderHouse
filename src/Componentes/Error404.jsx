

const Error404 = () => {
return(
    <div className="container-fluid">
        <div className="col">
            <div className="row ">
                <h1  className="error404"style={{textAlign:"center",fontFamily:'Rubik Glitch'}}>ERROR 404</h1> 
            </div>
            <div className="row">
            <i  style={{textAlign:"center", fontSize:"3em" }} className="bi bi-exclamation-triangle-fill"></i>
            </div>
            <div className="row ">
                <h1 style={{textAlign:"center"}}>¡PAGE NOT FOUND!</h1>
            </div>
        </div>
    </div>
)

}

export default Error404;