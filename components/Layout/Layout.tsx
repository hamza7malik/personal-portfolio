import React, {ReactNode, useState, useEffect} from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/Footer';
import FloatingButtons from '../Banner/FloatingButtons/FloatingButtons';
import ContactModal from '../ContactModal/ContactModal';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({children}: LayoutProps) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenContact = () => {
      setIsContactModalOpen(true);
    };

    window.addEventListener('openContact', handleOpenContact);

    return () => {
      window.removeEventListener('openContact', handleOpenContact);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar />
      <FloatingButtons />
      <main className="flex-grow">{children}</main>
      <Footer />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
};

export default Layout;
