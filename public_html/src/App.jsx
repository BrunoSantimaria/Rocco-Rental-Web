/* eslint-disable react/no-unknown-property */
import { Contacto } from "./components/Contacto";
import { Footer } from "./components/Footer";
import { Informacion } from "./components/Informacion";
import NavBar from "./components/NavBar";
import { Nosotros } from "./components/Nosotros";
import { Productos } from "./components/Productos";
import { Title } from "./components/Title";

function App() {
  return (
    <div className='bg-color1 bg-cover h-full w-full scroll-none'>
      <div className='pb-20'>
        <NavBar />
      </div>
      <Title />
      <div className='w-[375px] mx-auto mt-5 flex flex-col space-y-8 pb-10'>
        <Nosotros />
        <Productos />
        <Contacto />
        <Informacion />
      </div>
      <Footer />
    </div>
  );
}

export default App;
