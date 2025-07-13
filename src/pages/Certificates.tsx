
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Building, X } from 'lucide-react';

const isPDF = (url: string) => url?.toLowerCase().endsWith('.pdf');

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  description: string;
  imageUrl: string;
}

export const Certificates: React.FC = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [fullscreenFile, setFullscreenFile] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    fetch('/certificates.json')
      .then(res => res.json())
      .then(data => setCertificates(data))
      .catch(err => console.error('Error loading certificates:', err));
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize(); // set on initial load
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Certificates</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional certifications and achievements that showcase my expertise and commitment to continuous learning.
          </p>
        </motion.div>

        {certificates.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center py-16"
          >
            <Award size={64} className="text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-300 mb-2">No certificates yet</h3>
            <p className="text-gray-400">Certificates will appear here once added to the JSON file.</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((certificate, index) => (
              <motion.div
                key={certificate.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/20"
              >
                {certificate.imageUrl && (
                  <div
                    className="mb-4 overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                    onClick={() => setFullscreenFile(certificate.imageUrl)}
                  >
                    {isPDF(certificate.imageUrl) ? (
                      isMobile ? (
                        <div className="flex flex-col items-center justify-center h-48 bg-black text-white rounded-lg">
                          <div className="text-sm mb-2">
                            {decodeURIComponent(certificate.imageUrl.split('/').pop() || '')}
                          </div>
                          <button
                            className="bg-blue-500 text-white px-4 py-1 rounded"
                            onClick={() => setFullscreenFile(certificate.imageUrl)}
                          >
                            Preview
                          </button>
                        </div>
                      ) : (
                        <div className="relative w-full h-48 rounded-lg overflow-hidden bg-white">
                          <iframe
                            src={certificate.imageUrl + "#toolbar=0"}
                            title="PDF Preview"
                            className="absolute top-0 left-0 w-full h-full"
                            style={{ pointerEvents: 'none', border: 'none', background: 'white' }}
                          />
                          <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                            {decodeURIComponent(certificate.imageUrl.split('/').pop() || '')}
                          </div>
                        </div>
                      )
                    ) : (
                      <img
                        src={certificate.imageUrl}
                        alt={certificate.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    )}
                  </div>
                )}

                <div className="flex items-start mb-3">
                  <Award className="text-yellow-500 mr-3 mt-1" size={20} />
                  <h3 className="text-lg sm:text-xl font-semibold text-white">{certificate.title}</h3>
                </div>

                <div className="flex items-center mb-4">
                  <Building className="text-gray-400 mr-2" size={16} />
                  <span className="text-gray-300">{certificate.issuer}</span>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">{certificate.description}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {fullscreenFile && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setFullscreenFile(null)}
              className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-[95vw] max-h-[90vh] w-full h-full flex items-center justify-center bg-white rounded-xl shadow-lg"
            >
              {isPDF(fullscreenFile) ? (
                <iframe
                  src={fullscreenFile}
                  title="Fullscreen PDF"
                  className="w-full h-full rounded-xl border-0"
                />
              ) : (
                <img
                  src={fullscreenFile}
                  alt="Fullscreen Certificate"
                  className="max-w-full max-h-full rounded-xl"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
