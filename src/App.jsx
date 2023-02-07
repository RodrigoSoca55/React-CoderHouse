import Navbar from "./Componentes/Navbar";
import Footer from "./Componentes/Footer";
import Carousel from "./Componentes/Carousel";
import ItemListContainer from "./Componentes/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <ItemListContainer greeting={"PAGE UNDER MAINTENANCE!!"}></ItemListContainer>
      <Footer/>

    </div>
  );
}

export default App;
