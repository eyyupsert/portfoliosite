"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [floatingElements, setFloatingElements] = useState<any[]>([]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    // Rasgele floating elementleri client tarafında oluştur
    const elements = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 30) + 10,
      left: `${Math.floor(Math.random() * 90)}%`,
      top: `${Math.floor(Math.random() * 90)}%`,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
    }));
    
    setFloatingElements(elements);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Ticaret Mikroservis Mimarisi",
      description:
        "Spring Boot ve RabbitMQ kullanarak geliştirilen tam ölçeklenebilir mikroservis tabanlı e-ticaret platformu. Ödeme, sepet ve ürün servisleri ayrı containerlar halinde çalışır.",
      tags: ["Java", "Spring Boot", "RabbitMQ", "Docker", "Mikroservisler"],
      image: "/project1.jpg",
      link: "https://github.com/eyyupsert",
    },
    {
      id: 2,
      title: "Akıllı Envanter Yönetim Sistemi",
      description:
        ".NET Core ve MongoDB kullanılarak geliştirilen, gerçek zamanlı stok takibi ve analitik araçlar sunan envanter yönetim sistemi.",
      tags: ["C#", ".NET Core", "MongoDB", "REST API", "JWT Authentication"],
      image: "/project2.jpg",
      link: "https://github.com/eyyupsert",
    },
    {
      id: 3,
      title: "Araç Takip ve Filo Yönetimi",
      description:
        "Filo yöneticileri için gerçek zamanlı konum takibi, yakıt analizi ve bakım planlaması sağlayan kapsamlı bir yönetim panosu.",
      tags: ["Java", "Spring", "MySQL", "REST API", "Google Maps API"],
      image: "/project3.jpg",
      link: "https://github.com/eyyupsert",
    },
    {
      id: 4,
      title: "HR Yönetim Platformu",
      description:
        "İşe alım, çalışan performans değerlendirmesi ve bordro yönetimini otomatikleştiren insan kaynakları yönetim platformu.",
      tags: ["C#", "Entity Framework", "SQL Server", "Azure", "REST API"],
      image: "/project4.jpg",
      link: "https://github.com/eyyupsert",
    },
    {
      id: 5,
      title: "Çevrimiçi Eğitim Portalı",
      description:
        "Canlı dersler, interaktif testler ve ilerleme takibi sunan kapsamlı bir dijital eğitim platformu.",
      tags: ["Java", "Spring Boot", "PostgreSQL", "WebSocket", "JWT"],
      image: "/project5.jpg",
      link: "https://github.com/eyyupsert",
    },
    {
      id: 6,
      title: "Restoran Sipariş Yönetimi",
      description:
        "Siparişleri, masaları ve envanteri yönetmek için tasarlanmış, mobil dostu bir restoran yönetim uygulaması.",
      tags: ["C#", ".NET Core", "MySQL", "SignalR", "REST API"],
      image: "/project6.jpg",
      link: "https://github.com/eyyupsert",
    },
  ];

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
  };

  const projectCardVariants = {
    initial: { 
      opacity: 0, 
      y: 30, 
      scale: 0.95
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.15 * index,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    }
  };

  const renderFloatingElements = () => {
    if (floatingElements.length === 0) {
      return null;
    }

    return floatingElements.map((element) => (
      <motion.div
        key={element.id}
        className="absolute rounded-full bg-accent opacity-[0.07] dark:opacity-[0.05] pointer-events-none"
        style={{
          width: element.size,
          height: element.size,
          left: element.left,
          top: element.top,
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          opacity: [0.05, 0.2, 0.05],
        }}
        transition={{
          y: {
            duration: element.duration,
            repeat: Infinity,
            repeatType: "reverse",
            delay: element.delay,
          },
          x: {
            duration: element.duration * 1.3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: element.delay * 0.7,
          },
          opacity: {
            duration: element.duration * 0.6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: element.delay * 0.3,
          },
        }}
      />
    ));
  };

  return (
    <section 
      id="projects" 
      className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gray-50 dark:bg-gray-900 overflow-hidden"
      ref={ref}
      onMouseMove={handleMouseMove}
    >
      {/* Mouse follow effect */}
      <motion.div
        className="hidden md:block pointer-events-none absolute w-64 h-64 rounded-full bg-primary opacity-[0.03] dark:opacity-[0.07] blur-3xl"
        animate={{
          x: mousePosition.x - 128,
          y: mousePosition.y - 128,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />

      {/* Floating elements in background */}
      {renderFloatingElements()}

      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-20 dark:opacity-10">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0"
        >
          <defs>
            <pattern
              id="project-grid"
              width="15"
              height="15"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M15 0H0V15"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.3"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#project-grid)"
            className="text-primary"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white relative inline-block">
            <span className="relative z-10">Öne Çıkan Çalışmalarım</span>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute h-1 bg-gradient-to-r from-primary to-accent bottom-0 left-0 right-0"
            />
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Aşağıda yer alan projelerde kullandığım temel teknolojiler ve izlediğim yaklaşımlar,
            yazılım geliştirme felsefemi yansıtmaktadır.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectCardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              whileHover="hover"
              custom={index}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 group relative flex flex-col"
            >
              {/* Işıma efekti */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-conic from-primary/20 via-transparent to-accent/20 rounded-xl z-0"
                animate={activeProject === project.id ? {
                  transform: ["rotate(0deg)", "rotate(360deg)"],
                } : {}}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <div className="relative h-52 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 z-10" />
                <Image
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  width={500}
                  height={300}
                />
                <motion.div
                  className="absolute inset-0 bg-primary/30 dark:bg-primary/40 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-0"
                  animate={activeProject === project.id ? {
                    opacity: [0.05, 0.15, 0.05],
                  } : {}}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </div>

              <div className="flex-grow p-6 flex flex-col relative z-10">
                <motion.h3 
                  className="text-xl font-bold text-gray-900 dark:text-white mb-2"
                  animate={
                    activeProject === project.id 
                      ? { x: [0, 5, 0], color: "#0070f3" } 
                      : { x: 0, color: "" }
                  }
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap mt-2 mb-4 gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: 0.2 + index * 0.15 + tagIndex * 0.05 
                      }}
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "#0070f3", 
                        color: "white" 
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium inline-flex items-center group/link"
                  whileHover={{ x: 5 }}
                >
                  Detayları Gör
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 transform group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.a>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 border-t-[25px] border-r-[25px] border-t-accent border-r-transparent opacity-70" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/eyyupsert"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300 hover:scale-105 group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" clipRule="evenodd" />
              </svg>
              Tüm Projelerim
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
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
          </a>
        </motion.div>
      </div>
    </section>
  );
}; 