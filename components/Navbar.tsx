"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Search, Menu, X } from "lucide-react"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-white/90 py-4"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          {/* <motion.div variants={itemVariants} className="flex-shrink-0">
            <Link href="https://www.clinicadeloccidente.com/wp-content/uploads/LogoCDO.png">
              <div className="relative h-16 w-64">
                <Image
                  src="/placeholder.svg?height=64&width=256"
                  alt="Clinica del Occidente Logo"
                  width={256}
                  height={64}
                  priority
                />
              </div>
            </Link>
          </motion.div> */}

          {/* Top Navigation */}
          <motion.div variants={itemVariants} className="hidden lg:flex items-center space-x-6 text-sm">
            <Link href="/besucherinformationen" className="text-gray-600 hover:text-primary transition-colors">
              Aseguradoras
            </Link>
            <Link href="/aktuelles" className="text-gray-600 hover:text-primary transition-colors">
              Clientes Corporativos
            </Link>
            <Link href="/termine" className="text-gray-600 hover:text-primary transition-colors">
              Servicios
            </Link>
            <Link href="/spenden" className="text-gray-600 hover:text-primary transition-colors">

            </Link>
            <button className="text-gray-600 hover:text-primary transition-colors">
              <Search size={18} />
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-secondary p-2">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Main Navigation */}
        <motion.nav variants={navVariants} className="hidden lg:flex justify-center mt-4">
          <ul className="flex space-x-8">
            <motion.li variants={itemVariants}>
              <Link href="/medizin-pflege" className="nav-link font-medium">
                Medizin & Pflege
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="/ihr-aufenthalt" className="nav-link font-medium">
                Ihr Aufenthalt
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="/karriere" className="nav-link font-medium">
                Karriere
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="/unser-haus" className="nav-link font-medium">
                Unser Haus
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="/pflegeschule" className="nav-link font-medium">
                Pflegeschule
              </Link>
            </motion.li>
          </ul>
        </motion.nav>

        {/* Emergency Buttons */}
        <motion.div variants={itemVariants} className="hidden lg:flex absolute right-4 top-4 space-x-2">
          <Link href="/notfall" className="bg-red-600 text-white px-4 py-1 rounded text-sm font-bold">
            NOTFALL
          </Link>
          <Link href="/mvz" className="bg-secondary text-white px-4 py-1 rounded text-sm font-bold">
            MVZ
          </Link>
        </motion.div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-lg rounded-b-lg mt-2 py-4"
          >
            <div className="flex justify-center space-x-2 mb-4">
              <Link href="/notfall" className="bg-red-600 text-white px-4 py-1 rounded text-sm font-bold">
                NOTFALL
              </Link>
              <Link href="/mvz" className="bg-secondary text-white px-4 py-1 rounded text-sm font-bold">
                MVZ
              </Link>
            </div>
            <ul className="flex flex-col space-y-3 px-4">
              <li>
                <Link href="/medizin-pflege" className="block py-2 text-secondary hover:text-primary">
                  Medizin & Pflege
                </Link>
              </li>
              <li>
                <Link href="/ihr-aufenthalt" className="block py-2 text-secondary hover:text-primary">
                  Ihr Aufenthalt
                </Link>
              </li>
              <li>
                <Link href="/karriere" className="block py-2 text-secondary hover:text-primary">
                  Karriere
                </Link>
              </li>
              <li>
                <Link href="/unser-haus" className="block py-2 text-secondary hover:text-primary">
                  Unser Haus
                </Link>
              </li>
              <li>
                <Link href="/pflegeschule" className="block py-2 text-secondary hover:text-primary">
                  Pflegeschule
                </Link>
              </li>
              <li className="border-t pt-3 mt-3">
                <Link href="/besucherinformationen" className="block py-2 text-gray-600 hover:text-primary">
                  Besucherinformationen
                </Link>
              </li>
              <li>
                <Link href="/aktuelles" className="block py-2 text-gray-600 hover:text-primary">
                  Aktuelles
                </Link>
              </li>
              <li>
                <Link href="/termine" className="block py-2 text-gray-600 hover:text-primary">
                  Termine
                </Link>
              </li>
              <li>
                <Link href="/spenden" className="block py-2 text-gray-600 hover:text-primary">
                  Spenden
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Navbar

