/* eslint-disable react/no-unknown-property */
import { Contacto } from "./components/Contacto";
import FloatingWhatsAppButton from "./components/FloatingWhatsApp";
import { Footer } from "./components/Footer";
import { Informacion } from "./components/Informacion";
import NavBar from "./components/NavBar";
import { Nosotros } from "./components/Nosotros";
import { Productos } from "./components/Productos";
import { Title } from "./components/Title";
import { Helmet } from "react-helmet-async";
import { HelmetProvider } from "react-helmet-async";
function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Alquiler de andamios Rosario. Alquiler plataforma tijera Rosario. Rocco Rental S.R.L.</title>
        <meta charset='UTF-8' />
        <link rel='icon' type='image/svg+xml' href='src/assets/LOGO-ROCCO.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

        <meta
          name='description'
          content='Alquiler y venta Andamios. Alquiler plataforma tijera. Venta Carretillas y hormigoneras. Rosario, Santa Fe, Argentina'
        />
        <meta
          name='keywords'
          content='alquiler,tijera,andamios,balancin alquiler, balancin rosario, puntal telescopico, puntal telescopico rosario, alquiler andamios,carretillas,alquiler andamios rosario, venta andamios rosario, alquiler andamios tubulares rosario, alquiler andamios tubulares, hormigoneras,plataformas,alquiler andamios, alquiler plataforma tijera, alquiler tijera, alquiler tijera rosario,hormigoneras,carretillas,palas,alquiler andamio colgante,alquiler andamio tubular, venta de carretillas, venta de hormigoneras, venta de palas, venta de andamios,alquiler elevacion rosario,alquiler elevacion roldan, alquiler andamios funes, alquiler andamios arroyo seco'
        />
        <meta name='robots' content='index, follow' />
        <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='language' content='Spanish' />
        <meta name='author' content='Bruno Santimaria / www.linkedin.com/in/bruno-santimaria' />
      </Helmet>
      <FloatingWhatsAppButton />
      <div className=' bg-transparent  h-full w-screen scroll-none '>
        <div className=' z-50  '>
          <NavBar />
        </div>
        <section className=' '>
          <div id='title'>
            <Title />
          </div>
        </section>

        <div id='nosotros' className=' mx-auto mt-0  space-y-0 pb-10'>
          <Nosotros />
        </div>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
