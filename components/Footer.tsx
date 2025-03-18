"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react"

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4 border-b border-primary pb-2">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1 text-primary" />
                <span>
                  Krankenhaus St. Josef
                  <br />
                  Musterstraße 123
                  <br />
                  12345 Musterstadt
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-primary" />
                <span>+49 123 456789</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-primary" />
                <span>info@krankenhaus-stjose.de</span>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4 border-b border-primary pb-2">Schnellzugriff</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/notfall" className="hover:text-primary transition-colors">
                  Notfall
                </Link>
              </li>
              <li>
                <Link href="/besucherinformationen" className="hover:text-primary transition-colors">
                  Besucherinformationen
                </Link>
              </li>
              <li>
                <Link href="/karriere" className="hover:text-primary transition-colors">
                  Karriere
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-primary transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Medical Departments */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4 border-b border-primary pb-2">Fachbereiche</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/innere-medizin" className="hover:text-primary transition-colors">
                  Innere Medizin
                </Link>
              </li>
              <li>
                <Link href="/kardiologie" className="hover:text-primary transition-colors">
                  Kardiologie
                </Link>
              </li>
              <li>
                <Link href="/chirurgie" className="hover:text-primary transition-colors">
                  Chirurgie
                </Link>
              </li>
              <li>
                <Link href="/palliativmedizin" className="hover:text-primary transition-colors">
                  Palliativmedizin
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Social Media & Newsletter */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4 border-b border-primary pb-2">Folgen Sie uns</h3>
            <div className="flex space-x-4 mb-6">
              <Link href="#" className="hover:text-primary transition-colors">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </Link>
            </div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Ihre E-Mail"
                className="px-4 py-2 w-full text-gray-800 rounded-l focus:outline-none"
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-r hover:bg-opacity-90 transition-colors"
              >
                Anmelden
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="bg-secondary-dark py-4 border-t border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© {new Date().getFullYear()} Krankenhaus St. Josef. Alle Rechte vorbehalten.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/datenschutz" className="text-sm hover:text-primary transition-colors">
                Datenschutz
              </Link>
              <Link href="/impressum" className="text-sm hover:text-primary transition-colors">
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

