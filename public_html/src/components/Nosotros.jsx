import { Image } from "@mui/icons-material";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Nosotros = () => {
  const AnimatedSection = ({ children }) => {
    const [ref, inView] = useInView({
      triggerOnce: false,
      threshold: 0.2,
    });

    return (
      <motion.div
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  };
  return (
    <div
      className='bg-color2 h-screen
    '
    >
      <section id='productos' className='w-full py-8 md:py-24 lg:py-28'>
        <div className='px-4 md:px-6'>
          <AnimatedSection>
            <h2 className='text-2xl md:text-3xl lg:text-6xl font-bold font-conthic text-color3 text-center mb-8 md:mb-12'>Productos y Servicios</h2>
            <div className='flex flex-col md:flex-row gap-8 md:gap-6 items-center md:justify-center md:space-x-0 lg:space-x-16'>
              {[
                {
                  alt: "alquiler andamios rosario",
                  name: "Equipamiento para tus obras",
                  description:
                    "Nuestra empresa está enfocada a suplir las necesidades de todo tipo de obras y proyectos. Prestamos servicio de alquiler de plataformas tijera, andamios y herramientas para la construcción.",
                  image: "https://res.cloudinary.com/di92lsbym/image/upload/v1731611842/nosotros1-0888db4d_qp5paf.jpg",
                },
                {
                  alt: "alquiler plataforma tijera rocco rental",
                  name: "Alquilá con nosotros",
                  description:
                    "Plataformas tijera hasta 12 metros de altura de trabajo, balancín colgante eléctrico, andamios y accesorios, puntales telescópicos.",
                  image: "https://res.cloudinary.com/di92lsbym/image/upload/v1731611917/nosotros2-ad96f662_e674jv.jpg",
                },
                {
                  alt: "venta de herramientas rocco rental",
                  name: "Venta de herramientas",
                  description:
                    "Hormigoneras, carretillas, caballetes y andamios. Directo de fabrica, la mejor calidad y precio. Solicita más información sobre nuestros productos.",
                  image: "https://res.cloudinary.com/di92lsbym/image/upload/v1731611969/img4-547351d7_zslpt5.webp",
                },
              ].map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 1,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                  className='rounded-lg bg-color1 font-poppins overflow-hidden shadow-md shadow-color1/40 w-full md:w-[350px] lg:w-[500px] mx-4 md:mx-0'
                >
                  <img src={product.image} alt={product.alt} width={800} height={600} className='w-full h-[200px] object-cover' />
                  <div className='p-4 h-[320px] flex flex-col justify-between'>
                    <div>
                      <h3 className='font-bold text-color2 text-3xl mb-2'>{product.name}</h3>
                      <p className='text-color3 font-poppins'>{product.description}</p>
                    </div>
                    <span className='p-2 inline-block mt-4 text-center font-bold border-color2 border bg-transparent  rounded-md cursor-pointer duration-700  hover:bg-color2  text-color3 font-poppins'>
                      Más Información
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};
