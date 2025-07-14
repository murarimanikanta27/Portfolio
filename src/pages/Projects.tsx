import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github} from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: "AdvanceSmart Home Automation with Mobile and Voice Control",
      description: " Built an IoT system for controlling home appliances via mobile app and voice commands using ESP32 and Blynk IoT ",
      image: "https://th.bing.com/th/id/OIP.Kp4TOHnGw737PYyZHJVzKwHaD9?w=331&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
      technologies: ["Arduino", "C++", "Esp32","DSA","VC02","Blynk"],
      githubUrl: "https://github.com/murarimanikanta27/Home-Automation-with-Voice-Commands-ESP32-VC02-and-Blynk-IoT",
      liveUrl: "https://www.instagram.com/reel/C_5SR54y8ZK/?igsh=MTFyamQ0YWhjZWt6bQ==",
      category: "IOT"
    },
    {
      title: "Family Visit Tracker",
      description: "A mobile application for tracking family visits accross the world.",
      image: "/images/country_visit.png",
      technologies: ["Express", "node.js", "CSS", "PostgreSQL"],
      githubUrl: "https://github.com/murarimanikanta27/Country_Visit_website",
      liveUrl: "https://github.com/murarimanikanta27/Country_Visit_website",
      category: "Backend"
    },
        {
      title: "Precision Agriculture Farming using IoT(Major Project)",
      description: "Developed a smart farming system using ESP32 and Blynk IoT for remote monitoring. Used Facebook’s Prophet model for crop prediction ,future crop prediction with Randomforest and optimized irrigation based on weather and soil conditions. Displayed paddy crop growth stages on Blynk IoT for real-time tracking.",
      image: "/images/precisionagriculture.jpg",
      technologies: ["iot","C++", "arduino","esp32","OPPS","prophet", "Blynk IoT","Espnow","Randomforest"],
      githubUrl: "https://github.com/murarimanikanta27/Bluetooth-Rc-Car-with-3sp32",
      liveUrl: "https://github.com/murarimanikanta27/Precision-agriculture-farming",
      category: "IOT"
    },
    {
      title: "Simon Game",
      description: "A fun and interactive Simon Game built with React.",
      image: "/images/Simon.png",
      technologies: ["jquery","CSS", "html", "Bootstrap"],
      githubUrl: "https://github.com/murarimanikanta27/SimonGame",
      liveUrl: "https://murarimanikanta27.github.io/SimonGame/",
      category: "frontend"
    },
    {
      title: "Drum Kit",
      description: "A fun and interactive Drum Kit built with JavaScript.",
      image: "/images/DrumKit.png",
      technologies: ["javascript","CSS", "html", "Bootstrap"],
      githubUrl: "https://github.com/murarimanikanta27/Drum-Kit",
      liveUrl: "https://murarimanikanta27.github.io/Drum-Kit/",
      category: "frontend"
    },
    {
      title: "NotePad",
      description: "A fun and interactive Notepad built with JavaScript.",
      image: "/images/Notepad.png",
      technologies: ["javascript","CSS", "html", "React js","React Components"],
      githubUrl: "https://github.com/murarimanikanta27/Notepad",
      liveUrl: "https://github.com/murarimanikanta27/Notepad",
      category: "React js"
    },
     {
      title: "Hand gesture control car",
      description: "Hand gesture control car using Arduino esp32 and MPU6050",
      image: "https://i.ytimg.com/vi/wZurHScVyAM/hqdefault.jpg",
      technologies: ["iot","C++", "mpu6050", "arduino","esp32"],
      githubUrl: "https://github.com/murarimanikanta27/gesture-control-car-with-MPU6050-with-the-help-o-ESP-NOW-protocol",
      liveUrl: "https://github.com/murarimanikanta27/gesture-control-car-with-MPU6050-with-the-help-o-ESP-NOW-protocol",
      category: "IOT"
    },
    {
      title: "Bluetooth Controlled Car",
      description: "High Speed Bluetooth controlled car using Arduino and ESP32",
      image: "https://projects.arduinocontent.cc/cover-images/1f887c02-812e-411d-ad69-7be71e3715f5.jpg",
      technologies: ["iot","C++", "arduino","esp32","OPPS"],
      githubUrl: "https://github.com/murarimanikanta27/Bluetooth-Rc-Car-with-3sp32",
      liveUrl: "https://youtube.com/shorts/kR77am5m9bo?si=FaryDkKVBiM1SDu2",
      category: "IOT"
    },
      {
      title: "Advanced RC car with NRF24l01 with range of 1.2km",
      description: "Designed a high-performance RC car with enhanced range and precision control using NRF24L01 modules and Implemented advanced features such as remote acceleration and directional controls ",
      image: "https://content.instructables.com/FT3/MVJC/J0COJU8F/FT3MVJCJ0COJU8F.jpg?auto=webp",
      technologies: ["iot","C++", "arduino","esp32","NRF24l01","OPPS"],
      githubUrl: "https://github.com/murarimanikanta27/RC-Car-with-the-range-1.2km",
      liveUrl: "https://youtube.com/shorts/rI42KHt-OA8?si=K7cMRRTArEPDJMgR",
      category: "IOT"
    },
          {
      title: "Wireless door authentication system using esp32 arduinouno and Nrf24lo1",
      description: "Developed a biometric-based security system using Arduino Uno, Fingerprint Module, and NRF24L01 for secure access control over a 1.2 km range",
      image: "/images/wirelessdoor.png",
      technologies: ["iot","C++", "arduino","esp32","NRF24l01","OPPS"],
      githubUrl: "https://github.com/murarimanikanta27/Wireless-Door-Authenticator-with-NRF24L01-Keypad-and-Fingerprint-Sensor",
      liveUrl: "https://www.youtube.com/watch?v=DMtDtZ8513k",
      category: "IOT"
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my work, featuring applications and solutions built with modern technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-white/30 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-yellow-400/20 rounded-full text-white text-sm border border-gray-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 text-white"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 rounded-lg transition-all duration-300 text-gray-900 font-medium"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >


        </motion.div>
      </div>
    </div>
  );
};
