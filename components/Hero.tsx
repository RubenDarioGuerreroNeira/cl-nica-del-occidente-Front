// "use client"

// import { motion } from "framer-motion"
// import Link from "next/link"
// import Slider from "react-slick"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

// declare module 'react-slick';

// const Hero = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   }


//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     fade: true,
//   }


//   return (
//     <section className="relative w-full h-screen overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0 w-full h-full bg-cover bg-center z-0">
//         <Slider {...settings}>
//           <div
//             className="w-full h-full"
//             style={{
//               backgroundImage:
//                 "url('https://www.sainc.co/wp-content/uploads/2014/10/L1008107.jpg')",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               filter: "brightness(0.8)",
//             }}
//           ></div>

//           <div
//             className="w-full h-full"
//             style={{
//               backgroundImage:
//                 "url('https://www.sainc.co/wp-content/uploads/2014/10/L1008108.jpg')",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               filter: "brightness(0.8)",
//             }}
//           ></div>
//           <div
//             className="w-full h-full"
//             style={{
//               backgroundImage:
//                 "url('https://www.sainc.co/wp-content/uploads/2014/10/L1008109.jpg')",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               filter: "brightness(0.8)",
//             }}
//           ></div>
//         </Slider>

//       </div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//           className="max-w-2xl text-white pt-20"
//         >
//           <motion.div variants={itemVariants} className="mb-4">
//             <Link href="/medizin-pflege" className="text-primary hover:text-white transition-colors text-lg">
//               Médicos
//             </Link>
//           </motion.div>
//           <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
//             Transformamos tu calidad de vida con tecnología avanzada y un trato humano cercano.
//           </motion.h2>
//           <motion.div variants={itemVariants}>
//             <Link href="/mehr-erfahren" className="btn-primary inline-block">
//               Especialidades
//             </Link>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Bottom Navigation */}
//       <div className="absolute bottom-0 left-0 right-0 bg-white/90 py-4 z-10">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1, duration: 0.5 }}
//             className="flex justify-between items-center overflow-x-auto whitespace-nowrap"
//           >
//             <Link href="/medizin-pflege" className="px-4 py-2 text-secondary hover:text-primary transition-colors">
//               Médicos
//             </Link>
//             <Link href="/ihr-aufenthalt" className="px-4 py-2 text-secondary hover:text-primary transition-colors">
//               Especialidades
//             </Link>
//             <Link href="/karriere" className="px-4 py-2 text-secondary hover:text-primary transition-colors">
//               Servicios
//             </Link>
//             <Link href="/unser-haus" className="px-4 py-2 text-secondary hover:text-primary transition-colors">
//               Agendar Cita
//             </Link>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero



"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

declare module 'react-slick';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true, // Añadido para una mejor transición
  }

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 w-full h-full">
        <Slider {...settings} className="h-full">
          <div className="h-screen">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: "url('https://www.sainc.co/wp-content/uploads/2014/10/L1008107.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(0.8)",
                height: "100vh",
              }}
            />
          </div>
          <div className="h-screen">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: "url('https://www.sainc.co/wp-content/uploads/2014/10/L1008193.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(0.8)",
                height: "100vh",
              }}
            />
          </div>
          <div className="h-screen">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: "url('https://www.sainc.co/wp-content/uploads/2014/10/DJI_0740.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(0.8)",
                height: "100vh",
              }}
            />
          </div>
        </Slider>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-2xl text-white pt-20"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <Link href="/medizin-pflege" className="text-primary hover:text-white transition-colors text-lg">
              Médicos
            </Link>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Transformamos tu calidad de vida con tecnología avanzada y un trato humano cercano.
          </motion.h2>
          <motion.div variants={itemVariants}>
            <Link href="/mehr-erfahren" className="btn-primary inline-block">
              Especialidades
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/90 py-4 z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex justify-between items-center overflow-x-auto whitespace-nowrap"
          >
            <Link href="/medizin-pflege" className="px-4 py-2 text-secondary hover:text-primary transition-colors">
              Médicos
            </Link>
            <Link href="/ihr-aufenthalt" className="px-4 py-2 text-secondary hover:text-primary transition-colors">
              Especialidades
            </Link>
            <Link href="/karriere" className="px-4 py-2 text-secondary hover:text-primary transition-colors">
              Servicios
            </Link>
            <Link href="/unser-haus" className="px-4 py-2 text-secondary hover:text-primary transition-colors">
              Agendar Cita
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero


{/* Bottom Navigation */ }
<div className="absolute bottom-0 left-0 right-0 bg-white/90 py-4 z-10">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="flex justify-between items-center overflow-x-auto whitespace-nowrap"
    >
      <Link href="/medizin-pflege" className="px-4 py-2 text-secondary hover:text-primary transition-colors">
        Médicos
      </Link>
      <Link href="/ihr-aufenthalt" className="px-4 py-2 text-secondary hover:text-primary transition-colors">
        Especialidades
      </Link>
      <Link href="/karriere" className="px-4 py-2 text-secondary hover:text-primary transition-colors">
        Servicios
      </Link>
      <Link href="/unser-haus" className="px-4 py-2 text-secondary hover:text-primary transition-colors">
        Agendar Cita
      </Link>
    </motion.div>
  </div>
</div>