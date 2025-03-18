"use client"

import { motion } from "framer-motion"
import { Home, Activity, Heart, Hand } from "lucide-react"

const FocusAreas = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const areas = [
    {
      icon: <Home className="w-16 h-16 text-primary" />,
      title: "Familienfreundliches Krankenhaus",
      description: "Wir bieten eine familiäre Atmosphäre für Patienten und Angehörige.",
    },
    {
      icon: <Activity className="w-16 h-16 text-primary" />,
      title: "Innere Medizin",
      description: "Umfassende Diagnostik und Therapie bei internistischen Erkrankungen.",
    },
    {
      icon: <Heart className="w-16 h-16 text-primary" />,
      title: "Kardiologie",
      description: "Modernste Verfahren zur Diagnose und Behandlung von Herzerkrankungen.",
    },
    {
      icon: <Hand className="w-16 h-16 text-primary" />,
      title: "Palliativmedizin",
      description: "Einfühlsame Betreuung und Begleitung in schweren Zeiten.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Unsere Schwerpunkte</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {areas.map((area, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="flex justify-center mb-6">{area.icon}</div>
              <h3 className="text-xl font-semibold text-secondary mb-3">{area.title}</h3>
              <p className="text-gray-600">{area.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FocusAreas

