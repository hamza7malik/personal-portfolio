import React, {ReactNode} from 'react';
import {NavigationBar, FloatingButtons, Footer} from '../../components';

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
