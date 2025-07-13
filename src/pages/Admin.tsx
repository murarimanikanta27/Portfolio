import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Plus, Trash2, Shield, Award } from 'lucide-react';
import { useCertificates } from '../context/CertificateContext';

export const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    issuer: '',
    description: '',
    imageUrl: ''
  });

  const { certificates, addCertificate, removeCertificate } = useCertificates();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Manikanta@123') {
      setIsAuthenticated(true);
      setPassword('');
    } else {
      alert('Invalid password');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addCertificate(formData);
    setFormData({
      title: '',
      issuer: '',
      description: '',
      imageUrl: ''
    });
    alert('Certificate added successfully!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-24 px-4 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 max-w-md w-full"
        >
          <div className="text-center mb-8">
            <div className="p-4 bg-red-500/20 rounded-full w-fit mx-auto mb-4">
              <Lock className="text-red-400" size={32} />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Admin Access<br />Only Murari Manikanta Can Access this</h1>
            <p className="text-gray-300">Enter password to access admin panel</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-white font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors"
                placeholder="Enter admin password"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 rounded-lg text-gray-900 font-medium transition-all duration-300"
            >
              <Shield size={20} />
              <span>Login</span>
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold text-white">Admin Panel</h1>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-lg border border-red-500/30 transition-colors"
            >
              Logout
            </button>
          </div>
          <p className="text-gray-300 mt-2">Manage certificates and portfolio content</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Add Certificate Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <div className="flex items-center mb-6">
              <Plus className="text-green-400 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-white">Add Certificate</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-white font-medium mb-2">
                  Certificate Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white"
                  placeholder="e.g., AWS Certified Solutions Architect"
                />
              </div>

              <div>
                <label htmlFor="issuer" className="block text-white font-medium mb-2">
                  Issuing Organization
                </label>
                <input
                  type="text"
                  id="issuer"
                  name="issuer"
                  value={formData.issuer}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white"
                  placeholder="e.g., Amazon Web Services"
                />
              </div>

              <div>
                <label htmlFor="imageUrl" className="block text-white font-medium mb-2">
                  Certificate Image Path
                </label>
                <input
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white"
                  placeholder="https://example.com/certificate.jpg"
                />
                {formData.imageUrl && (
                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-gray-300">
                      <strong>Path:</strong> {formData.imageUrl}
                    </p>
                    {/\.(pdf)$/i.test(formData.imageUrl) ? (
                      <iframe
                        src={formData.imageUrl}
                        title="PDF Preview"
                        className="w-full h-64 rounded-lg border border-white/20"
                      />
                    ) : /\.(jpg|jpeg|png|gif|webp)$/i.test(formData.imageUrl) ? (
                      <img
                        src={formData.imageUrl}
                        alt="Certificate Preview"
                        className="rounded-lg border border-white/20 max-w-full h-auto"
                      />
                    ) : (
                      <div className="text-gray-300 text-sm italic">
                        Unsupported file type. Please provide a valid image or PDF URL.
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="description" className="block text-white font-medium mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white resize-none"
                  placeholder="Brief description of the certification..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 rounded-lg text-gray-900 font-medium"
              >
                <Plus size={20} />
                <span>Add Certificate</span>
              </button>
            </form>
          </motion.div>

          {/* Current Certificates */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <div className="flex items-center mb-6">
              <Award className="text-yellow-500 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-white">Current Certificates</h2>
            </div>

            {certificates.length === 0 ? (
              <div className="text-center py-8">
                <Award size={48} className="text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400">No certificates added yet</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {certificates.map((certificate) => (
                  <div
                    key={certificate.id}
                    className="bg-white/5 rounded-lg p-4 border border-white/10"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-grow">
                        <h3 className="text-white font-semibold mb-1">{certificate.title}</h3>
                        <p className="text-gray-300 text-sm mb-1">{certificate.issuer}</p>
                      </div>
                      <button
                        onClick={() => removeCertificate(certificate.id)}
                        className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Debug List of All Paths */}
            {certificates.length > 0 && (
              <div className="mt-8 bg-white/5 p-4 rounded-lg border border-white/10 text-sm text-gray-300">
                <h2 className="font-semibold text-white mb-2">All Stored Paths:</h2>
                <ul className="list-disc pl-6 space-y-1">
                  {certificates.map((cert) => (
                    <li key={cert.id}>{cert.imageUrl}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
