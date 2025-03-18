"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(null);

  const skillCategories = [
    {
      title: "Backend",
      skills: ["Java (Spring Boot / JPA)", "C# (.NET Core / Framework)", "Entity Framework", "PHP"],
      delay: 0.1,
      icon: "💻",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Veritabanı",
      skills: ["MySQL", "MongoDB", "PostgreSQL", "MSSQL"],
      delay: 0.3,
      icon: "🗄️",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "DevOps",
      skills: ["Docker", "CI/CD", "Git/GitHub"],
      delay: 0.5,
      icon: "⚙️",
      color: "from-orange-500 to-amber-500",
    },
    {
      title: "Diğer",
      skills: ["RabbitMQ", "RESTful API", "Mikroservisler", "SOAP"],
      delay: 0.7,
      icon: "🔌",
      color: "from-purple-500 to-fuchsia-500",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
      ref={ref}
    >
      {/* İnteraktif arka plan */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        >
          <defs>
            <pattern
              id="tech-grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M10 0H0V10"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.3"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#tech-grid)"
            className="text-primary"
          />
        </svg>
      </div>

      {/* Parlayan elementler */}
      <motion.div
        className="absolute top-0 -right-20 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl z-0"
        animate={{
          y: [0, 40, 0],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <motion.div
        className="absolute bottom-0 left-0 w-60 h-60 bg-accent/5 rounded-full filter blur-3xl z-0"
        animate={{
          y: [0, -30, 0],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white relative inline-block">
            <span className="relative z-10">Teknik Uzmanlık Alanlarım</span>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute h-1 bg-gradient-to-r from-primary to-accent bottom-0 left-0 right-0"
            />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: category.delay }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300 relative overflow-hidden group"
              onMouseEnter={() => setActiveCategory(category.title)}
              onMouseLeave={() => setActiveCategory(null)}
              whileHover={{ y: -5 }}
            >
              {/* Arka plan efektleri */}
              <motion.div
                className={`absolute top-0 right-0 h-20 w-20 bg-gradient-to-br ${category.color} rounded-bl-full opacity-10 dark:opacity-20 -z-10 group-hover:scale-150 transition-transform duration-700`}
              />
              
              <div className="flex items-center mb-6 relative">
                <span className="text-2xl mr-2 opacity-80">{category.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 py-3 flex-grow">
                  {category.title}
                </h3>
                <motion.div 
                  className="absolute -bottom-px left-0 h-[2px] bg-gradient-to-r from-primary to-accent"
                  initial={{ width: "0%" }}
                  animate={activeCategory === category.title ? { width: "100%" } : { width: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              <ul className="space-y-3">
                {category.skills.map((skill, index) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-center text-gray-700 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-3 flex-shrink-0"></div>
                    <span className="font-medium">{skill}</span>
                  </motion.li>
                ))}
              </ul>
              
              {/* Kategori göstergesi */}
              <motion.div
                className="absolute top-3 right-3 w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent"
                animate={activeCategory === category.title ? {
                  scale: [1, 1.2, 1],
                  boxShadow: ["0 0 0 0 rgba(0, 112, 243, 0.2)", "0 0 0 4px rgba(0, 112, 243, 0.2)", "0 0 0 0 rgba(0, 112, 243, 0.2)"],
                } : {}}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Kayan Teknoloji İkonları */}
        <div className="mt-24 relative overflow-hidden">
          <h3 className="text-center text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Çalıştığım Teknolojiler
            </span>
          </h3>
          <div className="relative w-full py-6 overflow-hidden">
            {/* Gölgelendirme kenarları */}
            <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-900 z-10"></div>
            <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-900 z-10"></div>
            
            {/* Kayan içerik */}
            <motion.div 
              className="flex animate-scroll items-center space-x-16 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                x: {
                  duration: 40,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                }
              }}
            >
              {/* Teknoloji logoları */}
              {[...Array(2)].map((_, duplication) => (
                <div key={`tech-row-${duplication}`} className="flex items-center space-x-16">
                  {[
                    { name: "Java", logo: "/tech/java.svg", color: "bg-blue-600" },
                    { name: "Spring", logo: "/tech/spring.svg", color: "bg-green-500" },
                    { name: "C#", logo: "/tech/csharp.svg", color: "bg-purple-700" },
                    { name: ".NET", logo: "/tech/dotnet.svg", color: "bg-purple-500" },
                    { name: "Docker", logo: "/tech/docker.svg", color: "bg-blue-500" },
                    { name: "MySQL", logo: "/tech/mysql.svg", color: "bg-blue-800" },
                    { name: "MongoDB", logo: "/tech/mongodb.svg", color: "bg-green-600" },
                    { name: "PostgreSQL", logo: "/tech/postgresql.svg", color: "bg-blue-400" },
                    { name: "PHP", logo: "/tech/php.svg", color: "bg-indigo-600" },
                    { name: "Git", logo: "/tech/git.svg", color: "bg-red-500" },
                    { name: "RabbitMQ", logo: "/tech/rabbitmq.svg", color: "bg-orange-500" },
                    { name: "NodeJS", logo: "/tech/nodejs.svg", color: "bg-green-700" },
                  ].map((tech, index) => (
                    <motion.div
                      key={`${tech.name}-${duplication}-${index}`}
                      className="flex flex-col items-center w-16 md:w-20"
                      whileHover={{ y: -5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl shadow-md flex items-center justify-center">
                        <Image 
                          src={tech.logo} 
                          alt={`${tech.name} logo`}
                          width={64}
                          height={64}
                          className="w-full h-full object-contain p-1"
                        />
                      </div>
                      <span className="mt-2 text-xs font-medium text-gray-700 dark:text-gray-300">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* CSS animasyonu eklemek için stil etiketi */}
        <style jsx global>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
        `}</style>
      </div>
    </section>
  );
}; 