"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [floatingElements, setFloatingElements] = useState<any[]>([]);

  useEffect(() => {
    // Rasgele floating elementleri client tarafında oluştur
    const elements = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 50) + 20,
      x: Math.floor(Math.random() * 100),
      y: Math.floor(Math.random() * 100),
      delay: Math.random() * 2,
      duration: Math.random() * 8 + 10,
    }));
    
    setFloatingElements(elements);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError("");

    // Form validation
    if (!formState.name || !formState.email || !formState.message) {
      setFormError("Lütfen tüm alanları doldurun.");
      setIsSubmitting(false);
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      setFormError("Lütfen geçerli bir e-posta adresi girin.");
      setIsSubmitting(false);
      return;
    }

    // Simulating a form submission with a timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      
      // Reset the submission state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "E-posta",
      value: "eyyup.sert@example.com",
      ctaText: "E-posta Gönder",
      ctaLink: "mailto:eyyup.sert@example.com",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "LinkedIn",
      value: "linkedin.com/in/eyyupsert",
      ctaText: "Profili Görüntüle",
      ctaLink: "https://www.linkedin.com/in/eyyupsert",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
          />
        </svg>
      ),
      title: "GitHub",
      value: "github.com/eyyupsert",
      ctaText: "Projeleri İncele",
      ctaLink: "https://github.com/eyyupsert",
    },
  ];

  const renderFloatingElements = () => {
    if (floatingElements.length === 0) {
      return null;
    }

    return floatingElements.map((element) => (
      <motion.div
        key={element.id}
        className="absolute rounded-full bg-gradient-radial from-primary/10 to-transparent dark:from-primary/20 dark:to-transparent pointer-events-none"
        style={{
          width: element.size,
          height: element.size,
          left: `${element.x}%`,
          top: `${element.y}%`,
          opacity: 0.3,
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          y: { 
            duration: element.duration, 
            repeat: Infinity, 
            repeatType: "reverse", 
            delay: element.delay 
          },
          x: { 
            duration: element.duration * 1.3, 
            repeat: Infinity, 
            repeatType: "reverse", 
            delay: element.delay * 0.7 
          },
          opacity: { 
            duration: element.duration * 0.6, 
            repeat: Infinity, 
            repeatType: "reverse", 
            delay: element.delay * 0.3 
          },
        }}
      />
    ));
  };

  return (
    <section 
      id="contact" 
      className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 opacity-5 dark:opacity-10"
        >
          <defs>
            <pattern
              id="contact-grid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M20 0H0V20"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.2"
                className="text-primary"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-grid)" />
        </svg>

        {/* Floating elements */}
        {renderFloatingElements()}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm bg-primary/10 dark:bg-primary/20 px-4 py-1.5 rounded-full inline-block mb-2 shadow-sm backdrop-blur-sm">
            İletişim
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white relative inline-block">
            <span className="relative z-10">Benimle İletişime Geçin</span>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute h-1 bg-gradient-to-r from-primary to-accent bottom-0 left-0 right-0"
            />
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Birlikte çalışmak için benimle iletişime geçin. Projeleriniz hakkında konuşmak için hazırım.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 relative">
            <div className="space-y-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.4, delay: 0.2 + 0.1 * index }}
                  className="flex items-start p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden group"
                >
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 bg-gradient-to-r from-primary/5 to-accent/5 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      opacity: [0, 0.1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 bg-gradient-to-r from-primary to-accent w-4 h-16 opacity-50" />
                  </div>
                  
                  <div className="flex-shrink-0 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg mr-4 shadow-inner">
                    {method.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      {method.value}
                    </p>
                    <a
                      href={method.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:underline font-medium group/link"
                    >
                      {method.ctaText}
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
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="flex items-center space-x-4 mt-8 justify-center lg:justify-start"
              >
                {[
                  {
                    name: "Twitter",
                    icon: (
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 14-7.496 14-13.986 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59l-.047-.02z" />
                      </svg>
                    ),
                    href: "https://twitter.com/eyyupsert",
                  },
                  {
                    name: "LinkedIn",
                    icon: (
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ),
                    href: "https://www.linkedin.com/in/eyyupsert",
                  },
                  {
                    name: "GitHub",
                    icon: (
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    ),
                    href: "https://github.com/eyyupsert",
                  },
                  {
                    name: "Medium",
                    icon: (
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                      </svg>
                    ),
                    href: "https://medium.com/@eyyupsert",
                  },
                ].map((social, idx) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary transition-colors duration-300 transform hover:scale-110"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, 5, -5, 0],
                      transition: { duration: 0.3 }
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, delay: 0.7 + idx * 0.1 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-3 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/5 rounded-full filter blur-xl" />
              <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-accent/5 rounded-full filter blur-xl" />
              
              <div className="relative">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Mesaj Gönder
                </h3>

                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-12"
                  >
                    <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Mesajınız Gönderildi!
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      En kısa sürede size geri dönüş yapacağım. Teşekkürler!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Adınız"
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border ${
                          focusedField === "name" 
                            ? "border-primary shadow-[0_0_0_1px_rgba(0,112,243,0.2)]" 
                            : "border-gray-200 dark:border-gray-600"
                        } rounded-lg outline-none transition-all duration-200`}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                      />
                      {focusedField === "name" && (
                        <motion.div 
                          layoutId="focus-highlight"
                          className="absolute -inset-px rounded-lg border border-primary opacity-60 pointer-events-none"
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </div>
                    
                    <div className="relative">
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="E-posta Adresiniz"
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border ${
                          focusedField === "email" 
                            ? "border-primary shadow-[0_0_0_1px_rgba(0,112,243,0.2)]" 
                            : "border-gray-200 dark:border-gray-600"
                        } rounded-lg outline-none transition-all duration-200`}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                      />
                      {focusedField === "email" && (
                        <motion.div 
                          layoutId="focus-highlight"
                          className="absolute -inset-px rounded-lg border border-primary opacity-60 pointer-events-none"
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </div>
                    
                    <div className="relative">
                      <motion.textarea
                        whileFocus={{ scale: 1.01 }}
                        rows={5}
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Mesajınız"
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border ${
                          focusedField === "message" 
                            ? "border-primary shadow-[0_0_0_1px_rgba(0,112,243,0.2)]" 
                            : "border-gray-200 dark:border-gray-600"
                        } rounded-lg outline-none transition-all duration-200`}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                      />
                      {focusedField === "message" && (
                        <motion.div 
                          layoutId="focus-highlight"
                          className="absolute -inset-px rounded-lg border border-primary opacity-60 pointer-events-none"
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </div>

                    {formError && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm"
                      >
                        {formError}
                      </motion.div>
                    )}

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-6 text-white bg-primary hover:bg-primary-dark rounded-lg shadow-lg transition-transform duration-200 relative overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Gönderiliyor...
                          </>
                        ) : (
                          "Mesaj Gönder"
                        )}
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
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}; 