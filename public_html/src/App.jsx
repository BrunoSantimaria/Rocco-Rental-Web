/* eslint-disable react/no-unknown-property */
import NavBar from "./components/NavBar";
import { Nosotros } from "./components/Nosotros";
import { Title } from "./components/Title";
function App() {
  return (
    <div className='bg-color1 h-full w-full'>
      <NavBar />
      <Title />
      <Nosotros />
    </div>
  );
}

export default App;
