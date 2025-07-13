import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Heart, Satellite, RadioTower, FileText } from 'lucide-react';

export const About: React.FC = () => {
  const skills = [
    'DBMS', 'React', 'Jquery', 'Node.js', 'Python', 'PostgreSQL', 'C/C++', 'JavaScript', 'HTML', 'CSS', 'Express.js',
    'REST APIs', 'Bootstrap', 'Git', 'GitHub', 'MySQL', 'Operating Systems', 'Data Structures', 'Algorithms',
    'IoT', 'Arduino', 'ESP32', 'Web Development', 'Full Stack Development', 'Problem Solving',
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Computer Science and Engineering Graduate and Tech YouTuber with hands-on experience in full-stack development and IoT 
            automation. Skilled in C/C++, JavaScript, Node.js, React, and cloud integration. Quick learner, strong 
            collaborator, and eager to contribute globally.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <h2 className="text-2xl font-bold text-white mb-4">My Story</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              I'm a Computer Science and Engineering Graduate at <span className="text-yellow-400 font-semibold">GITAM University</span> with a strong interest in technology — especially <span className="text-yellow-400 font-semibold">IoT</span> and <span className="text-yellow-400 font-semibold">web development</span>. I enjoy building projects like <span className="text-yellow-400 font-medium">smart home systems</span>, <span className="text-yellow-400 font-medium">RC cars</span>, and <span className="text-yellow-400 font-medium">full-stack websites</span> using tools like <span className="text-yellow-400">ESP32</span>, <span className="text-yellow-400">React</span>, <span className="text-yellow-400">Node.js</span>, and <span className="text-yellow-400">PostgreSQL</span>.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              I'm also a <span className="text-yellow-400 font-semibold">YouTuber at Robic World</span>, where I share tech tutorials and my DIY projects to help others learn.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              I've also had the honor of winning awards at GITAM, including 
              <span className="text-green-400 font-semibold"> 1st place in a Robotics Workshop </span>
              and 
              <span className="text-blue-400 font-semibold"> 2nd place in Code-A-Thon </span>
              for solving algorithmic challenges.
            </p>

            {/* Resume Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mt-6"
            >
              <a
                href="/public/RESUME1.1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-black font-semibold rounded-lg transition-all duration-300"
              >
                <FileText size={20} className="mr-2" />
                View / Download Resume
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center mb-3">
                <Code className="text-blue-400 mr-3" size={24} />
                <Code className="text-yellow-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Programming and Problem Solving</h3>
              </div>
              <p className="text-gray-300">
                Skilled in Data Structures & Algorithms (DSA) and SQL for efficient and optimized solutions. <br />
                Full-stack developer, JavaScript, React, Node.js, PostgreSQL.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center mb-3">
                <RadioTower className="text-purple-400 mr-3" size={24} />
                <Satellite className="text-yellow-500 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">IoT</h3>
              </div>
              <p className="text-gray-300">Arduino UNO, Arduino Mega, ESP32, ESP8266, Raspberry Pi, Arduino IDE</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center mb-3">
                <Zap className="text-yellow-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Tech YouTuber</h3>
              </div>
              <p className="text-gray-300">
                I create tech tutorials and share my DIY projects to help others learn.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
        >
          <div className="flex items-center mb-6">
            <Heart className="text-red-400 mr-3" size={24} />
            <h2 className="text-2xl font-bold text-white">Skills & Technologies</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                className="bg-gradient-to-r from-yellow-500/20 to-yellow-400/20 rounded-lg p-3 text-center border border-gray-600/30"
              >
                <span className="text-white font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
