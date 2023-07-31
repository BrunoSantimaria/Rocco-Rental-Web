/* eslint-disable react/no-unknown-property */
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
      <div className='w-[375px] flex-col justify-center content-center align-center pb-20'>
        <Nosotros />
        <Productos />
      </div>
    </div>
  );
}

export default App;
