import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Componentes/Navbar";
import Footer from "./Componentes/Footer";
import Carousel from "./Componentes/Carousel";
import ItemListContainer from "./Componentes/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer";
import Error404 from "./Componentes/Error404";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
     
      <Routes>
        <Route exact path={"/"} element={<Carousel/>}/>
        <Route exact path={"/onsale"} element={<ItemListContainer/>}/>
        <Route exact path={"/category/:id"} element={<ItemListContainer/>}/>
        <Route exact path={"/item/:id"} element={<ItemDetailContainer/>}/>
        <Route exact path={"*"} element={<Error404 />}/>
      </Routes>
      
      <Footer/>
   
    </div>
    </BrowserRouter>
  );
}

export default App;
