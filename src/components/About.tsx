"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Deneyim verileri
  const experiences = [
    {
      company: "Ödeal",
      position: "Yazılım Mühendisi",
      period: "Mart 2022 - Devam Ediyor",
      description: "Ödeme sistemleri ve fintech çözümlerinde backend geliştirici olarak görev almaktayım. C# (.NET Core) ile Entity Framework ve Java (Spring Boot) ile JPA kullanarak mikroservis mimarisi üzerinde çalışıyorum. Ayrıca PHP ile Kiva CRM ürününde operasyonel süreçler için çözümler geliştiriyorum.",
      technologies: ["C#", ".NET Core", "Entity Framework", "Java", "Spring Boot", "JPA", "PHP", "MySQL", "MongoDB", "RabbitMQ", "Docker"],
    },
    {
      company: "Prof-It",
      position: "Yazılım Mühendisi",
      period: "Eylül 2021 - Mart 2022",
      description: "Türkiye Cumhuriyeti'ne uygun çalışan izin takip sistemi geliştirdik. C# ve .NET Framework teknolojileri ile çalıştım. İzin işlemlerinin otomatizasyonu ve yasal düzenlemelere uyumlu hale getirilmesini sağladım.",
      technologies: ["C#", ".NET Framework", "SQL Server", "MSSQL", "Entity Framework"],
    },
    {
      company: "PİTON Ar-Ge ve Yazılım Evi",
      position: "Stajyer",
      period: "Şubat 2020 - Mart 2020",
      description: "Yazılım geliştirme süreçlerinde stajyer olarak görev aldım. Web uygulamaları geliştirme konusunda deneyim kazandım.",
      technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
    },
  ];

  // Float Animation Variants
  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }
    }
  };

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 relative overflow-hidden"
      ref={ref}
    >
      {/* Arka plan efekti */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          className="text-primary dark:text-accent"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="premium-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.2"/>
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="1" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <radialGradient id="spotlight" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </radialGradient>
            <pattern id="premium-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20 0 L40 20 L20 40 L0 20 Z" fill="none" stroke="url(#premium-gradient)" strokeWidth="0.5" />
              <path d="M0 0 L20 20 L0 40 M40 0 L20 20 L40 40" fill="none" stroke="url(#premium-gradient)" strokeWidth="0.3" />
              <circle cx="20" cy="20" r="1" fill="currentColor" filter="url(#glow)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#premium-pattern)" />
          <circle cx="30" cy="30" r="35" fill="url(#spotlight)" opacity="0.3" />
          <circle cx="70" cy="70" r="25" fill="url(#spotlight)" opacity="0.2" />
        </svg>
      </div>

      {/* Daha fazla parlayan elementler */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-radial from-primary/5 to-transparent rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-gradient-radial from-accent/5 to-transparent rounded-full"></div>
      </div>

      {/* Parlayan elementler */}
      <motion.div
        className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <motion.div
        className="absolute bottom-0 left-1/4 w-48 h-48 bg-gradient-to-tr from-accent/10 to-accent/5 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative"
        >
          {/* Başlık arka planı efekti */}
          <motion.div 
            className="absolute -inset-x-6 -inset-y-4 bg-gradient-to-r from-gray-100/80 to-white/80 dark:from-gray-800/80 dark:to-gray-900/80 rounded-2xl -z-10 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 shadow-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          />
          
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white relative inline-block px-6 py-2">
            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">Profesyonel Gelişim Yolculuğum</span>
            <motion.div 
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full -z-10"
              initial={{ width: "0%" }}
              animate={isInView ? { width: "100%" } : { width: "0%" }}
              transition={{ duration: 1, delay: 0.4 }}
            />
            <motion.div 
              className="absolute -bottom-5 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/40 to-accent/40 rounded-full -z-10"
              initial={{ width: "0%" }}
              animate={isInView ? { width: "80%" } : { width: "0%" }}
              transition={{ duration: 1.2, delay: 0.6 }}
            />
            <motion.div 
              className="absolute inset-0 bg-white/5 dark:bg-black/5 rounded-lg filter blur-sm -z-20"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 relative lg:col-span-2"
          >
            {/* Stil elemanı */}
            <motion.div
              className="absolute -top-6 -left-6 w-16 h-16 text-primary/20 dark:text-primary/30 z-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <path d="M12 18v-6" />
                <path d="M8 15h8" />
              </svg>
            </motion.div>

            <p className="text-lg text-gray-700 dark:text-gray-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-100 dark:border-gray-700 shadow-inner-glow relative z-10">
              Merhaba! Ben Eyyüp SERT, yazılım dünyasında modern teknolojilerle çalışmayı seven bir <strong className="text-primary dark:text-primary font-semibold">Yazılım Mühendisiyim</strong>. Karmaşık problemlere basit ve ölçeklenebilir çözümler geliştirmeyi hedefliyorum.
            </p>

            {/* Eğitim bölümü - iki ayrı kutu */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                <span className="text-2xl mr-2">🎓</span> Eğitim
              </h3>
              
              <motion.div
                variants={floatVariants}
                initial="initial"
                animate="animate"
                className="p-5 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-100 dark:border-gray-700 shadow-neon mb-4"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold">Üniversite</h4>
                </div>
                <div className="ml-13 pl-4 border-l-2 border-primary">
                  <p className="font-semibold text-gray-800 dark:text-gray-200">
                    Manisa Celal Bayar Üniversitesi
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Hasan Ferdi Turgutlu Teknoloji Fakültesi
                  </p>
                  <p className="text-primary font-medium">
                    Yazılım Mühendisliği Bölümü
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Lisans Derecesi
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                variants={floatVariants}
                initial="initial"
                animate="animate"
                className="p-5 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-100 dark:border-gray-700 shadow-neon"
                whileHover={{ scale: 1.02 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold">Lise</h4>
                </div>
                <div className="ml-13 pl-4 border-l-2 border-accent">
                  <p className="font-semibold text-gray-800 dark:text-gray-200">
                    Nevzat Ayaz Anadolu Öğretmen Lisesi
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Lise Eğitimi
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-3"
          >
            {/* Deneyim sekmesi */}
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-neon border border-gray-100 dark:border-gray-600 overflow-hidden">
              <div className="border-b border-gray-200 dark:border-gray-600">
                <div className="flex">
                  <h3 className="flex-1 py-4 px-6 font-medium text-center text-primary border-b-2 border-primary">
                    <span className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      İş Deneyimi
                    </span>
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <div>
                  <div className="relative pb-12">
                    {/* Deneyim zaman çizgisi */}
                    <div className="absolute h-full w-0.5 bg-gradient-to-b from-primary via-accent to-primary left-7 top-2"></div>
                    
                    {experiences.map((exp, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                        className="relative pl-16 pb-8 last:pb-0"
                      >
                        {/* Zaman çizgisindeki ikon */}
                        <div className="absolute left-5 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary shadow-glow"></div>
                        
                        <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-5 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-neon transition-shadow duration-300">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                            {exp.company}
                            <motion.span 
                              className="ml-2 text-sm font-normal text-white bg-primary rounded-full px-2 py-0.5"
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              {exp.position}
                            </motion.span>
                          </h3>
                          <p className="text-primary dark:text-primary-light font-medium my-1">
                            {exp.period}
                          </p>
                          <p className="text-gray-700 dark:text-gray-300 mt-2">
                            {exp.description}
                          </p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIdx) => (
                              <span
                                key={techIdx}
                                className="inline-block px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Öne çıkan istatistikler */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              {[
                { title: "Deneyim", value: "4+", icon: "💼", desc: "Yıl" },
                { title: "Projeler", value: "15+", icon: "🚀", desc: "Tamamlandı" },
                { title: "Teknolojiler", value: "10+", icon: "⚙️", desc: "Uzmanlık" },
                { title: "Mikroservisler", value: "20+", icon: "🔍", desc: "Geliştirdi" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-lg text-center hover:shadow-neon border border-gray-100 dark:border-gray-600 transition-all duration-300"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                >
                  <span className="text-2xl block mb-2">{stat.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {stat.title}
                  </h3>
                  <p className="text-primary text-2xl font-bold mt-1">{stat.value}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 