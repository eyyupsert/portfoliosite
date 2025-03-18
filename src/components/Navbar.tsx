"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { id: "home", label: "Ana Sayfa" },
    { id: "about", label: "Hakkımda" },
    { id: "skills", label: "Yetenekler" },
    { id: "projects", label: "Projeler" },
    { id: "contact", label: "İletişim" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.a
          href="#home"
          className="text-2xl font-bold text-primary relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Eyyüp SERT</span>
          <motion.div
            className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-primary to-accent"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
          {/* Glow effect behind the name */}
          <div className="absolute -inset-1 bg-primary/5 rounded-full filter blur-sm dark:bg-primary/10 -z-10" />
        </motion.a>

        {/* Desktop nav */}
        <motion.nav className="hidden md:flex items-center space-x-1 relative">
          {navLinks.map((link, index) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="group relative px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300"
            >
              <motion.span
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                {link.label}
              </motion.span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          ))}
          
          <div className="ml-4">
            <ThemeToggle />
          </div>
          
          <motion.a
            href="#contact"
            className="ml-4 px-4 py-2 bg-primary text-white rounded-lg shadow-lg hover:bg-primary-dark transition-colors duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">İletişime Geç</span>
            {/* Shimmering effect */}
            <motion.div 
              className="absolute inset-0 bg-white opacity-10"
              animate={{ 
                x: ["-100%", "100%"],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            />
          </motion.a>
        </motion.nav>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden space-x-4">
          <ThemeToggle />
          
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 dark:text-gray-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-800 shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-2 py-2 transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="text-white bg-primary px-4 py-2 rounded-lg text-center hover:bg-primary-dark transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  İletişime Geç
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}; 