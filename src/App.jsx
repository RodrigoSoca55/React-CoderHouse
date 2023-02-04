import Navbar from "./Componentes/Navbar";
import Footer from "./Componentes/Footer";
import Carousel from "./Componentes/Carousel";
import ItemListContainer from "./Componentes/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Carousel></Carousel>
      <ItemListContainer greeting={"PAGE UNDER MAINTENANCE!!"}></ItemListContainer>
      <Footer></Footer>

    </div>
  );
}

export default App;
