import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Medal } from 'lucide-react';

export const Awards: React.FC = () => {
  const awards = [
     {
      title: "Sensor Guided Robotics",
      organization: "GITAM",
      year: "2022",
      description: "Achieved 1st place in the Sensor Guided Robotics competition, showcasing skills in robotics and automation."
    },{
      title: "CODE-A-THON",
      organization: "GITAM",
      year: "2024",
      description: "Secured 2nd place in GITAM's Code-A-Thon by solving complex algorithmic and data structure challenges."
    },
   
    {
      title: "Smart Hackathon GITAM",
      organization: "GITAM University",
      year: "2023",
      description: "Recognized for developing innovative solutions in the Smart Hackathon and Secured 3rd place among all participants."
    }
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Awards & Recognition</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Honors and achievements that reflect my dedication to excellence in technology.
          </p>
        </motion.div>

        <div className="space-y-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-shrink-0">
                  {index === 0 && <Trophy className="text-yellow-500" size={48} />}
                  {index === 1 && <Star className="text-yellow-400" size={48} />}
                  {index === 2 && <Medal className="text-yellow-300" size={48} />}
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {award.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                    <span className="text-gray-300 font-medium">{award.organization}</span>
                    <span className="hidden sm:inline text-gray-500">•</span>
                    <span className="text-gray-400">{award.year}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{award.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};