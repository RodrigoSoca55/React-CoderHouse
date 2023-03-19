

const Loading = () => {
    return (
        <div className="container d-flex align-content-center flex-wrap" style={{height:"30vh"}}>
            <div className="row d-flex align-item-center justify-content-center" style={{width:"100%"}} > 

                
                <div className="spinner-grow text-primary" style={{ width: "3em", height: "3em", marginRight:"10px" }} role="status"></div>
                <div className="spinner-grow text-secondary" style={{ width: "3em", height: "3em", marginRight:"10px" }} role="status"></div>


                <div className="spinner-grow text-success" style={{ width: "3em", height: "3em",marginRight:"10px" }} role="status"> </div>


                <div className="spinner-grow text-danger" style={{ width: "3em", height: "3em", marginRight:"10px"}} role="status"> </div>


                <div className="spinner-grow text-warning" style={{ width: "3em", height: "3em",marginRight:"10px" }} role="status"> </div>


                <div className="spinner-grow text-info" style={{ width: "3em", height: "3em",marginRight:"10px" }} role="status"></div>


                <div className="spinner-grow "  style={{ width: "3em", height: "3em",backgroundColor:"violet",marginRight:"10px" }} role="status"> </div>


                <div className="spinner-grow text-dark" style={{ width: "3em", height: "3em", marginRight:"10px"}} role="status"></div>



            </div>
        </div>
    )
}

export default Loading;