import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const nameVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          variants={nameVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <div className="mb-8 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl">
  <img
    src="/dist/assets/images/1723995194290 1.jpg"
    alt="Profile"
    className="w-full h-full object-cover"
  />
</div>

              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </motion.div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            Murari Manikanta Chowdry T
          </h1>
        </motion.div>

        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light">
            Computer Science and Engineering Graduate and Tech YouTuber
          </h2>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
           Computer Science and Engineering Graduate and Tech YouTuber with hands-on experience in full-stack development and IoT automation. Skilled in C/C++, JavaScript, Node.js, React, and cloud integration. Quick learner, strong collaborator, and eager to contribute globally
          </p>
        </motion.div>

        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Link
            to="/projects"
            className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 rounded-full font-medium hover:from-yellow-600 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 border-2 border-yellow-400/50 text-yellow-400 rounded-full font-medium hover:bg-yellow-400/10 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </Link>
        </motion.div>

        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center space-x-6 mb-12"
        >
          <a
            href="https://github.com/murarimanikanta27"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800/50 hover:bg-yellow-400/20 border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-110"
          >
            <Github size={24} className="text-gray-300 hover:text-yellow-400 transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/murari-manikanta-chowdary-tamminidi-8a9828235/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800/50 hover:bg-yellow-400/20 border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin size={24} className="text-gray-300 hover:text-yellow-400 transition-colors" />
          </a>
          <a
  href="https://www.youtube.com/@ROBIC_WORLD"
  target="_blank"
  rel="noopener noreferrer"
  className="p-3 rounded-full bg-gray-800/50 hover:bg-yellow-400/20 border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-110"
>
  <Youtube size={24} className="text-gray-300 hover:text-yellow-400 transition-colors" />
</a>
          <a
            href="mailto:murari.tamminidi27@gmail.com"
            className="p-3 rounded-full bg-gray-800/50 hover:bg-yellow-400/20 border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-110"
          >
            <Mail size={24} className="text-gray-300 hover:text-yellow-400 transition-colors" />
          </a>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <ArrowDown size={32} className="text-gray-400" />
        </motion.div>
      </div>
    </div>
  );
};