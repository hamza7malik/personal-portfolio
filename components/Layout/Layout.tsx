import React, {ReactNode} from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/Footer';
import FloatingButtons from '../Banner/FloatingButtons/FloatingButtons';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({children}: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar />
      <FloatingButtons />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
