"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [animationComplete, setAnimationComplete] = useState(false);
  const [floatingElements, setFloatingElements] = useState<any[]>([]);

  // Animasyon varyasyonları
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  useEffect(() => {
    // Rasgele yüzen elementleri client tarafında oluştur
    const elements = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 20) + 5,
      left: `${Math.floor(Math.random() * 100)}%`,
      top: `${Math.floor(Math.random() * 100)}%`,
      delay: Math.random() * 2,
      duration: Math.random() * 10 + 5,
    }));
    
    setFloatingElements(elements);

    // Animasyon tamamlandı sayılması için zamanlayıcı
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 2000);

    // Mouse hareketi için event listener
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Sunucu tarafında boş bir array dön, client tarafında useEffect içinde doldurulacak
  const renderFloatingElements = () => {
    if (floatingElements.length === 0) {
      return null;
    }

    return floatingElements.map((el) => (
      <motion.div
        key={el.id}
        className="absolute rounded-full bg-primary/5 dark:bg-primary/10 z-0"
        style={{
          width: el.size,
          height: el.size,
          left: el.left,
          top: el.top,
        }}
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: el.duration,
          repeat: Infinity,
          repeatType: "reverse",
          delay: el.delay,
        }}
      />
    ));
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Parlayan arka plan efekti */}
      <div 
        className="absolute inset-0 opacity-10 dark:opacity-20"
        style={{ 
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 112, 243, 0.8) 0%, transparent 60%)`,
          transition: 'background-position 0.3s ease-out',
        }}
      />

      {/* Animasyonlu yüzen elementler */}
      {renderFloatingElements()}

      {/* Ana içerik */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10"
      >
        <div className="order-2 lg:order-1">
          <motion.div variants={item} className="mb-2 inline-block">
            <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium backdrop-blur-sm animate-pulse-slow">
              Yazılım Mühendisi
            </span>
          </motion.div>
          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight drop-shadow-glow"
          >
            Merhaba, ben{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-gradient-xy">
              Eyyüp SERT
            </span>
          </motion.h1>
          <motion.p
            variants={item}
            className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl"
          >
            Modern ve performans odaklı uygulamalar geliştiriyorum. Java, C#, MySQL, MongoDB, RabbitMQ ve Docker
            teknolojilerinde uzmanım.
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <motion.a
              href="#contact"
              className="relative overflow-hidden bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-neon group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 w-full h-full bg-shimmer-gradient opacity-30 animate-shimmer"></span>
              <span className="relative z-10 flex items-center">
                İletişime Geç
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </motion.svg>
              </span>
            </motion.a>
            <motion.a
              href="#projects"
              className="relative overflow-hidden bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 px-6 py-3 rounded-lg font-medium transition-colors duration-300 shadow-lg border border-gray-200 dark:border-gray-700 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 w-full h-full bg-shimmer-gradient opacity-20 animate-shimmer"></span>
              <span className="relative z-10 flex items-center">
                Projelerimi Keşfet
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 text-accent"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  animate={{
                    rotate: [0, 15, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </motion.svg>
              </span>
            </motion.a>
          </motion.div>
          
          {/* Teknoloji tag cloud */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            {["Java", "Spring Boot", "C#", ".NET Core", "MySQL", "MongoDB", "RabbitMQ", "Docker"].map((tech, i) => (
              <motion.span
                key={tech}
                className="inline-block px-3 py-1 text-xs rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, boxShadow: "0 0 8px rgba(0, 112, 243, 0.5)" }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
        
        <motion.div
          variants={item}
          className="order-1 lg:order-2 flex items-center justify-center relative"
        >
          {/* Arka plan için aura efekti */}
          <motion.div
            className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          
          {/* Profil resmi */}
          <motion.div
            className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-3d z-10"
            whileHover={{ scale: 1.03 }}
            animate={{ rotate: [0, 1, 0, -1, 0] }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
          >
            <Image
              src="/profile.jpg"
              alt="Eyyüp SERT"
              layout="fill"
              objectFit="cover"
              priority
              className="rounded-full"
            />
            
            {/* Parıltılı kenar efekti */}
            <motion.div
              className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary to-accent opacity-70 blur-sm z-0"
              animate={{
                background: [
                  "linear-gradient(0deg, rgba(0,112,243,0.5) 0%, rgba(109,40,217,0.5) 100%)",
                  "linear-gradient(180deg, rgba(0,112,243,0.5) 0%, rgba(109,40,217,0.5) 100%)",
                  "linear-gradient(360deg, rgba(0,112,243,0.5) 0%, rgba(109,40,217,0.5) 100%)",
                ],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </motion.div>
          
          {/* Yüzen elemtlar */}
          <motion.div
            className="absolute top-[10%] right-[10%] w-12 h-12 rounded-lg bg-accent/10 backdrop-blur-xs"
            animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            whileHover={{ scale: 1.2, backgroundColor: "rgba(109, 40, 217, 0.2)" }}
          >
            <svg className="w-full h-full p-3 text-accent" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path d="M12 14l-6.16-3.422a12.083 12.083 0 00-.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 016.824-2.998 12.078 12.078 0 00-.665-6.479L12 14z" />
            </svg>
          </motion.div>
          
          <motion.div
            className="absolute top-[70%] left-[15%] w-10 h-10 rounded-full bg-primary/10 backdrop-blur-xs"
            animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
            whileHover={{ scale: 1.2, backgroundColor: "rgba(0, 112, 243, 0.2)" }}
          >
            <svg className="w-full h-full p-2 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" />
            </svg>
          </motion.div>
          
          <motion.div
            className="absolute top-[30%] left-[10%] w-8 h-8 rounded-md bg-yellow-400/10 backdrop-blur-xs"
            animate={{ y: [0, -10, 0], x: [0, -10, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }}
            whileHover={{ scale: 1.2, backgroundColor: "rgba(250, 204, 21, 0.2)" }}
          >
            <svg className="w-full h-full p-2 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4v-10h4v-4h-6z" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <motion.div
          className="w-8 h-12 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center items-start p-1"
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}; 