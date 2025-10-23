import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";

// sakura thems component
const Petal = ({ delay }) => (
  <motion.div
    className="absolute text-pink-300 select-none"
    initial={{ y: -50, x: Math.random() * window.innerWidth, opacity: 0 }}
    animate={{
      y: [null, window.innerHeight + 50],
      x: [null, Math.random() * window.innerWidth],
      opacity: [0, 1, 1, 0],
      rotate: [0, 360],
    }}
    transition={{
      duration: 5 + Math.random() * 3,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  >
    🌸
  </motion.div>
);

// navbar sections
const Navbar = ({ currentSection, setSection }) => {
  const links = ["Home", "About", "Projects", "Contact"];
  return (
    <nav className="fixed top-0 left-0 w-full bg-pink-100/70 backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        <div className="flex items-center gap-3">
          <img
            src="/logo.jpg"
            alt="logo"
            className="w-9 h-9 rounded-full shadow-md border border-pink-200"
          />
          <span className="font-bold text-pink-700 text-xl">
            PetalSync.dev
          </span>
        </div>

        <ul className="flex gap-8 font-medium text-pink-800">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => setSection(link.toLowerCase())}
                className={`transition-all duration-300 hover:text-pink-500 ${
                  currentSection === link.toLowerCase()
                    ? "text-pink-600 underline underline-offset-4"
                    : ""
                }`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

// section wrappering slimn shady
const SectionWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -40 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
    className="flex flex-col items-center justify-center min-h-screen pt-24 text-center px-6"
  >
    {children}
  </motion.div>
);

export default function App() {
  const [section, setSection] = useState("home");
  const [currentImage, setCurrentImage] = useState(0);

  const profileImages = [
    "/FABICON_JUSTIN YURI_F.png",
    "/pic 2.jpg",
    "/pic 3.jpg",
  ];

  // smooth slideshow transition 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % profileImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-pink-50 via-pink-100 to-pink-200 overflow-hidden font-sans text-gray-800">
      {/* sakura petals */}
      {Array.from({ length: 25 }).map((_, i) => (
        <Petal key={i} delay={i * 0.5} />
      ))}

      <Navbar currentSection={section} setSection={setSection} />

      <AnimatePresence mode="wait">
        {/*  home */}
        {section === "home" && (
          <SectionWrapper key="home">
            <motion.h1
              className="text-6xl font-bold text-pink-700 mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Welcome to{" "}
              <span className="text-pink-600">PetalSync.dev</span>
            </motion.h1>
            <p className="text-lg text-gray-600 mb-6">
              Where petals fall... and commits rise.🌸
              Version 1.0: Petals Deployed Successfully.🌸
            </p>
            <Button
              onClick={() => setSection("about")}
              className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-6 py-3 shadow-md"
            >
              Get to Know Me
            </Button>
          </SectionWrapper>
        )}

        {/*  ABOUT SECTION (with slideshow) ":"::)))*/}
        {section === "about" && (
          <SectionWrapper key="about">
            <div className="relative w-64 h-64 mb-8 overflow-hidden shadow-xl ring-4 ring-pink-300 rounded-xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={profileImages[currentImage]}
                  alt="profile"
                  className="absolute inset-0 w-full h-full object-cover rounded-xl"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 25px rgba(255, 182, 193, 0.7)",
                    transition: { duration: 0.4 },
                  }}
                />
              </AnimatePresence>
            </div>

            <h2 className="text-3xl font-bold text-pink-700 mb-3">
              JUSTIN YURI F. FABICON
            </h2>
            <p className="text-gray-600 mb-4">BSCS 3-2 | CVSU Bacoor</p>
            <p className="max-w-2xl text-gray-700 leading-relaxed">
              HELLO MY NAME IS JUSTIN YURI F. FABICON IM A CVSU BACOOR COMP SCI STUDENT.
              THE CODING LANGUAGE THAT I KNOW ARE JAVA,PYTHON,CSS,HTML AND ETC.
            </p>
          </SectionWrapper>
        )}

        {/* DE PROJECTS SECTION */}
        {section === "projects" && (
          <SectionWrapper key="projects">
            <h2 className="text-3xl font-bold text-pink-700 mb-8">
              My Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
              {/* Project 1 */}
              <Card className="bg-white/90 backdrop-blur-md shadow-lg hover:shadow-pink-300 hover:scale-[1.02] transition-all border-2 border-pink-200">
                <CardHeader>
                  <CardTitle className="text-pink-700 text-xl">
                    Very 1st full html project
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.img
                    src="log in.jpg"
                    alt="Student Dashboard"
                    className="w-full h-48 object-cover rounded-md mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  <p className="text-gray-600 mb-4">
                    My very 1st html css coding project which im very proud of.
                  </p>
                  <div className="flex gap-3 justify-center">
                    <Button
                      asChild
                      className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-4"
                    >
                      <a
                        href="https://jyuriff.github.io/lo-gin"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        🌐 Live Demo
                      </a>
                    </Button>
                    <Button
                      asChild
                      className="bg-pink-100 border border-pink-400 text-pink-700 hover:bg-pink-200 rounded-full px-4"
                    >
                      <a
                        href="https://github.com/JYURIFF/lo-gin"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        💻 View Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Project 2 */}
              <Card className="bg-white/90 backdrop-blur-md shadow-lg hover:shadow-pink-300 hover:scale-[1.02] transition-all border-2 border-pink-200">
                <CardHeader>
                  <CardTitle className="text-pink-700 text-xl">
                    Resume Generator
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.img
                    src="resume pic.jpg"
                    alt="Resume Generator"
                    className="w-full h-48 object-cover rounded-md mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  <p className="text-gray-600 mb-4">
                    A website that you use to make a resume with little to no problems still in trial.
                  </p>
                  <div className="flex gap-3 justify-center">
                    <Button
                      asChild
                      className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-4"
                    >
                      <a
                        href="https://jyuriff.github.io/resume/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        🌐 Live Demo
                      </a>
                    </Button>
                    <Button
                      asChild
                      className="bg-pink-100 border border-pink-400 text-pink-700 hover:bg-pink-200 rounded-full px-4"
                    >
                      <a
                        href="https://github.com/JYURIFF/resume.git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        💻 View Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </SectionWrapper>
        )}

        {/* WA CONTACT SECTION */}
        {section === "contact" && (
          <SectionWrapper key="contact">
            <Card className="bg-white/90 backdrop-blur-md p-8 shadow-lg border-2 border-pink-200 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-pink-700 mb-2">
                  Let’s Connect 🌸
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  I’d love to collaborate or hear your feedback!
                </p>
                <Button
                  asChild
                  className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-md"
                >
                  <a href="mailto:justinyurifabicon422@gmail.com">
                    Send a Message
                  </a>
                </Button>
              </CardContent>
            </Card>
          </SectionWrapper>
        )}
      </AnimatePresence>
    </div>
  );
}
