import React, { createContext, useContext, useState, useEffect } from 'react';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  description: string;
  imageUrl?: string;
}

interface CertificateContextType {
  certificates: Certificate[];
  addCertificate: (certificate: Omit<Certificate, 'id'>) => void;
  removeCertificate: (id: string) => void;
}

const CertificateContext = createContext<CertificateContextType | undefined>(undefined);

export const CertificateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-certificates');
    if (saved) {
      setCertificates(JSON.parse(saved));
    }
  }, []);

  const addCertificate = (certificate: Omit<Certificate, 'id'>) => {
    const newCertificate = {
      ...certificate,
      id: Date.now().toString(),
    };
    const updated = [...certificates, newCertificate];
    setCertificates(updated);
    localStorage.setItem('portfolio-certificates', JSON.stringify(updated));
  };

  const removeCertificate = (id: string) => {
    const updated = certificates.filter(cert => cert.id !== id);
    setCertificates(updated);
    localStorage.setItem('portfolio-certificates', JSON.stringify(updated));
  };

  return (
    <CertificateContext.Provider value={{ certificates, addCertificate, removeCertificate }}>
      {children}
    </CertificateContext.Provider>
  );
};

export const useCertificates = () => {
  const context = useContext(CertificateContext);
  if (context === undefined) {
    throw new Error('useCertificates must be used within a CertificateProvider');
  }
  return context;
};
