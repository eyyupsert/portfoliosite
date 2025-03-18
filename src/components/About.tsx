"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

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

  // Teknoloji ikonları
  const techIcons = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full text-red-600" fill="currentColor">
          <path d="M16.5 8.4c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.9.6-1.6 1.5-1.6.8 0 1.5.7 1.5 1.6m-3.9-1.6c-.8 0-1.4.7-1.4 1.5 0 .8.7 1.5 1.5 1.5.7 0 1.4-.7 1.4-1.5-.1-.8-.7-1.5-1.5-1.5m-8.1 1.6c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5c0-.9-.6-1.6-1.5-1.6-.8 0-1.5.7-1.5 1.6m4.5-1.5c-.8 0-1.5.7-1.5 1.5 0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5c0-.8-.7-1.5-1.5-1.5m9.7-4.9.8 1.3-.8 1.3-.8-1.3.8-1.3m-3.1 0 .8 1.3-.8 1.3-.8-1.3.8-1.3m-4.6 0 .8 1.3-.8 1.3-.8-1.3.8-1.3m-9.8 0 .8 1.3-.8 1.3-.8-1.3.8-1.3m-3 3.1 1.3-.8 1.3.8-1.3.8-1.3-.8m16.1 4.5-.8 1.3.8 1.3.8-1.3-.8-1.3m3.1-4.5 1.3-.8 1.2.8-1.3.8-1.2-.8m-4.6 4.5-.8 1.3.8 1.3.8-1.3-.8-1.3m-4.7 0-.8 1.3.8 1.3.8-1.3-.8-1.3m-4.5 0-.8 1.3.8 1.3.8-1.3-.8-1.3m-3-8.3 1.3.8-1.3.8-1.3-.8 1.3-.8m19.9 0 1.3.8-1.3.8-1.3-.8 1.3-.8m-15.2 8.3-.8 1.3.8 1.3.8-1.3-.8-1.3m9.9 5.6-1.3.8-1.3-.8 1.3-.8 1.3.8m-4.6-2.2 1.3-.8 1.3.8-1.3.8-1.3-.8m4.6 0 1.3-.8 1.3.8-1.3.8-1.3-.8m-9.2 0 1.3-.8 1.3.8-1.3.8-1.3-.8m13.8-15.9 1.3.8-1.3.8-1.3-.8 1.3-.8m.1 15.9 1.3-.8 1.3.8-1.3.8-1.3-.8m-18.4-8.1 1.3.8-1.3.8-1.3-.8 1.3-.8m18.4 0 1.3.8-1.3.8-1.3-.8 1.3-.8" />
        </svg>
      ),
      color: "red",
      name: "Java",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full text-purple-600" fill="currentColor">
          <path d="M10.495 6.92L1.278 12.214l9.218 5.287v-3.682l-5.209-2.889 5.208-2.963v-3.042m3.008 0v3.04l5.208 2.963-5.208 2.89v3.681l9.218-5.287-9.218-5.287m1.504 2.46v2.914h1.36v-2.914h-1.36m-2.702 0v2.914h1.36v-2.914h-1.36m-2.702 0v2.914h1.36v-2.914h-1.36" />
        </svg>
      ),
      color: "purple",
      name: "C#",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full text-blue-500" fill="currentColor">
          <path d="M3.35 8.5c-.7 0-1.18.38-1.42.76-.23.4-.32.82-.32 1.12 0 .31.09.73.32 1.12.24.38.71.76 1.42.76.7 0 1.18-.38 1.42-.76.23-.4.32-.81.32-1.12 0-.3-.09-.72-.32-1.12-.24-.38-.71-.76-1.42-.76m17.3 0c-.7 0-1.18.38-1.42.76-.23.4-.32.82-.32 1.12 0 .31.09.73.32 1.12.24.38.71.76 1.42.76.7 0 1.18-.38 1.42-.76.23-.4.32-.81.32-1.12 0-.3-.09-.72-.32-1.12-.24-.38-.71-.76-1.42-.76m-8.65 0a1.79 1.79 0 0 0-1.79 1.79v10.42A1.79 1.79 0 0 0 12 22.5a1.79 1.79 0 0 0 1.79-1.79V10.29A1.79 1.79 0 0 0 12 8.5M12 1.5c-1.58 0-2.97.84-3.76 2.08-2.27.45-3.74 2.31-3.74 4.56 0 1.47.75 2.85 2 3.74A2.04 2.04 0 0 1 5 13.85v.03c0 .88.7 1.62 1.62 1.62h10.76c.92 0 1.62-.74 1.62-1.62v-.03c0-.78-.64-1.45-1.5-1.97 1.25-.89 2-2.27 2-3.74 0-2.25-1.47-4.1-3.74-4.56A4.5 4.5 0 0 0 12 1.5Z" />
        </svg>
      ),
      color: "blue",
      name: "Docker",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full text-orange-600" fill="currentColor">
          <path d="M2.739 15.055c0 1.367.477 2.463 1.338 3.297.784.741 1.717 1.136 2.675 1.136.74 0 1.475-.198 2.144-.596.407-.241.739-.542.994-.904.255.362.586.663.993.904.669.398 1.404.596 2.145.596.957 0 1.889-.395 2.675-1.136.862-.834 1.338-1.93 1.338-3.297V5.96h-5.39v9.094h1.859c0 .612-.137 1.134-.406 1.542-.241.362-.582.552-1.019.552-.436 0-.778-.19-1.02-.552-.269-.408-.406-.93-.406-1.542h-.875c0 .612-.135 1.134-.405 1.542-.241.362-.583.552-1.019.552-.437 0-.778-.19-1.02-.552-.269-.408-.405-.93-.405-1.542h1.858V5.96H2.739v9.094zm13.626-10.937c-1.624 0-3.093.8-4.095 2.212-1.003-1.412-2.47-2.212-4.095-2.212C6.63 4.118 5.5 4.67 4.595 5.649c-1.04 1.125-1.67 2.721-1.67 4.5 0 1.966.62 3.672 1.716 4.807.965 1.045 2.208 1.62 3.534 1.62.893 0 1.79-.244 2.584-.704.468-.27.88-.597 1.241-1.004.361.407.773.734 1.24 1.004.795.46 1.693.704 2.585.704 1.326 0 2.57-.575 3.534-1.62 1.098-1.135 1.716-2.84 1.716-4.808 0-1.778-.63-3.374-1.67-4.5-.904-.977-2.037-1.53-3.57-1.53zM10.096 9.32h-1.672v-2.36h1.672v2.36zm5.48 0h-1.672v-2.36h1.672v2.36z" />
        </svg>
      ),
      color: "orange",
      name: "PHP",
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
            <pattern
              id="grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
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
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm relative inline-block">
            <span className="relative z-10">Hakkımda</span>
            <motion.span 
              className="absolute -inset-1 bg-primary/10 rounded-lg -z-10"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white relative inline-block">
            <span className="relative z-10">Profesyonel Gelişim Yolculuğum</span>
            <motion.span 
              className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full -z-10"
              initial={{ width: "0%" }}
              animate={isInView ? { width: "100%" } : { width: "0%" }}
              transition={{ duration: 1, delay: 0.4 }}
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